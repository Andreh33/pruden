import * as React from "react";

import { cn } from "@/lib/utils";

export type TextareaProps = React.TextareaHTMLAttributes<HTMLTextAreaElement>;

export const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ className, ...props }, ref) => (
    <textarea
      ref={ref}
      className={cn(
        "flex min-h-32 w-full rounded-md border border-neutral-200 bg-white px-3 py-3 text-[15px] text-neutral-900 transition-[border-color,box-shadow] duration-150 ease-out placeholder:text-neutral-400 focus-visible:border-brand-blue-500 focus-visible:outline-none focus-visible:ring-3 focus-visible:ring-brand-blue-50 disabled:cursor-not-allowed disabled:opacity-60 aria-invalid:border-brand-red-600 aria-invalid:ring-3 aria-invalid:ring-brand-red-600/10",
        className,
      )}
      {...props}
    />
  ),
);
Textarea.displayName = "Textarea";
