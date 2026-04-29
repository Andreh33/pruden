import { ArrowRight, Compass, Heart, Target } from "lucide-react";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

import { BreadcrumbsJsonLd } from "@/components/jsonld";
import { ScrollProgress } from "@/components/scroll-progress";
import { ReasonsGrid } from "@/components/sections/reasons-grid";
import { Reveal } from "@/components/reveal";
import { Button } from "@/components/ui/button";
import { IMAGES } from "@/lib/images";

export const metadata: Metadata = {
  title: "Empresa — Quiénes somos",
  description:
    "Pruden e Hijos S.L., empresa de movimientos de tierra y transportes con sede en Chillón (Ciudad Real). Misión, visión, valores y enfoque de trabajo.",
  alternates: { canonical: "/empresa" },
};

const valores = [
  {
    title: "Excelencia",
    description:
      "Nos esforzamos por alcanzar la excelencia en todos nuestros servicios a través de la calidad, con la última tecnología avanzada y manteniendo los más altos estándares de seguridad.",
  },
  {
    title: "Integridad",
    description:
      "Operamos de manera ética y transparente en todas nuestras acciones y relaciones comerciales, como pilares fundamentales de nuestra empresa.",
  },
  {
    title: "Compromiso con el cliente",
    description:
      "Nos enfocamos en comprender las necesidades de nuestros clientes para brindar soluciones personalizadas que satisfagan sus requerimientos. Estamos comprometidos en establecer relaciones a largo plazo basadas en la confianza y la satisfacción mutua.",
  },
  {
    title: "Sostenibilidad",
    description:
      "Promovemos la práctica de movimientos de tierra responsables y sostenibles, minimizando el impacto ambiental y adoptando medidas de preservación y conservación del entorno.",
  },
  {
    title: "Trabajo en equipo",
    description:
      "Fomentamos un entorno de colaboración y respeto mutuo, reconociendo el valor y la contribución de cada miembro de nuestro equipo.",
  },
  {
    title: "Innovación",
    description:
      "Buscamos constantemente nuevas formas de mejorar y optimizar nuestros servicios y procesos. Fomentamos la innovación, el aprendizaje continuo y la adopción de tecnología de vanguardia.",
  },
];

