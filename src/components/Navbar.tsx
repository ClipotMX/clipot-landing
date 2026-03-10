import { useEffect, useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const links = useMemo(
    () => [
      { label: "Inicio", href: "#hero" },
      { label: "Cómo funciona", href: "#como-funciona" },
      { label: "Planes", href: "#planes" },
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
          <svg width="28" height="28" viewBox="0 0 24 24" aria-hidden="true" className="shrink-0">
            <defs>
              <linearGradient id="clipotNavLogoGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#6B4EFF" />
                <stop offset="100%" stopColor="#4F8EF7" />
              </linearGradient>
            </defs>
            <path
              d="M20 12a7.5 7.5 0 0 1-7.5 7.5c-1.1 0-2.16-.23-3.12-.66L4 20l1.23-3.96A7.45 7.45 0 0 1 4.5 12 7.5 7.5 0 0 1 12 4.5 7.5 7.5 0 0 1 20 12Z"
              fill="url(#clipotNavLogoGradient)"
            />
            <path
              d="M8.2 12.1h5.6M8.2 9.7h7.6"
              stroke="rgba(255,255,255,0.85)"
              strokeWidth="1.2"
              strokeLinecap="round"
            />
          </svg>
          <span className="text-lg font-bold tracking-tight bg-accent-gradient bg-clip-text text-transparent">
            Clipot
          </span>
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
          <a
            href="https://calendly.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center h-10 px-4 rounded-lg bg-accent-gradient text-white font-semibold shadow-[0_0_24px_rgba(107,78,255,0.22)] hover:shadow-[0_0_32px_rgba(107,78,255,0.32)] transition-shadow focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-primary focus-visible:ring-offset-2 focus-visible:ring-offset-brand-bg"
          >
            Agendar diagnóstico
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
              <a
                href="https://calendly.com"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-2 inline-flex items-center justify-center h-11 rounded-lg bg-accent-gradient text-white font-semibold"
                onClick={() => setIsMenuOpen(false)}
              >
                Agendar diagnóstico
              </a>
            </div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;
