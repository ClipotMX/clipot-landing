import { motion } from "framer-motion";
import { MessageCircleX, TrendingDown, Store, EyeOff, Flame } from "lucide-react";

const Problema = () => {
  const items = [
    {
      icon: MessageCircleX,
      title: "Clientes perdidos",
      description: "Mensajes de WhatsApp sin respuesta ni seguimiento",
    },
    {
      icon: TrendingDown,
      title: "Ventas sin control",
      description: "Oportunidades que se caen porque nadie las sigue",
    },
    {
      icon: Store,
      title: "Tienda física y online desconectadas",
      description: "Inventario doble, errores dobles",
    },
    {
      icon: EyeOff,
      title: "Sin visibilidad",
      description: "No sabes qué vendiste, qué debes ni qué pasa",
    },
    {
      icon: Flame,
      title: "Todo depende de ti",
      description: "Si tú no estás, el negocio se para",
    },
  ];

  return (
    <section id="problema" className="scroll-mt-[80px] bg-brand-bg text-brand-text py-32 px-4 md:px-8">
      <div className="container mx-auto max-w-6xl">
        <div className="max-w-3xl">
          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45 }}
            className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight"
          >
            Cuando el negocio crece, el desorden también
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45, delay: 0.06 }}
            className="mt-5 text-lg text-brand-muted"
          >
            Estos son los problemas más comunes que vemos:
          </motion.p>
        </div>

        <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map((it, idx) => (
            <motion.div
              key={it.title}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: idx * 0.05 }}
              className="rounded-2xl bg-brand-surface border border-brand-border p-6 hover:border-brand-primary/40 transition-colors"
            >
              <div className="w-11 h-11 rounded-xl bg-brand-primary/10 border border-brand-border flex items-center justify-center">
                <it.icon className="w-5 h-5 text-brand-primary" />
              </div>
              <div className="mt-5">
                <h3 className="text-lg font-semibold">{it.title}</h3>
                <p className="mt-2 text-brand-muted leading-relaxed">{it.description}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.45, delay: 0.08 }}
          className="mt-16 text-center text-xl sm:text-2xl font-semibold"
        >
          El negocio funciona. Pero funciona gracias a que alguien siempre está apagando incendios.
        </motion.p>
      </div>
    </section>
  );
};

export default Problema;
