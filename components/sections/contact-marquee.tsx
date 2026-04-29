"use client";

import { motion, useReducedMotion } from "framer-motion";
import { ArrowRight, MapPin } from "lucide-react";
import Link from "next/link";

const PHRASE = "Contáctanos · Chillón, Ciudad Real";

export function ContactMarquee() {
  const reduced = useReducedMotion();
  // Repetimos la frase varias veces para asegurar continuidad visual
  // sin huecos al desplazarse en pantallas anchas.
  const items = Array.from({ length: 10 });

  return (
    <Link
      href="/contacto"
      aria-label="Contáctanos en Chillón, Ciudad Real"
      className="group relative block overflow-hidden bg-brand-red-600 py-5 text-white transition-colors duration-200 hover:bg-brand-red-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-inset"
    >
      <div className="flex" aria-hidden="true">
        <motion.div
          className="flex shrink-0 items-center gap-10 pr-10"
          animate={reduced ? undefined : { x: ["0%", "-50%"] }}
          transition={
            reduced
              ? undefined
              : { duration: 32, ease: "linear", repeat: Infinity }
          }
        >
          {items.map((_, i) => (
            <Item key={`a-${i}`} />
          ))}
          {items.map((_, i) => (
            <Item key={`b-${i}`} />
          ))}
        </motion.div>
      </div>

      {/* Pista accesible (lectores de pantalla) y de respaldo si reduced-motion está activo */}
      <span className="sr-only">{PHRASE}. Pulsa para ir al contacto.</span>

      {/* Borde superior decorativo */}
      <span aria-hidden className="pointer-events-none absolute inset-x-0 top-0 h-px bg-white/15" />
      <span aria-hidden className="pointer-events-none absolute inset-x-0 bottom-0 h-px bg-black/10" />
    </Link>
  );
}

function Item() {
  return (
    <span className="flex items-center gap-3 whitespace-nowrap text-[clamp(1.125rem,2vw+0.5rem,1.875rem)] font-bold uppercase tracking-tight">
      <ArrowRight
        className="size-5 opacity-70 transition-transform duration-300 group-hover:translate-x-1"
        strokeWidth={2.25}
      />
      Contáctanos
      <span aria-hidden className="inline-block size-1.5 rounded-full bg-white/60" />
      <MapPin className="size-5 opacity-80" strokeWidth={2} />
      <span className="font-semibold">Chillón, Ciudad Real</span>
      <span aria-hidden className="inline-block size-1.5 rounded-full bg-white/60" />
    </span>
  );
}
