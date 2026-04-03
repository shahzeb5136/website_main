"use client";

import React, { useEffect, useState, useRef } from "react";
import SiteLayout from "@/components/site-layout";
import Link from "next/link";
import {
  ArrowLeft,
  Building2,
  BarChart3,
  FileSearch,
  ShieldCheck,
  TrendingUp,
  Layers,
  CheckCircle2,
  Activity,
  Database,
  ChevronRight,
  Mail,
} from "lucide-react";

/* ─── Animated Counter ─── */
function AnimatedNumber({ target, suffix = "" }: { target: number; suffix?: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const hasAnimated = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated.current) {
          hasAnimated.current = true;
          const duration = 2000;
          const steps = 60;
          const increment = target / steps;
          let current = 0;
          const timer = setInterval(() => {
            current += increment;
            if (current >= target) {
              setCount(target);
              clearInterval(timer);
            } else {
              setCount(Math.floor(current));
            }
          }, duration / steps);
        }
      },
      { threshold: 0.3 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [target]);

  return (
    <span ref={ref}>
      {count}
      {suffix}
    </span>
  );
}

/* ─── Project Data ─── */
const projects = [
  {
    title: "DHA Self-Insured Programs",
    description:
      "Developed comprehensive utilization reports and cost driver analyses for self-insured government health programs under the Dubai Health Authority. Enabled data-driven decision-making for policy adjustments impacting hundreds of thousands of beneficiaries.",
    year: "2019 – 2021",
    image:
      "https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?q=80&w=2676&auto=format&fit=crop",
    icon: BarChart3,
    tags: ["Utilization Analysis", "Cost Drivers", "Policy Support"],
    color: "from-blue-500 to-cyan-400",
  },
  {
    title: "DoH Thiqa Program Audit",
    description:
      "Audited the Thiqa program for the Department of Health, Abu Dhabi. Optimized healthcare expenditures through evidence-based tariff structures, resulting in significant cost savings.",
    year: "2020 – 2022",
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2670&auto=format&fit=crop",
    icon: TrendingUp,
    tags: ["Electronic Audit", "Financial Analysis"],
    color: "from-purple-500 to-violet-400",
  },
  {
    title: "Electronic Audits Pipeline",
    description:
      "Developed automated anomaly detection and electronic audit pipelines for massive-scale healthcare claims data. Built rule-based and ML-driven systems to flag irregularities, reducing manual review time by over 10%.",
    year: "2019 – 2021",
    image:
      "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=2670&auto=format&fit=crop",
    icon: FileSearch,
    tags: ["Anomaly Detection", "Automation", "ML Pipelines"],
    color: "from-emerald-500 to-teal-400",
  },
  {
    title: "DRG Reconciliation System",
    description:
      "Implemented an advanced reconciliation system for Diagnosis-Related Group (DRG) claims to identify systemic billing discrepancies. Standardized pricing methodologies across multiple healthcare providers.",
    year: "2018 – 2020",
    image:
      "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?q=80&w=2670&auto=format&fit=crop",
    icon: ShieldCheck,
    tags: ["DRG Analysis", "Reconciliation", "Billing Accuracy"],
    color: "from-amber-500 to-orange-400",
  },
];

/* ─── Stats ─── */
const stats = [
  { label: "Years of Engagement", value: 6, suffix: "+" },
  { label: "Government Bodies Served", value: 4, suffix: "" },
  { label: "Claims Records Processed", value: 50, suffix: "M+" },
  { label: "Reduction in Manual Audits", value: 10, suffix: "%" },
];

