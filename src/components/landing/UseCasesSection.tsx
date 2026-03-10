import React from 'react';
import { motion } from 'framer-motion';
import { Building2, ShoppingBag, Briefcase } from 'lucide-react';

const cases = [
  {
    icon: Building2,
    industry: "Inmobiliarias",
    problem: "Organizan leads de portales y WhatsApp",
    result: "Cierran más propiedades"
  },
  {
    icon: ShoppingBag,
    industry: "Ecommerce",
    problem: "Automatizan pedidos, pagos y logística",
    result: "Menos errores, más tiempo"
  },
  {
    icon: Briefcase,
    industry: "Servicios",
    problem: "Controlan cotizaciones, clientes y cobranza",
    result: "Operación más ordenada"
  }
];

const UseCasesSection = () => {
  return (
    <section className="py-32 bg-brand-bg text-brand-text px-4 md:px-8">
      <div className="container mx-auto max-w-6xl">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-3xl md:text-4xl lg:text-5xl font-bold mb-20 text-center"
        >
          Funciona para tu industria
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {cases.map((useCase, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="p-8 rounded-xl bg-brand-surface border border-brand-border hover:border-brand-secondary/50 hover:bg-brand-surface/80 transition-all duration-300 group"
            >
              <div className="w-14 h-14 rounded-full bg-brand-primary/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <useCase.icon className="w-7 h-7 text-brand-primary" />
              </div>
              
              <h3 className="text-2xl font-bold mb-4">{useCase.industry}</h3>
              
              <div className="space-y-4">
                <div className="text-brand-muted border-l-2 border-brand-border pl-4 py-1">
                  {useCase.problem}
                </div>
                <div className="text-brand-secondary font-semibold border-l-2 border-brand-primary pl-4 py-1">
                  → {useCase.result}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default UseCasesSection;
