import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import ScrollReveal from "./ScrollReveal";

const CTA = () => {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <ScrollReveal>
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
              ¿Listo para mejorar{" "}
              <span className="text-primary">ROI</span> y acelerar ventas?
            </h2>
            <p className="text-lg text-muted-foreground mb-10 max-w-xl mx-auto">
              Agenda una llamada de 15 minutos. Conversamos de tus objetivos, métricas clave 
              y un plan accionable para tu empresa.
            </p>
            <Button asChild size="lg" className="text-base px-8">
              <Link to="/contacto">
                Agendar llamada
                <ArrowRight className="ml-2" size={18} />
              </Link>
            </Button>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default CTA;