/* ─── Scope Items ─── */
const scopeItems = [
  {
    icon: BarChart3,
    title: "Utilization Reporting",
    description: "Comprehensive reporting on healthcare utilization patterns, cost trends, and beneficiary demographics.",
  },
  {
    icon: Database,
    title: "Data Infrastructure",
    description: "Design and implementation of scalable data pipelines for processing millions of healthcare claims.",
  },
  {
    icon: FileSearch,
    title: "Electronic Audits",
    description: "Automated audit frameworks combining rule-based logic and machine learning for anomaly detection.",
  },
  {
    icon: Activity,
    title: "Cost Driver Analysis",
    description: "Deep-dive analyses to identify primary cost drivers and recommend evidence-based interventions.",
  },
  {
    icon: Layers,
    title: "DRG & Tariff Modeling",
    description: "Financial modeling for DRG-based billing systems and healthcare tariff negotiations.",
  },
  {
    icon: ShieldCheck,
    title: "Compliance & Governance",
    description: "Ensuring data quality, regulatory compliance, and transparent reporting for government stakeholders.",
  },
];

export default function GovHealthPage() {
  return (
    <SiteLayout>
      {/* ═══════ HERO ═══════ */}
      <section className="gov-hero relative pt-24 pb-20 overflow-hidden">
        {/* Decorative background */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-600/8 via-purple-500/5 to-transparent pointer-events-none" />
        <div className="absolute top-20 right-10 w-[500px] h-[500px] bg-blue-500/8 rounded-full blur-[120px] pointer-events-none" />
        <div className="absolute bottom-10 left-10 w-[350px] h-[350px] bg-cyan-500/8 rounded-full blur-[100px] pointer-events-none" />
        <div className="absolute top-60 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-purple-600/5 rounded-full blur-[80px] pointer-events-none" />

        {/* Floating grid pattern */}
        <div
          className="absolute inset-0 pointer-events-none opacity-[0.03]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />

        <div className="w-full py-12 md:py-20 flex flex-col items-center justify-center items-center">
          {/* Breadcrumb */}
          <Link
            href="/consultancy"
            className="inline-flex items-center justify-center gap-2 text-slate-500 hover:text-blue-400 text-sm transition-colors mb-8 group"
          >
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            Back to Consultancy
          </Link>

          {/* Badge */}
          <div className="inline-flex items-center justify-center gap-2 px-4 py-1.5 rounded-full border border-blue-500/20 bg-blue-500/5 text-blue-400 text-xs tracking-widest uppercase mb-6 animate-fade-in">
            <Building2 className="w-3.5 h-3.5" />
            Government Sector
          </div>

          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight animate-fade-in-up text-center w-full">
            Government Health{" "}
            <span className="gov-gradient-text">Programs</span>
          </h1>

          <p className="text-lg md:text-xl text-slate-400 max-w-2xl text-center animate-fade-in-up delay-200 leading-relaxed">
            Driving efficiency and strategic insights across the UAE&apos;s
            federal and regional health authorities — from utilization
            analytics to tariff negotiations.
          </p>
        </div>
      </section>

      {/* ═══════ STATS ═══════ */}
      <section className="gov-stats py-16">
        <div className="max-w-4xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((stat, i) => (
              <div
                key={stat.label}
                className="glass-card p-6 animate-fade-in-up gov-stat-card flex flex-col items-center text-center"
                style={{ animationDelay: `${i * 100}ms` }}
              >
                <div className="gov-stat-number text-3xl md:text-4xl font-bold mb-2">
                  <AnimatedNumber target={stat.value} suffix={stat.suffix} />
                </div>
                <div className="text-slate-500 text-sm font-medium">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════ KEY INITIATIVES (Project Cards) ═══════ */}
      <section className="gov-projects py-20">
        <div className="min-h-screen flex flex-col items-center justify-center">
          <div className="text-center mb-16">
            <p className="text-blue-400 text-sm tracking-widest uppercase mb-4 animate-fade-in">
              Key Initiatives
            </p>
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-5 animate-fade-in-up">
              Select Highlights
            </h2>
            <p className="text-slate-400 max-w-xl mx-auto text-lg text-center animate-fade-in-up delay-100">
              Major projects delivered for UAE health authorities.
            </p>
          </div>

          <div className="space-y-16">
            {projects.map((project, i) => (
              <div
                key={project.title}
                className="gov-project-card group animate-fade-in-up"
                style={{ animationDelay: `${i * 150}ms` }}
              >
                <div className="flex flex-col overflow-hidden rounded-2xl border border-slate-800/60 bg-[#0a0f1a]/60 backdrop-blur-sm hover:border-blue-500/30 transition-all duration-500 items-center text-center">
                  {/* Image */}
                  <div className="relative w-full h-64 md:h-80 overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-[#0a0f1a]/20" />
                    {/* Year badge */}
                    <div className="absolute top-4 left-4 md:left-auto md:right-4 px-3 py-1 rounded-full bg-black/50 backdrop-blur-sm border border-white/10 text-white text-xs font-mono z-10">
                      {project.year}
                    </div>
                  </div>

                  {/* Content */}
                  <div className="w-full p-8 md:p-12 flex flex-col justify-center items-center text-center">
                    <div className="flex flex-col items-center gap-4 mb-6">
                      <div
                        className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${project.color} flex items-center justify-center flex-shrink-0 shadow-lg`}
                      >
                        <project.icon className="w-7 h-7 text-white" />
                      </div>
                      <h3 className="text-2xl md:text-3xl font-bold text-white group-hover:text-blue-300 transition-colors">
                        {project.title}
                      </h3>
                    </div>

                    <p className="text-slate-400 leading-relaxed mb-8 max-w-3xl mx-auto text-lg">
                      {project.description}
                    </p>

                    <div className="flex flex-wrap justify-center gap-3">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-3 py-1 rounded-full text-xs font-medium border border-slate-700/60 text-slate-400 bg-slate-800/40 group-hover:border-blue-500/20 group-hover:text-blue-300/80 transition-colors"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════ SCOPE OF WORK ═══════ */}
      <section className="gov-scope py-20">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-16">
            <p className="text-blue-400 text-sm tracking-widest uppercase mb-4 animate-fade-in">
              Expertise
            </p>
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-5 animate-fade-in-up">
              Scope of Work
            </h2>
            <p className="text-slate-400 max-w-xl mx-auto text-lg animate-fade-in-up delay-100">
              End-to-end data science capabilities for government healthcare.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {scopeItems.map((item, i) => (
              <div
                key={item.title}
                className="gov-scope-card glass-card p-7 animate-fade-in-up group flex flex-col items-center text-center"
                style={{ animationDelay: `${i * 100}ms` }}
              >
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500/20 to-cyan-500/20 flex items-center justify-center mb-5 group-hover:from-blue-500/30 group-hover:to-cyan-500/30 transition-all">
                  <item.icon className="w-6 h-6 text-blue-400" />
                </div>
                <h3 className="text-white font-semibold text-lg mb-3">
                  {item.title}
                </h3>
                <p className="text-slate-400 text-sm leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════ CTA ═══════ */}
      <section className="gov-cta py-20">
        <div className="max-w-3xl mx-auto px-6">
          <div className="relative overflow-hidden rounded-2xl p-10 md:p-14 text-center">
            {/* CTA Background */}
            <div className="absolute inset-0 bg-gradient-to-br from-blue-600/15 via-purple-600/10 to-cyan-600/15 border border-blue-500/15 rounded-2xl" />
            <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/10 rounded-full blur-[80px] pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-cyan-500/10 rounded-full blur-[60px] pointer-events-none" />

            <div className="relative z-10">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-5">
                Interested in Health Analytics?
              </h2>
              <p className="text-slate-400 max-w-lg mx-auto mb-8 text-lg">
                Let&apos;s discuss how data science can transform your
                healthcare programs.
              </p>
              <a
                href="mailto:y.shahzeb@gmail.com"
                className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-blue-500 to-cyan-500 text-white rounded-xl font-semibold hover:shadow-lg hover:shadow-blue-500/25 transition-all hover:-translate-y-0.5"
              >
                <Mail className="w-5 h-5" />
                Get in Touch
              </a>
            </div>
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}
