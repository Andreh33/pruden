import { ContactForm } from "@/components/contact-form";
import { Reveal } from "@/components/reveal";

export function CtaFormBand() {
  return (
    <section className="relative isolate overflow-hidden bg-brand-blue-900 py-20 text-white md:py-28">
      <div
        aria-hidden
        className="absolute inset-0 -z-10 opacity-[0.06]"
        style={{
          backgroundImage:
            "linear-gradient(135deg, transparent 49.5%, #fff 49.5%, #fff 50.5%, transparent 50.5%)",
          backgroundSize: "32px 32px",
        }}
      />
      <div className="container-prose grid items-start gap-12 lg:grid-cols-12">
        <Reveal className="lg:col-span-5">
          <p className="text-[12px] font-semibold uppercase tracking-[0.2em] text-brand-blue-200">
            Hablemos
          </p>
          <h2
            className="mt-3 font-bold tracking-tight"
            style={{ fontSize: "var(--font-size-h1)", lineHeight: 1.05 }}
          >
            Servicios eficientes, experiencia contrastada
          </h2>
          <p className="mt-5 max-w-md text-white/80" style={{ fontSize: "var(--font-size-lead)" }}>
            Cuéntanos cómo podemos ayudarte. Te respondemos en menos de 24 horas laborables.
          </p>
        </Reveal>

        <Reveal className="lg:col-span-7" direction="right">
          <div className="rounded-md border border-white/10 bg-white/[0.04] p-7 backdrop-blur-[1px]">
            <ContactForm variant="compact" redirectOnSuccess={false} />
          </div>
        </Reveal>
      </div>
    </section>
  );
}
