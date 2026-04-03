"use client";

import React from "react";
import SiteLayout from "@/components/site-layout";
import Link from "next/link";
import {
  ArrowLeft,
  BarChart3,
  Calculator,
  Activity,
  LineChart,
  ShieldAlert,
  Target,
  Mail,
} from "lucide-react";
import RadialOrbitalTimeline from "@/components/ui/radial-orbital-timeline";

const actuarialTimelineData = [
  {
    id: 1,
    title: "Data Preparation",
    date: "Phase 1",
    content: "Consolidating internal claims databases into a consistent actuarial data mart, ensuring high fidelity for premium calculations.",
    category: "Data",
    icon: DatabaseIcon,
    relatedIds: [2],
    status: "completed" as const,
    energy: 90,
  },
  {
    id: 2,
    title: "Pricing Models",
    date: "Phase 2",
    content: "Developing predictive generalized linear models (GLMs) for technical pricing and pure premium estimation across various lines.",
    category: "Analysis",
    icon: Calculator,
    relatedIds: [1, 3],
    status: "completed" as const,
    energy: 100,
  },
  {
    id: 3,
    title: "Reserving & Trending",
    date: "Phase 3",
    content: "Employing Chain Ladder and Bornhuetter-Ferguson methods coupled with advanced ML tools to project incurred but not reported (IBNR) reserves.",
    category: "Reserving",
    icon: LineChart,
    relatedIds: [2, 4],
    status: "in-progress" as const,
    energy: 85,
  },
  {
    id: 4,
    title: "Audits & Control",
    date: "Phase 4",
    content: "Deploying automated rule-based and ML anomaly detection frameworks to identify irregular claims and reduce fraudulent activities.",
    category: "Audit",
    icon: ShieldAlert,
    relatedIds: [3],
    status: "in-progress" as const,
    energy: 70,
  },
  {
    id: 5,
    title: "Strategic Impact",
    date: "Phase 5",
    content: "Providing C-level actionable intelligence on tariff negotiations, stop-loss treaties, and reinsurance optimization strategies.",
    category: "Strategy",
    icon: Target,
    relatedIds: [2, 4],
    status: "pending" as const,
    energy: 95,
  },
];

function DatabaseIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <ellipse cx="12" cy="5" rx="9" ry="3" />
      <path d="M3 5V19A9 3 0 0 0 21 19V5" />
      <path d="M3 12A9 3 0 0 0 21 12" />
    </svg>
  );
}

export default function ActuarialPage() {
  return (
    <SiteLayout>
      {/* ═══════ HERO ═══════ */}
      <section className="actuarial-hero relative pt-24 pb-12 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-emerald-600/8 via-teal-500/5 to-transparent pointer-events-none" />
        <div className="absolute top-20 right-10 w-[500px] h-[500px] bg-emerald-500/8 rounded-full blur-[120px] pointer-events-none" />
        <div className="absolute bottom-10 left-10 w-[350px] h-[350px] bg-teal-500/8 rounded-full blur-[100px] pointer-events-none" />

        <div className="w-full py-12 md:py-20 flex flex-col items-center justify-center">
          <Link
            href="/consultancy"
            className="inline-flex items-center justify-center gap-2 text-slate-500 hover:text-emerald-400 text-sm transition-colors mb-8 group"
          >
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            Back to Consultancy
          </Link>

          <div className="inline-flex items-center justify-center gap-2 px-4 py-1.5 rounded-full border border-emerald-500/20 bg-emerald-500/5 text-emerald-400 text-xs tracking-widest uppercase mb-6 animate-fade-in">
            <BarChart3 className="w-3.5 h-3.5" />
            Insurance Sector
          </div>

          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight animate-fade-in-up text-center w-full">
            Actuarial Consulting &{" "}
            <span className="actuarial-gradient-text">Predictive ML</span>
          </h1>

          <p className="text-lg md:text-xl text-slate-400 max-w-2xl text-center animate-fade-in-up delay-200 leading-relaxed">
            Delivering cutting-edge actuarial modeling, medical pricing, pricing systems, reserving estimates, and electronic anomaly audits across Milliman and Taha Actuaries.
          </p>
        </div>
      </section>

      {/* ═══════ ORBITAL TIMELINE ═══════ */}
      <section className="actuarial-timeline py-10">
        <RadialOrbitalTimeline
          timelineData={actuarialTimelineData}
          title="Actuarial Project Lifecycle"
          subtitle=" "
        />
      </section>

      {/* ═══════ CTA ═══════ */}
      <section className="actuarial-cta py-20 mt-10">
        <div className="max-w-3xl mx-auto px-6">
          <div className="relative overflow-hidden rounded-2xl p-10 md:p-14 text-center">
            {/* CTA Background */}
            <div className="absolute inset-0 bg-gradient-to-br from-emerald-600/15 via-teal-600/10 to-cyan-600/15 border border-emerald-500/15 rounded-2xl" />
            <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-500/10 rounded-full blur-[80px] pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-teal-500/10 rounded-full blur-[60px] pointer-events-none" />

            <div className="relative z-10">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-5">
                Optimize Your Actuarial Workflows
              </h2>
              <p className="text-slate-400 max-w-lg mx-auto mb-8 text-lg">
                Ready to empower your actuarial divisions with automation and enhanced predictive ML capabilities?
              </p>
              <a
                href="mailto:y.shahzeb@gmail.com"
                className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-emerald-500 to-teal-500 text-white rounded-xl font-semibold hover:shadow-lg hover:shadow-emerald-500/25 transition-all hover:-translate-y-0.5"
              >
                <Mail className="w-5 h-5" />
                Discuss Your Models
              </a>
            </div>
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}
