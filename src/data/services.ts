import { Target, Palette, Globe, ShoppingCart, Users, Video, Sparkles, LucideIcon } from "lucide-react";

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
    slug: "paid-media",
    icon: Target,
    title: "Paid Media",
    tagline: "Campañas que generan leads, no solo clics",
    description: "Diseñamos y ejecutamos campañas de publicidad digital en Meta, Google, TikTok y LinkedIn optimizadas para generar leads calificados. No nos importan las vanity metrics, nos importa que tu teléfono suene con clientes reales.",
    features: ["Meta Ads", "Google Ads", "TikTok Ads", "LinkedIn Ads", "Remarketing", "A/B Testing"],
    benefits: [
      "Reducción del costo por lead hasta un 60%",
      "Segmentación precisa de tu audiencia ideal",
      "Optimización continua basada en datos",
      "Reportes semanales transparentes",
      "Creativos diseñados para convertir",
      "Estrategia omnicanal integrada"
    ],
    process: [
      { step: "01", title: "Análisis", description: "Estudiamos tu negocio, competencia y audiencia objetivo para diseñar la estrategia perfecta." },
      { step: "02", title: "Estrategia", description: "Definimos canales, presupuestos, mensajes y objetivos medibles." },
      { step: "03", title: "Ejecución", description: "Lanzamos las campañas con creativos optimizados y segmentación precisa." },
      { step: "04", title: "Optimización", description: "Monitoreamos diariamente y ajustamos para maximizar resultados." }
    ],
    faqs: [
      { question: "¿Cuánto presupuesto necesito para empezar?", answer: "Recomendamos un mínimo de $15,000 MXN mensuales en inversión publicitaria para obtener datos significativos y optimizar efectivamente. Sin embargo, podemos trabajar con presupuestos menores dependiendo de tu industria." },
      { question: "¿En cuánto tiempo veré resultados?", answer: "Normalmente los primeros leads llegan en las primeras 48-72 horas. La optimización real del costo por lead se logra entre las semanas 2-4 cuando tenemos suficientes datos." },
      { question: "¿Qué incluye el servicio?", answer: "Incluye estrategia, creación de campañas, diseño de anuncios, optimización continua, reportes semanales y reuniones de seguimiento." }
    ],
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop"
  },
  {
    slug: "diseno-digital",
    icon: Palette,
    title: "Diseño Digital",
    tagline: "Creativos que capturan atención y generan acción",
    description: "Diseñamos piezas visuales estratégicas para cada etapa de tu funnel. Desde banners y posts hasta landing pages completas, cada pixel está pensado para convertir visitantes en leads y leads en clientes.",
    features: ["Diseño de anuncios", "Landing pages", "Branding digital", "Motion graphics", "UX/UI", "Presentaciones"],
    benefits: [
      "Creativos que destacan en el feed",
      "Diseño basado en psicología del consumidor",
      "Consistencia visual en todos tus canales",
      "Adaptaciones para cada plataforma",
      "Entregas rápidas sin sacrificar calidad",
      "Revisiones ilimitadas"
    ],
    process: [
      { step: "01", title: "Brief", description: "Entendemos tu marca, objetivos y el mensaje que quieres comunicar." },
      { step: "02", title: "Concepto", description: "Desarrollamos propuestas creativas alineadas con tu estrategia." },
      { step: "03", title: "Diseño", description: "Creamos las piezas con atención al detalle y enfoque en conversión." },
      { step: "04", title: "Entrega", description: "Ajustamos según feedback y entregamos en todos los formatos necesarios." }
    ],
    faqs: [
      { question: "¿Cuántas revisiones incluyen?", answer: "Incluimos revisiones ilimitadas hasta que estés 100% satisfecho con el resultado. Queremos que ames tu diseño." },
      { question: "¿Puedo usar los diseños donde quiera?", answer: "Sí, todos los diseños son de tu propiedad. Te entregamos los archivos editables y puedes usarlos como desees." },
      { question: "¿Cuánto tiempo tarda un proyecto?", answer: "Depende de la complejidad. Un set de anuncios puede estar listo en 3-5 días. Una landing page completa toma entre 1-2 semanas." }
    ],
    image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=800&h=600&fit=crop"
  },
  {
    slug: "desarrollo-web",
    icon: Globe,
    title: "Desarrollo Web",
    tagline: "Sitios que convierten visitantes en clientes",
    description: "Desarrollamos sitios web optimizados para conversión. No solo se ven bien, están diseñados estratégicamente para guiar al usuario hacia la acción. Rápidos, responsivos y preparados para escalar.",
    features: ["Sitios corporativos", "Landing pages", "Optimización SEO", "Velocidad", "Analytics", "Integraciones"],
    benefits: [
      "Carga ultra rápida (menos de 3 segundos)",
      "Diseño responsive perfecto en móvil",
      "SEO técnico optimizado desde el día 1",
      "Integraciones con tu CRM y herramientas",
      "Panel de administración fácil de usar",
      "Hosting y mantenimiento incluido"
    ],
    process: [
      { step: "01", title: "Descubrimiento", description: "Analizamos tus objetivos, competencia y definimos la arquitectura del sitio." },
      { step: "02", title: "Wireframes", description: "Diseñamos la estructura y flujo de usuario antes de agregar diseño visual." },
      { step: "03", title: "Desarrollo", description: "Construimos el sitio con código limpio, optimizado para velocidad y SEO." },
      { step: "04", title: "Lanzamiento", description: "Testing exhaustivo, migración y capacitación para que puedas administrarlo." }
    ],
    faqs: [
      { question: "¿Qué tecnologías usan?", answer: "Trabajamos principalmente con React, Next.js y WordPress dependiendo de las necesidades del proyecto. Siempre elegimos la tecnología más adecuada para tu caso." },
      { question: "¿Incluyen hosting?", answer: "Sí, incluimos hosting de alta velocidad durante el primer año. Después tienes la opción de renovar con nosotros o migrar a tu propio servidor." },
      { question: "¿Puedo actualizar el contenido yo mismo?", answer: "Absolutamente. Todos nuestros sitios incluyen un panel de administración intuitivo y te damos capacitación para que puedas hacer cambios sin depender de nosotros." }
    ],
    image: "https://images.unsplash.com/photo-1547658719-da2b51169166?w=800&h=600&fit=crop"
  },
  {
    slug: "ecommerce",
    icon: ShoppingCart,
    title: "Ecommerce",
    tagline: "Tiendas online que realmente venden",
    description: "Creamos y optimizamos tiendas online que convierten. Desde el setup inicial hasta la optimización continua del catálogo, checkout y estrategia de ventas. No solo te damos una tienda bonita, te damos una máquina de ventas.",
    features: ["Shopify", "WooCommerce", "Optimización checkout", "Catálogo", "Pasarelas de pago", "Logística"],
    benefits: [
      "Checkout optimizado para reducir abandonos",
      "Integración con pasarelas locales e internacionales",
      "Catálogo fácil de administrar",
      "Automatizaciones de email marketing",
      "Análisis de comportamiento de compra",
      "Estrategia de upselling y cross-selling"
    ],
    process: [
      { step: "01", title: "Estrategia", description: "Analizamos tu catálogo, competencia y definimos la estructura de tu tienda." },
      { step: "02", title: "Setup", description: "Configuramos la plataforma, pasarelas de pago, envíos y catálogo." },
      { step: "03", title: "Diseño", description: "Personalizamos el diseño para reflejar tu marca y optimizar conversiones." },
      { step: "04", title: "Lanzamiento", description: "Pruebas de todo el flujo de compra y capacitación para tu equipo." }
    ],
    faqs: [
      { question: "¿Shopify o WooCommerce?", answer: "Depende de tu situación. Shopify es ideal si quieres algo simple y no quieres preocuparte por hosting. WooCommerce te da más control y flexibilidad. Te ayudamos a decidir." },
      { question: "¿Pueden migrar mi tienda actual?", answer: "Sí, migramos tu catálogo, clientes, pedidos e histórico de manera segura y sin pérdida de datos." },
      { question: "¿Qué pasa después del lanzamiento?", answer: "Ofrecemos planes de mantenimiento y optimización continua. También puedes administrar la tienda de forma independiente." }
    ],
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&h=600&fit=crop"
  },
  {
    slug: "community-management",
    icon: Users,
    title: "Community Management",
    tagline: "Gestión de redes que construye comunidad real",
    description: "Gestionamos tus redes sociales de forma profesional. No solo publicamos contenido, construimos una comunidad activa alrededor de tu marca. Respondemos comentarios, generamos engagement y convertimos seguidores en clientes.",
    features: ["Instagram", "Facebook", "TikTok", "LinkedIn", "Moderación", "Reportes mensuales"],
    benefits: [
      "Publicaciones consistentes y estratégicas",
      "Respuesta a comentarios y mensajes en menos de 1 hora",
      "Crecimiento orgánico de tu comunidad",
      "Contenido adaptado a cada plataforma",
      "Calendario editorial planificado",
      "Reportes mensuales con insights accionables"
    ],
    process: [
      { step: "01", title: "Auditoría", description: "Analizamos tu presencia actual, competencia y oportunidades de mejora." },
      { step: "02", title: "Estrategia", description: "Definimos pilares de contenido, tono de voz y calendario editorial." },
      { step: "03", title: "Ejecución", description: "Creamos y publicamos contenido, respondemos interacciones y moderamos." },
      { step: "04", title: "Análisis", description: "Medimos resultados y ajustamos estrategia basados en datos." }
    ],
    faqs: [
      { question: "¿Cuántas publicaciones incluyen?", answer: "Nuestros planes incluyen desde 12 hasta 30 publicaciones mensuales dependiendo del paquete. Stories y contenido efímero se maneja aparte." },
      { question: "¿Ustedes crean el contenido?", answer: "Sí, creamos todo el contenido: copy, diseño y programación. Solo necesitamos material base de tu producto/servicio." },
      { question: "¿Puedo aprobar antes de publicar?", answer: "Absolutamente. Te enviamos el calendario con anticipación para que apruebes o solicites cambios antes de publicar." }
    ],
    image: "https://images.unsplash.com/photo-1611162616305-c69b3fa7fbe0?w=800&h=600&fit=crop"
  },
  {
    slug: "content-creation",
    icon: Video,
    title: "Content Creation",
    tagline: "Contenido que engancha y convierte",
    description: "Creamos contenido visual y escrito que conecta con tu audiencia. Fotografía de producto, video para redes, reels, copywriting estratégico. Todo pensado para captar atención y generar acción.",
    features: ["Fotografía", "Video", "Reels", "Copywriting", "Guiones", "Edición"],
    benefits: [
      "Contenido profesional que destaca",
      "Adaptado a cada plataforma y formato",
      "Copywriting persuasivo basado en psicología",
      "Producción eficiente y entregas puntuales",
      "Banco de contenido para usar cuando quieras",
      "Consistencia visual con tu marca"
    ],
    process: [
      { step: "01", title: "Conceptualización", description: "Definimos el tipo de contenido, estilo visual y mensajes clave." },
      { step: "02", title: "Producción", description: "Sesión de fotos/video con todo el equipo y dirección creativa." },
      { step: "03", title: "Edición", description: "Post-producción profesional con ajustes según tus necesidades." },
      { step: "04", title: "Entrega", description: "Archivos en todos los formatos y resoluciones que necesites." }
    ],
    faqs: [
      { question: "¿Trabajan con modelos?", answer: "Podemos trabajar con modelos profesionales o con tu equipo, lo que funcione mejor para tu marca. También tenemos red de creadores UGC." },
      { question: "¿Dónde se hace la producción?", answer: "Podemos ir a tu locación, usar nuestro estudio o rentar locaciones especiales según las necesidades del proyecto." },
      { question: "¿Cuánto contenido se produce por sesión?", answer: "Depende del paquete, pero una sesión típica produce entre 15-30 piezas de contenido entre fotos y videos cortos." }
    ],
    image: "https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?w=800&h=600&fit=crop"
  },
  {
    slug: "ugc-campaigns",
    icon: Sparkles,
    title: "UGC Campaigns",
    tagline: "Contenido auténtico que genera confianza",
    description: "Coordinamos campañas de contenido generado por usuarios reales. Creadores que prueban tu producto, dan testimonios genuinos y generan contenido auténtico que conecta con tu audiencia mejor que cualquier anuncio tradicional.",
    features: ["Red de creadores", "Brief creativo", "Producción", "Derechos de uso", "Optimización", "Reportes"],
    benefits: [
      "Contenido auténtico y creíble",
      "Mayor engagement que contenido de marca",
      "Red de +200 creadores verificados",
      "Derechos de uso completos para tus campañas",
      "Contenido optimizado para cada plataforma",
      "Métricas y reportes de rendimiento"
    ],
    process: [
      { step: "01", title: "Selección", description: "Elegimos los creadores ideales según tu producto, audiencia y objetivos." },
      { step: "02", title: "Brief", description: "Enviamos instrucciones claras y tu producto a los creadores." },
      { step: "03", title: "Producción", description: "Los creadores generan el contenido con supervisión de calidad." },
      { step: "04", title: "Entrega", description: "Recibes el contenido editado, listo para usar en tus campañas." }
    ],
    faqs: [
      { question: "¿Qué tipo de creadores tienen?", answer: "Tenemos creadores de todos los nichos y estilos: lifestyle, tech, fitness, belleza, familia, etc. Seleccionamos los que mejor match hagan con tu marca." },
      { question: "¿Puedo usar el contenido en anuncios pagados?", answer: "Sí, todos nuestros paquetes incluyen derechos de uso para publicidad pagada por tiempo ilimitado." },
      { question: "¿Cuánto tarda en estar listo?", answer: "Desde que enviamos el producto al creador hasta recibir el contenido final, aproximadamente 2-3 semanas." }
    ],
    image: "https://images.unsplash.com/photo-1611162618071-b39a2ec055fb?w=800&h=600&fit=crop"
  }
];

export const getServiceBySlug = (slug: string) => services.find(s => s.slug === slug);
