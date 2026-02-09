const BASE = process.env.BASE || "http://localhost:3001";
const N = Number(process.env.N || 50);

async function getCsrf() {
  const res = await fetch(`${BASE}/api/csrf-token`, { method: "GET" });
  const data = await res.json();
  const setCookie = res.headers.get("set-cookie") || "";
  return { token: data.token, cookie: setCookie };
}

async function sendOnce(csrf, i) {
  const payload = {
    name: `Usuario ${i}`,
    email: `user${i}@example.com`,
    message: "Mensaje de prueba de carga para contacto.",
  };
  const res = await fetch(`${BASE}/api/contact`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "X-CSRF-Token": csrf.token,
      cookie: csrf.cookie,
    },
    body: JSON.stringify(payload),
  });
  return res.ok;
}

async function run() {
  const csrf = await getCsrf();
  const start = Date.now();
  const results = await Promise.all(Array.from({ length: N }, (_, i) => sendOnce(csrf, i + 1)));
  const ok = results.filter(Boolean).length;
  const ms = Date.now() - start;
  console.log(`Enviados: ${N}, OK: ${ok}, Tiempo: ${ms}ms`);
}

run().catch((e) => {
  console.error(e);
  process.exit(1);
});
