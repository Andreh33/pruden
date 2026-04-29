import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-semibold transition-[transform,background-color,color,box-shadow,border-color] duration-150 ease-out focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-blue-500 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-60 [&_svg]:size-4 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        primary:
          "bg-brand-red-600 text-white shadow-sm hover:bg-brand-red-700 hover:-translate-y-px active:translate-y-0 active:shadow-none",
        secondary:
          "border border-brand-blue-700 text-brand-blue-700 hover:bg-brand-blue-700 hover:text-white",
        ghost:
          "text-brand-blue-700 hover:bg-brand-blue-50",
        outlineLight:
          "border border-white/80 text-white hover:bg-white hover:text-brand-blue-900",
        link: "text-brand-blue-700 underline-offset-4 hover:underline",
      },
      size: {
        sm: "h-9 px-3 text-[13px]",
        md: "h-11 px-5",
        lg: "h-12 px-7 text-[15px]",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "md",
    },
  },
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        ref={ref}
        className={cn(buttonVariants({ variant, size }), className)}
        {...props}
      />
    );
  },
);
Button.displayName = "Button";

export { Button, buttonVariants };
