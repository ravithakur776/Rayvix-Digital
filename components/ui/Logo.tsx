import React from "react";
import Link from "next/link";
import Image from "next/image";
import { cn } from "@/lib/utils";
import styles from "./Logo.module.css";

export interface LogoProps {
  variant?: "light" | "dark";
  size?: "sm" | "md" | "lg";
  layout?: "horizontal" | "stacked" | "monogram";
  withLink?: boolean;
  priority?: boolean;
  className?: string;
}

export function Logo({
  variant = "light",
  size = "md",
  layout = "horizontal",
  withLink = true,
  priority = false,
  className,
}: LogoProps) {
  const isDark = variant === "dark";

  // Dimensions based on size
  const monogramDimensions = {
    sm: { width: 32, height: 32 },
    md: { width: 42, height: 42 },
    lg: { width: 56, height: 56 },
  }[size];

  const stackedDimensions = {
    sm: { width: 140, height: 150 },
    md: { width: 180, height: 195 },
    lg: { width: 240, height: 260 },
  }[size];

  const variantClass = isDark ? styles.variantDark : styles.variantLight;
  const sizeClass = {
    sm: styles.sizeSm,
    md: styles.sizeMd,
    lg: styles.sizeLg,
  }[size];

  let logoContent: React.ReactNode;

  if (layout === "monogram") {
    logoContent = (
      <div className={cn(styles.monogram, className)}>
        <Image
          src={isDark ? "/images/monogram-dark.png" : "/images/monogram-light.png"}
          alt="Rayvix Digital Monogram"
          width={monogramDimensions.width}
          height={monogramDimensions.height}
          priority={priority}
          style={{ width: "auto", height: monogramDimensions.height }}
        />
      </div>
    );
  } else if (layout === "stacked") {
    logoContent = (
      <div className={cn(styles.logoWrapper, variantClass, sizeClass, className)}>
        <Image
          src={isDark ? "/images/logo-dark.png" : "/images/logo-light.png"}
          alt="Rayvix Digital — Creative, Web & Systems Studio"
          width={stackedDimensions.width}
          height={stackedDimensions.height}
          priority={priority}
          style={{ width: "auto", height: stackedDimensions.height }}
        />
      </div>
    );
  } else {
    // Horizontal layout (recommended for sticky header & navigation)
    logoContent = (
      <div
        className={cn(
          styles.horizontalLockup,
          variantClass,
          sizeClass,
          className
        )}
      >
        <div className={styles.monogram}>
          <Image
            src={isDark ? "/images/monogram-dark.png" : "/images/monogram-light.png"}
            alt="Rayvix Monogram"
            width={monogramDimensions.width}
            height={monogramDimensions.height}
            priority={priority}
            style={{ width: "auto", height: monogramDimensions.height }}
          />
        </div>
        <div className={styles.textGroup}>
          <span className={styles.brandName}>Rayvix</span>
          <span className={styles.brandTag}>Digital</span>
        </div>
      </div>
    );
  }

  if (withLink) {
    return (
      <Link
        href="/"
        className={styles.logoLink}
        aria-label="Rayvix Digital — Return to homepage"
      >
        {logoContent}
      </Link>
    );
  }

  return logoContent;
}
