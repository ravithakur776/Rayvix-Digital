/* ============================================================
   RAYVIX DIGITAL — Portfolio Case Studies Data & Specifications
   Single source of truth for client case studies and selected works.
   ============================================================ */

export interface CaseStudyMetric {
  value: string;
  label: string;
}

export interface CaseStudyDetail {
  slug: string;
  title: string;
  client: string;
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
  testimonial: {
    quote: string;
    author: string;
    role: string;
    company: string;
  };
}

export const PORTFOLIO_DATA: CaseStudyDetail[] = [
  {
    slug: "lumina-luxury-living",
    title: "Lumina Luxury Living",
    client: "Lumina Developments Ltd.",
    category: "Web Development",
    tags: ["Next.js 16", "Brand Identity", "High-Ticket Funnel", "Headless CMS"],
    year: "2026",
    duration: "8 Weeks",
    heroImage: "/images/case-study-stage.webp",
    metricHighlight: "+340% Qualified Inquiries",
    metrics: [
      { value: "+340%", label: "High-Ticket Inbound Inquiries" },
      { value: "0.38s", label: "Global Load Time" },
      { value: "$18.5M", label: "Attributed Property Sales" },
      { value: "100%", label: "Core Web Vitals Score" },
    ],
    tagline: "High-Performance Web Architecture for Premium Real Estate",
    overview:
      "Lumina Luxury Living required an elite digital presence worthy of their ultra-luxury residential properties across prime regional markets. We engineered a bespoke Next.js web application paired with an editorial visual identity that transformed how prospective buyers explore multi-million dollar estates.",
    challenge:
      "The client's previous WordPress platform suffered from slow load times (>4.2 seconds), fragile plugin dependencies, and an impersonal enquiry form that failed to convert high-net-worth buyers browsing from mobile devices.",
    solution:
      "Rayvix Digital rebuilt Lumina's platform from the foundation up using Next.js App Router, handcrafted CSS modules, and an intuitive Sanity headless CMS. We integrated high-resolution floorplan viewers, interactive virtual walk-throughs, and an automated lead qualification triage directly into their executive sales team's WhatsApp and CRM.",
    technologies: ["Next.js 16", "React 19", "TypeScript", "Pure CSS Modules", "Sanity CMS", "Vercel Edge"],
    deliverables: [
      "Bespoke Web Application Architecture",
      "Living Design System & Token Suite",
      "Interactive Property Floorplan Engine",
      "Automated High-Ticket Lead Triage",
      "Global CDN & Edge Optimization",
    ],
    testimonial: {
      quote:
        "Rayvix Digital elevated our digital presence to international luxury standards. The speed, aesthetic sophistication, and caliber of inbound buyer inquiries exceeded our highest expectations.",
      author: "Aditya Singhania",
      role: "Managing Director",
      company: "Lumina Luxury Living",
    },
  },
  {
    slug: "aurora-health-clinic",
    title: "Aurora Integrative Health",
    client: "Aurora Medical Group",
    category: "SEO & Marketing",
    tags: ["Google Maps SEO", "Digital Systems", "Local Pack Dominance", "Patient Portal"],
    year: "2026",
    duration: "10 Weeks",
    heroImage: "/images/case-study-bloom.webp",
    metricHighlight: "#1 Google Maps Ranking",
    metrics: [
      { value: "#1", label: "Google Maps & Local Pack Rank" },
      { value: "+420%", label: "Direct Appointment Bookings" },
      { value: "14,000+", label: "Monthly High-Intent Visitors" },
      { value: "4.9★", label: "Verified Review Authority" },
    ],
    tagline: "Local Search Domination & Automated Patient Acquisition",
    overview:
      "Aurora Medical Group operates premier wellness and specialized medical clinics. They partnered with Rayvix Digital to establish definitive search authority across Mathura, Vrindavan, and Agra, backed by a frictionless appointment booking pipeline.",
    challenge:
      "Despite clinical excellence, Aurora was losing patients to competitors who ranked higher on Google Maps. Their telephone reception lines were overwhelmed, leading to high drop-off rates and missed consultations during peak hours.",
    solution:
      "We executed an aggressive technical and local SEO overhaul: schema markup for medical entities, location landing pages, synchronized directory citations, and an automated online booking system. Patients can now schedule consultations 24/7 with instant WhatsApp reminders and calendar confirmation.",
    technologies: ["Next.js App Router", "Structured Schema JSON-LD", "Google Cloud APIs", "Twilio / WhatsApp API", "Supabase"],
    deliverables: [
      "Multi-Location Search Architecture",
      "Automated Patient Booking Engine",
      "Google Business Profile Optimization",
      "Automated SMS & WhatsApp Reminders",
      "Local Citation Network Sync (50+ Hubs)",
    ],
    testimonial: {
      quote:
        "Within 60 days of launching with Rayvix, our clinics became the top-ranked medical centers in the region. Our appointment calendars are now consistently booked weeks in advance.",
      author: "Dr. Rohini Mehta",
      role: "Medical Director",
      company: "Aurora Integrative Health",
    },
  },
  {
    slug: "veloce-creative-studio",
    title: "Véloce Atelier",
    client: "Véloce International",
    category: "Creative Direction",
    tags: ["Headless E-Commerce", "Art Direction", "Editorial Motion", "Visual Identity"],
    year: "2025",
    duration: "6 Weeks",
    heroImage: "/images/case-study-impact.webp",
    metricHighlight: "$2.4M Direct Sales",
    metrics: [
      { value: "$2.4M", label: "Direct-to-Consumer Sales" },
      { value: "+185%", label: "Average Order Value (AOV)" },
      { value: "4.2%", label: "Checkout Conversion Rate" },
      { value: "< 0.4s", label: "Instant Page Transitions" },
    ],
    tagline: "Bespoke Digital Flagship & Visual Identity for Luxury Goods",
    overview:
      "Véloce Atelier designs bespoke leather accessories and luxury lifestyle essentials. Rayvix Digital provided end-to-end creative direction, editorial photography art direction, and a high-performance headless digital flagship.",
    challenge:
      "Off-the-shelf Shopify themes made the brand look identical to mass-market dropshippers. The generic look eroded brand equity, while slow checkout flows dampened conversion rates.",
    solution:
      "We developed an editorial sensory experience combining warm champagne textures, fluid view transitions, and custom product customizers. A headless storefront was architected to pair Shopify’s checkout backend with a lightning-fast custom Next.js frontend.",
    technologies: ["Next.js 16", "Shopify Storefront API", "Pure CSS Modules", "View Transitions API", "Stripe"],
    deliverables: [
      "Complete Brand Identity & Typography Guidelines",
      "Headless E-Commerce Digital Flagship",
      "Bespoke Product Customizer Module",
      "High-Fidelity Campaign Art Direction",
      "One-Click Checkout Optimization",
    ],
    testimonial: {
      quote:
        "The digital flagship Rayvix built for us looks and feels like a luxury salon. Our average order value nearly doubled because our customers instantly recognized the craft and prestige.",
      author: "Julian Vance",
      role: "Creative Founder",
      company: "Véloce Atelier",
    },
  },
  {
    slug: "vanguard-capital-advisors",
    title: "Vanguard Capital Advisors",
    client: "Vanguard Private Wealth",
    category: "Digital Systems",
    tags: ["Client Portal", "AI Automation", "Role-Based Auth", "Encrypted Systems"],
    year: "2025",
    duration: "12 Weeks",
    heroImage: "/images/case-study-partner.webp",
    metricHighlight: "18 hrs/week Saved per Advisor",
    metrics: [
      { value: "18 hrs", label: "Weekly Admin Saved per Advisor" },
      { value: "100%", label: "Zero Lost Lead Follow-Ups" },
      { value: "256-bit", label: "End-to-End Encryption" },
      { value: "12 min", label: "Average Client Onboarding Time" },
    ],
    tagline: "Autonomous Client Portal & AI-Powered Wealth Telemetry",
    overview:
      "Vanguard Capital manages bespoke investment portfolios for family offices and institutional investors. Rayvix Digital architected a secure private client portal and automated investor onboarding pipeline.",
    challenge:
      "Advisors spent 30% of their billable hours answering routine portfolio inquiries, manually sending PDF account summaries, and chasing document signatures across disparate email threads.",
    solution:
      "We engineered a private portal with role-based authentication, real-time portfolio performance charts, and an AI-driven document digestion assistant that handles compliance checks and client document processing autonomously.",
    technologies: ["Next.js App Router", "TypeScript", "PostgreSQL", "Supabase Auth", "OpenAI Embeddings", "AWS S3 Vault"],
    deliverables: [
      "Secure Role-Based Client Portal",
      "Automated Investor Onboarding Workflow",
      "Interactive Telemetry & Wealth Dashboards",
      "AI-Powered Document Verification Assistant",
      "SOC-2 Compliant Cloud Architecture",
    ],
    testimonial: {
      quote:
        "Rayvix didn't just build software—they fundamentally transformed our firm's operational efficiency. Our partners now spend their time advising clients instead of doing manual paperwork.",
      author: "Marcus Sterling",
      role: "Senior Partner",
      company: "Vanguard Capital",
    },
  },
];

export function getCaseStudyBySlug(slug: string): CaseStudyDetail | undefined {
  return PORTFOLIO_DATA.find((study) => study.slug === slug);
}
