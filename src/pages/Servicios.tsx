import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ChatWidget from "@/components/ChatWidget";
import CTA from "@/components/CTA";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Target, Palette, Globe, ShoppingCart, Users, Video, Sparkles, CheckCircle } from "lucide-react";
import SEO from "@/components/SEO";

const services = [
  {
    icon: Target,
    title: "Paid Media",
    description: "Campañas de publicidad digital en Meta, Google, TikTok y LinkedIn. Optimizadas para generar leads de calidad, no solo clics.",
    features: ["Meta Ads", "Google Ads", "TikTok Ads", "LinkedIn Ads", "Remarketing", "A/B Testing"],
  },
  {
    icon: Palette,
    title: "Diseño Digital",
    description: "Creativos que convierten. Desde banners hasta landing pages, todo diseñado para captar atención y generar acción.",
    features: ["Diseño de anuncios", "Landing pages", "Branding digital", "Motion graphics", "UX/UI", "Presentaciones"],
  },
  {
    icon: Globe,
    title: "Desarrollo Web",
    description: "Sitios web optimizados para conversión. Rápidos, responsivos y diseñados para guiar al usuario hacia la acción.",
    features: ["Sitios corporativos", "Landing pages", "Optimización SEO", "Velocidad", "Analytics", "Integraciones"],
  },
  {
    icon: ShoppingCart,
    title: "Ecommerce",
    description: "Tiendas online que venden. Desde el setup inicial hasta la optimización continua de tu catálogo y proceso de compra.",
    features: ["Shopify", "WooCommerce", "Optimización checkout", "Catálogo", "Pasarelas de pago", "Logística"],
  },

  {
    icon: Sparkles,
    title: "UGC Campaigns",
    description: "Contenido generado por usuarios reales. Auténtico, creíble y con alto engagement para tus campañas.",
    features: ["Red de creadores", "Brief creativo", "Producción", "Derechos de uso", "Optimización", "Reportes"],
  },
];

const Servicios = () => {
  return (
    <div className="min-h-screen">
      <SEO
        title="Servicios de marketing digital | Paid media, desarrollo web, SEO – Clipot"
        description="Servicios de agencia de marketing digital: paid media, diseño, desarrollo web, ecommerce, community y contenidos. Estrategias enfocadas en conversión."
        keywords={["servicios marketing digital","paid media","desarrollo web","seo","ecommerce","community management"]}
      />
      <Header />
      
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
              Diseñamos estrategias a medida para decisores de negocio: 
              objetivos claros, métricas accionables y retorno demostrable.
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
