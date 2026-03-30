import { Link } from "react-router-dom";
import Footer from "@/components/Footer";
import CTA from "@/components/CTA";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import SEO from "@/components/SEO";

const projects = [
  {
    title: "Inmobiliaria Premium MX",
    category: "Inmobiliario",
    description: "Generación de leads calificados para desarrollos de lujo en CDMX.",
    result: "+340% leads calificados",
    image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=600&h=400&fit=crop",
  },
  {
    title: "Fashion Store Online",
    category: "Ecommerce",
    description: "Estrategia completa de paid media y gestión de leads para tienda de moda.",
    result: "+280% en ventas",
    image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=600&h=400&fit=crop",
  },
  {
    title: "Clínica Dental Smile",
    category: "Salud",
    description: "Campañas de generación de leads y gestión de citas automatizada.",
    result: "98% tasa de asistencia",
    image: "https://images.unsplash.com/photo-1629909613654-28e377c37b09?w=600&h=400&fit=crop",
  },
  {
    title: "Fintech Innovate",
    category: "Finanzas",
    description: "Estrategia de adquisición de usuarios para app de inversiones.",
    result: "-65% costo por lead",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop",
  },
  {
    title: "Academia Online Pro",
    category: "Educación",
    description: "Generación de inscripciones para cursos profesionales online.",
    result: "+500 alumnos/mes",
    image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=600&h=400&fit=crop",
  },
  {
    title: "Restaurant Chain MX",
    category: "Restaurantes",
    description: "Campañas de delivery y reservaciones para cadena de restaurantes.",
    result: "+180% reservaciones",
    image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=600&h=400&fit=crop",
  },
];

const Portfolio = () => {
  return (
    <div className="min-h-screen">
      <SEO
        title="Casos de éxito en marketing digital en México | CDMX – Clipot"
        description="Casos de éxito en marketing digital en México: generación de leads calificados, ventas y crecimiento real. Proyectos en CDMX y campañas para empresas en todo México."
        keywords={[
          "casos de éxito marketing digital méxico",
          "portfolio marketing digital cdmx",
          "generación de leads cdmx",
          "paid media méxico",
          "meta ads méxico casos de éxito",
          "google ads cdmx casos de éxito",
          "agencia de marketing digital ciudad de méxico",
        ]}
      />
      {/* Hero */}
      <section className="pt-32 pb-20 bg-background">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-3xl mx-auto text-center"
          >
            <span className="text-sm font-medium text-primary mb-4 block">PORTFOLIO</span>
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              <span className="sr-only">Agencia de marketing digital</span>
              Resultados que{" "}
              <span className="text-primary">hablan</span>
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Cada proyecto es una historia de crecimiento. 
              Aquí están algunos de nuestros casos de éxito.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-background rounded-2xl overflow-hidden group shadow-sm ring-1 ring-border hover:shadow-md transition-shadow"
              >
                <div className="aspect-[3/2] overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-6">
                  <span className="text-xs font-medium text-primary uppercase tracking-wider">
                    {project.category}
                  </span>
                  <h3 className="font-display text-xl font-semibold mt-2 mb-3">
                    {project.title}
                  </h3>
                  <p className="text-muted-foreground text-sm mb-4">
                    {project.description}
                  </p>
                  <p className="font-display text-2xl font-bold text-primary">
                    {project.result}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-2xl mx-auto text-center"
          >
            <h2 className="font-display text-3xl md:text-4xl font-bold mb-6">
              Tu negocio puede ser el próximo
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Cuéntanos sobre tu proyecto y diseñemos juntos una estrategia 
              que genere resultados reales.
            </p>
            <Button asChild size="lg">
              <Link to="/contacto">
                Empezar proyecto
                <ArrowRight className="ml-2" size={18} />
              </Link>
            </Button>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Portfolio;
