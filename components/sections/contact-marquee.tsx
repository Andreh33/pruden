import { ArrowRight, MapPin } from "lucide-react";
import Link from "next/link";

const ITEMS = 12;

/**
 * Banda horizontal con CTA "Contáctanos · Chillón, Ciudad Real" que se desplaza
 * en bucle de derecha a izquierda. Animación 100% CSS (ver `.marquee-track` en
 * globals.css) — no depende de framer-motion ni de hidratación, así que se
 * mueve siempre y no queda atrapada en el bug de primer render.
 */
export function ContactMarquee() {
  return (
    <Link
      href="/contacto"
      aria-label="Contáctanos en Chillón, Ciudad Real"
      className="group relative block overflow-hidden bg-brand-red-600 py-5 text-white transition-colors duration-200 hover:bg-brand-red-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-inset"
    >
      <div className="relative flex" aria-hidden="true">
        <div className="marquee-track">
          {Array.from({ length: ITEMS * 2 }).map((_, i) => (
            <Item key={i} />
          ))}
        </div>
      </div>
      <span className="sr-only">
        Contáctanos en Chillón, Ciudad Real. Pulsa para ir al formulario de contacto.
      </span>
      <span aria-hidden className="pointer-events-none absolute inset-x-0 top-0 h-px bg-white/15" />
      <span aria-hidden className="pointer-events-none absolute inset-x-0 bottom-0 h-px bg-black/10" />
    </Link>
  );
}

function Item() {
  return (
    <span className="flex shrink-0 items-center gap-3 whitespace-nowrap pr-10 text-[clamp(1.125rem,2vw+0.5rem,1.875rem)] font-bold uppercase tracking-tight">
      <ArrowRight className="size-5 opacity-70" strokeWidth={2.25} />
      Contáctanos
      <span aria-hidden className="inline-block size-1.5 rounded-full bg-white/60" />
      <MapPin className="size-5 opacity-80" strokeWidth={2} />
      <span className="font-semibold">Chillón, Ciudad Real</span>
      <span aria-hidden className="inline-block size-1.5 rounded-full bg-white/60" />
    </span>
  );
}
