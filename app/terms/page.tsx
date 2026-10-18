import React from "react";
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Terms of Service | Rayvix Digital",
  description: "Terms of service, milestone engagement framework, and intellectual property transfer principles at Rayvix Digital.",
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "/terms",
  },
};

export default function TermsOfServicePage() {
  return (
    <div style={{ backgroundColor: "var(--color-bg-primary)", minHeight: "80vh", padding: "var(--space-24) 0" }}>
      <div style={{ maxWidth: "var(--container-md)", margin: "0 auto", padding: "0 var(--content-padding)" }}>
        <nav style={{ marginBottom: "var(--space-8)", fontSize: "var(--text-xs)", textTransform: "uppercase", letterSpacing: "var(--tracking-wider)", color: "var(--color-warm-gray)" }}>
          <Link href="/" style={{ color: "var(--color-burgundy)", textDecoration: "none" }}>Home</Link>
          <span style={{ margin: "0 var(--space-2)" }}>/</span>
          <span>Terms of Service</span>
        </nav>

        <h1 style={{ fontFamily: "var(--font-heading)", fontSize: "var(--text-4xl)", color: "var(--color-burgundy)", marginBottom: "var(--space-4)", lineHeight: "var(--leading-tight)" }}>
          Terms of Service
        </h1>
        <p style={{ color: "var(--color-warm-gray)", fontSize: "var(--text-sm)", marginBottom: "var(--space-8)" }}>
          Last updated: October 18, 2026
        </p>

        <div style={{ display: "flex", flexDirection: "column", gap: "var(--space-6)", fontSize: "var(--text-base)", lineHeight: "var(--leading-relaxed)", color: "var(--color-charcoal)" }}>
          <section>
            <h2 style={{ fontFamily: "var(--font-heading)", fontSize: "var(--text-2xl)", color: "var(--color-burgundy)", marginBottom: "var(--space-2)" }}>
              1. Engagement Framework
            </h2>
            <p>
              Rayvix Digital provides bespoke creative direction, full-stack software development, search optimization, and digital systems architecture. All client engagements are executed under formal, fixed-scope milestone agreements detailing specifications, timelines, and deliverables before development commences.
            </p>
          </section>

          <section>
            <h2 style={{ fontFamily: "var(--font-heading)", fontSize: "var(--text-2xl)", color: "var(--color-burgundy)", marginBottom: "var(--space-2)" }}>
              2. 100% Intellectual Property Ownership
            </h2>
            <p>
              Upon final project delivery and fulfillment of agreed milestone payments, all custom source code, design libraries, component kits, and creative assets produced for the client are irrevocably transferred to the client. Rayvix Digital imposes zero recurring proprietary licensing fees or vendor lock-in.
            </p>
          </section>

          <section>
            <h2 style={{ fontFamily: "var(--font-heading)", fontSize: "var(--text-2xl)", color: "var(--color-burgundy)", marginBottom: "var(--space-2)" }}>
              3. Scope & Modifications
            </h2>
            <p>
              Any adjustments to project scope outside the initial milestone agreement are discussed and estimated transparently prior to implementation. We do not bill unexpected hourly charges.
            </p>
          </section>

          <section>
            <h2 style={{ fontFamily: "var(--font-heading)", fontSize: "var(--text-2xl)", color: "var(--color-burgundy)", marginBottom: "var(--space-2)" }}>
              4. Inquiries & Legal Notices
            </h2>
            <p>
              For legal inquiries or questions regarding our terms of service, please reach out to our studio principals via our{" "}
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
