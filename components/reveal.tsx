"use client";

import { motion, useReducedMotion, type HTMLMotionProps } from "framer-motion";
import * as React from "react";

type Direction = "up" | "down" | "left" | "right";

type RevealProps = Omit<
  HTMLMotionProps<"div">,
  "initial" | "animate" | "whileInView" | "transition" | "children"
> & {
  children?: React.ReactNode;
  delay?: number;
  direction?: Direction;
  distance?: number;
  duration?: number;
  once?: boolean;
};

const offsets: Record<Direction, { x: number; y: number }> = {
  up: { x: 0, y: 16 },
  down: { x: 0, y: -16 },
  left: { x: 16, y: 0 },
  right: { x: -16, y: 0 },
};

export function Reveal({
  children,
  delay = 0,
  direction = "up",
  distance,
  duration = 0.6,
  once = true,
  className,
  ...rest
}: RevealProps) {
  const reduced = useReducedMotion();
  const o = offsets[direction];
  const x = distance !== undefined ? Math.sign(o.x) * distance : o.x;
  const y = distance !== undefined ? Math.sign(o.y) * distance : o.y;

  if (reduced) {
    return (
      <div className={className} {...(rest as React.HTMLAttributes<HTMLDivElement>)}>
        {children}
      </div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0, x, y }}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      // amount:0.05 dispara cuando ≥5% del elemento es visible (hero/contenido above-the-fold
      // intersecta desde el primer paint). margin solo encoge el bottom para que el resto
      // de secciones revelen ligeramente antes de tocar el borde inferior — nunca el top.
      viewport={{ once, amount: 0.05, margin: "0px 0px -10% 0px" }}
      transition={{ duration, delay, ease: [0.22, 1, 0.36, 1] }}
      className={className}
      {...rest}
    >
      {children}
    </motion.div>
  );
}
