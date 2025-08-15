import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";
import NextLink from "next/link";

const animatedButtonVariants = cva(
  "inline-flex items-center justify-center rounded-md text-sm font-medium transition-all duration-300 ease-in-out focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 relative overflow-hidden group",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground hover:bg-primary/90 hover:scale-105 hover:shadow-lg",
        destructive: "bg-destructive text-destructive-foreground hover:bg-destructive/90 hover:scale-105 hover:shadow-lg",
        outline: "border border-input bg-background hover:bg-accent hover:text-accent-foreground hover:scale-105 hover:shadow-md",
        secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/80 hover:scale-105 hover:shadow-lg",
        ghost: "hover:bg-accent hover:text-accent-foreground hover:scale-105",
        link: "text-primary underline-offset-4 hover:underline hover:scale-105",
        orange: "bg-orange-500 text-white hover:bg-orange-600 hover:scale-105 hover:shadow-lg",
      },
      size: {
        default: "h-10 px-4 py-2",
        sm: "h-9 rounded-md px-3",
        lg: "h-11 rounded-md px-8",
        icon: "h-10 w-10",
      },
      animation: {
        slide: "hover:translate-x-2",
        bounce: "hover:animate-bounce",
        pulse: "hover:animate-pulse",
        wiggle: "hover:animate-wiggle",
        none: "",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
      animation: "slide",
    },
  }
);

export interface AnimatedButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof animatedButtonVariants> {
  asChild?: boolean;
  icon?: React.ReactNode;
  iconPosition?: "left" | "right";
  loading?: boolean;
  href?: string;
}

const AnimatedButton = React.forwardRef<HTMLButtonElement, AnimatedButtonProps>(
  (
    {
      className,
      variant,
      size,
      animation,
      icon,
      iconPosition = "right",
      loading = false,
      children,
      href,
      ...props
    },
    ref
  ) => {
    const buttonContent = (
      <>
        {/* Animated background effect */}
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-out" />
        
        {/* Content container */}
        <div className="relative flex items-center gap-2">
          {icon && iconPosition === "left" && (
            <span className="transition-transform duration-300 group-hover:scale-110">
              {icon}
            </span>
          )}
          
          {loading ? (
            <div className="flex items-center gap-2">
              <div className="h-4 w-4 animate-spin rounded-full border-2 border-current border-t-transparent" />
              <span>Loading...</span>
            </div>
          ) : (
            children
          )}
          
          {icon && iconPosition === "right" && (
            <span className="transition-transform duration-300 group-hover:translate-x-1 group-hover:scale-110">
              {icon}
            </span>
          )}
        </div>
      </>
    );

    if (href) {
      return (
        <NextLink href={href} className={cn(animatedButtonVariants({ variant, size, animation, className }))}>
          {buttonContent}
        </NextLink>
      );
    }

    return (
      <button
        className={cn(animatedButtonVariants({ variant, size, animation, className }))}
        ref={ref}
        disabled={loading}
        {...props}
      >
        {buttonContent}
      </button>
    );
  }
);

AnimatedButton.displayName = "AnimatedButton";

export { AnimatedButton, animatedButtonVariants };
