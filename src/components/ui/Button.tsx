import React from "react";
import Link from "next/link";
import { clsx } from "clsx";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline" | "accent" | "danger";
  size?: "sm" | "md" | "lg";
  href?: string;
  external?: boolean;
  children: React.ReactNode;
  icon?: React.ReactNode;
  iconPosition?: "left" | "right";
  className?: string;
}

export const Button: React.FC<ButtonProps> = ({
  variant = "primary",
  size = "md",
  href,
  external,
  children,
  icon,
  iconPosition = "left",
  className,
  ...props
}) => {
  const baseStyles =
    "inline-flex items-center justify-center font-heading font-medium tracking-wider uppercase transition-all duration-200 focus-visible:ring-2 focus-visible:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed select-none rounded-[2px]";

  const variants = {
    primary:
      "bg-navy-800 text-white hover:bg-navy-900 active:bg-navy-900 focus-visible:ring-navy-800 shadow-sm border border-navy-700",
    accent:
      "bg-blue-accent text-white hover:bg-blue-hover active:bg-blue-hover focus-visible:ring-blue-accent shadow-sm",
    secondary:
      "bg-white text-navy-800 hover:bg-gray-100 active:bg-gray-200 border border-gray-200 focus-visible:ring-navy-800",
    outline:
      "bg-transparent text-white border border-white/30 hover:border-white hover:bg-white/10 active:bg-white/20 focus-visible:ring-white",
    danger:
      "bg-red-700 text-white hover:bg-red-800 active:bg-red-900 focus-visible:ring-red-700 shadow-sm",
  };

  const sizes = {
    sm: "px-3.5 py-1.5 text-xs gap-1.5 min-h-[36px]",
    md: "px-5 py-2.5 text-sm gap-2 min-h-[44px]",
    lg: "px-7 py-3.5 text-base gap-2.5 min-h-[52px]",
  };

  const content = (
    <>
      {icon && iconPosition === "left" && <span className="shrink-0">{icon}</span>}
      <span>{children}</span>
      {icon && iconPosition === "right" && <span className="shrink-0">{icon}</span>}
    </>
  );

  if (href) {
    if (external) {
      return (
        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className={clsx(baseStyles, variants[variant], sizes[size], className)}
        >
          {content}
        </a>
      );
    }

    return (
      <Link href={href} className={clsx(baseStyles, variants[variant], sizes[size], className)}>
        {content}
      </Link>
    );
  }

  return (
    <button className={clsx(baseStyles, variants[variant], sizes[size], className)} {...props}>
      {content}
    </button>
  );
};
