import { motion } from "framer-motion";
import { Users, TrendingUp, Store, ShoppingCart, CreditCard, BarChart3 } from "lucide-react";

const Solucion = () => {
  const modules = [
    {
      icon: Users,
      title: "Clientes",
      description: "Historial completo, sin información perdida",
    },
    {
      icon: TrendingUp,
      title: "Ventas",
      description: "Pipeline visual y seguimiento automático",
    },
    {
      icon: Store,
      title: "Tienda física",
      description: "Punto de venta, inventario y pagos integrados",
    },
    {
      icon: ShoppingCart,
      title: "Ecommerce",
      description: "Pedidos, pagos y clientes automatizados",
    },
    {
      icon: CreditCard,
      title: "Pagos",
      description: "Cobros, facturas y recordatorios sin intervención manual",
    },
    {
      icon: BarChart3,
      title: "Reportes",
      description: "Métricas en tiempo real para tomar decisiones",
    },
  ];

  return (
    <section id="solucion" className="scroll-mt-[80px] bg-brand-bg text-brand-text py-32 px-4 md:px-8">
      <div className="container mx-auto max-w-6xl">
        <div className="max-w-3xl">
          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45 }}
            className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight"
          >
            Un solo sistema para todo tu negocio
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45, delay: 0.06 }}
            className="mt-5 text-lg text-brand-muted"
          >
            Clipot diseña e implementa Business OS: el sistema que conecta todas las partes de tu empresa.
          </motion.p>
        </div>

        <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {modules.map((m, idx) => (
            <motion.div
              key={m.title}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: idx * 0.05 }}
              className="rounded-2xl bg-brand-surface border border-brand-border p-6 hover:border-brand-secondary/45 transition-colors"
            >
              <div className="w-11 h-11 rounded-xl bg-brand-primary/10 border border-brand-border flex items-center justify-center">
                <m.icon className="w-5 h-5 text-brand-primary" />
              </div>
              <div className="mt-5">
                <h3 className="text-lg font-semibold">{m.title}</h3>
                <p className="mt-2 text-brand-muted leading-relaxed">{m.description}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.p
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.45, delay: 0.06 }}
          className="mt-14 text-sm text-brand-muted max-w-3xl"
        >
          Las herramientas se eligen según tu negocio. Lo importante es que todo funcione como un solo sistema.
        </motion.p>
      </div>
    </section>
  );
};

export default Solucion;
