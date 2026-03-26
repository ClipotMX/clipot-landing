import ServiceLandingTemplate from "@/pages/landings/ServiceLandingTemplate";

export default function LandingMercadoPagoTerminal() {
  return (
    <ServiceLandingTemplate
      seoTitle="Terminal Mercado Pago para negocio físico en México | Cobros – Clipot"
      seoDescription="Implementamos terminal Mercado Pago para negocio físico en México: cobro con tarjeta, conciliación y reportes. Integramos operación y control."
      seoKeywords={[
        "terminal mercado pago negocio físico",
        "terminal para cobro con tarjeta méxico",
        "cobros con tarjeta cdmx",
        "punto de venta con terminal méxico",
        "conciliación de pagos méxico",
        "cobro con tarjeta cerca de mí",
      ]}
      badge="Mercado Pago · Cobros con tarjeta"
      heroTitle="Terminal Mercado Pago para negocio físico"
      heroSubtitle="Acepta pagos con tarjeta y mantén control: cobros, conciliación y reportes conectados a tu operación. Ideal para tiendas y sucursales."
      features={[
        { title: "Setup de cobro", description: "Configuración de terminal y flujo de cobro en mostrador." },
        { title: "Conciliación", description: "Estructura para conciliar ventas vs depósitos con claridad." },
        { title: "Reportes", description: "Tablero simple para ver ventas, comisiones y cierres (dummy)." },
        { title: "Operación", description: "Proceso para devoluciones, cancelaciones y control de caja." },
        { title: "Capacitación", description: "Entrenamiento al staff para que cobre sin fricción." },
        { title: "Mejora continua", description: "Ajustes por sucursal y por tipo de venta." },
      ]}
      steps={[
        { title: "Diagnóstico", description: "Definimos flujo de cobro, caja, conciliación y reportes." },
        { title: "Implementación", description: "Configuramos terminal, procesos y estructura de control." },
        { title: "Arranque", description: "Capacitamos y estabilizamos con seguimiento en operación real." },
      ]}
    />
  );
}

