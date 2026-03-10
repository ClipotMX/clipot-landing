import React from 'react';
import { motion } from 'framer-motion';
import { TrendingUp, Users, CreditCard, Zap, Layout } from 'lucide-react';

const solutions = [
  {
    icon: TrendingUp,
    title: "Ventas",
    description: "Pipeline visual y seguimiento automático"
  },
  {
    icon: Users,
    title: "Clientes",
    description: "Historial completo sin información perdida"
  },
  {
    icon: CreditCard,
    title: "Pagos",
    description: "Cobros, facturas y recordatorios automáticos"
  },
  {
    icon: Zap,
    title: "Automatización",
    description: "Flujos que trabajan mientras tú duermes"
  },
  {
    icon: Layout,
    title: "Operaciones",
    description: "Control de equipo, tareas y reportes"
  }
];

const SolutionSection = () => {
  return (
    <section className="py-32 bg-brand-bg text-brand-text px-4 md:px-8">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-20">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6"
          >
            Business OS: tu negocio en un solo sistema
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-xl text-brand-muted max-w-2xl mx-auto"
          >
            Dejamos de usar 10 herramientas que no se hablan. En Clipot implementamos Business OS para conectar todo.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center">
          {solutions.map((solution, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="w-full h-full p-8 rounded-2xl border border-brand-border bg-brand-surface hover:bg-brand-surface/80 hover:border-brand-secondary/40 transition-all duration-300 group flex flex-col"
            >
              <div className="w-12 h-12 rounded-lg bg-brand-primary/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <solution.icon className="w-6 h-6 text-brand-primary" />
              </div>
              <h3 className="text-2xl font-bold mb-3">{solution.title}</h3>
              <p className="text-brand-muted leading-relaxed">{solution.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SolutionSection;
