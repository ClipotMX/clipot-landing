import { motion } from "framer-motion";
import { TrendingUp, Store, ShoppingCart, Building2 } from "lucide-react";

const Soluciones = () => {
  const cards = [
    {
      icon: TrendingUp,
      title: "Sistema de ventas",
      who: "Para: negocios que pierden oportunidades por falta de seguimiento",
      solves: "Resuelve: organiza clientes, automatiza seguimiento, cierra más ventas",
    },
    {
      icon: Store,
      title: "Sistema para tiendas",
      who: "Para: tiendas físicas con desorden en inventario y pagos",
      solves: "Resuelve: punto de venta, inventario y caja en un solo lugar",
    },
    {
      icon: ShoppingCart,
      title: "Sistema para ecommerce",
      who: "Para: tiendas online que procesan pedidos manualmente",
      solves: "Resuelve: pedidos, pagos, envíos y clientes automatizados",
    },
    {
      icon: Building2,
      title: "Sistema empresarial",
      who: "Para: empresas con operaciones complejas y equipos medianos",
      solves: "Resuelve: automatiza procesos, conecta áreas, genera reportes",
    },
  ];

  return (
    <section id="soluciones" className="scroll-mt-[80px] bg-brand-bg text-brand-text py-32 px-4 md:px-8">
      <div className="container mx-auto max-w-6xl">
        <div className="max-w-3xl">
          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45 }}
            className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight"
          >
            Sistemas para cada tipo de negocio
          </motion.h2>
        </div>

        <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {cards.map((c, idx) => (
            <motion.div
              key={c.title}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: idx * 0.05 }}
              className="rounded-2xl bg-brand-surface border border-brand-border p-6 hover:border-brand-primary/40 transition-colors"
            >
              <div className="w-12 h-12 rounded-2xl bg-brand-primary/10 border border-brand-border flex items-center justify-center">
                <c.icon className="w-6 h-6 text-brand-primary" />
              </div>
              <h3 className="mt-5 text-lg font-semibold">{c.title}</h3>
              <p className="mt-3 text-brand-muted leading-relaxed">{c.who}</p>
              <p className="mt-3 text-brand-text leading-relaxed">{c.solves}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Soluciones;
