/* ============================================================
   RAYVIX DIGITAL — Utility Functions
   ============================================================ */

/**
 * Conditionally join CSS class names.
 * Filters out falsy values for clean conditional class application.
 *
 * @example
 * cn("base-class", isActive && "active", isLarge && "large")
 * // → "base-class active" (when isActive is true, isLarge is false)
 */
export function cn(
  ...classes: (string | boolean | undefined | null)[]
): string {
  return classes.filter(Boolean).join(" ");
}

/**
 * Format a date string into a human-readable format.
 */
export function formatDate(dateString: string, locale = "en-US"): string {
  return new Date(dateString).toLocaleDateString(locale, {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

/**
 * Generate a URL-safe slug from a string.
 */
export function slugify(text: string): string {
  return text
    .toLowerCase()
    .replace(/[^\w\s-]/g, "")
    .replace(/[\s_-]+/g, "-")
    .replace(/^-+|-+$/g, "");
}
