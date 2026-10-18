"use client";

import React, { useState, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import { getCaseStudyBySlug } from "@/lib/portfolio-data";
import {
  INQUIRY_SERVICES,
  BUDGET_TIERS,
  TIMELINE_OPTIONS
} from "@/lib/contact-data";
import styles from "./ContactForm.module.css";

interface FormState {
  service: string;
  budget: string;
  timeline: string;
  fullName: string;
  email: string;
  company: string;
  website: string;
  phone: string;
  message: string;
  consent: boolean;
  project?: string;
  retainer?: string;
}

interface FormErrors {
  fullName?: string;
  email?: string;
  company?: string;
  message?: string;
  consent?: string;
}

interface ContactFormInnerProps {
  initialService: string;
  initialBudget: string;
  initialProject: string;
  initialRetainer: string;
}

const SERVICE_SLUG_MAP: Record<string, string> = {
  "web-development": "web-systems",
  "digital-systems": "web-systems",
  "creative-direction": "brand-identity",
  "brand-identity": "brand-identity",
  "seo": "search-growth",
  "digital-marketing": "search-growth",
  "content-strategy": "search-growth",
  "social-media": "search-growth",
  "ai-automation": "ai-automation",
  "full-partnership": "full-partnership",
};

const TIER_PARAM_MAP: Record<string, string> = {
  foundational: "tier-1",
  flagship: "tier-2",
  enterprise: "tier-3",
  "tier-1": "tier-1",
  "tier-2": "tier-2",
  "tier-3": "tier-3",
  "tier-4": "tier-4",
};

const RETAINER_PARAM_MAP: Record<string, { budgetId: string; label: string }> = {
  guardian: { budgetId: "tier-4", label: "Platform Performance & Security Guardian Retainer" },
  "retainer-guardian": { budgetId: "tier-4", label: "Platform Performance & Security Guardian Retainer" },
  sprint: { budgetId: "tier-4", label: "Continuous Growth & Feature Sprints Retainer" },
  "retainer-sprint": { budgetId: "tier-4", label: "Continuous Growth & Feature Sprints Retainer" },
};

function resolveInitialService(serviceParam: string | null, projectParam: string | null): string {
  if (serviceParam) {
    if (INQUIRY_SERVICES.some((s) => s.id === serviceParam)) {
      return serviceParam;
    }
    if (SERVICE_SLUG_MAP[serviceParam]) {
      return SERVICE_SLUG_MAP[serviceParam];
    }
  }

  if (projectParam) {
    const proj = getCaseStudyBySlug(projectParam);
    if (proj) {
      if (proj.category === "Web Development" || proj.category === "Digital Systems") {
        return "web-systems";
      }
      if (proj.category === "Creative Direction" || proj.category === "Brand Identity") {
        return "brand-identity";
      }
      if (proj.category === "SEO & Marketing") {
        return "search-growth";
      }
      if (proj.category === "AI Automation") {
        return "ai-automation";
      }
    }
  }

  return INQUIRY_SERVICES[0].id;
}

function resolveInitialBudget(tierParam: string | null, retainerParam: string | null): string {
  if (retainerParam && RETAINER_PARAM_MAP[retainerParam]) {
    return RETAINER_PARAM_MAP[retainerParam].budgetId;
  }
  if (tierParam && TIER_PARAM_MAP[tierParam]) {
    return TIER_PARAM_MAP[tierParam];
  }
  return BUDGET_TIERS[1].id;
}

function resolveInitialProject(projectParam: string | null): string {
  if (projectParam) {
    const proj = getCaseStudyBySlug(projectParam);
    if (proj) {
      return proj.slug;
    }
  }
  return "";
}

function resolveInitialRetainer(retainerParam: string | null): string {
  if (retainerParam && RETAINER_PARAM_MAP[retainerParam]) {
    return RETAINER_PARAM_MAP[retainerParam].label;
  }
  return "";
}

function ContactFormInner({
  initialService,
  initialBudget,
  initialProject,
  initialRetainer,
}: ContactFormInnerProps) {
  const [formData, setFormData] = useState<FormState>({
    service: initialService,
    budget: initialBudget,
    timeline: TIMELINE_OPTIONS[1].id,
    fullName: "",
    email: "",
    company: "",
    website: "",
    phone: "",
    message: "",
    consent: false,
    project: initialProject,
    retainer: initialRetainer,
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [referenceCode, setReferenceCode] = useState("");
  const [copied, setCopied] = useState(false);

  const referencedProject = formData.project ? getCaseStudyBySlug(formData.project) : null;

  const validate = (): boolean => {
    const newErrors: FormErrors = {};

    if (!formData.fullName.trim() || formData.fullName.trim().length < 2) {
      newErrors.fullName = "Please enter your full name.";
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim() || !emailRegex.test(formData.email.trim())) {
      newErrors.email = "Please enter a valid work email address.";
    }

    if (!formData.company.trim() || formData.company.trim().length < 2) {
      newErrors.company = "Please specify your organization or brand.";
    }

    if (!formData.message.trim() || formData.message.trim().length < 10) {
      newErrors.message = "Please provide brief context regarding your project goals (min 10 characters).";
    }

    if (!formData.consent) {
      newErrors.consent = "Please confirm your agreement to receive our architectural review.";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!validate()) {
      return;
    }

    setIsSubmitting(true);

    setTimeout(() => {
      const randomSuffix = Math.random().toString(36).substring(2, 7).toUpperCase();
      const code = `RD-2026-${randomSuffix}`;
      setReferenceCode(code);
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 600);
  };

  const handleReset = () => {
    setFormData({
      service: INQUIRY_SERVICES[0].id,
      budget: BUDGET_TIERS[1].id,
      timeline: TIMELINE_OPTIONS[1].id,
      fullName: "",
      email: "",
      company: "",
      website: "",
      phone: "",
      message: "",
      consent: false,
      project: "",
      retainer: "",
    });
    setErrors({});
    setIsSubmitted(false);
    setReferenceCode("");
    setCopied(false);
  };

  if (isSubmitted) {
    const selectedService =
      INQUIRY_SERVICES.find((s) => s.id === formData.service)?.label ||
      formData.service;
    const selectedBudget =
      BUDGET_TIERS.find((b) => b.id === formData.budget)?.range ||
      formData.budget;
    const selectedTimeline =
      TIMELINE_OPTIONS.find((t) => t.id === formData.timeline)?.label ||
      formData.timeline;
    const selectedProjectName = formData.project
      ? getCaseStudyBySlug(formData.project)?.title || formData.project
      : "";

    const formattedBrief = `RAYVIX DIGITAL — STRATEGIC CONSULTATION BRIEF
Reference Code: ${referenceCode}

CLIENT DETAILS
• Principal Name: ${formData.fullName}
• Corporate Email: ${formData.email}
• Organization / Brand: ${formData.company}
• Current Website: ${formData.website || "None provided"}
• Direct Contact: ${formData.phone || "Not specified"}

PROJECT PARAMETERS
• Primary Focus: ${selectedService}
• Investment Tier: ${selectedBudget}
• Target Horizon: ${selectedTimeline}
${selectedProjectName ? `• Referenced Architecture: ${selectedProjectName} (Studio Concept)\n` : ""}${
      formData.retainer ? `• Retainer Model: ${formData.retainer}\n` : ""
    }
PROJECT OBJECTIVES & SCOPE:
${formData.message}
`;

    const mailtoSubject = `[${referenceCode}] Strategic Consultation: ${formData.company} (${formData.fullName})${
      selectedProjectName ? ` — Ref: ${selectedProjectName}` : formData.retainer ? ` — ${formData.retainer}` : ""
    }`;

    const mailtoUrl = `mailto:contact.rayvix@gmail.com?subject=${encodeURIComponent(
      mailtoSubject
    )}&body=${encodeURIComponent(formattedBrief)}`;

    const handleCopy = async () => {
      try {
        await navigator.clipboard.writeText(formattedBrief);
        setCopied(true);
        setTimeout(() => setCopied(false), 3000);
      } catch {
        setCopied(true);
      }
    };

    return (
      <div className={styles.formContainer} aria-live="polite">
        <div className={styles.successContainer}>
          <div className={styles.successIconWrap} aria-hidden="true">
            <svg
              width="32"
              height="32"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <polyline points="20 6 9 17 4 12" />
            </svg>
          </div>

          <h3 className={styles.successTitle}>Consultation Brief Compiled</h3>
          <p className={styles.successLead}>
            Thank you, {formData.fullName}. Your strategic intake has been validated and structured for senior studio principal review.
          </p>

          <div className={styles.referenceBox}>
            <span className={styles.referenceLabel}>Inquiry Reference Code</span>
            <span className={styles.referenceCode}>{referenceCode}</span>
          </div>

          <div className={styles.backendNoticeBox} role="note">
            <span className={styles.backendNoticeTitle}>Launch Status Note</span>
            Direct serverless API intake is pending final production webhook deployment (see launch checklist). To ensure your brief reaches our senior team without delay, please dispatch via your default mail client or copy the formatted brief below.
          </div>

          <div className={styles.briefSummaryBox}>
            <div className={styles.briefSummaryRow}>
              <span className={styles.briefSummaryLabel}>Organization:</span>
              <span className={styles.briefSummaryVal}>{formData.company}</span>
            </div>
            <div className={styles.briefSummaryRow}>
              <span className={styles.briefSummaryLabel}>Focus Area:</span>
              <span className={styles.briefSummaryVal}>{selectedService}</span>
            </div>
            <div className={styles.briefSummaryRow}>
              <span className={styles.briefSummaryLabel}>Budget & Horizon:</span>
              <span className={styles.briefSummaryVal}>{selectedBudget} • {selectedTimeline}</span>
            </div>
            {selectedProjectName && (
              <div className={styles.briefSummaryRow}>
                <span className={styles.briefSummaryLabel}>Referenced Project:</span>
                <span className={styles.briefSummaryVal}>{selectedProjectName} (Concept)</span>
              </div>
            )}
            {formData.retainer && (
              <div className={styles.briefSummaryRow}>
                <span className={styles.briefSummaryLabel}>Retainer Model:</span>
                <span className={styles.briefSummaryVal}>{formData.retainer}</span>
              </div>
            )}
          </div>

          <div className={styles.successActions}>
            <a
              href={mailtoUrl}
              className={styles.emailDispatchBtn}
            >
              <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                <polyline points="22,6 12,13 2,6" />
              </svg>
              Transmit via Email Client
            </a>

            <button
              type="button"
              onClick={handleCopy}
              className={styles.copyBriefBtn}
            >
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <rect x="9" y="9" width="13" height="13" rx="2" ry="2" />
                <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" />
              </svg>
              {copied ? "✓ Brief Copied to Clipboard" : "Copy Formatted Brief to Clipboard"}
            </button>

            <button
              type="button"
              onClick={handleReset}
              className={styles.resetBtn}
            >
              Edit Brief or Submit Additional Inquiry
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className={styles.formContainer}>
      <div className={styles.formHeader}>
        <span className={styles.formEyebrow}>Direct Studio Intake</span>
        <h2 className={styles.formTitle}>Initiate Strategic Consultation</h2>
        <p className={styles.formSubtitle}>
          Complete the brief below. Senior studio principals review and respond within
          24 business hours.
        </p>
      </div>

      {referencedProject && (
        <div className={styles.contextNotice} role="status">
          <div className={styles.contextNoticeContent}>
            <span className={styles.contextNoticeTag}>Referenced Architecture</span>
            <span className={styles.contextNoticeText}>
              {referencedProject.title} ({referencedProject.category})
            </span>
          </div>
          <button
            type="button"
            className={styles.contextNoticeClear}
            onClick={() => setFormData((prev) => ({ ...prev, project: "" }))}
            title="Clear referenced project"
            aria-label="Clear referenced project"
          >
            ✕
          </button>
        </div>
      )}

      {formData.retainer && (
        <div className={styles.contextNotice} role="status">
          <div className={styles.contextNoticeContent}>
            <span className={styles.contextNoticeTag}>Selected Retainer</span>
            <span className={styles.contextNoticeText}>{formData.retainer}</span>
          </div>
          <button
            type="button"
            className={styles.contextNoticeClear}
            onClick={() => setFormData((prev) => ({ ...prev, retainer: "" }))}
            title="Clear selected retainer"
            aria-label="Clear selected retainer"
          >
            ✕
          </button>
        </div>
      )}

      <form onSubmit={handleSubmit} noValidate>
        {/* Hidden inputs to preserve context */}
        <input type="hidden" name="project" value={formData.project || ""} />
        <input type="hidden" name="retainer" value={formData.retainer || ""} />

        {/* 1. Primary Discipline Selection */}
        <div className={styles.fieldGroup}>
          <label className={styles.fieldLabel}>
            1. Primary Area of Focus
            <span className={styles.requiredStar}>*</span>
          </label>
          <div className={styles.optionsGrid} role="radiogroup">
            {INQUIRY_SERVICES.map((serv) => {
              const isSelected = formData.service === serv.id;
              return (
                <button
                  key={serv.id}
                  type="button"
                  role="radio"
                  aria-checked={isSelected}
                  className={`${styles.optionButton} ${
                    isSelected ? styles.optionButtonActive : ""
                  }`}
                  onClick={() => setFormData({ ...formData, service: serv.id })}
                >
                  <span className={styles.optionButtonTitle}>{serv.label}</span>
                  <span className={styles.optionButtonDesc}>
                    {serv.description}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* 2. Anticipated Investment Tier */}
        <div className={styles.fieldGroup}>
          <label className={styles.fieldLabel}>
            2. Anticipated Investment Tier
            <span className={styles.requiredStar}>*</span>
          </label>
          <div className={styles.pillGrid} role="radiogroup">
            {BUDGET_TIERS.map((tier) => {
              const isSelected = formData.budget === tier.id;
              return (
                <button
                  key={tier.id}
                  type="button"
                  role="radio"
                  aria-checked={isSelected}
                  className={`${styles.pillButton} ${
                    isSelected ? styles.pillButtonActive : ""
                  }`}
                  onClick={() => setFormData({ ...formData, budget: tier.id })}
                >
                  <span className={styles.pillRange}>{tier.range}</span>
                  <span className={styles.pillLabel}>{tier.label}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* 3. Target Launch Timeline */}
        <div className={styles.fieldGroup}>
          <label className={styles.fieldLabel}>
            3. Target Launch Timeline
            <span className={styles.requiredStar}>*</span>
          </label>
          <div className={styles.pillGrid} role="radiogroup">
            {TIMELINE_OPTIONS.map((time) => {
              const isSelected = formData.timeline === time.id;
              return (
                <button
                  key={time.id}
                  type="button"
                  role="radio"
                  aria-checked={isSelected}
                  className={`${styles.pillButton} ${
                    isSelected ? styles.pillButtonActive : ""
                  }`}
                  onClick={() => setFormData({ ...formData, timeline: time.id })}
                >
                  <span className={styles.pillRange}>{time.label}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* 4. Contact & Organization Details */}
        <div className={styles.fieldGroup}>
          <div className={styles.fieldLabel}>
            4. Leadership & Organization
            <span className={styles.requiredStar} aria-hidden="true">*</span>
          </div>

          <div className={styles.inputRow}>
            <div className={styles.inputControl}>
              <label htmlFor="contact-full-name" className={styles.inputLabel}>
                Full Name <span className={styles.requiredStar} aria-hidden="true">*</span>
              </label>
              <input
                id="contact-full-name"
                name="fullName"
                type="text"
                placeholder="e.g. Eleanor Vance"
                value={formData.fullName}
                onChange={(e) =>
                  setFormData({ ...formData, fullName: e.target.value })
                }
                className={`${styles.textInput} ${
                  errors.fullName ? styles.inputError : ""
                }`}
                aria-required="true"
                aria-invalid={!!errors.fullName}
                aria-describedby={errors.fullName ? "contact-full-name-error" : undefined}
              />
              {errors.fullName && (
                <span id="contact-full-name-error" className={styles.errorMessage} role="alert">
                  {errors.fullName}
                </span>
              )}
            </div>

            <div className={styles.inputControl}>
              <label htmlFor="contact-email" className={styles.inputLabel}>
                Work Email <span className={styles.requiredStar} aria-hidden="true">*</span>
              </label>
              <input
                id="contact-email"
                name="email"
                type="email"
                placeholder="e.g. name@company.com"
                value={formData.email}
                onChange={(e) =>
                  setFormData({ ...formData, email: e.target.value })
                }
                className={`${styles.textInput} ${
                  errors.email ? styles.inputError : ""
                }`}
                aria-required="true"
                aria-invalid={!!errors.email}
                aria-describedby={errors.email ? "contact-email-error" : undefined}
              />
              {errors.email && (
                <span id="contact-email-error" className={styles.errorMessage} role="alert">
                  {errors.email}
                </span>
              )}
            </div>
          </div>

          <div className={styles.inputRow}>
            <div className={styles.inputControl}>
              <label htmlFor="contact-company" className={styles.inputLabel}>
                Company / Organization <span className={styles.requiredStar} aria-hidden="true">*</span>
              </label>
              <input
                id="contact-company"
                name="company"
                type="text"
                placeholder="e.g. Lumina Global"
                value={formData.company}
                onChange={(e) =>
                  setFormData({ ...formData, company: e.target.value })
                }
                className={`${styles.textInput} ${
                  errors.company ? styles.inputError : ""
                }`}
                aria-required="true"
                aria-invalid={!!errors.company}
                aria-describedby={errors.company ? "contact-company-error" : undefined}
              />
              {errors.company && (
                <span id="contact-company-error" className={styles.errorMessage} role="alert">
                  {errors.company}
                </span>
              )}
            </div>

            <div className={styles.inputControl}>
              <label htmlFor="contact-website" className={styles.inputLabel}>
                Current Website URL <span className={styles.fieldHint}>(Optional)</span>
              </label>
              <input
                id="contact-website"
                name="website"
                type="url"
                placeholder="https://yourcompany.com"
                value={formData.website}
                onChange={(e) =>
                  setFormData({ ...formData, website: e.target.value })
                }
                className={styles.textInput}
              />
            </div>
          </div>

          <div className={styles.inputRow}>
            <div className={styles.inputControl}>
              <label htmlFor="contact-phone" className={styles.inputLabel}>
                Phone or WhatsApp <span className={styles.fieldHint}>(Optional)</span>
              </label>
              <input
                id="contact-phone"
                name="phone"
                type="tel"
                placeholder="+91 98765 43210"
                value={formData.phone}
                onChange={(e) =>
                  setFormData({ ...formData, phone: e.target.value })
                }
                className={styles.textInput}
              />
            </div>
          </div>
        </div>

        {/* 5. Project Vision & Goals */}
        <div className={styles.fieldGroup}>
          <label htmlFor="contact-message" className={styles.fieldLabel}>
            5. Project Scope & Strategic Objectives
            <span className={styles.requiredStar} aria-hidden="true">*</span>
            <span className={styles.fieldHint}>(What challenges or growth milestones are you solving for?)</span>
          </label>
          <div className={styles.inputControl}>
            <textarea
              id="contact-message"
              name="message"
              placeholder="Outline your vision, current bottlenecks, desired timeline, or key technical requirements..."
              value={formData.message}
              onChange={(e) =>
                setFormData({ ...formData, message: e.target.value })
              }
              className={`${styles.textareaInput} ${
                errors.message ? styles.inputError : ""
              }`}
              aria-required="true"
              aria-invalid={!!errors.message}
              aria-describedby={errors.message ? "contact-message-error" : undefined}
            />
            {errors.message && (
              <span id="contact-message-error" className={styles.errorMessage} role="alert">
                {errors.message}
              </span>
            )}
          </div>
        </div>

        {/* 6. Consent Checkbox */}
        <div>
          <label className={styles.checkboxLabel}>
            <input
              type="checkbox"
              checked={formData.consent}
              onChange={(e) =>
                setFormData({ ...formData, consent: e.target.checked })
              }
              className={styles.checkboxInput}
            />
            <span>
              I agree to receive a direct architectural review and preliminary roadmap
              from Rayvix Digital principals. (Zero unsolicited marketing; complete NDA adherence).
            </span>
          </label>
          {errors.consent && (
            <div className={styles.errorMessage} style={{ marginBottom: "1rem" }}>
              {errors.consent}
            </div>
          )}
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          disabled={isSubmitting}
          className={styles.submitButton}
        >
          {isSubmitting ? (
            <>
              <span className={styles.spinner} aria-hidden="true" />
              <span>Transmitting Strategic Brief...</span>
            </>
          ) : (
            <>
              <span>Dispatch Consultation Brief</span>
              <svg
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                aria-hidden="true"
              >
                <path
                  d="M3 8H13M13 8L8.5 3.5M13 8L8.5 12.5"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </>
          )}
        </button>
      </form>
    </div>
  );
}

function ContactFormWrapper() {
  const searchParams = useSearchParams();
  const tierParam = searchParams.get("tier");
  const retainerParam = searchParams.get("retainer");
  const serviceParam = searchParams.get("service");
  const projectParam = searchParams.get("project");

  const initialService = resolveInitialService(serviceParam, projectParam);
  const initialBudget = resolveInitialBudget(tierParam, retainerParam);
  const initialProject = resolveInitialProject(projectParam);
  const initialRetainer = resolveInitialRetainer(retainerParam);

  const formKey = `${initialService}-${initialBudget}-${initialProject}-${initialRetainer}`;

  return (
    <ContactFormInner
      key={formKey}
      initialService={initialService}
      initialBudget={initialBudget}
      initialProject={initialProject}
      initialRetainer={initialRetainer}
    />
  );
}

export function ContactForm() {
  return (
    <Suspense
      fallback={
        <div className={styles.formContainer} aria-busy="true">
          <div className={styles.formHeader}>
            <span className={styles.formEyebrow}>Direct Studio Intake</span>
            <h2 className={styles.formTitle}>Initiate Strategic Consultation</h2>
            <p className={styles.formSubtitle}>Loading consultation brief...</p>
          </div>
        </div>
      }
    >
      <ContactFormWrapper />
    </Suspense>
  );
}
