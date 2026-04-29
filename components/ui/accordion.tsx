"use client";

import { ChevronDown } from "lucide-react";
import * as React from "react";

import { cn } from "@/lib/utils";

type AccordionContextValue = {
  openItems: Set<string>;
  toggle: (id: string) => void;
  type: "single" | "multiple";
};

const AccordionContext = React.createContext<AccordionContextValue | null>(null);

export function Accordion({
  children,
  type = "single",
  defaultValue,
  className,
}: {
  children: React.ReactNode;
  type?: "single" | "multiple";
  defaultValue?: string | string[];
  className?: string;
}) {
  const [openItems, setOpenItems] = React.useState<Set<string>>(() => {
    if (!defaultValue) return new Set();
    return new Set(Array.isArray(defaultValue) ? defaultValue : [defaultValue]);
  });

  const toggle = React.useCallback(
    (id: string) => {
      setOpenItems((prev) => {
        const next = new Set(prev);
        if (next.has(id)) {
          next.delete(id);
        } else {
          if (type === "single") next.clear();
          next.add(id);
        }
        return next;
      });
    },
    [type],
  );

  return (
    <AccordionContext.Provider value={{ openItems, toggle, type }}>
      <div className={cn("divide-y divide-neutral-200 border-y border-neutral-200", className)}>
        {children}
      </div>
    </AccordionContext.Provider>
  );
}

export function AccordionItem({
  value,
  question,
  children,
}: {
  value: string;
  question: string;
  children: React.ReactNode;
}) {
  const ctx = React.useContext(AccordionContext);
  if (!ctx) throw new Error("AccordionItem must be used inside <Accordion>");
  const open = ctx.openItems.has(value);
  const id = `accordion-${value}`;

  return (
    <div>
      <button
        type="button"
        aria-expanded={open}
        aria-controls={id}
        onClick={() => ctx.toggle(value)}
        className="flex w-full items-center justify-between gap-4 py-5 text-left text-[16px] font-semibold tracking-tight text-neutral-900 transition-colors hover:text-brand-blue-700"
      >
        <span>{question}</span>
        <ChevronDown
          className={cn(
            "size-4 shrink-0 text-brand-blue-700 transition-transform duration-200 ease-out",
            open && "rotate-180",
          )}
          strokeWidth={2}
        />
      </button>
      <div
        id={id}
        role="region"
        hidden={!open}
        className={cn("grid transition-[grid-template-rows] duration-250 ease-out", open ? "pb-5" : "")}
      >
        <div className="overflow-hidden">
          <div className="text-[15px] leading-relaxed text-neutral-700">{children}</div>
        </div>
      </div>
    </div>
  );
}
