import { motion } from "framer-motion";

const phases = [
  {
    label: "Antes",
    title: "Evaluación inicial",
    description: "Entendemos tu proceso real y definimos el objetivo medible: tiempos, errores, productividad y visibilidad.",
    bullets: ["Mapa de operación actual", "Cuellos de botella", "Metas y métricas", "Plan por fases"],
  },
  {
    label: "Durante",
    title: "Implementación guiada",
    description: "Configuración, integración y capacitación. Nos enfocamos en adopción para que el sistema se use y genere resultados.",
    bullets: ["Implementación del módulo", "Capacitación por roles", "Ajustes con base en uso", "Checklist de salida a producción"],
  },
  {
    label: "Después",
    title: "Optimización continua",
    description: "Soporte proactivo y mejoras por iteración. El objetivo es sostener resultados y escalar sin fricción.",
    bullets: ["Soporte continuo", "Optimización mensual", "Nuevas automatizaciones", "Reporte de resultados"],
  },
];

export default function StrategicAllySection() {
  return (
    <section id="aliado" className="scroll-mt-[80px] bg-brand-bg text-brand-text py-28 px-4 md:px-8">
      <div className="container mx-auto max-w-6xl">
        <div className="max-w-3xl">
          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45 }}
            className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight"
          >
            Modelo de aliado estratégico
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45, delay: 0.06 }}
            className="mt-5 text-lg text-brand-muted"
          >
            No vendemos una entrega puntual. Acompañamos antes, durante y después para que el resultado se sostenga.
          </motion.p>
        </div>

        <div className="mt-14 grid grid-cols-1 lg:grid-cols-3 gap-6">
          {phases.map((p, idx) => (
            <motion.div
              key={p.label}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: idx * 0.05 }}
              className="rounded-2xl bg-brand-surface border border-brand-border p-7"
            >
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-primary/10 border border-brand-border text-sm font-semibold">
                <span className="w-2 h-2 rounded-full bg-brand-primary" />
                {p.label}
              </div>
              <div className="mt-4 text-xl font-semibold">{p.title}</div>
              <div className="mt-3 text-sm text-brand-muted leading-relaxed">{p.description}</div>
              <div className="mt-5 grid grid-cols-1 gap-2">
                {p.bullets.map((b) => (
                  <div key={b} className="rounded-xl border border-brand-border bg-brand-bg/35 px-4 py-3 text-sm">
                    {b}
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-12 rounded-2xl border border-brand-border bg-brand-surface px-6 py-5">
          <div className="text-sm font-semibold">Canales de comunicación</div>
          <div className="mt-2 text-sm text-brand-muted">
            WhatsApp como canal principal para coordinación, y Cal.com como alternativa para programación automatizada con recordatorios.
          </div>
        </div>
      </div>
    </section>
  );
}

