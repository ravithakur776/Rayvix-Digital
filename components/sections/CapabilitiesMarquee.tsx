import React from "react";
import styles from "./CapabilitiesMarquee.module.css";

const DISCIPLINES = [
  "Bespoke Web Development",
  "Creative Direction",
  "Brand Identity",
  "AI Automation & Workflows",
  "Digital Systems Architecture",
  "Technical & Local SEO",
  "Performance Engineering",
  "High-Converting Content",
  "Growth Marketing Strategy",
];

export function CapabilitiesMarquee() {
  return (
    <div
      className={styles.marqueeSection}
      aria-label="Studio Capabilities and Core Disciplines"
    >
      <div className={styles.track}>
        {/* Set 1 */}
        <ul className={styles.list}>
          {DISCIPLINES.map((discipline) => (
            <li key={`first-${discipline}`} className={styles.item}>
              <span>{discipline}</span>
              <span className={styles.separator} aria-hidden="true">✦</span>
            </li>
          ))}
        </ul>

        {/* Set 2 (for seamless loop) */}
        <ul className={styles.list} aria-hidden="true">
          {DISCIPLINES.map((discipline) => (
            <li key={`second-${discipline}`} className={styles.item}>
              <span>{discipline}</span>
              <span className={styles.separator} aria-hidden="true">✦</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
