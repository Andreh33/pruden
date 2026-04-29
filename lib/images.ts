/**
 * Imágenes de Unsplash usadas como assets temporales hasta que el cliente
 * facilite fotografía profesional propia (ver wishlist §21 del PROMPT).
 *
 * Todas son URLs estables de la CDN images.unsplash.com con tamaño
 * controlado por query string (?w=…). next/image se encarga de servir
 * tamaños responsive.
 */
const UNSPLASH = "https://images.unsplash.com";
const Q = "auto=format&fit=crop&q=80";

export const IMAGES = {
  heroHome: `${UNSPLASH}/photo-1581094794329-c8112a89af12?w=2400&${Q}`,
  empresaHero: `${UNSPLASH}/photo-1429497419816-9ca5cfb4571a?w=2400&${Q}`,
  empresaTeam: `${UNSPLASH}/photo-1503387762-592deb58ef4e?w=1600&${Q}`,
  empresaPreview: `${UNSPLASH}/photo-1556228720-195a672e8a03?w=1600&${Q}`,
  contactoHero: `${UNSPLASH}/photo-1485083269755-a7b559a4fe5e?w=2400&${Q}`,

  serviceMovimientos: `${UNSPLASH}/photo-1581094794329-c8112a89af12?w=1600&${Q}`,
  serviceTransportes: `${UNSPLASH}/photo-1606744824163-985d376605aa?w=1600&${Q}`,
  serviceObras: `${UNSPLASH}/photo-1599707367072-cd6ada2bc375?w=1600&${Q}`,
  serviceAridos: `${UNSPLASH}/photo-1504917595217-d4dc5ebe6122?w=1600&${Q}`,
  serviceBituminosos: `${UNSPLASH}/photo-1572177812156-58036aae439c?w=1600&${Q}`,

  galleryMovimientos: [
    `${UNSPLASH}/photo-1530124566582-a618bc2615dc?w=1200&${Q}`,
    `${UNSPLASH}/photo-1581094271901-8022df4466f9?w=1200&${Q}`,
    `${UNSPLASH}/photo-1581092918056-0c4c3acd3789?w=1200&${Q}`,
  ],
  galleryTransportes: [
    `${UNSPLASH}/photo-1606744824163-985d376605aa?w=1200&${Q}`,
    `${UNSPLASH}/photo-1565008576549-57569a49371d?w=1200&${Q}`,
    `${UNSPLASH}/photo-1485083269755-a7b559a4fe5e?w=1200&${Q}`,
  ],
  galleryObras: [
    `${UNSPLASH}/photo-1599707367072-cd6ada2bc375?w=1200&${Q}`,
    `${UNSPLASH}/photo-1487014679447-9f8336841d58?w=1200&${Q}`,
    `${UNSPLASH}/photo-1541888946425-d81bb19240f5?w=1200&${Q}`,
  ],
  galleryAridos: [
    `${UNSPLASH}/photo-1504917595217-d4dc5ebe6122?w=1200&${Q}`,
    `${UNSPLASH}/photo-1429497419816-9ca5cfb4571a?w=1200&${Q}`,
    `${UNSPLASH}/photo-1556228720-195a672e8a03?w=1200&${Q}`,
  ],
  galleryBituminosos: [
    `${UNSPLASH}/photo-1572177812156-58036aae439c?w=1200&${Q}`,
    `${UNSPLASH}/photo-1486325212027-8081e485255e?w=1200&${Q}`,
    `${UNSPLASH}/photo-1519642918688-7e43b19245d8?w=1200&${Q}`,
  ],
} as const;

export const galleryByService: Record<string, readonly string[]> = {
  "movimientos-de-tierra": IMAGES.galleryMovimientos,
  transportes: IMAGES.galleryTransportes,
  "obras-publicas": IMAGES.galleryObras,
  "suministro-de-aridos": IMAGES.galleryAridos,
  "tratamientos-bituminosos": IMAGES.galleryBituminosos,
};
