import { ArrowRight, Mail, MapPin, Phone } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

import { Button } from "@/components/ui/button";
import { SITE, telHref } from "@/lib/config";
import { services } from "@/lib/services";

export function Footer() {
  const year = new Date().getFullYear();
  const mapQuery = encodeURIComponent("Calle Capilla 8 13412 Chillón Ciudad Real");

  return (
    <footer className="mt-20">
      {/* Banda CTA pre-footer */}
      <section className="bg-brand-red-600 py-14">
        <div className="container-prose flex flex-col items-start gap-6 md:flex-row md:items-center md:justify-between">
          <div>
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
              ¿Tienes un proyecto en mente? Hablemos.
            </h2>
            <p className="mt-2 max-w-xl text-white/80">
              Cuéntanos qué necesitas. Te respondemos en menos de 24 horas laborables.
            </p>
          </div>
          <Button asChild variant="outlineLight" size="lg" className="bg-white !text-brand-red-700 hover:bg-transparent hover:!text-white">
            <Link href="/contacto">
              Solicitar presupuesto
              <ArrowRight className="size-4" strokeWidth={2} />
            </Link>
          </Button>
        </div>
      </section>

      {/* Mapa */}
      <section aria-label="Dónde estamos" className="bg-brand-blue-900">
        <div className="container-prose py-8">
          <h3 className="mb-3 text-sm font-semibold uppercase tracking-[0.12em] text-brand-blue-200">
            Dónde estamos
          </h3>
          <div className="overflow-hidden rounded-md border border-white/10">
            <iframe
              title="Ubicación Pruden e Hijos S.L."
              src={`https://www.google.com/maps?q=${mapQuery}&output=embed`}
              width="100%"
              height={320}
              style={{ border: 0 }}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
              className="block w-full"
            />
          </div>
          {/* TODO: para mayor precisión, sustituir por la URL `https://www.google.com/maps/embed?pb=...` que provee Google al pulsar "Compartir > Insertar mapa". */}
        </div>
      </section>

      {/* Footer principal */}
      <section className="bg-brand-blue-900 pb-12 pt-6 text-neutral-300">
        <div className="container-prose grid gap-10 md:grid-cols-2 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <Link href="/" aria-label={`${SITE.name} — Inicio`} className="inline-block bg-white p-3">
              <Image src="/logo.png" alt={SITE.shortName} width={200} height={64} className="h-12 w-auto" />
            </Link>
            <p className="mt-5 max-w-md text-sm leading-relaxed">
              Empresa de movimientos de tierra, excavaciones, transportes, suministro de áridos y
              tratamientos bituminosos. Ingeniería técnica al servicio de la obra civil.
            </p>
          </div>

          <div className="lg:col-span-3">
            <h4 className="mb-4 text-sm font-semibold uppercase tracking-[0.12em] text-white">
              Contáctanos
            </h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-2.5">
                <MapPin className="mt-0.5 size-4 shrink-0 text-brand-red-600" strokeWidth={1.75} />
                <span>{SITE.address.full}</span>
              </li>
              {SITE.phones.map((p) => (
                <li key={p}>
                  <a href={telHref(p)} className="inline-flex items-center gap-2.5 transition-colors hover:text-white">
                    <Phone className="size-4 text-brand-red-600" strokeWidth={1.75} />
                    {p}
                  </a>
                </li>
              ))}
              <li>
                <a href={`mailto:${SITE.email}`} className="inline-flex items-center gap-2.5 break-all transition-colors hover:text-white">
                  <Mail className="size-4 text-brand-red-600" strokeWidth={1.75} />
                  {SITE.email}
                </a>
              </li>
            </ul>
          </div>

          <div className="lg:col-span-2">
            <h4 className="mb-4 text-sm font-semibold uppercase tracking-[0.12em] text-white">
              Servicios
            </h4>
            <ul className="space-y-2 text-sm">
              {services.map((s) => (
                <li key={s.slug}>
                  <Link href={`/servicios/${s.slug}`} className="transition-colors hover:text-white">
                    {s.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-2">
            <h4 className="mb-4 text-sm font-semibold uppercase tracking-[0.12em] text-white">
              Información
            </h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="/" className="transition-colors hover:text-white">Inicio</Link></li>
              <li><Link href="/empresa" className="transition-colors hover:text-white">Empresa</Link></li>
              <li><Link href="/contacto" className="transition-colors hover:text-white">Contacto</Link></li>
              <li><Link href="/aviso-legal" className="transition-colors hover:text-white">Aviso legal</Link></li>
              <li><Link href="/politica-de-privacidad" className="transition-colors hover:text-white">Privacidad</Link></li>
              <li><Link href="/politica-de-cookies" className="transition-colors hover:text-white">Cookies</Link></li>
              <li><Link href="/mapa-del-sitio" className="transition-colors hover:text-white">Mapa del sitio</Link></li>
            </ul>
          </div>
        </div>

        {/* TODO: añadir certificaciones (ISO 9001, 14001, 45001, REA) y logos de financiación UE Next Generation cuando el cliente los facilite. Guardar PNG en `public/financiacion/`. */}
      </section>

      {/* Bottom bar */}
      <section className="bg-[#06121f] py-4 text-[13px] text-neutral-400">
        <div className="container-prose flex flex-col items-center justify-between gap-2 sm:flex-row">
          <p>
            © {year} {SITE.name} — Todos los derechos reservados.
          </p>
          <div className="flex items-center gap-4">
            <Link href="/aviso-legal" className="transition-colors hover:text-white">Aviso legal</Link>
            <span aria-hidden>·</span>
            <Link href="/politica-de-privacidad" className="transition-colors hover:text-white">Privacidad</Link>
            <span aria-hidden>·</span>
            <Link href="/politica-de-cookies" className="transition-colors hover:text-white">Cookies</Link>
          </div>
        </div>
      </section>
    </footer>
  );
}
