import { useEffect, useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import CalBookingModal from "@/components/CalBookingModal";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const links = useMemo(
    () => [
      { label: "Inicio", href: "#hero" },
      { label: "Cómo funciona", href: "#como-funciona" },
      { label: "Soluciones", href: "#soluciones" },
      { label: "Contacto", href: "#contacto" },
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
        "bg-[rgb(var(--color-bg-rgb)/0.8)] backdrop-blur-md",
        isScrolled ? "border-b border-brand-border" : "border-b border-transparent",
      ].join(" ")}
    >
      <div className="container mx-auto max-w-6xl h-full px-4 md:px-8 flex items-center justify-between">
        <a href="#hero" className="flex items-center gap-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-primary focus-visible:ring-offset-2 focus-visible:ring-offset-brand-bg">
          <img src="/images/clipot_logo_white.png" alt="Clipot" className="h-7 w-auto" />
        </a>

        <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-brand-muted">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="hover:text-brand-text transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-primary focus-visible:ring-offset-2 focus-visible:ring-offset-brand-bg rounded"
            >
              {l.label}
            </a>
          ))}
        </nav>

        <div className="hidden md:flex items-center gap-3">
          <CalBookingModal
            className="inline-flex items-center justify-center h-10 px-4 rounded-lg bg-accent-gradient text-white font-semibold shadow-[0_0_24px_rgba(107,78,255,0.22)] hover:shadow-[0_0_32px_rgba(107,78,255,0.32)] transition-shadow focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-primary focus-visible:ring-offset-2 focus-visible:ring-offset-brand-bg"
            title="Agendar diagnóstico (30 min)"
          >
            Agendar diagnóstico
          </CalBookingModal>
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
            className="md:hidden overflow-hidden border-b border-brand-border bg-[rgb(var(--color-bg-rgb)/0.92)] backdrop-blur-md"
          >
            <div className="px-4 pb-5 pt-2 flex flex-col gap-2">
              {links.map((l) => (
                <a
                  key={l.href}
                  href={l.href}
                  className="px-3 py-3 rounded-lg text-brand-text hover:bg-brand-surface transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {l.label}
                </a>
              ))}
              <div className="mt-2">
                <CalBookingModal
                  className="inline-flex items-center justify-center h-11 w-full rounded-lg bg-accent-gradient text-white font-semibold"
                  title="Agendar diagnóstico (30 min)"
                  onTrigger={() => setIsMenuOpen(false)}
                >
                  Agendar diagnóstico
                </CalBookingModal>
              </div>
            </div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;
