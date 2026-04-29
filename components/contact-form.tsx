"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { ArrowRight, Loader2 } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import * as React from "react";
import { useForm } from "react-hook-form";
import { toast } from "sonner";

import { submitContact } from "@/app/contacto/actions";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { ContactSchema, type ContactInput } from "@/lib/contact-schema";
import { cn } from "@/lib/utils";

type Props = {
  variant?: "full" | "compact";
  redirectOnSuccess?: boolean;
};

export function ContactForm({ variant = "full", redirectOnSuccess = true }: Props) {
  const router = useRouter();
  const [pending, startTransition] = React.useTransition();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactInput>({
    resolver: zodResolver(ContactSchema),
    mode: "onBlur",
    defaultValues: {
      nombre: "",
      email: "",
      telefono: "",
      asunto: "",
      mensaje: "",
      privacidad: false as unknown as true,
      website: "",
    },
  });

  function onSubmit(data: ContactInput) {
    const fd = new FormData();
    Object.entries(data).forEach(([k, v]) => {
      if (typeof v === "boolean") fd.append(k, v ? "on" : "");
      else if (v !== undefined) fd.append(k, String(v));
    });

    startTransition(async () => {
      const res = await submitContact(fd);
      if (res.ok) {
        toast.success("Mensaje enviado. Te contactaremos pronto.");
        reset();
        if (redirectOnSuccess) router.push("/contacto/gracias");
      } else {
        toast.error(res.error);
      }
    });
  }

  const isCompact = variant === "compact";
  const labelTone = isCompact ? "text-white/90" : "text-neutral-800";
  const helpTone = isCompact ? "text-white/70" : "text-neutral-500";

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      noValidate
      className={cn("flex flex-col gap-5", isCompact && "text-white")}
    >
      {/* Honeypot — invisible y fuera del orden de tabulación */}
      <div className="hidden" aria-hidden="true">
        <label>
          No rellenar
          <input
            type="text"
            tabIndex={-1}
            autoComplete="off"
            {...register("website")}
          />
        </label>
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <Field
          id="nombre"
          label="Nombre"
          required
          tone={labelTone}
          error={errors.nombre?.message}
        >
          <Input
            id="nombre"
            autoComplete="name"
            aria-invalid={!!errors.nombre}
            {...register("nombre")}
          />
        </Field>
        <Field
          id="email"
          label="Email"
          required
          tone={labelTone}
          error={errors.email?.message}
        >
          <Input
            id="email"
            type="email"
            inputMode="email"
            autoComplete="email"
            aria-invalid={!!errors.email}
            {...register("email")}
          />
        </Field>
        <Field id="telefono" label="Teléfono" tone={labelTone} error={errors.telefono?.message}>
          <Input
            id="telefono"
            type="tel"
            inputMode="tel"
            autoComplete="tel"
            aria-invalid={!!errors.telefono}
            {...register("telefono")}
          />
        </Field>
        {!isCompact && (
          <Field id="asunto" label="Asunto" tone={labelTone} error={errors.asunto?.message}>
            <Input id="asunto" aria-invalid={!!errors.asunto} {...register("asunto")} />
          </Field>
        )}
      </div>

      <Field id="mensaje" label="Mensaje" required tone={labelTone} error={errors.mensaje?.message}>
        <Textarea
          id="mensaje"
          rows={isCompact ? 4 : 6}
          aria-invalid={!!errors.mensaje}
          {...register("mensaje")}
        />
      </Field>

      <div className="flex flex-col gap-2">
        <label className="flex items-start gap-3 text-sm">
          <Checkbox
            id="privacidad"
            aria-invalid={!!errors.privacidad}
            {...register("privacidad")}
          />
          <span className={cn("leading-snug", labelTone)}>
            He leído y acepto la{" "}
            <Link
              href="/politica-de-privacidad"
              className={cn(
                "font-medium underline-offset-4 hover:underline",
                isCompact ? "text-white" : "text-brand-blue-700",
              )}
            >
              política de privacidad
            </Link>
            .
          </span>
        </label>
        {errors.privacidad?.message && (
          <p
            role="alert"
            className={cn(
              "text-sm",
              isCompact ? "text-red-200" : "text-brand-red-600",
            )}
          >
            {errors.privacidad.message}
          </p>
        )}
      </div>

      <div className="flex items-center justify-between gap-4">
        <p className={cn("text-xs", helpTone)}>
          Te respondemos en menos de 24 horas laborables.
        </p>
        <Button type="submit" size="lg" disabled={pending}>
          {pending ? (
            <>
              <Loader2 className="size-4 animate-spin" strokeWidth={2} />
              Enviando…
            </>
          ) : (
            <>
              {isCompact ? "Enviar" : "Enviar mensaje"}
              <ArrowRight className="size-4" strokeWidth={2} />
            </>
          )}
        </Button>
      </div>
    </form>
  );
}

function Field({
  id,
  label,
  required,
  tone,
  error,
  children,
}: {
  id: string;
  label: string;
  required?: boolean;
  tone: string;
  error?: string;
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col gap-1.5">
      <Label htmlFor={id} className={tone}>
        {label}
        {required ? <span className="ml-0.5 text-brand-red-600">*</span> : null}
      </Label>
      {children}
      {error && (
        <p role="alert" className="text-sm text-brand-red-600">
          {error}
        </p>
      )}
    </div>
  );
}
