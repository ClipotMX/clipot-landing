import React from 'react';
import { motion } from 'framer-motion';
import { ClipboardCheck, Settings, Rocket } from 'lucide-react';

const steps = [
  {
    number: "01",
    icon: ClipboardCheck,
    title: "Diagnóstico",
    description: "Analizamos cómo funciona tu proceso de ventas hoy"
  },
  {
    number: "02",
    icon: Settings,
    title: "Implementación",
    description: "Configuramos el sistema a medida de tu negocio"
  },
  {
    number: "03",
    icon: Rocket,
    title: "Automatización",
    description: "Optimizamos para que funcione solo"
  }
];

const HowItWorksSection = () => {
  return (
    <section id="como-funciona" className="scroll-mt-[80px] py-32 bg-brand-bg text-brand-text px-4 md:px-8">
      <div className="container mx-auto max-w-6xl">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-3xl md:text-4xl lg:text-5xl font-bold mb-24 text-center"
        >
          Tres pasos para transformar tu negocio
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 relative">
          {/* Connector Line (Desktop) */}
          <div className="hidden md:block absolute top-12 left-0 w-full h-0.5 bg-brand-border -z-10" />

          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="relative flex flex-col items-center text-center bg-brand-bg p-4" 
            >
              <div className="relative mb-8">
                  <div className="w-24 h-24 rounded-full bg-brand-bg border-4 border-brand-primary/30 flex items-center justify-center shadow-[0_0_30px_rgba(107,78,255,0.12)] z-10">
                    <step.icon className="w-10 h-10 text-brand-primary" />
                  </div>
                  <div className="absolute -top-3 -right-3 w-10 h-10 bg-brand-primary rounded-full flex items-center justify-center text-white font-bold text-lg border-4 border-brand-bg z-20">
                    {step.number}
                  </div>
              </div>
              
              <h3 className="text-2xl font-bold mb-4">{step.title}</h3>
              <p className="text-brand-muted max-w-xs leading-relaxed">
                {step.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
