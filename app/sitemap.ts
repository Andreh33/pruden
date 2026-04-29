import type { MetadataRoute } from "next";

import { SITE } from "@/lib/config";
import { services } from "@/lib/services";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const base = SITE.url;

  const routes: MetadataRoute.Sitemap = [
    { url: `${base}/`, lastModified: now, changeFrequency: "monthly", priority: 1 },
    { url: `${base}/empresa`, lastModified: now, changeFrequency: "yearly", priority: 0.8 },
    { url: `${base}/servicios`, lastModified: now, changeFrequency: "monthly", priority: 0.9 },
    { url: `${base}/contacto`, lastModified: now, changeFrequency: "yearly", priority: 0.8 },
    { url: `${base}/mapa-del-sitio`, lastModified: now, changeFrequency: "yearly", priority: 0.3 },
    { url: `${base}/aviso-legal`, lastModified: now, changeFrequency: "yearly", priority: 0.2 },
    { url: `${base}/politica-de-privacidad`, lastModified: now, changeFrequency: "yearly", priority: 0.2 },
    { url: `${base}/politica-de-cookies`, lastModified: now, changeFrequency: "yearly", priority: 0.2 },
  ];

  for (const s of services) {
    routes.push({
      url: `${base}/servicios/${s.slug}`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.7,
    });
  }

  return routes;
}
