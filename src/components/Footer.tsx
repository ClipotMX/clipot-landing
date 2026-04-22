import { Link } from "react-router-dom";
import { buildWhatsAppUrl, CLIPOT_PHONE_DISPLAY } from "@/config/contact";
import CalBookingModal from "@/components/CalBookingModal";

const Footer = () => {
  return (
    <footer className="bg-background text-white border-t border-white/5 py-24 px-4 md:px-8">
      <div className="container mx-auto max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-16 mb-20">
          <div className="md:col-span-2 flex flex-col gap-6">
            <Link to="/" className="inline-block">
              <img src="/images/clipot_logo_white.png" alt="Clipot" className="h-10 w-auto" />
            </Link>
            <p className="text-white/60 text-lg max-w-sm leading-relaxed">
              Ingeniería de infraestructura digital para empresas que buscan escalabilidad real y control operativo total.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:bg-white/5 transition-all">
                <span className="text-xs font-mono">IN</span>
              </a>
              <a href="#" className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:bg-white/5 transition-all">
                <span className="text-xs font-mono">IG</span>
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-xs font-mono uppercase tracking-[0.2em] text-white/40 mb-8">Navegación</h4>
            <nav className="flex flex-col gap-4">
              <a href="/#" className="text-white/60 hover:text-primary transition-colors text-sm">Inicio</a>
              <a href="/#ecosystem" className="text-white/60 hover:text-primary transition-colors text-sm">Ecosistema</a>
              <a href="/#contact" className="text-white/60 hover:text-primary transition-colors text-sm">Contacto</a>
              <Link to="/privacidad" className="text-white/60 hover:text-primary transition-colors text-sm">Privacidad</Link>
            </nav>
          </div>

          <div>
            <h4 className="text-xs font-mono uppercase tracking-[0.2em] text-white/40 mb-8">Contacto</h4>
            <div className="flex flex-col gap-4">
              <a href={`tel:${CLIPOT_PHONE_DISPLAY.replace(/\s+/g, "")}`} className="text-white/60 hover:text-primary transition-colors text-sm">
                {CLIPOT_PHONE_DISPLAY}
              </a>
              <a
                href={buildWhatsAppUrl("Hola Clipot, quiero agendar mi diagnóstico de fugas de dinero.")}
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/60 hover:text-primary transition-colors text-sm"
              >
                WhatsApp Business
              </a>
              <CalBookingModal
                className="mt-4 px-6 py-3 bg-white text-black text-xs font-mono font-bold uppercase tracking-widest rounded-full hover:bg-primary transition-all text-center"
                title="Agenda tu Auditoría de Preparación Digital"
              >
                Agenda Demostracion
              </CalBookingModal>
            </div>
          </div>
        </div>

        <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-6">
          <p className="text-white/40 text-xs font-mono uppercase tracking-widest">
            © {new Date().getFullYear()} Clipot Engineering. All rights reserved.
          </p>
          <div className="flex gap-8">
            <span className="text-[10px] font-mono text-white/20 uppercase tracking-[0.3em]">Built for Scale</span>
            <span className="text-[10px] font-mono text-white/20 uppercase tracking-[0.3em]">Secure & Reliable</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
