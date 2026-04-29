import * as React from "react";

import { cn } from "@/lib/utils";

type Direction = "up" | "down" | "left" | "right";

type RevealProps = Omit<React.HTMLAttributes<HTMLDivElement>, "children"> & {
  children?: React.ReactNode;
  delay?: number;
  direction?: Direction;
  duration?: number;
  /**
   * Mantenido por compatibilidad con páginas existentes. La animación
   * actual es 100% CSS y siempre dispara on-paint, así que el flag
   * ya no tiene efecto — todas las apariciones son "eager".
   */
  eager?: boolean;
  distance?: number;
  once?: boolean;
};

const directionClass: Record<Direction, string> = {
  up: "reveal-up",
  down: "reveal-down",
  left: "reveal-left",
  right: "reveal-right",
};

/**
 * Animación de entrada via CSS keyframes — sin framer-motion, sin
 * IntersectionObserver, sin estado de hidratación. La animación se ejecuta
 * en cuanto el navegador inserta el elemento (`animation-fill-mode: both`),
 * por lo que el contenido siempre aparece con un fade+slide al primer paint
 * y no puede quedarse atrapado en `opacity:0`. Si JS falla, sigue visible.
 */
export function Reveal({
  children,
  delay = 0,
  direction = "up",
  duration = 0.6,
  eager: _eager,
  distance: _distance,
  once: _once,
  className,
  style,
  ...rest
}: RevealProps) {
  void _eager;
  void _distance;
  void _once;
  return (
    <div
      className={cn(directionClass[direction], className)}
      style={{
        ...style,
        animationDuration: `${duration}s`,
        animationDelay: delay > 0 ? `${delay}s` : undefined,
      }}
      {...rest}
    >
      {children}
    </div>
  );
}
