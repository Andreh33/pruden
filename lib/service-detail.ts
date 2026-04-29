import {
  Boxes,
  CheckCircle2,
  ClipboardList,
  Construction,
  Droplets,
  GraduationCap,
  Hammer,
  Layers3,
  LineChart,
  MapPinned,
  Package,
  PackageCheck,
  PaintRoller,
  PenSquare,
  Route,
  Ruler,
  ShieldCheck,
  Shovel,
  Trees,
  Truck,
  Waves,
  Wrench,
  type LucideIcon,
} from "lucide-react";

import type { ServiceSlug } from "@/lib/services";

export type Subservice = {
  title: string;
  description: string;
  icon: LucideIcon;
  bullets?: string[];
};

export type Faq = { q: string; a: string };

export type ServiceDetail = {
  hero: { h1: string; subtitle?: string };
  closing?: string;
  subservices: Subservice[];
  galleryAlt: string[];
  faqs: Faq[];
};

export const serviceDetails: Record<ServiceSlug, ServiceDetail> = {
  "movimientos-de-tierra": {
    hero: {
      h1: "Movimientos de tierra y excavaciones",
      subtitle: "Construyendo el futuro, proyecto a proyecto.",
    },
    closing:
      "Nos comprometemos a utilizar prácticas seguras y respetuosas con el medio ambiente. Además, trabajamos en estrecha colaboración con nuestros clientes para entender sus necesidades específicas y ofrecer soluciones personalizadas que cumplan con sus expectativas.",
    subservices: [
      {
        title: "Excavación y desmonte",
        icon: Shovel,
        description:
          "Realizamos excavaciones precisas y seguras para la creación de cimientos, sótanos, zanjas para servicios subterráneos y cualquier otra necesidad de construcción. Además, nos encargamos del desmonte y remoción de terreno, asegurando un trabajo eficiente y limpio.",
      },
      {
        title: "Nivelación de terreno",
        icon: Ruler,
        description:
          "Utilizamos técnicas de nivelación avanzadas para preparar el terreno y dejarlo en condiciones óptimas para la construcción. Desde nivelar un terreno inclinado, corregir desniveles o preparar superficies uniformes, nuestro equipo se encargará de llevarlo a cabo de forma precisa y eficiente.",
      },
      {
        title: "Compactación de suelos",
        icon: Layers3,
        description:
          "La compactación adecuada del suelo es esencial para garantizar la estabilidad de las estructuras construidas. Disponemos de equipos especializados para realizar la compactación de suelos, asegurando una base sólida y resistente.",
      },
      {
        title: "Movimiento de tierras para proyectos viales",
        icon: Route,
        description:
          "Realizamos movimientos de tierras específicos para proyectos viales, como carreteras, autovías y urbanizaciones. También llevamos a cabo la construcción de terraplenes, explanaciones, cortes y rellenos, asegurando la adecuada conformación del terreno y la correcta planificación del drenaje.",
      },
      {
        title: "Drenaje y excavación de zanjas",
        icon: Droplets,
        description:
          "Ofrecemos servicios de excavación de zanjas para la instalación de sistemas de drenaje, tuberías, cables subterráneos y otros servicios públicos. Nuestro equipo cuenta con la experiencia necesaria para realizar excavaciones precisas, minimizando los impactos y garantizando la seguridad en la obra.",
      },
      {
        title: "Desarrollo de proyectos de movimiento de tierras",
        icon: ClipboardList,
        description:
          "Desarrollo integral de proyectos de movimiento de tierras. Desde la planificación inicial hasta la ejecución y entrega final, nos encargamos de todas las etapas del proyecto, asegurando la calidad, eficiencia y cumplimiento de los plazos establecidos.",
      },
    ],
    galleryAlt: [
      "Excavadora trabajando en obra",
      "Zanja excavada para canalización",
      "Terreno nivelado preparado para construcción",
    ],
    faqs: [
      {
        q: "¿En qué zona geográfica trabajáis?",
        a: "Operamos habitualmente en Castilla-La Mancha y comunidades limítrofes — Ciudad Real, Toledo, Albacete, Madrid, Badajoz, Córdoba y Jaén. Si tu proyecto está fuera de esa zona, escríbenos y lo valoramos.",
      },
      {
        q: "¿Cuánto tarda en elaborarse un presupuesto?",
        a: "Tras la visita técnica al terreno, normalmente entregamos un presupuesto detallado en 3 a 7 días laborables. En proyectos complejos podemos necesitar algo más para ajustar plazos y partidas con precisión.",
      },
      {
        q: "¿Tenéis maquinaria propia o subcontratáis?",
        a: "Disponemos de flota propia: excavadoras, bulldozers, niveladoras, compactadoras, cargadoras y camiones bañera. Solo subcontratamos puntualmente cuando un proyecto lo requiere por especificaciones técnicas concretas.",
      },
      {
        q: "¿Os encargáis de los permisos y licencias municipales?",
        a: "Asesoramos al cliente sobre la documentación necesaria y, si lo desea, gestionamos directamente la tramitación con la administración correspondiente.",
      },
      {
        q: "¿Qué tipo de proyectos podéis acometer?",
        a: "Desde excavaciones de viviendas unifamiliares hasta movimientos de tierra para urbanizaciones, polígonos industriales, infraestructuras viales o instalaciones de gran tamaño. Cualquier proyecto que requiera ingeniería de movimientos de tierra.",
      },
      {
        q: "¿Cómo gestionáis el impacto medioambiental?",
        a: "Aplicamos prácticas responsables: separación y reutilización de tierras, gestión adecuada de residuos, control de polvo y ruido, y cumplimiento estricto de la normativa ambiental vigente.",
      },
    ],
  },

  transportes: {
    hero: { h1: "Transportes", subtitle: "Logística y carga pesada con flota propia." },
    subservices: [
      {
        title: "Transporte de carga pesada",
        icon: Truck,
        description:
          "Nuestra flota de vehículos se encuentra equipada con la capacidad necesaria para el transporte de carga pesada. Bien se trate de mover maquinaria, equipos de construcción u otros objetos voluminosos, nos encargaremos de transportarlos de manera segura y oportuna. Nuestro personal cuenta con la experiencia y los conocimientos necesarios para manejar cargas de gran tamaño y peso, asegurando su entrega en perfectas condiciones.",
      },
      {
        title: "Alquiler de góndolas",
        icon: Boxes,
        description:
          "Para facilitar el transporte de materiales y equipos de construcción. Nuestras góndolas están diseñadas para cargar y transportar cargas voluminosas y pesadas de manera segura. Además, contamos con diferentes capacidades de carga para adaptarnos a las necesidades específicas del proyecto.",
      },
      {
        title: "Transporte de materiales de construcción",
        icon: Package,
        description:
          "Nos encargamos de transportar todo tipo de materiales de construcción, incluyendo cemento, arena, grava, ladrillos, tuberías y otros suministros. Nuestro equipo profesional se asegurará de que los materiales lleguen a tu obra en el tiempo y lugar acordados, optimizando los procesos logísticos y minimizando los tiempos de espera.",
      },
      {
        title: "Logística de proyectos",
        icon: MapPinned,
        description:
          "Servicios de logística integral para proyectos de construcción. Planificamos y coordinamos todas las etapas del transporte, desde la recogida de los materiales en el origen hasta la entrega en el lugar de construcción. Trabajaremos estrechamente contigo para desarrollar una estrategia logística eficiente y rentable, optimizando los recursos y cumpliendo con los plazos establecidos.",
      },
      {
        title: "Seguridad y cumplimiento normativo",
        icon: ShieldCheck,
        description:
          "La seguridad es nuestra principal prioridad. Cumplimos con todas las normativas y regulaciones vigentes en materia de transporte y logística. Nuestros conductores están debidamente capacitados y nuestras góndolas y vehículos cuentan con los sistemas de seguridad más avanzados, necesarios para garantizar un transporte seguro y sin contratiempos.",
      },
    ],
    galleryAlt: [
      "Camión bañera en operación de carga",
      "Góndola transportando maquinaria pesada",
      "Flota de transporte en zona de carga",
    ],
    faqs: [
      {
        q: "¿Qué capacidad de carga máxima admitís?",
        a: "Disponemos de vehículos de distintas capacidades: bañeras estándar, dúmpers articulados y góndolas para transporte especial. Consúltanos las dimensiones y peso de tu carga y te confirmamos el equipo adecuado.",
      },
      {
        q: "¿Hacéis transportes especiales con escolta?",
        a: "Sí, gestionamos transportes especiales que requieran escolta o autorizaciones específicas. Coordinamos con las autoridades competentes y aseguramos el cumplimiento de la normativa vigente.",
      },
      {
        q: "¿Servís solo a obras o también a particulares?",
        a: "Trabajamos para empresas constructoras, industria, administraciones y particulares. El servicio es el mismo en todos los casos: profesionalidad, plazos y trato directo.",
      },
      {
        q: "¿Cuál es el área de cobertura de los transportes?",
        a: "Castilla-La Mancha y comunidades limítrofes como base. Para transportes especiales o proyectos de larga distancia, consúltanos: tenemos capacidad para cubrir el ámbito nacional.",
      },
    ],
  },

  "obras-publicas": {
    hero: { h1: "Obras Públicas", subtitle: "Infraestructura y desarrollo urbano." },
    subservices: [
      {
        title: "Carreteras y autopistas",
        icon: Route,
        description:
          "Construcción y ampliación de carreteras y autopistas, contribuyendo al desarrollo de la infraestructura vial. Nuestro equipo se encarga de todos los aspectos del proyecto, desde la preparación del terreno hasta la pavimentación y señalización, cumpliendo con los estándares de calidad y seguridad establecidos.",
      },
      {
        title: "Urbanización y desarrollo de áreas residenciales",
        icon: Construction,
        description:
          "Participamos en el desarrollo de áreas residenciales y urbanizaciones, creando espacios habitables y funcionales para comunidades. Nos encargamos de la preparación y nivelación del terreno, construcción de infraestructuras básicas (como redes de agua potable y alcantarillado), pavimentación de calles y aceras, y desarrollo de áreas recreativas.",
      },
      {
        title: "Infraestructuras deportivas y recreativas",
        icon: Trees,
        description:
          "Realizamos la construcción de instalaciones deportivas y recreativas, como estadios, polideportivos, parques y áreas recreativas. Nos comprometemos a crear espacios seguros y de calidad, que promuevan la actividad física, la recreación y el entretenimiento de la comunidad.",
      },
      {
        title: "Obras hidráulicas y saneamiento",
        icon: Waves,
        description:
          "También llevamos a cabo obras hidráulicas, incluyendo la construcción de sistemas de abastecimiento de agua potable, redes de alcantarillado y estaciones de tratamiento de aguas residuales. Nuestro enfoque se centra en soluciones sostenibles y eficientes, que contribuyan a la preservación del medio ambiente y mejoren la calidad de vida de las personas.",
      },
      {
        title: "Infraestructuras educativas y de salud",
        icon: GraduationCap,
        description:
          "Participamos en la construcción de infraestructuras educativas y de salud, como escuelas, colegios, hospitales y centros de salud. Nuestro compromiso gira alrededor de crear entornos adecuados para el aprendizaje y la atención médica, cumpliendo con los estándares de calidad y seguridad requeridos.",
      },
    ],
    galleryAlt: [
      "Carretera en construcción",
      "Urbanización con calles pavimentadas",
      "Obra hidráulica en ejecución",
    ],
    faqs: [
      {
        q: "¿Trabajáis con administraciones públicas?",
        a: "Sí. Concursamos en licitaciones públicas locales, provinciales y autonómicas, y participamos como contratistas o subcontratistas en proyectos públicos.",
      },
      {
        q: "¿Os encargáis de la dirección de obra?",
        a: "Coordinamos la ejecución y aportamos el equipo técnico necesario. Para la dirección facultativa nos integramos con los técnicos designados por la propiedad o administración.",
      },
      {
        q: "¿Qué garantías ofrecéis sobre la obra ejecutada?",
        a: "Ofrecemos las garantías legales y contractuales que correspondan al tipo de obra. En obra pública aplican los plazos y términos del pliego correspondiente.",
      },
    ],
  },

  "suministro-de-aridos": {
    hero: { h1: "Suministro de Áridos", subtitle: "De la cantera a tu obra." },
    subservices: [
      {
        title: "Extracción de áridos",
        icon: Hammer,
        description:
          "Operamos canteras de extracción de áridos, donde obtenemos materiales como arena, grava, gravilla, piedra caliza, entre otros. Nuestras canteras, ubicadas estratégicamente, cuentan con los permisos y licencias necesarias para realizar la extracción de manera sostenible y respetuosa con el medio ambiente.",
      },
      {
        title: "Producción y clasificación de áridos",
        icon: Layers3,
        description:
          "Una vez extraídos, producimos y clasificamos los áridos para obtener diferentes tipos y tamaños de acuerdo a las necesidades específicas de nuestros clientes. Utilizamos equipos de trituración, cribado y lavado para garantizar la calidad y homogeneidad de nuestros productos.",
      },
      {
        title: "Suministro de áridos para la construcción",
        icon: PackageCheck,
        description:
          "Ponemos a disposición de nuestros clientes una amplia variedad de áridos para su uso en proyectos de construcción.",
        bullets: [
          "Arena para mortero",
          "Arena de construcción",
          "Áridos para hormigón",
          "Gravilla",
          "Gravas decorativas",
          "Otros materiales para obra civil y edificación",
        ],
      },
      {
        title: "Transporte de áridos",
        icon: Truck,
        description:
          "Nos encargamos del transporte de los áridos desde nuestras instalaciones hasta el lugar de destino. Contamos con una flota de vehículos de transporte adecuados y profesionales experimentados en el transporte de materiales a granel. Nuestro objetivo es garantizar una entrega oportuna y segura, optimizando los procesos logísticos y minimizando los tiempos de espera.",
      },
      {
        title: "Asesoramiento técnico",
        icon: PenSquare,
        description:
          "Nuestro equipo de expertos en áridos está disponible para brindarte asesoramiento técnico y apoyo en la elección de los áridos adecuados para tu proyecto. Analizaremos tus necesidades y te proporcionaremos recomendaciones basadas en nuestras amplias capacidades y conocimientos en el campo de los áridos.",
      },
    ],
    galleryAlt: [
      "Cantera de extracción de áridos",
      "Áridos clasificados por tamaño",
      "Planta de procesamiento",
    ],
    faqs: [
      {
        q: "¿Servís áridos a granel o ensacados?",
        a: "Servimos a granel desde nuestra planta. Para volúmenes pequeños o necesidades específicas, consúltanos las opciones disponibles.",
      },
      {
        q: "¿Qué cantidad mínima suministráis?",
        a: "Adaptamos los suministros desde unos pocos metros cúbicos hasta grandes volúmenes para obra civil. El precio por metro cúbico mejora con el volumen.",
      },
      {
        q: "¿Tenéis ensayos de los áridos?",
        a: "Sí, disponemos de la documentación técnica y los ensayos correspondientes a nuestros productos. Te los facilitamos al hacer el pedido.",
      },
      {
        q: "¿En cuánto tiempo servís?",
        a: "En obras dentro del área habitual de cobertura, normalmente en 24–48 horas desde la confirmación del pedido. Podemos coordinar entregas programadas para no parar tu obra.",
      },
    ],
  },

  "tratamientos-bituminosos": {
    hero: { h1: "Tratamientos bituminosos", subtitle: "Pavimentos duraderos y eficientes." },
    subservices: [
      {
        title: "Riego de ligantes bituminosos",
        icon: PaintRoller,
        description:
          "Aplicación profesional de riegos de imprimación, adherencia y curado bituminoso para preparar capas de firme y garantizar la cohesión entre las distintas capas del pavimento.",
      },
      {
        title: "Microaglomerados asfálticos",
        icon: Layers3,
        description:
          "Aplicamos microaglomerados asfálticos, una solución versátil y económica para la rehabilitación de pavimentos deteriorados. Este tratamiento consiste en la aplicación de una mezcla de áridos y ligante bituminoso en frío, que se compacta para formar una capa delgada y resistente. Los microaglomerados asfálticos son ideales para reparar grietas, irregularidades y áreas dañadas en el pavimento.",
      },
      {
        title: "Tratamientos superficiales",
        icon: Wrench,
        description:
          "Realizamos tratamientos superficiales, que proporcionan una capa de protección y mejora estética a la superficie del pavimento. Estos tratamientos ayudan a sellar fisuras, mejorar la adherencia de las capas del pavimento y proporcionar una superficie uniforme y segura para la circulación vehicular.",
      },
      {
        title: "Sellos de curado",
        icon: CheckCircle2,
        description:
          "Aplicamos sellos de curado en pavimentos recién construidos para protegerlos de los efectos adversos del clima y la circulación temprana de vehículos. Los sellos de curado ayudan a prevenir la pérdida de humedad del hormigón, reducen el agrietamiento y mejoran la durabilidad de la superficie.",
      },
      {
        title: "Mantenimiento preventivo",
        icon: LineChart,
        description:
          "Ofrecemos programas de mantenimiento preventivo para prolongar la vida útil de los pavimentos y minimizar la necesidad de tratamientos correctivos. Esto incluye:",
        bullets: [
          "Inspecciones periódicas",
          "Sellado de grietas",
          "Aplicación de tratamientos de rejuvenecimiento",
          "Otras medidas para mantener el pavimento en óptimas condiciones",
        ],
      },
    ],
    galleryAlt: [
      "Asfaltadora aplicando capa bituminosa",
      "Equipo trabajando en tratamiento de pavimento",
      "Vía terminada tras tratamiento bituminoso",
    ],
    faqs: [
      {
        q: "¿Qué tipos de superficie podéis tratar?",
        a: "Carreteras, calles, viales internos de polígonos, urbanizaciones, parkings, accesos a fincas y naves industriales, entre otros.",
      },
      {
        q: "¿Cuánto dura una obra de microaglomerado?",
        a: "Depende de la superficie. En tramos típicos de viales urbanos podemos completar la actuación en uno o dos días con la circulación parcialmente restablecida en horas.",
      },
      {
        q: "¿Tenéis mantenimiento periódico?",
        a: "Sí, ofrecemos planes de mantenimiento preventivo que prolongan la vida útil del pavimento y reducen el coste total a largo plazo.",
      },
    ],
  },
};

