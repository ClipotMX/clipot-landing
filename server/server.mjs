import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import crypto from "node:crypto";
import { promises as fs } from "node:fs";
import path from "node:path";
import http from "node:http";
import { Server as SocketIOServer } from "socket.io";
import nodemailer from "nodemailer";
import dotenv from "dotenv";
import helmet from "helmet";
import rateLimit from "express-rate-limit";
import { createClient as createSupabaseClient } from "@supabase/supabase-js";
import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";
import QRCode from "qrcode";

dotenv.config();
const app = express();
const httpServer = http.createServer(app);
const PORT = process.env.PORT || 3001;
const ORIGINS = (process.env.ORIGINS || "http://localhost:8080,http://localhost:5173,http://localhost:4173")
  .split(",")
  .map((s) => s.trim())
  .filter(Boolean);

const dataDir = path.resolve(process.cwd(), "server", "data");
const contactsFile = path.join(dataDir, "contacts.json");
let writeQueue = Promise.resolve();
const chatsFile = path.join(dataDir, "chats.json");
let chatWriteQueue = Promise.resolve();
const adminTokens = new Map();
const SUPABASE_URL = process.env.SUPABASE_URL || "";
const SUPABASE_KEY = process.env.SUPABASE_SERVICE_ROLE || "";
const supabase = SUPABASE_URL && SUPABASE_KEY ? createSupabaseClient(SUPABASE_URL, SUPABASE_KEY) : null;
const JWT_SECRET = process.env.JWT_SECRET || "dev-secret";
const usersFile = path.join(dataDir, "users.json");
const resetsFile = path.join(dataDir, "resets.json");
const postsFile = path.join(dataDir, "posts.json");
const mediaFile = path.join(dataDir, "media.json");
const credsFile = path.join(dataDir, "credentials.json");
const categoriesFile = path.join(dataDir, "categories.json");
const tagsFile = path.join(dataDir, "tags.json");
const POSTS_FILE = postsFile;

async function ensureDataFile() {
  await fs.mkdir(dataDir, { recursive: true });
  try {
    await fs.access(contactsFile);
  } catch {
    await fs.writeFile(contactsFile, "[]", "utf8");
  }
  try {
    await fs.access(chatsFile);
  } catch {
    await fs.writeFile(chatsFile, "[]", "utf8");
  }
  try {
    await fs.access(usersFile);
  } catch {
    await fs.writeFile(usersFile, "[]", "utf8");
  }
  try {
    await fs.access(resetsFile);
  } catch {
    await fs.writeFile(resetsFile, "[]", "utf8");
  }
  for (const f of [postsFile, mediaFile, credsFile]) {
    try {
      await fs.access(f);
    } catch {
      await fs.writeFile(f, "[]", "utf8");
    }
  }
  for (const f of [categoriesFile, tagsFile]) {
    try {
      await fs.access(f);
    } catch {
      await fs.writeFile(f, "[]", "utf8");
    }
  }
}

function sanitizeText(s) {
  if (typeof s !== "string") return "";
  const trimmed = s.trim();
  // Escape dangerous characters (basic)
  return trimmed
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/&/g, "&amp;");
}

function validatePayload(body) {
  const errors = [];
  const name = String(body.name || "").trim();
  const email = String(body.email || "").trim().toLowerCase();
  const company = String(body.company || "").trim();
  const phone = String(body.phone || "").trim();
  const service = String(body.service || "").trim();
  const message = String(body.message || "").trim();

  if (!name || name.length < 2) errors.push("El nombre es obligatorio y debe tener 2+ caracteres.");
  if (!email || !email.includes("@")) errors.push("Email inválido.");
  if (!message || message.length < 10) errors.push("El mensaje debe tener al menos 10 caracteres.");

  return {
    errors,
    value: {
      name: sanitizeText(name),
      email: sanitizeText(email),
      company: sanitizeText(company),
      phone: sanitizeText(phone),
      service: sanitizeText(service),
      message: sanitizeText(message),
    },
  };
}

app.use(express.json({ limit: "200kb" }));
app.use(cookieParser());
app.use(helmet());
app.use(
  cors({
    origin: ORIGINS,
    credentials: true,
  })
);
const adminLimiter = rateLimit({ windowMs: 60 * 1000, limit: 20 });
app.use("/api/admin/", adminLimiter);

