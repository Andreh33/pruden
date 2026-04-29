import type { Metadata } from "next";
import Link from "next/link";

import { services } from "@/lib/services";

export const metadata: Metadata = {
  title: "Mapa del sitio",
  description: "Listado de páginas de la web de Pruden e Hijos S.L.",
};

export default function MapaDelSitioPage() {
  return (
    <section className="container-prose py-20 md:py-28">
      <h1 className="h2-rule text-4xl font-bold tracking-tight">Mapa del sitio</h1>
      <div className="mt-10 grid gap-10 md:grid-cols-3">
        <div>
          <h2 className="text-sm font-semibold uppercase tracking-[0.12em] text-brand-blue-700">
            Principal
          </h2>
          <ul className="mt-3 space-y-2 text-neutral-700">
            <li><Link href="/" className="hover:text-brand-blue-700">Inicio</Link></li>
            <li><Link href="/empresa" className="hover:text-brand-blue-700">Empresa</Link></li>
            <li><Link href="/contacto" className="hover:text-brand-blue-700">Contacto</Link></li>
          </ul>
        </div>
        <div>
          <h2 className="text-sm font-semibold uppercase tracking-[0.12em] text-brand-blue-700">
            Servicios
          </h2>
          <ul className="mt-3 space-y-2 text-neutral-700">
            <li><Link href="/servicios" className="hover:text-brand-blue-700">Todos los servicios</Link></li>
            {services.map((s) => (
              <li key={s.slug}>
                <Link href={`/servicios/${s.slug}`} className="hover:text-brand-blue-700">
                  {s.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h2 className="text-sm font-semibold uppercase tracking-[0.12em] text-brand-blue-700">
            Legal
          </h2>
          <ul className="mt-3 space-y-2 text-neutral-700">
            <li><Link href="/aviso-legal" className="hover:text-brand-blue-700">Aviso legal</Link></li>
            <li><Link href="/politica-de-privacidad" className="hover:text-brand-blue-700">Política de privacidad</Link></li>
            <li><Link href="/politica-de-cookies" className="hover:text-brand-blue-700">Política de cookies</Link></li>
          </ul>
        </div>
      </div>
    </section>
  );
}
