import { CheckCircle2 } from "lucide-react";
import type { Metadata } from "next";
import Link from "next/link";

import { Button } from "@/components/ui/button";
import { SITE, telHref } from "@/lib/config";

export const metadata: Metadata = {
  title: "Mensaje recibido",
  description: "Hemos recibido tu mensaje. Te contactaremos pronto.",
  robots: { index: false, follow: false },
};

export default function GraciasPage() {
  return (
    <section className="container-prose py-24 md:py-32">
      <div className="mx-auto max-w-2xl text-center">
        <span className="inline-flex size-16 items-center justify-center rounded-full bg-emerald-50 text-emerald-600 ring-1 ring-emerald-200">
          <CheckCircle2 className="size-8" strokeWidth={1.75} />
        </span>
        <h1 className="mt-6 text-4xl font-bold tracking-tight md:text-5xl">
          Mensaje recibido
        </h1>
        <p className="mx-auto mt-4 max-w-lg text-lg text-neutral-600">
          Hemos recibido tu mensaje. Te contestaremos lo antes posible, normalmente en menos de
          24 horas laborables.
        </p>

        <div className="mx-auto mt-10 inline-flex flex-col items-center gap-3 rounded-md border border-neutral-200 bg-neutral-50 px-8 py-6 text-sm text-neutral-700 sm:flex-row sm:gap-6">
          <span className="text-xs font-semibold uppercase tracking-[0.12em] text-neutral-500">
            ¿Tienes prisa?
          </span>
          <div className="flex flex-col items-center gap-1 sm:flex-row sm:gap-4">
            {SITE.phones.map((p) => (
              <a
                key={p}
                href={telHref(p)}
                className="font-medium text-brand-blue-700 hover:underline"
              >
                {p}
              </a>
            ))}
          </div>
        </div>

        <div className="mt-10">
          <Button asChild size="lg">
            <Link href="/">Volver al inicio</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
