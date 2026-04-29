"use client";

import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { ArrowRight, ChevronDown } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import * as React from "react";

import { Button } from "@/components/ui/button";
import { services } from "@/lib/services";
import { cn } from "@/lib/utils";

export function ServicesMegaMenu() {
  const [open, setOpen] = React.useState(false);
  const [hovered, setHovered] = React.useState(0);
  const closeTimer = React.useRef<ReturnType<typeof setTimeout> | null>(null);
  const reduced = useReducedMotion();
  const pathname = usePathname();
  const active = pathname.startsWith("/servicios");

  function openNow() {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    setOpen(true);
  }
  function scheduleClose() {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    closeTimer.current = setTimeout(() => setOpen(false), 120);
  }

  React.useEffect(() => {
    if (!open) return;
    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") setOpen(false);
    }
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  const lastPath = React.useRef(pathname);
  React.useEffect(() => {
    if (lastPath.current !== pathname) {
      lastPath.current = pathname;
      setOpen(false);
    }
  }, [pathname]);

  const featured = services[hovered] ?? services[0];

  return (
    <div
      className="relative"
      onMouseEnter={openNow}
      onMouseLeave={scheduleClose}
      onFocus={openNow}
      onBlur={scheduleClose}
    >
      <Link
        href="/servicios"
        aria-haspopup="true"
        aria-expanded={open}
        className={cn(
          "relative inline-flex items-center gap-1 px-1 py-2 text-[15px] font-medium text-neutral-800 transition-colors hover:text-brand-blue-700",
          "after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-full after:origin-center after:scale-x-0 after:bg-brand-red-600 after:transition-transform after:duration-200 after:ease-out hover:after:scale-x-100",
          active && "text-brand-blue-700 after:scale-x-100",
        )}
      >
        Servicios
        <ChevronDown
          className={cn(
            "size-3.5 transition-transform duration-200",
            open && "rotate-180",
          )}
          strokeWidth={2}
        />
      </Link>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={reduced ? { opacity: 1 } : { opacity: 0, y: -4 }}
            animate={{ opacity: 1, y: 0 }}
            exit={reduced ? { opacity: 0 } : { opacity: 0, y: -4 }}
            transition={{ duration: 0.18, ease: [0.22, 1, 0.36, 1] }}
            className="absolute left-1/2 top-full z-50 w-[min(960px,calc(100vw-2rem))] -translate-x-1/2 pt-3"
          >
            <div className="grid grid-cols-5 overflow-hidden rounded-lg border border-neutral-200 bg-white shadow-md">
              <ul className="col-span-3 divide-y divide-neutral-100">
                {services.map((s, i) => {
                  const Icon = s.icon;
                  return (
                    <li key={s.slug}>
                      <Link
                        href={`/servicios/${s.slug}`}
                        onMouseEnter={() => setHovered(i)}
                        onFocus={() => setHovered(i)}
                        className="group flex items-start gap-4 border-l-4 border-transparent px-5 py-4 transition-colors hover:border-brand-red-600 hover:bg-brand-blue-50"
                      >
                        <span className="mt-0.5 inline-flex size-9 items-center justify-center rounded-md bg-brand-blue-50 text-brand-blue-700 transition-colors group-hover:bg-white">
                          <Icon className="size-5" strokeWidth={1.75} />
                        </span>
                        <span className="flex-1">
                          <span className="block text-[15px] font-semibold text-neutral-900">
                            {s.title}
                          </span>
                          <span className="mt-0.5 block text-[13px] leading-snug text-neutral-600">
                            {s.short}
                          </span>
                        </span>
                      </Link>
                    </li>
                  );
                })}
              </ul>
              <div className="col-span-2 flex flex-col bg-brand-blue-50 p-6">
                <div className="mb-4 text-[11px] font-semibold uppercase tracking-[0.12em] text-brand-blue-700">
                  Destacado
                </div>
                <div className="text-lg font-semibold text-neutral-900">
                  {featured.title}
                </div>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-neutral-600">
                  {featured.short}
                </p>
                <div className="mt-5 flex flex-col gap-2">
                  <Button asChild variant="primary" size="sm">
                    <Link href="/contacto">
                      Solicitar presupuesto
                      <ArrowRight className="size-4" strokeWidth={2} />
                    </Link>
                  </Button>
                  <Link
                    href="/servicios"
                    className="text-sm font-medium text-brand-blue-700 underline-offset-4 hover:underline"
                  >
                    Ver todos los servicios →
                  </Link>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
