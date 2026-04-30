import { motion } from "framer-motion";
import { Clock, Target, Database, Zap } from "lucide-react";

const pains = [
  {
    icon: <Clock className="w-6 h-6" />,
    title: "Respuestas Lentas",
    description: "Cada minuto de espera es una oportunidad de venta perdida. Automatizamos la primera línea de contacto.",
  },
  {
    icon: <Target className="w-6 h-6" />,
    title: "Cero Seguimiento",
    description: "Prospectos que se olvidan en hojas de cálculo. Implementamos pipelines que nunca descansan.",
  },
  {
    icon: <Database className="w-6 h-6" />,
    title: "Bases Desconectadas",
    description: "Información aislada que impide la toma de decisiones. Centralizamos tu data en un solo ecosistema.",
  },
  {
    icon: <Zap className="w-6 h-6" />,
    title: "Caos Operativo",
    description: "Procesos manuales propensos al error humano. Construimos flujos de trabajo autónomos y escalables.",
  },
];

const PainPointSection = () => {
  return (
    <section className="py-24 bg-background relative overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mb-16" data-aos="fade-up">
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-6 italic">
            El caos operativo es el <span className="text-primary">techo de tu crecimiento.</span>
          </h2>
          <p className="text-muted-foreground text-lg font-mono">
             PROBLEMAS IDENTIFICADOS 
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {pains.map((pain, index) => (
            <div
              key={index}
              data-aos="fade-up"
              data-aos-delay={index * 100}
              className="glass-card p-8 rounded-2xl group hover-glow"
            >
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-6 text-primary group-hover:scale-110 transition-transform duration-300">
                {pain.icon}
              </div>
              <h3 className="text-xl font-display font-bold mb-4 text-white italic">
                {pain.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {pain.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PainPointSection;
