import React from "react";
import type { Metadata } from "next";
import { Hero } from "@/components/sections/Hero";
import { CapabilitiesMarquee } from "@/components/sections/CapabilitiesMarquee";
import { StudioPillars } from "@/components/sections/StudioPillars";
import { ServicesGrid } from "@/components/sections/ServicesGrid";
import { FeaturedWork } from "@/components/sections/FeaturedWork";
import { StudioManifesto } from "@/components/sections/StudioManifesto";

export const metadata: Metadata = {
  alternates: {
    canonical: "/",
  },
};

export default function Home() {
  return (
    <>
      {/* Homepage Hero Section with Showcase Visual & Metrics */}
      <Hero />

      {/* Infinite Disciplines Ribbon */}
      <CapabilitiesMarquee />

      {/* 3-Pillar Architectural Framework & Strategic Showcase */}
      <StudioPillars />

      {/* Comprehensive 9-Discipline Capabilities Grid */}
      <ServicesGrid />

      {/* Selected Flagship Case Studies Showcase */}
      <FeaturedWork />

      {/* Studio Philosophy & Manifesto Transition */}
      <StudioManifesto />
    </>
  );
}
