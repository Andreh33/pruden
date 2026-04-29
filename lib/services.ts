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
      "Excavación, desmonte, nivelación y compactación con maquinaria propia y equipo técnico cualificado.",
    intro:
      "En lo que a movimiento de tierras y excavaciones se refiere, ofrecemos una amplia gama de servicios especializados en la preparación y acondicionamiento del terreno para proyectos de construcción.",
    icon: Mountain,
    image: IMAGES.serviceMovimientos,
  },
  {
    slug: "transportes",
    title: "Transportes",
    short:
      "Transporte de carga pesada, materiales de construcción y alquiler de góndolas con flota moderna.",
    intro:
      "Prestamos servicios especializados de transporte y alquiler de góndolas para cubrir las necesidades logísticas de cada proyecto.",
    icon: Truck,
    image: IMAGES.serviceTransportes,
  },
  {
    slug: "obras-publicas",
    title: "Obras públicas",
    short:
      "Carreteras, urbanizaciones, infraestructuras hidráulicas, deportivas, educativas y de salud.",
    intro:
      "Llevamos a cabo la ejecución de obras públicas, ofreciendo soluciones integrales para proyectos de infraestructura y desarrollo urbano.",
    icon: Building2,
    image: IMAGES.serviceObras,
  },
  {
    slug: "suministro-de-aridos",
    title: "Suministro de áridos",
    short:
      "Extracción, producción, clasificación y suministro de áridos desde canteras propias.",
    intro:
      "Nos dedicamos a la extracción, producción y comercialización de áridos, ofreciendo una amplia gama de productos para cubrir las necesidades de la industria de construcción y obra civil.",
    icon: Layers,
    image: IMAGES.serviceAridos,
  },
  {
    slug: "tratamientos-bituminosos",
    title: "Tratamientos bituminosos",
    short:
      "Riego de ligantes, microaglomerados, sellos de curado y mantenimiento preventivo de pavimentos.",
    intro:
      "Estamos especializados en la aplicación de tratamientos bituminosos, ofreciendo soluciones eficientes y duraderas para el mantenimiento y mejora de superficies de pavimento.",
    icon: Route,
    image: IMAGES.serviceBituminosos,
  },
];

export function getService(slug: ServiceSlug) {
  return services.find((s) => s.slug === slug);
}
