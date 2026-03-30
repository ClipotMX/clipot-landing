import { Link } from "react-router-dom";
import Footer from "@/components/Footer";
import CTA from "@/components/CTA";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Globe, Store, Shuffle, CheckCircle } from "lucide-react";
import SEO from "@/components/SEO";

const services = [
  {
    icon: Globe,
    title: "Negocio Digital",
    slug: "negocio-digital",
    level: "Básico",
    monthlyFrom: 14900,
    setupFrom: 9900,
    description: "Ventas online y leads digitales sincronizados para reducir fricción y mejorar conversión.",
    features: [
      "Implementación del sistema",
      "Capacitación personalizada",
      "Soporte continuo",
      "Integraciones (CRM + Shopify)",
      "Métricas de resultados medibles",
    ],
  },
  {
    icon: Store,
    title: "Negocio Plus",
    slug: "negocio-plus",
    level: "Profesional",
    monthlyFrom: 24900,
    setupFrom: 14900,
    description: "Operación física conectada: clientes, ventas e inventario con trazabilidad y control por sucursal.",
    features: [
      "Implementación del sistema",
      "Capacitación personalizada",
      "Soporte continuo",
      "Integraciones (CRM + Pulpos POS)",
      "Métricas de resultados medibles",
    ],
  },
  {
    icon: Shuffle,
    title: "Negocio Total",
    slug: "negocio-total",
    level: "Empresarial",
    monthlyFrom: 44900,
    setupFrom: 24900,
    description: "Omnicanalidad completa: inventario y clientes unificados para operar y crecer sin caos.",
    features: [
      "Implementación del sistema",
      "Capacitación personalizada",
      "Soporte continuo",
      "Integraciones (CRM + Shopify + Pulpos)",
      "Métricas de resultados medibles",
    ],
  },
];

const formatMXN = (n: number) => `$${n.toLocaleString("es-MX")} MXN`;

const Servicios = () => {
  return (
    <div className="min-h-screen">
      <SEO
        title="Paquetes de Negocio Core en México – Clipot"
        description="Paquetes de Negocio Core enfocados en resultados: Negocio Digital (Básico), Negocio Plus (Profesional) y Negocio Total (Empresarial). Sede en Guadalajara, Jalisco; atendemos todo México."
        keywords={[
          "negocio core",
          "negocio core méxico",
          "negocio digital",
          "negocio plus",
          "negocio total",
          "ecosistema empresarial méxico",
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
                    <div className="text-sm font-semibold text-primary mb-2">
                      {service.level}
                    </div>
                    <div className="mb-5 flex flex-wrap items-center gap-x-6 gap-y-2 text-sm">
                      <div className="font-semibold text-foreground">Desde {formatMXN(service.monthlyFrom)}/mes</div>
                      <div className="text-muted-foreground">Setup desde {formatMXN(service.setupFrom)}</div>
                    </div>
                    <p className="text-lg text-muted-foreground mb-6">
                      {service.description}
                    </p>
                    <Button asChild>
                      <Link to={`/servicios/${service.slug}`}>
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
    </div>
  );
};

export default Servicios;
