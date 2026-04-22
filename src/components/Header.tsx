import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { Button, buttonVariants } from "@/components/ui/button";
import clipotLogo from "@/assets/clipot-logo.png";
import CalBookingModal from "@/components/CalBookingModal";
import { cn } from "@/lib/utils";

const navLinks = [
  { name: "Inicio", href: "#home" },
  { name: "Socios", href: "#partners" },
  { name: "Problemas", href: "#pain-points" },
  { name: "Ecosistema", href: "#ecosystem" },
  { name: "Resultados", href: "#stats" },
  { name: "Contacto", href: "#contact" },
];

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-white/5">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          <Link to="/" className="flex items-center">
            <img 
              src="/images/clipot_logo_white.png" 
              alt="Clipot" 
              className="h-10 w-auto" 
            />
          </Link>

          <nav className="hidden lg:flex items-center gap-12">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-xs font-mono uppercase tracking-[0.2em] text-white/60 hover:text-primary transition-colors"
              >
                {link.name}
              </a>
            ))}
          </nav>

          <div className="hidden lg:block">
            <CalBookingModal
              className="px-6 py-2.5 bg-white text-black text-xs font-mono font-bold uppercase tracking-widest rounded-full hover:bg-primary transition-all"
              title="Agenda tu Auditoría de Preparación Digital"
            >
              Agenda Demostracion
            </CalBookingModal>
          </div>

          <button
            className="lg:hidden p-2 text-white"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {isMenuOpen && (
          <nav 
            className="lg:hidden py-8 border-t border-white/5 bg-background"
            data-aos="fade-down"
            data-aos-duration="300"
          >
            <div className="flex flex-col gap-6">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-xs font-mono uppercase tracking-[0.2em] text-white/60 hover:text-primary transition-colors py-2"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.name}
                </a>
              ))}
              <CalBookingModal
                className="w-full py-4 bg-primary text-black text-xs font-mono font-bold uppercase tracking-widest rounded-xl text-center"
                title="Agenda tu Auditoría de Preparación Digital"
              >
                Agenda Demostracion
              </CalBookingModal>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
