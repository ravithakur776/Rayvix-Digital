"use client";

import React, { useEffect, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { NAV_LINKS, SOCIAL_LINKS } from "@/lib/constants";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/Button";
import { Logo } from "@/components/ui/Logo";
import styles from "./MobileNav.module.css";

export interface MobileNavProps {
  isOpen: boolean;
  onClose: () => void;
}

export function MobileNav({ isOpen, onClose }: MobileNavProps) {
  const pathname = usePathname();
  const drawerRef = useRef<HTMLDivElement>(null);

  // Lock body scroll and listen for Escape key
  useEffect(() => {
    if (!isOpen) return;

    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = originalOverflow;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, onClose]);

  return (
    <>
      {/* Backdrop overlay */}
      <div
        className={cn(styles.overlay, isOpen && styles.overlayOpen)}
        onClick={onClose}
        aria-hidden={!isOpen}
      />

      {/* Drawer */}
      <aside
        id="mobile-nav-menu"
        ref={drawerRef}
        className={cn(styles.drawer, isOpen && styles.drawerOpen)}
        role="dialog"
        aria-modal="true"
        aria-label="Mobile Navigation Menu"
        aria-hidden={!isOpen}
      >
        <div className={styles.drawerHeader}>
          <Logo size="sm" layout="horizontal" />
          <button
            type="button"
            className={styles.closeButton}
            onClick={onClose}
            aria-label="Close navigation menu"
          >
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          </button>
        </div>

        <nav className={styles.navList} aria-label="Mobile Navigation">
          {NAV_LINKS.map((item, index) => {
            const isActive =
              pathname === item.href ||
              (item.href !== "/" && pathname.startsWith(item.href));
            const formattedIndex = String(index + 1).padStart(2, "0");

            return (
              <div key={item.href} className={styles.navItem}>
                <Link
                  href={item.href}
                  className={cn(
                    styles.navLink,
                    isActive && styles.navLinkActive
                  )}
                  onClick={onClose}
                  aria-current={isActive ? "page" : undefined}
                >
                  <span>{item.label}</span>
                  <span className={styles.navLinkNumber}>{formattedIndex}</span>
                </Link>
              </div>
            );
          })}
        </nav>

        <div className={styles.drawerFooter}>
          <Button
            href="/contact"
            variant="primary"
            size="lg"
            fullWidth
            onClick={onClose}
          >
            Book a Call
          </Button>

          <div className={styles.contactBlock}>
            <span className={styles.contactLabel}>Direct Inquiries</span>
            <a
              href="mailto:inquiry@rayvixdigital.com"
              className={styles.contactEmail}
            >
              inquiry@rayvixdigital.com
            </a>
          </div>

          <div className={styles.socialRow}>
            {/* LinkedIn */}
            <a
              href={SOCIAL_LINKS.linkedin}
              className={styles.socialIconLink}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Rayvix Digital on LinkedIn"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 10.9h2.79v8.37H6.46v-8.37M7.86 6.32a1.63 1.63 0 1 0 1.63 1.63c0-.9-.73-1.63-1.63-1.63Z" />
              </svg>
            </a>

            {/* X / Twitter */}
            <a
              href={SOCIAL_LINKS.twitter}
              className={styles.socialIconLink}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Rayvix Digital on X"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
              </svg>
            </a>

            {/* Instagram */}
            <a
              href={SOCIAL_LINKS.instagram}
              className={styles.socialIconLink}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Rayvix Digital on Instagram"
            >
              <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
              </svg>
            </a>
          </div>
        </div>
      </aside>
    </>
  );
}
