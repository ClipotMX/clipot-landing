import { motion } from "framer-motion";
import { ArrowRight, Download } from "lucide-react";

interface LeadMagnetProps {
  title: string;
  subtitle: string;
  buttonText: string;
  link?: string;
}

const LeadMagnet = ({ title, subtitle, buttonText, link = "#contact" }: LeadMagnetProps) => {
  return (
    <section className="py-20 relative overflow-hidden bg-background">
      <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-secondary/5" />
      <div className="container mx-auto px-4 relative z-10">
        <div 
          className="max-w-4xl mx-auto p-8 md:p-12 rounded-3xl border border-white/10 bg-white/5 backdrop-blur-sm flex flex-col md:flex-row items-center justify-between gap-8"
          data-aos="fade-up"
        >
          <div className="text-left" data-aos="fade-right" data-aos-delay="200">
            <h3 className="text-2xl md:text-3xl font-display font-bold mb-3 text-white italic">
              {title}
            </h3>
            <p className="text-white/60 font-mono text-sm uppercase tracking-wider">
              {subtitle}
            </p>
          </div>
          <a 
            href={link}
            className="whitespace-nowrap px-8 py-4 bg-white text-black font-bold rounded-xl hover:bg-primary hover:text-white transition-all flex items-center gap-2 group"
            data-aos="fade-left"
            data-aos-delay="400"
          >
            {buttonText}
            <Download className="w-5 h-5 group-hover:translate-y-1 transition-transform" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default LeadMagnet;