const io = new SocketIOServer(httpServer, {
  cors: {
    origin: ORIGINS,
    credentials: true,
  },
});

io.on("connection", (socket) => {
  const token = socket.handshake.auth?.token;
  if (isValidAdminToken(token)) {
    socket.join("admins");
    socket.data.isAdmin = true;
  }
  (async () => {
    if (supabase && token && !socket.data.isAdmin) {
      const { data, error } = await supabase.auth.getUser(token);
      if (!error && data?.user) {
        const role = (data.user.app_metadata && data.user.app_metadata.role) || "";
        if (["admin", "operator"].includes(role)) {
          socket.join("admins");
          socket.data.isAdmin = true;
        }
      }
    }
  })();
  socket.on("join", async ({ sessionId }) => {
    if (!sessionId) return;
    socket.join(sessionId);
    socket.emit("joined", { sessionId });
  });
  socket.on("message", async ({ sessionId, text, meta }) => {
    if (!sessionId || !text) return;
    if (meta && meta.isUser === false) {
      const t = socket.handshake.auth?.token;
      if (!isValidAdminToken(t)) return;
    }
    const entry = {
      sessionId,
      text: sanitizeText(text),
      isUser: Boolean(meta?.isUser),
      ts: new Date().toISOString(),
    };
    chatWriteQueue = chatWriteQueue.then(async () => {
      const prev = JSON.parse(await fs.readFile(chatsFile, "utf8"));
      prev.push(entry);
      await fs.writeFile(chatsFile, JSON.stringify(prev, null, 2), "utf8");
    });
    await chatWriteQueue;
    if (supabase) {
      try {
        await supabase.from("chat_messages").insert({
          session_id: entry.sessionId,
          text: entry.text,
          is_user: entry.isUser,
          ts: entry.ts,
        });
      } catch {}
    }
    socket.to(sessionId).emit("message", entry);
    try {
      const all = JSON.parse(await fs.readFile(chatsFile, "utf8"));
      const msgs = all.filter((m) => m.sessionId === sessionId);
      const summary = {
        sessionId,
        lastTs: msgs[msgs.length - 1]?.ts || entry.ts,
        lastText: msgs[msgs.length - 1]?.text || entry.text,
        count: msgs.length,
      };
      io.to("admins").emit("session:update", summary);
    } catch {}
  });
});

// Ensure data files exist on startup
ensureDataFile().catch(() => {});

app.get("/", (req, res) => {
  res.type("text/plain").send("Clipot Chat API. Endpoints: /api/csrf-token, /api/contact, /api/chat/sessions, /api/chat/:sessionId");
});

app.get("/health", (req, res) => {
  res.json({ ok: true });
});

app.get("/api/supabase/health", async (req, res) => {
  if (!supabase) return res.status(500).json({ ok: false, error: "Supabase no configurado" });
  try {
    const { count, error } = await supabase
      .from("chat_messages")
      .select("*", { count: "exact", head: true });
    if (error) return res.status(500).json({ ok: false, error: error.message });
    res.json({ ok: true, count: count ?? 0 });
  } catch (e) {
    res.status(500).json({ ok: false, error: "Error de conexión" });
  }
});
app.post("/api/dashboard/register", async (req, res) => {
  const { email, password, name } = req.body || {};
  if (!email || !password) return res.status(400).json({ ok: false });
  await ensureDataFile();
  const users = JSON.parse(await fs.readFile(usersFile, "utf8"));
  if (users.find((u) => u.email === email)) return res.status(409).json({ ok: false });
  const hash = await bcrypt.hash(String(password), 10);
  const user = { id: crypto.randomUUID(), email, name: String(name || ""), password: hash, role: "user", ts: new Date().toISOString() };
  users.push(user);
  await fs.writeFile(usersFile, JSON.stringify(users, null, 2), "utf8");
  const token = jwt.sign({ id: user.id, email: user.email, role: user.role }, JWT_SECRET, { expiresIn: "8h" });
  res.json({ ok: true, token, user: { id: user.id, email: user.email, name: user.name, role: user.role } });
});

