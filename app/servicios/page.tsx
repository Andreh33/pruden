import { ArrowRight } from "lucide-react";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

import { Reveal } from "@/components/reveal";
import { services } from "@/lib/services";

export const metadata: Metadata = {
  title: "Servicios",
  description:
    "Movimientos de tierra, transportes, obras públicas, suministro de áridos y tratamientos bituminosos.",
};

export default function ServiciosPage() {
  return (
    <section className="container-prose py-20 md:py-28">
      <p className="text-[12px] font-semibold uppercase tracking-[0.2em] text-brand-red-600">
        Servicios
      </p>
      <h1 className="h2-rule mt-2 text-4xl font-bold tracking-tight md:text-5xl">
        Soluciones integrales para obra civil
      </h1>
      <p className="mt-5 max-w-2xl text-lg text-neutral-600">
        Cinco áreas especializadas con maquinaria propia, equipo técnico cualificado y
        experiencia contrastada.
      </p>

      <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {services.map((s, i) => {
          const Icon = s.icon;
          return (
            <Reveal key={s.slug} delay={i * 0.06}>
              <Link
                href={`/servicios/${s.slug}`}
                className="group relative flex h-full flex-col overflow-hidden rounded-md border border-neutral-200 bg-white transition-[transform,border-color,box-shadow] duration-200 ease-out hover:-translate-y-0.5 hover:border-brand-blue-700 hover:shadow-md"
              >
                <span
                  aria-hidden
                  className="absolute inset-x-0 top-0 h-[3px] origin-center scale-x-0 bg-brand-red-600 transition-transform duration-300 ease-out group-hover:scale-x-100"
                />
                <div className="relative aspect-[4/3] overflow-hidden bg-neutral-100">
                  <Image
                    src={s.image}
                    alt={s.title}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover saturate-[0.9] transition-transform duration-700 ease-out group-hover:scale-[1.04]"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-brand-blue-900/40 to-transparent" />
                  <div className="absolute left-4 top-4 inline-flex size-10 items-center justify-center rounded-md bg-white/95 text-brand-blue-700 shadow-sm">
                    <Icon className="size-5" strokeWidth={1.75} />
                  </div>
                </div>
                <div className="flex flex-1 flex-col p-6">
                  <h2 className="text-lg font-semibold tracking-tight text-neutral-900">
                    {s.title}
                  </h2>
                  <p className="mt-2 flex-1 text-sm leading-relaxed text-neutral-600">
                    {s.short}
                  </p>
                  <span className="mt-5 inline-flex items-center gap-1 text-sm font-semibold text-brand-blue-700">
                    Ver detalle
                    <ArrowRight
                      className="size-4 transition-transform duration-200 ease-out group-hover:translate-x-1"
                      strokeWidth={2}
                    />
                  </span>
                </div>
              </Link>
            </Reveal>
          );
        })}
      </div>
    </section>
  );
}
