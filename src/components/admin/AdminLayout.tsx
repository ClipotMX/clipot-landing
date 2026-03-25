import { ReactNode, useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { createClient } from "@supabase/supabase-js";
import { Button } from "@/components/ui/button";

const links = [
  { name: "Dashboard", href: "/admin/dashboard" },
  { name: "CMS", href: "/admin/cms" },
  { name: "Taxonomías", href: "/admin/cms/taxonomias" },
  { name: "Emails", href: "/admin/email" },
  { name: "Integraciones", href: "/admin/integraciones" },
  { name: "Reportes", href: "/admin/reportes" },
  { name: "Roles", href: "/admin/roles" },
  { name: "Chat", href: "/admin/chat" },
];

export default function AdminLayout({ children }: { children: ReactNode }) {
  const [role, setRole] = useState<string>("");
  const location = useLocation();
  const navigate = useNavigate();
  const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
  const supabaseAnon = import.meta.env.VITE_SUPABASE_ANON_KEY;
  const supabase = (supabaseUrl && supabaseAnon) ? createClient(supabaseUrl, supabaseAnon) : null;

  useEffect(() => {
    (async () => {
      if (supabase) {
        const { data } = await supabase.auth.getUser();
        const r = (data?.user?.app_metadata && data.user.app_metadata.role) || "";
        setRole(r || "user");
      } else {
        setRole("user");
      }
    })();
  }, []);

  async function logout() {
    try {
      if (supabase) await supabase.auth.signOut();
    } catch {
      void 0;
    }
    try {
      localStorage.removeItem("userToken");
      localStorage.removeItem("adminToken");
    } catch {
      void 0;
    }
    navigate("/admin/login");
  }

  return (
    <div className="min-h-screen bg-background text-foreground">
      <div className="fixed top-0 left-0 w-64 h-full border-r border-border bg-sidebar-background">
        <div className="p-4">
          <Link to="/" className="font-display font-bold text-xl">Clipot Admin</Link>
          <div className="mt-3 text-xs text-muted-foreground">Rol</div>
          <div className="mt-1 px-2 py-1 rounded-md ring-1 ring-sidebar-border bg-sidebar-accent">{role}</div>
        </div>
        <nav className="mt-4 space-y-1 px-2">
          {links.map((l) => (
            <Link
              key={l.href}
              to={l.href}
              className={`block px-3 py-2 rounded-md text-sm ${
                location.pathname === l.href ? "bg-sidebar-accent text-foreground ring-1 ring-sidebar-border" : "hover:bg-sidebar-accent"
              }`}
            >
              {l.name}
            </Link>
          ))}
        </nav>
        <div className="px-2 mt-4">
          <Button variant="destructive" className="w-full" onClick={logout}>Salir</Button>
        </div>
      </div>
      <div className="ml-64">
        <header className="fixed top-0 left-64 right-0 h-16 border-b border-border bg-background/80 backdrop-blur-sm flex items-center justify-between px-6">
          <h1 className="font-display font-bold text-lg">Panel de Administración</h1>
          <div className="flex items-center gap-3">
            <span className="px-3 py-1 text-xs rounded-full ring-1 ring-border bg-muted">{role}</span>
            <Button variant="outline" onClick={() => navigate("/admin/dashboard")}>Ir al dashboard</Button>
          </div>
        </header>
        <main className="pt-20 px-6 pb-10">
          {children}
        </main>
      </div>
    </div>
  );
}
