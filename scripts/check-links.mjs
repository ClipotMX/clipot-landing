import { promises as fs } from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const projectRoot = path.resolve(__dirname, "..");
const srcDir = path.join(projectRoot, "src");
const reportDir = path.join(projectRoot, "reports");

const BASE_DEFAULTS = [
  "http://localhost:4173",
  "http://localhost:5173",
  "http://localhost:8080",
];

function parseArgs() {
  const args = Object.fromEntries(
    process.argv.slice(2).map((a) => {
      const [k, v] = a.split("=");
      return [k.replace(/^--/, ""), v ?? true];
    })
  );
  return {
    base: args.base || process.env.SITE_BASE_URL || "",
  };
}

async function ensureDir(dir) {
  try {
    await fs.mkdir(dir, { recursive: true });
  } catch {}
}

async function readFileSafe(p) {
  try {
    return await fs.readFile(p, "utf8");
  } catch {
    return "";
  }
}

async function* walk(dir) {
  const entries = await fs.readdir(dir, { withFileTypes: true });
  for (const entry of entries) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      yield* walk(full);
    } else {
      yield full;
    }
  }
}

function extractRoutesFromAppTsx(source) {
  const routes = new Set();
  const routeRegex = /<Route\s+path=["']([^"']+)["']/g;
  let m;
  while ((m = routeRegex.exec(source)) !== null) {
    routes.add(m[1]);
  }
  return Array.from(routes);
}

function routeToRegex(route) {
  // Convert '/blog/:slug' to regex
  const esc = route.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
  const pattern = esc.replace(/:\\w+/g, "[^/]+");
  return new RegExp(`^${pattern}$`);
}

function matchesDeclaredRoutes(pathname, declared) {
  for (const r of declared) {
    if (r.includes(":")) {
      const re = routeToRegex(r);
      if (re.test(pathname)) return true;
    } else if (r === pathname) {
      return true;
    }
  }
  return false;
}

function extractLinksFromSource(source) {
  const links = new Set();
  const hrefRegex = /href=["']([^"']+)["']/g;
  let m;
  while ((m = hrefRegex.exec(source)) !== null) {
    links.add(m[1]);
  }
  // React Router Link components
  const linkToRegex = /<Link[^>]*\s+to=["']([^"']+)["']/g;
  while ((m = linkToRegex.exec(source)) !== null) {
    links.add(m[1]);
  }
  return Array.from(links);
}

function classifyLink(href) {
  if (!href || href.startsWith("#")) return { type: "fragment" };
  if (href.startsWith("mailto:")) return { type: "mailto" };
  if (href.startsWith("tel:")) return { type: "tel" };
  if (/^https?:\/\//i.test(href)) return { type: "external", url: href };
  if (href.startsWith("/")) return { type: "internal", path: href };
  return { type: "relative", path: href };
}

async function checkHttp(url, method = "HEAD") {
  try {
    const res = await fetch(url, { method, redirect: "follow" });
    const status = res.status;
    if (status === 405 && method === "HEAD") {
      return checkHttp(url, "GET");
    }
    return { ok: res.ok, status, finalUrl: res.url };
  } catch (err) {
    return { ok: false, status: 0, error: String(err) };
  }
}

async function main() {
  const { base } = parseArgs();
  const bases = base ? [base, ...BASE_DEFAULTS] : BASE_DEFAULTS;
  await ensureDir(reportDir);

  const appTsx = await readFileSafe(path.join(srcDir, "App.tsx"));
  const declaredRoutes = extractRoutesFromAppTsx(appTsx);

  const allFiles = [];
  for await (const f of walk(srcDir)) {
    if (/\.(tsx?|jsx?)$/.test(f)) allFiles.push(f);
  }

  const discoveredLinks = new Set();
  for (const f of allFiles) {
    const content = await readFileSafe(f);
    for (const l of extractLinksFromSource(content)) {
      discoveredLinks.add(l);
    }
  }

  // Add declared routes to internal links set
  for (const r of declaredRoutes) {
    if (r.startsWith("/")) discoveredLinks.add(r);
  }

  const links = Array.from(discoveredLinks);
  const results = [];

  for (const href of links) {
    const kind = classifyLink(href);
    let result = {
      href,
      type: kind.type,
      status: null,
      ok: null,
      checkedUrl: null,
      finalUrl: null,
      note: "",
    };

    if (kind.type === "external") {
      const r = await checkHttp(kind.url);
      result.status = r.status;
      result.ok = r.ok;
      result.checkedUrl = kind.url;
      result.finalUrl = r.finalUrl;
    } else if (kind.type === "internal") {
      if (!matchesDeclaredRoutes(kind.path, declaredRoutes)) {
        result.note = "Ruta no declarada en App.tsx";
      }
      let checked = false;
      for (const b of bases) {
        const url = `${b}${kind.path}`;
        const r = await checkHttp(url, "GET");
        if (r.status !== 0) {
          result.status = r.status;
          result.ok = r.ok;
          result.checkedUrl = url;
          result.finalUrl = r.finalUrl;
          checked = true;
          break;
        }
      }
      if (!checked) {
        result.note = "No se pudo verificar. Inicia el servidor (vite dev/preview).";
      }
    } else {
      result.ok = true;
      result.status = null;
      result.note = "No aplica HTTP";
    }
    results.push(result);
  }

  const broken = results.filter((r) => r.ok === false || (typeof r.ok === "boolean" && !r.ok));

  const summary = {
    scannedAt: new Date().toISOString(),
    total: results.length,
    brokenCount: broken.length,
    internalChecked: results.filter((r) => r.type === "internal" && r.checkedUrl).length,
  };

  await fs.writeFile(path.join(reportDir, "link-report.json"), JSON.stringify({ summary, results }, null, 2), "utf8");

  const md = [
    `# Reporte de enlaces`,
    `- Fecha: ${summary.scannedAt}`,
    `- Total enlaces: ${summary.total}`,
    `- Rotos: ${summary.brokenCount}`,
    ``,
    `## Detalle`,
    ...results.map((r) => {
      const statusStr = r.status !== null ? `${r.status}` : "N/A";
      const checkedStr = r.checkedUrl ? ` → ${r.checkedUrl}` : "";
      const note = r.note ? ` (${r.note})` : "";
      return `- [${r.type}] ${r.href} | status: ${statusStr}${checkedStr}${note}`;
    }),
  ].join("\n");
  await fs.writeFile(path.join(reportDir, "link-report.md"), md, "utf8");

  console.log(`Reporte generado en ${path.join(reportDir, "link-report.md")}`);
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
