import { useCallback, useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

const slides = [
  {
    title: "¿Tu tienda online no vende?",
    subtitle: "Aumentamos tus ventas con estrategias probadas que funcionan.",
    cta: "Quiero vender más",
    stat: "+340% en ventas",
    client: "Ecommerce de moda",
  },
  {
    title: "¿Leads que nunca responden?",
    subtitle: "Calificamos y contactamos cada lead en menos de 5 minutos.",
    cta: "Mejorar mis leads",
    stat: "98% tasa de contacto",
    client: "Sector inmobiliario",
  },
  {
    title: "¿Campañas sin resultados?",
    subtitle: "Optimizamos tu inversión para maximizar cada peso gastado.",
    cta: "Optimizar campañas",
    stat: "-60% costo por lead",
    client: "Servicios financieros",
  },
];

const Slider = () => {
  const [current, setCurrent] = useState(0);

  const next = useCallback(() => {
    setCurrent((prev) => (prev + 1) % slides.length);
  }, []);

  const prev = () => {
    setCurrent((prev) => (prev - 1 + slides.length) % slides.length);
  };

  useEffect(() => {
    const timer = setInterval(next, 6000);
    return () => clearInterval(timer);
  }, [next]);

  return (
    <section className="py-24 bg-foreground text-background overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="relative min-h-[300px]">
            <AnimatePresence mode="wait">
              <motion.div
                key={current}
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                transition={{ duration: 0.5 }}
                className="text-center"
              >
                <span className="inline-block px-4 py-1 bg-background/10 rounded-full text-sm mb-6">
                  {slides[current].client}
                </span>
                <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
                  {slides[current].title}
                </h2>
                <p className="text-xl text-background/70 mb-8 max-w-2xl mx-auto">
                  {slides[current].subtitle}
                </p>
                <p className="font-display text-4xl md:text-5xl font-bold text-primary mb-8">
                  {slides[current].stat}
                </p>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Controls */}
          <div className="flex items-center justify-center gap-4 mt-8">
            <button
              onClick={prev}
              className="p-2 rounded-full border border-background/30 hover:bg-background/10 transition-colors"
              aria-label="Anterior"
            >
              <ChevronLeft size={24} />
            </button>

            <div className="flex gap-2">
              {slides.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrent(index)}
                  className={`w-2 h-2 rounded-full transition-all ${
                    current === index ? "bg-primary w-8" : "bg-background/30"
                  }`}
                  aria-label={`Ir a slide ${index + 1}`}
                />
              ))}
            </div>

            <button
              onClick={next}
              className="p-2 rounded-full border border-background/30 hover:bg-background/10 transition-colors"
              aria-label="Siguiente"
            >
              <ChevronRight size={24} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Slider;
