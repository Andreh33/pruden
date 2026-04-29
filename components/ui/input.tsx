import * as React from "react";

import { cn } from "@/lib/utils";

export type InputProps = React.InputHTMLAttributes<HTMLInputElement>;

export const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type = "text", ...props }, ref) => (
    <input
      ref={ref}
      type={type}
      className={cn(
        "flex h-11 w-full rounded-md border border-neutral-200 bg-white px-3 text-[15px] text-neutral-900 transition-[border-color,box-shadow] duration-150 ease-out file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-neutral-400 focus-visible:border-brand-blue-500 focus-visible:outline-none focus-visible:ring-3 focus-visible:ring-brand-blue-50 disabled:cursor-not-allowed disabled:opacity-60 aria-invalid:border-brand-red-600 aria-invalid:ring-3 aria-invalid:ring-brand-red-600/10",
        className,
      )}
      {...props}
    />
  ),
);
Input.displayName = "Input";
