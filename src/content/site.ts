// =============================================================================
// CAPA DE CONTENIDO — única fuente de verdad del sitio
// Reemplazar todos los valores entre [CORCHETES] con datos reales.
// En una fase futura, este archivo puede ser reemplazado por un adaptador de CMS
// (Notion, Sanity) sin modificar ningún componente.
// =============================================================================

import type { SiteContent } from '@/types/content'

export const siteContent: SiteContent = {
  metadata: {
    title: '[NOMBRE_EMPRESA] | Terapia Ocupacional especializada en Parkinson',
    description:
      'Terapia Ocupacional profesional para personas con Parkinson y sus familias en [CIUDAD]. Recupera autonomía e independencia con [NOMBRE_TERAPEUTA].',
    url: 'https://[TU_DOMINIO]', // reemplazar con dominio definitivo antes de publicar
    locale: 'es-CL',
    businessName: '[NOMBRE_EMPRESA]',
    therapistName: 'Lic. [NOMBRE_TERAPEUTA]',
    phone: '+56 9 [NUMERO]', // Chile: móviles son +56 9 XXXX XXXX (sin código de área)
    email: '[EMAIL]@gmail.com',
    address: {
      street: '[CALLE] [NUMERO]',
      city: '[CIUDAD]',
      region: '[REGIÓN]', // ej: Región Metropolitana, Región de Valparaíso
      country: 'Chile',
      postalCode: '[CODIGO_POSTAL]',
    },
    coordinates: {
      lat: -33.4489, // placeholder: Plaza de Armas, Santiago de Chile
      lng: -70.6693, // reemplazar con coordenadas reales del consultorio
    },
    socialLinks: {
      whatsapp: '56972191941', // sin espacios ni guiones, con código de país (+56)
      instagram: 'https://instagram.com/[HANDLE_INSTAGRAM]',
      linkedin: 'https://linkedin.com/in/[PERFIL_LINKEDIN]',
    },
    openGraph: {
      image: '/og-image.png', // agregar imagen 1200×630 en /public
      imageAlt: '[NOMBRE_EMPRESA] — Terapia Ocupacional para Parkinson',
    },
  },

  nav: [
    { label: 'Inicio', href: '#inicio' },
    { label: 'Servicios', href: '#servicios' },
    { label: 'Sobre mí', href: '#sobre-mi' },
    { label: 'Parkinson', href: '#parkinson' },
    { label: 'Contacto', href: '#contacto' },
  ],

  hero: {
    headline: 'Recupera tu autonomía con apoyo profesional',
    subheadline:
      'Terapia Ocupacional especializada para personas con Parkinson y sus familias. Te acompañamos para mantener la independencia y mejorar la calidad de vida día a día.',
    cta: {
      primary: { label: 'Consultar turno', href: '#contacto' },
      secondary: { label: 'Conocer servicios', href: '#servicios' },
    },
    imageAlt: '[NOMBRE_TERAPEUTA] en sesión de Terapia Ocupacional',
  },

  servicios: {
    heading: 'Servicios',
    subheading:
      'Intervenciones personalizadas enfocadas en las actividades que más importan para cada persona.',
    items: [
      {
        icon: 'key',
        title: 'Evaluación domiciliaria',
        description:
          'Análisis del entorno del hogar para identificar barreras y proponer adaptaciones que favorezcan la seguridad y la autonomía.',
      },
      {
        icon: 'coffee',
        title: 'Actividades de la vida diaria',
        description:
          'Entrenamiento en vestido, higiene, alimentación y movilidad para maximizar la independencia funcional.',
      },
      {
        icon: 'pencil',
        title: 'Rehabilitación motora',
        description:
          'Ejercicios específicos para trabajar temblor, rigidez y coordinación, adaptados al estadio de la enfermedad.',
      },
      {
        icon: 'book',
        title: 'Estimulación cognitiva',
        description:
          'Actividades diseñadas para mantener y mejorar memoria, atención y funciones ejecutivas.',
      },
      {
        icon: 'users',
        title: 'Educación a cuidadores',
        description:
          'Orientación y entrenamiento para que el entorno familiar pueda acompañar de manera efectiva y sostenible.',
      },
      {
        icon: 'clipboard',
        title: 'Plan personalizado',
        description:
          'Evaluación integral y diseño de un plan con objetivos medibles, revisado periódicamente con el paciente y su familia.',
      },
    ],
  },

  sobreMi: {
    heading: 'Sobre mí',
    bio: [
      'Soy [NOMBRE_TERAPEUTA], Licenciada en Terapia Ocupacional egresada de [UNIVERSIDAD]. Mi pasión es acompañar a personas con enfermedades neurodegenerativas a seguir haciendo lo que les importa.',
      'Trabajo con un enfoque centrado en la persona: los objetivos del tratamiento los define el paciente, no solo la enfermedad. Cada sesión está diseñada para ser funcional, significativa y adaptada al momento de vida de quien me consulta.',
      'Con [N] años de experiencia en neurología y especialmente en Parkinson, combino las últimas evidencias clínicas con una mirada humana y cercana.',
    ],
    credentials: [
      'Licenciatura en Terapia Ocupacional — [UNIVERSIDAD]',
      'Especialización en Neurología — [INSTITUCIÓN]',
      '[CURSO O CERTIFICACIÓN RELEVANTE]',
      'Miembro de [ASOCIACIÓN PROFESIONAL]',
    ],
    imageAlt: 'Foto de [NOMBRE_TERAPEUTA], Licenciada en Terapia Ocupacional',
  },

  parkinson: {
    heading: 'Terapia Ocupacional y Parkinson',
    intro:
      'La enfermedad de Parkinson afecta el movimiento, el equilibrio y —con el tiempo— muchas de las actividades cotidianas. La Terapia Ocupacional interviene específicamente en esas actividades, ayudando a la persona a mantener su rol en el hogar, la familia y la comunidad el mayor tiempo posible.',
    benefits: [
      {
        title: 'Mantener la independencia',
        description:
          'Estrategias y adaptaciones para que el paciente pueda seguir realizando sus actividades preferidas con el menor nivel de asistencia posible.',
      },
      {
        title: 'Prevenir caídas',
        description:
          'Evaluación de riesgos en el hogar y entrenamiento en técnicas de movimiento seguro para reducir el riesgo de caídas.',
      },
      {
        title: 'Adaptar el entorno',
        description:
          'Recomendación de ayudas técnicas y modificaciones del hogar (agarraderas, calzado, utensilios) que compensan las limitaciones motoras.',
      },
      {
        title: 'Acompañar a la familia',
        description:
          'Involucrar a cuidadores y familia en el proceso para que el apoyo sea sostenible, sin descuidar el bienestar de quienes cuidan.',
      },
    ],
    closing:
      '¿Tienes dudas sobre si la Terapia Ocupacional puede ayudar en tu caso particular?',
  },

  contacto: {
    heading: 'Contacto',
    subheading:
      'Estoy disponible para consultas, turnos y cualquier pregunta. No dudes en comunicarte.',
    schedule: 'Lunes a viernes de [HORARIO_INICIO] a [HORARIO_FIN] hs.',
  },
}
