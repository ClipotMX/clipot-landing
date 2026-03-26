import ServiceLandingTemplate from "@/pages/landings/ServiceLandingTemplate";

export default function LandingShopify() {
  return (
    <ServiceLandingTemplate
      seoTitle="Tienda en línea con Shopify en México | Ecommerce – Clipot"
      seoDescription="Creamos y optimizamos tu tienda en línea con Shopify en México: catálogo, checkout, pagos y analítica. Enfoque en conversión y operación."
      seoKeywords={[
        "tienda en línea shopify méxico",
        "desarrollo shopify cdmx",
        "ecommerce shopify méxico",
        "implementación shopify méxico",
        "checkout shopify méxico",
        "tienda online cerca de mí",
      ]}
      badge="Shopify · Ecommerce listo para operar"
      heroTitle="Tienda en línea con Shopify en México"
      heroSubtitle="Lanza una tienda clara, rápida y lista para vender: catálogo, pagos, envíos y analítica. Atendemos CDMX y todo México."
      features={[
        { title: "Estructura de catálogo", description: "Colecciones, variantes, fichas y mejores prácticas para conversión." },
        { title: "Diseño y UX", description: "Landing y PDPs pensadas para compra rápida y confianza." },
        { title: "Checkout y pagos", description: "Configuración de pagos, impuestos y reglas de operación." },
        { title: "Envíos", description: "Zonas, tarifas y flujos para entrega local y nacional (dummy)." },
        { title: "Tracking", description: "Analítica base para medir funnel y optimizar." },
        { title: "Operación", description: "Guías para actualizar productos, precios y promociones." },
      ]}
      steps={[
        { title: "Estrategia", description: "Objetivo, catálogo, logística y definición de estructura." },
        { title: "Implementación", description: "Construimos la tienda y dejamos listos pagos y operación." },
        { title: "Optimización", description: "Ajustamos con base en datos: conversiones, abandono y ticket." },
      ]}
    />
  );
}

