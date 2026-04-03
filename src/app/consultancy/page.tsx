"use client";

import React from "react";
import SiteLayout from "@/components/site-layout";
import { BentoCard, BentoGrid } from "@/components/ui/bento-grid";
import {
  Shield,
  Building2,
  Heart,
  Zap,
  Target,
  Search,
  LineChart,
  Layers,
  CheckCircle2,
  ArrowRight,
  Globe,
  BarChart3,
  Database,
  Users,
  Mail,
  Phone,
  Award,
  FileText,
  TrendingUp,
  Brain,
} from "lucide-react";

const GithubIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
  </svg>
);
import Link from "next/link";

/* ─────────── Sectors Bento ─────────── */
const sectors = [
  {
    Icon: Shield,
    name: "Nuclear Energy",
    description:
      "Data science and engineering for ENEC — the Emirates Nuclear Energy Corporation. Supporting critical operational analytics for one of the region's most important energy projects.",
    href: "/consultancy/nuclear",
    cta: "Details",
    background: (
      <div className="absolute inset-0 bg-gradient-to-br from-amber-500/15 via-transparent to-transparent" />
    ),
    className: "lg:col-start-1 lg:col-end-2 lg:row-start-1 lg:row-end-3",
  },
  {
    Icon: Heart,
    name: "Healthcare",
    description:
      "Principal Data Scientist at NMC Healthcare — the UAE's largest private healthcare provider. Led data standardization, cloud migration to Snowflake, and advanced ML for clinical analytics.",
    href: "/consultancy/healthcare",
    cta: "Details",
    background: (
      <div className="absolute inset-0 bg-gradient-to-br from-rose-500/15 via-transparent to-transparent" />
    ),
    className: "lg:col-start-2 lg:col-end-3 lg:row-start-1 lg:row-end-2",
  },
  {
    Icon: Building2,
    name: "Government Health Programs",
    description:
      "Consulted for DHA (Dubai Health Authority) and DoH (Department of Health, Abu Dhabi) on self-insured government health programs, utilization reports, and tariff negotiations.",
    href: "/consultancy/gov-health",
    cta: "Details",
    background: (
      <div className="absolute inset-0 bg-gradient-to-br from-blue-500/15 via-transparent to-transparent" />
    ),
    className: "lg:col-start-2 lg:col-end-3 lg:row-start-2 lg:row-end-3",
  },
  {
    Icon: BarChart3,
    name: "Insurance & Actuarial",
    description:
      "Actuarial consulting with Milliman and Taha Actuaries — medical pricing, DRG analysis, reserving, electronic audits, and ML-driven actuarial modeling for GCC insurers.",
    href: "/consultancy/actuarial",
    cta: "Details",
    background: (
      <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/15 via-transparent to-transparent" />
    ),
    className: "lg:col-start-3 lg:col-end-4 lg:row-start-1 lg:row-end-2",
  },
  {
    Icon: Globe,
    name: "Technology & FinTech",
    description:
      "Principal Data Scientist at Rasan IT — developed local LLM execution solutions for NLP and image processing in the GCC region. Won a national FinTech competition in KSA.",
    href: "/consultancy/fintech",
    cta: "Details",
    background: (
      <div className="absolute inset-0 bg-gradient-to-br from-violet-500/15 via-transparent to-transparent" />
    ),
    className: "lg:col-start-3 lg:col-end-4 lg:row-start-2 lg:row-end-3",
  },
];

/* ─────────── Process Steps ─────────── */
const processSteps = [
  {
    step: "01",
    title: "Assess",
    description:
      "Deep-dive into your current data landscape, systems, and business objectives. Identify gaps, opportunities, and quick wins.",
    icon: Search,
    color: "from-cyan-400 to-cyan-600",
  },
  {
    step: "02",
    title: "Strategize",
    description:
      "Develop a tailored data strategy aligned with your organizational goals. Define KPIs, architecture, and an implementation roadmap.",
    icon: Target,
    color: "from-purple-400 to-purple-600",
  },
  {
    step: "03",
    title: "Implement",
    description:
      "Execute the strategy with hands-on delivery — from data pipelines and ML models to dashboards and reporting frameworks.",
    icon: Layers,
    color: "from-pink-400 to-pink-600",
  },
  {
    step: "04",
    title: "Scale",
    description:
      "Ensure sustainability through training, documentation, and scalable architecture. Set your team up for long-term success.",
    icon: TrendingUp,
    color: "from-emerald-400 to-emerald-600",
  },
];

