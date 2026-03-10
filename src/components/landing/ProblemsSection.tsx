import React from 'react';
import { motion } from 'framer-motion';
import { MessageSquareX, FileSpreadsheet, FileText, EyeOff, Database } from 'lucide-react';

const problems = [
  {
    icon: MessageSquareX,
    title: "Leads perdidos en WhatsApp",
    description: "Clientes interesados sin seguimiento"
  },
  {
    icon: FileSpreadsheet,
    title: "Sin CRM",
    description: "Tu equipo vive en Excel o en su cabeza"
  },
  {
    icon: FileText,
    title: "Procesos manuales",
    description: "Cotizaciones y seguimiento todo a mano"
  },
  {
    icon: EyeOff,
    title: "Sin visibilidad",
    description: "No sabes qué hace tu equipo de ventas"
  },
  {
    icon: Database,
    title: "Información desordenada",
    description: "Datos en WhatsApp, email y Excel al mismo tiempo"
  }
];

const ProblemsSection = () => {
  return (
    <section className="py-32 bg-brand-bg text-brand-text px-4 md:px-8">
      <div className="container mx-auto max-w-5xl">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-3xl md:text-4xl lg:text-5xl font-bold mb-16 text-center"
        >
          ¿Tu negocio tiene estos problemas?
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {problems.map((problem, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="p-6 rounded-xl border border-brand-border bg-brand-surface hover:bg-brand-surface/80 hover:border-brand-primary/40 transition-colors"
            >
              <problem.icon className="w-8 h-8 text-brand-primary mb-4" />
              <h3 className="text-xl font-bold mb-2">{problem.title}</h3>
              <p className="text-brand-muted">{problem.description}</p>
            </motion.div>
          ))}
        </div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <p className="text-2xl md:text-3xl font-bold text-brand-text">
            Cada uno de estos problemas te está costando <span className="text-brand-primary">ventas</span>.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default ProblemsSection;
