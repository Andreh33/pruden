import type { CSSProperties, ReactNode } from "react";

export const OG_SIZE = { width: 1200, height: 630 } as const;
export const OG_CONTENT_TYPE = "image/png";

const COLORS = {
  blue900: "#0B1F3A",
  blue700: "#123A6B",
  blue200: "#B6CFEB",
  red600: "#C8102E",
  white: "#FFFFFF",
} as const;

type Props = {
  eyebrow?: string;
  title: string;
  subtitle?: string;
};

const rootStyle: CSSProperties = {
  width: "100%",
  height: "100%",
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
  padding: "64px 72px",
  background: `linear-gradient(135deg, ${COLORS.blue900} 0%, ${COLORS.blue700} 100%)`,
  color: COLORS.white,
  fontFamily: "Inter, system-ui, sans-serif",
};

const stripeStyle: CSSProperties = {
  position: "absolute",
  inset: 0,
  backgroundImage: `linear-gradient(135deg, transparent 49.5%, rgba(255,255,255,0.05) 49.5%, rgba(255,255,255,0.05) 50.5%, transparent 50.5%)`,
  backgroundSize: "48px 48px",
  display: "flex",
};

export function OgTemplate({ eyebrow, title, subtitle }: Props): ReactNode {
  return (
    <div style={rootStyle}>
      <div style={stripeStyle} />
      <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", position: "relative" }}>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 14,
            color: COLORS.white,
            fontSize: 22,
            fontWeight: 700,
            letterSpacing: 4,
            textTransform: "uppercase",
          }}
        >
          <span
            style={{
              width: 12,
              height: 12,
              background: COLORS.red600,
              display: "flex",
            }}
          />
          Pruden e Hijos
        </div>
        <div
          style={{
            color: COLORS.blue200,
            fontSize: 18,
            fontWeight: 500,
            letterSpacing: 1,
            display: "flex",
          }}
        >
          prudenehijos.es
        </div>
      </div>

      <div style={{ display: "flex", flexDirection: "column", position: "relative" }}>
        {eyebrow ? (
          <div
            style={{
              color: COLORS.red600,
              fontSize: 22,
              fontWeight: 700,
              letterSpacing: 4,
              textTransform: "uppercase",
              marginBottom: 18,
              display: "flex",
            }}
          >
            {eyebrow}
          </div>
        ) : null}
        <div
          style={{
            color: COLORS.white,
            fontSize: 86,
            fontWeight: 800,
            letterSpacing: -2,
            lineHeight: 1.05,
            maxWidth: 980,
            display: "flex",
          }}
        >
          {title}
        </div>
        {subtitle ? (
          <div
            style={{
              color: "rgba(255,255,255,0.85)",
              fontSize: 28,
              fontWeight: 400,
              marginTop: 24,
              maxWidth: 880,
              display: "flex",
            }}
          >
            {subtitle}
          </div>
        ) : null}
      </div>

      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          position: "relative",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 16,
            color: "rgba(255,255,255,0.7)",
            fontSize: 18,
          }}
        >
          <span
            style={{
              width: 48,
              height: 3,
              background: COLORS.red600,
              display: "flex",
            }}
          />
          Movimientos de tierra · Transportes · Obras públicas
        </div>
        <div
          style={{
            display: "flex",
            color: COLORS.blue200,
            fontSize: 18,
            fontWeight: 500,
          }}
        >
          Chillón · Ciudad Real
        </div>
      </div>
    </div>
  );
}
