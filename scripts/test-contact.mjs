const BASE = process.env.BASE || "http://localhost:3001";

async function run() {
  // Get CSRF
  const res = await fetch(`${BASE}/api/csrf-token`, { method: "GET" });
  const data = await res.json();
  const setCookie = res.headers.get("set-cookie") || "";
  const token = data.token;
  if (!token || !setCookie) {
    console.error("No CSRF token/cookie");
    process.exit(1);
  }

  const payload = {
    name: "Juan Pérez",
    email: "juan@example.com",
    company: "Acme",
    phone: "+52 55 1234 5678",
    service: "web",
    message: "Necesitamos un sitio web corporativo con blog.",
  };

  const res2 = await fetch(`${BASE}/api/contact`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "X-CSRF-Token": token,
      cookie: setCookie,
    },
    body: JSON.stringify(payload),
  });
  const data2 = await res2.json();
  console.log("POST /api/contact status:", res2.status, "response:", data2);
  if (!res2.ok || !data2.ok) process.exit(2);
}

run().catch((e) => {
  console.error(e);
  process.exit(1);
});
