import { ImageResponse } from "next/og";

import { OG_CONTENT_TYPE, OG_SIZE, OgTemplate } from "@/components/og-template";

export const alt = "Contacto — Pruden e Hijos S.L.";
export const size = OG_SIZE;
export const contentType = OG_CONTENT_TYPE;

export default async function Image() {
  return new ImageResponse(
    (
      <OgTemplate
        eyebrow="Contacto"
        title="Estamos a tu disposición"
        subtitle="Te respondemos en menos de 24 horas laborables."
      />
    ),
    { ...size },
  );
}
