export interface PricingTier {
  id: string;
  name: string;
  badge?: string;
  isPopular?: boolean;
  price: string;
  period: string;
  currency: string;
  subtitle: string;
  idealFor: string;
  duration: string;
  deliverables: string[];
  ctaLabel: string;
  ctaHref: string;
}

export interface RetainerTier {
  id: string;
  name: string;
  price: string;
  period: string;
  subtitle: string;
  idealFor: string;
  features: string[];
  ctaLabel: string;
  ctaHref: string;
}

export interface ComparisonCategory {
  category: string;
  features: {
    name: string;
    description: string;
    tier1: boolean | string;
    tier2: boolean | string;
    tier3: boolean | string;
  }[];
}

export interface PricingFAQ {
  question: string;
  answer: string;
}

export const PRICING_TIERS: PricingTier[] = [
  {
    id: "foundational",
    name: "Foundational Platform & Brand",
    price: "₹2,49,000",
    period: "one-time",
    currency: "INR",
    subtitle: "Essential digital authority and bespoke software for high-conviction brands.",
    idealFor: "Boutique practices, luxury clinics, and emerging ventures establishing a benchmark presence.",
    duration: "3 to 4 Weeks",
    deliverables: [
      "Up to 6 custom-designed & engineered Next.js pages",
      "Bespoke brand design system & typographic hierarchy",
      "100% Vanilla CSS Modules (zero bloated CSS frameworks)",
      "Sub-second static paint (<300ms Core Web Vitals)",
      "Technical SEO entity architecture & XML sitemaps",
      "Responsive fluid layouts tested across 12+ viewports",
      "100% intellectual property & source code transfer",
      "14 days post-deployment architectural warranty"
    ],
    ctaLabel: "Initiate Foundational Build",
    ctaHref: "/contact?tier=foundational"
  },
  {
    id: "flagship",
    name: "Flagship Custom Platform",
    badge: "Most Selected by Leaders",
    isPopular: true,
    price: "₹5,49,000",
    period: "one-time",
    currency: "INR",
    subtitle: "Complete digital dominance with advanced headless integrations and conversion engineering.",
    idealFor: "Scaling enterprises, established multi-location practices, and category-leading brands.",
    duration: "6 to 8 Weeks",
    deliverables: [
      "Up to 15 bespoke pages, dynamic templates & case studies",
      "Comprehensive editorial luxury design system in Figma",
      "Headless CMS integration for effortless client publishing",
      "Custom subtle micro-animations & view transitions",
      "Semantic JSON-LD entity schema graph for Google Knowledge Graph",
      "CRM & automated lead dispatch workflow integration",
      "Conversion Rate Optimization (CRO) funnel calibration",
      "Cross-browser stress testing & accessibility compliance (WCAG AA)",
      "100% complete source code transfer & production deployment",
      "30 days dedicated post-launch senior support & warranty"
    ],
    ctaLabel: "Initiate Flagship Build",
    ctaHref: "/contact?tier=flagship"
  },
  {
    id: "enterprise",
    name: "Enterprise Systems & AI Transformation",
    price: "₹12,99,000",
    period: "one-time",
    currency: "INR",
    subtitle: "Bespoke full-stack software, custom AI automation workflows, and global infrastructure.",
    idealFor: "Market leaders, venture-backed organizations, and high-volume commercial operations.",
    duration: "10 to 14 Weeks",
    deliverables: [
      "Custom full-stack web application & portal architecture",
      "Proprietary AI agent pipelines & automated customer triage",
      "Headless e-commerce or custom member dashboard integration",
      "Multi-region edge deployment for instant global loading",
      "Comprehensive 80+ page Brand Identity & Architectural Manual",
      "Enterprise security hardening & automated CI/CD pipeline",
      "Dedicated senior engineering team led by studio principals",
      "Bi-weekly executive steering reviews & milestone demonstrations",
      "100% intellectual property transfer with full repository rights",
      "60 days post-launch priority architectural warranty"
    ],
    ctaLabel: "Initiate Enterprise Engagement",
    ctaHref: "/contact?tier=enterprise"
  }
];

export const RETAINER_TIERS: RetainerTier[] = [
  {
    id: "retainer-guardian",
    name: "Platform Performance & Security Guardian",
    price: "₹49,000",
    period: "per month",
    subtitle: "Continuous speed optimization, edge security, and search engine compliance.",
    idealFor: "Platforms requiring 24/7 uptime vigilance and rigorous Core Web Vitals health.",
    features: [
      "24/7 edge uptime & Core Web Vitals performance monitoring",
      "Monthly security patching & Next.js ecosystem dependency updates",
      "Quarterly technical SEO audit & broken link resolution",
      "Automated cloud backup verification & disaster recovery standby",
      "Priority SLA for emergency architectural support"
    ],
    ctaLabel: "Reserve Guardian Retainer",
    ctaHref: "/contact?retainer=guardian"
  },
  {
    id: "retainer-sprint",
    name: "Continuous Growth & Feature Sprints",
    price: "₹1,29,000",
    period: "per month",
    subtitle: "Dedicated monthly senior engineering and conversion optimization sprints.",
    idealFor: "Ambitious businesses treating their platform as a continuously evolving commercial asset.",
    features: [
      "All Guardian tier safeguards included",
      "20 dedicated monthly hours of senior Next.js full-stack development",
      "Continuous Conversion Rate Optimization (CRO) multivariate tests",
      "New landing page creation and programmatic SEO content pipelines",
      "Bi-weekly sprint planning call with studio principals",
      "Priority response time within 4 business hours"
    ],
    ctaLabel: "Reserve Sprint Retainer",
    ctaHref: "/contact?retainer=sprint"
  }
];

