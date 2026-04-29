import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

import { Reveal } from "@/components/reveal";
import { CoverageArea } from "@/components/sections/coverage-area";
import { CtaFormBand } from "@/components/sections/cta-form-band";
import { ProcessTimeline } from "@/components/sections/process-timeline";
import { ReasonsGrid } from "@/components/sections/reasons-grid";
import { StatsBand } from "@/components/sections/stats-band";
import { Button } from "@/components/ui/button";
import { services } from "@/lib/services";

export default function HomePage() {
  return (
    <>
      {/* 1 · Hero */}
      <section className="relative isolate overflow-hidden bg-brand-blue-900 text-white">
        <div className="absolute inset-0 -z-10">
          <Image
            src="/images/placeholder.svg"
            alt=""
            fill
            priority
            sizes="100vw"
            className="object-cover opacity-40"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-brand-blue-900/85 via-brand-blue-900/70 to-brand-blue-900/45" />
        </div>

        <div className="container-prose flex min-h-[78vh] flex-col justify-center py-24 lg:py-36">
          <Reveal>
            <p className="mb-4 text-[12px] font-semibold uppercase tracking-[0.2em] text-brand-blue-200">
              Pruden e Hijos
            </p>
          </Reveal>
          <Reveal delay={0.05}>
            <h1
              className="max-w-3xl font-bold tracking-tight"
              style={{ fontSize: "var(--font-size-hero)", lineHeight: 1.05 }}
            >
              Movimientos de tierra y transportes
            </h1>
          </Reveal>
          <Reveal delay={0.12}>
            <p
              className="mt-5 max-w-2xl text-white/85"
              style={{ fontSize: "var(--font-size-lead)" }}
            >
              Construyendo el futuro proyecto a proyecto.
            </p>
          </Reveal>
          <Reveal delay={0.2}>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <Button asChild size="lg">
                <Link href="/contacto">
                  Solicitar presupuesto
                  <ArrowRight className="size-4" strokeWidth={2} />
                </Link>
              </Button>
              <Button asChild variant="outlineLight" size="lg">
                <Link href="/empresa">Conocer la empresa</Link>
              </Button>
            </div>
          </Reveal>
        </div>
      </section>

      {/* 2 · Stats */}
      <StatsBand />

      {/* 3 · Servicios */}
      <section className="bg-white py-20 md:py-28">
        <div className="container-prose">
          <Reveal>
            <p className="text-[12px] font-semibold uppercase tracking-[0.2em] text-brand-red-600">
              Lo que hacemos
            </p>
            <h2 className="h2-rule mt-2" style={{ fontSize: "var(--font-size-h2)" }}>
              Servicios integrales para obra civil
            </h2>
            <p
              className="mt-5 max-w-2xl text-neutral-600"
              style={{ fontSize: "var(--font-size-lead)" }}
            >
              Cinco áreas especializadas con maquinaria propia, equipo técnico cualificado y
              experiencia contrastada en obra civil.
            </p>
          </Reveal>

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
                      <h3 className="text-lg font-semibold tracking-tight text-neutral-900">
                        {s.title}
                      </h3>
                      <p className="mt-2 flex-1 text-sm leading-relaxed text-neutral-600">
                        {s.short}
                      </p>
                      <span className="mt-5 inline-flex items-center gap-1 text-sm font-semibold text-brand-blue-700">
                        Ver más
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
        </div>
      </section>

      {/* 4 · Empresa preview */}
      <section className="bg-neutral-50 py-20 md:py-28">
        <div className="container-prose grid items-center gap-12 lg:grid-cols-12">
          <Reveal className="lg:col-span-5" direction="left">
            <div className="relative aspect-[4/5] overflow-hidden rounded-md border border-neutral-200 bg-neutral-100">
              <Image
                src="/images/placeholder.svg"
                alt="Equipo de Pruden e Hijos en obra"
                fill
                sizes="(max-width: 1024px) 100vw, 40vw"
                className="object-cover"
              />
            </div>
          </Reveal>
          <Reveal className="lg:col-span-7" direction="right">
            <p className="text-[12px] font-semibold uppercase tracking-[0.2em] text-brand-red-600">
              Sobre nosotros
            </p>
            <h2 className="h2-rule mt-2" style={{ fontSize: "var(--font-size-h2)" }}>
              Una empresa familiar consolidada en obra civil
            </h2>
            <p className="mt-5 text-[17px] leading-relaxed text-neutral-700">
              En Pruden e Hijos S.L. nos enorgullece ser un referente en el sector de los
              movimientos de tierra. Combinamos experiencia, maquinaria propia y un equipo
              técnico cualificado para acometer proyectos de cualquier envergadura con
              eficiencia y seguridad.
            </p>
            <p className="mt-4 text-[17px] leading-relaxed text-neutral-700">
              Trabajamos para empresas constructoras, industria, administraciones públicas y
              particulares, siempre con el mismo enfoque: trato directo, soluciones
              personalizadas y compromiso con la calidad.
            </p>
            <div className="mt-8">
              <Button asChild>
                <Link href="/empresa">
                  Conocer la empresa
                  <ArrowRight className="size-4" strokeWidth={2} />
                </Link>
              </Button>
            </div>
          </Reveal>
        </div>
      </section>

      {/* 5 · Proceso de trabajo */}
      <ProcessTimeline />

      {/* 6 · Razones */}
      <ReasonsGrid />

      {/* 7 · Cobertura */}
      <CoverageArea />

      {/* 8 · CTA con formulario */}
      <CtaFormBand />
    </>
  );
}
