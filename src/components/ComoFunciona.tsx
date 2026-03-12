import { motion } from "framer-motion";
import { ClipboardCheck, SlidersHorizontal, Rocket } from "lucide-react";

const ComoFunciona = () => {
  const steps = [
    {
      number: "01",
      icon: ClipboardCheck,
      title: "Diagnóstico",
      description:
        "Entendemos cómo funciona tu negocio hoy: ventas, clientes, operaciones y los puntos donde se pierde dinero.",
    },
    {
      number: "02",
      icon: SlidersHorizontal,
      title: "Diseño del sistema",
      description:
        "Definimos qué necesitas y elegimos las herramientas correctas. Sin tecnología de más, sin pasos innecesarios.",
    },
    {
      number: "03",
      icon: Rocket,
      title: "Implementación y automatización",
      description:
        "Instalamos, configuramos y automatizamos. Tu equipo aprende a usarlo. El sistema empieza a trabajar por ti.",
    },
  ];

  return (
    <section id="como-funciona" className="scroll-mt-[80px] bg-brand-bg text-brand-text py-32 px-4 md:px-8">
      <div className="container mx-auto max-w-6xl">
        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.45 }}
          className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-center"
        >
          Un proceso simple, sin sorpresas
        </motion.h2>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6">
          {steps.map((s, idx) => (
            <motion.div
              key={s.number}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: idx * 0.08 }}
              className="rounded-2xl bg-brand-surface border border-brand-border p-7"
            >
              <div className="flex items-start justify-between gap-4">
                <div className="text-4xl font-bold bg-accent-gradient bg-clip-text text-transparent leading-none">
                  {s.number}
                </div>
                <div className="w-11 h-11 rounded-xl bg-brand-primary/10 border border-brand-border flex items-center justify-center shrink-0">
                  <s.icon className="w-5 h-5 text-brand-primary" />
                </div>
              </div>
              <h3 className="mt-6 text-xl font-semibold">{s.title}</h3>
              <p className="mt-3 text-brand-muted leading-relaxed">{s.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ComoFunciona;
