"use client";

import React, { useEffect, useState, useRef } from "react";
import SiteLayout from "@/components/site-layout";
import Link from "next/link";
import {
  ArrowLeft,
  Heart,
  BarChart3,
  ShieldCheck,
  Layers,
  Activity,
  Database,
  Users,
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
    title: "Large-scale Snowflake Migration",
    description:
      "Architected and led the migration of massive healthcare datasets to Snowflake. Built scalable cloud infrastructure to support advanced analytics and clinical reporting workflows across the organization.",
    year: "2021 – 2023",
    image:
      "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?q=80&w=2668&auto=format&fit=crop",
    icon: Database,
    tags: ["Cloud Migration", "Snowflake", "Data Architecture"],
    color: "from-blue-500 to-cyan-400",
  },
  {
    title: "Clinical Data Standardization",
    description:
      "Standardized complex, unstructured clinical datasets into unified formats. Improved data interoperability across hospital systems, enabling cross-facility insights and reducing data silos.",
    year: "2021 – 2023",
    image:
      "https://images.unsplash.com/photo-1576091160550-2173dba999ef?q=80&w=2670&auto=format&fit=crop",
    icon: Layers,
    tags: ["Data Engineering", "Standardization", "ETL Pipelines"],
    color: "from-purple-500 to-violet-400",
  },
  {
    title: "Advanced ML for Clinical Analytics",
    description:
      "Developed advanced machine learning models for clinical analytics, predicting patient outcomes and optimizing resource allocation. Put data science into practice for direct patient care improvements.",
    year: "2022 – 2023",
    image:
      "https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?q=80&w=2676&auto=format&fit=crop",
    icon: Activity,
    tags: ["Machine Learning", "Predictive Analytics", "Clinical Outcomes"],
    color: "from-rose-500 to-pink-400",
  },
  {
    title: "Data Science Leadership",
    description:
      "Led the data science team as Principal Data Scientist. Mentored junior analysts, established best practices for data governance, and bridged the gap between technical execution and business strategy.",
    year: "2021 – 2023",
    image:
      "https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=2670&auto=format&fit=crop",
    icon: Users,
    tags: ["Team Leadership", "Data Strategy", "Governance"],
    color: "from-amber-500 to-orange-400",
  },
];

/* ─── Stats ─── */
const stats = [
  { label: "Private Providers", value: 1, suffix: " (UAE Largest)" },
  { label: "Terabytes Scaled", value: 100, suffix: "+" },
  { label: "ML Models Deployed", value: 10, suffix: "+" },
  { label: "Team Members Mentored", value: 15, suffix: "+" },
];

/* ─── Scope Items ─── */
const scopeItems = [
  {
    icon: Database,
    title: "Cloud Migration",
    description: "Seamless transitions of legacy on-premise healthcare data to scalable cloud warehousing like Snowflake.",
  },
  {
    icon: Layers,
    title: "Data Interoperability",
    description: "Standardizing disjointed health narratives and EHR data into structured, actionable formats.",
  },
  {
    icon: Activity,
    title: "Clinical Machine Learning",
    description: "Building predictive models to anticipate patient needs, optimize throughput, and support diagnoses.",
  },
  {
    icon: Users,
    title: "Team Building",
    description: "Establishing high-performance data science units within traditional healthcare organizations.",
  },
  {
    icon: BarChart3,
    title: "Operational Analytics",
    description: "Real-time dashboards providing hospital administrators with actionable metrics and insights.",
  },
  {
    icon: ShieldCheck,
    title: "Data Governance",
    description: "Implementing robust security, privacy, and compliance frameworks for sensitive patient health data.",
  },
];

