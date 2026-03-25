import { motion } from "framer-motion";
import { ArrowRight, CheckCircle } from "lucide-react";
import CalBookingModal from "@/components/CalBookingModal";

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
            <span className="block mt-3">Atendemos en Ciudad de México (CDMX) y en todo México.</span>
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45, delay: 0.24 }}
            className="mt-10 flex flex-col sm:flex-row gap-4 w-full sm:w-auto"
          >
            <CalBookingModal
              className="inline-flex items-center justify-center px-7 py-4 bg-accent-gradient text-white font-semibold rounded-lg shadow-[0_0_28px_rgba(107,78,255,0.22)] hover:shadow-[0_0_38px_rgba(107,78,255,0.32)] transition-shadow focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-primary focus-visible:ring-offset-2 focus-visible:ring-offset-brand-bg"
              title="Agendar diagnóstico (30 min)"
            >
              Agendar diagnóstico gratis
            </CalBookingModal>
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
  const modules = [
    { id: "clientes", label: "Clientes", x: 40, y: 30 },
    { id: "ventas", label: "Ventas", x: 270, y: 30 },
    { id: "crm", label: "CRM", x: 18, y: 96 },
    { id: "automatizacion", label: "Automatización", x: 292, y: 96 },
    { id: "pagos", label: "Pagos", x: 58, y: 164 },
    { id: "reportes", label: "Reportes", x: 252, y: 164 },
  ] as const;

  const center = { id: "os", label: "Business OS", x: 140, y: 92 } as const;
  const moduleSize = { w: 120, h: 40 } as const;
  const centerSize = { w: 140, h: 48 } as const;

  const centerOf = (x: number, y: number, w: number, h: number) => ({ cx: x + w / 2, cy: y + h / 2 });
  const centerP = centerOf(center.x, center.y, centerSize.w, centerSize.h);
  const lines = [
    { from: modules[0].id, to: center.id },
    { from: modules[1].id, to: center.id },
    { from: modules[2].id, to: center.id },
    { from: modules[3].id, to: center.id },
    { from: modules[4].id, to: center.id },
    { from: modules[5].id, to: center.id },
    { from: modules[0].id, to: modules[2].id },
    { from: modules[1].id, to: modules[3].id },
    { from: modules[4].id, to: modules[2].id },
    { from: modules[5].id, to: modules[3].id },
  ] as const;

  const pointsById: Record<string, { cx: number; cy: number }> = {
    [center.id]: centerP,
    ...Object.fromEntries(
      modules.map((m) => {
        const p = centerOf(m.x, m.y, moduleSize.w, moduleSize.h);
        return [m.id, p] as const;
      }),
    ),
  };

  return (
    <motion.div initial="hidden" animate="show" variants={{ hidden: {}, show: { transition: { staggerChildren: 0.12 } } }} className="w-full max-w-xl mx-auto">
      <svg viewBox="0 0 420 230" className="w-full h-auto">
        <defs>
          <linearGradient id="heroPulse" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#6B4EFF" />
            <stop offset="100%" stopColor="#4F8EF7" />
          </linearGradient>
          <filter id="heroGlow" x="-40%" y="-40%" width="180%" height="180%">
            <feGaussianBlur stdDeviation="6" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        <g opacity="0.9">
          {lines.map((l, idx) => {
            const a = pointsById[l.from];
            const b = pointsById[l.to];
            const mx = (a.cx + b.cx) / 2;
            const my = (a.cy + b.cy) / 2;
            const bend = idx % 2 === 0 ? -18 : 18;
            const d = `M ${a.cx} ${a.cy} Q ${mx} ${my + bend} ${b.cx} ${b.cy}`;
            return <path key={`${l.from}-${l.to}`} d={d} stroke="var(--color-border)" strokeWidth="2" fill="none" />;
          })}
        </g>

        {lines.slice(0, 6).map((l, idx) => {
          const a = pointsById[l.from];
          const b = pointsById[l.to];
          const mx = (a.cx + b.cx) / 2;
          const my = (a.cy + b.cy) / 2;
          const bend = idx % 2 === 0 ? -18 : 18;
          const d = `M ${a.cx} ${a.cy} Q ${mx} ${my + bend} ${b.cx} ${b.cy}`;
          return (
            <motion.path
              key={`pulse-${l.from}-${l.to}`}
              d={d}
              stroke="url(#heroPulse)"
              strokeWidth="2"
              fill="none"
              filter="url(#heroGlow)"
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ pathLength: 1, opacity: [0, 1, 1, 0] }}
              transition={{ duration: 3.2, repeat: Infinity, ease: "linear", delay: idx * 0.35 }}
            />
          );
        })}

        <motion.g
          variants={{
            hidden: { opacity: 0, y: 6, scale: 0.98 },
            show: { opacity: 1, y: 0, scale: 1 },
          }}
          transition={{ duration: 0.35 }}
        >
          <rect
            x={center.x}
            y={center.y}
            width={centerSize.w}
            height={centerSize.h}
            rx="16"
            fill="var(--color-bg)"
            stroke="url(#heroPulse)"
            strokeWidth="2"
          />
          <text x={centerP.cx} y={centerP.cy + 5} textAnchor="middle" fill="var(--color-text)" fontSize="14" fontWeight="800">
            {center.label}
          </text>
        </motion.g>

        {modules.map((m) => {
          const p = pointsById[m.id];
          return (
          <motion.g
            key={m.id}
            variants={{
              hidden: { opacity: 0, y: 6, scale: 0.98 },
              show: { opacity: 1, y: 0, scale: 1 },
            }}
            transition={{ duration: 0.35 }}
          >
            <rect x={m.x} y={m.y} width={moduleSize.w} height={moduleSize.h} rx="14" fill="var(--color-bg)" stroke="var(--color-border)" strokeWidth="2" />
            <motion.circle
              cx={m.x + 16}
              cy={m.y + moduleSize.h / 2}
              r="5"
              fill="var(--color-primary)"
              animate={{ fill: ["var(--color-primary)", "var(--color-secondary)", "var(--color-primary)"], scale: [1, 1.1, 1] }}
              transition={{ duration: 2.8, repeat: Infinity, ease: "easeInOut" }}
            />
            <text x={p.cx + 8} y={p.cy + 5} textAnchor="middle" fill="var(--color-text)" fontSize="12" fontWeight="700">
              {m.label}
            </text>
          </motion.g>
          );
        })}
      </svg>
    </motion.div>
  );
};

export default Hero;
