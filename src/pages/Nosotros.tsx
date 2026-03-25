import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ChatWidget from "@/components/ChatWidget";
import CTA from "@/components/CTA";
import { motion } from "framer-motion";
import { Target, Zap, Heart } from "lucide-react";
import SEO from "@/components/SEO";

const values = [
  {
    icon: Target,
    title: "Resultados primero",
    description: "No medimos nuestro éxito por impresiones o clics. Lo medimos por leads calificados y ventas cerradas.",
  },
  {
    icon: Zap,
    title: "Velocidad",
    description: "En el mundo digital, cada segundo cuenta. Respondemos rápido y ejecutamos más rápido.",
  },
  {
    icon: Heart,
    title: "Transparencia",
    description: "Sin letra pequeña, sin sorpresas. Reportes claros y comunicación directa siempre.",
  },
];

const Nosotros = () => {
  return (
    <div className="min-h-screen">
      <SEO
        title="Agencia de marketing digital en CDMX | Sobre Clipot"
        description="Conoce a Clipot, agencia de marketing digital en Ciudad de México (CDMX). Especialistas en generación y gestión de leads con foco en resultados para empresas en México."
        keywords={[
          "agencia de marketing digital en cdmx",
          "agencia de marketing digital ciudad de méxico",
          "agencia de leads cdmx",
          "generación de leads méxico",
          "gestión de leads cdmx",
          "performance marketing méxico",
          "marketing para pymes cdmx",
          "agencia de marketing cerca de mí",
        ]}
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
            <span className="text-sm font-medium text-primary mb-4 block">NOSOTROS</span>
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              <span className="sr-only">Agencia de marketing digital</span>
              Sabemos de leads porque{" "}
              <span className="text-primary">solo hacemos eso</span>
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Trabajamos con equipos de ventas y dirección para reducir CAC y acelerar el cierre. 
              Generamos oportunidades y gestionamos el flujo para maximizar ingresos.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Story */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="font-display text-3xl md:text-4xl font-bold mb-8">
                Nuestra historia
              </h2>
              <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
                <p>
                  Empezamos como muchos: frustrados. Veíamos cómo agencias prometían 
                  resultados increíbles y entregaban reportes llenos de métricas 
                  que no significaban nada para el negocio.
                </p>
                <p>
                  Leads sin responder. Oportunidades perdidas. Inversión desperdiciada.
                </p>
                <p>
                  Decidimos hacer las cosas diferente. No solo generamos leads, 
                  los gestionamos. Porque de nada sirve tener 100 leads si no 
                  puedes atenderlos a tiempo.
                </p>
                <p className="font-semibold text-foreground">
                  Hoy, más de 150 empresas confían en nosotros para hacer crecer 
                  sus ventas. Y seguimos creciendo.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-display text-3xl md:text-4xl font-bold text-center mb-16"
          >
            Lo que nos mueve
          </motion.h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <value.icon className="w-12 h-12 text-primary mx-auto mb-4" />
                <h3 className="font-display text-xl font-semibold mb-3">{value.title}</h3>
                <p className="text-muted-foreground">{value.description}</p>
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

export default Nosotros;
