import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import clipotLogo from "@/assets/clipot-logo.png";
import { createClient } from "@supabase/supabase-js";

const navLinks = [
  { name: "Inicio", href: "/" },
  { name: "Nosotros", href: "/nosotros" },
  { name: "Servicios", href: "/servicios" },
  { name: "Portfolio", href: "/portfolio" },
  { name: "Kommo CRM", href: "/kommo" },
  { name: "Blog", href: "/blog" },
  { name: "Contacto", href: "/contacto" },
];

const navLinksAdmin = [
  { name: "Dashboard", href: "/admin/dashboard" },
  { name: "CMS", href: "/admin/cms" },
  { name: "Emails", href: "/admin/email" },
  { name: "Integraciones", href: "/admin/integraciones" },
  { name: "Reportes", href: "/admin/reportes" },
  { name: "Roles", href: "/admin/roles" },
  { name: "Chat", href: "/admin/chat" },
];

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const [role, setRole] = useState<string>("");
  const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
  const supabaseAnon = import.meta.env.VITE_SUPABASE_ANON_KEY;
  const supabase = (supabaseUrl && supabaseAnon) ? createClient(supabaseUrl, supabaseAnon) : null;
  const isAdmin = location.pathname.startsWith("/admin");

  useEffect(() => {
    (async () => {
      if (isAdmin && supabase) {
        const { data } = await supabase.auth.getUser();
        const r = (data?.user?.app_metadata && data.user.app_metadata.role) || "";
        setRole(r);
      } else {
        setRole("");
      }
    })();
  }, [location.pathname]);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <img src={clipotLogo} alt="Clipot, agencia de marketing digital en Ciudad de México (CDMX)" className="h-10 w-auto" />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            {(isAdmin ? navLinksAdmin : navLinks).map((link) => (
              <Link
                key={link.name}
                to={link.href}
                className={`text-sm font-medium transition-colors hover:text-primary ${
                  location.pathname === link.href
                    ? "text-primary"
                    : "text-foreground/80"
                }`}
              >
                {link.name}
              </Link>
            ))}
          </nav>

          {/* CTA Button */}
          <div className="hidden lg:block">
            {isAdmin ? (
              <div className="flex items-center gap-3">
                <span className="px-3 py-1 text-xs rounded-full ring-1 ring-border bg-muted">{role || "user"}</span>
                <Button asChild variant="outline">
                  <Link to="/admin/dashboard">Ir al dashboard</Link>
                </Button>
                <Button
                  variant="destructive"
                  onClick={async () => {
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
                    window.location.href = "/admin/login";
                  }}
                >
                  Salir
                </Button>
              </div>
            ) : (
              <Button asChild>
                <Link to="/contacto">Hablemos</Link>
              </Button>
            )}
          </div>

          {/* Mobile Menu Toggle */}
          <button
            className="lg:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="lg:hidden py-4 border-t border-border">
            <div className="flex flex-col gap-4">
              {(isAdmin ? navLinksAdmin : navLinks).map((link) => (
                <Link
                  key={link.name}
                  to={link.href}
                  className={`text-base font-medium transition-colors hover:text-primary py-2 ${
                    location.pathname === link.href
                      ? "text-primary"
                      : "text-foreground/80"
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.name}
                </Link>
              ))}
              {isAdmin ? (
                <div className="flex items-center gap-3 mt-2">
                  <span className="px-3 py-1 text-xs rounded-full ring-1 ring-border bg-muted">{role || "user"}</span>
                  <Button asChild variant="outline">
                    <Link to="/admin/dashboard" onClick={() => setIsMenuOpen(false)}>
                      Ir al dashboard
                    </Link>
                  </Button>
                </div>
              ) : (
                <Button asChild className="mt-2">
                  <Link to="/contacto" onClick={() => setIsMenuOpen(false)}>
                    Hablemos
                  </Link>
                </Button>
              )}
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
