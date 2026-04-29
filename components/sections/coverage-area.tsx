import { ArrowRight, MapPin } from "lucide-react";
import Link from "next/link";

import { Reveal } from "@/components/reveal";
import { Button } from "@/components/ui/button";

const provincias = [
  "Ciudad Real",
  "Toledo",
  "Albacete",
  "Cuenca",
  "Madrid",
  "Badajoz",
  "Córdoba",
  "Jaén",
];

export function CoverageArea() {
  return (
    <section className="bg-white py-20 md:py-28">
      <div className="container-prose grid items-center gap-12 lg:grid-cols-12">
        <Reveal className="lg:col-span-5">
          <p className="text-[12px] font-semibold uppercase tracking-[0.2em] text-brand-red-600">
            Zona de cobertura
          </p>
          <h2 className="h2-rule mt-2" style={{ fontSize: "var(--font-size-h2)" }}>
            Operamos en toda Castilla-La Mancha y comunidades limítrofes
          </h2>
          <p className="mt-5 text-[17px] leading-relaxed text-neutral-700">
            Sede en Chillón, Ciudad Real. Cobertura habitual: provincias de Ciudad Real,
            Badajoz, Córdoba, Jaén, Toledo, Albacete y Madrid. ¿Tu proyecto está fuera de esta
            zona? Consúltanos.
          </p>
          <ul className="mt-6 grid grid-cols-2 gap-2 text-sm text-neutral-700 sm:grid-cols-3">
            {provincias.map((p) => (
              <li key={p} className="flex items-center gap-2">
                <span aria-hidden className="size-1.5 rounded-full bg-brand-red-600" />
                {p}
              </li>
            ))}
          </ul>
          <div className="mt-8">
            <Button asChild variant="secondary">
              <Link href="/contacto">
                Consultar cobertura
                <ArrowRight className="size-4" strokeWidth={2} />
              </Link>
            </Button>
          </div>
        </Reveal>

        <Reveal className="lg:col-span-7" direction="right">
          <CoverageMap />
        </Reveal>
      </div>
    </section>
  );
}

/**
 * Mapa simplificado de España con la sede destacada.
 * SVG estilizado: silueta general + pin en Chillón. No pretende precisión cartográfica.
 */
function CoverageMap() {
  return (
    <div className="relative aspect-[5/4] w-full overflow-hidden rounded-md border border-neutral-200 bg-neutral-50 p-6">
      <svg
        viewBox="0 0 600 480"
        preserveAspectRatio="xMidYMid meet"
        xmlns="http://www.w3.org/2000/svg"
        role="img"
        aria-label="Mapa de cobertura: España con sede en Chillón, Ciudad Real"
        className="h-full w-full"
      >
        {/* Silueta estilizada de la península */}
        <path
          d="M70 200
             C 90 150, 120 120, 170 110
             C 210 100, 240 95, 280 95
             C 330 90, 380 95, 430 110
             C 470 122, 500 145, 520 180
             C 535 210, 540 245, 525 280
             C 515 305, 495 330, 465 350
             C 430 370, 390 385, 350 392
             C 310 398, 270 400, 230 395
             C 190 390, 155 380, 125 360
             C 95 340, 75 310, 65 275
             C 60 250, 60 225, 70 200 Z"
          fill="#e5e7eb"
          stroke="#cbd5e1"
          strokeWidth="1.5"
        />
        {/* Provincias destacadas — manchas suaves */}
        {[
          { cx: 340, cy: 250, r: 36 }, // Ciudad Real (centro-sur)
          { cx: 340, cy: 200, r: 28 }, // Toledo
          { cx: 395, cy: 250, r: 30 }, // Albacete
          { cx: 380, cy: 195, r: 26 }, // Cuenca
          { cx: 350, cy: 165, r: 30 }, // Madrid
          { cx: 250, cy: 285, r: 30 }, // Badajoz
          { cx: 305, cy: 305, r: 28 }, // Córdoba
          { cx: 350, cy: 305, r: 26 }, // Jaén
        ].map((c, i) => (
          <circle
            key={i}
            cx={c.cx}
            cy={c.cy}
            r={c.r}
            fill="#c8102e"
            opacity={0.18}
          />
        ))}
        {/* Pin de la sede */}
        <g transform="translate(330,250)">
          <circle r="6" fill="#c8102e" />
          <circle r="14" fill="#c8102e" opacity="0.25">
            <animate
              attributeName="r"
              values="10;18;10"
              dur="2.5s"
              repeatCount="indefinite"
            />
            <animate
              attributeName="opacity"
              values="0.35;0;0.35"
              dur="2.5s"
              repeatCount="indefinite"
            />
          </circle>
        </g>
      </svg>
      <div className="absolute bottom-5 left-5 inline-flex items-center gap-2 rounded-md bg-white px-3 py-1.5 text-xs font-semibold text-neutral-800 shadow-sm ring-1 ring-neutral-200">
        <MapPin className="size-3.5 text-brand-red-600" strokeWidth={1.75} />
        Chillón — Ciudad Real
      </div>
    </div>
  );
}