app.post("/api/dashboard/login", async (req, res) => {
  const { email, password } = req.body || {};
  if (!email || !password) return res.status(400).json({ ok: false });
  await ensureDataFile();
  const users = JSON.parse(await fs.readFile(usersFile, "utf8"));
  const user = users.find((u) => u.email === email);
  if (!user) return res.status(401).json({ ok: false });
  const ok = await bcrypt.compare(String(password), user.password);
  if (!ok) return res.status(401).json({ ok: false });
  const token = jwt.sign({ id: user.id, email: user.email, role: user.role }, JWT_SECRET, { expiresIn: "8h" });
  res.json({ ok: true, token, user: { id: user.id, email: user.email, name: user.name, role: user.role } });
});

app.get("/api/dashboard/me", requireUser, async (req, res) => {
  await ensureDataFile();
  const users = JSON.parse(await fs.readFile(usersFile, "utf8"));
  const user = users.find((u) => u.id === req.user.id);
  if (!user) return res.status(404).json({ ok: false });
  res.json({ ok: true, user: { id: user.id, email: user.email, name: user.name, role: user.role } });
});

app.post("/api/dashboard/password/forgot", async (req, res) => {
  const { email } = req.body || {};
  if (!email) return res.status(400).json({ ok: false });
  await ensureDataFile();
  const users = JSON.parse(await fs.readFile(usersFile, "utf8"));
  const user = users.find((u) => u.email === email);
  if (!user) return res.status(200).json({ ok: true });
  const token = crypto.randomBytes(24).toString("hex");
  const resets = JSON.parse(await fs.readFile(resetsFile, "utf8"));
  resets.push({ token, userId: user.id, ts: Date.now() });
  await fs.writeFile(resetsFile, JSON.stringify(resets, null, 2), "utf8");
  const transport = createTransport();
  if (transport) {
    const brand = "Clipot";
    await transport.sendMail({
      from: `"${brand}" <no-reply@clipot.com>`,
      to: email,
      subject: "Recuperación de contraseña",
      html: `<p>Usa este token para resetear tu contraseña: ${token}</p>`,
    });
  }
  res.json({ ok: true });
});

app.post("/api/dashboard/password/reset", async (req, res) => {
  const { token, password } = req.body || {};
  if (!token || !password) return res.status(400).json({ ok: false });
  await ensureDataFile();
  const resets = JSON.parse(await fs.readFile(resetsFile, "utf8"));
  const idx = resets.findIndex((r) => r.token === token);
  if (idx < 0) return res.status(400).json({ ok: false });
  const userId = resets[idx].userId;
  const users = JSON.parse(await fs.readFile(usersFile, "utf8"));
  const uidx = users.findIndex((u) => u.id === userId);
  if (uidx < 0) return res.status(400).json({ ok: false });
  users[uidx].password = await bcrypt.hash(String(password), 10);
  await fs.writeFile(usersFile, JSON.stringify(users, null, 2), "utf8");
  resets.splice(idx, 1);
  await fs.writeFile(resetsFile, JSON.stringify(resets, null, 2), "utf8");
  res.json({ ok: true });
});

app.get("/api/cms/posts", requireUser, async (req, res) => {
  await ensureDataFile();
  const items = JSON.parse(await fs.readFile(postsFile, "utf8"));
  res.json({ ok: true, items });
});

app.post("/api/cms/posts", requireUser, async (req, res) => {
  await ensureDataFile();
  const { title, content, status, publishAt, image, category, readTime } = req.body || {};
  if (!title) return res.status(400).json({ ok: false });
  const items = JSON.parse(await fs.readFile(postsFile, "utf8"));
  function slugify(str) {
    return String(str).toLowerCase().trim().replace(/[^a-z0-9\s-]/g, "").replace(/\s+/g, "-").replace(/-+/g, "-");
  }
  let slugBase = slugify(title);
  let slug = slugBase;
  let i = 1;
  while (items.find((p) => p.slug === slug)) {
    slug = `${slugBase}-${i++}`;
  }
  const entry = {
    id: crypto.randomUUID(),
    ownerId: req.user.id,
    title,
    slug,
    content: String(content || ""),
    status: String(status || "draft"),
    publishAt: publishAt || null,
    image: image || null,
    category: category || null,
    readTime: readTime || null,
    ts: new Date().toISOString(),
  };
  items.push(entry);
  await fs.writeFile(postsFile, JSON.stringify(items, null, 2), "utf8");
  if (supabase) {
    try {
      await supabase.from("blog_posts").insert({
        id: entry.id,
        owner_id: entry.ownerId,
        title: entry.title,
        slug: entry.slug,
        content: entry.content,
        status: entry.status,
        publish_at: entry.publishAt,
        image: entry.image,
        category: entry.category,
        read_time: entry.readTime,
        ts: entry.ts,
      });
    } catch {}
  }
  res.json({ ok: true, item: entry });
});

