"use client";

import { motion, useReducedMotion, useScroll, useSpring } from "framer-motion";

/**
 * Línea fina roja en el borde inferior del header. Aparece solo cuando ya hay scroll.
 * Pensada para páginas largas (empresa, detalle de servicio) — no usar en home.
 */
export function ScrollProgress() {
  const reduced = useReducedMotion();
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 140,
    damping: 30,
    mass: 0.2,
    restDelta: 0.001,
  });

  if (reduced) return null;

  return (
    <motion.div
      aria-hidden
      className="fixed inset-x-0 top-0 z-50 h-[2px] origin-left bg-brand-red-600"
      style={{ scaleX }}
    />
  );
}
