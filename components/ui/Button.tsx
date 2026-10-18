import React from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import styles from "./Button.module.css";

export type ButtonVariant =
  | "primary"
  | "secondary"
  | "outline"
  | "outlineLight"
  | "ghost"
  | "ghostLight";

export type ButtonSize = "sm" | "md" | "lg";

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
  href?: string;
  target?: string;
  rel?: string;
  icon?: React.ReactNode;
  iconPosition?: "left" | "right";
  fullWidth?: boolean;
  children: React.ReactNode;
  className?: string;
}

const variantClassMap: Record<ButtonVariant, string> = {
  primary: styles.variantPrimary,
  secondary: styles.variantSecondary,
  outline: styles.variantOutline,
  outlineLight: styles.variantOutlineLight,
  ghost: styles.variantGhost,
  ghostLight: styles.variantGhostLight,
};

const sizeClassMap: Record<ButtonSize, string> = {
  sm: styles.sizeSm,
  md: styles.sizeMd,
  lg: styles.sizeLg,
};

export const Button = React.forwardRef<
  HTMLButtonElement | HTMLAnchorElement,
  ButtonProps
>(function Button(
  {
    variant = "primary",
    size = "md",
    href,
    target,
    rel,
    icon,
    iconPosition = "right",
    fullWidth = false,
    className,
    disabled = false,
    children,
    type = "button",
    ...props
  },
  ref
) {
  const combinedClassName = cn(
    styles.button,
    variantClassMap[variant],
    sizeClassMap[size],
    fullWidth && styles.fullWidth,
    className
  );

  const content = (
    <>
      {icon && iconPosition === "left" && (
        <span className={cn(styles.icon, styles.iconLeft)} aria-hidden="true">
          {icon}
        </span>
      )}
      <span>{children}</span>
      {icon && iconPosition === "right" && (
        <span className={cn(styles.icon, styles.iconRight)} aria-hidden="true">
          {icon}
        </span>
      )}
    </>
  );

  if (href && !disabled) {
    const isExternal =
      href.startsWith("http") || href.startsWith("mailto:") || href.startsWith("tel:");

    return (
      <Link
        href={href}
        className={combinedClassName}
        target={target || (isExternal ? "_blank" : undefined)}
        rel={rel || (isExternal ? "noopener noreferrer" : undefined)}
        ref={ref as React.Ref<HTMLAnchorElement>}
      >
        {content}
      </Link>
    );
  }

  return (
    <button
      type={type}
      className={combinedClassName}
      disabled={disabled}
      aria-disabled={disabled}
      ref={ref as React.Ref<HTMLButtonElement>}
      {...props}
    >
      {content}
    </button>
  );
});
