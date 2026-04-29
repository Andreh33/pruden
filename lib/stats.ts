import { Award, HardHat, Layers, Truck, type LucideIcon } from "lucide-react";

export type Stat = {
  value: number;
  prefix?: string;
  suffix?: string;
  label: string;
  icon: LucideIcon;
};

// TODO: confirmar con cliente — números provisionales hasta validación.
export const stats: Stat[] = [
  { value: 25, prefix: "+", label: "Años de experiencia", icon: Award },
  { value: 500, prefix: "+", label: "Proyectos ejecutados", icon: HardHat },
  { value: 2, suffix: "M m³", prefix: "+", label: "Tierra movida", icon: Layers },
  { value: 30, prefix: "+", label: "Unidades de maquinaria", icon: Truck },
];
