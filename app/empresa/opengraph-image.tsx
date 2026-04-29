import { ImageResponse } from "next/og";

import { OG_CONTENT_TYPE, OG_SIZE, OgTemplate } from "@/components/og-template";

export const alt = "Empresa — Pruden e Hijos S.L.";
export const size = OG_SIZE;
export const contentType = OG_CONTENT_TYPE;

export default async function Image() {
  return new ImageResponse(
    (
      <OgTemplate
        eyebrow="Empresa"
        title="Quiénes somos"
        subtitle="Construyendo el futuro, proyecto a proyecto."
      />
    ),
    { ...size },
  );
}
