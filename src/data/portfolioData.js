export const studentInfo = {
  name: 'Mario Elmer Ramírez Grande',
  carnet: 'RG23003',
  university: 'Universidad de El Salvador',
  faculty: 'Facultad de Ciencias Naturales y Matemática',
  career: 'Licenciatura en Informática Educativa',
  subject: 'Práctica Docente',
  subjectCode: 'DDP1109',
  cycle: 'II-2026',
  practiceCenter: 'Centro Escolar República de Canadá',
  schedule: '11:00 a. m. a 4:00 p. m.',
  schoolTutor: 'Licda. Zeyda Priscila Aguilar',
  universityCoordinator: 'Ing. Misael Enrique Juárez Blanco',
  motto: '[Lema docente por incorporar]',
};

export const areas = [
  { id: 'inicio', label: 'Inicio y trayectoria', description: 'Identidad académica, presentación y objetivos.', icon: 'Sparkles', range: '01–03' },
  { id: 'contexto', label: 'Contexto educativo', description: 'Centro escolar, grupo y recursos disponibles.', icon: 'School', range: '04' },
  { id: 'diagnostico', label: 'Diagnóstico y planificación', description: 'Instrumentos, resultados, cronograma y planes.', icon: 'ChartNoAxesCombined', range: '05–07' },
  { id: 'practica', label: 'Mi práctica docente', description: 'Jornadas, diario y evidencias de campo.', icon: 'NotebookPen', range: '08–09' },
  { id: 'reflexion', label: 'Reflexión y mejora', description: 'Autoevaluación, propuesta y aprendizajes.', icon: 'Lightbulb', range: '10–11, 13' },
  { id: 'recursos', label: 'Recursos y anexos', description: 'Herramientas aplicadas y documentos de respaldo.', icon: 'FolderOpen', range: '12, 14' },
];

export const sections = [
  { id: 1, title: 'Portada', area: 'inicio', state: 'En proceso', detail: 'Identidad académica confirmada. Falta fotografía profesional y lema personal.' },
  { id: 2, title: 'Presentación personal y profesional', area: 'inicio', state: 'Por revisar', detail: 'Biografía, intereses y expectativas deben redactarse con la voz de Mario.' },
  { id: 3, title: 'Objetivos de la práctica docente', area: 'inicio', state: 'En proceso', detail: 'Hay una propuesta inicial; falta la formulación personal definitiva.' },
  { id: 4, title: 'Contexto educativo', area: 'contexto', state: 'En proceso', detail: 'Centro, grupo y recursos respaldados por el diagnóstico grupal y las observaciones.' },
  { id: 5, title: 'Planeación y organización', area: 'diagnostico', state: 'En proceso', detail: 'Siete fechas confirmadas. Plan de acción de las jornadas restantes por incorporar.' },
  { id: 6, title: 'Diagnóstico educativo', area: 'diagnostico', state: 'En proceso', detail: 'Informe grupal e instrumentos disponibles; falta cerrar la interpretación personal.' },
  { id: 7, title: 'Planificaciones de clases', area: 'diagnostico', state: 'Pendiente', detail: '[Planes aprobados y clases ejecutadas por incorporar]' },
  { id: 8, title: 'Evidencias de la práctica docente', area: 'practica', state: 'En proceso', detail: 'Hay registros y fotografías recibidas; revisar permisos antes de publicarlas.' },
  { id: 9, title: 'Diario reflexivo por jornada', area: 'practica', state: 'En proceso', detail: 'Relatos individuales de las cinco primeras visitas; faltan jornadas posteriores.' },
  { id: 10, title: 'Evaluación y retroalimentación', area: 'reflexion', state: 'Pendiente', detail: '[Autoevaluación y comentarios recibidos por incorporar]' },
  { id: 11, title: 'Propuesta de mejora', area: 'reflexion', state: 'En proceso', detail: 'Idea vinculada al diagnóstico; debe acordarse con la tutora y documentar su aplicación.' },
  { id: 12, title: 'Recursos tecnológicos aplicados', area: 'recursos', state: 'En proceso', detail: 'Uso observado de pantalla, celulares y herramientas digitales; describir solo aplicaciones reales.' },
  { id: 13, title: 'Experiencias significativas y conclusiones', area: 'reflexion', state: 'En proceso', detail: 'Se han identificado experiencias; las conclusiones finales requieren cierre de la práctica.' },
  { id: 14, title: 'Anexos', area: 'recursos', state: 'En proceso', detail: 'Carta, guías, informe y registros disponibles; seleccionar versión pública sin datos personales.' },
];

