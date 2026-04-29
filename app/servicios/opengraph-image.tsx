import { ImageResponse } from "next/og";

import { OG_CONTENT_TYPE, OG_SIZE, OgTemplate } from "@/components/og-template";

export const alt = "Servicios — Pruden e Hijos S.L.";
export const size = OG_SIZE;
export const contentType = OG_CONTENT_TYPE;

export default async function Image() {
  return new ImageResponse(
    (
      <OgTemplate
        eyebrow="Servicios"
        title="Soluciones integrales para obra civil"
        subtitle="Movimientos de tierra · Transportes · Obras públicas · Áridos · Bituminosos."
      />
    ),
    { ...size },
  );
}
