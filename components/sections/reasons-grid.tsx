import { Reveal } from "@/components/reveal";
import { reasons } from "@/lib/reasons";

type Props = {
  eyebrow?: string;
  title?: string;
  intro?: string;
  variant?: "light" | "muted";
};

export function ReasonsGrid({
  eyebrow = "Por qué trabajar con nosotros",
  title = "Siete razones para elegirnos",
  intro,
  variant = "light",
}: Props) {
  const bg =
    variant === "muted" ? "bg-brand-blue-50" : "bg-white border-y border-neutral-200";

  return (
    <section className={`${bg} py-20 md:py-28`}>
      <div className="container-prose">
        <Reveal>
          <p className="text-[12px] font-semibold uppercase tracking-[0.2em] text-brand-red-600">
            {eyebrow}
          </p>
          <h2 className="h2-rule mt-2" style={{ fontSize: "var(--font-size-h2)" }}>
            {title}
          </h2>
          {intro ? (
            <p className="mt-5 max-w-2xl text-neutral-600" style={{ fontSize: "var(--font-size-lead)" }}>
              {intro}
            </p>
          ) : null}
        </Reveal>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {reasons.map((r, i) => {
            const Icon = r.icon;
            return (
              <Reveal key={r.title} delay={i * 0.05}>
                <article className="group relative h-full rounded-md border border-neutral-200 bg-white p-6 transition-[transform,border-color,box-shadow] duration-200 ease-out hover:-translate-y-0.5 hover:border-brand-blue-700 hover:shadow-md">
                  <span className="inline-flex size-11 items-center justify-center rounded-md bg-brand-blue-50 text-brand-blue-700 transition-colors group-hover:bg-brand-blue-700 group-hover:text-white">
                    <Icon className="size-5" strokeWidth={1.75} />
                  </span>
                  <h3 className="mt-5 text-base font-semibold tracking-tight text-neutral-900">
                    {r.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-neutral-600">
                    {r.description}
                  </p>
                </article>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
