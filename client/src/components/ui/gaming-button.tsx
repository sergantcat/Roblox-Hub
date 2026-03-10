import * as React from "react";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export interface GamingButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline" | "ghost";
  size?: "sm" | "md" | "lg" | "xl";
}

const GamingButton = React.forwardRef<HTMLButtonElement, GamingButtonProps>(
  ({ className, variant = "primary", size = "md", children, ...props }, ref) => {
    
    const variants = {
      primary: "bg-primary text-primary-foreground border-transparent hover:bg-primary/90 shadow-[0_0_15px_hsl(var(--primary)/0.4)] hover:shadow-[0_0_25px_hsl(var(--primary)/0.6)]",
      secondary: "bg-secondary text-secondary-foreground border-transparent hover:bg-secondary/90 shadow-[0_0_15px_hsl(var(--secondary)/0.4)] hover:shadow-[0_0_25px_hsl(var(--secondary)/0.6)]",
      outline: "bg-transparent border-2 border-primary text-primary hover:bg-primary/10 shadow-[inset_0_0_10px_hsl(var(--primary)/0.2)] hover:shadow-[inset_0_0_20px_hsl(var(--primary)/0.4),0_0_15px_hsl(var(--primary)/0.3)]",
      ghost: "bg-transparent text-foreground hover:bg-white/5 hover:text-primary border-transparent",
    };

    const sizes = {
      sm: "h-9 px-4 text-xs",
      md: "h-11 px-6 text-sm",
      lg: "h-14 px-8 text-base",
      xl: "h-16 px-10 text-lg uppercase tracking-widest",
    };

    return (
      <button
        ref={ref}
        className={cn(
          "inline-flex items-center justify-center rounded-sm font-display font-bold transition-all duration-300 transform active:scale-95 border uppercase tracking-wider relative overflow-hidden group",
          variants[variant],
          sizes[size],
          className
        )}
        {...props}
      >
        <span className="relative z-10 flex items-center gap-2">{children}</span>
        {variant !== "ghost" && (
          <div className="absolute inset-0 h-full w-full bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:animate-[shimmer_1.5s_infinite]" />
        )}
      </button>
    );
  }
);
GamingButton.displayName = "GamingButton";

export { GamingButton };
