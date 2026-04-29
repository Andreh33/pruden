"use client";

import { ArrowRight, Phone } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

import { MobileMenu } from "@/components/layout/mobile-menu";
import { NavLink } from "@/components/layout/nav-link";
import { ServicesMegaMenu } from "@/components/layout/services-mega-menu";
import { TopUtilityBar } from "@/components/layout/top-utility-bar";
import { Button } from "@/components/ui/button";
import { useScrolled } from "@/hooks/use-scrolled";
import { SITE, telHref } from "@/lib/config";
import { cn } from "@/lib/utils";

export function Header() {
  const scrolled = useScrolled(8);

  return (
    <header className="fixed inset-x-0 top-0 z-40 w-full">
      <TopUtilityBar />
      <div
        className={cn(
          "border-b border-transparent bg-white transition-[box-shadow,height,border-color] duration-200 ease-out",
          scrolled && "border-neutral-200 shadow-sm",
        )}
      >
        <div
          className={cn(
            "container-prose flex items-center justify-between transition-[height] duration-200 ease-out",
            scrolled ? "h-20 lg:h-[88px]" : "h-24 lg:h-28",
          )}
        >
          <Link
            href="/"
            aria-label={`${SITE.name} — Inicio`}
            className="inline-flex items-center"
          >
            <Image
              src="/logo-pruden.png"
              alt={SITE.shortName}
              width={350}
              height={100}
              priority
              className={cn(
                "w-auto transition-[height] duration-200 ease-out",
                scrolled ? "h-12 lg:h-14" : "h-14 lg:h-20",
              )}
            />
          </Link>

          <nav
            aria-label="Navegación principal"
            className="hidden items-center gap-8 lg:flex"
          >
            <NavLink href="/">Inicio</NavLink>
            <NavLink href="/empresa">Empresa</NavLink>
            <ServicesMegaMenu />
            <NavLink href="/contacto">Contacto</NavLink>
          </nav>

          <div className="flex items-center gap-2">
            <Button asChild className="hidden lg:inline-flex">
              <Link href="/contacto">
                Solicitar presupuesto
                <ArrowRight className="size-4" strokeWidth={2} />
              </Link>
            </Button>

            <a
              href={telHref(SITE.primaryPhone)}
              aria-label={`Llamar al ${SITE.primaryPhone}`}
              className="inline-flex size-11 items-center justify-center rounded-md text-brand-blue-700 transition-colors hover:bg-brand-blue-50 lg:hidden"
            >
              <Phone className="size-5" strokeWidth={1.75} />
            </a>

            <MobileMenu />
          </div>
        </div>
      </div>
    </header>
  );
}
