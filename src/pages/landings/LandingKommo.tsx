import ServiceLandingTemplate from "@/pages/landings/ServiceLandingTemplate";

export default function LandingKommo() {
  return (
    <ServiceLandingTemplate
      seoTitle="Implementación Kommo CRM en México | CDMX – Clipot"
      seoDescription="Implementación de Kommo CRM en México (CDMX) para centralizar canales, automatizar seguimiento y mejorar cierres. Agenda un diagnóstico de 30 minutos."
      seoKeywords={[
        "implementación kommo crm méxico",
        "kommo crm cdmx",
        "crm para ventas méxico",
        "automatización de leads cdmx",
        "seguimiento de leads méxico",
        "crm cerca de mí",
      ]}
      badge="Kommo CRM · Implementación guiada"
      heroTitle="Implementación de Kommo CRM en México"
      heroSubtitle="Conecta WhatsApp, pipeline, automatizaciones y reportes para que tu equipo comercial atienda y cierre más. Atendemos CDMX y todo México."
      features={[
        { title: "Setup de pipeline", description: "Estructura de etapas, campos y reglas para que el proceso sea consistente." },
        { title: "Canales conectados", description: "Centraliza conversaciones y asignación de leads con trazabilidad." },
        { title: "Automatizaciones", description: "Seguimiento, recordatorios y tareas para no dejar leads sin respuesta." },
        { title: "Reportes", description: "Métricas accionables de respuesta, conversión y desempeño por asesor." },
        { title: "Capacitación", description: "Entrenamiento para que el equipo adopte el sistema desde el día 1." },
        { title: "Mejora continua", description: "Ajustes por iteración con base en resultados y fricción real." },
      ]}
      steps={[
        { title: "Diagnóstico", description: "Mapeamos tu proceso comercial y objetivos, detectamos cuellos de botella." },
        { title: "Implementación", description: "Configuramos Kommo, flujos y estructura del pipeline con tu equipo." },
        { title: "Adopción", description: "Capacitación, seguimiento y ajustes para asegurar uso real y resultados." },
      ]}
    />
  );
}

