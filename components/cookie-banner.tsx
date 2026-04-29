"use client";

import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import Link from "next/link";
import * as React from "react";

import { Button } from "@/components/ui/button";

const STORAGE_KEY = "pruden-cookies-consent";

type Consent = { status: "accepted" | "rejected"; date: string };

export function CookieBanner() {
  const [show, setShow] = React.useState(false);
  const reduced = useReducedMotion();

  React.useEffect(() => {
    if (typeof window === "undefined") return;
    let raw: string | null = null;
    try {
      raw = window.localStorage.getItem(STORAGE_KEY);
    } catch {
      // localStorage no disponible (modo privado, etc.) — no mostrar banner.
      return;
    }
    if (!raw) {
      const t = setTimeout(() => setShow(true), 300);
      return () => clearTimeout(t);
    }
  }, []);

  function decide(status: Consent["status"]) {
    try {
      window.localStorage.setItem(
        STORAGE_KEY,
        JSON.stringify({ status, date: new Date().toISOString() } satisfies Consent),
      );
    } catch {
      // ignorar
    }
    setShow(false);
  }

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          role="dialog"
          aria-live="polite"
          aria-label="Aviso de cookies"
          initial={reduced ? { opacity: 0 } : { y: 24, opacity: 0 }}
          animate={reduced ? { opacity: 1 } : { y: 0, opacity: 1 }}
          exit={reduced ? { opacity: 0 } : { y: 24, opacity: 0 }}
          transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
          className="fixed inset-x-3 bottom-3 z-50 mx-auto max-w-3xl rounded-md border border-neutral-200 bg-white p-5 shadow-md sm:inset-x-auto sm:right-6 sm:bottom-6"
        >
          <p className="text-sm leading-relaxed text-neutral-700">
            Usamos cookies propias y de terceros para mejorar tu experiencia y analizar el uso del
            sitio. Puedes aceptarlas o rechazarlas. Más información en nuestra{" "}
            <Link
              href="/politica-de-cookies"
              className="font-medium text-brand-blue-700 underline-offset-4 hover:underline"
            >
              política de cookies
            </Link>
            .
          </p>
          <div className="mt-4 flex flex-col-reverse gap-2 sm:flex-row sm:justify-end">
            <Button variant="secondary" size="sm" onClick={() => decide("rejected")}>
              Rechazar
            </Button>
            <Button size="sm" onClick={() => decide("accepted")}>
              Aceptar
            </Button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
