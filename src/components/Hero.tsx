import { motion } from "framer-motion";
import { ArrowRight, CheckCircle } from "lucide-react";

const Hero = () => {
  return (
    <section id="hero" className="bg-brand-bg text-brand-text py-32 px-4 md:px-8">
      <div className="container mx-auto max-w-6xl grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div className="flex flex-col items-start">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45 }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-primary/10 border border-brand-border text-brand-text text-sm font-medium mb-6"
          >
            <CheckCircle className="w-4 h-4 text-brand-primary" />
            <span>Sin costo · 30 minutos · Sin compromiso</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45, delay: 0.08 }}
            className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight leading-tight"
          >
            Tu negocio organizado. Más ventas. Menos caos.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45, delay: 0.16 }}
            className="mt-6 text-lg sm:text-xl text-brand-muted max-w-xl leading-relaxed"
          >
            Implementamos el sistema que conecta tus clientes, ventas, pagos y operaciones — para que tu negocio funcione sin depender de
            que alguien esté encima de todo.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45, delay: 0.24 }}
            className="mt-10 flex flex-col sm:flex-row gap-4 w-full sm:w-auto"
          >
            <a
              href="https://calendly.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-7 py-4 bg-accent-gradient text-white font-semibold rounded-lg shadow-[0_0_28px_rgba(107,78,255,0.22)] hover:shadow-[0_0_38px_rgba(107,78,255,0.32)] transition-shadow focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-primary focus-visible:ring-offset-2 focus-visible:ring-offset-brand-bg"
            >
              Agendar diagnóstico gratis
            </a>
            <a
              href="#como-funciona"
              className="inline-flex items-center justify-center px-7 py-4 bg-brand-surface text-brand-text font-semibold rounded-lg border border-brand-border hover:bg-brand-surface/80 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-primary focus-visible:ring-offset-2 focus-visible:ring-offset-brand-bg"
            >
              Ver cómo funciona
              <ArrowRight className="ml-2 w-5 h-5" />
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
          <div className="absolute inset-0 bg-[radial-gradient(60%_60%_at_30%_25%,rgba(107,78,255,0.22),transparent_60%),radial-gradient(60%_60%_at_70%_75%,rgba(79,142,247,0.18),transparent_55%)] blur-[60px]" />
          <HeroNetwork />
        </motion.div>
      </div>
    </section>
  );
};

const HeroNetwork = () => {
  const nodes = [
    { label: "Clientes", x: 32, y: 60 },
    { label: "Ventas", x: 112, y: 60 },
    { label: "Tienda/Ecommerce", x: 200, y: 60 },
    { label: "Pagos", x: 292, y: 60 },
    { label: "Reportes", x: 368, y: 60 },
  ];

  return (
    <motion.div initial="hidden" animate="show" variants={{ hidden: {}, show: { transition: { staggerChildren: 0.12 } } }} className="w-full max-w-xl mx-auto">
      <svg viewBox="0 0 400 120" className="w-full h-auto">
        <defs>
          <linearGradient id="heroPulse" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#6B4EFF" />
            <stop offset="100%" stopColor="#4F8EF7" />
          </linearGradient>
        </defs>

        <path d="M 32 60 L 368 60" stroke="var(--color-border)" strokeWidth="2" fill="none" />

        <motion.path
          d="M 32 60 L 368 60"
          stroke="url(#heroPulse)"
          strokeWidth="2"
          fill="none"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: [0, 1, 1, 0] }}
          transition={{ duration: 2.8, repeat: Infinity, ease: "linear" }}
        />

        {nodes.map((n) => (
          <motion.g
            key={n.label}
            variants={{
              hidden: { opacity: 0, y: 6, scale: 0.98 },
              show: { opacity: 1, y: 0, scale: 1 },
            }}
            transition={{ duration: 0.35 }}
          >
            <circle cx={n.x} cy={n.y} r="10" fill="var(--color-bg)" stroke="var(--color-border)" strokeWidth="2" />
            <motion.circle
              cx={n.x}
              cy={n.y}
              r="5"
              fill="var(--color-primary)"
              animate={{ fill: ["var(--color-primary)", "var(--color-secondary)", "var(--color-primary)"], scale: [1, 1.08, 1] }}
              transition={{ duration: 2.8, repeat: Infinity, ease: "easeInOut" }}
            />
            <text x={n.x} y="92" textAnchor="middle" fill="var(--color-text)" fontSize="12" fontWeight="600">
              {n.label}
            </text>
          </motion.g>
        ))}
      </svg>
    </motion.div>
  );
};

export default Hero;