/* ─────────── Engagement Types ─────────── */
const engagementHighlights = [
  {
    title: "Government Health Data Analysis",
    outcomes: [
      "Utilization reports for self-insured government programs",
      "Cost driver analyses and tariff negotiations",
      "Electronic audits of health data",
      "DRG data analysis and reconciliation",
    ],
    org: "DHA / DoH",
    icon: FileText,
  },
  {
    title: "Healthcare Cloud Migration",
    outcomes: [
      "Large-scale migration to Snowflake",
      "Standardized datasets into unified formats",
      "Advanced ML methods for healthcare data",
      "Led data science team as Principal DS",
    ],
    org: "NMC Healthcare",
    icon: Database,
  },
  {
    title: "Actuarial ML Modeling",
    outcomes: [
      "Advanced GLM methods for reserving",
      "Change Point Detection in cost data",
      "ARIMA models for trend analysis",
      "Predictive pricing for health insurance",
    ],
    org: "Milliman / Taha Actuaries",
    icon: Brain,
  },
];

/* ─────────── Services List ─────────── */
const consultancyServices = [
  {
    title: "Data Strategy & Architecture",
    description: "Design robust data ecosystems that support analytics, reporting, and ML at scale.",
    icon: Database,
  },
  {
    title: "ML & AI Advisory",
    description: "Expert guidance on where and how to apply machine learning for maximum ROI.",
    icon: Brain,
  },
  {
    title: "Data Migration & Modernization",
    description: "Migrate legacy systems to modern cloud platforms like Snowflake and Databricks.",
    icon: Layers,
  },
  {
    title: "Analytics & Dashboarding",
    description: "Build automated reporting with Power BI, Tableau, and custom dashboards.",
    icon: BarChart3,
  },
  {
    title: "Stakeholder Management",
    description: "Bridge the gap between technical teams and business leaders with clear communication.",
    icon: Users,
  },
  {
    title: "Team Leadership & Training",
    description: "Upskill your teams and build internal data science capabilities that last.",
    icon: Award,
  },
];

