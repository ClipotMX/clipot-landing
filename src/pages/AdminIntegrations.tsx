import AdminLayout from "@/components/admin/AdminLayout";
import { useEffect, useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

const AdminIntegrations = () => {
  const token = localStorage.getItem("userToken") || "";
  const [credentials, setCredentials] = useState<Record<string, string>>({});

  async function load() {
    const res = await fetch("http://localhost:3001/api/integrations/credentials", {
      headers: { Authorization: `Bearer ${token}` },
    }).then(r => r.json());
    if (res?.ok) setCredentials(res.credentials || {});
  }

  async function save() {
    await fetch("http://localhost:3001/api/integrations/credentials", {
      method: "POST",
      headers: { "Content-Type": "application/json", Authorization: `Bearer ${token}` },
      body: JSON.stringify(credentials),
    });
  }

  useEffect(() => { if (token) load(); }, []);

  return (
    <AdminLayout>
      <h1 className="font-display text-2xl font-bold mb-4">Integraciones</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-background rounded-2xl shadow-sm ring-1 ring-border p-4">
          <h2 className="font-semibold mb-2">Google Analytics</h2>
          <Input value={credentials.gaToken || ""} onChange={(e) => setCredentials({ ...credentials, gaToken: e.target.value })} placeholder="Token" />
        </div>
        <div className="bg-background rounded-2xl shadow-sm ring-1 ring-border p-4">
          <h2 className="font-semibold mb-2">Meta</h2>
          <Input value={credentials.metaToken || ""} onChange={(e) => setCredentials({ ...credentials, metaToken: e.target.value })} placeholder="Token" />
        </div>
        <div className="bg-background rounded-2xl shadow-sm ring-1 ring-border p-4">
          <h2 className="font-semibold mb-2">WordPress</h2>
          <Input value={credentials.wpUrl || ""} onChange={(e) => setCredentials({ ...credentials, wpUrl: e.target.value })} placeholder="URL" />
          <Input value={credentials.wpUser || ""} onChange={(e) => setCredentials({ ...credentials, wpUser: e.target.value })} placeholder="Usuario" className="mt-2" />
          <Input value={credentials.wpPass || ""} onChange={(e) => setCredentials({ ...credentials, wpPass: e.target.value })} placeholder="Contraseña" className="mt-2" />
        </div>
        <div className="bg-background rounded-2xl shadow-sm ring-1 ring-border p-4">
          <h2 className="font-semibold mb-2">Shopify</h2>
          <Input value={credentials.shopUrl || ""} onChange={(e) => setCredentials({ ...credentials, shopUrl: e.target.value })} placeholder="Store URL" />
          <Input value={credentials.shopToken || ""} onChange={(e) => setCredentials({ ...credentials, shopToken: e.target.value })} placeholder="Token" className="mt-2" />
        </div>
      </div>
      <Button onClick={save} className="mt-4">Guardar</Button>
    </AdminLayout>
  );
};

export default AdminIntegrations;
