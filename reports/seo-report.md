# Informe SEO – Clipot

## Páginas auditadas
- Inicio (/)
- Nosotros (/nosotros)
- Servicios (/servicios)
- Servicio Detalle (/servicios/:slug)
- Portfolio (/portfolio)
- Kommo (/kommo)
- Blog (/blog)
- Blog Post (/blog/:slug)
- Contacto (/contacto)
- Privacidad (/privacidad)
- Términos (/terminos)

## Estado actual (antes de optimización)
- index.html:
  - title: "Lovable App"
  - meta description: "Lovable Generated Project"
  - Open Graph: og:title/description genéricos
  - keywords: no definidos
- Páginas internas: sin títulos/meta únicos (SPA sin metadatos específicos por ruta)

## Palabras clave objetivo
- Principales: "agencia marketing digital", "agencia de marketing digital"
- Secundarias: "servicios de marketing online", "consultoría SEO", "generación de leads", "gestión de leads", "paid media", "desarrollo web", "Kommo CRM"
- Justificación: alinean intención transaccional e informativa; alta relevancia para oferta de Clipot; combinan términos de categoría y producto.

## Propuestas optimizadas (implementadas)
- Inicio:
  - title: "Agencia de marketing digital – Clipot | Generación de leads"
  - description: "Agencia de marketing digital especializada en generación y gestión de leads, paid media y desarrollo web. Estrategias a medida para crecer tus ventas."
- Nosotros:
  - title: "Agencia de marketing digital especializada en leads | Clipot"
  - description: "Conoce a Clipot: especialistas en generación y gestión de leads. Transparencia, velocidad y resultados para tu negocio."
- Servicios:
  - title: "Servicios de marketing digital | Paid media, desarrollo web, SEO – Clipot"
  - description: "Servicios de agencia de marketing digital: paid media, diseño, desarrollo web, ecommerce, community y contenidos. Estrategias enfocadas en conversión."
- Servicio Detalle (dinámico):
  - title: "{service.title} | Agencia de marketing digital – Clipot"
  - description: "{service.description}"
- Portfolio:
  - title: "Portfolio de marketing digital | Casos de éxito – Clipot"
  - description: "Casos de éxito en marketing digital: leads calificados, ventas y crecimiento real en múltiples industrias."
- Kommo:
  - title: "Implementación Kommo CRM | Agencia de marketing digital – Clipot"
  - description: "Implementamos Kommo CRM para centralizar tus canales, automatizar y gestionar leads. Partners oficiales para integraciones y soporte."
- Blog:
  - title: "Blog de marketing digital | Leads, paid media y CRM – Clipot"
  - description: "Consejos prácticos de marketing digital: generación y gestión de leads, paid media, automatización y CRM."
- Blog Post (dinámico):
  - title: "{post.title} | Blog de marketing digital – Clipot"
  - description: "{post.excerpt}"
- Contacto:
  - title: "Contacto | Agencia de marketing digital – Clipot"
  - description: "¿Buscas una agencia de marketing digital? Contáctanos para diseñar una estrategia de generación y gestión de leads a medida."
- Privacidad:
  - title: "Política de privacidad | Clipot"
  - description: "Consulta nuestra política de privacidad y cómo protegemos tus datos en Clipot."
- Términos:
  - title: "Términos y condiciones | Clipot"
  - description: "Lee los términos y condiciones de uso del sitio de Clipot."

## Open Graph y Twitter
- og:title / og:description sincronizados con cada página.
- og:type website/article según la ruta.
- twitter:card summary_large_image cuando hay imagen; summary en caso contrario.
- canonical por ruta con URL completa.

## Encabezados y alt
- Inclusión de frase clave con sr-only en H1 de secciones principales para reforzar relevancia sin alterar diseño.
- Atributos alt descriptivos con palabras clave en imágenes clave (logo, proyectos, posts, servicios).

## Técnica
- viewport correcto en index.html.
- robots.txt con referencia a Sitemap.
- sitemap.xml generado con rutas principales.

## HTML listo para implementar (ejemplo genérico por página)
```html
<title>Agencia de marketing digital – Clipot | Generación de leads</title>
<meta name="description" content="Agencia de marketing digital especializada en generación y gestión de leads, paid media y desarrollo web. Estrategias a medida para crecer tus ventas.">
<meta name="keywords" content="agencia marketing digital,generación de leads,paid media,desarrollo web,gestión de leads">
<link rel="canonical" href="https://www.clipot.com/">
<meta property="og:title" content="Agencia de marketing digital – Clipot | Generación de leads">
<meta property="og:description" content="Agencia de marketing digital especializada en generación y gestión de leads, paid media y desarrollo web. Estrategias a medida para crecer tus ventas.">
<meta property="og:type" content="website">
<meta property="og:url" content="https://www.clipot.com/">
<meta property="og:site_name" content="Clipot">
<meta name="twitter:card" content="summary">
<meta name="twitter:title" content="Agencia de marketing digital – Clipot | Generación de leads">
<meta name="twitter:description" content="Agencia de marketing digital especializada en generación y gestión de leads, paid media y desarrollo web. Estrategias a medida para crecer tus ventas.">
```