export default function ConsultancyPage() {
  return (
    <SiteLayout>
      {/* ═══════ HERO ═══════ */}
      <section className="relative pt-24 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-purple-500/5 via-transparent to-transparent" />
        <div className="absolute top-20 right-20 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-20 left-20 w-72 h-72 bg-cyan-500/10 rounded-full blur-3xl" />

        <div className="relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-purple-400 text-sm tracking-widest uppercase mb-5 animate-fade-in">
              Consultancy Services
            </p>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-7 leading-tight animate-fade-in-up">
              Strategic Consultancy for{" "}
              <span className="gradient-text-purple">
                Complex Organizations
              </span>
            </h1>
            <p className="text-lg text-slate-400 max-w-2xl mx-auto mb-10 animate-fade-in-up delay-200">
              9+ years advising governments, healthcare providers, nuclear
              energy operators, and financial institutions across the GCC. I
              bring deep technical expertise combined with strategic business
              acumen.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up delay-300">
              <a
                href="mailto:y.shahzeb@gmail.com"
                className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-purple-500 to-purple-600 text-white rounded-lg font-semibold hover:shadow-lg hover:shadow-purple-500/25 transition-all"
              >
                <Mail className="w-5 h-5" /> Book a Consultation
              </a>
              <a
                href="tel:+971551763478"
                className="inline-flex items-center gap-2 px-8 py-4 border border-slate-700 text-slate-300 rounded-lg font-medium hover:border-purple-500/50 hover:text-purple-400 transition-all"
              >
                <Phone className="w-5 h-5" /> Call Now
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════ WHAT I OFFER ═══════ */}
      <section className="py-40 md:py-64">
        <div>
          <div className="text-center mb-16">
            <p className="text-purple-400 text-sm tracking-widest uppercase mb-4">
              Services
            </p>
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-5">
              What I Bring to the Table
            </h2>
            <p className="text-slate-400 max-w-2xl mx-auto text-lg">
              Comprehensive consultancy services backed by real-world
              experience with the most demanding clients.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {consultancyServices.map((service, i) => (
              <div
                key={service.title}
                className="glass-card p-8 animate-fade-in-up flex flex-col items-center text-center"
                style={{ animationDelay: `${i * 100}ms` }}
              >
                <service.icon className="w-12 h-12 text-purple-400 mb-5" />
                <h3 className="text-white font-semibold text-lg mb-3">
                  {service.title}
                </h3>
                <p className="text-slate-400 text-sm leading-relaxed">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════ SECTORS BENTO ═══════ */}
      <section className="py-40 md:py-64">
        <div>
          <div className="text-center mb-16">
            <p className="text-purple-400 text-sm tracking-widest uppercase mb-4">
              Sectors
            </p>
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-5">
              Industries I&apos;ve Transformed
            </h2>
          </div>

          <BentoGrid className="lg:grid-rows-2 auto-rows-[18rem]">
            {sectors.map((sector) => (
              <BentoCard key={sector.name} {...sector} />
            ))}
          </BentoGrid>
        </div>
      </section>

      {/* ═══════ PROCESS ═══════ */}
      <section className="py-40 md:py-64">
        <div>
          <div className="text-center mb-20">
            <p className="text-purple-400 text-sm tracking-widest uppercase mb-4">
              Methodology
            </p>
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-5">
              My Consulting Process
            </h2>
            <p className="text-slate-400 max-w-2xl mx-auto text-lg">
              A proven 4-step approach refined over years of complex engagements.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
            {processSteps.map((step, i) => (
              <div
                key={step.step}
                className="relative animate-fade-in-up"
                style={{ animationDelay: `${i * 150}ms` }}
              >
                <div className="glass-card p-8 h-full flex flex-col items-center text-center">
                  <div
                    className={`inline-flex items-center justify-center w-16 h-16 rounded-xl bg-gradient-to-br ${step.color} mb-6`}
                  >
                    <step.icon className="w-8 h-8 text-white" />
                  </div>
                  <div className="text-3xl font-bold text-slate-700 mb-3">
                    {step.step}
                  </div>
                  <h3 className="text-white font-semibold text-xl mb-4">
                    {step.title}
                  </h3>
                  <p className="text-slate-400 text-sm leading-relaxed">
                    {step.description}
                  </p>
                </div>
                {i < processSteps.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-5 transform -translate-y-1/2 z-10">
                    <ArrowRight className="w-6 h-6 text-slate-700" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════ CASE STUDIES ═══════ */}
      <section className="py-40 md:py-64">
        <div>
          <div className="text-center mb-16">
            <p className="text-purple-400 text-sm tracking-widest uppercase mb-4">
              Case Studies
            </p>
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-5">
              Engagements & Outcomes
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {engagementHighlights.map((engagement, i) => (
              <div
                key={engagement.title}
                className="glass-card p-8 animate-fade-in-up flex flex-col items-center text-center"
                style={{ animationDelay: `${i * 100}ms` }}
              >
                <div className="flex flex-col items-center gap-3 mb-5">
                  <engagement.icon className="w-10 h-10 text-purple-400" />
                  <span className="text-sm text-purple-400 font-medium">
                    {engagement.org}
                  </span>
                </div>
                <h3 className="text-white font-semibold text-lg mb-5">
                  {engagement.title}
                </h3>
                <ul className="space-y-3 flex flex-col items-center text-center">
                  {engagement.outcomes.map((outcome) => (
                    <li
                      key={outcome}
                      className="flex items-center gap-2.5 text-sm text-slate-400"
                    >
                      <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                      {outcome}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════ CTA ═══════ */}
      <section className="py-40 md:py-64">
        <div className="max-w-4xl mx-auto cta-gradient rounded-2xl p-14 md:p-16 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-5">
            Let&apos;s Discuss Your Next Project
          </h2>
          <p className="text-slate-400 max-w-xl mx-auto mb-10 text-lg">
            From government health programs to nuclear energy — I&apos;ve delivered
            results for the most demanding clients. Your organization could be
            next.
          </p>
          <a
            href="mailto:y.shahzeb@gmail.com"
            className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-purple-500 to-cyan-500 text-white rounded-lg font-semibold hover:shadow-lg hover:shadow-purple-500/25 transition-all text-lg"
          >
            <Mail className="w-5 h-5" /> Book a Consultation
          </a>
        </div>
      </section>

      {/* ═══════ FOOTER ═══════ */}
      <footer className="border-t border-slate-800/50 py-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-slate-500 text-sm">
            © {new Date().getFullYear()} Shahzeb Yousuf. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <a
              href="https://github.com/shahzeb5136"
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-500 hover:text-purple-400 transition-colors"
            >
              <GithubIcon className="w-5 h-5" />
            </a>
            <a
              href="mailto:y.shahzeb@gmail.com"
              className="text-slate-500 hover:text-purple-400 transition-colors"
            >
              <Mail className="w-5 h-5" />
            </a>
          </div>
        </div>
      </footer>
    </SiteLayout>
  );
}
