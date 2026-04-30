import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import CalBookingModal from "@/components/CalBookingModal";

const Hero = () => {
  return (
    <section id="hero" className="bg-background text-foreground min-h-screen flex items-center pt-24 px-4 md:px-8 relative overflow-hidden">
      <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-20">
        <div className="absolute top-1/4 -right-1/4 w-[800px] h-[800px] bg-primary/20 rounded-full blur-[120px] animate-pulse-glow" />
        <div className="absolute -bottom-1/4 -left-1/4 w-[600px] h-[600px] bg-secondary/10 rounded-full blur-[100px]" />
        
        <div 
          className="absolute inset-0" 
          style={{ 
            backgroundImage: 'linear-gradient(to right, rgba(255,255,255,0.05) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.05) 1px, transparent 1px)',
            backgroundSize: '40px 40px'
          }} 
        />
      </div>
      
      <div className="container mx-auto max-w-[1400px] relative z-10 text-center">
        <div className="max-w-6xl mx-auto flex flex-col items-center">
           
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-5xl md:text-7xl lg:text-8xl font-display font-bold tracking-tighter leading-[1.1] mb-6"
          >
            Implementamos los sistemas digitales que tu empresa <span className="text-gradient">realmente necesita</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-lg md:text-xl text-muted-foreground max-w-3xl leading-relaxed mb-12"
          >
            Sabemos que el caos operativo detiene tu crecimiento: procesos manuales que quitan tiempo, falta de seguimiento a prospectos y datos dispersos que no dicen nada. <span className="text-foreground">No vendemos software, construimos tu infraestructura digital.</span>
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-6 justify-center"
          >
            <CalBookingModal
              className="px-10 py-5 bg-primary text-primary-foreground font-bold rounded-2xl hover:bg-primary/90 transition-all text-lg flex items-center justify-center gap-2 hover-glow"
              title="Agenda tu Auditoría de Preparación Digital"
            >
              Asesoría Gratis
              <ArrowRight className="w-5 h-5" />
            </CalBookingModal>
            
            <a 
              href="#ecosystem"
              className="px-10 py-5 bg-transparent border border-white/20 text-foreground font-bold rounded-2xl hover:bg-white/5 transition-all text-lg flex items-center justify-center"
            >
              Cómo funciona
            </a>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="mt-8 flex items-center gap-6 text-sm text-muted-foreground font-mono"
          >
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-primary" />
              <span>Sin compromiso</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-primary" />
              <span>Resultados medibles</span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;