const Footer = () => {
  return (
    <footer className="bg-brand-bg text-brand-text border-t border-brand-border py-16 px-4 md:px-8">
      <div className="container mx-auto max-w-6xl flex flex-col md:flex-row items-start md:items-center justify-between gap-10">
        <div className="flex flex-col gap-3">
          <div className="flex items-center gap-2">
            <svg width="28" height="28" viewBox="0 0 24 24" aria-hidden="true" className="shrink-0">
              <defs>
                <linearGradient id="clipotFooterGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#6B4EFF" />
                  <stop offset="100%" stopColor="#4F8EF7" />
                </linearGradient>
              </defs>
              <path
                d="M20 12a7.5 7.5 0 0 1-7.5 7.5c-1.1 0-2.16-.23-3.12-.66L4 20l1.23-3.96A7.45 7.45 0 0 1 4.5 12 7.5 7.5 0 0 1 12 4.5 7.5 7.5 0 0 1 20 12Z"
                fill="url(#clipotFooterGradient)"
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
          </div>
          <p className="text-brand-muted">Sistemas que hacen crecer negocios</p>
        </div>

        <nav className="flex flex-wrap gap-x-8 gap-y-4 text-sm font-medium text-brand-muted">
          <a href="#hero" className="hover:text-brand-text transition-colors">Inicio</a>
          <a href="#como-funciona" className="hover:text-brand-text transition-colors">Cómo funciona</a>
          <a href="#soluciones" className="hover:text-brand-text transition-colors">Soluciones</a>
          <a href="#contacto" className="hover:text-brand-text transition-colors">Contacto</a>
        </nav>
      </div>

      <div className="container mx-auto max-w-6xl mt-12 pt-8 border-t border-brand-border">
        <p className="text-brand-muted text-sm">© 2025 Clipot. Todos los derechos reservados.</p>
      </div>
    </footer>
  );
};

export default Footer;
