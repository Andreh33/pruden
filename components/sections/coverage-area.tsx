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
 * Mapa estilizado de la Península Ibérica con las 8 provincias de cobertura
 * habitual marcadas y la sede de Chillón destacada con un pin rojo pulsante.
 *
 * Coordenadas en viewBox 800×500. Outline trazado a mano para mantener un
 * archivo ligero y reconocible (Spain + Portugal como masa única, Baleares
 * como islas separadas). Las posiciones de las provincias siguen su
 * disposición real respecto a la península.
 */
const HIGHLIGHT_PROVINCES = [
  { name: "Madrid", cx: 460, cy: 200 },
  { name: "Toledo", cx: 415, cy: 245 },
  { name: "Cuenca", cx: 510, cy: 230 },
  { name: "Albacete", cx: 555, cy: 295 },
  { name: "Ciudad Real", cx: 425, cy: 305, sede: true },
  { name: "Badajoz", cx: 290, cy: 305 },
  { name: "Córdoba", cx: 380, cy: 365 },
  { name: "Jaén", cx: 460, cy: 365 },
] as const;

function CoverageMap() {
  return (
    <div className="relative aspect-[4/3] w-full overflow-hidden rounded-md border border-neutral-200 bg-gradient-to-br from-brand-blue-50 via-white to-neutral-50 p-4">
      <svg
        viewBox="0 0 800 500"
        preserveAspectRatio="xMidYMid meet"
        xmlns="http://www.w3.org/2000/svg"
        role="img"
        aria-label="Mapa de cobertura: Península Ibérica con sede en Chillón (Ciudad Real) y las provincias donde operamos habitualmente"
        className="block h-full w-full"
      >
        <defs>
          <pattern id="cov-grid" width="40" height="40" patternUnits="userSpaceOnUse">
            <path
              d="M 40 0 L 0 0 0 40"
              fill="none"
              stroke="#cbd5e1"
              strokeWidth="0.5"
              opacity="0.35"
            />
          </pattern>
          <radialGradient id="cov-pin-pulse" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#c8102e" stopOpacity="0.4" />
            <stop offset="100%" stopColor="#c8102e" stopOpacity="0" />
          </radialGradient>
        </defs>

        <rect width="800" height="500" fill="url(#cov-grid)" />

        {/* Iberian peninsula outline */}
        <path
          d="
            M 95 130
            L 150 105
            L 245 92
            L 360 88
            L 460 90
            L 545 100
            L 615 118
            L 670 138
            L 715 165
            L 730 195
            L 720 230
            L 695 270
            L 668 305
            L 640 345
            L 612 385
            L 568 415
            L 510 440
            L 440 455
            L 372 460
            L 310 450
            L 268 432
            L 240 412
            L 232 380
            L 232 330
            L 235 270
            L 240 220
            L 240 180
            L 220 152
            L 180 138
            L 130 130
            Z
          "
          fill="#e5e7eb"
          stroke="#94a3b8"
          strokeWidth="1.5"
          strokeLinejoin="round"
        />

        {/* Portuguese border (línea fina, no recortada visualmente) */}
        <path
          d="M 232 270 Q 218 320 240 405"
          fill="none"
          stroke="#9ca3af"
          strokeWidth="1.2"
          strokeDasharray="4 4"
          opacity="0.7"
        />

        {/* Baleares */}
        <g fill="#e5e7eb" stroke="#94a3b8" strokeWidth="1.2">
          <ellipse cx="725" cy="320" rx="22" ry="11" />
          <ellipse cx="765" cy="305" rx="9" ry="5" />
          <circle cx="690" cy="335" r="6" />
        </g>

        {/* Anillo de cobertura aproximada alrededor de Chillón */}
        <circle
          cx="425"
          cy="305"
          r="120"
          fill="none"
          stroke="#1e5aa8"
          strokeWidth="1"
          strokeDasharray="3 5"
          opacity="0.45"
        />
        <circle
          cx="425"
          cy="305"
          r="200"
          fill="none"
          stroke="#1e5aa8"
          strokeWidth="1"
          strokeDasharray="3 5"
          opacity="0.25"
        />

        {/* Provincias destacadas */}
        {HIGHLIGHT_PROVINCES.map((p) => {
          const isSede = "sede" in p && p.sede;
          if (isSede) return null;
          return (
            <g key={p.name}>
              <circle cx={p.cx} cy={p.cy} r="6" fill="#123a6b" />
              <circle cx={p.cx} cy={p.cy} r="11" fill="#123a6b" opacity="0.18" />
              <text
                x={p.cx + 10}
                y={p.cy + 4}
                fontSize="13"
                fontFamily="ui-sans-serif, system-ui, Inter, sans-serif"
                fontWeight="600"
                fill="#1f2937"
              >
                {p.name}
              </text>
            </g>
          );
        })}

        {/* Sede — Chillón / Ciudad Real */}
        <g>
          <circle cx="425" cy="305" r="38" fill="url(#cov-pin-pulse)">
            <animate
              attributeName="r"
              values="28;42;28"
              dur="3s"
              repeatCount="indefinite"
            />
            <animate
              attributeName="opacity"
              values="0.85;0.4;0.85"
              dur="3s"
              repeatCount="indefinite"
            />
          </circle>
          <circle cx="425" cy="305" r="9" fill="#c8102e" stroke="white" strokeWidth="2" />
          <text
            x="425"
            y="285"
            textAnchor="middle"
            fontSize="14"
            fontFamily="ui-sans-serif, system-ui, Inter, sans-serif"
            fontWeight="700"
            fill="#0b1f3a"
          >
            Chillón
          </text>
        </g>

        {/* Brújula decorativa */}
        <g
          transform="translate(740, 60)"
          fontFamily="ui-sans-serif, system-ui, Inter, sans-serif"
          fontWeight="700"
          fontSize="11"
          fill="#6b7280"
        >
          <circle r="22" fill="white" stroke="#cbd5e1" strokeWidth="1" />
          <line x1="0" y1="-16" x2="0" y2="16" stroke="#9ca3af" strokeWidth="1" />
          <line x1="-16" y1="0" x2="16" y2="0" stroke="#9ca3af" strokeWidth="1" />
          <text y="-22" textAnchor="middle">N</text>
        </g>
      </svg>

      <div className="absolute bottom-4 left-4 inline-flex items-center gap-2 rounded-md bg-white px-3 py-1.5 text-xs font-semibold text-neutral-800 shadow-sm ring-1 ring-neutral-200">
        <MapPin className="size-3.5 text-brand-red-600" strokeWidth={1.75} />
        Sede: Chillón — Ciudad Real
      </div>
    </div>
  );
}
