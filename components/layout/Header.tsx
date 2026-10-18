"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { NAV_LINKS } from "@/lib/constants";
import { cn } from "@/lib/utils";
import { Logo } from "@/components/ui/Logo";
import { Button } from "@/components/ui/Button";
import { MobileNav } from "./MobileNav";
import styles from "./Header.module.css";

export function Header() {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  // Monitor scroll for subtle elevation change
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 15);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll(); // Initial check

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <header
        className={cn(styles.header, isScrolled && styles.headerScrolled)}
      >
        <div className={cn("container", styles.inner)}>
          {/* Brand Logo */}
          <Logo size="md" layout="horizontal" priority />

          {/* Desktop Navigation */}
          <nav className={styles.desktopNav} aria-label="Main Navigation">
            {NAV_LINKS.map((item) => {
              const isActive =
                pathname === item.href ||
                (item.href !== "/" && pathname.startsWith(item.href));

              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={cn(
                    styles.navLink,
                    isActive && styles.navLinkActive
                  )}
                  aria-current={isActive ? "page" : undefined}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>

          {/* Actions: CTA and Mobile Menu Trigger */}
          <div className={styles.actions}>
            <div className={styles.desktopCta}>
              <Button href="/contact" variant="primary" size="sm">
                Request a Consultation
              </Button>
            </div>

            <button
              type="button"
              className={cn(
                styles.hamburger,
                isMobileOpen && styles.hamburgerOpen
              )}
              onClick={() => setIsMobileOpen((prev) => !prev)}
              aria-label={isMobileOpen ? "Close navigation menu" : "Open navigation menu"}
              aria-expanded={isMobileOpen}
              aria-controls="mobile-nav-menu"
            >
              <span className={styles.hamburgerLine} />
              <span className={styles.hamburgerLine} />
              <span className={styles.hamburgerLine} />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Navigation Drawer */}
      <MobileNav
        isOpen={isMobileOpen}
        onClose={() => setIsMobileOpen(false)}
      />
    </>
  );
}
