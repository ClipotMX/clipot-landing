import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import CalBookingModal from "@/components/CalBookingModal";

const Hero = () => {
  return (
    <section id="hero" className="bg-background text-white min-h-screen flex items-center pt-24 px-4 md:px-8 relative overflow-hidden">
      {/* Abstract Background - Systems/Connectivity */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-20" data-aos="fade-in">
        <div className="absolute top-1/4 -right-1/4 w-[800px] h-[800px] bg-primary/20 rounded-full blur-[120px] animate-pulse" />
        <div className="absolute -bottom-1/4 -left-1/4 w-[600px] h-[600px] bg-secondary/10 rounded-full blur-[100px]" />
        
        {/* Grid lines */}
        <div 
          className="absolute inset-0" 
          style={{ 
            backgroundImage: `linear-gradient(to right, rgba(255,255,255,0.05) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.05) 1px, transparent 1px)`,
            backgroundSize: '40px 40px'
          }} 
        />
      </div>
      
      <div className="container mx-auto max-w-[1400px] relative z-10 text-center">
        <div className="max-w-6xl mx-auto flex flex-col items-center">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-white/60 text-xs font-mono mb-10 tracking-[0.2em] uppercase"
          >
            <span className="w-2 h-2 rounded-full bg-primary animate-ping" />
            Infraestructura Digital de Alto Nivel
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-5xl md:text-7xl lg:text-8xl font-display font-bold tracking-tighter leading-[1.1] mb-6 italic"
          >
            Implementamos los <span className="text-gradient">sistemas digitales</span>
          </motion.h1>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-2xl md:text-4xl text-white/80 font-display font-medium tracking-tight mb-8 italic"
          >
            que tu empresa realmente necesita.
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-lg md:text-xl text-white/50 max-w-3xl leading-relaxed mb-12"
          >
            Sabemos que el caos operativo detiene tu crecimiento: procesos manuales que quitan tiempo, falta de seguimiento a prospectos y datos dispersos que no dicen nada. <span className="text-white/80">No vendemos software, construimos tu infraestructura digital.</span>
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-6 justify-center"
          >
            <CalBookingModal
              className="px-10 py-5 bg-primary text-white font-bold rounded-2xl hover:bg-primary/90 transition-all text-lg flex items-center justify-center gap-2 hover-glow"
              title="Agenda tu Auditoría de Preparación Digital"
            >
              Asesoría Gratis
              <ArrowRight className="w-5 h-5" />
            </CalBookingModal>
            
            <a 
              href="#ecosystem"
              className="px-10 py-5 bg-transparent border border-white/20 text-white font-bold rounded-2xl hover:bg-white/5 transition-all text-lg flex items-center justify-center"
            >
              Cómo funciona
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;