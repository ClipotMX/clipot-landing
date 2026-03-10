import React from 'react';
import { motion } from 'framer-motion';
import { Play, Activity, Zap, CheckCircle2 } from 'lucide-react';

const DemoSection = () => {
  return (
    <section className="py-32 bg-brand-bg text-brand-text px-4 md:px-8">
      <div className="container mx-auto max-w-5xl text-center">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-3xl md:text-4xl lg:text-5xl font-bold mb-16"
        >
          Mira cómo funciona
        </motion.h2>

        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="relative aspect-video w-full max-w-4xl mx-auto rounded-2xl overflow-hidden shadow-[0_0_50px_rgba(107,78,255,0.14)] group cursor-pointer border border-brand-border"
        >
          {/* Placeholder Background Gradient */}
          <div className="absolute inset-0 bg-[radial-gradient(70%_70%_at_30%_20%,rgba(107,78,255,0.28),transparent_60%),radial-gradient(70%_70%_at_70%_80%,rgba(79,142,247,0.18),transparent_55%),linear-gradient(180deg,#111111,#0a0a0a)]" />
          
          {/* Simulated UI Elements for Depth */}
          <div className="absolute top-4 left-4 right-4 h-8 bg-brand-bg/60 rounded-full flex items-center px-4 gap-2 border border-brand-border backdrop-blur-sm">
            <div className="w-3 h-3 rounded-full bg-brand-primary/60" />
            <div className="w-3 h-3 rounded-full bg-brand-secondary/60" />
            <div className="w-3 h-3 rounded-full bg-brand-text/20" />
          </div>

          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-20 h-20 rounded-full bg-brand-bg/55 backdrop-blur-sm flex items-center justify-center group-hover:scale-110 transition-transform duration-300 border border-brand-border">
              <Play className="w-8 h-8 text-brand-text fill-current ml-1" />
            </div>
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex flex-col md:flex-row justify-center gap-8 mt-12"
        >
          <div className="flex items-center justify-center gap-3">
            <Activity className="w-5 h-5 text-brand-primary" />
            <span className="text-brand-text font-medium">Pipeline en tiempo real</span>
          </div>
          <div className="flex items-center justify-center gap-3">
            <Zap className="w-5 h-5 text-brand-primary" />
            <span className="text-brand-text font-medium">Automatizaciones activas</span>
          </div>
          <div className="flex items-center justify-center gap-3">
            <CheckCircle2 className="w-5 h-5 text-brand-primary" />
            <span className="text-brand-text font-medium">Seguimiento sin esfuerzo</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default DemoSection;
