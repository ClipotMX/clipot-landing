import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import ScrollReveal from "./ScrollReveal";
import { services } from "@/data/services";

const Services = () => {
  return (
    <section className="py-24 bg-muted">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <ScrollReveal>
            <span className="text-sm font-medium text-primary mb-4 block">
              SERVICIOS
            </span>
          </ScrollReveal>
          <ScrollReveal delay={0.1}>
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
              Todo lo que necesitas para escalar
            </h2>
          </ScrollReveal>
          <ScrollReveal delay={0.2}>
            <p className="text-lg text-muted-foreground">
              No vendemos humo. Trabajamos con lo que funciona.
            </p>
          </ScrollReveal>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <ScrollReveal key={service.title} delay={index * 0.1}>
              <div className="bg-background p-8 rounded-2xl shadow-sm ring-1 ring-border hover:shadow-md transition-shadow group cursor-pointer h-full">
                <service.icon className="w-10 h-10 text-primary mb-4" />
                <h3 className="font-display text-xl font-semibold mb-1">{service.title}</h3>
                <p className="text-primary text-sm font-medium mb-2">{service.tagline}</p>
                <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                  {service.description}
                </p>
                <Link
                  to={`/servicios/${service.slug}`}
                  className="inline-flex items-center text-sm font-medium text-primary group-hover:gap-2 transition-all"
                >
                  Más info
                  <ArrowRight size={16} className="ml-1 opacity-0 group-hover:opacity-100 transition-opacity" />
                </Link>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
