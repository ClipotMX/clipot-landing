import { Link } from "react-router-dom";
import { ArrowRight, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import ScrollReveal from "./ScrollReveal";

const benefits = [
  "Atendemos cada lead en menos de 5 minutos",
  "Seguimiento personalizado y automatizado",
  "Reportes en tiempo real de cada oportunidad",
  "Integración completa con tu CRM",
  "Equipo dedicado a tu negocio",
];

const LeadManagement = () => {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <ScrollReveal direction="left">
            <span className="text-sm font-medium text-primary mb-4 block">
              NUESTRO DIFERENCIADOR
            </span>
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
              No solo generamos leads.
              <br />
              <span className="text-primary">Los gestionamos.</span>
            </h2>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              El 80% de las agencias te entregan leads y desaparecen. 
              Nosotros nos encargamos de todo el proceso: desde la generación 
              hasta el primer contacto. Tú solo cierras.
            </p>

            <ul className="space-y-4 mb-10">
              {benefits.map((benefit) => (
                <li key={benefit} className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-foreground">{benefit}</span>
                </li>
              ))}
            </ul>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button asChild size="lg">
                <Link to="/contacto">
                  Gestionen mis leads
                  <ArrowRight className="ml-2" size={18} />
                </Link>
              </Button>
              <Button asChild variant="ghost" size="lg">
                <Link to="/servicios">Autogestionar leads</Link>
              </Button>
            </div>
          </ScrollReveal>

          {/* Visual */}
          <ScrollReveal direction="right">
            <div className="bg-muted rounded-3xl p-8 md:p-12">
              <div className="space-y-6">
                {/* Simulated Chat/Lead Flow */}
                <div className="bg-background rounded-xl p-4 shadow-sm">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center">
                      <span className="text-primary font-semibold text-sm">JP</span>
                    </div>
                    <div>
                      <p className="font-medium text-sm">Juan Pérez</p>
                      <p className="text-xs text-muted-foreground">Nuevo lead • hace 2 min</p>
                    </div>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    "Necesito cotización para campaña de Facebook Ads..."
                  </p>
                </div>

                <div className="bg-background rounded-xl p-4 shadow-sm border-l-4 border-primary">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center">
                      <span className="text-primary-foreground font-semibold text-sm">C</span>
                    </div>
                    <div>
                      <p className="font-medium text-sm">Clipot Team</p>
                      <p className="text-xs text-muted-foreground">Respondido • hace 1 min</p>
                    </div>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    "¡Hola Juan! Gracias por contactarnos. ¿Cuál es tu presupuesto mensual?"
                  </p>
                </div>

                <div className="flex items-center justify-between bg-primary/10 rounded-xl p-4">
                  <div>
                    <p className="font-medium text-sm">Tiempo de respuesta promedio</p>
                    <p className="text-2xl font-display font-bold text-primary">3 min</p>
                  </div>
                  <div className="text-right">
                    <p className="font-medium text-sm">Tasa de conversión</p>
                    <p className="text-2xl font-display font-bold text-primary">34%</p>
                  </div>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
};

export default LeadManagement;
