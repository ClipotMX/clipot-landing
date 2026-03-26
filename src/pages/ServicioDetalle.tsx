import { useParams, Link, Navigate } from "react-router-dom";
import Footer from "@/components/Footer";
import ChatWidget from "@/components/ChatWidget";
import CTA from "@/components/CTA";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, ArrowLeft, CheckCircle } from "lucide-react";
import { getServiceBySlug, services } from "@/data/services";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import SEO from "@/components/SEO";

const ServicioDetalle = () => {
  const { slug } = useParams<{ slug: string }>();
  const service = getServiceBySlug(slug || "");

  if (!service) {
    return <Navigate to="/servicios" replace />;
  }

  const Icon = service.icon;

  return (
    <div className="min-h-screen">
      <SEO
        title={`${service.title} en México – Clipot`}
        description={service.description}
        keywords={[
          service.title,
          "business os méxico",
          "ecosistema empresarial",
          "gestión operativa",
        ]}
        type="article"
        canonical={`/servicios/${service.slug}`}
      />
      {/* Hero */}
      <section className="pt-32 pb-20 bg-background">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-4xl mx-auto"
          >
            <Link
              to="/servicios"
              className="inline-flex items-center text-sm text-muted-foreground hover:text-primary mb-6 transition-colors"
            >
              <ArrowLeft size={16} className="mr-2" />
              Volver a servicios
            </Link>

            <div className="flex items-start gap-6 mb-8">
              <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                <Icon className="w-8 h-8 text-primary" />
              </div>
              <div>
                <h1 className="font-display text-4xl md:text-5xl font-bold mb-4">
                  {service.title}
                </h1>
                <p className="text-xl text-primary font-medium">
                  {service.tagline}
                </p>
              </div>
            </div>

            <p className="text-lg text-muted-foreground leading-relaxed mb-8">
              {service.description}
            </p>

            <div className="flex flex-wrap gap-3 mb-10">
              {service.features.map((feature) => (
                <span
                  key={feature}
                  className="px-4 py-2 bg-muted rounded-full text-sm font-medium"
                >
                  {feature}
                </span>
              ))}
            </div>

            <Button asChild size="lg">
              <Link to="/contacto">
                Solicitar cotización
                <ArrowRight className="ml-2" size={18} />
              </Link>
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Image */}
      <section className="py-12 bg-muted">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto"
          >
            <img
              src={service.image}
              alt={service.title}
              className="w-full aspect-video object-cover rounded-3xl"
            />
          </motion.div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="font-display text-3xl md:text-4xl font-bold mb-12 text-center"
            >
              ¿Por qué elegirnos?
            </motion.h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {service.benefits.map((benefit, index) => (
                <motion.div
                  key={benefit}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-start gap-4 p-6 bg-muted rounded-2xl shadow-sm"
                >
                  <CheckCircle className="w-6 h-6 text-primary flex-shrink-0 mt-0.5" />
                  <span className="font-medium">{benefit}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="font-display text-3xl md:text-4xl font-bold mb-12 text-center"
            >
              Nuestro proceso
            </motion.h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {service.process.map((step, index) => (
                <motion.div
                  key={step.step}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-background p-8 rounded-2xl"
                >
                  <span className="text-4xl font-display font-bold text-primary/30">
                    {step.step}
                  </span>
                  <h3 className="font-display text-xl font-semibold mt-2 mb-3">
                    {step.title}
                  </h3>
                  <p className="text-muted-foreground">{step.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="font-display text-3xl md:text-4xl font-bold mb-12 text-center"
            >
              Preguntas frecuentes
            </motion.h2>

            <Accordion type="single" collapsible className="space-y-4">
              {service.faqs.map((faq, index) => (
                <AccordionItem
                  key={index}
                  value={`item-${index}`}
                  className="bg-muted rounded-2xl px-6 border-none"
                >
                  <AccordionTrigger className="text-left font-display font-semibold hover:no-underline py-6">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground pb-6">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>

      {/* Other Services */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="font-display text-2xl font-bold mb-8 text-center">
              Otros servicios
            </h2>
            <div className="flex flex-wrap justify-center gap-4">
              {services
                .filter((s) => s.slug !== slug)
                .map((s) => (
                  <Link
                    key={s.slug}
                    to={`/servicios/${s.slug}`}
                    className="px-6 py-3 bg-background rounded-full text-sm font-medium hover:bg-primary hover:text-primary-foreground transition-colors"
                  >
                    {s.title}
                  </Link>
                ))}
            </div>
          </div>
        </div>
      </section>

      <CTA />
      <Footer />
      <ChatWidget />
    </div>
  );
};

export default ServicioDetalle;
