export const companyData = {
  name: "Martín Jardón",
  subtitle: "Organización de Relevamientos",
  tagline: "La Información por Especialistas",
  association: {
    name: "Auditoría Profesional",
    fullName: "Rigurosos estándares normativos de alta calidad y rigor metodológico",
    badge: "Metodología Verificada",
    hasDataFiscal: true
  },
  contact: {
    phoneFormatted: "(+54 911) 5840-8320",
    phoneRaw: "+5491158408320",
    whatsappNumber: "5491158408320",
    whatsappDisplay: "+54 9 11 5840-8320",
    whatsappLink: "https://wa.me/5491158408320?text=Hola%20Mart%C3%ADn,%20te%20contacto%20desde%20la%20web%20para%20solicitar%20informaci%C3%B3n%20sobre%20relevamientos.",
    email: "info@martinjardon.com.ar",
    skype: "martin.jardon1",
    linkedin: "martin-jardon",
    linkedinUrl: "https://www.linkedin.com/in/martin-jardon/",
    website: "www.martinjardon.com.ar"
  },
  about: {
    heroLead: "Somos su 'Socio Estratégico'",
    paragraphs: [
      "Somos un grupo de personas con experiencia sólida en relevamiento de datos, información y variables observables adquirida en consultoras de primera línea a través de más de 20 años, con amplios conocimientos en metodologías y técnicas de toma de datos y observación.",
      "Nuestros servicios aplican al exacto requerimiento del Cliente, adaptando o diseñando la metodología a aplicar en el Campo, según sea la necesidad.",
      "Trabajamos para hacer de la información una herramienta de utilización instantánea en la toma de decisiones. Por ello disponemos del conocimiento y la tecnología para colocar online y de forma inmediata los datos relevados.",
      "Tablas dinámicas y/o planilla Excel listos para trabajarlos a la preferencia del Cliente, con entrega directa y ágil."
    ],
    highlights: [
      {
        title: "Información en Tiempo Real",
        desc: "Datos disponibles DURANTE o DESPUÉS del proceso para un control instantáneo del canal."
      },
      {
        title: "Calidad y Supervisión Permanente",
        desc: "Supervisión directa y rigurosos estándares normativos de alta calidad en puntos críticos del proceso."
      },
      {
        title: "Logística a Medida y Eficiencia de Costos",
        desc: "Optimizamos sus costos al tercerizar la operación de campo con equipos propios y experimentados."
      }
    ],
    principles: {
      objetivo: "Brindar información actualizada, clara y precisa que complemente el análisis que define la toma de decisiones estratégicas en su Negocio.",
      vision: "Formar parte de las alternativas de análisis INDISPENSABLES en toda Empresa que trabaja por la excelencia.",
      mision: "Brindar una herramienta clara y precisa que acompañe todo proceso de toma de decisiones.",
      quote: "El crecimiento sustancial y el liderazgo del mercado presentan desafíos difíciles de afrontar, no sólo para alcanzarlos sino, sobre todo, para conservarlos. Al pensar y actuar con agilidad, abrazar vigorosamente las innovaciones internas y alinear la cultura empresaria, cualquier organización tiene las mayores oportunidades de liderar con éxito sustentable."
    }
  },
  services: [
    {
      id: "mystery-shopper",
      title: "Mystery Shopper",
      badge: "Auditoría de Calidad",
      shortDesc: "Cliente misterioso que simula la acción real de compra o consumo para evaluar a fondo la experiencia, protocolo de atención y cumplimiento normativo.",
      fullDesc: "Evaluamos sistemáticamente la experiencia del cliente en el punto de contacto. Diseñamos guías de observación rigurosas para auditar protocolos de bienvenida, conocimiento de producto, cross-selling, tiempos de espera, estándares de higiene y cierre de venta.",
      benefits: ["Detección de brechas en atención", "Comparativa contra competidores", "Medición del impacto de capacitaciones", "Informes cuantitativos y cualitativos detallados"],
      category: "Experiencia & Servicio"
    },
    {
      id: "precios-presencia",
      title: "Precios y Presencia de Productos",
      badge: "Inteligencia Competitiva",
      shortDesc: "Monitoreo exhaustivo de precios de lista, precios promocionales, ofertas y ausencias por quiebres de stock en góndola.",
      fullDesc: "Control permanente de la política comercial propia y de la competencia en el punto de venta. Alertamos quiebres de stock en tiempo récord para evitar ventas perdidas y medimos el posicionamiento real de precios en canal moderno y tradicional.",
      benefits: ["Alerta temprana de quiebres de stock", "Mapeo de dispersión de precios", "Monitoreo de promociones cruzadas", "Datos listos para análisis BI"],
      category: "Punto de Venta"
    },
    {
      id: "relevamientos-sistematicos",
      title: "Relevamientos Sistemáticos",
      badge: "Control Cíclico",
      shortDesc: "Monitoreo periódico y programado de variables clave con frecuencia regular: semanal, quincenal, mensual o bimestral.",
      fullDesc: "Seguimiento continuado de variables críticas para construir series históricas confiables y medir la efectividad de planes comerciales, campañas y políticas de canal a lo largo del tiempo.",
      benefits: ["Detección de tendencias estacionales", "Series temporales sólidas", "Seguimiento de KPIs de retail", "Tableros comparativos evolutivos"],
      category: "Operaciones"
    },
    {
      id: "observacion-simple",
      title: "Observación Simple",
      badge: "Diagnóstico de Campo",
      shortDesc: "Observación directa de conductas, dinámicas de tráfico, procesos y variables en punto de venta para detectar causas y consecuencias.",
      fullDesc: "Hay situaciones donde la clave está en observar qué hace realmente el shopper o el personal frente a una variable determinada. Diseñamos estudios de campo para responder preguntas de negocio específicas.",
      benefits: ["Comprensión del comportamiento del consumidor", "Detección de cuellos de botella", "Validación de hipótesis de venta"],
      category: "Investigación"
    },
    {
      id: "one-shot",
      title: "One Shot (Puntual)",
      badge: "Investigación Ad-Hoc",
      shortDesc: "Relevamiento por única vez para proyectos especiales, testeos urgentes de mercado o validación de lanzamientos específicos.",
      fullDesc: "Operativos de despliegue rápido diseñados para responder con velocidad a una necesidad puntual: auditoría de un nuevo lanzamiento, control de contingencias o relevamiento preliminar de una plaza.",
      benefits: ["Respuesta inmediata y ágil", "Sin compromisos a largo plazo", "Cobertura geográfica a demanda", "Resultados consolidados en días"],
      category: "Operaciones"
    },
    {
      id: "promociones-pop",
      title: "Promociones & Material POP",
      badge: "Trade Marketing",
      shortDesc: "Verificación de presencia de promociones vigentes, degustaciones, material POP exhibido y desempeño de promotores.",
      fullDesc: "Aseguramos que la inversión en Trade Marketing llegue efectivamente al comprador. Verificamos que el material pop esté colocado en el lugar correcto, en buen estado y que los promotores cumplan su rol y horario.",
      benefits: ["ROI garantizado de acciones de Trade", "Control de implementación de campañas", "Reportes fotográficos geolocalizados"],
      category: "Trade Marketing"
    },
    {
      id: "facing-gondola",
      title: "Facing y Frentes de Góndola",
      badge: "Share of Shelf",
      shortDesc: "Auditoría de frentes de góndola, porcentaje de ocupación (share of shelf) y posición en punteras.",
      fullDesc: "Medición exacta del espacio en góndola ocupado por su marca versus competidores. Verificamos planogramas acordados con cadenas y distribuidores para garantizar la visibilidad negociada.",
      benefits: ["Auditoría de planogramas", "Cálculo real de Share of Shelf", "Control de acuerdos con retailers"],
      category: "Punto de Venta"
    },
    {
      id: "rotacion-vencimientos",
      title: "Rotación y Vencimientos",
      badge: "Gestión de Salón de Ventas",
      shortDesc: "Control minucioso de reposición, estado de productos en exhibición y fechas de caducidad exclusivamente en salón de ventas.",
      fullDesc: "Inspección de lotes, fechas de vencimiento y rotación en salón de ventas y góndola. No realizamos tareas de depósito: nos enfocamos 100% en el frente de venta para evitar mermas, vencimientos y proteger la reputación de marca.",
      benefits: ["Foco 100% en salón de ventas y góndola", "Prevención de mermas y productos vencidos", "Cuidado de la calidad y rotación visible", "Auditoría del trabajo de repositores"],
      category: "Punto de Venta"
    },
    {
      id: "exhibiciones-stands",
      title: "Exhibiciones & Stands",
      badge: "Presencia de Marca",
      shortDesc: "Control de presencia, armado, iluminación, limpieza y estado general de stands, racks, islas y punteras.",
      fullDesc: "Auditoría visual y técnica de estructuras especiales de exhibición. Verificamos limpieza, funcionamiento eléctrico/iluminación, correcta cartelería y ausencia de productos de la competencia no autorizados.",
      benefits: ["Auditoría fotográfica de alta resolución", "Cuidado de la imagen corporativa", "Mantenimiento preventivo de activaciones"],
      category: "Trade Marketing"
    },
    {
      id: "procesos-atencion",
      title: "Procesos y Modelos de Atención",
      badge: "Protocolos",
      shortDesc: "Auditoría de cumplimiento de estándares de calidad, protocolos de servicio y excelencia en modelos de venta.",
      fullDesc: "Evaluamos el apego del personal comercial a los estándares operativos y de atención definidos por la compañía, facilitando programas de mejora continua y estandarización de sucursales.",
      benefits: ["Homogeneidad entre sucursales", "Medición de estándares de excelencia", "Base cuantitativa para incentivos comerciales"],
      category: "Experiencia & Servicio"
    },
    {
      id: "distribucion-folders",
      title: "Distribución de Folders y Publicaciones",
      badge: "Monitoreo Territorial",
      shortDesc: "Control de distribución domiciliaria de catálogos y folletos, y monitoreo en diarios, revistas y medios impresos.",
      fullDesc: "Auditoría en terreno para certificar que la folletería y folders promocionales hayan sido distribuidos en los radios geográficos contratados y monitoreo de publicaciones de retail en medios impresos.",
      benefits: ["Certificación de distribución real", "Verificación puerta a puerta", "Monitoreo de ofertas en prensa gráfica"],
      category: "Trade Marketing"
    }
  ],
  coverage: {
    argentina: [
      "Buenos Aires & GBA",
      "Mar del Plata",
      "Córdoba",
      "Santa Fe & Rosario",
      "Mendoza",
      "Entre Ríos",
      "Corrientes",
      "Resistencia (Chaco)",
      "Misiones",
      "Salta",
      "Jujuy",
      "Tucumán & Santiago del Estero",
      "Catamarca",
      "La Rioja",
      "San Juan",
      "San Luis",
      "Neuquén",
      "Trelew (Chubut)",
      "Comodoro Rivadavia",
      "Río Gallegos (Santa Cruz)"
    ],
    latam: [
      { 
        country: "Perú", 
        code: "PE", 
        activeService: "Control de Planogramas y lectura EAN",
        reportInfo: "Reportes Excel: Categoría, Ítem, Posición en Góndola, Cantidad de Frentes, Precios y Oferta."
      },
      { country: "Colombia", code: "CO" },
      { country: "Costa Rica", code: "CR" },
      { country: "Ecuador", code: "EC" },
      { country: "El Salvador", code: "SV" },
      { country: "Guatemala", code: "GT" },
      { country: "Honduras", code: "HN" },
      { country: "Panamá", code: "PA" },
      { country: "Puerto Rico", code: "PR" },
      { country: "Rep. Dominicana", code: "DO" },
      { country: "Venezuela", code: "VE" }
    ],
    highlights: [
      { number: "+20", label: "Provincias y ciudades argentinas cubiertas" },
      { number: "11", label: "Países de Latinoamérica con operaciones" },
      { number: "100%", label: "Supervisión directa y geolocalizada" },
      { number: "+20", label: "Años de experiencia sólida en consultoría" }
    ]
  },
  clients: [
    {
      name: "GfK Retail and Technology",
      category: "Market Research Global",
      description: "Líder mundial en analítica y datos de retail y tecnología de consumo."
    },
    {
      name: "Provokers Research S.A.",
      category: "Consumer Insights",
      description: "Agencia de investigación de mercado y consultoría de marcas en Latam."
    },
    {
      name: "IFR Monitoring Argentina",
      category: "Retail Intelligence",
      description: "Especialistas en monitoreo de retail, promociones y folletería publicitaria."
    },
    {
      name: "Delta Research & Consulting",
      category: "Mercados a Profundidad",
      description: "Investigación cuantitativa y cualitativa de mercados de alta complejidad."
    },
    {
      name: "Olleros Barry & Asoc.",
      category: "Research & Consulting",
      description: "Consultoría estratégica e investigación de opinión y comportamiento."
    },
    {
      name: "Enfoque Retail",
      category: "Investigación & Desarrollo",
      description: "Expertos en retail marketing, auditoría de canal y Trade Marketing."
    }
  ]
};
