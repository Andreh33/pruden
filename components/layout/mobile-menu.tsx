"use client";

import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { ArrowRight, Mail, MapPin, Menu, Phone, X } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import * as React from "react";

import { Button } from "@/components/ui/button";
import { SITE, telHref } from "@/lib/config";
import { services } from "@/lib/services";
import { cn } from "@/lib/utils";

const links = [
  { href: "/", label: "Inicio" },
  { href: "/empresa", label: "Empresa" },
  { href: "/contacto", label: "Contacto" },
];

export function MobileMenu() {
  const [open, setOpen] = React.useState(false);
  const reduced = useReducedMotion();
  const pathname = usePathname();
  const lastPath = React.useRef(pathname);

  React.useEffect(() => {
    if (lastPath.current !== pathname) {
      lastPath.current = pathname;
      setOpen(false);
    }
  }, [pathname]);

  React.useEffect(() => {
    if (!open) return;
    const html = document.documentElement;
    const prev = html.style.overflow;
    html.style.overflow = "hidden";
    return () => {
      html.style.overflow = prev;
    };
  }, [open]);

  return (
    <>
      <button
        type="button"
        aria-label="Abrir menú"
        aria-expanded={open}
        onClick={() => setOpen(true)}
        className="inline-flex size-11 items-center justify-center rounded-md text-neutral-800 transition-colors hover:bg-neutral-100 lg:hidden"
      >
        <Menu className="size-6" strokeWidth={1.75} />
      </button>

      <AnimatePresence>
        {open && (
          <>
            <motion.div
              key="backdrop"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: reduced ? 0 : 0.2 }}
              onClick={() => setOpen(false)}
              className="fixed inset-0 z-50 bg-brand-blue-900/50"
            />
            <motion.aside
              key="panel"
              role="dialog"
              aria-modal="true"
              aria-label="Menú principal"
              initial={reduced ? { opacity: 0 } : { x: "100%" }}
              animate={reduced ? { opacity: 1 } : { x: 0 }}
              exit={reduced ? { opacity: 0 } : { x: "100%" }}
              transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
              className="fixed inset-y-0 right-0 z-50 flex w-[min(420px,90vw)] flex-col bg-white shadow-md"
            >
              <div className="flex items-center justify-between border-b border-neutral-200 px-5 py-4">
                <span className="text-sm font-semibold uppercase tracking-[0.12em] text-brand-blue-700">
                  Menú
                </span>
                <button
                  type="button"
                  aria-label="Cerrar menú"
                  onClick={() => setOpen(false)}
                  className="inline-flex size-10 items-center justify-center rounded-md text-neutral-800 transition-colors hover:bg-neutral-100"
                >
                  <X className="size-5" strokeWidth={1.75} />
                </button>
              </div>

              <nav className="flex-1 overflow-y-auto px-5 py-4">
                <ul className="flex flex-col">
                  {links.slice(0, 2).map((l) => (
                    <li key={l.href}>
                      <Link
                        href={l.href}
                        className={cn(
                          "block border-b border-neutral-100 py-3 text-base font-medium text-neutral-800 transition-colors hover:text-brand-blue-700",
                          pathname === l.href && "text-brand-blue-700",
                        )}
                      >
                        {l.label}
                      </Link>
                    </li>
                  ))}
                  <li>
                    <div className="border-b border-neutral-100 py-3">
                      <Link
                        href="/servicios"
                        className={cn(
                          "block text-base font-medium text-neutral-800 transition-colors hover:text-brand-blue-700",
                          pathname.startsWith("/servicios") && "text-brand-blue-700",
                        )}
                      >
                        Servicios
                      </Link>
                      <ul className="mt-2 space-y-1.5 pl-3">
                        {services.map((s) => (
                          <li key={s.slug}>
                            <Link
                              href={`/servicios/${s.slug}`}
                              className="block py-1 text-sm text-neutral-600 transition-colors hover:text-brand-blue-700"
                            >
                              {s.title}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </li>
                  <li>
                    <Link
                      href="/contacto"
                      className={cn(
                        "block border-b border-neutral-100 py-3 text-base font-medium text-neutral-800 transition-colors hover:text-brand-blue-700",
                        pathname === "/contacto" && "text-brand-blue-700",
                      )}
                    >
                      Contacto
                    </Link>
                  </li>
                </ul>

                <div className="mt-6">
                  <Button asChild className="w-full" size="lg">
                    <Link href="/contacto">
                      Solicitar presupuesto
                      <ArrowRight className="size-4" strokeWidth={2} />
                    </Link>
                  </Button>
                </div>

                <div className="mt-8 space-y-3 border-t border-neutral-100 pt-6 text-sm">
                  <p className="flex items-start gap-2 text-neutral-700">
                    <MapPin className="mt-0.5 size-4 text-brand-red-600" strokeWidth={1.75} />
                    {SITE.address.full}
                  </p>
                  {SITE.phones.map((p) => (
                    <a
                      key={p}
                      href={telHref(p)}
                      className="flex items-center gap-2 text-neutral-700 hover:text-brand-blue-700"
                    >
                      <Phone className="size-4 text-brand-red-600" strokeWidth={1.75} />
                      {p}
                    </a>
                  ))}
                  <a
                    href={`mailto:${SITE.email}`}
                    className="flex items-center gap-2 break-all text-neutral-700 hover:text-brand-blue-700"
                  >
                    <Mail className="size-4 text-brand-red-600" strokeWidth={1.75} />
                    {SITE.email}
                  </a>
                </div>
              </nav>
            </motion.aside>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
