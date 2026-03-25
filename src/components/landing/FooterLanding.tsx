import React from 'react';

const FooterLanding = () => {
  return (
    <footer id="contacto" className="scroll-mt-[80px] bg-brand-bg text-brand-text py-20 border-t border-brand-border px-4 md:px-8">
      <div className="container mx-auto max-w-6xl flex flex-col md:flex-row justify-between items-center gap-8">
        
        {/* Logo & Tagline */}
        <div className="flex flex-col items-center md:items-start gap-4">
          <div className="flex items-center gap-2">
            <img src="/images/clipot_logo_white.png" alt="Clipot" className="h-7 w-auto" />
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
