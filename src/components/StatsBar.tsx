import { motion } from "framer-motion";

const stats = [
  { label: "Eficiencia Operativa", value: "45%", detail: "Promedio de reducción en tiempos manuales" },
  { label: "Tasa de Conversión", value: "+30%", detail: "Incremento en cierre de leads calificados" },
  { label: "Escalabilidad", value: "10x", detail: "Capacidad de procesamiento sin aumentar headcount" },
];

const StatsBar = () => {
  return (
    <section className="py-20 bg-background border-y border-white/5">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8">
          {stats.map((stat, index) => (
            <div
              key={index}
              data-aos="fade-up"
              data-aos-delay={index * 100}
              className="text-center"
            >
              <div className="text-5xl md:text-6xl font-display font-bold text-white mb-4 tracking-tighter italic">
                {stat.value}
              </div>
              <div className="text-primary font-mono text-sm uppercase tracking-widest mb-2">
                {stat.label}
              </div>
              <div className="text-muted-foreground text-sm max-w-[200px] mx-auto leading-tight">
                {stat.detail}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsBar;
