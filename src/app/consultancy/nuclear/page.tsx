"use client";

import React, { useEffect, useState, useRef } from "react";
import SiteLayout from "@/components/site-layout";
import Link from "next/link";
import dynamic from "next/dynamic";
import {
  ArrowLeft,
  Shield,
  Zap,
  BarChart3,
  Atom,
  Activity,
  Database,
  ShieldCheck,
  Gauge,
  Mail,
  Cpu,
  LineChart,
  AlertTriangle,
  CheckCircle2,
  Clock,
  FileText,
  TrendingUp,
} from "lucide-react";

/* ─── Lazy-load WebGL components (they need window/DOM) ─── */
// const HeroOdyssey = dynamic(
//   () =>
//     import("@/components/ui/hero-odyssey").then((mod) => ({
//       default: mod.HeroOdyssey,
//     })),
//   { ssr: false }
// );

// const TurbulentFlow = dynamic(
//   () =>
//     import("@/components/ui/turbulent-flow").then((mod) => ({
//       default: mod.TurbulentFlow,
//     })),
//   { ssr: false }
// );

/* ─── Animated Counter ─── */
function AnimatedNumber({
  target,
  suffix = "",
}: {
  target: number;
  suffix?: string;
}) {
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

/* ─── Data ─── */
const stats = [
  { label: "GW Capacity Supported", value: 5, suffix: ".6 GW" },
  { label: "Reactor Units", value: 4, suffix: " Units" },
  { label: "Years of Engagement", value: 3, suffix: "+" },
  { label: "Dashboards & Reports", value: 25, suffix: "+" },
];

const projects = [
  {
    title: "Operational Analytics Platform",
    description:
      "Built enterprise-grade analytics infrastructure for monitoring nuclear plant operations. Designed real-time dashboards tracking reactor performance, safety metrics, and maintenance schedules across all four Barakah units.",
    year: "2019 – 2021",
    image:
      "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?q=80&w=2670&auto=format&fit=crop",
    icon: BarChart3,
    tags: ["Real-time Analytics", "Power BI", "Operational Intelligence"],
    color: "from-amber-500 to-orange-400",
  },
  {
    title: "Safety & Compliance Data Systems",
    description:
      "Engineered data pipelines for nuclear safety compliance reporting. Automated collection, validation, and reporting of safety metrics aligned with FANR regulatory requirements and international nuclear standards.",
    year: "2019 – 2021",
    image:
      "https://images.unsplash.com/photo-1558618666-fcd25c85f82e?q=80&w=2670&auto=format&fit=crop",
    icon: ShieldCheck,
    tags: ["Safety Analytics", "Regulatory Compliance", "FANR Standards"],
    color: "from-emerald-500 to-teal-400",
  },
  {
    title: "Predictive Maintenance Models",
    description:
      "Developed machine learning models for predictive maintenance of critical nuclear infrastructure. Early detection of anomalies in equipment performance data, reducing unplanned downtime and improving operational efficiency.",
    year: "2020 – 2021",
    image:
      "https://images.unsplash.com/photo-1581092160607-ee22621dd758?q=80&w=2670&auto=format&fit=crop",
    icon: Cpu,
    tags: ["Machine Learning", "Predictive Analytics", "Anomaly Detection"],
    color: "from-violet-500 to-purple-400",
  },
  {
    title: "Enterprise Data Standardization",
    description:
      "Led the standardization of diverse operational datasets into unified data models. Created comprehensive data dictionaries and governance frameworks to ensure data quality across the organization.",
    year: "2019 – 2021",
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2670&auto=format&fit=crop",
    icon: Database,
    tags: ["Data Engineering", "Governance", "Data Quality"],
    color: "from-cyan-500 to-blue-400",
  },
];

const scopeItems = [
  {
    icon: Gauge,
    title: "Reactor Performance",
    description:
      "Monitoring and optimizing reactor output across all four APR-1400 units at the Barakah Nuclear Energy Plant.",
  },
  {
    icon: ShieldCheck,
    title: "Safety Analytics",
    description:
      "Automated compliance reporting and safety metric tracking aligned with FANR and international nuclear standards.",
  },
  {
    icon: Activity,
    title: "Predictive Maintenance",
    description:
      "ML-driven anomaly detection and predictive modeling for critical plant infrastructure and equipment.",
  },
  {
    icon: Database,
    title: "Data Architecture",
    description:
      "Enterprise-scale data warehousing and pipeline engineering for complex multi-system nuclear operational data.",
  },
  {
    icon: LineChart,
    title: "KPI Dashboards",
    description:
      "Real-time executive dashboards providing actionable insights for plant operations and strategic decision-making.",
  },
  {
    icon: FileText,
    title: "Regulatory Reporting",
    description:
      "Automated data collection and report generation for federal nuclear regulatory authority submissions.",
  },
];

const keyCapabilities = [
  "Real-time reactor performance monitoring dashboards",
  "Automated safety and compliance reporting (FANR aligned)",
  "Predictive maintenance ML models for critical equipment",
  "Enterprise data warehousing and pipeline engineering",
  "Cross-unit performance benchmarking analytics",
  "Executive KPI dashboards for strategic decision-making",
  "Data quality frameworks and governance implementation",
  "Anomaly detection in operational sensor data",
];

export default function NuclearPage() {
  return (
    <SiteLayout>
      {/* ═══════ HERO — Static Fallback ═══════ */}
      <section className="nuclear-hero m-4 md:m-8 mt-24 md:mt-32 rounded-3xl overflow-hidden relative border border-amber-500/20 shadow-[0_0_40px_-10px_rgba(245,158,11,0.2)] bg-gradient-to-br from-[#1a1400] via-[#0a0500] to-[rgb(10,15,26)]">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1620712943543-bcc4688e7485?q=80&w=2670&auto=format&fit=crop')] bg-cover bg-center opacity-10 mix-blend-overlay" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0a0f1a] via-transparent to-transparent opacity-90" />
        <div className="relative z-10 w-full min-h-[60vh] flex flex-col items-center justify-center py-20 px-6">
          {/* Back link */}
          <div className="mb-8">
            <Link
              href="/consultancy"
              className="inline-flex items-center justify-center gap-2 text-slate-400 hover:text-amber-400 text-sm transition-colors group"
            >
              <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
              Back to Consultancy
            </Link>
          </div>

          {/* Badge */}
          <div className="inline-flex items-center justify-center gap-2 px-5 py-2 rounded-full border border-amber-500/25 bg-amber-500/8 text-amber-400 text-xs tracking-widest uppercase mb-8 animate-fade-in">
            <Atom className="w-3.5 h-3.5" />
            Nuclear Energy
          </div>

          {/* Title */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight animate-fade-in-up text-center">
            Powering the Future with{" "}
            <span className="nuclear-gradient-text">Nuclear Data</span>
          </h1>

          {/* Subtitle */}
          <p className="text-lg md:text-xl text-slate-300 max-w-2xl text-center animate-fade-in-up delay-200 leading-relaxed mb-10">
            Data engineering and operational analytics for{" "}
            <b className="text-white">
              ENEC — Emirates Nuclear Energy Corporation
            </b>
            . Supporting critical analytical infrastructure for the Barakah
            Nuclear Energy Plant — one of the world&apos;s newest and largest
            nuclear power facilities.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up delay-300">
            <a
              href="mailto:y.shahzeb@gmail.com"
              className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-amber-500 to-orange-500 text-black font-semibold rounded-xl hover:shadow-lg hover:shadow-amber-500/25 transition-all hover:-translate-y-0.5"
            >
              <Mail className="w-5 h-5" />
              Discuss Your Project
            </a>
          </div>
        </div>
      </section>

      {/* ═══════ STATS ═══════ */}
      <section className="nuclear-stats py-16">
        <div className="max-w-4xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((stat, i) => (
              <div
                key={stat.label}
                className="glass-card p-6 animate-fade-in-up nuclear-stat-card flex flex-col items-center text-center"
                style={{ animationDelay: `${i * 100}ms` }}
              >
                <div className="nuclear-stat-number text-3xl md:text-4xl font-bold mb-2">
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

      {/* ═══════ ABOUT ENEC / CONTEXT ═══════ */}
      <section className="nuclear-context py-20">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-12">
            <p className="text-amber-400 text-sm tracking-widest uppercase mb-4 animate-fade-in">
              The Organization
            </p>
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 animate-fade-in-up">
              Emirates Nuclear Energy Corporation
            </h2>
          </div>

          <div className="glass-card p-10 md:p-14 animate-fade-in-up text-center">
            <div className="flex items-center justify-center gap-3 mb-6">
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-amber-500/20 to-orange-500/20 flex items-center justify-center">
                <Atom className="w-7 h-7 text-amber-400" />
              </div>
            </div>
            <p className="text-slate-300 leading-relaxed text-lg mb-6">
              ENEC is responsible for the deployment and ownership of peaceful
              nuclear energy plants in the UAE. The Barakah Nuclear Energy Plant,
              located in the Al Dhafra region of Abu Dhabi, is the Arab
              world&apos;s first nuclear energy plant, comprising four
              APR-1400 reactor units with a combined capacity of{" "}
              <b className="text-white">5.6 GW</b> — enough to power up to 25%
              of the nation&apos;s electricity needs.
            </p>
            <p className="text-slate-400 leading-relaxed text-base">
              As a data scientist embedded within ENEC operations, I developed
              critical analytics platforms, built predictive maintenance models,
              and created enterprise-grade reporting systems that support the
              safe and efficient operation of this landmark energy
              infrastructure.
            </p>
          </div>
        </div>
      </section>

      {/* ═══════ KEY CAPABILITIES ═══════ */}
      <section className="nuclear-capabilities py-20">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-14">
            <p className="text-amber-400 text-sm tracking-widest uppercase mb-4 animate-fade-in">
              Capabilities
            </p>
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-5 animate-fade-in-up">
              What I Delivered
            </h2>
            <p className="text-slate-400 max-w-xl mx-auto text-lg animate-fade-in-up delay-100">
              Key data science and engineering deliverables at ENEC.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {keyCapabilities.map((capability, i) => (
              <div
                key={capability}
                className="flex items-start gap-4 p-5 rounded-xl border border-slate-800/60 bg-[#0a0f1a]/40 backdrop-blur-sm hover:border-amber-500/30 transition-all duration-300 animate-fade-in-up group"
                style={{ animationDelay: `${i * 80}ms` }}
              >
                <CheckCircle2 className="w-5 h-5 text-amber-400 flex-shrink-0 mt-0.5 group-hover:scale-110 transition-transform" />
                <span className="text-slate-300 text-sm leading-relaxed">
                  {capability}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════ KEY INITIATIVES (Project Cards) ═══════ */}
      <section className="nuclear-projects py-20">
        <div className="min-h-screen flex flex-col items-center justify-center w-full">
          <div className="text-center mb-16">
            <p className="text-amber-400 text-sm tracking-widest uppercase mb-4 animate-fade-in">
              Key Initiatives
            </p>
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-5 animate-fade-in-up">
              Select Highlights
            </h2>
            <p className="text-slate-400 max-w-xl mx-auto text-lg text-center animate-fade-in-up delay-100">
              Major data science and engineering projects delivered for ENEC.
            </p>
          </div>

          <div className="space-y-16 w-full max-w-5xl">
            {projects.map((project, i) => (
              <div
                key={project.title}
                className="nuclear-project-card group animate-fade-in-up w-full"
                style={{ animationDelay: `${i * 150}ms` }}
              >
                <div className="flex flex-col overflow-hidden rounded-2xl border border-slate-800/60 bg-[#0a0f1a]/60 backdrop-blur-sm hover:border-amber-500/30 transition-all duration-500 items-center text-center">
                  {/* Image */}
                  <div className="relative w-full h-64 md:h-80 p-4 md:p-6 pb-0">
                    <div className="relative w-full h-full rounded-2xl overflow-hidden border border-slate-700/50 shadow-lg">
                      <img
                        src={project.image}
                        alt={project.title}
                        className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-[#0a0f1a]/30" />
                      {/* Year badge */}
                      <div className="absolute top-4 left-4 md:left-auto md:right-4 px-3 py-1 rounded-full bg-black/50 backdrop-blur-sm border border-white/10 text-white text-xs font-mono z-10">
                        {project.year}
                      </div>
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
                      <h3 className="text-2xl md:text-3xl font-bold text-white group-hover:text-amber-300 transition-colors">
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
                          className="px-3 py-1 rounded-full text-xs font-medium border border-slate-700/60 text-slate-400 bg-slate-800/40 group-hover:border-amber-500/20 group-hover:text-amber-300/80 transition-colors"
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
      <section className="nuclear-scope py-20">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-16">
            <p className="text-amber-400 text-sm tracking-widest uppercase mb-4 animate-fade-in">
              Expertise
            </p>
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-5 animate-fade-in-up">
              Scope of Work
            </h2>
            <p className="text-slate-400 max-w-xl mx-auto text-lg animate-fade-in-up delay-100">
              End-to-end data capabilities engineered for nuclear energy
              operations.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {scopeItems.map((item, i) => (
              <div
                key={item.title}
                className="nuclear-scope-card glass-card p-7 animate-fade-in-up group flex flex-col items-center text-center"
                style={{ animationDelay: `${i * 100}ms` }}
              >
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-amber-500/20 to-orange-500/20 flex items-center justify-center mb-5 group-hover:from-amber-500/30 group-hover:to-orange-500/30 transition-all">
                  <item.icon className="w-6 h-6 text-amber-400" />
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

      {/* ═══════ DIVIDER — Static Fallback ═══════ */}
      <section className="nuclear-divider m-4 md:m-8 lg:mx-12 lg:my-20 rounded-3xl overflow-hidden relative border border-amber-500/20 shadow-[0_0_40px_-10px_rgba(245,158,11,0.2)] bg-gradient-to-r from-amber-900/40 via-orange-900/20 to-amber-900/40 py-24 md:py-32">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1558618666-fcd25c85f82e?q=80&w=2670&auto=format&fit=crop')] bg-cover bg-center opacity-10 mix-blend-overlay" />
        <div className="relative z-10 w-full h-full flex flex-col items-center justify-center">
          <div className="text-center px-6">
            <h2
              className="text-4xl md:text-6xl font-bold text-white mb-4"
              style={{ textShadow: "0 4px 30px rgba(0,0,0,0.8)" }}
            >
              Critical Infrastructure.
              <br />
              <span className="nuclear-gradient-text">Powered by Data.</span>
            </h2>
            <p
              className="text-lg text-white/80 max-w-xl mx-auto"
              style={{ textShadow: "0 2px 16px rgba(0,0,0,0.8)" }}
            >
              When the stakes are this high, precision analytics isn&apos;t
              optional — it&apos;s essential.
            </p>
          </div>
        </div>
      </section>

      {/* ═══════ CTA ═══════ */}
      <section className="nuclear-cta py-20">
        <div className="max-w-3xl mx-auto px-6">
          <div className="relative overflow-hidden rounded-2xl p-10 md:p-14 text-center">
            {/* CTA Background */}
            <div className="absolute inset-0 bg-gradient-to-br from-amber-600/15 via-orange-600/10 to-yellow-600/15 border border-amber-500/15 rounded-2xl" />
            <div className="absolute top-0 right-0 w-64 h-64 bg-amber-500/10 rounded-full blur-[80px] pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-orange-500/10 rounded-full blur-[60px] pointer-events-none" />

            <div className="relative z-10">
              <div className="inline-flex items-center justify-center gap-2 px-4 py-1.5 rounded-full border border-amber-500/20 bg-amber-500/5 text-amber-400 text-xs tracking-widest uppercase mb-6 animate-fade-in">
                <Zap className="w-3.5 h-3.5" />
                Let&apos;s Talk
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-5">
                Bring Nuclear-Grade Analytics
                <br />
                to Your Organization
              </h2>
              <p className="text-slate-400 max-w-lg mx-auto mb-8 text-lg">
                Whether you&apos;re in energy, critical infrastructure, or
                high-stakes operations — I can help you build the data
                foundations that matter.
              </p>
              <a
                href="mailto:y.shahzeb@gmail.com"
                className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-amber-500 to-orange-500 text-black rounded-xl font-semibold hover:shadow-lg hover:shadow-amber-500/25 transition-all hover:-translate-y-0.5"
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
