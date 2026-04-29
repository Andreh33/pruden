# Pruden e Hijos S.L. — Web corporativa

Sitio corporativo de **Pruden e Hijos S.L.** (movimientos de tierra, transportes, obras públicas,
suministro de áridos y tratamientos bituminosos). Sustituye la web actual en
[prudenehijos.es](https://prudenehijos.es/).

> 📌 **Documento autoritativo del proyecto:** `PROMPT.md` (paleta, tipografía, animaciones, copy
> textual, secciones, micro-interacciones). Cualquier discrepancia entre ese documento y este
> README se resuelve a favor de `PROMPT.md`.

---

## Stack

- **Next.js 16** (App Router, Turbopack) + **React 19** + **TypeScript** strict
- **Tailwind CSS v4** con tokens CSS de marca
- **shadcn-style primitives** hand-rolled en `components/ui/` (button, card, input, textarea, label)
- **lucide-react** para iconos (stroke 1.75)
- **Drizzle ORM** + **@libsql/client** (Turso)
- **Zod** + **react-hook-form** para formularios
- **Framer Motion** (solo animaciones sobrias del catálogo §2.5/§15 del prompt)
- **sonner** para toasts
- Pendiente: **Resend** para notificaciones de formulario

## Comandos

```bash
pnpm dev          # servidor de desarrollo
pnpm build        # build de producción
pnpm start        # servir build local
pnpm lint         # ESLint
pnpm format       # Prettier
pnpm db:generate  # genera migraciones Drizzle a partir del schema
pnpm db:push      # aplica el schema a la base de datos Turso
pnpm db:studio    # abre Drizzle Studio
```

## Variables de entorno

Copia `.env.example` a `.env.local` y rellena los valores:

```bash
cp .env.example .env.local
```

| Variable                | Obligatoria | Descripción                                              |
| ----------------------- | ----------- | -------------------------------------------------------- |
| `TURSO_DATABASE_URL`    | sí          | URL de la base de datos libSQL en Turso                  |
| `TURSO_AUTH_TOKEN`      | sí          | Token de autenticación de Turso                          |
| `RESEND_API_KEY`        | no          | Si está vacía, el formulario solo guarda en BD           |
| `CONTACT_EMAIL_TO`      | sí¹         | Destino de las notificaciones de formulario              |
| `CONTACT_EMAIL_FROM`    | sí¹         | Remitente verificado en Resend                           |
| `NEXT_PUBLIC_SITE_URL`  | sí          | URL canónica del sitio (afecta a `metadataBase`/sitemap) |

> ¹ Solo si `RESEND_API_KEY` está definido.

**Crear la base de datos en Turso:**

```bash
turso db create pruden
turso db tokens create pruden        # → TURSO_AUTH_TOKEN
turso db show pruden --url           # → TURSO_DATABASE_URL
pnpm db:push                         # aplica el schema a la BD
```

## Estructura

```
app/
  layout.tsx           # Inter font + metadata + JSON-LD LocalBusiness + Toaster
  page.tsx             # Home (hero + servicios preview)
  empresa/             # Stub
  servicios/           # Listado + detalle por slug
  contacto/            # Stub (formulario en próxima entrega)
  aviso-legal/         # Borrador legal (revisar con asesor)
  politica-de-privacidad/
  politica-de-cookies/
  mapa-del-sitio/
  not-found.tsx        # 404 personalizado
  sitemap.ts
  robots.ts
components/
  layout/              # Header (sticky shrink + mega menú + sheet móvil), Footer (CTA + mapa + 4 cols), Top utility bar
  ui/                  # button, card, input, textarea, label
  cookie-banner.tsx
  reveal.tsx           # wrapper reveal-on-scroll, respeta prefers-reduced-motion
db/
  schema.ts            # contact_messages
  index.ts             # cliente Drizzle/Turso (lazy)
hooks/
  use-scrolled.ts
lib/
  config.ts            # SITE, FEATURES, telHref()
  services.ts          # 5 servicios con icono lucide
  utils.ts             # cn()
public/
  logo.png
  images/placeholder.svg
```

## Estado actual

### ✅ Completado

- Scaffold Next 16 + TS strict + Tailwind v4 + ESLint + Prettier
- Tokens CSS de marca (paleta azul/rojo, tipografía fluida, reduced-motion global)
- Inter via `next/font`
- Drizzle + Turso configurado (cliente lazy, schema `contact_messages`)
- UI primitives: Button (5 variantes), Card, Input, Textarea, Label, Checkbox, Accordion
- Layout global:
  - Top utility bar (desktop)
  - Header sticky con shrink, mega menú de Servicios (5 items + featured), sheet móvil
  - Footer con banda CTA roja, iframe Google Maps, 4 columnas, bottom bar
  - Banner de cookies con persistencia en `localStorage`
  - `<Reveal>` wrapper Framer Motion (respeta `prefers-reduced-motion`)
- **Home (8 secciones según §19):** hero · stats animados (contadores) · grid de servicios · preview empresa · timeline 6 pasos · razones (7) · cobertura con mapa SVG · CTA con formulario embebido
- **Empresa** (§5.2 íntegro): hero con breadcrumb, bloque “Pruden e Hijos” en 2 cols, “Nuestro día a día”, Misión/Visión/Valores con 6 valores numerados, frase destacada, razones
- **Servicios:**
  - `/servicios` listado con 5 cards animadas
  - `/servicios/[slug]` × 5 detalle completo: hero con breadcrumb, intro + imagen, subservicios con icono y bullets, cierre, galería 3 fotos, FAQ accordion (3-6 por servicio), CTA, otros servicios, razones
- **Contacto** (§5.9): formulario con react-hook-form + Zod, honeypot, rate-limit por IP (1/min), Server Action que persiste en Turso e integra Resend si está configurado · página `/contacto/gracias`
- **Legales:** aviso legal, privacidad y cookies (borradores marcados para revisión jurídica)
- **404 personalizada**, mapa-del-sitio
- **SEO:** metadata por página, JSON-LD `LocalBusiness`, `sitemap.ts`, `robots.ts`
- Build ✓ · Lint ✓ · 19 rutas estáticas

### 🚧 Próximas entregas

1. **OG images dinámicas** con `next/og` (logo + título sobre fondo azul corporativo).
2. **Imágenes reales** del cliente — sustituir `placeholder.svg` (ver wishlist §21 del PROMPT).
3. **Logos de certificaciones** (ISO 9001/14001/45001, REA) y financiación UE Next Generation cuando los facilite el cliente — flag `FEATURES.certifications`.
4. **Proyectos destacados** (`/proyectos`) — flag `FEATURES.projects`. Estructura preparada en `lib/config.ts`; pendiente material del cliente.
5. **Testimonios** — flag `FEATURES.testimonials`. Componente carrusel pendiente; activar cuando haya testimonios reales.
6. **Confirmar cifras** de los stats animados (`lib/stats.ts`).

### 📋 Pendiente del cliente

- Confirmar y enviar credenciales **Turso** (`TURSO_DATABASE_URL`, `TURSO_AUTH_TOKEN`).
- Decidir si activar **Resend** desde el inicio.
- Facilitar **fotografías profesionales** (idealmente sesión con dron — ver §21).
- Confirmar **certificaciones reales** (ISO 9001/14001/45001, REA) y enviar logos.
- Confirmar **cifras** para los contadores (años, proyectos, m³, maquinaria).
- Revisión jurídica de **aviso legal**, **privacidad** y **cookies** con asesor RGPD/LOPDGDD.

## Despliegue

Repo: **https://github.com/Andreh33/pruden.git** · rama `main`.

Vercel (preset Next.js auto). Configurar las mismas variables de entorno en Production y Preview.

## Reglas de oro para próximas sesiones

1. Releer `PROMPT.md` y este `README.md` al inicio de cada sesión.
2. Antes de instalar una librería que no esté en §3 del prompt, **preguntar**.
3. Antes de añadir animaciones que no estén en §15, **preguntar**.
4. Nunca commitear `.env.local` ni tokens.
5. Nunca usar imágenes con copyright ajeno.
6. Si una sección queda sin contenido, dejar `{/* TODO: contenido pendiente del cliente */}` —
   no inventar.
