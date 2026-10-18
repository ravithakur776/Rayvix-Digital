export interface StudioPrinciple {
  number: string;
  title: string;
  subtitle: string;
  description: string;
  quote: string;
}

export interface MultidisciplinaryGuild {
  discipline: string;
  leadFocus: string;
  description: string;
  technologies: string[];
  deliverables: string[];
}

export interface StudioMetric {
  value: string;
  label: string;
  detail: string;
}

export interface StudioMilestone {
  era: string;
  title: string;
  narrative: string;
}

export const STUDIO_MANIFESTO = {
  headline: "We reject the disposable web. We build high-leverage digital assets designed to dominate, compound, and endure.",
  subheadline:
    "Rayvix Digital was founded on a singular conviction: ambitious enterprises do not fail from a lack of digital effort—they fail from commoditized execution.",
  paragraphs: [
    "Most commercial websites are built as fleeting digital brochures—fragile templates bloated with third-party plugins, disjointed brand messaging, and zero architectural integrity. When businesses scale, their digital foundation cracks under the weight of slow load times, poor search visibility, and broken conversion funnels.",
    "Rayvix Digital operates differently. We are not a volume agency. We are an elite multidisciplinary studio combining high-aesthetic editorial design, enterprise-grade Next.js software engineering, high-intent organic search optimization, and AI-enabled operational automation.",
    "Every line of code is handwritten. Every typographic rhythm is deliberate. Every system we deploy is calibrated to generate quantifiable commercial leverage for ambitious businesses across the globe."
  ]
};

export const STUDIO_PRINCIPLES: StudioPrinciple[] = [
  {
    number: "01",
    title: "Radical Craftsmanship",
    subtitle: "Artistry without compromise",
    description:
      "Aesthetics are not superficial decoration; they are the visceral signal of quality, trust, and pricing power. We craft bespoke design systems and bespoke interfaces that make your brand unmistakable in crowded global markets.",
    quote: "True luxury in software is the invisible precision of every interaction, transition, and typographic hierarchy."
  },
  {
    number: "02",
    title: "Zero-Bloat Architecture",
    subtitle: "Performance as an operational advantage",
    description:
      "We build exclusively with modern headless architectures, pure CSS tokens, and statically compiled Next.js. No fragile WordPress themes, no sluggish page builders. Every millisecond shaved is conversion rate gained and technical debt eliminated.",
    quote: "Speed is not an afterthought; it is the ultimate user experience and the foundation of search authority."
  },
  {
    number: "03",
    title: "Compounding Commercial Leverage",
    subtitle: "Digital presence as a balance-sheet asset",
    description:
      "A website should not be a recurring overhead cost. Engineered correctly, your digital platform compounds in search equity, captures high-intent inbound demand, and lowers customer acquisition costs year after year.",
    quote: "We don't measure beauty in vacuum; we measure it in customer lifetime value and defensible brand equity."
  },
  {
    number: "04",
    title: "Defensible Brand Authority",
    subtitle: "Commanding premium positioning",
    description:
      "Commodity players compete on price. Market leaders compete on perceived authority. We engineer positioning narratives, case study architectures, and editorial interfaces that instantly establish our clients as category leaders.",
    quote: "When your digital presence commands prestige, price resistance dissipates."
  }
];

export const MULTIDISCIPLINARY_GUILDS: MultidisciplinaryGuild[] = [
  {
    discipline: "Creative Direction & Brand Architecture",
    leadFocus: "Editorial Luxury & Identity Systems",
    description:
      "Crafting distinctive typographic hierarchies, bespoke color palettes, art direction, and digital brand guidelines that reflect institutional authority and timeless taste.",
    technologies: ["Design Systems", "Figma", "Typographic Rhythm", "Art Direction", "Motion Principles"],
    deliverables: ["Brand Identity Manual", "UI Component Libraries", "Editorial Motion Guidelines", "Visual Asset Ecosystem"]
  },
  {
    discipline: "Next.js & Software Systems Engineering",
    leadFocus: "Performant, Resilient Full-Stack Platforms",
    description:
      "Engineering custom web applications, App Router architectures, headless CMS integrations, and headless e-commerce platforms engineered for sub-second speeds and 100% uptime.",
    technologies: ["Next.js 16", "React 19", "TypeScript", "Vanilla CSS Modules", "Edge Computing"],
    deliverables: ["Custom Web Applications", "Sub-Second Static Prerender", "Clean API Integrations", "Enterprise Core Web Vitals"]
  },
  {
    discipline: "Search Authority & Growth Engineering",
    leadFocus: "High-Intent Inbound Acquisition",
    description:
      "Architecting technical SEO structures, programmatic content pipelines, semantic schema markup, and conversion-calibrated funnels that capture high-value enterprise search demand.",
    technologies: ["Semantic JSON-LD", "Core Web Vitals", "Information Architecture", "Conversion Funnels", "Search Analytics"],
    deliverables: ["Technical Search Audits", "Entity SEO Structuring", "Conversion Rate Optimization", "Growth Measurement Dashboards"]
  },
  {
    discipline: "AI Automation & Operational Workflows",
    leadFocus: "Custom Intelligence & Automated Scale",
    description:
      "Designing intelligent backend workflows, AI agent integrations, customer communication automation, and proprietary data pipelines that multiply team productivity.",
    technologies: ["LLM Orchestration", "API Pipelines", "Automated CRM Sync", "Intelligent Workflows", "Prompt Engineering"],
    deliverables: ["Custom AI Agent Backends", "Workflow Automation Pipelines", "Automated Lead Routing", "Operational Bottleneck Elimination"]
  }
];

export const STUDIO_METRICS: StudioMetric[] = [
  {
    value: "100%",
    label: "Hand-Crafted Code",
    detail: "Zero generic site-builder templates or bloated themes; every component is engineered bespoke."
  },
  {
    value: "99.8%",
    label: "Core Web Vitals Benchmark",
    detail: "Relentless focus on sub-second paint times, perfect layout stability, and zero FID."
  },
  {
    value: "4",
    label: "Max Client Engagements / Quarter",
    detail: "We deliberately constrain studio capacity to guarantee obsessive senior-level dedication."
  },
  {
    value: "0%",
    label: "Offshore Outsourcing",
    detail: "All engineering, creative direction, and strategy are led directly by our in-house principals."
  }
];

export const STUDIO_REGIONAL_HERITAGE = {
  badge: "Regional Roots & Global Reach",
  title: "Grounded in Cultural Heritage. Engineered for the Global Stage.",
  lead:
    "Rayvix Digital was forged in the historic heartland of Uttar Pradesh—drawing inspiration from the architectural symmetry, spiritual resonance, and monumental craftsmanship of Mathura, Vrindavan, and Agra.",
  paragraphs: [
    "From these historic crossroads of trade, art, and timeless monumentality, we bring an uncompromising dedication to permanence and enduring quality. Where conventional digital agencies rush disposable solutions, we build digital monuments designed to withstand the volatile shifts of technology.",
    "Today, our studio partners with ambitious founders, visionary clinics, capital advisors, and luxury brands across Mumbai, Delhi, Bengaluru, Dubai, London, and North America—proving that profound regional craftsmanship and world-class software engineering belong on the global stage."
  ],
  locations: ["Mathura", "Vrindavan", "Agra", "National Capital Region", "Global Clients"]
};