app.put("/api/cms/posts/:id", requireUser, async (req, res) => {
  await ensureDataFile();
  const { id } = req.params;
  const items = JSON.parse(await fs.readFile(postsFile, "utf8"));
  const idx = items.findIndex((p) => p.id === id);
  if (idx < 0) return res.status(404).json({ ok: false });
  const { title, slug, content, status, publishAt, image, category, readTime, excerpt, tags } = req.body || {};
  items[idx] = {
    ...items[idx],
    title: title ?? items[idx].title,
    slug: slug ?? items[idx].slug,
    content: content ?? items[idx].content,
    status: status ?? items[idx].status,
    publishAt: publishAt ?? items[idx].publishAt,
    image: image ?? items[idx].image,
    category: category ?? items[idx].category,
    readTime: readTime ?? items[idx].readTime,
    excerpt: excerpt ?? items[idx].excerpt,
    tags: Array.isArray(tags) ? tags : items[idx].tags,
    ts: items[idx].ts,
  };
  await fs.writeFile(postsFile, JSON.stringify(items, null, 2), "utf8");
  if (supabase) {
    try {
      await supabase.from("blog_posts").update({
        title: items[idx].title,
        slug: items[idx].slug,
        content: items[idx].content,
        status: items[idx].status,
        publish_at: items[idx].publishAt,
        image: items[idx].image,
        category: items[idx].category,
        read_time: items[idx].readTime,
        excerpt: items[idx].excerpt || null,
        tags: Array.isArray(items[idx].tags) ? items[idx].tags : null,
      }).eq("id", id);
    } catch {}
  }
  res.json({ ok: true, item: items[idx] });
});

app.get("/api/cms/posts/:id", requireUser, async (req, res) => {
  await ensureDataFile();
  const { id } = req.params;
  const items = JSON.parse(await fs.readFile(postsFile, "utf8"));
  const it = items.find((p) => p.id === id);
  if (!it) return res.status(404).json({ ok: false });
  res.json({ ok: true, item: it });
});

app.get("/api/cms/categories", requireUser, async (req, res) => {
  await ensureDataFile();
  const items = JSON.parse(await fs.readFile(categoriesFile, "utf8"));
  res.json({ ok: true, items });
});

app.post("/api/cms/categories", requireUser, async (req, res) => {
  await ensureDataFile();
  const { name } = req.body || {};
  if (!name) return res.status(400).json({ ok: false });
  const items = JSON.parse(await fs.readFile(categoriesFile, "utf8"));
  const entry = { id: crypto.randomUUID(), name };
  items.push(entry);
  await fs.writeFile(categoriesFile, JSON.stringify(items, null, 2), "utf8");
  if (supabase) {
    try {
      await supabase.from("blog_categories").insert({ id: entry.id, name: entry.name });
    } catch {}
  }
  res.json({ ok: true, item: entry });
});

app.delete("/api/cms/categories/:id", requireUser, async (req, res) => {
  await ensureDataFile();
  const { id } = req.params;
  const items = JSON.parse(await fs.readFile(categoriesFile, "utf8"));
  const idx = items.findIndex((c) => c.id === id);
  if (idx < 0) return res.status(404).json({ ok: false });
  const removed = items.splice(idx, 1)[0];
  await fs.writeFile(categoriesFile, JSON.stringify(items, null, 2), "utf8");
  if (supabase) {
    try {
      await supabase.from("blog_categories").delete().eq("id", id);
    } catch {}
  }
  res.json({ ok: true, item: removed });
});

app.get("/api/cms/tags", requireUser, async (req, res) => {
  await ensureDataFile();
  const items = JSON.parse(await fs.readFile(tagsFile, "utf8"));
  res.json({ ok: true, items });
});