export const PRICING_COMPARISON: ComparisonCategory[] = [
  {
    category: "Design & Brand Architecture",
    features: [
      {
        name: "Bespoke Design System & Typography",
        description: "Custom CSS tokenization, modular scales, and Playfair Display editorial hierarchies.",
        tier1: "Up to 6 Views",
        tier2: "Up to 15 Views",
        tier3: "Comprehensive (80+ pg manual)"
      },
      {
        name: "Figma Component Master Library",
        description: "Shared master UI kit delivered with complete auto-layout components.",
        tier1: "Standard Kit",
        tier2: "Full Master System",
        tier3: "Enterprise Multi-Brand Library"
      },
      {
        name: "Interactive Micro-Animations",
        description: "GPU-accelerated CSS and physics-based transitions calibrated for luxury tactile feel.",
        tier1: "Essential Transitions",
        tier2: "Advanced Interactive Motion",
        tier3: "Bespoke Kinetic Experience"
      }
    ]
  },
  {
    category: "Software Architecture & Performance",
    features: [
      {
        name: "Framework & Architecture",
        description: "Modern App Router architecture statically compiled for maximum resilience.",
        tier1: "Next.js 16 Static",
        tier2: "Next.js 16 + Headless CMS",
        tier3: "Next.js 16 Full-Stack + Edge"
      },
      {
        name: "Performance & Core Web Vitals",
        description: "Engineered for optimal First Contentful Paint and strict Cumulative Layout Shift stability.",
        tier1: "High Performance Tier",
        tier2: "Optimized Core Web Vitals",
        tier3: "Global Edge Architecture"
      },
      {
        name: "Zero Plugin Bloat & Pure CSS",
        description: "Handcrafted CSS Modules with zero third-party utility runtime overhead.",
        tier1: true,
        tier2: true,
        tier3: true
      },
      {
        name: "Custom AI Automation Pipelines",
        description: "Proprietary intelligent workflows, lead triage agents, and internal API sync.",
        tier1: false,
        tier2: "Optional Add-on",
        tier3: "Included (Full Workflow)"
      }
    ]
  },
  {
    category: "Search & Growth Engineering",
    features: [
      {
        name: "Technical SEO & Schema Graph",
        description: "Entity-based JSON-LD schema markup for Google Knowledge Graph recognition.",
        tier1: "Essential Entity Schema",
        tier2: "Advanced Multi-Entity Graph",
        tier3: "Comprehensive Enterprise SEO"
      },
      {
        name: "CRM & Inbound Lead Routing",
        description: "Automated webhook integration dispatching validated inquiries directly to sales tools.",
        tier1: "Email Dispatch",
        tier2: "Full CRM / Webhook Pipeline",
        tier3: "Multi-Channel Intelligent Routing"
      },
      {
        name: "Conversion Funnel Optimization",
        description: "Calibrated intake forms, frictionless paths to inquiry, and conversion tracking.",
        tier1: "Standard Funnel",
        tier2: "Multi-Step Calibrated Funnel",
        tier3: "Bespoke Behavioral Optimization"
      }
    ]
  },
  {
    category: "Governance, Warranty & Safeguards",
    features: [
      {
        name: "100% Intellectual Property Transfer",
        description: "You own all code, assets, repositories, and credentials irrevocably.",
        tier1: true,
        tier2: true,
        tier3: true
      },
      {
        name: "Direct Senior Principal Leadership",
        description: "No junior agency handoffs or account managers playing telephone.",
        tier1: true,
        tier2: true,
        tier3: true
      },
      {
        name: "Post-Launch Warranty & Support",
        description: "Dedicated coverage for any bugs, browser compatibility shifts, or performance tuning.",
        tier1: "14 Days",
        tier2: "30 Days",
        tier3: "60 Days"
      }
    ]
  }
];

export const PRICING_FAQS: PricingFAQ[] = [
  {
    question: "Why does Rayvix Digital quote fixed-scope milestone investments instead of billing by the hour?",
    answer:
      "Hourly billing misaligns incentives: slow agencies make more money when projects drag on. At Rayvix Digital, we operate on clear, fixed-scope milestone agreements. You know exactly what investment is required, exactly what will be built, and exactly when it will deploy. We are incentivized by architectural speed, precision, and demonstrable commercial impact."
  },
  {
    question: "Are there any hidden recurring platform fees or proprietary software lock-ins?",
    answer:
      "None. Unlike proprietary website builders or custom agency platforms that charge hostage fees, our code is built on open enterprise standards: Next.js 16, React 19, TypeScript, and pure CSS Modules. Your platform can be hosted on Vercel, AWS, Cloudflare, or your private enterprise infrastructure for nominal cloud compute costs."
  },
  {
    question: "What is your standard payment milestone structure?",
    answer:
      "Our standard engagement structure is divided into transparent milestones: 40% initial commitment upon contract signing to reserve studio capacity, 30% upon approval of the interactive Figma design system and architecture prototype, and 30% upon final acceptance, quality assurance, and production DNS deployment."
  },
  {
    question: "Can these packages be tailored to our unique organizational requirements?",
    answer:
      "Yes. While our three flagship tiers cover 90% of business objectives, we frequently configure bespoke scopes for organizations with complex legacy migrations, multi-lingual international architectures, or proprietary internal systems. We review your exact specifications during our initial Strategic Consultation."
  },
  {
    question: "What happens after our platform is launched?",
    answer:
      "Upon launch, we provide a complete code walkthrough, technical documentation, and administrative guidance for your team. Every project includes an architectural warranty (14 to 60 days). For organizations requiring ongoing optimization, we offer our monthly Guardian and Growth Sprint retainers."
  }
];
