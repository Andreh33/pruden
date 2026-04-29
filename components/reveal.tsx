"use client";

import {
  motion,
  useInView,
  useReducedMotion,
  type HTMLMotionProps,
} from "framer-motion";
import * as React from "react";

// useSyncExternalStore con un "store" trivial: tras hidratación reactiva, el snapshot pasa de
// `false` (SSR) a `true` (CSR). Sirve para detectar mount sin caer en setState dentro de useEffect.
function subscribe() {
  // El cambio de hidratación es one-shot; no hace falta suscribirse a nada externo.
  return () => {};
}
function getMountedSnapshot() {
  return true;
}
function getMountedServerSnapshot() {
  return false;
}
function useHasMounted() {
  return React.useSyncExternalStore(subscribe, getMountedSnapshot, getMountedServerSnapshot);
}

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
  /**
   * Anima en cuanto el componente monta, sin esperar al observer.
   * Imprescindible para hero / contenido above-the-fold: garantiza que
   * el primer paint no quede atrapado en `opacity:0`.
   */
  eager?: boolean;
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
  eager = false,
  className,
  ...rest
}: RevealProps) {
  const reduced = useReducedMotion();
  const ref = React.useRef<HTMLDivElement>(null);
  const inView = useInView(ref, {
    once,
    amount: 0.05,
    margin: "0px 0px -10% 0px",
  });
  const mounted = useHasMounted();

  const o = offsets[direction];
  const x = distance !== undefined ? Math.sign(o.x) * distance : o.x;
  const y = distance !== undefined ? Math.sign(o.y) * distance : o.y;

  if (reduced) {
    return (
      <div
        ref={ref}
        className={className}
        {...(rest as React.HTMLAttributes<HTMLDivElement>)}
      >
        {children}
      </div>
    );
  }

  // El hero (eager) anima en cuanto monta. El resto espera a estar en viewport.
  const shouldShow = eager ? mounted : inView;

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x, y }}
      animate={shouldShow ? { opacity: 1, x: 0, y: 0 } : { opacity: 0, x, y }}
      transition={{ duration, delay, ease: [0.22, 1, 0.36, 1] }}
      className={className}
      {...rest}
    >
      {children}
    </motion.div>
  );
}
