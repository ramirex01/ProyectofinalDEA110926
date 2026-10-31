export const events = [
  {
    year: "2021",
    date: "16 de febrero",
    place: "Zona marina y manglar, Los Cóbanos",
    title: "Más de 80 voluntarios",
    description:
      "En una jornada del MARN se recogieron botellas, latas, envoltorios y bolsas. Buzos retiraron redes abandonadas del fondo marino.",
    source: "F2",
    url: "https://www.ambiente.gob.sv/conmemoramos-el-dia-mundial-de-los-humedales-con-jornadas-de-limpieza-en-la-zona-marina-del-sitio-ramsar-los-cobanos/",
  },
  {
    year: "2025",
    date: "18 de junio",
    place: "Playa Los Lagartos, Complejo Los Cóbanos",
    title: "Más de 63 libras",
    description:
      "La jornada de AES El Salvador y FUNZEL recogió residuos como botellas, vidrio, cartón, envases y restos de mallas de pesca.",
    source: "F3",
    url: "https://www.aes-elsalvador.com/es/press-release/voluntarios-aes-realizan-jornada-de-reforestacion-y-limpieza-en-los-cobanos",
  },
  {
    year: "2026",
    date: "4 de marzo",
    place: "Orilla y zona subacuática, Los Cóbanos",
    title: "Cerca de una tonelada",
    description:
      "Una limpieza coordinada por FIAES retiró cerca de una tonelada de la orilla y, por separado, 25 libras de basura subacuática.",
    source: "F4",
    url: "https://www.laprensagrafica.com/elsalvador/realizan-limpieza-en-area-natural-protegida-los-cobanos-20260304-0085.html",
  },
];
export const sources = [
  {
    id: "F1",
    author: "Ministerio de Medio Ambiente y Recursos Naturales",
    date: "2021",
    title:
      "Plan de manejo del Área Natural Protegida y Sitio Ramsar Complejo Los Cóbanos, Sonsonate 2021–2025",
    url: "https://cidoc.ambiente.gob.sv/documento/plan-de-manejo-del-area-natural-protegida-y-sitio-ramsar-complejo-los-cobanos-sonsonate-2021-2025/",
  },
  {
    id: "F2",
    author: "Ministerio de Medio Ambiente y Recursos Naturales",
    date: "2021, 16 de febrero",
    title:
      "Conmemoramos el Día Mundial de los Humedales con jornadas de limpieza en la zona marina del sitio Ramsar Los Cóbanos",
    url: events[0].url,
  },
  {
    id: "F3",
    author: "AES El Salvador",
    date: "2025, 18 de junio",
    title:
      "Voluntarios AES realizan jornada de reforestación y limpieza en Los Cóbanos",
    url: events[1].url,
  },
  {
    id: "F4",
    author: "Román, M.",
    date: "2026, 4 de marzo",
    title: "Realizan limpieza en Área Natural Protegida Los Cóbanos",
    publisher: "La Prensa Gráfica",
    url: events[2].url,
  },
  {
    id: "F5",
    author: "Ministerio de Medio Ambiente y Recursos Naturales",
    date: "2026, 27 de enero",
    title:
      "Misión Océano cumple cuatro años con acciones permanentes para la protección de los ecosistemas marinos",
    url: "https://www.ambiente.gob.sv/mision-oceano-cumple-cuatro-anos-con-acciones-permanentes-para-la-proteccion-de-los-ecosistemas-marinos/",
  },
  {
    id: "F6",
    author: "Programa de las Naciones Unidas para el Medio Ambiente",
    date: "2021",
    title:
      "De la contaminación a la solución: Una evaluación global de la basura marina y la contaminación por plásticos",
    url: "https://www.unep.org/es/resources/de-la-contaminacion-la-solucion-una-evaluacion-global-de-la-basura-marina-y-la",
  },
  {
    id: "F7",
    author: "Programa de las Naciones Unidas para el Medio Ambiente",
    date: "2021, 21 de octubre",
    title:
      "Informe de la ONU sobre contaminación por plásticos advierte sobre falsas soluciones y confirma la necesidad de una acción mundial urgente",
    url: "https://www.unep.org/es/noticias-y-reportajes/comunicado-de-prensa/informe-de-la-onu-sobre-contaminacion-por-plasticos",
  },
  {
    id: "F8",
    author: "Programa de las Naciones Unidas para el Medio Ambiente",
    date: "2021, 30 de junio",
    title:
      "Abordar la contaminación por productos de plástico desechables utilizando un enfoque de ciclo de vida",
    url: "https://www.unep.org/es/resources/publicaciones/abordar-la-contaminacion-por-productos-de-plastico-desechables-utilizando",
  },
];
// Las letras distinguen obras del mismo autor publicadas en el mismo año.
export const apaYears = {
  F1: "2021a",
  F2: "2021b",
  F3: "2025",
  F4: "2026",
  F5: "2026",
  F6: "2021a",
  F7: "2021c",
  F8: "2021b",
};
export const quiz = [
  {
    question:
      "¿Qué se encontró en la limpieza documentada por el MARN en 2021?",
    options: [
      "Solo residuos orgánicos",
      "Redes abandonadas, botellas, bolsas y latas",
      "Únicamente microplásticos medidos",
    ],
    correct: 1,
    explanation:
      "La publicación documenta redes y varios residuos sólidos en esa jornada.",
    source: "F2",
  },
  {
    question:
      "¿Las 63 libras de 2025 representan todo el residuo producido ese año?",
    options: [
      "Sí, es el total anual",
      "No, corresponden a una jornada en playa Los Lagartos",
      "Es una cifra de basura subacuática",
    ],
    correct: 1,
    explanation: "Es el resultado de una actividad y un sitio específicos.",
    source: "F3",
  },
  {
    question: "¿Qué conviene hacer antes de reciclar?",
    options: [
      "Usar más productos desechables",
      "Reducir productos innecesarios y reutilizar",
      "Abandonar los residuos si no hay recipiente",
    ],
    correct: 1,
    explanation:
      "La prevención y la reutilización reducen la generación de residuos desde el inicio.",
    source: "F7",
  },
  {
    question: "¿Puede cualquier visitante retirar una red del fondo marino?",
    options: [
      "Sí, sin coordinación",
      "Solo si la red parece pequeña",
      "No; requiere personal capacitado y coordinación",
    ],
    correct: 2,
    explanation:
      "La recuperación subacuática debe dejarse a equipos preparados y autorizados.",
    source: "F2",
  },
];
