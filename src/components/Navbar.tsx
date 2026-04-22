import { useEffect, useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { buildWhatsAppUrl } from "@/config/contact";
import { track } from "@vercel/analytics";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const links = useMemo(
    () => [
      { label: "Inicio", to: "/#hero" },
      { label: "Proceso", to: "/#como-funciona" },
      { label: "Soluciones", to: "/#soluciones" },
      { label: "Paquetes", to: "/servicios" },
      { label: "Demostración", to: "/#contacto" },
    ],
    [],
  );

  useEffect(() => {
    function onScroll() {
      setIsScrolled(window.scrollY > 8);
    }

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    function onKeyDown(e: KeyboardEvent) {
      if (e.key === "Escape") setIsMenuOpen(false);
    }

    if (!isMenuOpen) return;
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [isMenuOpen]);

  return (
    <header
      className={[
        "fixed top-0 left-0 right-0 z-50",
        "h-14 md:h-16",
        "bg-background/80 backdrop-blur-md",
        isScrolled ? "border-b border-border" : "border-b border-transparent",
      ].join(" ")}
    >
      <div className="container mx-auto max-w-6xl h-full px-4 md:px-8 flex items-center justify-between">
        <Link to="/#hero" className="flex items-center gap-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-primary focus-visible:ring-offset-2 focus-visible:ring-offset-brand-bg">
          <img src="/images/clipot_logo_white.png" alt="Clipot" className="h-7 w-auto" />
        </Link>

        <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-brand-muted">
          {links.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              className="hover:text-brand-text transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-primary focus-visible:ring-offset-2 focus-visible:ring-offset-brand-bg rounded"
            >
              {l.label}
            </Link>
          ))}
        </nav>

        <div className="hidden md:flex items-center gap-3">
          <a
            href={buildWhatsAppUrl("Hola Clipot, quiero agendar una demostración de Negocio Core.")}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center h-10 px-4 rounded-lg bg-accent-gradient text-white font-semibold shadow-[0_0_24px_rgba(107,78,255,0.22)] hover:shadow-[0_0_32px_rgba(107,78,255,0.32)] transition-shadow focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-primary focus-visible:ring-offset-2 focus-visible:ring-offset-brand-bg"
            onClick={() => track("Demo CTA Clicked", { channel: "whatsapp", source: "navbar" })}
          >
            Agendar demostración
          </a>
        </div>

        <button
          type="button"
          className="md:hidden inline-flex items-center justify-center w-10 h-10 rounded-lg border border-brand-border bg-brand-surface text-brand-text focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-primary focus-visible:ring-offset-2 focus-visible:ring-offset-brand-bg"
          aria-label={isMenuOpen ? "Cerrar menú" : "Abrir menú"}
          aria-expanded={isMenuOpen}
          aria-controls="navbar-mobile-menu"
          onClick={() => setIsMenuOpen((v) => !v)}
        >
          {isMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      <AnimatePresence>
        {isMenuOpen ? (
          <motion.div
            id="navbar-mobile-menu"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="md:hidden overflow-hidden bg-background border-b border-border shadow-xl"
          >
            <div className="px-4 pb-5 pt-2 flex flex-col gap-2">
              {links.map((l) => (
                <Link
                  key={l.to}
                  to={l.to}
                  className="px-3 py-3 rounded-lg text-brand-text hover:bg-brand-surface transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {l.label}
                </Link>
              ))}
              <div className="mt-2">
                <a
                  href={buildWhatsAppUrl("Hola Clipot, quiero agendar una demostración de Negocio Core.")}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center h-11 w-full rounded-lg bg-accent-gradient text-white font-semibold"
                  onClick={() => {
                    track("Demo CTA Clicked", { channel: "whatsapp", source: "navbar_mobile" });
                    setIsMenuOpen(false);
                  }}
                >
                  Agendar demostración
                </a>
              </div>
            </div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;
