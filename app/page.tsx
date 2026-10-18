import React from "react";
import { Hero } from "@/components/sections/Hero";
import { CapabilitiesMarquee } from "@/components/sections/CapabilitiesMarquee";
import { StudioPillars } from "@/components/sections/StudioPillars";
import { ServicesGrid } from "@/components/sections/ServicesGrid";

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
    </>
  );
}
