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
 * Mapa de la Península Ibérica + Baleares con las 8 provincias de cobertura
 * marcadas y la sede de Chillón destacada con un pin rojo pulsante.
 *
 * Coordenadas proyectadas a viewBox 800×500 a partir de longitud/latitud
 * reales (proyección equirectangular sencilla):
 *   x = 20 + (lon + 9.27) × 60.4
 *   y = 20 + (43.8 − lat) × 59.0
 *
 * El outline se ha trazado con ~30 puntos cartográficos clave (Cabos de
 * Finisterre, Estaca de Bares, Peñas, Higuer, Cap de Creus, Nao, Gata,
 * Tarifa, etc.) para que la silueta sea inmediatamente reconocible.
 */
const HIGHLIGHT_PROVINCES = [
  { name: "Madrid", cx: 356, cy: 219 },
  { name: "Toledo", cx: 337, cy: 252 },
  { name: "Cuenca", cx: 451, cy: 240 },
  { name: "Albacete", cx: 467, cy: 304 },
  { name: "Ciudad Real", cx: 343, cy: 304 },
  { name: "Badajoz", cx: 159, cy: 310 },
  { name: "Córdoba", cx: 291, cy: 369 },
  { name: "Jaén", cx: 351, cy: 375 },
] as const;

const CHILLON = { cx: 286, cy: 314 };

