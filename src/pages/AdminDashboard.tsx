import AdminLayout from "@/components/admin/AdminLayout";
import { useEffect, useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { createClient } from "@supabase/supabase-js";

type Client = { id: string; name: string; contact?: string; company?: string; notes?: string; ts: string };

const AdminDashboard = () => {
  const [clients, setClients] = useState<Client[]>([]);
  const [name, setName] = useState("");
  const [contact, setContact] = useState("");
  const [company, setCompany] = useState("");
  const [notes, setNotes] = useState("");
  const [error, setError] = useState("");
  const [role, setRole] = useState<string>("");

  const token = localStorage.getItem("userToken") || "";
  const supabaseUrl = (import.meta as any).env?.VITE_SUPABASE_URL;
  const supabaseAnon = (import.meta as any).env?.VITE_SUPABASE_ANON_KEY;
  const supabase = (supabaseUrl && supabaseAnon) ? createClient(supabaseUrl, supabaseAnon) : null;

  async function load() {
    setError("");
    try {
      const res = await fetch("http://localhost:3001/api/crm/clients", {
        headers: { Authorization: `Bearer ${token}` },
      });
      const data = await res.json();
      if (data?.ok) setClients(data.items || []);
    } catch {
      setError("Error al cargar clientes");
    }
  }

  async function add() {
    if (!name.trim()) return;
    setError("");
    try {
      const res = await fetch("http://localhost:3001/api/crm/clients", {
        method: "POST",
        headers: { "Content-Type": "application/json", Authorization: `Bearer ${token}` },
        body: JSON.stringify({ name, contact, company, notes }),
      });
      const data = await res.json();
      if (data?.ok) {
        setClients([data.item, ...clients]);
        setName("");
        setContact("");
        setCompany("");
        setNotes("");
      }
    } catch {
      setError("Error al agregar cliente");
    }
  }

  useEffect(() => {
    if (!token) return;
    load();
    (async () => {
      if (supabase) {
        const { data } = await supabase.auth.getUser();
        const r = (data?.user?.app_metadata && data.user.app_metadata.role) || "";
        setRole(r);
      }
    })();
  }, []);

  return (
    <AdminLayout>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="bg-background rounded-2xl shadow-sm ring-1 ring-border p-4">
          <h2 className="font-semibold mb-3">Nuevo Cliente</h2>
          <div className="space-y-2">
            <Input value={name} onChange={(e) => setName(e.target.value)} placeholder="Nombre" />
            <Input value={contact} onChange={(e) => setContact(e.target.value)} placeholder="Contacto" />
            <Input value={company} onChange={(e) => setCompany(e.target.value)} placeholder="Empresa" />
            <Input value={notes} onChange={(e) => setNotes(e.target.value)} placeholder="Notas" />
            <Button onClick={add}>Agregar</Button>
            {error && <p className="text-red-500 text-sm">{error}</p>}
          </div>
        </div>
        <div className="lg:col-span-2 bg-background rounded-2xl shadow-sm ring-1 ring-border p-4">
          <h2 className="font-semibold mb-3">Clientes</h2>
          <div className="space-y-2">
            {clients.map((c) => (
              <div key={c.id} className="p-3 rounded-xl border border-border">
                <div className="font-medium">{c.name}</div>
                <div className="text-sm text-muted-foreground">{c.company} — {c.contact}</div>
                <div className="text-sm">{c.notes}</div>
              </div>
            ))}
            {clients.length === 0 && <p className="text-sm text-muted-foreground">Sin clientes aún.</p>}
          </div>
        </div>
      </div>
    </AdminLayout>
  );
};

export default AdminDashboard;
