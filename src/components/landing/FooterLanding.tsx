import React from 'react';

const FooterLanding = () => {
  return (
    <footer id="contacto" className="scroll-mt-[80px] bg-brand-bg text-brand-text py-20 border-t border-brand-border px-4 md:px-8">
      <div className="container mx-auto max-w-6xl flex flex-col md:flex-row justify-between items-center gap-8">
        
        {/* Logo & Tagline */}
        <div className="flex flex-col items-center md:items-start gap-4">
          <div className="flex items-center gap-2">
            <svg width="28" height="28" viewBox="0 0 24 24" aria-hidden="true" className="shrink-0">
              <defs>
                <linearGradient id="clipotLogoGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#6B4EFF" />
                  <stop offset="100%" stopColor="#4F8EF7" />
                </linearGradient>
              </defs>
              <path
                d="M20 12a7.5 7.5 0 0 1-7.5 7.5c-1.1 0-2.16-.23-3.12-.66L4 20l1.23-3.96A7.45 7.45 0 0 1 4.5 12 7.5 7.5 0 0 1 12 4.5 7.5 7.5 0 0 1 20 12Z"
                fill="url(#clipotLogoGradient)"
              />
              <path
                d="M8.2 12.1h5.6M8.2 9.7h7.6"
                stroke="rgba(255,255,255,0.85)"
                strokeWidth="1.2"
                strokeLinecap="round"
              />
            </svg>
            <span className="text-xl font-bold tracking-tight">Clipot</span>
          </div>
          <p className="text-brand-muted text-sm">
            En Clipot implementamos Business OS para que tu empresa trabaje con orden.
          </p>
        </div>

        {/* Links */}
        <nav className="flex flex-wrap justify-center gap-8 text-sm font-medium text-brand-muted">
          <a href="#hero" className="hover:text-brand-text transition-colors">Inicio</a>
          <a href="#como-funciona" className="hover:text-brand-text transition-colors">Cómo funciona</a>
          <a href="#planes" className="hover:text-brand-text transition-colors">Planes</a>
          <a href="#contacto" className="hover:text-brand-text transition-colors">Contacto</a>
        </nav>

        {/* Copyright */}
        <div className="text-brand-muted text-xs">
          © 2025 Clipot
        </div>
      </div>
    </footer>
  );
};

export default FooterLanding;
