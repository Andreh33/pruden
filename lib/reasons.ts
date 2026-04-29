import {
  Award,
  Clock,
  HardHat,
  Recycle,
  RefreshCw,
  ShieldCheck,
  Target,
  Zap,
  type LucideIcon,
} from "lucide-react";

export type Reason = {
  title: string;
  description: string;
  icon: LucideIcon;
};

export const reasons: Reason[] = [
  {
    title: "Experiencia y conocimiento",
    description:
      "Comprendemos los requisitos específicos de cada proyecto y las técnicas adecuadas para lograr el mejor resultado.",
    icon: Award,
  },
  {
    title: "Maquinaria y equipos",
    description:
      "Contamos con la maquinaria y equipos precisos para completar los proyectos y garantizar un trabajo de alta calidad.",
    icon: HardHat,
  },
  {
    title: "Seguridad",
    description:
      "Implementamos los protocolos y medidas de seguridad para garantizar un entorno de trabajo seguro.",
    icon: ShieldCheck,
  },
  {
    title: "Especialización",
    description:
      "Ahorramos tiempo ejecutando proyectos y planificamos las tareas de manera eficiente reduciendo costes generales.",
    icon: Target,
  },
  {
    title: "Gestión de recursos",
    description:
      "Ejecutamos los proyectos con una gestión adecuada de los recursos y de los materiales, reduciendo el impacto medioambiental.",
    icon: Recycle,
  },
  {
    title: "Adaptabilidad y flexibilidad",
    description:
      "Trabajamos en proyectos de diferentes características. Damos soluciones rápidas y eficaces ante cualquier imprevisto.",
    icon: RefreshCw,
  },
  {
    title: "Eficiencia y ahorro de tiempo",
    description:
      "Traducimos la experiencia, conocimiento y recursos en un trabajo bien hecho con resultados garantizados.",
    icon: Zap,
  },
];

export const reasonsExtraIcon = Clock;
