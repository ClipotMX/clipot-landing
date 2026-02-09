import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import SEO from "@/components/SEO";

const Terminos = () => {
  return (
    <div className="min-h-screen">
      <SEO
        title="Términos y condiciones | Clipot"
        description="Lee los términos y condiciones de uso del sitio de Clipot."
        keywords={["términos y condiciones","uso del sitio","Clipot"]}
      />
      <Header />
      <section className="pt-32 pb-16 bg-background">
        <div className="container mx-auto px-4">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="max-w-3xl mx-auto">
            <h1 className="font-display text-3xl md:text-4xl font-bold mb-6">Términos y Condiciones</h1>
            <p className="text-muted-foreground mb-4">
              Al utilizar este sitio, aceptas los siguientes términos y condiciones.
            </p>
            <div className="space-y-4 text-sm leading-relaxed text-muted-foreground">
              <p>• El contenido del sitio es informativo y puede cambiar sin aviso.</p>
              <p>• No garantizamos la disponibilidad continua del servicio.</p>
              <p>• El uso del sitio debe cumplir con las leyes aplicables.</p>
            </div>
          </motion.div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Terminos;
