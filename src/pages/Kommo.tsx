import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ChatWidget from "@/components/ChatWidget";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle, MessageSquare, Zap, Users, BarChart } from "lucide-react";
import SEO from "@/components/SEO";

const features = [
  {
    icon: MessageSquare,
    title: "Todos tus canales en uno",
    description: "WhatsApp, Instagram, Facebook, Email y más. Todo centralizado en una sola bandeja de entrada.",
  },
  {
    icon: Zap,
    title: "Automatización inteligente",
    description: "Flujos automatizados que responden, califican y asignan leads sin intervención manual.",
  },
  {
    icon: Users,
    title: "Gestión de equipo",
    description: "Asigna leads a vendedores, mide rendimiento y optimiza tu proceso de ventas.",
  },
  {
    icon: BarChart,
    title: "Analytics en tiempo real",
    description: "Dashboards con métricas que importan: leads, conversiones, tiempos de respuesta.",
  },
];

const benefits = [
  "Implementación guiada por expertos",
  "Migración de datos sin pérdida",
  "Capacitación para tu equipo",
  "Soporte prioritario como partners",
  "Integraciones personalizadas",
  "Automatizaciones a medida",
];

const Kommo = () => {
  return (
    <div className="min-h-screen">
      <SEO
        title="Implementación Kommo CRM | Agencia de marketing digital – Clipot"
        description="Implementamos Kommo CRM para centralizar tus canales, automatizar y gestionar leads. Partners oficiales para integraciones y soporte."
        keywords={["Kommo CRM","implementación CRM","agencia marketing digital","gestión de leads"]}
      />
      <Header />
      
      {/* Hero */}
      <section className="pt-32 pb-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-center"
            >
              <span className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium mb-6">
                Partners Oficiales
              </span>
              <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                <span className="sr-only">Agencia de marketing digital</span>
                Kommo CRM
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed max-w-2xl mx-auto mb-10">
                Centralice canales, automatice calificación y mida tiempos de respuesta. 
                Implementamos Kommo para acelerar pipeline y mejorar conversión con reporting ejecutivo.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button asChild size="lg">
                  <Link to="/contacto">
                    Solicitar demo
                    <ArrowRight className="ml-2" size={18} />
                  </Link>
                </Button>
                <Button asChild variant="outline" size="lg">
                  <a href="https://www.kommo.com" target="_blank" rel="noopener noreferrer">
                    Conocer Kommo
                  </a>
                </Button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-display text-3xl md:text-4xl font-bold text-center mb-16"
          >
            ¿Por qué Kommo?
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-background p-8 rounded-2xl"
              >
                <feature.icon className="w-10 h-10 text-primary mb-4" />
                <h3 className="font-display text-xl font-semibold mb-3">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Us */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <h2 className="font-display text-3xl md:text-4xl font-bold mb-6">
                  ¿Por qué implementar con Clipot?
                </h2>
                <p className="text-lg text-muted-foreground mb-8">
                  Como partners oficiales de Kommo, no solo conocemos la herramienta 
                  por dentro y por fuera, sino que la usamos todos los días para 
                  gestionar leads de nuestros clientes.
                </p>
                <Button asChild size="lg">
                  <Link to="/contacto">
                    Agendar llamada
                    <ArrowRight className="ml-2" size={18} />
                  </Link>
                </Button>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <div className="bg-muted rounded-2xl p-8">
                  <h3 className="font-display text-xl font-semibold mb-6">
                    Lo que incluye
                  </h3>
                  <ul className="space-y-4">
                    {benefits.map((benefit) => (
                      <li key={benefit} className="flex items-center gap-3">
                        <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                        <span>{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
      <ChatWidget />
    </div>
  );
};

export default Kommo;
