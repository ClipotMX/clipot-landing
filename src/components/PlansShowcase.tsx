import { Boxes, Layers, Cog, Building2 } from "lucide-react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const plans = [
  {
    icon: Boxes,
    title: "Business OS Lite",
    slug: "business-os-lite",
    description: "Ecosistema básico para emprendedores y microempresas. Orden operativo sin complejidad.",
    bullets: ["Clientes y contactos", "Agenda y tareas", "Métricas básicas"],
  },
  {
    icon: Layers,
    title: "Business OS Advance",
    slug: "business-os-advance",
    description: "Productividad y automatización intermedia para pymes que buscan eficiencia.",
    bullets: ["Pipelines por área", "Automatización de seguimiento", "Reportes ejecutivos"],
  },
  {
    icon: Cog,
    title: "Business OS Pro",
    slug: "business-os-pro",
    description: "Integraciones avanzadas y análisis empresarial para compañías en crecimiento.",
    bullets: ["Integraciones externas", "Analítica avanzada", "KPIs de desempeño"],
  },
  {
    icon: Building2,
    title: "Business OS High",
    slug: "business-os-high",
    description: "Ecosistema completo y personalizable para corporativos con operación compleja.",
    bullets: ["Arquitectura modular", "Permisos granulares", "Data Warehouse"],
  },
];

export default function PlansShowcase() {
  return (
    <section className="py-24 bg-muted">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45 }}
            className="font-display text-3xl md:text-4xl font-bold"
          >
            Planes de Business OS
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45, delay: 0.06 }}
            className="mt-4 text-lg text-muted-foreground"
          >
            Sede en Guadalajara (Jalisco). Atendemos todo México. Elige el plan que mejor encaje con tu operación.
          </motion.p>
        </div>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {plans.map((p, idx) => (
            <motion.div
              key={p.slug}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: idx * 0.05 }}
              className="rounded-2xl bg-background ring-1 ring-border p-6 flex flex-col"
            >
              <p.icon className="w-10 h-10 text-primary mb-4" />
              <div className="font-display text-xl font-semibold">{p.title}</div>
              <div className="mt-2 text-sm text-muted-foreground leading-relaxed">{p.description}</div>
              <ul className="mt-4 space-y-2 text-sm">
                {p.bullets.map((b) => (
                  <li key={b} className="text-muted-foreground">• {b}</li>
                ))}
              </ul>
              <Link
                to={`/servicios/${p.slug}`}
                className="mt-6 inline-flex items-center justify-center px-4 py-2 rounded-lg bg-primary text-primary-foreground font-semibold hover:bg-primary/90 transition-colors"
              >
                Ver detalles
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

