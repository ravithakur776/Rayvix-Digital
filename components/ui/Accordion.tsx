"use client";

import React, { useState } from "react";
import styles from "./Accordion.module.css";

export interface AccordionEntry {
  id?: string;
  question: string;
  answer: string;
  category?: string;
}

interface AccordionProps {
  items: AccordionEntry[];
  allowMultiple?: boolean;
  defaultOpenIndex?: number;
}

export function Accordion({
  items,
  allowMultiple = false,
  defaultOpenIndex = 0
}: AccordionProps) {
  const [openIndices, setOpenIndices] = useState<number[]>(
    defaultOpenIndex !== undefined && defaultOpenIndex >= 0 ? [defaultOpenIndex] : []
  );

  const toggleItem = (index: number) => {
    setOpenIndices((prev) => {
      if (prev.includes(index)) {
        return prev.filter((i) => i !== index);
      } else {
        return allowMultiple ? [...prev, index] : [index];
      }
    });
  };

  return (
    <div className={styles.accordionRoot} role="region" aria-label="Frequently Asked Questions">
      {items.map((item, index) => {
        const isOpen = openIndices.includes(index);
        const triggerId = `accordion-trigger-${index}`;
        const contentId = `accordion-content-${index}`;

        return (
          <div
            key={index}
            className={`${styles.item} ${isOpen ? styles.itemOpen : ""}`}
          >
            <button
              type="button"
              id={triggerId}
              className={styles.trigger}
              onClick={() => toggleItem(index)}
              aria-expanded={isOpen}
              aria-controls={contentId}
            >
              <div className={styles.triggerTitleWrap}>
                {item.category && (
                  <span className={styles.categoryTag}>{item.category}</span>
                )}
                <span>{item.question}</span>
              </div>
              <span className={styles.iconWrap} aria-hidden="true">
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 14 14"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M7 1V13M1 7H13"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                  />
                </svg>
              </span>
            </button>

            <div
              id={contentId}
              role="region"
              aria-labelledby={triggerId}
              className={styles.contentWrapper}
              style={{
                display: isOpen ? "block" : "none"
              }}
            >
              <div className={styles.contentInner}>
                <p>{item.answer}</p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
