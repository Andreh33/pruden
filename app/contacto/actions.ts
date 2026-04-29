"use server";

import { and, eq, gte } from "drizzle-orm";
import { headers } from "next/headers";

import { contactMessages } from "@/db/schema";
import { getDb, isDbConfigured } from "@/db";
import { SITE } from "@/lib/config";
import { ContactSchema } from "@/lib/contact-schema";

export type SubmitResult =
  | { ok: true }
  | { ok: false; error: string };

export async function submitContact(formData: FormData): Promise<SubmitResult> {
  const raw = {
    nombre: String(formData.get("nombre") ?? ""),
    email: String(formData.get("email") ?? ""),
    telefono: String(formData.get("telefono") ?? ""),
    asunto: String(formData.get("asunto") ?? ""),
    mensaje: String(formData.get("mensaje") ?? ""),
    privacidad: formData.get("privacidad") === "on" || formData.get("privacidad") === "true",
    website: String(formData.get("website") ?? ""),
  };

  // Honeypot: bot detected. Devolvemos OK silencioso para no dar pistas.
  if (raw.website && raw.website.trim() !== "") {
    return { ok: true };
  }

  const parsed = ContactSchema.safeParse(raw);
  if (!parsed.success) {
    const first = parsed.error.issues[0];
    return { ok: false, error: first?.message ?? "Datos no válidos." };
  }

  if (!isDbConfigured()) {
    return {
      ok: false,
      error: "El servicio no está disponible temporalmente. Inténtalo más tarde o llámanos.",
    };
  }

  const hdrs = await headers();
  const ip =
    hdrs.get("x-forwarded-for")?.split(",")[0]?.trim() ??
    hdrs.get("x-real-ip") ??
    null;
  const userAgent = hdrs.get("user-agent") ?? null;

  try {
    const db = getDb();

    // Rate limit por IP: 1 envío por minuto.
    if (ip) {
      const oneMinuteAgo = new Date(Date.now() - 60_000).toISOString();
      const recent = await db
        .select({ id: contactMessages.id })
        .from(contactMessages)
        .where(
          and(eq(contactMessages.ip, ip), gte(contactMessages.createdAt, oneMinuteAgo)),
        )
        .limit(1);
      if (recent.length > 0) {
        return {
          ok: false,
          error:
            "Acabas de enviar un mensaje hace un momento. Espera un minuto antes de volver a enviar.",
        };
      }
    }

    await db.insert(contactMessages).values({
      nombre: parsed.data.nombre,
      email: parsed.data.email,
      telefono: parsed.data.telefono || null,
      asunto: parsed.data.asunto || null,
      mensaje: parsed.data.mensaje,
      ip,
      userAgent,
    });
  } catch (err) {
    console.error("[contact] DB insert error", err);
    return {
      ok: false,
      error: `No se pudo enviar. Vuelve a intentarlo o llámanos al ${SITE.primaryPhone}.`,
    };
  }

  // Envío opcional por Resend (sin dependencia dura).
  if (process.env.RESEND_API_KEY) {
    const to = process.env.CONTACT_EMAIL_TO ?? SITE.email;
    const from = process.env.CONTACT_EMAIL_FROM ?? `web@${new URL(SITE.url).hostname}`;
    try {
      await fetch("https://api.resend.com/emails", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${process.env.RESEND_API_KEY}`,
        },
        body: JSON.stringify({
          from,
          to,
          reply_to: parsed.data.email,
          subject: `[Web] ${parsed.data.asunto || "Nuevo mensaje de contacto"}`,
          text: [
            `Nombre: ${parsed.data.nombre}`,
            `Email: ${parsed.data.email}`,
            `Teléfono: ${parsed.data.telefono || "—"}`,
            `Asunto: ${parsed.data.asunto || "—"}`,
            "",
            "Mensaje:",
            parsed.data.mensaje,
          ].join("\n"),
        }),
      });
    } catch (err) {
      console.error("[contact] Resend error", err);
      // No bloqueamos al usuario: el mensaje ya está guardado en BD.
    }
  }

  return { ok: true };
}
