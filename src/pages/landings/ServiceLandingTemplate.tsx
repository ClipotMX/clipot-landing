import { motion } from "framer-motion";
import SEO from "@/components/SEO";
import CalBookingModal from "@/components/CalBookingModal";
import ClientsCarouselSection from "@/components/ClientsCarouselSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import CTAFinal from "@/components/CTAFinal";
import Footer from "@/components/Footer";

type Step = { title: string; description: string };
type Feature = { title: string; description: string };

type Props = {
  seoTitle: string;
  seoDescription: string;
  seoKeywords: string[];
  badge: string;
  heroTitle: string;
  heroSubtitle: string;
  features: Feature[];
  steps: Step[];
};

export default function ServiceLandingTemplate({
  seoTitle,
  seoDescription,
  seoKeywords,
  badge,
  heroTitle,
  heroSubtitle,
  features,
  steps,
}: Props) {
  return (
    <div className="bg-brand-bg min-h-screen text-brand-text overflow-x-hidden">
      <SEO title={seoTitle} description={seoDescription} keywords={seoKeywords} />

      <section id="hero" className="bg-brand-bg text-brand-text py-24 sm:py-28 px-4 md:px-8">
        <div className="container mx-auto max-w-6xl grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
          <div className="flex flex-col items-start">
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45 }}
              className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-primary/10 border border-brand-border text-brand-text text-sm font-medium mb-6"
            >
              <span className="w-2 h-2 rounded-full bg-brand-primary" />
              <span>{badge}</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: 0.06 }}
              className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight leading-tight"
            >
              {heroTitle}
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: 0.12 }}
              className="mt-6 text-lg sm:text-xl text-brand-muted max-w-2xl leading-relaxed"
            >
              {heroSubtitle}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: 0.18 }}
              className="mt-10 flex flex-col sm:flex-row gap-4 w-full sm:w-auto"
            >
              <CalBookingModal
                className="inline-flex items-center justify-center px-7 py-4 bg-accent-gradient text-white font-semibold rounded-lg shadow-[0_0_28px_rgba(107,78,255,0.22)] hover:shadow-[0_0_38px_rgba(107,78,255,0.32)] transition-shadow focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-primary focus-visible:ring-offset-2 focus-visible:ring-offset-brand-bg"
                title="Agendar diagnóstico (30 min)"
              >
                Agendar diagnóstico
              </CalBookingModal>
              <a
                href="#como-funciona"
                className="inline-flex items-center justify-center px-7 py-4 bg-brand-surface text-brand-text font-semibold rounded-lg border border-brand-border hover:bg-brand-surface/80 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-primary focus-visible:ring-offset-2 focus-visible:ring-offset-brand-bg"
              >
                Ver cómo funciona
              </a>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.12 }}
            className="relative"
          >
            <div className="absolute inset-0 bg-[radial-gradient(60%_60%_at_30%_25%,rgba(107,78,255,0.18),transparent_60%),radial-gradient(60%_60%_at_70%_75%,rgba(79,142,247,0.14),transparent_55%)] blur-[70px]" />
            <div className="relative rounded-3xl border border-brand-border bg-brand-surface p-8">
              <div className="text-sm font-semibold text-brand-text">Resultados típicos</div>
              <div className="mt-5 grid grid-cols-1 sm:grid-cols-2 gap-4">
                {["Implementación guiada", "Automatización", "Reportes claros", "Soporte y ajustes"].map((k) => (
                  <div key={k} className="rounded-2xl border border-brand-border bg-brand-bg/40 px-5 py-4">
                    <div className="text-sm font-semibold">{k}</div>
                    <div className="mt-1 text-xs text-brand-muted">Dummy data: ajusta con tus casos reales.</div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <section id="soluciones" className="scroll-mt-[80px] bg-brand-bg text-brand-text py-24 px-4 md:px-8">
        <div className="container mx-auto max-w-6xl">
          <div className="max-w-3xl">
            <motion.h2
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45 }}
              className="text-3xl sm:text-4xl font-bold tracking-tight"
            >
              Qué incluye
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: 0.06 }}
              className="mt-4 text-lg text-brand-muted"
            >
              Bloques que se complementan para que el sistema funcione completo.
            </motion.p>
          </div>

          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((f, idx) => (
              <motion.div
                key={f.title}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: idx * 0.05 }}
                className="rounded-2xl bg-brand-surface border border-brand-border p-6"
              >
                <div className="text-lg font-semibold">{f.title}</div>
                <div className="mt-3 text-sm text-brand-muted leading-relaxed">{f.description}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section id="como-funciona" className="scroll-mt-[80px] bg-brand-bg text-brand-text py-24 px-4 md:px-8">
        <div className="container mx-auto max-w-6xl">
          <div className="max-w-3xl">
            <motion.h2
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45 }}
              className="text-3xl sm:text-4xl font-bold tracking-tight"
            >
              Cómo funciona
            </motion.h2>
          </div>

          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
            {steps.map((s, idx) => (
              <motion.div
                key={s.title}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: idx * 0.06 }}
                className="rounded-2xl border border-brand-border bg-brand-surface p-7"
              >
                <div className="text-xs text-brand-muted font-semibold">PASO {idx + 1}</div>
                <div className="mt-2 text-lg font-semibold">{s.title}</div>
                <div className="mt-3 text-sm text-brand-muted leading-relaxed">{s.description}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <ClientsCarouselSection />
      <TestimonialsSection />

      <CTAFinal />
      <Footer />
    </div>
  );
}

