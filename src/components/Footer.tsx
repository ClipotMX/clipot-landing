import { Link } from "react-router-dom";
import { buildWhatsAppUrl, CLIPOT_PHONE_DISPLAY } from "@/config/contact";

const Footer = () => {
  return (
    <footer className="bg-brand-bg text-brand-text border-t border-brand-border py-16 px-4 md:px-8">
      <div className="container mx-auto max-w-6xl flex flex-col md:flex-row items-start md:items-center justify-between gap-10">
        <div className="flex flex-col gap-3">
          <div className="flex items-center gap-2">
            <img src="/images/clipot_logo_white.png" alt="Clipot" className="h-7 w-auto" />
          </div>
          <p className="text-brand-muted">Sistemas que hacen crecer negocios</p>
          <div className="flex flex-col gap-2 text-sm">
            <a href={`tel:${CLIPOT_PHONE_DISPLAY.replace(/\s+/g, "")}`} className="text-brand-muted hover:text-brand-text transition-colors">
              {CLIPOT_PHONE_DISPLAY}
            </a>
            <a
              href={buildWhatsAppUrl("Hola Clipot, quiero agendar una demostración de Negocio Core.")}
              target="_blank"
              rel="noopener noreferrer"
              className="text-brand-muted hover:text-brand-text transition-colors"
            >
              Agendar demostración por WhatsApp
            </a>
          </div>
        </div>

        <nav className="flex flex-wrap gap-x-8 gap-y-4 text-sm font-medium text-brand-muted">
          <a href="/#hero" className="hover:text-brand-text transition-colors">Inicio</a>
          <a href="/#como-funciona" className="hover:text-brand-text transition-colors">Proceso</a>
          <Link to="/servicios" className="hover:text-brand-text transition-colors">Paquetes</Link>
          <a href="/#contacto" className="hover:text-brand-text transition-colors">Demostración</a>
          <Link to="/privacidad" className="hover:text-brand-text transition-colors">Privacidad</Link>
          <Link to="/terminos" className="hover:text-brand-text transition-colors">Términos</Link>
        </nav>
      </div>

      <div className="container mx-auto max-w-6xl mt-12 pt-8 border-t border-brand-border">
        <p className="text-brand-muted text-sm">© 2025 Clipot. Todos los derechos reservados.</p>
      </div>
    </footer>
  );
};

export default Footer;
