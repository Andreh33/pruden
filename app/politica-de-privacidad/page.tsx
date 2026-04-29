import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Política de privacidad",
  robots: { index: true, follow: false },
};

export default function PoliticaPrivacidadPage() {
  return (
    <article className="container-prose prose prose-neutral max-w-3xl py-20 md:py-28">
      <h1 className="text-4xl font-bold tracking-tight">Política de privacidad</h1>
      <p className="mt-4 rounded-md border border-dashed border-neutral-300 bg-neutral-50 p-4 text-sm text-neutral-600">
        {/* IMPORTANTE: revisar con asesor legal (RGPD/LOPDGDD). */}
        Borrador. El cliente debe revisar con su asesor legal antes de publicar.
      </p>
      <h2 className="mt-10 text-xl font-semibold">Responsable del tratamiento</h2>
      <p className="mt-2 text-neutral-700">
        Pruden e Hijos S.L., Calle Capilla, 8 — 13412 Chillón (Ciudad Real). Contacto:
        administracion@prudenehijos.es.
      </p>
      <h2 className="mt-8 text-xl font-semibold">Finalidad y base jurídica</h2>
      <p className="mt-2 text-neutral-700">
        Tratamos los datos facilitados a través del formulario de contacto con la finalidad de
        responder a tu consulta y, en su caso, elaborar el presupuesto solicitado. La base
        jurídica es el consentimiento del interesado.
      </p>
      <h2 className="mt-8 text-xl font-semibold">Conservación y derechos</h2>
      <p className="mt-2 text-neutral-700">
        Conservamos los datos durante el tiempo necesario para atender la solicitud y cumplir
        con las obligaciones legales. Puedes ejercer tus derechos de acceso, rectificación,
        supresión, oposición, limitación y portabilidad escribiendo a la dirección indicada.
      </p>
    </article>
  );
}