export default function EmpresaPage() {
  return (
    <>
      <ScrollProgress />
      <BreadcrumbsJsonLd
        items={[
          { name: "Inicio", href: "/" },
          { name: "Empresa", href: "/empresa" },
        ]}
      />
      {/* Hero */}
      <section className="relative isolate overflow-hidden bg-brand-blue-900 text-white">
        <div className="absolute inset-0 -z-10">
          <Image
            src={IMAGES.empresaHero}
            alt=""
            fill
            sizes="100vw"
            className="object-cover opacity-50"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-brand-blue-900/85 via-brand-blue-900/65 to-brand-blue-900/40" />
        </div>
        <div className="container-prose py-24 md:py-32">
          <Reveal eager>
            <nav aria-label="Migas de pan" className="text-[13px] text-white/70">
              <Link href="/" className="hover:text-white">
                Inicio
              </Link>
              <span aria-hidden className="mx-2">»</span>
              <span className="text-white">Empresa</span>
            </nav>
          </Reveal>
          <Reveal eager delay={0.05}>
            <h1
              className="mt-4 max-w-3xl font-bold tracking-tight text-white"
              style={{ fontSize: "var(--font-size-hero)", lineHeight: 1.05 }}
            >
              Quiénes Somos
            </h1>
          </Reveal>
          <Reveal eager delay={0.1}>
            <p
              className="mt-5 max-w-2xl text-white/85"
              style={{ fontSize: "var(--font-size-lead)" }}
            >
              Construyendo el futuro, proyecto a proyecto.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Pruden e Hijos S.L. — texto largo */}
      <section className="bg-white py-20 md:py-28">
        <div className="container-prose">
          <Reveal>
            <p className="text-[12px] font-semibold uppercase tracking-[0.2em] text-brand-red-600">
              La empresa
            </p>
            <h2 className="h2-rule mt-2" style={{ fontSize: "var(--font-size-h2)" }}>
              Pruden e Hijos S.L.
            </h2>
          </Reveal>
          <div className="mt-10 grid gap-10 lg:grid-cols-2 lg:gap-14">
            <Reveal direction="left">
              <div className="space-y-5 text-[17px] leading-relaxed text-neutral-700">
                <p>
                  Proporcionamos servicios de movimientos de tierra y transporte de alta calidad,
                  aportando soluciones integrales para proyectos de construcción y superando las
                  expectativas de nuestros clientes en términos de calidad, eficiencia, seguridad
                  y cumplimiento ambiental.
                </p>
                <p>
                  En Pruden e Hijos S.L., nos enorgullece ser una empresa líder en el sector de
                  los movimientos de tierra. Desde nuestros humildes comienzos, nos hemos
                  convertido en un referente en la industria gracias a nuestra dedicación,
                  experiencia y compromiso con la excelencia.
                </p>
                <p>
                  Desde su fundación, nuestra empresa ha proporcionado servicios de alta calidad
                  en movimientos de tierra a una amplia gama de clientes, incluyendo empresas de
                  construcción, industrias, organismos gubernamentales y particulares.
                </p>
              </div>
            </Reveal>
            <Reveal direction="right">
              <div className="space-y-5 text-[17px] leading-relaxed text-neutral-700">
                <p>
                  Nuestro equipo está compuesto por profesionales altamente capacitados y
                  experimentados en todas las áreas relacionadas con movimientos de tierra, lo
                  que nos permite enfrentar proyectos de cualquier envergadura con confianza y
                  eficiencia.
                </p>
                <p>
                  Nos enorgullece contar con una amplia flota de maquinaria moderna y equipos de
                  vanguardia que nos permiten llevar a cabo proyectos de forma precisa y
                  eficiente. Desde excavadoras y cargadoras hasta niveladoras y camiones
                  volquete, contamos con los recursos necesarios para cumplir con los plazos
                  establecidos y superar las expectativas de nuestros clientes.
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Nuestro día a día */}
      <section className="bg-neutral-50 py-20 md:py-28">
        <div className="container-prose grid items-start gap-12 lg:grid-cols-12">
          <Reveal className="lg:col-span-4">
            <p className="text-[12px] font-semibold uppercase tracking-[0.2em] text-brand-red-600">
              Cómo trabajamos
            </p>
            <h2 className="h2-rule mt-2" style={{ fontSize: "var(--font-size-h2)" }}>
              Nuestro día a día
            </h2>
            <div className="relative mt-8 aspect-[4/5] overflow-hidden rounded-md border border-neutral-200 bg-neutral-100">
              <Image
                src={IMAGES.empresaTeam}
                alt="Equipo de Pruden e Hijos en obra"
                fill
                sizes="(max-width: 1024px) 100vw, 33vw"
                className="object-cover"
              />
            </div>
          </Reveal>
          <Reveal className="lg:col-span-8" direction="right">
            <div className="space-y-5 text-[17px] leading-relaxed text-neutral-700">
              <p>
                En Pruden e Hijos S.L., nos esforzamos por brindar un servicio personalizado y
                adaptado a las necesidades específicas de cada cliente. Entendemos que cada
                proyecto es único y requiere un enfoque individualizado. Trabajamos de cerca con
                nuestros clientes desde el inicio hasta la finalización del proyecto,
                asegurándonos de comprender sus objetivos y proporcionar soluciones efectivas y
                rentables.
              </p>
              <p>
                La seguridad es nuestra máxima prioridad. Implementamos rigurosos protocolos de
                seguridad en todos nuestros proyectos para garantizar un entorno de trabajo seguro
                tanto para nuestro equipo como para nuestros clientes. Además, estamos
                comprometidos con prácticas sostenibles y respetuosas con el medio ambiente,
                minimizando el impacto ambiental siempre que sea posible.
              </p>
              <p>
                Nuestra reputación se basa en la calidad de nuestro trabajo y la satisfacción de
                nuestros clientes. Nos enorgullece haber establecido relaciones sólidas y
                duraderas con nuestros clientes a lo largo de los años, gracias a nuestra ética
                de trabajo sólida, integridad y compromiso con la excelencia.
              </p>
              <p>
                Si está buscando servicios confiables y profesionales en movimientos de tierra,
                Pruden e Hijos S.L. es la elección correcta. Estamos aquí para ayudarlo a hacer
                realidad sus proyectos y convertir sus visiones en realidad. Contáctenos hoy mismo
                y descubra cómo podemos trabajar juntos para lograr el éxito de su proyecto.
              </p>
              <div className="pt-2">
                <Button asChild>
                  <Link href="/contacto">
                    Solicitar presupuesto
                    <ArrowRight className="size-4" strokeWidth={2} />
                  </Link>
                </Button>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Misión / Visión / Valores */}
      <section className="bg-white py-20 md:py-28">
        <div className="container-prose">
          <Reveal>
            <p className="text-[12px] font-semibold uppercase tracking-[0.2em] text-brand-red-600">
              Quiénes somos
            </p>
            <h2 className="h2-rule mt-2" style={{ fontSize: "var(--font-size-h2)" }}>
              Misión, visión y valores
            </h2>
          </Reveal>

          <div className="mt-12 grid gap-6 lg:grid-cols-3">
            <Reveal>
              <article className="h-full rounded-md border border-neutral-200 bg-white p-7 shadow-sm">
                <span className="inline-flex size-11 items-center justify-center rounded-md bg-brand-blue-50 text-brand-blue-700">
                  <Target className="size-5" strokeWidth={1.75} />
                </span>
                <h3 className="mt-5 text-lg font-semibold tracking-tight">Misión</h3>
                <p className="mt-3 text-[15px] leading-relaxed text-neutral-700">
                  Proporcionamos servicios de movimientos de tierra y transporte de alta calidad,
                  aportando soluciones integrales para proyectos de construcción y superando las
                  expectativas de nuestros clientes en términos de calidad, eficiencia, seguridad
                  y cumplimiento ambiental.
                </p>
              </article>
            </Reveal>
            <Reveal delay={0.06}>
              <article className="h-full rounded-md border border-neutral-200 bg-white p-7 shadow-sm">
                <span className="inline-flex size-11 items-center justify-center rounded-md bg-brand-blue-50 text-brand-blue-700">
                  <Compass className="size-5" strokeWidth={1.75} />
                </span>
                <h3 className="mt-5 text-lg font-semibold tracking-tight">Visión</h3>
                <p className="mt-3 text-[15px] leading-relaxed text-neutral-700">
                  Ser líderes reconocidos como empresa de movimientos de tierra y excavaciones,
                  destacándonos por nuestra excelencia operativa, tecnología avanzada y
                  compromiso con la sostenibilidad, brindando soluciones que contribuyan al
                  crecimiento y desarrollo de las comunidades en las que operamos.
                </p>
              </article>
            </Reveal>
            <Reveal delay={0.12}>
              <article className="h-full rounded-md border border-neutral-200 bg-white p-7 shadow-sm">
                <span className="inline-flex size-11 items-center justify-center rounded-md bg-brand-blue-50 text-brand-blue-700">
                  <Heart className="size-5" strokeWidth={1.75} />
                </span>
                <h3 className="mt-5 text-lg font-semibold tracking-tight">Valores</h3>
                <p className="mt-3 text-[15px] leading-relaxed text-neutral-700">
                  Excelencia, integridad, compromiso con el cliente, sostenibilidad, trabajo en
                  equipo e innovación. Seis principios que guían cada decisión y cada proyecto.
                </p>
              </article>
            </Reveal>
          </div>

          <div className="mt-10 grid gap-5 md:grid-cols-2">
            {valores.map((v, i) => (
              <Reveal key={v.title} delay={i * 0.04}>
                <div className="flex gap-4 rounded-md border border-neutral-200 bg-neutral-50 p-5">
                  <span className="inline-flex size-8 shrink-0 items-center justify-center rounded-full bg-brand-blue-700 text-sm font-bold text-white">
                    {i + 1}
                  </span>
                  <div>
                    <h4 className="text-[15px] font-semibold text-neutral-900">{v.title}</h4>
                    <p className="mt-1 text-sm leading-relaxed text-neutral-600">
                      {v.description}
                    </p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Frase destacada */}
      <section className="bg-brand-blue-900 py-20 text-white md:py-24">
        <div className="container-prose text-center">
          <Reveal>
            <p
              className="mx-auto max-w-4xl font-bold tracking-tight"
              style={{ fontSize: "var(--font-size-h1)", lineHeight: 1.15 }}
            >
              Orgullosos de mejorar la sociedad con ingeniería de movimientos de tierra.
            </p>
          </Reveal>
          <Reveal delay={0.08}>
            <div className="mt-10">
              <Button asChild variant="outlineLight" size="lg">
                <Link href="/contacto">
                  Trabaja con nosotros
                  <ArrowRight className="size-4" strokeWidth={2} />
                </Link>
              </Button>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Razones */}
      <ReasonsGrid
        eyebrow="Por qué trabajar con nosotros"
        title="Siete razones para elegirnos"
        variant="muted"
      />
    </>
  );
}
