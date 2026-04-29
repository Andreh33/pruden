"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import { cn } from "@/lib/utils";

export function NavLink({
  href,
  children,
  className,
}: {
  href: string;
  children: React.ReactNode;
  className?: string;
}) {
  const pathname = usePathname();
  const active = pathname === href || (href !== "/" && pathname.startsWith(href));

  return (
    <Link
      href={href}
      className={cn(
        "relative inline-flex items-center px-1 py-2 text-[15px] font-medium text-neutral-800 transition-colors hover:text-brand-blue-700",
        "after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-full after:origin-center after:scale-x-0 after:bg-brand-red-600 after:transition-transform after:duration-200 after:ease-out hover:after:scale-x-100",
        active && "text-brand-blue-700 after:scale-x-100",
        className,
      )}
    >
      {children}
    </Link>
  );
}
