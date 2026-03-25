import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle } from 'lucide-react';
import CalBookingModal from "@/components/CalBookingModal";

const FinalCTASection = () => {
  return (
    <section className="py-32 bg-accent-gradient text-white px-4 md:px-8">
      <div className="container mx-auto max-w-4xl text-center">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-4xl md:text-5xl lg:text-6xl font-bold mb-8 leading-tight"
        >
          Tu negocio puede vender más con el sistema correcto.
        </motion.h2>

        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-xl md:text-2xl text-white/80 mb-12 max-w-2xl mx-auto"
        >
          Agenda un diagnóstico gratuito de 30 minutos. Sin compromiso.
        </motion.p>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex flex-col items-center gap-8"
        >
          <CalBookingModal
            className="inline-flex items-center justify-center px-10 py-5 bg-white text-[#0a0a0a] font-bold rounded-xl transition-all duration-200 text-xl hover:scale-105 shadow-xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-brand-primary"
            title="Agendar diagnóstico (30 min)"
          >
            Agendar diagnóstico ahora
          </CalBookingModal>

          <div className="flex flex-wrap justify-center gap-6 text-white/70 text-sm font-medium">
            <div className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4" />
              <span>Sin costo</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4" />
              <span>Atendido por especialista</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4" />
              <span>Resultados desde el primer mes</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default FinalCTASection;
