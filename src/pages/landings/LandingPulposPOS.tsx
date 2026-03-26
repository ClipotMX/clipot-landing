import ServiceLandingTemplate from "@/pages/landings/ServiceLandingTemplate";

export default function LandingPulposPOS() {
  return (
    <ServiceLandingTemplate
      seoTitle="Implementación Pulpos POS en México | Punto de venta – Clipot"
      seoDescription="Implementación de Pulpos POS en México para operar ventas, inventario, caja y reportes con orden. Ideal para negocio físico y multi-sucursal."
      seoKeywords={[
        "implementación pulpos pos méxico",
        "pulpos punto de venta",
        "sistema pos para negocio méxico",
        "punto de venta cdmx",
        "control de inventario méxico",
        "corte de caja méxico",
      ]}
      badge="Pulpos POS · Implementación y operación"
      heroTitle="Implementación de Pulpos POS en México"
      heroSubtitle="Ventas, inventario, caja y reportes conectados. Un sistema modular donde cada bloque se complementa para que tu operación no dependa de Excel."
      features={[
        { title: "Catálogo y precios", description: "Estructura de productos, variantes y listas para operar sin fricción." },
        { title: "Inventario", description: "Entradas/salidas, mínimos y control por sucursal (dummy: ajusta a tu operación)." },
        { title: "Caja y cortes", description: "Registro de movimientos, cortes y control de efectivo." },
        { title: "Usuarios y permisos", description: "Roles por área para mejorar control y reducir errores." },
        { title: "Reportes", description: "Ventas por día/sucursal/producto con visibilidad ejecutiva." },
        { title: "Soporte", description: "Acompañamiento para ajustes y adopción con tu equipo." },
      ]}
      steps={[
        { title: "Diagnóstico", description: "Entendemos tu operación, sucursales, catálogo e inventario." },
        { title: "Implementación", description: "Configuramos Pulpos POS y dejamos listo para operar." },
        { title: "Arranque", description: "Capacitación, pruebas en piso y ajustes para estabilizar." },
      ]}
    />
  );
}

