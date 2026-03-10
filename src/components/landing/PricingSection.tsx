import React from 'react';
import { motion } from 'framer-motion';
import { Check } from 'lucide-react';

const plans = [
  {
    name: "Launch System",
    description: "Ideal para: negocios que quieren organizar sus ventas",
    price: "$8,000 MXN",
    features: [
      "CRM",
      "Seguimiento automático de leads",
      "Organización de clientes"
    ],
    highlight: false
  },
  {
    name: "Growth System",
    description: "Ideal para: empresas que quieren automatizar su proceso comercial",
    price: "$18,000 MXN",
    features: [
      "Todo lo anterior",
      "Automatizaciones",
      "Integraciones",
      "Reportes en tiempo real"
    ],
    highlight: true,
    badge: "Más popular"
  },
  {
    name: "Business OS",
    description: "Ideal para: empresas que quieren digitalizar toda su operación",
    price: "$45,000 MXN",
    features: [
      "Todo lo anterior",
      "Ecommerce",
      "Pagos integrados",
      "Automatización avanzada"
    ],
    highlight: false
  }
];

const PricingSection = () => {
  return (
    <section id="planes" className="scroll-mt-[80px] py-32 bg-brand-bg text-brand-text px-4 md:px-8">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-20">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6"
          >
            Elige el nivel que necesita tu negocio
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-xl text-brand-muted"
          >
            Todos incluyen instalación, capacitación y soporte.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
          {plans.map((plan, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`relative p-8 rounded-2xl border ${
                plan.highlight 
                  ? 'border-brand-primary bg-brand-surface scale-105 z-10 shadow-[0_0_40px_rgba(107,78,255,0.18)]' 
                  : 'border-brand-border bg-brand-surface hover:bg-brand-surface/80'
              } flex flex-col h-full transition-all duration-300`}
            >
              {plan.badge && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 bg-brand-primary text-white text-sm font-bold rounded-full">
                  {plan.badge}
                </div>
              )}

              <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
              <p className="text-brand-muted text-sm mb-6 h-10">{plan.description}</p>
              
              <div className="mb-8">
                <span className="text-sm text-brand-muted">Desde</span>
                <div className="text-3xl font-bold">{plan.price}</div>
              </div>

              <ul className="space-y-4 mb-8 flex-grow">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-center gap-3">
                    <Check className="w-5 h-5 text-brand-primary flex-shrink-0" />
                    <span className="text-brand-text">{feature}</span>
                  </li>
                ))}
              </ul>

              <a 
                href="https://calendly.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-full py-4 rounded-lg font-semibold text-center text-white bg-accent-gradient transition-transform duration-200 hover:scale-[1.01] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-brand-primary"
              >
                Agendar diagnóstico
              </a>
            </motion.div>
          ))}
        </div>

        <div className="text-center mt-12 text-brand-muted text-sm">
          Precios en MXN. Implementación única.
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
