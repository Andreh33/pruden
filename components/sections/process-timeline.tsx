import { Reveal } from "@/components/reveal";

const steps = [
  {
    title: "Contacto inicial",
    description: "Cuéntanos tu proyecto y resolvemos las primeras dudas.",
  },
  {
    title: "Visita técnica",
    description: "Evaluamos el terreno y medimos los requisitos in situ.",
  },
  {
    title: "Presupuesto detallado",
    description: "Sin compromiso, con plazos y partidas claras.",
  },
  {
    title: "Planificación",
    description: "Permisos, recursos, cronograma y equipo asignado.",
  },
  {
    title: "Ejecución",
    description: "Trabajo seguro, eficiente y dentro de plazo.",
  },
  {
    title: "Entrega y postservicio",
    description: "Verificación final y soporte continuado.",
  },
];

export function ProcessTimeline() {
  return (
    <section className="bg-brand-blue-50 py-20 md:py-28">
      <div className="container-prose">
        <Reveal>
          <p className="text-[12px] font-semibold uppercase tracking-[0.2em] text-brand-red-600">
            Cómo trabajamos
          </p>
          <h2 className="h2-rule mt-2" style={{ fontSize: "var(--font-size-h2)" }}>
            Un proceso claro, paso a paso
          </h2>
        </Reveal>

        <ol className="relative mt-14 grid gap-10 md:grid-cols-3 lg:grid-cols-6 lg:gap-6">
          <span
            aria-hidden
            className="absolute left-[18px] top-7 hidden h-[calc(100%-3.5rem)] w-px bg-brand-blue-200 md:hidden"
          />
          <span
            aria-hidden
            className="absolute left-[28px] right-[28px] top-7 hidden h-px bg-brand-blue-200 lg:block"
          />
          {steps.map((s, i) => (
            <Reveal key={s.title} delay={i * 0.08}>
              <li className="relative flex gap-5 lg:flex-col lg:gap-3">
                <span className="relative z-10 inline-flex size-14 shrink-0 items-center justify-center rounded-full bg-brand-blue-700 text-lg font-bold text-white shadow-sm ring-4 ring-brand-blue-50">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <div>
                  <h3 className="text-[16px] font-semibold tracking-tight text-neutral-900">
                    {s.title}
                  </h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-neutral-600">
                    {s.description}
                  </p>
                </div>
              </li>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
}
