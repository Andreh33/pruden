import { ImageResponse } from "next/og";

import { OG_CONTENT_TYPE, OG_SIZE, OgTemplate } from "@/components/og-template";

export const alt = "Pruden e Hijos S.L. — Movimientos de tierra y transportes";
export const size = OG_SIZE;
export const contentType = OG_CONTENT_TYPE;

export default async function Image() {
  return new ImageResponse(
    (
      <OgTemplate
        eyebrow="Pruden e Hijos"
        title="Movimientos de tierra y transportes"
        subtitle="Construyendo el futuro proyecto a proyecto."
      />
    ),
    { ...size },
  );
}
