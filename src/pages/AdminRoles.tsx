import AdminLayout from "@/components/admin/AdminLayout";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Select } from "@/components/ui/select";

type UserItem = { id: string; email: string; role: string; created_at: string };

const AdminRoles = () => {
  const token = localStorage.getItem("userToken") || localStorage.getItem("adminToken") || "";
  const [users, setUsers] = useState<UserItem[]>([]);
  const [loading, setLoading] = useState(false);

  async function load() {
    setLoading(true);
    try {
      const res = await fetch("http://localhost:3001/api/admin/users", {
        headers: { Authorization: `Bearer ${token}` },
      }).then(r => r.json());
      if (res?.ok) setUsers(res.users || []);
    } finally {
      setLoading(false);
    }
  }

  async function changeRole(u: UserItem, role: string) {
    await fetch("http://localhost:3001/api/admin/users/role", {
      method: "POST",
      headers: { "Content-Type": "application/json", Authorization: `Bearer ${token}` },
      body: JSON.stringify({ userId: u.id, role }),
    });
    setUsers(users.map(x => x.id === u.id ? { ...x, role } : x));
  }

  useEffect(() => { load(); }, []);

  return (
    <AdminLayout>
      <h1 className="font-display text-2xl font-bold mb-4">Roles de Usuarios</h1>
      <Button variant="outline" size="sm" onClick={load} disabled={loading}>Actualizar</Button>
      <div className="mt-4 space-y-3">
        {users.map(u => (
          <div key={u.id} className="p-3 rounded-xl border border-border flex items-center justify-between">
            <div>
              <div className="font-medium">{u.email}</div>
              <div className="text-xs text-muted-foreground">{new Date(u.created_at).toLocaleString()}</div>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-sm">Rol</span>
              <select
                className="border rounded-md px-2 py-1 text-sm"
                value={u.role || ""}
                onChange={(e) => changeRole(u, e.target.value)}
              >
                <option value="">user</option>
                <option value="operator">operator</option>
                <option value="admin">admin</option>
              </select>
            </div>
          </div>
        ))}
        {users.length === 0 && (
          <p className="text-sm text-muted-foreground">Sin usuarios aún.</p>
        )}
      </div>
    </AdminLayout>
  );
};

export default AdminRoles;
