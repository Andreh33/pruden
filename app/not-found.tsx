import Link from "next/link";

import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <section className="relative isolate overflow-hidden py-24 md:py-36">
      <div
        aria-hidden
        className="absolute inset-0 -z-10 select-none text-center font-bold tracking-tight text-brand-blue-50"
        style={{ fontSize: "clamp(12rem, 35vw, 28rem)", lineHeight: 1 }}
      >
        404
      </div>
      <div className="container-prose text-center">
        <p className="text-[12px] font-semibold uppercase tracking-[0.2em] text-brand-red-600">
          Error 404
        </p>
        <h1 className="mt-3 text-4xl font-bold tracking-tight md:text-5xl">
          Página no encontrada
        </h1>
        <p className="mx-auto mt-4 max-w-lg text-neutral-600">
          La página que buscas no existe o ha sido movida.
        </p>
        <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <Button asChild size="lg">
            <Link href="/">Volver al inicio</Link>
          </Button>
          <Button asChild variant="secondary" size="lg">
            <Link href="/servicios">Ver servicios</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
