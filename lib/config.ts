/**
 * Feature flags. Activar cuando haya material real disponible.
 */
export const FEATURES = {
  testimonials: false,
  projects: false,
  certifications: false,
} as const;

export const SITE = {
  name: "Pruden e Hijos S.L.",
  shortName: "Pruden e Hijos",
  description:
    "Movimientos de tierra, transportes, obras públicas, suministro de áridos y tratamientos bituminosos en Castilla-La Mancha.",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://prudenehijos.es",
  locale: "es-ES",
  address: {
    street: "Calle Capilla, 8",
    postalCode: "13412",
    locality: "Chillón",
    region: "Ciudad Real",
    country: "ES",
    full: "Calle Capilla, 8 — 13412 Chillón (Ciudad Real)",
  },
  phones: ["926 71 13 21", "627 97 62 13", "659 00 44 97"],
  primaryPhone: "926 71 13 21",
  email: "administracion@prudenehijos.es",
  hours: "Lunes a Viernes, 8:00 – 18:00",
  // Coordenadas aproximadas de Chillón (Ciudad Real). Ajustar si el cliente facilita la geolocalización exacta de la sede.
  geo: { latitude: 38.795, longitude: -4.890 },
} as const;

export function telHref(phone: string) {
  return `tel:+34${phone.replace(/\s+/g, "")}`;
}
