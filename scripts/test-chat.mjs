import { io } from "socket.io-client";
import { promises as fs } from "node:fs";
import path from "node:path";
import crypto from "node:crypto";

const BASE = process.env.BASE || "http://localhost:3001";
const dataFile = path.resolve(process.cwd(), "server", "data", "chats.json");

async function run() {
  const sid = crypto.randomUUID();
  const socket = io(BASE, { withCredentials: true, transports: ["websocket"] });
  await new Promise((resolve) => socket.on("connect", resolve));
  socket.emit("join", { sessionId: sid });
  socket.emit("message", { sessionId: sid, text: "Hola desde test-chat", meta: { isUser: true } });
  // Wait a moment for write
  await new Promise((r) => setTimeout(r, 500));
  const content = await fs.readFile(dataFile, "utf8");
  const arr = JSON.parse(content);
  const found = arr.find((m) => m.sessionId === sid && m.text.includes("Hola desde test-chat"));
  console.log("Mensaje persistido:", Boolean(found));
  if (!found) process.exit(2);
  socket.disconnect();
}

run().catch((e) => {
  console.error(e);
  process.exit(1);
});
