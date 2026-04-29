import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Política de cookies",
  robots: { index: true, follow: false },
};

export default function PoliticaCookiesPage() {
  return (
    <article className="container-prose prose prose-neutral max-w-3xl py-20 md:py-28">
      <h1 className="text-4xl font-bold tracking-tight">Política de cookies</h1>
      <p className="mt-4 rounded-md border border-dashed border-neutral-300 bg-neutral-50 p-4 text-sm text-neutral-600">
        {/* IMPORTANTE: revisar con asesor legal. */}
        Borrador. Revisar con asesor legal antes de publicar.
      </p>
      <h2 className="mt-10 text-xl font-semibold">¿Qué son las cookies?</h2>
      <p className="mt-2 text-neutral-700">
        Las cookies son pequeños archivos de texto que los sitios web guardan en tu dispositivo
        cuando los visitas. Sirven para recordar preferencias y obtener información estadística.
      </p>
      <h2 className="mt-8 text-xl font-semibold">Cookies utilizadas</h2>
      <p className="mt-2 text-neutral-700">
        Actualmente este sitio solo utiliza cookies estrictamente necesarias para su
        funcionamiento. Si en el futuro se incorporan cookies analíticas o de terceros, se
        solicitará el consentimiento previo del usuario a través del banner.
      </p>
      <h2 className="mt-8 text-xl font-semibold">Gestión del consentimiento</h2>
      <p className="mt-2 text-neutral-700">
        Puedes aceptar o rechazar las cookies desde el banner que aparece al acceder al sitio.
        Tu decisión se almacenará en el almacenamiento local de tu navegador.
      </p>
    </article>
  );
}
