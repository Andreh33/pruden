import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Aviso legal",
  robots: { index: true, follow: false },
};

export default function AvisoLegalPage() {
  return (
    <article className="container-prose prose prose-neutral max-w-3xl py-20 md:py-28">
      <h1 className="text-4xl font-bold tracking-tight">Aviso legal</h1>
      <p className="mt-4 rounded-md border border-dashed border-neutral-300 bg-neutral-50 p-4 text-sm text-neutral-600">
        {/* IMPORTANTE: el cliente debe revisar y, si procede, completar este texto con su asesor
            legal (RGPD/LOPDGDD). Este es un borrador estándar. */}
        Borrador. El cliente debe revisar este texto con su asesor legal antes de publicarlo.
      </p>
      <h2 className="mt-10 text-xl font-semibold">Titularidad del sitio</h2>
      <p className="mt-2 text-neutral-700">
        Pruden e Hijos S.L., con domicilio en Calle Capilla, 8 — 13412 Chillón (Ciudad Real).
        Email de contacto: administracion@prudenehijos.es.
      </p>
      <h2 className="mt-8 text-xl font-semibold">Condiciones de uso</h2>
      <p className="mt-2 text-neutral-700">
        El acceso y uso de este sitio web atribuye la condición de usuario, que acepta las
        presentes condiciones generales. La utilización de determinados servicios podrá
        someterse a condiciones particulares propias.
      </p>
      <h2 className="mt-8 text-xl font-semibold">Propiedad intelectual</h2>
      <p className="mt-2 text-neutral-700">
        Todos los contenidos del sitio (textos, imágenes, marcas, logotipos) son titularidad de
        Pruden e Hijos S.L. o de terceros que han autorizado su uso. Queda prohibida cualquier
        reproducción no autorizada.
      </p>
    </article>
  );
}