app.post("/api/cms/tags", requireUser, async (req, res) => {
  await ensureDataFile();
  const { name } = req.body || {};
  if (!name) return res.status(400).json({ ok: false });
  const items = JSON.parse(await fs.readFile(tagsFile, "utf8"));
  const entry = { id: crypto.randomUUID(), name };
  items.push(entry);
  await fs.writeFile(tagsFile, JSON.stringify(items, null, 2), "utf8");
  if (supabase) {
    try {
      await supabase.from("blog_tags").insert({ id: entry.id, name: entry.name });
    } catch {}
  }
  res.json({ ok: true, item: entry });
});

app.delete("/api/cms/tags/:id", requireUser, async (req, res) => {
  await ensureDataFile();
  const { id } = req.params;
  const items = JSON.parse(await fs.readFile(tagsFile, "utf8"));
  const idx = items.findIndex((c) => c.id === id);
  if (idx < 0) return res.status(404).json({ ok: false });
  const removed = items.splice(idx, 1)[0];
  await fs.writeFile(tagsFile, JSON.stringify(items, null, 2), "utf8");
  if (supabase) {
    try {
      await supabase.from("blog_tags").delete().eq("id", id);
    } catch {}
  }
  res.json({ ok: true, item: removed });
});
app.delete("/api/cms/posts/:id", requireUser, async (req, res) => {
  await ensureDataFile();
  const { id } = req.params;
  const items = JSON.parse(await fs.readFile(postsFile, "utf8"));
  const idx = items.findIndex((p) => p.id === id);
  if (idx < 0) return res.status(404).json({ ok: false });
  const removed = items.splice(idx, 1)[0];
  await fs.writeFile(postsFile, JSON.stringify(items, null, 2), "utf8");
  res.json({ ok: true, item: removed });
});

app.get("/api/public/posts", async (req, res) => {
  await ensureDataFile();
  const items = JSON.parse(await fs.readFile(POSTS_FILE, "utf8"));
  const now = Date.now();
  const published = items.filter((p) => {
    const isPublished = p.status === "published";
    const scheduleOk = !p.publishAt || new Date(p.publishAt).getTime() <= now;
    return isPublished && scheduleOk;
  }).map((p) => ({
    title: p.title,
    slug: p.slug,
    excerpt: String(p.content || "").slice(0, 220),
    image: p.image,
    category: p.category || "Blog",
    readTime: p.readTime || "5 min",
    ts: p.ts,
  }));
  res.json({ ok: true, items: published });
});

app.get("/api/public/posts/:slug", async (req, res) => {
  await ensureDataFile();
  const { slug } = req.params;
  const items = JSON.parse(await fs.readFile(POSTS_FILE, "utf8"));
  const post = items.find((p) => p.slug === slug && p.status === "published");
  if (!post) return res.status(404).json({ ok: false });
  res.json({ ok: true, item: post });
});

app.get("/api/cms/media", requireUser, async (req, res) => {
  await ensureDataFile();
  const items = JSON.parse(await fs.readFile(mediaFile, "utf8"));
  res.json({ ok: true, items });
});

app.post("/api/cms/media", requireUser, async (req, res) => {
  await ensureDataFile();
  const { url, alt } = req.body || {};
  if (!url) return res.status(400).json({ ok: false });
  const items = JSON.parse(await fs.readFile(mediaFile, "utf8"));
  const entry = { id: crypto.randomUUID(), ownerId: req.user.id, url, alt: String(alt || ""), ts: new Date().toISOString() };
  items.push(entry);
  await fs.writeFile(mediaFile, JSON.stringify(items, null, 2), "utf8");
  res.json({ ok: true, item: entry });
});

app.delete("/api/cms/media/:id", requireUser, async (req, res) => {
  await ensureDataFile();
  const { id } = req.params;
  const items = JSON.parse(await fs.readFile(mediaFile, "utf8"));
  const idx = items.findIndex((m) => m.id === id);
  if (idx < 0) return res.status(404).json({ ok: false });
  const removed = items.splice(idx, 1)[0];
  await fs.writeFile(mediaFile, JSON.stringify(items, null, 2), "utf8");
  res.json({ ok: true, item: removed });
});

