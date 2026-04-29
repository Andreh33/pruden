import { ArrowRight } from "lucide-react";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

import { BreadcrumbsJsonLd, ServiceJsonLd } from "@/components/jsonld";
import { ScrollProgress } from "@/components/scroll-progress";
import { Reveal } from "@/components/reveal";
import { ReasonsGrid } from "@/components/sections/reasons-grid";
import { Accordion, AccordionItem } from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { SITE } from "@/lib/config";
import { galleryByService } from "@/lib/images";
import { serviceDetails } from "@/lib/service-detail";
import { getService, services, type ServiceSlug } from "@/lib/services";

type Params = { slug: ServiceSlug };

export function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<Params>;
}): Promise<Metadata> {
  const { slug } = await params;
  const s = getService(slug);
  if (!s) return {};
  return {
    title: s.title,
    description: s.short,
    alternates: { canonical: `/servicios/${slug}` },
  };
}

export default async function ServicioDetallePage({
  params,
}: {
  params: Promise<Params>;
}) {
  const { slug } = await params;
  const s = getService(slug);
  if (!s) notFound();

  const detail = serviceDetails[slug];
  const otros = services.filter((o) => o.slug !== slug).slice(0, 3);
  const gallery = galleryByService[slug] ?? [];

  return (
    <>
      <ScrollProgress />
      <BreadcrumbsJsonLd
        items={[
          { name: "Inicio", href: "/" },
          { name: "Servicios", href: "/servicios" },
          { name: s.title, href: `/servicios/${slug}` },
        ]}
      />
      <ServiceJsonLd
        name={s.title}
        description={s.short}
        url={`${SITE.url}/servicios/${slug}`}
      />
      {/* Hero */}
      <section className="relative isolate overflow-hidden bg-brand-blue-900 text-white">
        <div className="absolute inset-0 -z-10">
          <Image
            src={s.image}
            alt=""
            fill
            sizes="100vw"
            className="object-cover opacity-35"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-brand-blue-900/85 via-brand-blue-900/70 to-brand-blue-900/40" />
        </div>
        <div className="container-prose py-24 md:py-32">
          <Reveal>
            <nav aria-label="Migas de pan" className="text-[13px] text-white/70">
              <Link href="/" className="hover:text-white">
                Inicio
              </Link>
              <span aria-hidden className="mx-2">»</span>
              <Link href="/servicios" className="hover:text-white">
                Servicios
              </Link>
              <span aria-hidden className="mx-2">»</span>
              <span className="text-white">{s.title}</span>
            </nav>
          </Reveal>
          <Reveal delay={0.05}>
            <h1
              className="mt-4 max-w-3xl font-bold tracking-tight"
              style={{ fontSize: "var(--font-size-hero)", lineHeight: 1.05 }}
            >
              {detail.hero.h1}
            </h1>
          </Reveal>
          {detail.hero.subtitle ? (
            <Reveal delay={0.1}>
              <p
                className="mt-5 max-w-2xl text-white/85"
                style={{ fontSize: "var(--font-size-lead)" }}
              >
                {detail.hero.subtitle}
              </p>
            </Reveal>
          ) : null}
        </div>
      </section>

      {/* Intro */}
      <section className="bg-white py-20 md:py-28">
        <div className="container-prose grid gap-10 lg:grid-cols-12">
          <Reveal className="lg:col-span-7">
            <p className="text-[12px] font-semibold uppercase tracking-[0.2em] text-brand-red-600">
              Servicio
            </p>
            <h2 className="h2-rule mt-2" style={{ fontSize: "var(--font-size-h2)" }}>
              {s.title}
            </h2>
            <p className="mt-6 text-[17px] leading-relaxed text-neutral-700">{s.intro}</p>
          </Reveal>
          <Reveal className="lg:col-span-5" direction="right">
            <div className="relative aspect-[4/3] overflow-hidden rounded-md border border-neutral-200 bg-neutral-100">
              <Image
                src={s.image}
                alt={`${s.title} — imagen ilustrativa`}
                fill
                sizes="(max-width: 1024px) 100vw, 40vw"
                className="object-cover"
              />
            </div>
          </Reveal>
        </div>
      </section>

      {/* Subservicios */}
      <section className="bg-neutral-50 py-20 md:py-28">
        <div className="container-prose">
          <Reveal>
            <p className="text-[12px] font-semibold uppercase tracking-[0.2em] text-brand-red-600">
              Qué incluye
            </p>
            <h2 className="h2-rule mt-2" style={{ fontSize: "var(--font-size-h2)" }}>
              Servicios especializados
            </h2>
          </Reveal>

          <div className="mt-12 grid gap-6 md:grid-cols-2">
            {detail.subservices.map((sub, i) => {
              const Icon = sub.icon;
              return (
                <Reveal key={sub.title} delay={i * 0.05}>
                  <article className="flex h-full gap-5 rounded-md border border-neutral-200 bg-white p-6 shadow-sm transition-[transform,border-color,box-shadow] duration-200 ease-out hover:-translate-y-0.5 hover:border-brand-blue-700 hover:shadow-md">
                    <span className="inline-flex size-12 shrink-0 items-center justify-center rounded-md bg-brand-blue-50 text-brand-blue-700">
                      <Icon className="size-5" strokeWidth={1.75} />
                    </span>
                    <div>
                      <h3 className="text-[17px] font-semibold tracking-tight text-neutral-900">
                        {sub.title}
                      </h3>
                      <p className="mt-2 text-[15px] leading-relaxed text-neutral-600">
                        {sub.description}
                      </p>
                      {sub.bullets ? (
                        <ul className="mt-3 grid gap-1.5 text-[14px] text-neutral-700 sm:grid-cols-2">
                          {sub.bullets.map((b) => (
                            <li key={b} className="flex items-start gap-2">
                              <span
                                aria-hidden
                                className="mt-2 size-1.5 shrink-0 rounded-full bg-brand-red-600"
                              />
                              {b}
                            </li>
                          ))}
                        </ul>
                      ) : null}
                    </div>
                  </article>
                </Reveal>
              );
            })}
          </div>

          {detail.closing ? (
            <Reveal>
              <p className="mt-12 max-w-3xl text-[17px] leading-relaxed text-neutral-700">
                {detail.closing}
              </p>
            </Reveal>
          ) : null}
        </div>
      </section>

      {/* Galería */}
      <section className="bg-white py-20 md:py-28">
        <div className="container-prose">
          <Reveal>
            <p className="text-[12px] font-semibold uppercase tracking-[0.2em] text-brand-red-600">
              Galería
            </p>
            <h2 className="h2-rule mt-2" style={{ fontSize: "var(--font-size-h2)" }}>
              Trabajos relacionados
            </h2>
            {/* TODO: sustituir placeholders por fotos reales del cliente — ver §21 wishlist. */}
          </Reveal>

          <div className="mt-10 grid gap-4 md:grid-cols-3">
            {detail.galleryAlt.map((alt, i) => (
              <Reveal key={alt} delay={i * 0.06}>
                <div className="relative aspect-[4/3] overflow-hidden rounded-md border border-neutral-200 bg-neutral-100">
                  <Image
                    src={gallery[i] ?? s.image}
                    alt={alt}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover saturate-[0.9] transition-transform duration-700 ease-out hover:scale-[1.04]"
                  />
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-neutral-50 py-20 md:py-28">
        <div className="container-prose grid gap-12 lg:grid-cols-12">
          <Reveal className="lg:col-span-4">
            <p className="text-[12px] font-semibold uppercase tracking-[0.2em] text-brand-red-600">
              Preguntas frecuentes
            </p>
            <h2 className="h2-rule mt-2" style={{ fontSize: "var(--font-size-h2)" }}>
              Aclaramos tus dudas
            </h2>
            <p className="mt-5 text-neutral-600">
              ¿No encuentras lo que buscas? Llámanos o escríbenos y te respondemos en menos de
              24 horas laborables.
            </p>
            <div className="mt-7">
              <Button asChild>
                <Link href="/contacto">
                  Contactar
                  <ArrowRight className="size-4" strokeWidth={2} />
                </Link>
              </Button>
            </div>
          </Reveal>

          <Reveal className="lg:col-span-8" direction="right">
            <Accordion type="single" defaultValue={`${slug}-0`}>
              {detail.faqs.map((f, i) => (
                <AccordionItem key={f.q} value={`${slug}-${i}`} question={f.q}>
                  {f.a}
                </AccordionItem>
              ))}
            </Accordion>
          </Reveal>
        </div>
      </section>

      {/* CTA final */}
      <section className="bg-brand-blue-900 py-20 text-white md:py-24">
        <div className="container-prose flex flex-col items-start gap-6 md:flex-row md:items-center md:justify-between">
          <div>
            <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
              ¿Tienes un proyecto similar?
            </h2>
            <p className="mt-2 max-w-xl text-white/80">
              Cuéntanos los detalles y te enviamos un presupuesto sin compromiso.
            </p>
          </div>
          <Button asChild size="lg">
            <Link href="/contacto">
              Solicitar presupuesto
              <ArrowRight className="size-4" strokeWidth={2} />
            </Link>
          </Button>
        </div>
      </section>

      {/* Otros servicios */}
      <section className="bg-white py-20 md:py-28">
        <div className="container-prose">
          <Reveal>
            <p className="text-[12px] font-semibold uppercase tracking-[0.2em] text-brand-red-600">
              Otros servicios
            </p>
            <h2 className="h2-rule mt-2" style={{ fontSize: "var(--font-size-h2)" }}>
              También trabajamos en
            </h2>
          </Reveal>

          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {otros.map((o, i) => {
              const Icon = o.icon;
              return (
                <Reveal key={o.slug} delay={i * 0.06}>
                  <Link
                    href={`/servicios/${o.slug}`}
                    className="group relative flex h-full flex-col overflow-hidden rounded-md border border-neutral-200 bg-white transition-[transform,border-color,box-shadow] duration-200 ease-out hover:-translate-y-0.5 hover:border-brand-blue-700 hover:shadow-md"
                  >
                    <span
                      aria-hidden
                      className="absolute inset-x-0 top-0 h-[3px] origin-center scale-x-0 bg-brand-red-600 transition-transform duration-300 ease-out group-hover:scale-x-100"
                    />
                    <div className="relative aspect-[4/3] overflow-hidden bg-neutral-100">
                      <Image
                        src={o.image}
                        alt={o.title}
                        fill
                        sizes="(max-width: 768px) 100vw, 33vw"
                        className="object-cover saturate-[0.9] transition-transform duration-700 ease-out group-hover:scale-[1.04]"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-brand-blue-900/40 to-transparent" />
                      <div className="absolute left-4 top-4 inline-flex size-10 items-center justify-center rounded-md bg-white/95 text-brand-blue-700 shadow-sm">
                        <Icon className="size-5" strokeWidth={1.75} />
                      </div>
                    </div>
                    <div className="flex flex-1 flex-col p-6">
                      <h3 className="text-lg font-semibold tracking-tight text-neutral-900">
                        {o.title}
                      </h3>
                      <p className="mt-2 flex-1 text-sm leading-relaxed text-neutral-600">
                        {o.short}
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
        </div>
      </section>

      {/* Razones, compactas */}
      <ReasonsGrid variant="muted" />
    </>
  );
}