export default function HealthcarePage() {
  return (
    <SiteLayout>
      {/* ═══════ HERO ═══════ */}
      <section className="health-hero relative pt-24 pb-20 overflow-hidden">
        {/* Decorative background */}
        <div className="absolute inset-0 bg-gradient-to-br from-rose-600/8 via-pink-500/5 to-transparent pointer-events-none" />
        <div className="absolute top-20 right-10 w-[500px] h-[500px] bg-rose-500/8 rounded-full blur-[120px] pointer-events-none" />
        <div className="absolute bottom-10 left-10 w-[350px] h-[350px] bg-pink-500/8 rounded-full blur-[100px] pointer-events-none" />
        <div className="absolute top-60 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-red-600/5 rounded-full blur-[80px] pointer-events-none" />

        {/* Floating grid pattern */}
        <div
          className="absolute inset-0 pointer-events-none opacity-[0.03]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />

        <div className="w-full py-12 md:py-20 flex flex-col items-center justify-center">
          {/* Breadcrumb */}
          <Link
            href="/consultancy"
            className="inline-flex items-center justify-center gap-2 text-slate-500 hover:text-rose-400 text-sm transition-colors mb-8 group"
          >
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            Back to Consultancy
          </Link>

          {/* Badge */}
          <div className="inline-flex items-center justify-center gap-2 px-4 py-1.5 rounded-full border border-rose-500/20 bg-rose-500/5 text-rose-400 text-xs tracking-widest uppercase mb-6 animate-fade-in">
            <Heart className="w-3.5 h-3.5" />
            Private Healthcare
          </div>

          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight animate-fade-in-up text-center w-full">
            Clinical Insights &{" "}
            <span className="health-gradient-text">Cloud Migration</span>
          </h1>

          <p className="text-lg md:text-xl text-slate-400 max-w-2xl text-center animate-fade-in-up delay-200 leading-relaxed">
            Leading massive data transformation at NMC Healthcare — architecting 
            robust cloud data infrastructures, standardizing disjointed systems, 
            and deploying advanced ML to elevate clinical outcomes.
          </p>
        </div>
      </section>

      {/* ═══════ STATS ═══════ */}
      <section className="health-stats py-16">
        <div className="max-w-4xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((stat, i) => (
              <div
                key={stat.label}
                className="glass-card p-6 animate-fade-in-up health-stat-card flex flex-col items-center text-center"
                style={{ animationDelay: `${i * 100}ms` }}
              >
                <div className="health-stat-number text-3xl md:text-4xl font-bold mb-2">
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
      <section className="health-projects py-20">
        <div className="min-h-screen flex flex-col items-center justify-center w-full">
          <div className="text-center mb-16">
            <p className="text-rose-400 text-sm tracking-widest uppercase mb-4 animate-fade-in">
              Key Initiatives
            </p>
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-5 animate-fade-in-up">
              Select Highlights
            </h2>
            <p className="text-slate-400 max-w-xl mx-auto text-lg text-center animate-fade-in-up delay-100">
              Major data science and engineering projects delivered at NMC Healthcare.
            </p>
          </div>

          <div className="space-y-16 w-full max-w-5xl">
            {projects.map((project, i) => (
              <div
                key={project.title}
                className="health-project-card group animate-fade-in-up w-full"
                style={{ animationDelay: `${i * 150}ms` }}
              >
                <div className="flex flex-col overflow-hidden rounded-2xl border border-slate-800/60 bg-[#0a0f1a]/60 backdrop-blur-sm hover:border-rose-500/30 transition-all duration-500 items-center text-center">
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
                      <h3 className="text-2xl md:text-3xl font-bold text-white group-hover:text-rose-300 transition-colors">
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
                          className="px-3 py-1 rounded-full text-xs font-medium border border-slate-700/60 text-slate-400 bg-slate-800/40 group-hover:border-rose-500/20 group-hover:text-rose-300/80 transition-colors"
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
      <section className="health-scope py-20">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-16">
            <p className="text-rose-400 text-sm tracking-widest uppercase mb-4 animate-fade-in">
              Expertise
            </p>
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-5 animate-fade-in-up">
              Scope of Work
            </h2>
            <p className="text-slate-400 max-w-xl mx-auto text-lg animate-fade-in-up delay-100">
              End-to-end data capabilities engineered for healthcare systems.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {scopeItems.map((item, i) => (
              <div
                key={item.title}
                className="health-scope-card glass-card p-7 animate-fade-in-up group flex flex-col items-center text-center"
                style={{ animationDelay: `${i * 100}ms` }}
              >
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-rose-500/20 to-pink-500/20 flex items-center justify-center mb-5 group-hover:from-rose-500/30 group-hover:to-pink-500/30 transition-all">
                  <item.icon className="w-6 h-6 text-rose-400" />
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
      <section className="health-cta py-20">
        <div className="max-w-3xl mx-auto px-6">
          <div className="relative overflow-hidden rounded-2xl p-10 md:p-14 text-center">
            {/* CTA Background */}
            <div className="absolute inset-0 bg-gradient-to-br from-rose-600/15 via-red-600/10 to-pink-600/15 border border-rose-500/15 rounded-2xl" />
            <div className="absolute top-0 right-0 w-64 h-64 bg-rose-500/10 rounded-full blur-[80px] pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-pink-500/10 rounded-full blur-[60px] pointer-events-none" />

            <div className="relative z-10">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-5">
                Elevating Healthcare with Data
              </h2>
              <p className="text-slate-400 max-w-lg mx-auto mb-8 text-lg">
                Looking to modernize your clinical data infrastructure and deploy predictive ML?
              </p>
              <a
                href="mailto:y.shahzeb@gmail.com"
                className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-rose-500 to-pink-500 text-white rounded-xl font-semibold hover:shadow-lg hover:shadow-rose-500/25 transition-all hover:-translate-y-0.5"
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
