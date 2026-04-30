export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  readTime: string;
  image: string;
  date: string;
  author: string;
  content: string[];
}

export const blogPosts: BlogPost[] = [
  {
    slug: "errores-leads",
    title: "5 errores que están matando tus leads (y cómo solucionarlos)",
    excerpt: "El 78% de los leads se pierden por errores evitables. Descubre cuáles son y cómo tu competencia ya los está solucionando.",
    category: "Gestión de Leads",
    readTime: "5 min",
    date: "15 Enero, 2026",
    author: "Equipo Clipot",
    image: "https://images.unsplash.com/photo-1553877522-43269d4ea984?w=800&h=600&fit=crop",
    content: [
      "Si estás invirtiendo en publicidad digital y generando leads, pero no estás convirtiendo como esperabas, probablemente estés cometiendo uno (o varios) de estos errores. La buena noticia es que todos son solucionables.",
      
      "## Error #1: Responder tarde (o no responder)",
      "El 78% de los leads compran con el primer negocio que les responde. Sí, leíste bien: el PRIMERO. No el mejor, no el más barato. El primero. Si tardas más de 5 minutos en responder, estás regalando dinero a tu competencia.",
      "**Solución:** Implementa un sistema de respuesta automática inmediata (WhatsApp Business, chatbot, o un CRM como Kommo) que al menos confirme la recepción y establezca expectativas. Luego, asegúrate de tener a alguien disponible para dar seguimiento real en menos de 1 hora.",
      
      "## Error #2: No calificar antes de vender",
      "No todos los leads son iguales. Algunos están listos para comprar hoy, otros solo están explorando, y algunos nunca serán clientes. Tratar a todos igual es ineficiente y frustrante.",
      "**Solución:** Implementa un sistema de calificación simple. Puede ser tan básico como preguntar: ¿Cuándo necesitas esto? ¿Ya tienes presupuesto asignado? ¿Eres quien toma la decisión? Con estas 3 preguntas filtras el 80% de los leads que no van a comprar.",
      
      "## Error #3: No tener un seguimiento estructurado",
      "El 80% de las ventas requieren al menos 5 seguimientos. La mayoría de los vendedores se rinden después de 2. ¿Cuántas ventas estás dejando en la mesa?",
      "**Solución:** Crea una secuencia de seguimiento. Puede ser: Día 1: Primer contacto. Día 3: Seguimiento si no hay respuesta. Día 7: Valor adicional (caso de éxito, artículo relevante). Día 14: Última oportunidad. Automatiza lo que puedas.",
      
      "## Error #4: Hablar de ti en lugar de su problema",
      "A nadie le importa cuántos años llevas en el mercado o cuántos premios has ganado. Les importa si puedes resolver SU problema específico.",
      "**Solución:** Cambia tu comunicación. En lugar de 'Somos líderes con 10 años de experiencia', prueba con 'Si estás perdiendo leads porque no puedes responder a tiempo, tenemos la solución'. Habla de su dolor, no de tu ego.",
      
      "## Error #5: No medir nada",
      "Si no sabes cuántos leads recibes, de dónde vienen, cuántos contactas y cuántos cierras, estás navegando a ciegas. No puedes mejorar lo que no mides.",
      "**Solución:** Implementa un CRM y úsalo religiosamente. Mide: Leads por fuente, tiempo de respuesta promedio, tasa de contacto, tasa de conversión por etapa. Con estos datos, sabrás exactamente dónde está el problema.",
      
      "## Conclusión",
      "La generación de leads es solo la mitad de la batalla. La gestión efectiva de esos leads es lo que realmente convierte inversión en ventas. Si estás cometiendo estos errores, no te preocupes: ahora sabes cómo solucionarlos.",
      "¿Necesitas ayuda implementando estas soluciones? En Clipot nos especializamos en esto. Agenda una llamada y te mostramos cómo podemos ayudarte."
    ]
  },
  {
    slug: "facebook-ads-2026",
    title: "Facebook Ads en 2026: Lo que realmente funciona",
    excerpt: "Olvídate de los tips de 2020. Esto es lo que está generando resultados hoy en campañas de alto rendimiento.",
    category: "Paid Media",
    readTime: "8 min",
    date: "10 Enero, 2026",
    author: "Equipo Clipot",
    image: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=800&h=600&fit=crop",
    content: [
      "El algoritmo de Meta ha cambiado drásticamente en los últimos años. Las tácticas que funcionaban en 2020 hoy te harán perder dinero. Aquí está lo que realmente está generando resultados en 2026.",
      
      "## La era de Advantage+ y la IA",
      "Meta ha apostado fuerte por la automatización. Advantage+ Shopping Campaigns, Advantage+ Audiences, Advantage+ Creative... El patrón es claro: la IA está tomando más decisiones.",
      "**Lo que funciona:** Darle a la IA suficiente data y creativos variados para que optimice. Campañas con 5+ creativos diferentes superan consistentemente a las de 1-2 creativos. El algoritmo necesita opciones.",
      
      "## Creativos: UGC domina todo",
      "Los anuncios producidos profesionalmente siguen funcionando, pero el contenido tipo UGC (User Generated Content) está superando todo en términos de CTR y conversiones.",
      "**Por qué funciona:** La gente está cansada de los anuncios. Contenido que parece orgánico, testimonios reales, videos grabados con celular... esto no parece publicidad y por eso convierte mejor.",
      "**Tip práctico:** Mezcla formatos. Ten creativos UGC para captar atención y creativos más producidos para remarketing cuando ya te conocen.",
      
      "## Estructura de campañas simplificada",
      "Olvídate de tener 20 ad sets diferentes. La tendencia es consolidación: menos campañas, menos ad sets, más creativos por ad set.",
      "**Estructura recomendada:** Una campaña de prospección con 1-2 ad sets amplios (dejar que el algoritmo encuentre a tu audiencia) y una campaña de remarketing. Eso es todo.",
      
      "## Conversiones API: Ya no es opcional",
      "Con las restricciones de privacidad (iOS 14.5+, cookies muriendo), el Pixel ya no es suficiente. La Conversions API es esencial para tracking preciso.",
      "**Implementación:** Si usas Shopify o WooCommerce hay plugins que lo hacen fácil. Para sitios custom, necesitas desarrollo. El esfuerzo vale la pena: reportes más precisos = optimización más efectiva.",
      
      "## Audiencias: Broad es el nuevo targeting",
      "En 2020 creábamos audiencias súper específicas. En 2026, las audiencias amplias están superando a las segmentadas. El algoritmo es mejor encontrando a tu cliente ideal que tú.",
      "**Excepción:** Remarketing sigue siendo específico. Visitantes de tu sitio, compradores anteriores, etc. Pero para prospección, prueba broad.",
      
      "## Presupuesto y optimización",
      "La regla del presupuesto mínimo sigue vigente: necesitas al menos 50 conversiones por semana por ad set para que el algoritmo optimice bien.",
      "**Si tu CPL es alto:** Considera optimizar para eventos más arriba en el funnel (leads en lugar de ventas) hasta tener volumen suficiente.",
      
      "## Copy: Menos es más",
      "Los textos largos que funcionaban antes ahora compiten con Reels y contenido efímero. La atención está más fragmentada que nunca.",
      "**Estructura que funciona:** Hook potente en las primeras líneas, beneficio claro, CTA directo. Si necesitas texto largo, úsalo en el formato carrusel donde cada slide tiene espacio.",
      
      "## Conclusión",
      "Facebook Ads sigue siendo una máquina de generar leads si sabes usarla. La clave en 2026 es: confiar más en el algoritmo, invertir en creativos variados (especialmente UGC), simplificar la estructura y medir todo con Conversions API.",
      "¿Quieres que auditemos tus campañas actuales? Agenda una llamada con nuestro equipo."
    ]
  },
  {
    slug: "costo-por-lead",
    title: "¿Cuánto debería costar un lead? Guía por industria",
    excerpt: "Benchmarks actualizados por sector para que sepas si tu CPL está dentro del rango o te están robando.",
    category: "Estrategia",
    readTime: "6 min",
    date: "5 Enero, 2026",
    author: "Equipo Clipot",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop",
    content: [
      "Una de las preguntas más frecuentes que recibimos es: '¿Cuánto debería costar un lead?' La respuesta corta es: depende. Pero aquí te damos benchmarks reales por industria para que tengas referencia.",
      
      "## Antes de ver los números: contexto importante",
      "El CPL (Costo Por Lead) es solo una métrica. Lo que realmente importa es el CAC (Costo de Adquisición de Cliente) y el ROI. Un lead de $500 que cierra el 50% de las veces a ticket de $10,000 es mejor negocio que un lead de $50 que cierra 2% a ticket de $1,000.",
      "Dicho esto, aquí están los benchmarks actualizados para México y LATAM en 2026:",
      
      "## Inmobiliario",
      "**CPL promedio:** $150 - $500 MXN\n**CPL competitivo:** $80 - $150 MXN",
      "El inmobiliario tiene CPL alto pero tickets enormes. Un desarrollo residencial puede pagar $300 por lead porque el valor de la venta justifica la inversión. La clave aquí es la calificación: no todos los leads están listos para comprar.",
      
      "## Servicios profesionales (abogados, contadores, consultores)",
      "**CPL promedio:** $80 - $200 MXN\n**CPL competitivo:** $40 - $80 MXN",
      "Mercado competitivo pero con buenos márgenes. El reto es diferenciarse en un mar de opciones similares. El copy y la propuesta de valor hacen toda la diferencia.",
      
      "## Educación (cursos, diplomados, universidades)",
      "**CPL promedio:** $50 - $150 MXN\n**CPL competitivo:** $25 - $50 MXN",
      "Uno de los mercados más saturados en digital. Los leads son relativamente baratos pero el reto es la conversión. Muchos 'curiosos' que nunca compran.",
      
      "## Ecommerce",
      "**CPL promedio:** N/A (se mide por compra)\n**CPA promedio:** $100 - $300 MXN\n**ROAS objetivo:** 3x - 5x",
      "En ecommerce no hablamos de leads sino de compras. El benchmark es el ROAS: por cada peso invertido, cuánto vendes. Un ROAS de 3x significa que por cada $100 en ads, vendes $300.",
      
      "## Salud y bienestar (clínicas, spas, gyms)",
      "**CPL promedio:** $60 - $150 MXN\n**CPL competitivo:** $30 - $60 MXN",
      "Mercado estacional con picos en enero y antes de verano. Los leads suelen ser de buena calidad porque hay intención clara. El reto es la asistencia a citas.",
      
      "## Automotriz",
      "**CPL promedio:** $200 - $500 MXN\n**CPL competitivo:** $100 - $200 MXN",
      "Ciclo de compra largo. Los leads necesitan mucho nurturing antes de estar listos. La ventaja es que el ticket promedio es alto.",
      
      "## SaaS y tecnología",
      "**CPL promedio:** $100 - $400 MXN\n**CPL competitivo:** $50 - $100 MXN",
      "Depende enormemente del ticket. Un SaaS de $10 USD/mes tiene que tener CPL bajísimo. Uno de $500 USD/mes puede permitirse más. El LTV es clave en este cálculo.",
      
      "## Cómo saber si tu CPL es bueno",
      "Más allá de los benchmarks, hay una fórmula simple:",
      "**CPL máximo = (Ticket promedio × Tasa de cierre × Margen) - Costos fijos**",
      "Ejemplo: Vendes un servicio de $10,000 MXN con 20% de cierre y 50% de margen. Tu CPL máximo debería ser: ($10,000 × 0.20 × 0.50) = $1,000 MXN. Cualquier cosa por debajo de eso es rentable.",
      
      "## Conclusión",
      "Los benchmarks son útiles como referencia, pero lo que importa es TU economía unitaria. Un CPL 'caro' puede ser un gran negocio si tu cierre es alto y tu ticket lo justifica.",
      "¿Quieres que analicemos tu CPL actual y busquemos oportunidades de mejora? Escríbenos."
    ]
  },
  {
    slug: "automatizacion-whatsapp",
    title: "Automatización de WhatsApp: La guía definitiva",
    excerpt: "Cómo configurar flujos automáticos en WhatsApp Business que responden, califican y agendan citas.",
    category: "Automatización",
    readTime: "10 min",
    date: "28 Diciembre, 2025",
    author: "Equipo Clipot",
    image: "https://images.unsplash.com/photo-1611746872915-64382b5c76da?w=800&h=600&fit=crop",
    content: [
      "WhatsApp es el canal de comunicación #1 en LATAM. Si no estás automatizando tus respuestas, estás perdiendo leads. Esta guía te enseña cómo configurar flujos que trabajan de 9 a 5.",
      
      "## Por qué automatizar WhatsApp",
      "Los datos son claros: el 90% de los consumidores esperan respuesta inmediata. Pero no puedes estar disponible 24/7. La automatización resuelve esto: responde instantáneamente, califica al lead y prepara el terreno para cuando tu equipo de ventas tome el control.",
      
      "## Herramientas que necesitas",
      "**Opción básica:** WhatsApp Business App (gratis) tiene respuestas rápidas y mensajes de ausencia, pero es muy limitado.",
      "**Opción intermedia:** WhatsApp Business API conectado a herramientas como ManyChat o Respond.io. Más funciones, precio accesible.",
      "**Opción avanzada:** CRM con WhatsApp integrado como Kommo. Automatización completa + gestión de leads en un solo lugar.",
      
      "## Flujo de automatización básico",
      "Aquí está un flujo que funciona para la mayoría de los negocios:",
      "**1. Mensaje de bienvenida (inmediato):** '¡Hola! Gracias por contactar a [Empresa]. ¿En qué podemos ayudarte?' + opciones de botones",
      "**2. Calificación (automática):** Según la opción que elijan, haces preguntas de calificación: ¿Qué servicio te interesa? ¿Para cuándo lo necesitas?",
      "**3. Captura de datos:** Pide nombre, email y teléfono si no los tienes.",
      "**4. Confirmación + expectativas:** 'Perfecto [Nombre], un asesor te contactará en menos de 1 hora. ¿Hay algo más que debamos saber?'",
      "**5. Notificación al equipo:** El lead llega al CRM con toda la info para que el vendedor haga seguimiento informado.",
      
      "## Flujos avanzados que puedes implementar",
      "**Agendamiento automático:** Integra con Calendly o Cal.com para que el lead pueda agendar directamente sin intervención humana.",
      "**Seguimiento automático:** Si el lead no responde en 24h, envía un mensaje de seguimiento. Si no responde en 72h, otro. Automatiza la persistencia.",
      "**Nurturing:** Envía contenido de valor automáticamente: casos de éxito, artículos, videos. Mantén la relación caliente.",
      "**Recordatorios:** Para negocios con citas, envía recordatorios automáticos 24h y 1h antes. Reduce no-shows dramáticamente.",
      
      "## Errores comunes a evitar",
      "**Parecer robot:** Tus mensajes automáticos deben sonar humanos. Usa emojis, lenguaje casual, nombre del lead.",
      "**Automatizar todo:** Hay momentos que requieren toque humano. Objeciones, quejas, decisiones de compra. Sabe cuándo escalar.",
      "**No segmentar:** No todos los leads son iguales. Ten flujos diferentes según la fuente, el servicio de interés, o la etapa.",
      "**Ignorar métricas:** Mide tasas de respuesta, tiempos, conversiones. Optimiza basado en datos.",
      
      "## Implementación paso a paso",
      "**Semana 1:** Elige tu herramienta y configúrala. Conecta con WhatsApp Business API.",
      "**Semana 2:** Diseña tu flujo principal. Escribe los mensajes. Prueba internamente.",
      "**Semana 3:** Lanza con un % pequeño de tráfico. Mide y ajusta.",
      "**Semana 4:** Escala al 100% y comienza a construir flujos adicionales.",
      
      "## Conclusión",
      "La automatización de WhatsApp no es el futuro, es el presente. Tus competidores ya lo están haciendo. La pregunta es: ¿cuántos leads vas a seguir perdiendo antes de implementarlo?",
      "¿Necesitas ayuda configurando tu automatización? En Clipot lo hacemos todos los días. Agenda una demo."
    ]
  },
  {
    slug: "ugc-anuncios",
    title: "UGC: Por qué los anuncios con creadores convierten 3x más",
    excerpt: "El contenido generado por usuarios no es una moda. Es la forma más efectiva de generar confianza y ventas.",
    category: "Content",
    readTime: "4 min",
    date: "20 Diciembre, 2025",
    author: "Equipo Clipot",
    image: "https://images.unsplash.com/photo-1533750349088-cd871a92f312?w=800&h=600&fit=crop",
    content: [
      "Los anuncios tradicionales están muriendo. La gente está cansada de ver publicidad pulida y perfecta. Lo que funciona hoy es contenido que parece real, porque ES real. Bienvenido al mundo del UGC.",
      
      "## ¿Qué es UGC exactamente?",
      "UGC (User Generated Content) es contenido creado por usuarios reales, no por la marca. En el contexto de publicidad, son creadores que reciben tu producto, lo prueban y crean contenido auténtico sobre su experiencia.",
      "No confundir con influencers: el UGC no depende de la audiencia del creador. Lo que importa es el contenido, no quién lo publica. Tú usas ese contenido en TUS anuncios.",
      
      "## Por qué funciona tan bien",
      "**1. Confianza:** El 92% de los consumidores confía más en recomendaciones de personas reales que en publicidad de marca. UGC es exactamente eso: una persona real hablando de su experiencia.",
      "**2. Autenticidad:** Los videos grabados con celular, en ambientes reales, sin producción exagerada, se sienten genuinos. No parecen anuncios, y por eso la gente no los ignora.",
      "**3. Relatabilidad:** Ver a alguien 'como yo' usando un producto es más poderoso que ver a un modelo profesional. La gente se identifica.",
      
      "## Los números no mienten",
      "Datos de nuestras campañas en Clipot:",
      "- CTR promedio de UGC vs contenido de marca: **2.5x mayor**",
      "- Costo por conversión: **40% menor**",
      "- Tiempo de visualización en video: **3x más**",
      "El algoritmo también lo premia: el contenido que parece orgánico recibe mejor distribución.",
      
      "## Tipos de UGC que funcionan",
      "**Unboxing:** El clásico. Alguien abriendo tu producto por primera vez. Funciona especialmente bien en ecommerce.",
      "**Testimonio directo:** 'Llevo 2 semanas usando X y esto es lo que pienso...' Simple, directo, efectivo.",
      "**Tutorial/How-to:** Alguien mostrando cómo usa tu producto en su vida real. Educa y vende simultáneamente.",
      "**Antes/Después:** Muy poderoso para productos de transformación (fitness, skincare, etc.)",
      "**Day in the life:** El producto integrado naturalmente en la rutina diaria del creador.",
      
      "## Cómo empezar con UGC",
      "**Opción 1: DIY** - Contacta a micro-creadores directamente por DM. Envía producto gratis a cambio de contenido. Pros: barato. Contras: consume tiempo, calidad inconsistente.",
      "**Opción 2: Plataformas** - Usa plataformas como Billo, Insense o JoinBrands. Pros: proceso estructurado. Contras: puede ser caro.",
      "**Opción 3: Agencia** - Trabaja con una agencia que maneje todo el proceso. Pros: calidad garantizada, cero trabajo para ti. Contras: inversión mayor.",
      
      "## Errores a evitar",
      "**Sobre-producir:** Si el UGC parece muy producido, pierde la magia. Deja que sea imperfecto.",
      "**Guiones rígidos:** Da lineamientos, no guiones palabra por palabra. Deja que el creador hable natural.",
      "**Ignorar derechos:** Asegúrate de tener derechos de uso para publicidad. No querrás problemas legales.",
      
      "## Conclusión",
      "UGC no es una tendencia pasajera. Es la evolución natural de la publicidad en una era donde la autenticidad es la moneda más valiosa. Si no lo estás usando, estás dejando conversiones en la mesa.",
      "¿Quieres implementar UGC en tus campañas? Tenemos una red de +200 creadores listos para crear contenido para tu marca."
    ]
  },
  {
    slug: "elegir-crm",
    title: "Cómo elegir el CRM correcto para tu negocio",
    excerpt: "Kommo, HubSpot, Salesforce... Cuál es mejor depende de tu situación. Te ayudamos a decidir.",
    category: "Herramientas",
    readTime: "7 min",
    date: "15 Diciembre, 2025",
    author: "Equipo Clipot",
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&h=600&fit=crop",
    content: [
      "Elegir un CRM es como elegir un auto: el mejor depende de para qué lo necesitas. Un Ferrari no sirve para mudanzas, y un camión no sirve para carreras. Aquí está cómo elegir el CRM correcto para TU situación.",
      
      "## Primero: ¿Realmente necesitas un CRM?",
      "Si tienes menos de 10 leads al mes y los manejas tú solo, probablemente una hoja de Excel o Notion es suficiente. Un CRM tiene sentido cuando:",
      "- Tienes un equipo de ventas (aunque sea de 2 personas)",
      "- Manejas más de 30 leads al mes",
      "- Pierdes seguimiento de conversaciones",
      "- Necesitas reportes de rendimiento",
      "Si cumples 2+ de estos criterios, sigue leyendo.",
      
      "## Las opciones principales",
      
      "## Kommo (antes amoCRM)",
      "**Ideal para:** Negocios que venden por WhatsApp/mensajería",
      "**Precio:** Desde $15 USD/usuario/mes",
      "**Pros:** Integración nativa con WhatsApp, Instagram, Messenger. Pipeline visual intuitivo. Automatizaciones poderosas. Buena relación precio-valor.",
      "**Contras:** Menos robusto para empresas muy grandes. Curva de aprendizaje para automatizaciones avanzadas.",
      "**Nuestra opinión:** Es el CRM que usamos y recomendamos para la mayoría de negocios en LATAM. La integración con WhatsApp es imbatible.",
      
      "## HubSpot",
      "**Ideal para:** Empresas que quieren un ecosistema completo (marketing + ventas + servicio)",
      "**Precio:** Gratis básico, desde $50 USD/mes planes pagos",
      "**Pros:** Plan gratuito muy completo. Interfaz amigable. Excelente para inbound marketing. Muchas integraciones.",
      "**Contras:** Se vuelve caro rápido cuando necesitas funciones avanzadas. Integración con WhatsApp limitada en planes básicos.",
      "**Nuestra opinión:** Excelente opción si tu estrategia es principalmente inbound y no dependes tanto de WhatsApp.",
      
      "## Salesforce",
      "**Ideal para:** Empresas grandes con procesos complejos",
      "**Precio:** Desde $25 USD/usuario/mes (pero realísticamente $150+)",
      "**Pros:** El más personalizable. Escala a cualquier tamaño. Ecosistema enorme de apps.",
      "**Contras:** Complejo de configurar y mantener. Caro. Overkill para PyMEs.",
      "**Nuestra opinión:** Solo recomendable si tienes un equipo de +20 vendedores y procesos muy específicos. Para el resto, hay mejores opciones.",
      
      "## Pipedrive",
      "**Ideal para:** Equipos de ventas que quieren simplicidad",
      "**Precio:** Desde $15 USD/usuario/mes",
      "**Pros:** Muy fácil de usar. Pipeline visual excelente. Bueno para ventas B2B tradicionales.",
      "**Contras:** Integraciones con mensajería limitadas. Menos automatización que competidores.",
      "**Nuestra opinión:** Buena opción para equipos de ventas B2B que trabajan principalmente por email y teléfono.",
      
      "## Cómo decidir",
      "Responde estas preguntas:",
      "**1. ¿Cuál es tu canal principal de ventas?**",
      "- WhatsApp/Messenger → Kommo",
      "- Email/Inbound → HubSpot",
      "- Teléfono/Email B2B → Pipedrive",
      "- Todo + empresa grande → Salesforce",
      
      "**2. ¿Cuántos usuarios lo van a usar?**",
      "- 1-5: Cualquiera funciona, elige por canal",
      "- 5-20: Kommo o HubSpot",
      "- 20+: Evalúa Salesforce",
      
      "**3. ¿Cuál es tu presupuesto mensual?**",
      "- Menos de $100 USD: HubSpot Free o Kommo básico",
      "- $100-500 USD: Cualquiera según necesidades",
      "- $500+ USD: Ya puedes considerar Salesforce",
      
      "## La implementación importa más que la herramienta",
      "He visto empresas fracasar con Salesforce y triunfar con una hoja de Excel. La herramienta es solo eso: una herramienta. Lo que importa es:",
      "- Que todo el equipo la use consistentemente",
      "- Que los procesos estén claros",
      "- Que midas y optimices constantemente",
      
      "## Conclusión",
      "No hay CRM perfecto, hay CRM correcto para tu situación. Evalúa tus necesidades reales, prueba las opciones (todas tienen trial) y elige. Lo peor que puedes hacer es no elegir nada.",
      "¿Necesitas ayuda implementando tu CRM? Como partners de Kommo, ofrecemos implementación guiada y capacitación. Contáctanos."
    ]
  }
];

export const getPostBySlug = (slug: string) => blogPosts.find(p => p.slug === slug);
