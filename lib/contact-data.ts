export interface ServiceOption {
  id: string;
  label: string;
  description: string;
}

export interface BudgetTier {
  id: string;
  range: string;
  label: string;
}

export interface TimelineOption {
  id: string;
  label: string;
}

export interface FAQItem {
  question: string;
  answer: string;
  category: "Engagement" | "Engineering" | "Pricing & IP" | "Process";
}

export interface StudioLocation {
  city: string;
  role: string;
  address: string;
  note: string;
}

export const INQUIRY_SERVICES: ServiceOption[] = [
  {
    id: "web-systems",
    label: "Web Platforms & Software Systems",
    description: "Bespoke Next.js 16 platforms, headless web apps, and digital infrastructure."
  },
  {
    id: "brand-identity",
    label: "Brand Architecture & Creative Direction",
    description: "Editorial identity systems, typographic hierarchies, and luxury digital design."
  },
  {
    id: "search-growth",
    label: "Search Authority & Organic Growth",
    description: "Technical SEO, semantic schema architecture, and high-intent inbound acquisition."
  },
  {
    id: "ai-automation",
    label: "AI Automation & Operational Workflows",
    description: "Custom AI agent pipelines, CRM automation, and internal tool orchestration."
  },
  {
    id: "full-partnership",
    label: "Full Studio Partnership (End-to-End)",
    description: "Comprehensive brand identity, full-stack platform build, and ongoing growth advisory."
  }
];

export const BUDGET_TIERS: BudgetTier[] = [
  { id: "tier-1", range: "₹2.5L – ₹5L", label: "Foundational Studio Build" },
  { id: "tier-2", range: "₹5L – ₹12L", label: "Flagship Custom Platform" },
  { id: "tier-3", range: "₹12L – ₹25L", label: "Enterprise System & Brand Architecture" },
  { id: "tier-4", range: "₹25L+", label: "Comprehensive Multi-Discipline Partnership" }
];

export const TIMELINE_OPTIONS: TimelineOption[] = [
  { id: "urgent", label: "Within 30 Days (Fast Track)" },
  { id: "standard", label: "1 to 3 Months (Standard Studio Cycle)" },
  { id: "planned", label: "3 to 6 Months (Strategic Q3/Q4 Roadmap)" },
  { id: "exploratory", label: "Exploratory / Advisory Phase" }
];

export const STUDIO_TOUCHPOINTS = {
  email: "inquiry@rayvixdigital.com",
  directEmail: "partnerships@rayvixdigital.com",
  hours: "Monday – Friday: 9:00 AM – 7:00 PM IST",
  weekendHours: "Saturday: By Senior Appointment Only",
  responseTime: "Within 24 business hours (Standard Policy)"
};

export const STUDIO_LOCATIONS: StudioLocation[] = [
  {
    city: "Mathura & Vrindavan",
    role: "Studio Base & Design Operations",
    address: "Mathura & Vrindavan, Uttar Pradesh, India",
    note: "Core design operations, brand strategy, and engineering development."
  },
  {
    city: "Agra Region",
    role: "Regional Creative Engagements",
    address: "Agra, Uttar Pradesh, India",
    note: "Visual production, media direction, and regional commercial operations."
  },
  {
    city: "Delhi NCR",
    role: "Enterprise Advisory Node",
    address: "Delhi National Capital Region, India",
    note: "Strategic advisory, enterprise systems design, and scheduled briefings."
  },
  {
    city: "Global Engagements",
    role: "Remote Worldwide Deployments",
    address: "Worldwide Remote Engagements",
    note: "Asynchronous communication, timezone-aligned sprints, and dedicated delivery cadences."
  }
];

export const CONTACT_FAQS: FAQItem[] = [
  {
    question: "What is your typical client engagement timeline?",
    answer:
      "A flagship custom platform engagement typically runs between 4 to 10 weeks from architectural discovery to final deployment. Brand identity architecture runs 3 to 6 weeks, while rapid search audits and AI automation sprints can deploy in as few as 14 business days. We operate in focused, sprint-based milestones with weekly client demonstrations.",
    category: "Process"
  },
  {
    question: "Why do you cap active client engagements at 4 per quarter?",
    answer:
      "Unlike high-volume digital agencies that juggle dozens of accounts using junior freelancers, Rayvix Digital enforces a strict capacity ceiling. This ensures that your project is personally architected, coded, and directed by senior studio principals, ensuring focused execution, zero communication latency, and obsessive quality control.",
    category: "Engagement"
  },
  {
    question: "Do we retain 100% intellectual property and source code ownership?",
    answer:
      "Yes, absolutely and irrevocably. Upon completion of each milestone, all source code, design systems, Figma libraries, production repositories, and creative assets are transferred directly to your organization. You are never locked into proprietary CMS ecosystems or recurring platform license fees.",
    category: "Pricing & IP"
  },
  {
    question: "Do you work with early-stage startups or only established enterprises?",
    answer:
      "We partner with ambitious organizations across both spectrums. For funded startups, we build the initial defensible digital asset and brand identity needed to command premium market positioning and investor confidence. For established enterprises, we re-architect legacy platforms to eliminate technical debt, enhance conversion velocity, and dominate high-intent organic search.",
    category: "Engagement"
  },
  {
    question: "How do you architect for sub-second performance and Core Web Vitals?",
    answer:
      "We engineer exclusively on modern Next.js 16 with static compilation, server components, and pure Vanilla CSS tokenization. By eliminating heavy third-party plugins, jQuery, and bloated CSS utility frameworks, our pages achieve rapid paint times and high layout stability scores on Google PageSpeed tests.",
    category: "Engineering"
  },
  {
    question: "What post-launch support and ongoing evolution do you provide?",
    answer:
      "We offer dedicated Senior Engineering Retainers following every platform launch. This includes 24/7 uptime and security monitoring, edge performance tuning, quarterly SEO audits, conversion rate optimization tests, and continuous feature sprints. We treat every client platform as an appreciating commercial asset.",
    category: "Process"
  }
];
