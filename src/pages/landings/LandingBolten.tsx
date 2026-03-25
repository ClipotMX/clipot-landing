import ServiceLandingTemplate from "@/pages/landings/ServiceLandingTemplate";

export default function LandingBolten() {
  return (
    <ServiceLandingTemplate
      seoTitle="Implementación Bolten en México | CRM y automatización – Clipot"
      seoDescription="Implementación de Bolten en México para operar tu proceso comercial con orden: leads, seguimiento y reportes. Agenda un diagnóstico de 30 minutos."
      seoKeywords={[
        "implementación bolten méxico",
        "bolten crm",
        "crm méxico",
        "automatización de leads méxico",
        "pipeline ventas cdmx",
        "crm cerca de mí",
      ]}
      badge="Bolten · Implementación y operación"
      heroTitle="Implementación de Bolten en México"
      heroSubtitle="Ordenamos tu proceso comercial con pipeline, seguimiento y reportes. Diseñado para equipos que quieren consistencia y control sin fricción."
      features={[
        { title: "Estructura comercial", description: "Pipeline, campos y reglas para que todos vendan bajo el mismo proceso." },
        { title: "Automatización", description: "Recordatorios, secuencias y tareas para seguimiento sin depender de memoria." },
        { title: "Reporting", description: "Visibilidad de conversiones, tiempos de respuesta y desempeño por asesor." },
        { title: "Integraciones", description: "Conectamos herramientas clave para centralizar información del lead." },
        { title: "Playbooks", description: "Guías operativas para que el equipo ejecute y escale." },
        { title: "Soporte", description: "Ajustes y optimización por iteración de acuerdo a tu operación." },
      ]}
      steps={[
        { title: "Diagnóstico y mapa", description: "Entendemos tu operación, metas y fricción actual en ventas." },
        { title: "Implementación", description: "Configuramos Bolten y dejamos flujos listos para operar." },
        { title: "Ejecución", description: "Capacitamos, medimos y ajustamos para mejorar resultados." },
      ]}
    />
  );
}

