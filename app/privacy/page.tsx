import React from "react";
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Privacy Policy | Rayvix Digital",
  description: "Privacy practices, data protection principles, and client confidentiality standards at Rayvix Digital.",
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "/privacy",
  },
};

export default function PrivacyPolicyPage() {
  return (
    <div style={{ backgroundColor: "var(--color-bg-primary)", minHeight: "80vh", padding: "var(--space-24) 0" }}>
      <div style={{ maxWidth: "var(--container-md)", margin: "0 auto", padding: "0 var(--content-padding)" }}>
        <nav style={{ marginBottom: "var(--space-8)", fontSize: "var(--text-xs)", textTransform: "uppercase", letterSpacing: "var(--tracking-wider)", color: "var(--color-warm-gray)" }}>
          <Link href="/" style={{ color: "var(--color-burgundy)", textDecoration: "none" }}>Home</Link>
          <span style={{ margin: "0 var(--space-2)" }}>/</span>
          <span>Privacy Policy</span>
        </nav>

        <h1 style={{ fontFamily: "var(--font-heading)", fontSize: "var(--text-4xl)", color: "var(--color-burgundy)", marginBottom: "var(--space-4)", lineHeight: "var(--leading-tight)" }}>
          Privacy Policy
        </h1>
        <p style={{ color: "var(--color-warm-gray)", fontSize: "var(--text-sm)", marginBottom: "var(--space-8)" }}>
          Last updated: October 18, 2026
        </p>

        <div style={{ display: "flex", flexDirection: "column", gap: "var(--space-6)", fontSize: "var(--text-base)", lineHeight: "var(--leading-relaxed)", color: "var(--color-charcoal)" }}>
          <section>
            <h2 style={{ fontFamily: "var(--font-heading)", fontSize: "var(--text-2xl)", color: "var(--color-burgundy)", marginBottom: "var(--space-2)" }}>
              1. Commitment to Client Confidentiality
            </h2>
            <p>
              Rayvix Digital operates with strict discretion. We do not sell, rent, or trade prospective client data, strategic consultation briefs, or proprietary business details to third parties under any circumstances.
            </p>
          </section>

          <section>
            <h2 style={{ fontFamily: "var(--font-heading)", fontSize: "var(--text-2xl)", color: "var(--color-burgundy)", marginBottom: "var(--space-2)" }}>
              2. Information We Receive
            </h2>
            <p>
              When you submit a consultation brief via our website or direct email, we collect only the details you provide (e.g., name, corporate email address, organization name, current website, and project scope requirements) strictly to evaluate your inquiry and prepare architectural proposals.
            </p>
          </section>

          <section>
            <h2 style={{ fontFamily: "var(--font-heading)", fontSize: "var(--text-2xl)", color: "var(--color-burgundy)", marginBottom: "var(--space-2)" }}>
              3. Mutual Non-Disclosure
            </h2>
            <p>
              All proprietary materials, wireframes, business metrics, and code repositories shared during prospective or active engagements are treated under strict confidentiality and covered by formal mutual Non-Disclosure Agreements (NDA) upon request.
            </p>
          </section>

          <section>
            <h2 style={{ fontFamily: "var(--font-heading)", fontSize: "var(--text-2xl)", color: "var(--color-burgundy)", marginBottom: "var(--space-2)" }}>
              4. Contact Regarding Privacy
            </h2>
            <p>
              If you have any questions regarding our privacy practices or wish to request the deletion of your consultation brief, please contact our studio principals directly via our{" "}
              <Link href="/contact" style={{ color: "var(--color-burgundy)", fontWeight: 500 }}>
                Strategic Consultation intake
              </Link>.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
