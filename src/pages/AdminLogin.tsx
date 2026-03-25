import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { createClient } from "@supabase/supabase-js";

const AdminLogin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
  const supabaseAnon = import.meta.env.VITE_SUPABASE_ANON_KEY;
  const supabase = (supabaseUrl && supabaseAnon) ? createClient(supabaseUrl, supabaseAnon) : null;

  async function login() {
    setLoading(true);
    setError("");
    try {
      if (supabase) {
        const { data, error: e } = await supabase.auth.signInWithPassword({ email, password });
        if (e || !data.session?.access_token) {
          setError("Credenciales inválidas");
          return;
        }
        localStorage.setItem("userToken", data.session.access_token);
      } else {
        const res = await fetch("http://localhost:3001/api/dashboard/login", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ email, password }),
        });
        const data = await res.json();
        if (!data?.ok) {
          setError("Credenciales inválidas");
          return;
        }
        localStorage.setItem("userToken", data.token);
      }
      navigate("/admin/dashboard");
    } catch {
      setError("Error de red");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="min-h-screen">
      <Header />
      <section className="pt-28 pb-8 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-md mx-auto bg-background rounded-2xl shadow-sm ring-1 ring-border p-6">
            <h1 className="font-display text-2xl font-bold mb-4">Login de Administrador</h1>
            <div className="space-y-3">
              <Input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" />
              <Input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Contraseña" />
              {error && <p className="text-red-500 text-sm">{error}</p>}
              <Button onClick={login} disabled={loading}>
                Acceder
              </Button>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default AdminLogin;
