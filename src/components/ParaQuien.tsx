import { motion } from "framer-motion";
import { Store, ShoppingCart, UtensilsCrossed, Briefcase, Truck } from "lucide-react";

const ParaQuien = () => {
  const items = [
    { icon: Store, title: "Tiendas físicas", benefit: "Inventario y ventas en un solo sistema" },
    { icon: ShoppingCart, title: "Ecommerce", benefit: "Pedidos y pagos automatizados" },
    { icon: UtensilsCrossed, title: "Restaurantes", benefit: "Control de mesa, caja y pedidos integrado" },
    { icon: Briefcase, title: "Empresas de servicios", benefit: "Clientes, cotizaciones y cobranza organizados" },
    { icon: Truck, title: "Distribuidores", benefit: "Inventario, rutas y clientes bajo control" },
  ];

  return (
    <section id="para-quien" className="scroll-mt-[80px] bg-brand-bg text-brand-text py-32 px-4 md:px-8">
      <div className="container mx-auto max-w-6xl">
        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.45 }}
          className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight"
        >
          Funciona para tu tipo de negocio
        </motion.h2>

        <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
          {items.map((it, idx) => (
            <motion.div
              key={it.title}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: idx * 0.05 }}
              className="rounded-2xl bg-brand-surface border border-brand-border p-6 hover:border-brand-secondary/45 transition-colors"
            >
              <it.icon className="w-10 h-10 text-brand-primary" />
              <h3 className="mt-5 text-lg font-semibold">{it.title}</h3>
              <p className="mt-2 text-brand-muted leading-relaxed">{it.benefit}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ParaQuien;