app.get("/api/integrations/credentials", requireUser, async (req, res) => {
  await ensureDataFile();
  const creds = JSON.parse(await fs.readFile(credsFile, "utf8"));
  const mine = creds.find((c) => c.ownerId === req.user.id) || { ownerId: req.user.id };
  res.json({ ok: true, credentials: mine });
});

app.post("/api/integrations/credentials", requireUser, async (req, res) => {
  await ensureDataFile();
  const creds = JSON.parse(await fs.readFile(credsFile, "utf8"));
  const idx = creds.findIndex((c) => c.ownerId === req.user.id);
  const payload = req.body || {};
  if (idx < 0) creds.push({ ownerId: req.user.id, ...payload });
  else creds[idx] = { ...creds[idx], ...payload };
  await fs.writeFile(credsFile, JSON.stringify(creds, null, 2), "utf8");
  res.json({ ok: true });
});

app.get("/api/integrations/google-analytics", requireUser, async (req, res) => {
  res.json({ ok: true, metrics: [{ name: "sessions", value: 120 }, { name: "users", value: 95 }] });
});

app.get("/api/integrations/meta", requireUser, async (req, res) => {
  res.json({ ok: true, metrics: [{ name: "reach", value: 5400 }, { name: "engagement", value: 320 }] });
});

app.get("/api/integrations/wordpress", requireUser, async (req, res) => {
  res.json({ ok: true, posts: 24, comments: 55 });
});

app.get("/api/integrations/shopify", requireUser, async (req, res) => {
  res.json({ ok: true, orders: 12, revenue: 25400 });
});

app.get("/api/whatsapp/qr", requireUser, async (req, res) => {
  const { phone, text } = req.query;
  if (!phone) return res.status(400).json({ ok: false });
  const msg = encodeURIComponent(String(text || "Hola"));
  const url = `https://wa.me/${phone}?text=${msg}`;
  const dataUrl = await QRCode.toDataURL(url, { margin: 1, width: 256 });
  res.json({ ok: true, dataUrl });
});
app.get("/api/crm/clients", requireUser, async (req, res) => {
  await ensureDataFile();
  const file = path.join(dataDir, "clients.json");
  try {
    await fs.access(file);
  } catch {
    await fs.writeFile(file, "[]", "utf8");
  }
  const items = JSON.parse(await fs.readFile(file, "utf8"));
  res.json({ ok: true, items });
});

app.post("/api/crm/clients", requireUser, async (req, res) => {
  const { name, contact, company, notes } = req.body || {};
  if (!name) return res.status(400).json({ ok: false });
  await ensureDataFile();
  const file = path.join(dataDir, "clients.json");
  try {
    await fs.access(file);
  } catch {
    await fs.writeFile(file, "[]", "utf8");
  }
  const ownerId = req.user.id;
  const items = JSON.parse(await fs.readFile(file, "utf8"));
  const entry = { id: crypto.randomUUID(), ownerId, name, contact, company, notes, ts: new Date().toISOString() };
  items.push(entry);
  await fs.writeFile(file, JSON.stringify(items, null, 2), "utf8");
  if (supabase) {
    try {
      await supabase.from("crm_clients").insert({
        id: entry.id,
        owner_id: entry.ownerId,
        name: entry.name,
        contact: entry.contact || null,
        company: entry.company || null,
        notes: entry.notes || null,
        ts: entry.ts,
      });
    } catch {}
  }
  res.json({ ok: true, item: entry });
});

app.put("/api/crm/clients/:id", requireUser, async (req, res) => {
  const { id } = req.params;
  const { name, contact, company, notes } = req.body || {};
  await ensureDataFile();
  const file = path.join(dataDir, "clients.json");
  try {
    await fs.access(file);
  } catch {
    await fs.writeFile(file, "[]", "utf8");
  }
  const items = JSON.parse(await fs.readFile(file, "utf8"));
  const idx = items.findIndex((c) => c.id === id);
  if (idx < 0) return res.status(404).json({ ok: false });
  const updated = { ...items[idx], name: name ?? items[idx].name, contact: contact ?? items[idx].contact, company: company ?? items[idx].company, notes: notes ?? items[idx].notes };
  items[idx] = updated;
  await fs.writeFile(file, JSON.stringify(items, null, 2), "utf8");
  if (supabase) {
    try {
      await supabase.from("crm_clients").update({
        name: updated.name,
        contact: updated.contact || null,
        company: updated.company || null,
        notes: updated.notes || null,
      }).eq("id", id);
    } catch {}
  }
  res.json({ ok: true, item: updated });
});