function CoverageMap() {
  return (
    <div className="relative aspect-[4/3] w-full overflow-hidden rounded-md border border-neutral-200 bg-gradient-to-br from-brand-blue-50 via-white to-neutral-50 p-3">
      <svg
        viewBox="0 0 800 500"
        preserveAspectRatio="xMidYMid meet"
        xmlns="http://www.w3.org/2000/svg"
        role="img"
        aria-label="Mapa de cobertura: España con sede en Chillón (Ciudad Real)"
        className="block h-full w-full"
      >
        <defs>
          <pattern id="cov-grid" width="48" height="48" patternUnits="userSpaceOnUse">
            <path
              d="M 48 0 L 0 0 0 48"
              fill="none"
              stroke="#cbd5e1"
              strokeWidth="0.5"
              opacity="0.35"
            />
          </pattern>
          <radialGradient id="cov-pin-pulse" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#c8102e" stopOpacity="0.45" />
            <stop offset="100%" stopColor="#c8102e" stopOpacity="0" />
          </radialGradient>
        </defs>

        <rect width="800" height="500" fill="url(#cov-grid)" />

        {/* Península Ibérica — España + Portugal como masa única */}
        <path
          d="
            M 72 46
            Q 90 30 115 21
            Q 230 22 403 52
            L 472 44
            Q 488 50 500 67
            Q 580 72 641 85
            Q 720 95 780 107
            Q 750 145 711 162
            L 655 178
            L 619 202
            L 582 245
            L 557 276
            Q 590 295 593 319
            L 551 342
            L 538 384
            Q 510 410 446 438
            L 431 431
            Q 380 442 313 438
            L 287 456
            L 241 480
            Q 215 470 200 449
            Q 175 425 160 405
            L 113 389
            Q 130 320 137 254
            Q 110 195 64 130
            L 53 112
            Q 35 95 20 74
            Q 22 62 24 58
            Z
          "
          fill="#e2e8f0"
          stroke="#64748b"
          strokeWidth="1.5"
          strokeLinejoin="round"
        />

        {/* Frontera con Portugal (línea discontinua, dentro de la silueta) */}
        <path
          d="M 113 389 Q 130 320 137 254 Q 110 195 64 130"
          fill="none"
          stroke="#94a3b8"
          strokeWidth="1.3"
          strokeDasharray="4 4"
          opacity="0.85"
        />

        {/* Etiqueta "PORTUGAL" tenue */}
        <text
          x="68"
          y="290"
          fontSize="11"
          fontFamily="ui-sans-serif, system-ui, Inter, sans-serif"
          fontWeight="600"
          fill="#94a3b8"
          letterSpacing="2"
        >
          PORTUGAL
        </text>

        {/* Baleares */}
        <g fill="#e2e8f0" stroke="#64748b" strokeWidth="1.2" strokeLinejoin="round">
          {/* Mallorca */}
          <ellipse cx="725" cy="285" rx="22" ry="13" />
          {/* Menorca */}
          <ellipse cx="765" cy="265" rx="11" ry="5" />
          {/* Ibiza */}
          <ellipse cx="685" cy="305" rx="10" ry="6" />
          {/* Formentera */}
          <circle cx="690" cy="318" r="3" />
        </g>

        {/* Anillos de cobertura aproximada (~150 km y ~250 km radio) */}
        <circle
          cx={CHILLON.cx}
          cy={CHILLON.cy}
          r="90"
          fill="none"
          stroke="#1e5aa8"
          strokeWidth="1"
          strokeDasharray="3 5"
          opacity="0.5"
        />
        <circle
          cx={CHILLON.cx}
          cy={CHILLON.cy}
          r="150"
          fill="none"
          stroke="#1e5aa8"
          strokeWidth="1"
          strokeDasharray="3 5"
          opacity="0.3"
        />

        {/* Provincias destacadas */}
        {HIGHLIGHT_PROVINCES.map((p) => (
          <g key={p.name}>
            <circle cx={p.cx} cy={p.cy} r="11" fill="#123a6b" opacity="0.18" />
            <circle cx={p.cx} cy={p.cy} r="5.5" fill="#123a6b" />
            <text
              x={p.cx + 9}
              y={p.cy + 4}
              fontSize="13"
              fontFamily="ui-sans-serif, system-ui, Inter, sans-serif"
              fontWeight="600"
              fill="#0b1f3a"
              paintOrder="stroke"
              stroke="white"
              strokeWidth="3"
            >
              {p.name}
            </text>
          </g>
        ))}

        {/* Sede — Chillón / Ciudad Real */}
        <g>
          <circle cx={CHILLON.cx} cy={CHILLON.cy} r="35" fill="url(#cov-pin-pulse)">
            <animate
              attributeName="r"
              values="26;42;26"
              dur="3s"
              repeatCount="indefinite"
            />
            <animate
              attributeName="opacity"
              values="0.9;0.4;0.9"
              dur="3s"
              repeatCount="indefinite"
            />
          </circle>
          <circle
            cx={CHILLON.cx}
            cy={CHILLON.cy}
            r="9"
            fill="#c8102e"
            stroke="white"
            strokeWidth="2.5"
          />
          <text
            x={CHILLON.cx}
            y={CHILLON.cy - 18}
            textAnchor="middle"
            fontSize="14"
            fontFamily="ui-sans-serif, system-ui, Inter, sans-serif"
            fontWeight="800"
            fill="#c8102e"
            paintOrder="stroke"
            stroke="white"
            strokeWidth="3"
          >
            Chillón
          </text>
        </g>

        {/* Mar Mediterráneo / Atlántico (etiquetas tenues) */}
        <text
          x="700"
          y="410"
          fontSize="10"
          fontStyle="italic"
          fontFamily="ui-sans-serif, system-ui, Inter, sans-serif"
          fill="#94a3b8"
          letterSpacing="1"
        >
          Mar Mediterráneo
        </text>
        <text
          x="40"
          y="180"
          fontSize="10"
          fontStyle="italic"
          fontFamily="ui-sans-serif, system-ui, Inter, sans-serif"
          fill="#94a3b8"
          letterSpacing="1"
        >
          Océano Atlántico
        </text>

        {/* Brújula */}
        <g
          transform="translate(755, 50)"
          fontFamily="ui-sans-serif, system-ui, Inter, sans-serif"
          fontWeight="700"
          fontSize="10"
          fill="#64748b"
        >
          <circle r="22" fill="white" stroke="#cbd5e1" strokeWidth="1" />
          <path d="M 0 -16 L -5 0 L 0 -4 L 5 0 Z" fill="#c8102e" />
          <path d="M 0 16 L -5 0 L 0 4 L 5 0 Z" fill="#94a3b8" />
          <text y="-22" textAnchor="middle">N</text>
        </g>
      </svg>

      <div className="absolute bottom-3 left-3 inline-flex items-center gap-2 rounded-md bg-white px-3 py-1.5 text-xs font-semibold text-neutral-800 shadow-sm ring-1 ring-neutral-200">
        <MapPin className="size-3.5 text-brand-red-600" strokeWidth={1.75} />
        Sede: Chillón — Ciudad Real
      </div>
    </div>
  );
}
