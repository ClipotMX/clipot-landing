import { motion } from "framer-motion";
import { CheckCircle } from "lucide-react";

const CTAFinal = () => {
  return (
    <section id="contacto" className="scroll-mt-[80px] bg-brand-bg text-brand-text py-32 px-4 md:px-8">
      <div className="container mx-auto max-w-6xl">
        <div className="relative overflow-hidden rounded-3xl border border-brand-border bg-brand-surface px-6 py-14 sm:px-12">
          <div className="absolute inset-0 bg-[radial-gradient(60%_60%_at_30%_20%,rgba(107,78,255,0.15),transparent_55%),radial-gradient(60%_60%_at_70%_80%,rgba(79,142,247,0.15),transparent_55%)]" />
          <div className="relative">
            <motion.h2
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45 }}
              className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-center"
            >
              Descubre en 30 minutos qué sistema necesita tu negocio
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: 0.06 }}
              className="mt-6 text-lg text-brand-muted max-w-3xl mx-auto text-center leading-relaxed"
            >
              Agenda un diagnóstico gratuito. Revisamos cómo opera tu negocio hoy y qué solución puede ayudarte a vender más con menos caos.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: 0.12 }}
              className="mt-10 flex flex-col items-center gap-6"
            >
              <a
                href="https://calendly.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-10 py-5 rounded-lg bg-accent-gradient text-white font-semibold text-lg shadow-[0_0_34px_rgba(107,78,255,0.22)] hover:shadow-[0_0_44px_rgba(107,78,255,0.32)] transition-shadow focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-primary focus-visible:ring-offset-2 focus-visible:ring-offset-brand-bg"
              >
                Agendar diagnóstico gratis
              </a>

              <div className="flex flex-wrap justify-center gap-6 text-sm font-medium text-brand-muted">
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-brand-primary" />
                  <span>Sin costo</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-brand-primary" />
                  <span>Sin compromiso</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-brand-primary" />
                  <span>Atendido por un especialista</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTAFinal;
