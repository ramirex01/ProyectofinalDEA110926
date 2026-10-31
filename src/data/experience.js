export const relations = [
  {
    cause: "Desechos abandonados",
    effect: "Acumulación en la costa",
    detail:
      "AES identifica la contaminación provocada por visitantes entre las amenazas del área. El MARN documentó botellas, bolsas y latas en una jornada de 2021. No se conoce la procedencia de cada objeto.",
    refs: ["F2", "F3"],
    scope: "Evidencia local documentada",
  },
  {
    cause: "Artes de pesca perdidas",
    effect: "Enredos de fauna marina",
    detail:
      "En 2021 el MARN retiró redes del fondo marino e informó del rescate de un pez globo atrapado en restos de red. La recuperación subacuática requiere equipos capacitados.",
    refs: ["F2"],
    scope: "Evidencia local documentada",
  },
  {
    cause: "Gestión inadecuada",
    effect: "Riesgos para ecosistemas",
    detail:
      "El PNUMA describe el aporte de residuos terrestres mal gestionados a la basura marina. No contamos con una medición de esta vía para Los Cóbanos ni de pérdida coralina causada por residuos.",
    refs: ["F6", "F7"],
    scope: "Información general; no medición local",
  },
  {
    cause: "Viento y corrientes",
    effect: "Transporte de residuos",
    detail:
      "Los materiales pueden desplazarse tras su abandono. El MARN documentó que las artes de pesca perdidas pueden moverse con las corrientes; no se atribuye un origen exacto a cada residuo.",
    refs: ["F2"],
    scope: "Proceso descrito; origen no determinado",
  },
];

export const audiences = [
  {
    label: "Visitantes",
    actions: [
      "Llevar botella reutilizable y evitar desechables innecesarios.",
      "Guardar los residuos hasta encontrar un punto de recolección apropiado.",
      "No dejar materiales en la arena ni en el agua.",
    ],
  },
  {
    label: "Comercios",
    actions: [
      "Reducir empaques de un solo uso.",
      "Compartir mensajes claros con visitantes y clientes.",
      "Coordinar el manejo de desechos con servicios competentes.",
    ],
  },
  {
    label: "Comunidad e instituciones",
    actions: [
      "Participar en actividades autorizadas y seguras.",
      "Registrar los residuos encontrados con metodología transparente.",
      "Comunicar situaciones de riesgo a las autoridades correspondientes.",
    ],
  },
];

export const proposals = [
  {
    number: "01",
    title: "Educación ambiental",
    description:
      "Señalización, charlas breves y materiales gráficos sobre especies y residuos, coordinados con comercios, centros educativos y autoridades.",
    implementation:
      "Acordar mensajes con la administración del área y actores locales; ubicarlos en puntos de ingreso y compartirlos antes de las visitas. Comprobar su comprensión con preguntas breves.",
    viability:
      "Requiere autorización para instalar materiales, responsables de actualización y coordinación con quienes atienden a visitantes.",
    refs: ["F2", "F5", "F7"],
  },
  {
    number: "02",
    title: "Prevención y gestión adecuada",
    description:
      "Piloto de reducción y separación de residuos únicamente donde exista una ruta efectiva de recolección y un destino apropiado.",
    implementation:
      "Primero verificar con el servicio competente el retiro y destino de cada categoría. Después probar puntos de separación claramente rotulados y registrar su uso y la frecuencia de retiro.",
    viability:
      "No instalar recipientes de separación si no existe una ruta de recolección que mantenga separados los materiales.",
    refs: ["F7", "F8"],
  },
  {
    number: "03",
    title: "Limpiezas con clasificación y seguimiento",
    description:
      "Jornadas coordinadas para clasificar y registrar residuos por fecha, sector y categoría. Redes subacuáticas y objetos peligrosos requieren personal capacitado.",
    implementation:
      "Definir con las autoridades los sectores, permisos, responsables y medidas de seguridad. Registrar por separado lugar, fecha y tipo de residuo para comparar jornadas sin confundirlas con el total producido en la zona.",
    viability:
      "Asegurar el retiro y destino de lo recolectado. La extracción subacuática debe quedar exclusivamente a cargo de equipos autorizados y capacitados.",
    refs: ["F2", "F3", "F4"],
  },
];

export const plans = [
  {
    title: "Educación",
    goal: "Preparar una primera campaña coordinada con actores locales.",
    indicators:
      "Personas alcanzadas, comercios participantes y respuestas de aprendizaje antes/después.",
  },
  {
    title: "Gestión",
    goal: "Acordar un piloto de separación con una ruta de retiro comprobada.",
    indicators:
      "Puntos operativos, frecuencia de retiro y residuos por categoría.",
  },
  {
    title: "Registro",
    goal: "Documentar una jornada autorizada con metodología transparente.",
    indicators:
      "Cantidad por categoría y sector; participación comparable entre jornadas.",
  },
];

export const situations = [
  {
    stage: "Antes de salir",
    question: "Preparas una visita a la playa. ¿Qué llevas para beber?",
    options: [
      {
        label: "Una botella reutilizable",
        feedback:
          "Reducir desechables desde el inicio evita generar un envase que después habría que gestionar.",
      },
      {
        label: "Varias botellas desechables",
        feedback:
          "Si usas envases desechables, llévalos de regreso o deposítalos donde exista recolección adecuada. Reducirlos sigue siendo preferible.",
      },
    ],
    source: "F7",
  },
  {
    stage: "Durante la visita",
    question:
      "Terminas un refrigerio y no encuentras un recipiente. ¿Qué haces?",
    options: [
      {
        label: "Guardas tus residuos para llevarlos contigo",
        feedback:
          "Evitas que envases y empaques queden en la arena o se desplacen hacia el agua.",
      },
      {
        label: "Los dejas junto a una roca para recogerlos luego",
        feedback:
          "Dejarlos en la costa aumenta el riesgo de abandono o transporte por viento y agua. Es mejor conservarlos contigo.",
      },
    ],
    source: "F3",
  },
  {
    stage: "En la costa",
    question: "Observas una red en el agua. ¿Cómo actúas?",
    options: [
      {
        label: "Avisas a responsables del área y mantienes distancia",
        feedback:
          "La extracción subacuática necesita coordinación y equipos capacitados. El MARN documentó trabajos de buzos en 2021.",
      },
      {
        label: "Entras al agua para retirarla por tu cuenta",
        feedback:
          "Podría ser peligroso. La recuperación de redes en el fondo marino corresponde a personal preparado y autorizado.",
      },
    ],
    source: "F2",
  },
];

export const commitments = [
  "Llevar una botella reutilizable.",
  "Guardar mis residuos hasta poder disponer de ellos correctamente.",
  "Compartir con otra persona una fuente verificada sobre Los Cóbanos.",
];
