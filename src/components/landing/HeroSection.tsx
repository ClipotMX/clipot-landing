import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, CheckCircle } from 'lucide-react';

const HeroSection = () => {
  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-brand-bg text-brand-text pt-[56px] md:pt-[64px] pb-32 px-4 md:px-8">
      <div className="container mx-auto max-w-7xl grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        
        {/* Text Content */}
        <div className="flex flex-col items-start z-10">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-primary/10 border border-brand-primary/25 text-brand-primary text-sm font-medium mb-6"
          >
            <CheckCircle className="w-4 h-4" />
            <span>Sin costo · Sin compromiso · 30 minutos</span>
          </motion.div>

          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6 tracking-tight"
          >
            Organiza tu negocio. <br/>
            <span className="bg-accent-gradient bg-clip-text text-transparent">Vende más.</span> <br/>
            Sin complicaciones.
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-lg md:text-xl text-brand-muted mb-8 max-w-xl leading-relaxed"
          >
            En Clipot conectamos tus ventas, clientes, pagos y operaciones. Tu equipo trabaja mejor. Tú tienes control.
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto"
          >
            <a 
              href="https://calendly.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-8 py-4 bg-accent-gradient text-white font-semibold rounded-lg transition-all duration-200 text-lg shadow-[0_0_24px_rgba(107,78,255,0.25)] hover:shadow-[0_0_36px_rgba(107,78,255,0.35)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-primary focus-visible:ring-offset-2 focus-visible:ring-offset-brand-bg"
            >
              Agendar diagnóstico gratuito
            </a>
            <a 
              href="#como-funciona" 
              className="inline-flex items-center justify-center px-8 py-4 bg-brand-surface hover:bg-brand-surface/80 text-brand-text font-semibold rounded-lg transition-all duration-200 text-lg border border-brand-border focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-primary focus-visible:ring-offset-2 focus-visible:ring-offset-brand-bg"
            >
              Ver cómo funciona
              <ArrowRight className="ml-2 w-5 h-5" />
            </a>
          </motion.div>
        </div>

        {/* Visual Animation */}
        <div className="relative h-[300px] md:h-[400px] lg:h-[500px] w-full flex items-center justify-center">
            <div className="absolute inset-0 bg-brand-secondary/10 blur-[100px] rounded-full" />
            <ProcessAnimation />
        </div>
      </div>
    </section>
  );
};

const ProcessAnimation = () => {
  const steps = ["Leads", "CRM", "Automatización", "Ventas cerradas"];
  
  return (
    <div className="w-full max-w-lg">
      <svg viewBox="0 0 400 120" className="w-full h-full overflow-visible">
        <defs>
          <linearGradient id="clipotGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#6B4EFF" />
            <stop offset="100%" stopColor="#4F8EF7" />
          </linearGradient>
        </defs>
        {/* Base Line */}
        <path d="M 40 60 L 360 60" stroke="var(--color-border)" strokeWidth="2" fill="none" />
        
        {/* Pulse Line */}
        <motion.path 
          d="M 40 60 L 360 60" 
          stroke="url(#clipotGradient)" 
          strokeWidth="2" 
          fill="none"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: [0, 1, 1, 0] }}
          transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
        />

        {steps.map((label, i) => {
          const x = 40 + (i * (320 / 3));
          return (
            <g key={i}>
              {/* Outer Circle */}
              <motion.circle 
                cx={x} cy="60" r="8" 
                fill="var(--color-bg)" 
                stroke="var(--color-border)" 
                strokeWidth="1"
                animate={{ stroke: ["var(--color-border)", "var(--color-primary)", "var(--color-border)"] }}
                transition={{ duration: 3, delay: i * 0.75, repeat: Infinity }}
              />
              
              {/* Inner Dot */}
              <motion.circle 
                cx={x} cy="60" r="4" 
                fill="var(--color-border)"
                animate={{ fill: ["var(--color-border)", "var(--color-secondary)", "var(--color-border)"], scale: [1, 1.2, 1] }}
                transition={{ duration: 3, delay: i * 0.75, repeat: Infinity }}
              />
              
              {/* Label */}
              <text 
                x={x} y="90" 
                textAnchor="middle" 
                fill="var(--color-text)" 
                fontSize="12" 
                className="font-medium"
              >
                {label}
              </text>
            </g>
          )
        })}
      </svg>
    </div>
  );
};

export default HeroSection;
