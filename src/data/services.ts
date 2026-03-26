import { Boxes, Layers, Cog, Building2, LucideIcon } from "lucide-react";

export interface Service {
  slug: string;
  icon: LucideIcon;
  title: string;
  tagline: string;
  description: string;
  features: string[];
  benefits: string[];
  process: { step: string; title: string; description: string }[];
  faqs: { question: string; answer: string }[];
  image: string;
}

export const services: Service[] = [
  {
    slug: "business-os-lite",
    icon: Boxes,
    title: "Business OS Lite",
    tagline: "Ecosistema básico para emprendedores y microempresas",
    description: "Orden operativo sin complejidad: clientes, tareas, agenda y métricas básicas. Ideal para iniciar con estructura.",
    features: ["Clientes y contactos", "Agenda y recordatorios", "Tareas y seguimiento", "Tablero básico de métricas"],
    benefits: [
      "Visión clara de pendientes y próximos pasos",
      "Seguimiento simple y consistente",
      "Registro de clientes sin fricción",
      "Primer tablero de métricas operativas",
      "Base para escalar a planes superiores",
      "Implementación rápida y guiada"
    ],
    process: [
      { step: "01", title: "Diagnóstico", description: "Entendemos tu operación actual y priorizamos los bloques críticos." },
      { step: "02", title: "Setup", description: "Configuramos clientes, agenda, tareas y tablero básico." },
      { step: "03", title: "Arranque", description: "Capacitamos y acompañamos para adoptar el sistema." },
      { step: "04", title: "Ajustes", description: "Iteramos con base en tu operación real y feedback." }
    ],
    faqs: [
      { question: "¿Qué incluye el Lite?", answer: "Bloques base: clientes, tareas, agenda y métricas operativas simples." },
      { question: "¿Puedo migrar después?", answer: "Sí, puedes evolucionar a Advance, Pro o High sin perder datos." },
      { question: "¿Cuánto tarda?", answer: "Entre 1 y 2 semanas dependiendo de tu disponibilidad." }
    ],
    image: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=800&h=600&fit=crop"
  },
  {
    slug: "business-os-advance",
    icon: Layers,
    title: "Business OS Advance",
    tagline: "Productividad y automatización intermedia para pymes",
    description: "Pipelines por área, automatización de seguimiento y reportes ejecutivos para operar con eficiencia y consistencia.",
    features: ["Pipelines por área", "Automatización de seguimiento", "Plantillas operativas", "Reportes ejecutivos"],
    benefits: [
      "Menos fugas en procesos clave",
      "Seguimiento consistente sin depender de memoria",
      "Visibilidad ejecutiva clara",
      "Procesos documentados y replicables",
      "Base de datos ordenada",
      "Adopción guiada por nuestro equipo"
    ],
    process: [
      { step: "01", title: "Mapa de procesos", description: "Identificamos áreas y definimos pipelines y reglas." },
      { step: "02", title: "Automatización", description: "Implementamos recordatorios, tareas y flujos clave." },
      { step: "03", title: "Reporting", description: "Configuramos tableros y reportes ejecutivos." },
      { step: "04", title: "Optimización", description: "Iteramos según fricción y resultados." }
    ],
    faqs: [
      { question: "¿Qué automatizan?", answer: "Recordatorios, asignaciones, cambios de estado y tareas críticas." },
      { question: "¿Necesito equipo técnico?", answer: "No, nosotros configuramos y te capacitamos." },
      { question: "¿Se integra con herramientas?", answer: "En Advance se preparan integraciones base; Pro amplía esto." }
    ],
    image: "https://images.unsplash.com/photo-1553877522-43269d4ea984?w=800&h=600&fit=crop"
  },
  {
    slug: "business-os-pro",
    icon: Cog,
    title: "Business OS Pro",
    tagline: "Integraciones avanzadas y análisis empresarial",
    description: "Conecta sistemas externos, define KPIs y obtén analítica avanzada para tomar decisiones con datos.",
    features: ["Integraciones externas", "Analítica avanzada", "Procesos documentados", "KPIs de desempeño"],
    benefits: [
      "Menos silos de información",
      "Decisiones basadas en datos",
      "Procesos medibles de punta a punta",
      "Integraciones robustas",
      "Seguridad y gobierno de datos",
      "Soporte y mejora continua"
    ],
    process: [
      { step: "01", title: "Arquitectura", description: "Diseñamos cómo deben fluir los datos entre sistemas." },
      { step: "02", title: "Integración", description: "Conectamos herramientas clave y normalizamos datos." },
      { step: "03", title: "KPIs", description: "Definimos métricas y tableros por área." },
      { step: "04", title: "Análisis", description: "Implementamos insights accionables y alertas." }
    ],
    faqs: [
      { question: "¿Qué sistemas integran?", answer: "CRM, POS, contabilidad, e-commerce, mensajería y más (según caso)." },
      { question: "¿Cómo aseguran calidad de datos?", answer: "Validaciones, normalización y reglas de negocio." },
      { question: "¿Qué tipo de reportes?", answer: "Operativos, comerciales y de rendimiento con segmentación." }
    ],
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop"
  },
  {
    slug: "business-os-high",
    icon: Building2,
    title: "Business OS High",
    tagline: "Ecosistema completo y personalizable para corporativos",
    description: "Arquitectura modular, permisos granulares, data warehouse y reporting financiero y operativo a escala.",
    features: ["Arquitectura modular", "Permisos y roles granulares", "Data Warehouse", "Reportes financieros y operativos"],
    benefits: [
      "Gobierno de procesos y datos",
      "Escalabilidad y resiliencia",
      "Personalización total por área",
      "Cumplimiento y auditoría",
      "Visibilidad ejecutiva integral",
      "Acompañamiento dedicado"
    ],
    process: [
      { step: "01", title: "Blueprint", description: "Documento de arquitectura y procesos con alcance y prioridades." },
      { step: "02", title: "Implementación", description: "Despliegue por fases con control de cambios." },
      { step: "03", title: "Data & BI", description: "Modelo de datos, DW y tableros financieros/operativos." },
      { step: "04", title: "Governance", description: "Permisos, roles, auditoría y continuidad operativa." }
    ],
    faqs: [
      { question: "¿Cuánto dura el proyecto?", answer: "Depende del alcance, típicamente de 6 a 16 semanas por fase." },
      { question: "¿Qué áreas cubre?", answer: "Comercial, operación, finanzas, soporte, logística y más." },
      { question: "¿Qué nivel de personalización?", answer: "Total: procesos, métricas, permisos y flujos por área." }
    ],
    image: "https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1?w=800&h=600&fit=crop"
  }
];

export const getServiceBySlug = (slug: string) => services.find(s => s.slug === slug);
