import { Globe, Store, Shuffle } from "lucide-react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const plans = [
  {
    icon: Globe,
    title: "Negocio Digital",
    slug: "negocio-digital",
    description: "CRM + Shopify: sincronización de ventas online y leads digitales.",
    monthlyFrom: 14900,
    bullets: ["Pedidos online", "Carrito abandonado", "Leads al CRM"],
  },
  {
    icon: Store,
    title: "Negocio Plus",
    slug: "negocio-plus",
    description: "CRM + Pulpos POS: ventas físicas, clientes e inventario local.",
    monthlyFrom: 24900,
    bullets: ["Clientes presenciales", "Inventario local", "Compras offline"],
  },
  {
    icon: Shuffle,
    title: "Negocio Total",
    slug: "negocio-total",
    description: "Omnicanalidad 3 vías: CRM <-> Shopify <-> Pulpos.",
    monthlyFrom: 44900,
    bullets: ["Inventario omnicanal", "Merge de clientes", "Resolución de conflictos"],
  },
];

const formatMXN = (n: number) => `$${n.toLocaleString("es-MX")} MXN`;

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
            Negocio Core
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

        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
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
              <div className="mt-4 text-sm font-semibold text-foreground">Desde {formatMXN(p.monthlyFrom)}/mes</div>
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
