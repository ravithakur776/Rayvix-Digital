/* ============================================================
   RAYVIX DIGITAL — Services Data & Specifications
   Single source of truth for the studio's 9 core capability areas.
   ============================================================ */

export interface ServiceFeature {
  title: string;
  description: string;
}

export interface ServiceFAQ {
  question: string;
  answer: string;
}

export interface ServiceDetail {
  slug: string;
  number: string;
  title: string;
  shortTag: string;
  tagline: string;
  description: string;
  longDescription: string;
  deliverables: string[];
  features: ServiceFeature[];
  outcomes: string[];
  faqs: ServiceFAQ[];
}

export const SERVICES_DATA: ServiceDetail[] = [
  {
    slug: "web-development",
    number: "01",
    title: "Web Development",
    shortTag: "Engineering",
    tagline: "High-Performance Digital Architecture Built to Scale",
    description:
      "Bespoke websites and web applications engineered with Next.js, React, and pure CSS. Sub-second page speeds, seamless responsive fluidity, and clean architecture without bloated page builders.",
    longDescription:
      "We build tailored digital flagships that position your brand ahead of the competition. By pairing cutting-edge Next.js App Router performance with tailor-crafted CSS modules, your site achieves stellar Core Web Vitals, bulletproof reliability, and effortless lead conversion across every device.",
    deliverables: [
      "Custom Next.js & React Architecture",
      "Headless CMS & Content Workflows",
      "Sub-Second Speed & Core Web Vitals",
      "Dynamic Portals & Custom Web Apps",
      "Accessible Semantic HTML5 Standards",
    ],
    features: [
      {
        title: "Zero-Bloat Performance",
        description:
          "Handcrafted CSS and optimized script payloads deliver lightning-fast first contentful paint and frictionless user navigation.",
      },
      {
        title: "Omni-Device Responsiveness",
        description:
          "Pixel-perfect adaptations for mobile, tablet, and ultra-wide cinematic desktop displays.",
      },
      {
        title: "Secure API & Headless Integrations",
        description:
          "Seamless connections to Stripe, Supabase, HubSpot, Webhooks, and custom REST/GraphQL backends.",
      },
    ],
    outcomes: [
      "Up to 3x faster load times vs WordPress / Elementor",
      "Higher Google organic rank through superior Core Web Vitals",
      "Significantly reduced bounce rates on mobile traffic",
    ],
    faqs: [
      {
        question: "Why does Rayvix build custom code instead of using WordPress or Wix?",
        answer:
          "Custom Next.js platforms offer unparalleled speed, security, and brand distinction. Unlike template site builders, custom platforms never suffer from plugin bloat, security exploits, or rigid design constraints.",
      },
      {
        question: "Can our team easily edit text, images, and blog posts?",
        answer:
          "Yes. We configure intuitive headless CMS solutions (such as Sanity or custom admin panels) allowing your team to publish updates effortlessly without writing code.",
      },
    ],
  },
  {
    slug: "creative-direction",
    number: "02",
    title: "Creative Direction",
    shortTag: "Aesthetics",
    tagline: "Visionary Storytelling & Visual Art Direction",
    description:
      "Transforming brand perception through cohesive visual language, cinematic campaign design, editorial art direction, and immersive digital narrative.",
    longDescription:
      "Our creative direction unifies every client touchpoint into a singular, unforgettable brand world. We direct aesthetics, typography, palette curation, photography guidelines, and digital motion to establish unquestioned authority in your category.",
    deliverables: [
      "Comprehensive Visual Guidelines",
      "Editorial Art Direction & Palette Rules",
      "Campaign Concept & Storyboarding",
      "Motion & Micro-Interaction Design",
      "Digital Asset & Media Direction",
    ],
    features: [
      {
        title: "Category-Defining Aesthetics",
        description:
          "We steer your visual identity away from commoditized trends toward enduring prestige and elegance.",
      },
      {
        title: "Cinematic Atmosphere",
        description:
          "Curated lighting, editorial moodboards, and cohesive sensory elements that resonate with discerning clientele.",
      },
      {
        title: "Cross-Channel Harmony",
        description:
          "Consistent visual execution across your website, social campaigns, advertising, and investor collateral.",
      },
    ],
    outcomes: [
      "Immediate elevation in perceived brand value",
      "Ability to command premium price points",
      "Cohesive brand expression across all marketing channels",
    ],
    faqs: [
      {
        question: "What is the difference between Creative Direction and Graphic Design?",
        answer:
          "Graphic design executes individual assets. Creative direction defines the overarching strategic vision, psychological tone, and sensory standard that guides all design, copy, and interaction.",
      },
      {
        question: "How do you ensure the creative direction aligns with our business goals?",
        answer:
          "We begin with in-depth market positioning and audience psychology audits before drafting any creative concepts, ensuring beauty serves commercial outcomes.",
      },
    ],
  },
  {
    slug: "brand-identity",
    number: "03",
    title: "Brand Identity",
    shortTag: "Identity",
    tagline: "Definitive Brand Systems That Command Attention",
    description:
      "Enduring logo marks, bespoke typography hierarchies, color psychology systems, and comprehensive design tokens engineered to stand the test of time.",
    longDescription:
      "A great brand identity is an unfair commercial advantage. We engineer timeless identity systems—from bespoke monograms and responsive logomarks to custom typography pairings and full design token libraries—giving your business an unmistakable presence.",
    deliverables: [
      "Primary Logo, Secondary Marks & Monograms",
      "Bespoke Typography Hierarchy & Font Pairing",
      "Full Color System & Semantic Tokens",
      "Comprehensive Brand Style Bible (PDF & Web)",
      "Digital & Print-Ready Vector Asset Suite",
    ],
    features: [
      {
        title: "Symbolic Monograms & Marks",
        description:
          "Iconic vector marks that remain crisp and legible from 16px favicons to billboard displays.",
      },
      {
        title: "Living Design Token Systems",
        description:
          "Production-ready CSS tokens exported directly into code for instant, unified frontend deployment.",
      },
      {
        title: "Psychological Color Stratification",
        description:
          "Strategic color palettes engineered to evoke trust, prestige, and high conversion probability.",
      },
    ],
    outcomes: [
      "Instantly recognizable brand recall in competitive markets",
      "Seamless alignment across marketing and engineering teams",
      "Scalable asset system ready for trademark registration",
    ],
    faqs: [
      {
        question: "What files and formats do we receive upon completion?",
        answer:
          "You receive complete vector packages (SVG, EPS, PDF) along with high-res PNG, WebP, favicon packages, and our interactive brand guide book.",
      },
      {
        question: "Can you rebrand an existing established company without losing equity?",
        answer:
          "Absolutely. We specialize in brand evolution—modernizing outdated marks while preserving the recognizable equity your customers trust.",
      },
    ],
  },
  {
    slug: "digital-marketing",
    number: "04",
    title: "Digital Marketing",
    shortTag: "Growth",
    tagline: "High-ROI Performance Marketing & Funnel Architecture",
    description:
      "Data-driven paid media, multi-stage acquisition funnels, retargeting engines, and conversion rate optimization designed to capture qualified high-value demand.",
    longDescription:
      "We cut through marketing noise with laser-focused acquisition strategies. From Google Search intent targeting to Meta and LinkedIn performance campaigns, we engineer full-funnel customer journeys with rigorous attribution and conversion rate optimization.",
    deliverables: [
      "Paid Search & Social Campaign Management",
      "Full-Funnel Conversion Architecture",
      "High-Converting Landing Page Design",
      "Automated Retargeting & Nurture Loops",
      "Attribution & Analytics Dashboard Setup",
    ],
    features: [
      {
        title: "Intent-Driven Targeting",
        description:
          "Capturing in-market buyers actively searching for your high-ticket products and services.",
      },
      {
        title: "Continuous CRO Testing",
        description:
          "A/B testing headlines, CTA friction, and form ergonomics to extract maximum value from ad spend.",
      },
      {
        title: "Clear Multi-Touch Attribution",
        description:
          "Transparent reporting that tracks actual customer acquisition cost (CAC) and customer lifetime value (LTV).",
      },
    ],
    outcomes: [
      "Drastic reduction in customer acquisition cost (CAC)",
      "Predictable pipeline of qualified commercial inquiries",
      "Maximized return on advertising spend (ROAS)",
    ],
    faqs: [
      {
        question: "Which platforms do you run ad campaigns on?",
        answer:
          "We specialize in Google Search & Display, Meta (Instagram & Facebook), and LinkedIn, tailored strictly to where your ideal customers spend their decision-making time.",
      },
      {
        question: "How quickly can we expect measurable results?",
        answer:
          "Paid search and acquisition funnels typically produce qualified leads within the first 14 days following launch and initial data calibration.",
      },
    ],
  },
  {
    slug: "social-media",
    number: "05",
    title: "Social Media",
    shortTag: "Presence",
    tagline: "Authority Social Management & Community Growth",
    description:
      "Strategic social architectures that turn social profiles into high-trust client acquisition channels through compelling narratives, executive positioning, and consistent momentum.",
    longDescription:
      "Social media for premium brands requires restraint and polish. We build content ecosystems that establish founder authority, demonstrate craft mastery, and keep your business top-of-mind with prospective enterprise buyers.",
    deliverables: [
      "Social Content Calendar & Strategy",
      "Executive & Founder Personal Branding",
      "High-Fidelity Visual Templates & Reels Design",
      "Community Engagement Protocols",
      "Monthly Growth & Sentiment Reporting",
    ],
    features: [
      {
        title: "Thought Leadership Publishing",
        description:
          "Deep-dive threads, carousel breakdowns, and case study highlights that position your firm as the foremost expert.",
      },
      {
        title: "Visual Elegance in the Feed",
        description:
          "Bespoke layouts matching your brand's editorial guidelines, avoiding cheap clickbait formats.",
      },
      {
        title: "Inbound Lead Routing",
        description:
          "Strategic CTA prompts that guide social viewers into your qualification funnels.",
      },
    ],
    outcomes: [
      "Consistent organic inbound deal flow from social channels",
      "Reinforced social proof for clients researching your reputation",
      "Dramatically improved engagement from decision-makers",
    ],
    faqs: [
      {
        question: "Do you handle content posting or just design the assets?",
        answer:
          "We offer end-to-end management, from strategy and visual production to scheduling, copy crafting, and community interaction.",
      },
      {
        question: "Can you help our founders build personal LinkedIn brands?",
        answer:
          "Yes, executive personal branding is one of our highest-impact specialties for B2B and high-ticket service companies.",
      },
    ],
  },
  {
    slug: "seo",
    number: "06",
    title: "SEO & Search",
    shortTag: "Visibility",
    tagline: "Dominant Search Positioning & Local Footprint",
    description:
      "Technical SEO architecture, Google Maps local pack domination, semantic content modeling, and high-authority link acquisition for compounding organic visibility.",
    longDescription:
      "Sustainable organic search traffic is built on technical excellence and semantic relevance. We optimize site architecture, metadata, schema markup, and Google Business Profiles to ensure your firm dominates high-intent local and national queries.",
    deliverables: [
      "Comprehensive Technical SEO Audit",
      "Google Maps & Local Pack Optimization",
      "Semantic Schema Markup (JSON-LD)",
      "High-Intent Keyword Strategy & Mapping",
      "Competitor Gap Analysis & Link Architecture",
    ],
    features: [
      {
        title: "Technical Search Hygiene",
        description:
          "Zero crawl errors, canonical optimization, optimized internal link graphs, and clean server-rendered HTML.",
      },
      {
        title: "Google Maps Domination",
        description:
          "Proven local SEO playbook covering Mathura, Vrindavan, Agra, and regional commercial hubs.",
      },
      {
        title: "Entity & Schema Structuring",
        description:
          "Rich snippets, organization schemas, and service taxonomy that AI search engines (SearchGPT, Gemini) readily parse.",
      },
    ],
    outcomes: [
      "Top 3 rankings for prime commercial local keywords",
      "Long-term compound traffic with zero ongoing ad spend",
      "Continuous stream of high-intent phone and form inquiries",
    ],
    faqs: [
      {
        question: "How does Rayvix approach local SEO for regional businesses?",
        answer:
          "We optimize your Google Business profile, synchronize local citations across 50+ directories, embed geo-targeted schema markup, and generate hyper-local landing pages.",
      },
      {
        question: "How long before we see rankings improve?",
        answer:
          "Technical fixes and local profile optimizations often show impact in 3–6 weeks, while competitive organic keywords compound steadily over 3–6 months.",
      },
    ],
  },
  {
    slug: "content-strategy",
    number: "07",
    title: "Content Strategy",
    shortTag: "Storytelling",
    tagline: "Compelling Narrative & High-Converting Copy",
    description:
      "Editorial storytelling, strategic messaging frameworks, video scripts, and high-conversion sales copy that moves prospects through conviction to conversion.",
    longDescription:
      "Words create worlds. We develop proprietary messaging matrices and sales narratives that articulate your unique value proposition clearly, eliminating ambiguity and compelling dream clients to choose you without hesitation.",
    deliverables: [
      "Brand Positioning & Messaging Guide",
      "High-Converting Website Copywriting",
      "Short-Form Video & Reel Scripts",
      "Case Study & Impact Story Frameworks",
      "Email Nurture Sequence Drafting",
    ],
    features: [
      {
        title: "Conversion-Centric Copy",
        description:
          "Direct-response psychology tailored for luxury and B2B buyers who demand substance over fluff.",
      },
      {
        title: "Proprietary Tone of Voice",
        description:
          "A distinct linguistic signature that makes your company sound like an undisputed market authority.",
      },
      {
        title: "Multi-Format Repurposing",
        description:
          "Turn 1 cornerstone case study into 10 multi-channel assets across web, social, and email.",
      },
    ],
    outcomes: [
      "Significantly higher conversion rates on inquiry forms",
      "Shorter sales cycles as prospects arrive pre-sold",
      "Clear differentiation from regional competitors",
    ],
    faqs: [
      {
        question: "Do you write all the website copy for our new site?",
        answer:
          "Yes. We write every word—from hero headlines and value propositions to service breakdowns, CTAs, and microcopy.",
      },
      {
        question: "Can you interview our team or clients to write case studies?",
        answer:
          "Yes, we conduct structured client interviews to extract real financial impact data and transform it into compelling success stories.",
      },
    ],
  },
  {
    slug: "ai-automation",
    number: "08",
    title: "AI Automation",
    shortTag: "Intelligence",
    tagline: "Intelligent Workflows & Autonomous Operations",
    description:
      "Custom AI assistants, dynamic lead scoring, automated CRM pipeline synchronization, and automated client onboarding systems that multiply operational throughput.",
    longDescription:
      "Scale your output without expanding headcount. We integrate modern LLMs and intelligent workflow automation directly into your web applications and internal tools, automating repetitive tasks and ensuring zero prospective leads ever slip through the cracks.",
    deliverables: [
      "Custom AI Concierge & Chat Workflows",
      "Automated Lead Qualification & CRM Sync",
      "Instant Inquiry Routing via SMS / WhatsApp / Email",
      "Automated Proposal & Invoice Pipelines",
      "Workflow Integration via Make / Zapier / Custom APIs",
    ],
    features: [
      {
        title: "24/7 Intelligent Lead Triage",
        description:
          "AI assistants that answer prospect questions, qualify project budget, and schedule appointments instantly.",
      },
      {
        title: "Zero-Data-Entry Workflows",
        description:
          "Automatic creation of CRM contacts, notification alerts in Slack, and client onboarding kickoff.",
      },
      {
        title: "Private & Secure Architecture",
        description:
          "Enterprise-grade security ensuring customer data is never leaked or used for model training.",
      },
    ],
    outcomes: [
      "Instant <2 minute response time to every inbound inquiry",
      "Saved 15–20+ team hours weekly on administrative logistics",
      "Zero missed opportunities from after-hours traffic",
    ],
    faqs: [
      {
        question: "Do we need technical expertise to manage the AI workflows?",
        answer:
          "Not at all. We build foolproof, automated pipelines that run silently in the background and connect cleanly to your existing tools.",
      },
      {
        question: "Can the AI automate booking directly on our calendar?",
        answer:
          "Yes. Qualified leads are directed straight into your Calendly or Cal.com scheduler with their project details already pre-populated.",
      },
    ],
  },
  {
    slug: "digital-systems",
    number: "09",
    title: "Digital Systems",
    shortTag: "Infrastructure",
    tagline: "Cloud Architecture & Custom Operational Software",
    description:
      "Centralized client portals, bespoke internal dashboards, scalable database architecture, and custom integrations engineered for reliable enterprise scale.",
    longDescription:
      "When off-the-shelf software restricts your ambition, we architect tailored digital systems. From private client portals to analytics dashboards and inventory platforms, we build secure, maintainable web systems that power your organization.",
    deliverables: [
      "Custom Client & Partner Portals",
      "Executive Analytics & Metric Dashboards",
      "Relational Database Architecture (Postgres / Supabase)",
      "Role-Based Authentication & Access Control",
      "Custom API Bridges & Third-Party Sync",
    ],
    features: [
      {
        title: "Role-Based Security",
        description:
          "Granular permission matrices ensuring clients and team members see only what they are authorized to access.",
      },
      {
        title: "Enterprise Database Scalability",
        description:
          "Reliable, ACID-compliant database designs engineered to handle millions of transactions with ease.",
      },
      {
        title: "Real-Time Telemetry & Backups",
        description:
          "Automated cloud backups, uptime monitoring, and error alerts keeping your mission-critical operations online 24/7.",
      },
    ],
    outcomes: [
      "A single source of truth for business operations",
      "Superior client retention through streamlined portal experiences",
      "Elimination of disjointed SaaS subscription sprawl",
    ],
    faqs: [
      {
        question: "Can you connect our custom portal to our existing accounting or ERP software?",
        answer:
          "Yes, we build custom API bridges to integrate with platforms like QuickBooks, Stripe, Xero, and legacy ERPs.",
      },
      {
        question: "How do you handle hosting and maintenance for digital systems?",
        answer:
          "We deploy on modern serverless or dedicated cloud infrastructures (such as Vercel and AWS) and offer ongoing maintenance and SLA monitoring.",
      },
    ],
  },
];

export function getServiceBySlug(slug: string): ServiceDetail | undefined {
  return SERVICES_DATA.find((service) => service.slug === slug);
}
