import { Link } from "react-router-dom";
import Footer from "@/components/Footer";
import ChatWidget from "@/components/ChatWidget";
import CTA from "@/components/CTA";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Boxes, Layers, Cog, Building2, CheckCircle } from "lucide-react";
import SEO from "@/components/SEO";

const services = [
  {
    icon: Boxes,
    title: "Business OS Lite",
    description: "Ecosistema básico de gestión empresarial para emprendedores y microempresas. Enfoque en orden operativo sin complejidad.",
    features: ["Clientes y contactos", "Agenda y recordatorios", "Tareas y seguimiento", "Tablero básico de métricas"],
  },
  {
    icon: Layers,
    title: "Business OS Advance",
    description: "Herramientas intermedias de productividad y automatización para pymes que buscan eficiencia y consistencia.",
    features: ["Pipelines por área", "Automatización de seguimiento", "Plantillas operativas", "Reportes ejecutivos"],
  },
  {
    icon: Cog,
    title: "Business OS Pro",
    description: "Integraciones avanzadas y análisis empresarial para compañías en crecimiento que requieren visibilidad y control.",
    features: ["Integraciones externas", "Analítica avanzada", "Procesos documentados", "KPIs de desempeño"],
  },
  {
    icon: Building2,
    title: "Business OS High",
    description: "Ecosistema completo y personalizable para corporativos con operación compleja y necesidad de gobierno de procesos.",
    features: ["Arquitectura modular", "Permisos y roles granulares", "Data Warehouse", "Reportes financieros y operativos"],
  },
];

const Servicios = () => {
  return (
    <div className="min-h-screen">
      <SEO
        title="Servicios Business OS en México – Clipot"
        description="Planes de Business OS para distintos tamaños de empresa: Lite, Advance, Pro y High. Sede en Guadalajara, Jalisco; atendemos todo México."
        keywords={[
          "business os méxico",
          "ecosistema empresarial méxico",
          "sistema operativo de negocio",
          "gestión empresarial guadalajara",
          "automatización pymes méxico",
        ]}
      />
      {/* Hero */}
      <section className="pt-32 pb-20 bg-background">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-3xl mx-auto text-center"
          >
            <span className="text-sm font-medium text-primary mb-4 block">SERVICIOS</span>
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              <span className="sr-only">Servicios de agencia de marketing digital</span>
              Soluciones que{" "}
              <span className="text-primary">funcionan</span>
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Ecosistemas de negocio diseñados para distintos tipos de empresa. Sede en Guadalajara, Jalisco; atendemos todo México.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services List */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <div className="space-y-12">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="bg-background rounded-3xl p-8 md:p-12 shadow-sm ring-1 ring-border"
              >
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
                  <div>
                    <service.icon className="w-12 h-12 text-primary mb-4" />
                    <h2 className="font-display text-2xl md:text-3xl font-bold mb-4">
                      {service.title}
                    </h2>
                    <p className="text-lg text-muted-foreground mb-6">
                      {service.description}
                    </p>
                    <Button asChild>
                      <Link to={`/servicios/${service.title.toLowerCase().replace(/ /g, '-')}`}>
                        Ver más
                        <ArrowRight className="ml-2" size={18} />
                      </Link>
                    </Button>
                  </div>
                  <div>
                    <p className="text-sm font-medium text-muted-foreground mb-4">Incluye:</p>
                    <div className="grid grid-cols-2 gap-3">
                      {service.features.map((feature) => (
                        <div key={feature} className="flex items-center gap-2">
                          <CheckCircle className="w-4 h-4 text-primary flex-shrink-0" />
                          <span className="text-sm">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <CTA />
      <Footer />
      <ChatWidget />
    </div>
  );
};

export default Servicios;
