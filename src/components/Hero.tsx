import { Link } from "react-router-dom";
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

const slides = [
  {
    title: "¿Su equipo comercial necesita más",
    highlight: "clientes calificados",
    subtitle:
      "Activamos campañas y gestionamos leads para que sus vendedores dediquen tiempo a cerrar. Menor CAC, mayor tasa de cierre.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop",
    cta: "Solicitar plan de inversión",
  },
  {
    title: "¿Su ecommerce no está",
    highlight: "rentabilizando",
    subtitle:
      "Optimizamos adquisición y checkout para mejorar conversión y ticket promedio. Implementación ágil con reporting ejecutivo.",
    image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=800&h=600&fit=crop",
    cta: "Optimizar mi tienda",
  },
  {
    title: "¿Leads que no reciben",
    highlight: "respuesta oportuna",
    subtitle:
      "Respondemos y calificamos en minutos, con flujos y CRM integrados. Más velocidad, más reuniones, más ingresos.",
    image: "https://images.unsplash.com/photo-1552581234-26160f608093?w=800&h=600&fit=crop",
    cta: "Mejorar gestión de leads",
  },
];

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center pt-20 bg-background overflow-hidden">
      <div className="container mx-auto px-4">
        <Swiper
          modules={[Autoplay, Pagination, Navigation]}
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
            el: ".hero-pagination",
          }}
          navigation={{
            prevEl: ".hero-prev",
            nextEl: ".hero-next",
          }}
          loop={true}
          speed={600}
          slidesPerView={1}
          spaceBetween={0}
          className="w-full hero-swiper"
        >
          {slides.map((slide, index) => (
            <SwiperSlide key={index} className="!h-auto">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center min-h-[70vh] py-8">
                {/* Content */}
                <div className="order-2 lg:order-1">
                  <span className="inline-block px-4 py-2 bg-muted rounded-full text-sm font-medium text-muted-foreground mb-6">
                    Partners oficiales de Kommo CRM
                  </span>

                  <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
                    <span className="sr-only">Agencia de marketing digital</span>
                    {slide.title}{" "}
                    <span className="text-primary">{slide.highlight}</span>?
                  </h1>

                  <p className="text-xl text-muted-foreground max-w-xl mb-10 leading-relaxed">
                    {slide.subtitle}
                  </p>

                  <div className="flex flex-col sm:flex-row gap-4">
                    <Button asChild size="lg" className="text-base px-8">
                      <Link to="/contacto">
                        {slide.cta}
                        <ArrowRight className="ml-2" size={18} />
                      </Link>
                    </Button>
                    <Button asChild variant="outline" size="lg" className="text-base px-8">
                      <Link to="/servicios">Ver servicios</Link>
                    </Button>
                  </div>
                </div>

                {/* Image */}
                <div className="order-1 lg:order-2">
                  <div className="relative">
                    <div className="aspect-[4/3] rounded-3xl overflow-hidden">
                      <img
                        src={slide.image}
                        alt={slide.title}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="absolute -z-10 top-8 right-8 w-full h-full rounded-3xl bg-primary/10" />
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Custom Navigation & Pagination */}
        <div className="flex items-center justify-center gap-6 mt-4">
          <button 
            className="hero-prev w-12 h-12 rounded-full border border-border flex items-center justify-center hover:bg-muted transition-colors cursor-pointer"
            aria-label="Slide anterior"
          >
            <ChevronLeft size={24} className="text-foreground" />
          </button>
          <div className="hero-pagination flex gap-2" />
          <button 
            className="hero-next w-12 h-12 rounded-full border border-border flex items-center justify-center hover:bg-muted transition-colors cursor-pointer"
            aria-label="Siguiente slide"
          >
            <ChevronRight size={24} className="text-foreground" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
