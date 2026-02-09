import { Link } from "react-router-dom";
import clipotLogo from "@/assets/clipot-logo.png";

const Footer = () => {
  return (
    <footer className="bg-foreground text-background py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Logo & Description */}
          <div className="lg:col-span-1">
            <img src={clipotLogo} alt="Clipot" className="h-10 w-auto mb-4 brightness-0 invert" />
            <p className="text-background/70 text-sm leading-relaxed">
              Especialistas en generación y gestión de leads. Convertimos oportunidades en resultados.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-display font-semibold text-lg mb-4">Navegación</h4>
            <ul className="space-y-3">
              <li>
                <Link to="/nosotros" className="text-background/70 hover:text-background transition-colors text-sm">
                  Nosotros
                </Link>
              </li>
              <li>
                <Link to="/servicios" className="text-background/70 hover:text-background transition-colors text-sm">
                  Servicios
                </Link>
              </li>
              <li>
                <Link to="/portfolio" className="text-background/70 hover:text-background transition-colors text-sm">
                  Portfolio
                </Link>
              </li>
              <li>
                <Link to="/blog" className="text-background/70 hover:text-background transition-colors text-sm">
                  Blog
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-display font-semibold text-lg mb-4">Servicios</h4>
            <ul className="space-y-3">
              <li className="text-background/70 text-sm">Paid Media</li>
              <li className="text-background/70 text-sm">Diseño Digital</li>
              <li className="text-background/70 text-sm">Desarrollo Web</li>
              <li className="text-background/70 text-sm">Ecommerce</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-display font-semibold text-lg mb-4">Contacto</h4>
            <ul className="space-y-3">
              <li className="text-background/70 text-sm">hola@clipot.com</li>
              <li className="text-background/70 text-sm">+52 55 1234 5678</li>
              <li className="text-background/70 text-sm">Ciudad de México, MX</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-background/20 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-background/50 text-sm">
            © {new Date().getFullYear()} Clipot. Todos los derechos reservados.
          </p>
          <div className="flex gap-6">
            <Link to="/privacidad" className="text-background/50 hover:text-background transition-colors text-sm">
              Privacidad
            </Link>
            <Link to="/terminos" className="text-background/50 hover:text-background transition-colors text-sm">
              Términos
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
