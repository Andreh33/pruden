import { Clock, Mail, MapPin, Phone } from "lucide-react";
import type { Metadata } from "next";

import { ContactForm } from "@/components/contact-form";
import { Reveal } from "@/components/reveal";
import { SITE, telHref } from "@/lib/config";

export const metadata: Metadata = {
  title: "Contacto",
  description:
    "Contacta con Pruden e Hijos S.L. en Chillón (Ciudad Real). Teléfonos, email y formulario de contacto.",
  alternates: { canonical: "/contacto" },
};

export default function ContactoPage() {
  return (
    <section className="container-prose py-20 md:py-28">
      <Reveal>
        <p className="text-[12px] font-semibold uppercase tracking-[0.2em] text-brand-red-600">
          Contacto
        </p>
        <h1 className="h2-rule mt-2 text-4xl font-bold tracking-tight md:text-5xl">
          Estamos a tu disposición
        </h1>
        <p className="mt-5 max-w-2xl text-lg text-neutral-600">
          Cuéntanos qué necesitas. Te respondemos en menos de 24 horas laborables.
        </p>
      </Reveal>

      <div className="mt-14 grid gap-10 lg:grid-cols-5">
        <Reveal className="lg:col-span-2" direction="left">
          <div className="rounded-md border border-neutral-200 bg-neutral-50 p-7">
            <h2 className="text-lg font-semibold text-neutral-900">Datos de contacto</h2>

            <div className="mt-5 space-y-4 text-[15px] text-neutral-700">
              <div className="flex items-start gap-3">
                <span className="mt-0.5 inline-flex size-9 shrink-0 items-center justify-center rounded-md bg-white text-brand-blue-700 ring-1 ring-neutral-200">
                  <MapPin className="size-4" strokeWidth={1.75} />
                </span>
                <div>
                  <div className="text-xs font-semibold uppercase tracking-[0.12em] text-neutral-500">
                    Dirección
                  </div>
                  <div className="mt-0.5">{SITE.address.full}</div>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <span className="mt-0.5 inline-flex size-9 shrink-0 items-center justify-center rounded-md bg-white text-brand-blue-700 ring-1 ring-neutral-200">
                  <Phone className="size-4" strokeWidth={1.75} />
                </span>
                <div>
                  <div className="text-xs font-semibold uppercase tracking-[0.12em] text-neutral-500">
                    Teléfonos
                  </div>
                  <ul className="mt-0.5 space-y-0.5">
                    {SITE.phones.map((p) => (
                      <li key={p}>
                        <a
                          href={telHref(p)}
                          className="hover:text-brand-blue-700"
                        >
                          {p}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <span className="mt-0.5 inline-flex size-9 shrink-0 items-center justify-center rounded-md bg-white text-brand-blue-700 ring-1 ring-neutral-200">
                  <Mail className="size-4" strokeWidth={1.75} />
                </span>
                <div>
                  <div className="text-xs font-semibold uppercase tracking-[0.12em] text-neutral-500">
                    Email
                  </div>
                  <a
                    href={`mailto:${SITE.email}`}
                    className="mt-0.5 block break-all hover:text-brand-blue-700"
                  >
                    {SITE.email}
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <span className="mt-0.5 inline-flex size-9 shrink-0 items-center justify-center rounded-md bg-white text-brand-blue-700 ring-1 ring-neutral-200">
                  <Clock className="size-4" strokeWidth={1.75} />
                </span>
                <div>
                  <div className="text-xs font-semibold uppercase tracking-[0.12em] text-neutral-500">
                    Horario
                  </div>
                  <div className="mt-0.5">{SITE.hours}</div>
                </div>
              </div>
            </div>
          </div>
        </Reveal>

        <Reveal className="lg:col-span-3" direction="right">
          <div className="rounded-md border border-neutral-200 bg-white p-7 shadow-sm">
            <h2 className="text-lg font-semibold text-neutral-900">Envíanos un mensaje</h2>
            <p className="mt-1 text-sm text-neutral-600">
              Los campos marcados con <span className="text-brand-red-600">*</span> son obligatorios.
            </p>
            <div className="mt-6">
              <ContactForm variant="full" />
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