export const visits = [
  { number: 1, date: '8 de agosto de 2026', title: 'Primera observación', state: 'Documentada', summary: 'Observación de una línea de tiempo sobre transformaciones políticas mundiales y los retos del siglo XXI.', role: 'Observé la dinámica de Estudios Sociales, las indicaciones de la docente y la organización del trabajo individual. No dirigí la clase.', reflection: 'Identifiqué la utilidad de ordenar acontecimientos y la necesidad de orientar la selección de información confiable.', evidence: 'Registro individual JORNADA_N1 y guía de observación J1.' },
  { number: 2, date: '22 de agosto de 2026', title: 'Orientación para investigar', state: 'Documentada', summary: 'Lectura y ejercicios del libro de Estudios Sociales proporcionado por el MINEDUCYT.', role: 'Orienté a algunos estudiantes sobre cómo buscar información para continuar sus ejercicios.', reflection: 'Aprendí a ofrecer apoyo breve sin resolver el trabajo en lugar del estudiante.', evidence: 'Registro individual JORNADA_N2 y guía de observación J2.' },
  { number: 3, date: '12 de septiembre de 2026', title: 'Colaboración institucional y en aula', state: 'Documentada', summary: 'Preparación de materiales para las fiestas patrias y acompañamiento de ejercicios proyectados en la tarde.', role: 'Participé en los preparativos institucionales desde la mañana y apoyé a estudiantes bajo la orientación de la docente.', reflection: 'Reconocí que la labor docente también incluye colaboración institucional y adaptación de recursos para el grupo.', evidence: 'Registro individual JORNADA_N3 y guía de observación J3.' },
  { number: 4, date: '26 de septiembre de 2026', title: 'Investigación guiada y uso crítico de IA', state: 'Documentada', summary: 'Acompañamiento individual para una investigación ambiental relacionada con el Lago de Coatepeque y Amanelli.', role: 'Orienté la formulación de preguntas, la verificación en fuentes en español y la organización de un documento de estudio. La exposición estaba prevista para una clase posterior.', reflection: 'El uso de IA necesita contraste con fuentes identificables y espacio para que la estudiante tome sus propias decisiones.', evidence: 'Registro individual JORNADA_N4 y guía de observación J4. Tema específico por confirmar entre el relato y el mensaje posterior.' },
  { number: 5, date: '10 de octubre de 2026', title: 'Acompañamiento durante evaluaciones', state: 'Documentada', summary: 'De 9:30 a. m. a 4:00 p. m. acompañé evaluaciones de Estudios Sociales, Ciencias Naturales e Inglés en Modalidad Flexible. La evaluación de Estudios Sociales de segundo año se realizó mediante Google Forms; también se evaluó a primer año. Ciencias Naturales e Inglés utilizaron pruebas impresas, y en Inglés hubo una actividad de comprensión auditiva.', role: 'Apoyé a los docentes supervisando los exámenes y aclarando dudas sobre las instrucciones sin proporcionar respuestas. En la guía de observación de Estudios Sociales registré aproximadamente siete estudiantes presentes.', reflection: 'Al principio sentí nervios por explicar indicaciones durante una evaluación. Aprendí a comunicarme con claridad y paciencia, respetando la autonomía del estudiantado. Necesito seguir fortaleciendo mi seguridad al orientar de forma sencilla y precisa.', evidence: 'Registro individual JORNADA_N5 y guía de observación J5. El registro incluye una fotografía del equipo de práctica, pero no imágenes de los exámenes para proteger la privacidad y confidencialidad.' },
  { number: 6, date: '24 de octubre de 2026', title: 'Sexta visita programada', state: 'Programada', summary: '[Actividades por documentar]', role: '[Intervención personal por incorporar]', reflection: '[Reflexión por incorporar]', evidence: '[Evidencia por incorporar]' },
  { number: 7, date: '7 de noviembre de 2026', title: 'Séptima visita programada', state: 'Programada', summary: '[Cierre por documentar]', role: '[Intervención personal por incorporar]', reflection: '[Reflexión por incorporar]', evidence: '[Evidencia por incorporar]' },
];

export const diagnosticFindings = [
  { value: 4, total: 5, label: 'Participantes que reportaron dificultad para estudiar de forma independiente' },
  { value: 3, total: 5, label: 'Participantes que solicitaron más actividades prácticas' },
  { value: 3, total: 5, label: 'Participantes que reportaron dificultades con aplicaciones o plataformas' },
];

export const sources = [
  { label: 'Consigna y rúbrica DDP1109', description: 'Estructura obligatoria y criterios de evaluación.' },
  { label: 'Informe diagnóstico del equipo (2026)', description: 'Contexto, cuestionario, entrevistas y FODA; muestra de cinco participantes en los resultados citados.' },
  { label: 'Registros individuales y guías J1–J5', description: 'Actividades y reflexiones de Mario durante las cinco primeras visitas.' },
  { label: 'Jornalización anual de Estudios Sociales y Cívica', description: 'Referencia temática orientativa; validar el avance efectivo con la tutora.' },
];
