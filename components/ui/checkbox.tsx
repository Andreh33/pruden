import * as React from "react";

import { cn } from "@/lib/utils";

export type CheckboxProps = Omit<
  React.InputHTMLAttributes<HTMLInputElement>,
  "type"
>;

export const Checkbox = React.forwardRef<HTMLInputElement, CheckboxProps>(
  ({ className, ...props }, ref) => (
    <input
      ref={ref}
      type="checkbox"
      className={cn(
        "size-[18px] shrink-0 rounded-[4px] border border-neutral-300 bg-white transition-colors duration-150",
        "checked:border-brand-blue-700 checked:bg-brand-blue-700",
        "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-blue-500 focus-visible:ring-offset-2",
        "disabled:cursor-not-allowed disabled:opacity-60",
        "aria-invalid:border-brand-red-600",
        className,
      )}
      {...props}
    />
  ),
);
Checkbox.displayName = "Checkbox";
