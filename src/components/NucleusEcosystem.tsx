import { motion } from "framer-motion";
import { Check, ArrowRight } from "lucide-react";
import CalBookingModal from "@/components/CalBookingModal";

const tiers = [
  {
    name: "Nucleus Lite",
    description: "Fundación digital para operaciones básicas y control inicial.",
    features: [
      "Gestión de Ventas y Facturación",
      "Control de Inventarios",
      "Reportes de Rendimiento Básicos",
      "Soporte Técnico 8/5",
    ],
    accent: "border-white/10",
  },
  {
    name: "Nucleus Digital",
    description: "Automatización y estrategia de crecimiento digital.",
    features: [
      "Configuración de CRM",
      "Automatización de Ventas",
      "Integración de Sistemas de Gestión",
      "Dashboards de Conversión",
      "Optimización de Publicidad Digital",
    ],
    accent: "border-primary/50",
    popular: true,
  },
  {
    name: "Nucleus Total",
    description: "El motor de escalabilidad total. Tu empresa en piloto automático.",
    features: [
      "Ecosistema Digital Completo",
      "Automatización Avanzada",
      "Análisis de Datos y Reportes",
      "Consultoría Estratégica Mensual",
      "Soporte Prioritario 9/5",
    ],
    accent: "border-secondary/50",
  },
];

const NucleusEcosystem = () => {
  return (
    <section id="ecosystem" className="py-24 bg-background relative">
      <div className="absolute inset-0 bg-mesh opacity-20 pointer-events-none" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-20" data-aos="fade-up">
          <h2 className="text-4xl md:text-6xl font-display font-bold mb-6 italic">
            Ecosistema <span className="text-gradient">NUCLEUS</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Arquitectura de 3 niveles diseñada para escalar según la madurez de tu infraestructura digital.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {tiers.map((tier, index) => (
            <div
              key={index}
              data-aos="fade-up"
              data-aos-delay={index * 150}
              className={`relative p-8 rounded-3xl bg-surface border-gradient flex flex-col ${
                tier.popular ? "lg:scale-105 z-10" : ""
              }`}
              style={{
                "--color-primary": tier.name === "Nucleus Total" ? "var(--color-secondary)" : "var(--color-primary)",
              } as any}
            >
              {tier.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-primary text-black px-4 py-1 rounded-full text-xs font-mono font-bold uppercase tracking-wider">
                  Más Solicitado
                </div>
              )}
              
              <div className="mb-8">
                <h3 className="text-2xl font-display font-bold text-white mb-2 italic">{tier.name}</h3>
                <p className="text-muted-foreground text-sm min-h-[40px]">{tier.description}</p>
              </div>

              <div className="space-y-4 mb-8 flex-1">
                {tier.features.map((feature, fIndex) => (
                  <div key={fIndex} className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                    <span className="text-white/80 text-sm leading-tight">{feature}</span>
                  </div>
                ))}
              </div>

              <CalBookingModal
                className={`w-full py-4 rounded-xl font-bold flex items-center justify-center gap-2 transition-all ${
                  tier.popular
                    ? "bg-primary text-black hover:bg-primary/90"
                    : "bg-white/5 text-white border border-white/10 hover:bg-white/10"
                }`}
                title={`Consulta sobre ${tier.name}`}
              >
                Comenzar ahora
                <ArrowRight className="w-4 h-4" />
              </CalBookingModal>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default NucleusEcosystem;
