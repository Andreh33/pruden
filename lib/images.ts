/**
 * Imágenes de Unsplash usadas como assets temporales hasta que el cliente
 * facilite fotografía profesional propia (ver wishlist §21 del PROMPT).
 *
 * Cada ID está verificado vía búsqueda en la API pública de Unsplash y la
 * descripción `alt` confirmada como maquinaria de obra civil / movimientos
 * de tierra. No se usan IDs sin verificar.
 *
 * Fotógrafos: créditos a sus respectivos autores en unsplash.com/photos/<id>.
 */
const UNSPLASH = "https://images.unsplash.com";
const Q = "auto=format&fit=crop&q=80";

export const IMAGES = {
  // Hero — excavadora Caterpillar trabajando (icono del sector)
  heroHome: `${UNSPLASH}/photo-1503708928676-1cb796a0891e?w=2400&${Q}`,

  // Empresa
  empresaHero: `${UNSPLASH}/photo-1574030801087-fe6e8533b73a?w=2400&${Q}`, // aerial construction vehicles
  empresaTeam: `${UNSPLASH}/photo-1759922378219-1d31edb644f4?w=1600&${Q}`, // worker hard hat
  empresaPreview: `${UNSPLASH}/photo-1771868453049-b7b4a4680b5c?w=1600&${Q}`, // construction workers on site

  // Contacto
  contactoHero: `${UNSPLASH}/photo-1571363604084-c652ecf0a106?w=2400&${Q}`, // highway construction

  // Servicios — imágenes principales (cards + detalle)
  serviceMovimientos: `${UNSPLASH}/photo-1628645419184-26a1f2757340?w=1600&${Q}`, // yellow excavator on rock
  serviceTransportes: `${UNSPLASH}/photo-1723369962510-e1bf627435e2?w=1600&${Q}`, // group of dump trucks parked
  serviceObras: `${UNSPLASH}/photo-1505480883404-46adc470710d?w=1600&${Q}`, // aerial freeway
  serviceAridos: `${UNSPLASH}/photo-1762608674744-b3eb7be7c30b?w=1600&${Q}`, // yellow loader scooping gravel
  serviceBituminosos: `${UNSPLASH}/photo-1772852311587-329719989e2b?w=1600&${Q}`, // asphalt paving machine

  // Galerías por servicio (3 fotos cada una)
  galleryMovimientos: [
    `${UNSPLASH}/photo-1583024011792-b165975b52f5?w=1200&${Q}`, // excavator on brown sand
    `${UNSPLASH}/photo-1649807533255-bbc9c9fb7d77?w=1200&${Q}`, // excavator on dirt field
    `${UNSPLASH}/photo-1652303713917-2666b8bee507?w=1200&${Q}`, // bulldozer in dirt field
  ],
  galleryTransportes: [
    `${UNSPLASH}/photo-1751054793948-eec57770d73f?w=1200&${Q}`, // yellow dump truck hauling dirt
    `${UNSPLASH}/photo-1671022406737-c51dfa332edf?w=1200&${Q}`, // dump truck on dirt road
    `${UNSPLASH}/photo-1671022412547-75c4cb01f47e?w=1200&${Q}`, // dump truck unloading
  ],
  galleryObras: [
    `${UNSPLASH}/photo-1571363604084-c652ecf0a106?w=1200&${Q}`, // highway construction
    `${UNSPLASH}/photo-1603465410243-af3e840367dd?w=1200&${Q}`, // heavy equipment
    `${UNSPLASH}/photo-1574030801087-fe6e8533b73a?w=1200&${Q}`, // aerial construction site
  ],
  galleryAridos: [
    `${UNSPLASH}/photo-1769629918261-92d1fac176cd?w=1200&${Q}`, // loader dumping into truck
    `${UNSPLASH}/photo-1762608674744-b3eb7be7c30b?w=1200&${Q}`, // loader scooping gravel
    `${UNSPLASH}/photo-1629807473015-41699c4471b5?w=1200&${Q}`, // heavy equipment on brown field
  ],
  galleryBituminosos: [
    `${UNSPLASH}/photo-1772852340517-b11ec88979fc?w=1200&${Q}`, // worker operating paving machine
    `${UNSPLASH}/photo-1776381733574-372689e246b4?w=1200&${Q}`, // road roller compacting
    `${UNSPLASH}/photo-1772852327572-d6344152e6ba?w=1200&${Q}`, // steamroller on paved road
  ],
} as const;

export const galleryByService: Record<string, readonly string[]> = {
  "movimientos-de-tierra": IMAGES.galleryMovimientos,
  transportes: IMAGES.galleryTransportes,
  "obras-publicas": IMAGES.galleryObras,
  "suministro-de-aridos": IMAGES.galleryAridos,
  "tratamientos-bituminosos": IMAGES.galleryBituminosos,
};
