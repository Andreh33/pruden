import { z } from "zod";

export const ContactSchema = z.object({
  nombre: z
    .string()
    .trim()
    .min(2, "Indica tu nombre.")
    .max(100, "El nombre no puede superar los 100 caracteres."),
  email: z.string().trim().toLowerCase().email("Indica un email válido."),
  telefono: z
    .string()
    .trim()
    .max(20, "El teléfono no puede superar los 20 caracteres.")
    .optional()
    .or(z.literal("")),
  asunto: z
    .string()
    .trim()
    .max(150, "El asunto no puede superar los 150 caracteres.")
    .optional()
    .or(z.literal("")),
  mensaje: z
    .string()
    .trim()
    .min(10, "Cuéntanos un poco más, mínimo 10 caracteres.")
    .max(2000, "El mensaje no puede superar los 2000 caracteres."),
  privacidad: z.literal(true, {
    message: "Debes aceptar la política de privacidad.",
  }),
  // Honeypot: debe estar vacío. Si llega con contenido, es un bot.
  website: z.string().max(0).optional().or(z.literal("")),
});

export type ContactInput = z.infer<typeof ContactSchema>;

export type ContactState =
  | { status: "idle" }
  | { status: "success" }
  | { status: "error"; message: string };