app.delete("/api/crm/clients/:id", requireUser, async (req, res) => {
  const { id } = req.params;
  await ensureDataFile();
  const file = path.join(dataDir, "clients.json");
  try {
    await fs.access(file);
  } catch {
    await fs.writeFile(file, "[]", "utf8");
  }
  const items = JSON.parse(await fs.readFile(file, "utf8"));
  const idx = items.findIndex((c) => c.id === id);
  if (idx < 0) return res.status(404).json({ ok: false });
  const removed = items.splice(idx, 1)[0];
  await fs.writeFile(file, JSON.stringify(items, null, 2), "utf8");
  if (supabase) {
    try {
      await supabase.from("crm_clients").delete().eq("id", id);
    } catch {}
  }
  res.json({ ok: true, item: removed });
});
app.get("/api/chat/:sessionId", async (req, res) => {
  const { sessionId } = req.params;
  try {
    const prev = JSON.parse(await fs.readFile(chatsFile, "utf8"));
    const messages = prev.filter((m) => m.sessionId === sessionId);
    res.json({ ok: true, messages });
  } catch {
    res.status(500).json({ ok: false });
  }
});

app.get("/api/chat/sessions", requireAdmin, async (req, res) => {
  try {
    const prev = JSON.parse(await fs.readFile(chatsFile, "utf8"));
    const map = new Map();
    for (const m of prev) {
      const current = map.get(m.sessionId) || { sessionId: m.sessionId, lastTs: m.ts, lastText: m.text, count: 0 };
      current.count += 1;
      if (!current.lastTs || new Date(m.ts) > new Date(current.lastTs)) {
        current.lastTs = m.ts;
        current.lastText = m.text;
      }
      map.set(m.sessionId, current);
    }
    let sessions = Array.from(map.values()).sort((a, b) => new Date(b.lastTs) - new Date(a.lastTs));
    const minutes = Number(req.query.minutes || "0");
    if (minutes > 0) {
      const cutoff = Date.now() - minutes * 60 * 1000;
      sessions = sessions.filter((s) => new Date(s.lastTs).getTime() >= cutoff);
    }
    res.json({ ok: true, sessions });
  } catch {
    res.status(500).json({ ok: false });
  }
});

function createCsrfToken() {
  return crypto.randomBytes(32).toString("hex");
}

function createTransport() {
  const { SMTP_HOST, SMTP_PORT, SMTP_USER, SMTP_PASS, SMTP_SECURE } = process.env;
  if (!SMTP_HOST || !SMTP_PORT || !SMTP_USER || !SMTP_PASS) return null;
  return nodemailer.createTransport({
    host: SMTP_HOST,
    port: Number(SMTP_PORT),
    secure: SMTP_SECURE === "true",
    auth: { user: SMTP_USER, pass: SMTP_PASS },
  });
}

async function sendLeadEmails(entry) {
  const transport = createTransport();
  if (!transport) {
    console.log("Mailer no configurado. Lead:", entry.email);
    return;
  }
  const adminTo = process.env.ADMIN_EMAIL || "admin@example.com";
  const brand = "Clipot";
  const htmlAdmin = `
    <h2>Nuevo lead</h2>
    <p><strong>Nombre:</strong> ${entry.name}</p>
    <p><strong>Email:</strong> ${entry.email}</p>
    <p><strong>Empresa:</strong> ${entry.company || "-"}</p>
    <p><strong>Teléfono:</strong> ${entry.phone || "-"}</p>
    <p><strong>Servicio:</strong> ${entry.service || "-"}</p>
    <p><strong>Mensaje:</strong> ${entry.message}</p>
    <p><small>TS: ${entry.ts}</small></p>
  `;
  const htmlUser = `
    <h2>Gracias por contactar a ${brand}</h2>
    <p>Hemos recibido tu solicitud. Un especialista te contactará en menos de 24 horas.</p>
    <p>Si necesitas atención inmediata, por favor responde a este correo.</p>
    <p>Saludos,<br>${brand}</p>
  `;
  await transport.sendMail({
    from: `"${brand}" <no-reply@clipot.com>`,
    to: adminTo,
    subject: `[Lead] ${entry.name} - ${entry.service || "Contacto"}`,
    html: htmlAdmin,
  });
  await transport.sendMail({
    from: `"${brand}" <no-reply@clipot.com>`,
    to: entry.email,
    subject: `Hemos recibido tu solicitud`,
    html: htmlUser,
  });
}

