import { Globe, Store, Shuffle, LucideIcon } from "lucide-react";

export interface Service {
  slug: string;
  icon: LucideIcon;
  title: string;
  tagline: string;
  description: string;
  monthlyPriceFrom: number;
  setupPriceFrom: number;
  features: string[];
  benefits: string[];
  process: { step: string; title: string; description: string }[];
  faqs: { question: string; answer: string }[];
  image: string;
}

export const services: Service[] = [
  {
    slug: "negocio-digital",
    icon: Globe,
    title: "Negocio Digital",
    tagline: "CRM + Shopify para ventas online y leads digitales",
    description: "Integramos CRM (Kommo/Bolten) con Shopify para sincronizar pedidos, abandono de carrito y creación/seguimiento de leads digitales.",
    monthlyPriceFrom: 14900,
    setupPriceFrom: 9900,
    features: ["Sincronización de pedidos", "Abandono de carrito", "Leads digitales al CRM", "Automatizaciones comerciales"],
    benefits: [
      "Reducción del tiempo de respuesta a leads digitales",
      "Recuperación de oportunidades con seguimiento a carritos",
      "Visibilidad del funnel y conversiones por canal",
      "Menos fugas por falta de proceso",
      "Mejor continuidad operativa del e-commerce",
      "Métricas claras para decisiones semanales"
    ],
    process: [
      { step: "01", title: "Diagnóstico", description: "Mapeamos eventos clave: compra, carrito, lead, y contacto." },
      { step: "02", title: "Webhooks", description: "Conectamos eventos de Shopify con el CRM y reglas de negocio." },
      { step: "03", title: "Automatización", description: "Secuencias y tareas de seguimiento para conversión." },
      { step: "04", title: "Optimización", description: "Ajustes por métricas de conversión y tiempos de respuesta." }
    ],
    faqs: [
      { question: "¿Qué se sincroniza?", answer: "Pedidos, clientes, y eventos (ej. carritos) según tu configuración." },
      { question: "¿Kommo o Bolten?", answer: "Trabajamos con ambos. La lógica del módulo se mantiene; cambia el conector." },
      { question: "¿Requiere Shopify Plus?", answer: "No necesariamente. Definimos alcance según tu plan y requerimientos." }
    ],
    image: "https://images.unsplash.com/photo-1553877522-43269d4ea984?w=800&h=600&fit=crop"
  },
  {
    slug: "negocio-plus",
    icon: Store,
    title: "Negocio Plus",
    tagline: "CRM + Pulpos POS para tienda física e inventario local",
    description: "Integramos CRM (Kommo/Bolten) con Pulpos (POS) para sincronizar clientes de tienda física, compras offline e inventario local.",
    monthlyPriceFrom: 24900,
    setupPriceFrom: 14900,
    features: ["Clientes presenciales al CRM", "Estados de compra offline", "Inventario local", "Control por sucursal"],
    benefits: [
      "Menos errores de operación y caja",
      "Control de inventario y ventas por sucursal",
      "Seguimiento a clientes presenciales con historial",
      "Visibilidad diaria para dirección",
      "Menos retrabajo por datos dispersos",
      "Base sólida para escalar a omnicanal"
    ],
    process: [
      { step: "01", title: "Diagnóstico", description: "Mapeamos operación de sucursales, caja e inventario." },
      { step: "02", title: "Sincronización", description: "Definimos qué datos fluyen entre POS y CRM." },
      { step: "03", title: "Estandarización", description: "Campos y reglas para datos consistentes." },
      { step: "04", title: "Reporting", description: "Tableros de ventas e inventario con visibilidad operativa." }
    ],
    faqs: [
      { question: "¿Se puede operar por sucursal?", answer: "Sí. Negocio Plus contempla estructura por sucursal y control de inventario local." },
      { question: "¿Qué pasa con clientes duplicados?", answer: "Se define una regla de unificación; Negocio Total profundiza en el merge omnicanal." },
      { question: "¿Funciona con varios puntos de venta?", answer: "Sí, ajustamos la sincronización a tu operación real." }
    ],
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop"
  },
  {
    slug: "negocio-total",
    icon: Shuffle,
    title: "Negocio Total",
    tagline: "Omnicanalidad completa: CRM <-> Shopify <-> Pulpos",
    description: "Sincronización a 3 vías para inventario y clientes unificados. Resolución de conflictos omnicanal y merge de perfiles.",
    monthlyPriceFrom: 44900,
    setupPriceFrom: 24900,
    features: ["Inventario omnicanal", "Unificación de clientes (merge)", "Resolución de conflictos", "Reportes unificados"],
    benefits: [
      "Unificación del cliente (online + físico) para mejor seguimiento",
      "Menos quiebres y conflictos de inventario entre canales",
      "Operación omnicanal consistente",
      "Mejor visibilidad del ROI por canal",
      "Menos fricción entre equipos",
      "Escalabilidad para multi-sucursal"
    ],
    process: [
      { step: "01", title: "Blueprint", description: "Definimos entidades, claves de unificación y reglas omnicanal." },
      { step: "02", title: "Integración 3 vías", description: "Conectamos CRM, Shopify y Pulpos con reglas de prioridad." },
      { step: "03", title: "Conflictos", description: "Implementamos resolución de inventario y merges de cliente." },
      { step: "04", title: "Monitoreo", description: "Alertas, tableros y mejora continua basada en datos." }
    ],
    faqs: [
      { question: "¿Cómo resuelven conflictos de inventario?", answer: "Definimos prioridad por canal y reglas por tipo de producto/sucursal." },
      { question: "¿Cómo unifican clientes?", answer: "Con llaves de identidad (tel/email) y reglas de merge por fuente." },
      { question: "¿Se puede implementar por fases?", answer: "Sí. Normalmente se inicia con Negocio Digital o Negocio Plus y se escala a Negocio Total." }
    ],
    image: "https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1?w=800&h=600&fit=crop"
  },
];

export const getServiceBySlug = (slug: string) => services.find(s => s.slug === slug);
