import { Boxes, Globe, Store, Shuffle, CreditCard, LucideIcon } from "lucide-react";

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
    slug: "negocio-lite",
    icon: Boxes,
    title: "Negocio Lite",
    tagline: "Módulos standalone para iniciar sin dependencias",
    description: "Implementación modular por bloques. Permite operar un módulo aislado (ej. CRM o tienda) sin dependencias cruzadas.",
    features: ["Instancias independientes", "Bloques por área", "Setup rápido", "Base para escalar"],
    benefits: [
      "Arranque rápido sin complejidad",
      "Menos riesgo al implementar por módulos",
      "Adopción simple por equipo",
      "Estructura lista para escalar",
      "Orden operativo desde el día 1",
      "Migración controlada a integraciones"
    ],
    process: [
      { step: "01", title: "Diagnóstico", description: "Definimos el módulo inicial y el alcance del arranque." },
      { step: "02", title: "Setup", description: "Configuramos estructura, campos y flujos básicos." },
      { step: "03", title: "Arranque", description: "Capacitamos al equipo y dejamos operación estable." },
      { step: "04", title: "Escala", description: "Preparamos el siguiente módulo cuando esté listo el negocio." }
    ],
    faqs: [
      { question: "¿Negocio Lite es una integración completa?", answer: "No. Es modular y standalone: iniciamos con un bloque sin dependencias cruzadas." },
      { question: "¿Puedo escalar después?", answer: "Sí. Está diseñado para migrar a Negocio Digital, Negocio Plus o Negocio Total sin reescribir la base." },
      { question: "¿Cuánto tarda?", answer: "Depende del módulo inicial, normalmente 1–3 semanas." }
    ],
    image: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=800&h=600&fit=crop"
  },
  {
    slug: "negocio-digital",
    icon: Globe,
    title: "Negocio Digital",
    tagline: "CRM + Shopify para ventas online y leads digitales",
    description: "Integramos CRM (Kommo/Bolten) con Shopify para sincronizar pedidos, abandono de carrito y creación/seguimiento de leads digitales.",
    features: ["Sincronización de pedidos", "Abandono de carrito", "Leads digitales al CRM", "Automatizaciones comerciales"],
    benefits: [
      "Visibilidad completa del funnel digital",
      "Seguimiento automático a carritos abandonados",
      "Menos fugas de leads por respuesta tardía",
      "Datos unificados para marketing y ventas",
      "Atribución más clara de ventas online",
      "Operación escalable para e-commerce"
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
    features: ["Clientes presenciales al CRM", "Estados de compra offline", "Inventario local", "Control por sucursal"],
    benefits: [
      "Operación física con trazabilidad",
      "Control de inventario y ventas por sucursal",
      "Clientes unificados para seguimiento",
      "Menos errores en caja y conciliación",
      "Visibilidad de ventas presenciales",
      "Base para omnicanalidad (Negocio Total)"
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
    features: ["Inventario omnicanal", "Unificación de clientes (merge)", "Resolución de conflictos", "Reportes unificados"],
    benefits: [
      "Visión única del cliente (online + físico)",
      "Menos quiebres de inventario",
      "Operación omnicanal consistente",
      "Mejor atribución de ventas y recompra",
      "Menos conflictos entre canales",
      "Base sólida para expansión"
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
      { question: "¿Se puede implementar por fases?", answer: "Sí. Normalmente se inicia con Negocio Lite, Negocio Digital o Negocio Plus y se escala." }
    ],
    image: "https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1?w=800&h=600&fit=crop"
  },
  {
    slug: "negocio-pay",
    icon: CreditCard,
    title: "Negocio Pay",
    tagline: "Cobros y conciliación con Mercado Pago",
    description: "Integración de pagos con Mercado Pago: links de pago, webhooks de transacciones y conciliación de cobros aprobados/rechazados.",
    features: ["Links de pago", "Webhooks de transacciones", "Conciliación", "Estatus de pago en operación"],
    benefits: [
      "Cobro más ágil con tarjeta",
      "Conciliación clara y trazable",
      "Menos errores de registro",
      "Alertas por pagos rechazados",
      "Integración con operación y reporting",
      "Base para automatizaciones de cobranza"
    ],
    process: [
      { step: "01", title: "Setup", description: "Configuramos credenciales y alcance de cobro." },
      { step: "02", title: "Links", description: "Generación de links y flujos de pago según tu operación." },
      { step: "03", title: "Webhooks", description: "Procesamiento de eventos aprobados/rechazados." },
      { step: "04", title: "Conciliación", description: "Reglas de conciliación y tableros de control." }
    ],
    faqs: [
      { question: "¿Sirve para negocio físico?", answer: "Sí. Negocio Pay cubre cobro con tarjeta y conciliación para operación presencial." },
      { question: "¿Qué eventos procesan?", answer: "Aprobado, rechazado, reembolso y cambios de estado según tu caso." },
      { question: "¿Se integra con CRM/POS?", answer: "Puede integrarse como módulo adicional dentro de Negocio Plus o Negocio Total." }
    ],
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&h=600&fit=crop"
  }
];

export const getServiceBySlug = (slug: string) => services.find(s => s.slug === slug);