function issueAdminToken() {
  const token = crypto.randomUUID();
  const exp = Date.now() + 8 * 60 * 60 * 1000;
  adminTokens.set(token, exp);
  return token;
}

function isValidAdminToken(token) {
  if (!token) return false;
  const exp = adminTokens.get(token);
  if (!exp) return false;
  if (Date.now() > exp) {
    adminTokens.delete(token);
    return false;
  }
  return true;
}

function requireAdmin(req, res, next) {
  const h = req.headers.authorization || "";
  const token = h.startsWith("Bearer ") ? h.slice(7) : "";
  if (isValidAdminToken(token)) return next();
  (async () => {
    try {
      if (!supabase) return res.status(401).json({ ok: false });
      const { data, error } = await supabase.auth.getUser(token);
      if (error || !data?.user) return res.status(401).json({ ok: false });
      const role = (data.user.app_metadata && data.user.app_metadata.role) || "";
      if (!["admin", "operator"].includes(role)) return res.status(403).json({ ok: false });
      next();
    } catch {
      return res.status(401).json({ ok: false });
    }
  })();
}

function requireUser(req, res, next) {
  const h = req.headers.authorization || "";
  const token = h.startsWith("Bearer ") ? h.slice(7) : "";
  try {
    const payload = jwt.verify(token, JWT_SECRET);
    req.user = payload;
    next();
  } catch {
    (async () => {
      try {
        if (!supabase) return res.status(401).json({ ok: false });
        const { data, error } = await supabase.auth.getUser(token);
        if (error || !data?.user) return res.status(401).json({ ok: false });
        req.user = { id: data.user.id, email: data.user.email, role: "user" };
        next();
      } catch {
        return res.status(401).json({ ok: false });
      }
    })();
  }
}

app.get("/api/csrf-token", (req, res) => {
  const token = createCsrfToken();
  res.cookie("csrfToken", token, {
    httpOnly: true,
    sameSite: "lax",
    secure: false,
    path: "/",
    maxAge: 60 * 60 * 1000,
  });
  res.json({ token });
});

app.post("/api/contact", async (req, res) => {
  const headerToken = req.headers["x-csrf-token"];
  const cookieToken = req.cookies?.csrfToken;
  if (!headerToken || !cookieToken || headerToken !== cookieToken) {
    return res.status(403).json({ ok: false, error: "CSRF token inválido." });
  }

  const { errors, value } = validatePayload(req.body || {});
  if (errors.length > 0) {
    return res.status(400).json({ ok: false, errors });
  }

  try {
    await ensureDataFile();
    const entry = {
      ...value,
      id: crypto.randomUUID(),
      ts: new Date().toISOString(),
      ip: req.ip,
      ua: req.headers["user-agent"] || "",
    };
    writeQueue = writeQueue.then(async () => {
      const prev = JSON.parse(await fs.readFile(contactsFile, "utf8"));
      prev.push(entry);
      await fs.writeFile(contactsFile, JSON.stringify(prev, null, 2), "utf8");
    });
    await writeQueue;
    await sendLeadEmails(entry);
    return res.json({ ok: true });
  } catch (e) {
    return res.status(500).json({ ok: false, error: "Error al almacenar el mensaje." });
  }
});

app.post("/api/admin/login", (req, res) => {
  const pw = String(req.body?.password || "");
  const configured = String(process.env.ADMIN_PASSWORD || "");
  if (!configured) return res.status(500).json({ ok: false });
  if (pw !== configured) return res.status(401).json({ ok: false });
  const token = issueAdminToken();
  res.json({ ok: true, token });
});

httpServer.listen(PORT, () => {
  console.log(`API server escuchando en http://localhost:${PORT}`);
});
