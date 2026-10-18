/* ============================================================
   RAYVIX DIGITAL — Portfolio Case Studies & Concept Architecture
   Single source of truth for architectural systems demonstrations.
   ============================================================ */

export interface CaseStudyMetric {
  value: string;
  label: string;
}

export interface StudioConceptNote {
  summary: string;
  discipline: string;
}

export interface CaseStudyDetail {
  slug: string;
  title: string;
  client: string;
  isConcept: boolean;
  category:
    | "Web Development"
    | "Creative Direction"
    | "Brand Identity"
    | "Digital Systems"
    | "AI Automation"
    | "SEO & Marketing";
  tags: string[];
  year: string;
  duration: string;
  heroImage: string;
  metricHighlight: string;
  metrics: CaseStudyMetric[];
  tagline: string;
  overview: string;
  challenge: string;
  solution: string;
  technologies: string[];
  deliverables: string[];
  studioNote: StudioConceptNote;
}

export const PORTFOLIO_DATA: CaseStudyDetail[] = [
  {
    slug: "lumina-luxury-living",
    title: "Lumina Luxury Living",
    client: "Studio Concept Architecture",
    isConcept: true,
    category: "Web Development",
    tags: ["Next.js 16", "Brand Identity", "High-Ticket Funnel", "Headless CMS"],
    year: "2026",
    duration: "Concept Prototype",
    heroImage: "/images/case-study-stage.webp",
    metricHighlight: "Next.js 16 • Headless CMS",
    metrics: [
      { value: "Next.js 16", label: "App Router Architecture" },
      { value: "< 0.4s", label: "Target First Paint" },
      { value: "Sanity CMS", label: "Headless Content Pipeline" },
      { value: "100%", label: "Custom Code Ownership" },
    ],
    tagline: "High-Performance Web Architecture for Premium Real Estate",
    overview:
      "Lumina Luxury Living is a studio architectural prototype demonstrating how an ultra-luxury residential property platform can be engineered with Next.js App Router and an editorial visual identity to provide frictionless property exploration.",
    challenge:
      "Conventional real estate websites frequently suffer from slow load times (>4 seconds), fragile plugin dependencies, and bloated template themes that fail to convey prestige or convert high-net-worth mobile visitors.",
    solution:
      "Rayvix Digital architected a bespoke Next.js system using handcrafted CSS modules, high-resolution floorplan viewers, responsive virtual walk-through components, and an automated lead qualification triage directly connected to CRM endpoints.",
    technologies: ["Next.js 16", "React 19", "TypeScript", "Pure CSS Modules", "Sanity CMS", "Edge Compilation"],
    deliverables: [
      "Bespoke Web Application Architecture",
      "Living Design System & Token Suite",
      "Interactive Property Floorplan Engine",
      "Automated High-Ticket Lead Triage",
      "Global CDN & Edge Optimization",
    ],
    studioNote: {
      summary:
        "Engineered as an ultra-luxury real estate concept demonstrating how Next.js 16 and Sanity CMS deliver sub-second floorplan exploration for high-intent buyers without bloated template frameworks.",
      discipline: "Web Systems Architecture",
    },
  },
  {
    slug: "aurora-health-clinic",
    title: "Aurora Integrative Health",
    client: "Studio Concept Architecture",
    isConcept: true,
    category: "SEO & Marketing",
    tags: ["Google Maps SEO", "Digital Systems", "Local Pack Dominance", "Patient Portal"],
    year: "2026",
    duration: "Concept Prototype",
    heroImage: "/images/case-study-bloom.webp",
    metricHighlight: "Local Search Architecture",
    metrics: [
      { value: "Local SEO", label: "Multi-Location Architecture" },
      { value: "Schema.org", label: "Entity Knowledge Graph" },
      { value: "Automated", label: "Triage & Booking Pipeline" },
      { value: "Zero Bloat", label: "Handcrafted CSS Modules" },
    ],
    tagline: "Local Search Architecture & Automated Patient Acquisition",
    overview:
      "Aurora Integrative Health is a specialized healthcare concept engineered to demonstrate how local entity SEO, structured JSON-LD schemas, and streamlined appointment scheduling establish definitive search visibility across regional hubs.",
    challenge:
      "Regional medical practices often struggle with fragmented Google Business profiles, unoptimized local schema, and overwhelmed telephone reception that creates high appointment drop-off rates.",
    solution:
      "We modeled an aggressive technical and local SEO structure: schema markup for medical entities, regional landing pages, citation network synchronization, and an automated online booking pipeline with automated notifications.",
    technologies: ["Next.js App Router", "Structured Schema JSON-LD", "Google Cloud APIs", "Twilio / WhatsApp API", "Supabase"],
    deliverables: [
      "Multi-Location Search Architecture",
      "Automated Patient Booking Engine",
      "Google Business Profile Optimization",
      "Automated SMS & WhatsApp Reminders",
      "Local Citation Network Sync",
    ],
    studioNote: {
      summary:
        "Architected as a specialized clinic concept showing how nested Schema.org medical entities and automated booking pipelines establish regional search authority and eliminate appointment friction.",
      discipline: "Search & Systems Engineering",
    },
  },
  {
    slug: "veloce-creative-studio",
    title: "Véloce Atelier",
    client: "Studio Concept Architecture",
    isConcept: true,
    category: "Creative Direction",
    tags: ["Headless E-Commerce", "Art Direction", "Editorial Motion", "Visual Identity"],
    year: "2026",
    duration: "Concept Prototype",
    heroImage: "/images/case-study-impact.webp",
    metricHighlight: "Headless Storefront API",
    metrics: [
      { value: "Headless", label: "E-Commerce Architecture" },
      { value: "Fluid Motion", label: "Kinetic View Transitions" },
      { value: "Responsive", label: "Fluid Multi-Viewport" },
      { value: "Custom UI", label: "Tokenized Component System" },
    ],
    tagline: "Bespoke Digital Flagship & Visual Identity for Luxury Goods",
    overview:
      "Véloce Atelier is an artisanal luxury goods concept demonstrating how custom Next.js storefronts paired with Shopify Storefront APIs deliver cinematic, sub-second shopping experiences without the constraints of generic e-commerce templates.",
    challenge:
      "Off-the-shelf e-commerce themes dilute brand prestige with cookie-cutter layouts, slow JavaScript checkout transitions, and generic typography that fails to justify premium pricing.",
    solution:
      "We engineered an editorial sensory experience combining warm champagne textures, fluid view transitions, and custom product customizers, pairing headless checkout security with a bespoke Next.js frontend.",
    technologies: ["Next.js 16", "Shopify Storefront API", "Pure CSS Modules", "View Transitions API", "Stripe"],
    deliverables: [
      "Complete Brand Identity & Typography Guidelines",
      "Headless E-Commerce Digital Flagship",
      "Bespoke Product Customizer Module",
      "High-Fidelity Campaign Art Direction",
      "One-Click Checkout Optimization",
    ],
    studioNote: {
      summary:
        "Conceived as an editorial digital flagship demonstrating how headless Shopify integrations and custom CSS view transitions outperform mass-market e-commerce themes in luxury market positioning.",
      discipline: "Creative Direction & Headless Commerce",
    },
  },
  {
    slug: "vanguard-capital-advisors",
    title: "Vanguard Capital Advisors",
    client: "Studio Concept Architecture",
    isConcept: true,
    category: "Digital Systems",
    tags: ["Client Portal", "AI Automation", "Role-Based Auth", "Encrypted Systems"],
    year: "2026",
    duration: "Concept Prototype",
    heroImage: "/images/case-study-partner.webp",
    metricHighlight: "Role-Based Client Portal",
    metrics: [
      { value: "Encrypted", label: "Client Vault Architecture" },
      { value: "Role-Based", label: "Strict Permission Controls" },
      { value: "AI Pipeline", label: "Document Verification Agent" },
      { value: "Static Edge", label: "Global Edge Prerender" },
    ],
    tagline: "Autonomous Client Portal & AI-Powered Wealth Telemetry",
    overview:
      "Vanguard Capital Advisors is a private wealth management prototype demonstrating how secure, role-based client portals and automated document processing eliminate administrative overhead for high-touch advisory firms.",
    challenge:
      "Wealth advisors often spend hours manual handling PDF summaries, chasing document verification across disparate channels, and managing uncoordinated communications.",
    solution:
      "We architected a private portal prototype with role-based authentication, interactive portfolio performance visualizations, and an AI-driven document verification assistant that handles compliance checks autonomously.",
    technologies: ["Next.js App Router", "TypeScript", "PostgreSQL", "Supabase Auth", "OpenAI Embeddings", "Cloud Storage"],
    deliverables: [
      "Secure Role-Based Client Portal",
      "Automated Investor Onboarding Workflow",
      "Interactive Telemetry & Wealth Dashboards",
      "AI-Powered Document Verification Assistant",
      "Enterprise Cloud Security Architecture",
    ],
    studioNote: {
      summary:
        "Designed as an enterprise private wealth management prototype demonstrating secure role-based portals and AI-assisted client document triage to streamline high-compliance workflows.",
      discipline: "Secure Systems & Operational AI",
    },
  },
];

export function getCaseStudyBySlug(slug: string): CaseStudyDetail | undefined {
  return PORTFOLIO_DATA.find((study) => study.slug === slug);
}
