import { ImageResponse } from "next/og";

import { OG_CONTENT_TYPE, OG_SIZE, OgTemplate } from "@/components/og-template";
import { getService, services, type ServiceSlug } from "@/lib/services";

export const alt = "Servicio — Pruden e Hijos S.L.";
export const size = OG_SIZE;
export const contentType = OG_CONTENT_TYPE;

export function generateImageMetadata() {
  return services.map((s) => ({
    id: s.slug,
    alt: `${s.title} — Pruden e Hijos S.L.`,
    contentType: OG_CONTENT_TYPE,
    size: OG_SIZE,
  }));
}

export default async function Image({
  params,
}: {
  params: { slug: ServiceSlug };
}) {
  const s = getService(params.slug);
  return new ImageResponse(
    (
      <OgTemplate
        eyebrow="Servicio"
        title={s?.title ?? "Servicios"}
        subtitle={s?.short}
      />
    ),
    { ...size },
  );
}
