import { Link } from "react-router-dom";
import Footer from "@/components/Footer";
import ChatWidget from "@/components/ChatWidget";
import CTA from "@/components/CTA";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Boxes, Globe, Store, Shuffle, CreditCard, CheckCircle } from "lucide-react";
import SEO from "@/components/SEO";

const services = [
  {
    icon: Boxes,
    title: "Negocio Lite",
    slug: "negocio-lite",
    description: "Módulos standalone para iniciar sin dependencias cruzadas. Arquitectura modular lista para escalar.",
    features: ["Instancias independientes", "Bloques por área", "Setup rápido", "Base para escalar"],
  },
  {
    icon: Globe,
    title: "Negocio Digital",
    slug: "negocio-digital",
    description: "CRM (Kommo/Bolten) + Shopify para sincronización de ventas online y leads digitales.",
    features: ["Pedidos online", "Abandono de carrito", "Leads al CRM", "Automatizaciones"],
  },
  {
    icon: Store,
    title: "Negocio Plus",
    slug: "negocio-plus",
    description: "CRM (Kommo/Bolten) + Pulpos (POS) para ventas presenciales, clientes e inventario local.",
    features: ["Clientes tienda física", "Inventario local", "Estados de compra offline", "Control por sucursal"],
  },
  {
    icon: Shuffle,
    title: "Negocio Total",
    slug: "negocio-total",
    description: "Omnicanalidad completa: Kommo/Bolten <-> Shopify <-> Pulpos con inventario y clientes unificados.",
    features: ["Inventario omnicanal", "Unificación de clientes", "Resolución de conflictos", "Reportes unificados"],
  },
  {
    icon: CreditCard,
    title: "Negocio Pay",
    slug: "negocio-pay",
    description: "Mercado Pago para cobros, webhooks de transacciones y conciliación de pagos.",
    features: ["Links de pago", "Webhooks", "Conciliación", "Estatus de pago"],
  },
];

const Servicios = () => {
  return (
    <div className="min-h-screen">
      <SEO
        title="Servicios Negocio Core en México – Clipot"
        description="Servicios de Negocio Core: Negocio Lite, Negocio Digital, Negocio Plus, Negocio Total y Negocio Pay. Sede en Guadalajara, Jalisco; atendemos todo México."
        keywords={[
          "negocio core",
          "negocio core méxico",
          "negocio digital",
          "negocio plus",
          "negocio total",
          "negocio lite",
          "negocio pay",
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
      <ChatWidget />
    </div>
  );
};

export default Servicios;
