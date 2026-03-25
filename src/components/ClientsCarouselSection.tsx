import * as React from "react";
import { ExternalLink } from "lucide-react";
import { motion } from "framer-motion";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";

type ClientCase = {
  name: string;
  industry: string;
  summary: string;
  improvements: string[];
  websiteUrl: string;
};

const clients: ClientCase[] = [
  {
    name: "Inmobiliaria Delta",
    industry: "Inmobiliario",
    summary: "Implementación de seguimiento y calificación de leads con pipeline comercial y reportes ejecutivos.",
    improvements: ["Respuesta más rápida a leads", "Pipeline visible para dirección", "Reportes semanales automáticos"],
    websiteUrl: "https://example.com",
  },
  {
    name: "Restaurantes La Esquina",
    industry: "Restaurantes",
    summary: "Ordenamos ventas y operación: pedidos, pagos, y tablero de métricas por sucursal.",
    improvements: ["Menos errores operativos", "Cobro más ágil", "Métricas por sucursal"],
    websiteUrl: "https://example.com",
  },
  {
    name: "Clínica Nova",
    industry: "Salud",
    summary: "Automatizamos recordatorios y seguimiento de citas para reducir no-shows y mejorar la ocupación.",
    improvements: ["Más citas confirmadas", "Menos no-shows", "Seguimiento automatizado"],
    websiteUrl: "https://example.com",
  },
  {
    name: "Ecommerce Aurora",
    industry: "Ecommerce",
    summary: "Integración de tienda, pagos y reportes; visibilidad completa del embudo de ventas.",
    improvements: ["Checkout optimizado", "Conciliación simplificada", "Tablero de ventas en tiempo real"],
    websiteUrl: "https://example.com",
  },
  {
    name: "Distribuidora Centro",
    industry: "B2B",
    summary: "CRM + automatización de seguimiento para que el equipo comercial priorice oportunidades calientes.",
    improvements: ["Seguimiento consistente", "Mejor priorización", "Menos fugas de pipeline"],
    websiteUrl: "https://example.com",
  },
  {
    name: "Academia Pro",
    industry: "Educación",
    summary: "Implementación de procesos de venta y comunicación con leads para aumentar conversiones a inscripción.",
    improvements: ["Más agendamientos", "Menos leads fríos", "Proceso replicable"],
    websiteUrl: "https://example.com",
  },
];

function initials(name: string) {
  return name
    .split(/\s+/)
    .filter(Boolean)
    .slice(0, 2)
    .map((w) => w[0]?.toUpperCase())
    .join("");
}

export default function ClientsCarouselSection() {
  const [active, setActive] = React.useState<ClientCase | null>(null);

  return (
    <section id="clientes" className="scroll-mt-[80px] bg-brand-bg text-brand-text py-24 px-4 md:px-8">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center max-w-3xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45 }}
            className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight"
          >
            Nuestros clientes
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45, delay: 0.06 }}
            className="mt-4 text-lg text-brand-muted"
          >
            Proyectos donde el sistema se tradujo en más control, seguimiento y claridad operativa.
          </motion.p>
        </div>

        <div className="mt-14">
          <Carousel opts={{ align: "start", loop: false }} className="px-10">
            <CarouselContent className="-ml-4">
              {clients.map((c) => (
                <CarouselItem key={c.name} className="basis-[85%] sm:basis-[52%] lg:basis-[33%]">
                  <Dialog open={active?.name === c.name} onOpenChange={(open) => setActive(open ? c : null)}>
                    <DialogTrigger asChild>
                      <button
                        type="button"
                        className="w-full text-left rounded-2xl border border-brand-border bg-brand-surface p-6 hover:bg-brand-surface/80 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-primary"
                      >
                        <div className="flex items-start justify-between gap-4">
                          <div className="flex items-center gap-3">
                            <div className="h-11 w-11 rounded-xl bg-brand-primary/15 border border-brand-border flex items-center justify-center font-bold text-brand-text">
                              {initials(c.name)}
                            </div>
                            <div>
                              <div className="font-semibold">{c.name}</div>
                              <div className="text-sm text-brand-muted">{c.industry}</div>
                            </div>
                          </div>
                          <div className="text-xs text-brand-muted">Ver caso</div>
                        </div>
                        <div className="mt-4 text-sm text-brand-muted leading-relaxed line-clamp-3">
                          {c.summary}
                        </div>
                      </button>
                    </DialogTrigger>
                    <DialogContent className="w-[min(94vw,820px)] max-w-none">
                      <div className="text-lg font-semibold">{c.name}</div>
                      <div className="text-sm text-muted-foreground">{c.industry}</div>
                      <div className="mt-4 text-sm leading-relaxed">{c.summary}</div>
                      <div className="mt-5 grid grid-cols-1 sm:grid-cols-2 gap-3">
                        {c.improvements.map((i) => (
                          <div key={i} className="rounded-xl border border-border bg-muted px-4 py-3 text-sm">
                            {i}
                          </div>
                        ))}
                      </div>
                      <div className="mt-6">
                        <a
                          href={c.websiteUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 text-sm font-semibold text-primary hover:underline"
                        >
                          Visitar sitio
                          <ExternalLink className="h-4 w-4" />
                        </a>
                      </div>
                    </DialogContent>
                  </Dialog>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="left-0" />
            <CarouselNext className="right-0" />
          </Carousel>
        </div>
      </div>
    </section>
  );
}

