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
        title="Sobre Clipot | Sede en Guadalajara, Jalisco – Atendemos todo México"
        description="Clipot tiene su sede en Guadalajara, Jalisco. Atendemos a todo México y proyectamos expansión a Latinoamérica y España. Actualmente nos enfocamos exclusivamente en México por estar en etapa de inicio."
        keywords={[
          "clipot guadalajara",
          "agencia en jalisco",
          "servicios empresariales méxico",
          "business os méxico",
          "ecosistema empresarial",
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
            <span className="text-sm font-medium text-primary mb-4 block">NOSOTROS</span>
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              <span className="sr-only">Agencia de marketing digital</span>
              Sabemos de leads porque{" "}
              <span className="text-primary">solo hacemos eso</span>
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Sede en Guadalajara, Jalisco. Atendemos todo México y proyectamos expansión futura a Latinoamérica y España. 
              Hoy nos enfocamos en el mercado mexicano para consolidar un ecosistema empresarial (Business OS) claro, ordenado y funcional.
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
                  Nacimos en Guadalajara con una idea simple: el negocio crece cuando el sistema funciona.
                  Menos ruido, más orden operativo. Menos silos, más visibilidad.
                </p>
                <p>
                  Business OS es nuestra forma de integrar clientes, ventas, pagos, operación y reportes para que todo trabaje en conjunto.
                  Primero México; después Latinoamérica y España.
                </p>
                <p className="font-semibold text-foreground">
                  Trabajamos con equipos de dirección y operación para construir ecosistemas que sostienen el crecimiento.
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
