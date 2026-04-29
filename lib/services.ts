import type { LucideIcon } from "lucide-react";
import { Building2, Layers, Mountain, Route, Truck } from "lucide-react";

import { IMAGES } from "@/lib/images";

export type ServiceSlug =
  | "movimientos-de-tierra"
  | "transportes"
  | "obras-publicas"
  | "suministro-de-aridos"
  | "tratamientos-bituminosos";

export type Service = {
  slug: ServiceSlug;
  title: string;
  short: string;
  intro: string;
  icon: LucideIcon;
  image: string;
};

export const services: Service[] = [
  {
    slug: "movimientos-de-tierra",
    title: "Movimientos de tierra",
    short:
      "Excavación, desmonte, nivelación y compactación con maquinaria propia y equipo técnico cualificado para proyectos de cualquier envergadura.",
    intro:
      "En lo que a movimiento de tierras y excavaciones se refiere, ofrecemos una amplia gama de servicios especializados en la preparación y acondicionamiento del terreno para proyectos de construcción. Nuestra experiencia abarca desde excavaciones de cimentación para vivienda unifamiliar hasta movimientos de tierra de gran volumen para urbanizaciones, polígonos industriales e infraestructura vial. Combinamos planificación técnica, maquinaria de última generación y estudio previo del terreno para entregar cada obra dentro de plazo y con la calidad que un proyecto serio requiere.",
    icon: Mountain,
    image: IMAGES.serviceMovimientos,
  },
  {
    slug: "transportes",
    title: "Transportes",
    short:
      "Transporte de carga pesada, materiales de construcción y alquiler de góndolas con flota moderna y conductores profesionales.",
    intro:
      "Prestamos servicios especializados de transporte y alquiler de góndolas para cubrir las necesidades logísticas de cada proyecto. Disponemos de una flota propia de bañeras, dúmpers articulados y góndolas para transporte especial, todos con mantenimiento riguroso y los sistemas de seguridad más avanzados. Coordinamos cada movimiento desde el origen hasta el destino, optimizando rutas, horarios y permisos para que los materiales y la maquinaria lleguen a la obra en el momento exacto y en perfectas condiciones, sin tiempos muertos que comprometan tu cronograma.",
    icon: Truck,
    image: IMAGES.serviceTransportes,
  },
  {
    slug: "obras-publicas",
    title: "Obras públicas",
    short:
      "Carreteras, urbanizaciones, infraestructuras hidráulicas, deportivas, educativas y de salud, ejecutadas con criterios técnicos y plazos cumplidos.",
    intro:
      "Llevamos a cabo la ejecución de obras públicas, ofreciendo soluciones integrales para proyectos de infraestructura y desarrollo urbano. Trabajamos como contratistas y subcontratistas en licitaciones autonómicas, provinciales y municipales, con la documentación, los seguros y las acreditaciones que exige el sector público. Cada actuación se planifica con un equipo técnico que asume desde el replanteo y los movimientos de tierra previos hasta la pavimentación, las redes de servicios y la señalización final, manteniendo un canal directo con la propiedad y la dirección facultativa durante toda la obra.",
    icon: Building2,
    image: IMAGES.serviceObras,
  },
  {
    slug: "suministro-de-aridos",
    title: "Suministro de áridos",
    short:
      "Extracción, producción, clasificación y suministro de áridos desde canteras propias, con entregas ágiles a obra y asesoramiento técnico.",
    intro:
      "Nos dedicamos a la extracción, producción y comercialización de áridos, ofreciendo una amplia gama de productos para cubrir las necesidades de la industria de construcción y obra civil. Operamos canteras propias con los permisos y licencias en regla, y disponemos de plantas de procesamiento con líneas de trituración, cribado y lavado que garantizan la granulometría y limpieza exigidas por cada aplicación. Servimos áridos para hormigón, mortero, capas de firme, drenajes y rellenos, con flota propia para entrega a granel y plazos competitivos en toda la región.",
    icon: Layers,
    image: IMAGES.serviceAridos,
  },
  {
    slug: "tratamientos-bituminosos",
    title: "Tratamientos bituminosos",
    short:
      "Riego de ligantes, microaglomerados, sellos de curado y mantenimiento preventivo de pavimentos, con equipos certificados y resultados de larga duración.",
    intro:
      "Estamos especializados en la aplicación de tratamientos bituminosos, ofreciendo soluciones eficientes y duraderas para el mantenimiento y mejora de superficies de pavimento. Cubrimos desde la rehabilitación puntual de viales urbanos y accesos a polígonos hasta tramos completos de carretera y aparcamientos de gran extensión, siempre con maquinaria adecuada al volumen de cada obra y operarios formados específicamente en este ámbito. Nuestro objetivo es que cada intervención prolongue la vida útil del pavimento, reduzca el coste total a largo plazo y deje una superficie segura, uniforme y con la imagen que el entorno merece.",
    icon: Route,
    image: IMAGES.serviceBituminosos,
  },
];

export function getService(slug: ServiceSlug) {
  return services.find((s) => s.slug === slug);
}
