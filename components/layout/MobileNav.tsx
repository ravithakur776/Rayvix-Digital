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
            Request a Consultation
          </Button>

          <div className={styles.contactBlock}>
            <span className={styles.contactLabel}>Direct Inquiries</span>
            <a
              href="mailto:contact.rayvix@gmail.com"
              className={styles.contactEmail}
              onClick={onClose}
            >
              contact.rayvix@gmail.com
            </a>
          </div>

          <div className={styles.socialRow}>
            {/* Instagram */}
            {SOCIAL_LINKS.instagram && (
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
                  aria-hidden="true"
                >
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                </svg>
              </a>
            )}

            {/* Facebook */}
            {SOCIAL_LINKS.facebook && (
              <a
                href={SOCIAL_LINKS.facebook}
                className={styles.socialIconLink}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Rayvix Digital on Facebook"
              >
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
              </a>
            )}

            {/* LinkedIn */}
            {SOCIAL_LINKS.linkedin && (
              <a
                href={SOCIAL_LINKS.linkedin}
                className={styles.socialIconLink}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Rayvix Digital on LinkedIn"
              >
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 10.9h2.79v8.37H6.46v-8.37M7.86 6.32a1.63 1.63 0 1 0 1.63 1.63c0-.9-.73-1.63-1.63-1.63Z" />
                </svg>
              </a>
            )}

            {/* GitHub */}
            {SOCIAL_LINKS.github && (
              <a
                href={SOCIAL_LINKS.github}
                className={styles.socialIconLink}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Rayvix Digital on GitHub"
              >
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                  />
                </svg>
              </a>
            )}
          </div>
        </div>
      </aside>
    </>
  );
}
