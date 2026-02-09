import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import SEO from "@/components/SEO";

const Privacidad = () => {
  return (
    <div className="min-h-screen">
      <SEO
        title="Política de privacidad | Clipot"
        description="Consulta nuestra política de privacidad y cómo protegemos tus datos en Clipot."
        keywords={["política de privacidad","protección de datos","Clipot"]}
      />
      <Header />
      <section className="pt-32 pb-16 bg-background">
        <div className="container mx-auto px-4">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="max-w-3xl mx-auto">
            <h1 className="font-display text-3xl md:text-4xl font-bold mb-6">Política de Privacidad</h1>
            <p className="text-muted-foreground mb-4">
              Tu privacidad es importante para nosotros. Esta política describe qué datos recopilamos, cómo los usamos y
              tus derechos como usuario.
            </p>
            <div className="space-y-4 text-sm leading-relaxed text-muted-foreground">
              <p>• Recopilamos datos de contacto y uso del sitio para mejorar tu experiencia.</p>
              <p>• No compartimos tus datos con terceros sin tu consentimiento.</p>
              <p>• Puedes solicitar acceso, rectificación o eliminación de tus datos.</p>
              <p>• Para cualquier consulta, contáctanos en hola@clipot.com.</p>
            </div>
          </motion.div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Privacidad;
