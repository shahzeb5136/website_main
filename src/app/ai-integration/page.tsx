"use client";

import React from "react";
import SiteLayout from "@/components/site-layout";
import { BentoCard, BentoGrid } from "@/components/ui/bento-grid";
import {
  Brain,
  Eye,
  MessageSquare,
  LineChart,
  Server,
  Workflow,
  Search,
  Database,
  Code2,
  Rocket,
  Monitor,
  ArrowRight,
  CheckCircle2,
  Zap,
  Shield,
  Clock,
  Mail,
  Phone,
  Cpu,
  Sparkles,
  Bot,
  FileSearch,
  TrendingUp,
  AlertTriangle,
} from "lucide-react";

const GithubIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
  </svg>
);
import Link from "next/link";

/* ─────────── AI Services Bento ─────────── */
const aiServices = [
  {
    Icon: MessageSquare,
    name: "Large Language Models",
    description:
      "Custom LLM solutions — from local Ollama deployments to OpenAI integrations. Natural language querying, document analysis, and conversational AI for your business.",
    href: "#",
    cta: "Learn More",
    background: (
      <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/15 via-transparent to-transparent" />
    ),
    className: "lg:col-start-1 lg:col-end-2 lg:row-start-1 lg:row-end-3",
  },
  {
    Icon: Eye,
    name: "Computer Vision",
    description:
      "Image processing and visual AI solutions for quality inspection, document digitization, and automated visual analysis systems.",
    href: "#",
    cta: "Learn More",
    background: (
      <div className="absolute inset-0 bg-gradient-to-br from-pink-500/15 via-transparent to-transparent" />
    ),
    className: "lg:col-start-2 lg:col-end-3 lg:row-start-1 lg:row-end-2",
  },
  {
    Icon: LineChart,
    name: "Predictive Analytics",
    description:
      "Advanced ML models — Bayesian inference, MCMC, neural networks, GLMs — to predict outcomes, detect anomalies, and drive data-driven decisions.",
    href: "#",
    cta: "Learn More",
    background: (
      <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/15 via-transparent to-transparent" />
    ),
    className: "lg:col-start-2 lg:col-end-3 lg:row-start-2 lg:row-end-3",
  },
  {
    Icon: Server,
    name: "MLOps & Deployment",
    description:
      "Full lifecycle ML operations — model training, versioning, deployment, monitoring, and scaling on cloud platforms (AWS, GCP, Azure).",
    href: "#",
    cta: "Learn More",
    background: (
      <div className="absolute inset-0 bg-gradient-to-br from-amber-500/15 via-transparent to-transparent" />
    ),
    className: "lg:col-start-3 lg:col-end-4 lg:row-start-1 lg:row-end-2",
  },
  {
    Icon: Workflow,
    name: "Data Pipelines & ETL",
    description:
      "Robust data engineering with Databricks, Snowflake, and custom pipelines. Automated data extraction, transformation, and warehousing.",
    href: "#",
    cta: "Learn More",
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
    title: "Discovery",
    description:
      "We assess your business needs, data maturity, and identify where AI can create the most value. No jargon — just clear opportunities.",
    icon: Search,
    color: "from-cyan-400 to-cyan-600",
  },
  {
    step: "02",
    title: "Data Readiness",
    description:
      "We audit, clean, and structure your data. Build pipelines to feed AI models reliably. Move to modern platforms if needed.",
    icon: Database,
    color: "from-purple-400 to-purple-600",
  },
  {
    step: "03",
    title: "Build & Train",
    description:
      "Custom AI models trained on your data. From LLMs and NLP to predictive models — built to solve your specific business problems.",
    icon: Code2,
    color: "from-pink-400 to-pink-600",
  },
  {
    step: "04",
    title: "Deploy",
    description:
      "Production-ready deployment with proper MLOps. Integrated into your existing systems with APIs, dashboards, and user interfaces.",
    icon: Rocket,
    color: "from-emerald-400 to-emerald-600",
  },
  {
    step: "05",
    title: "Monitor & Scale",
    description:
      "Ongoing monitoring, model drift detection, and performance optimization. Scale as your needs grow with full support.",
    icon: Monitor,
    color: "from-amber-400 to-amber-600",
  },
];

/* ─────────── Why Businesses Struggle ─────────── */
const challenges = [
  {
    title: "Data is scattered and messy",
    description: "Multiple systems, inconsistent formats, no single source of truth.",
    icon: AlertTriangle,
  },
  {
    title: "No in-house AI expertise",
    description: "Hiring ML engineers is expensive and time-consuming.",
    icon: Brain,
  },
  {
    title: "POCs that never reach production",
    description: "Great demos, but no path to real-world deployment.",
    icon: Clock,
  },
  {
    title: "Vendor lock-in fears",
    description: "Worried about black-box solutions you can't control or understand.",
    icon: Shield,
  },
];

/* ─────────── Portfolio Highlights ─────────── */
const projectHighlights = [
  {
    title: "Natural Language Query Interface",
    description: "Users query PostgreSQL databases with plain English. LLMs translate questions into insights automatically.",
    tech: ["OpenAI", "Ollama", "PostgreSQL", "LangChain"],
    icon: Bot,
  },
  {
    title: "RAG for Nuclear Procedures",
    description: "AI-powered semantic search across NRC Technical Letters using Retrieval-Augmented Generation.",
    tech: ["RAG", "Vector DB", "Embeddings", "NLP"],
    icon: FileSearch,
  },
  {
    title: "LLM Sentiment Alpha",
    description: "Real-time sentiment analysis on financial news using LLMs to generate predictive trading signals.",
    tech: ["LLMs", "NLP", "Streaming", "Finance"],
    icon: TrendingUp,
  },
  {
    title: "Change Point Detection",
    description: "Bayesian inference + MCMC pipeline to detect maintained cost changes in large healthcare datasets.",
    tech: ["MCMC", "Bayesian", "Python", "Healthcare"],
    icon: Sparkles,
  },
  {
    title: "Hospital Readmission Prediction",
    description: "GLM-based ML pipeline predicting readmissions to aid investigations into medical complications.",
    tech: ["GLMs", "Scikit-learn", "Healthcare", "ML"],
    icon: LineChart,
  },
  {
    title: "Local LLM Execution Platform",
    description: "Enabling organizations to run large language models locally for NLP and image processing — full data privacy.",
    tech: ["Ollama", "LLMs", "Privacy", "On-prem"],
    icon: Cpu,
  },
];

/* ─────────── Tech Stack ─────────── */
const techStack = [
  { name: "Python", category: "Core" },
  { name: "TensorFlow", category: "Deep Learning" },
  { name: "PyTorch", category: "Deep Learning" },
  { name: "Scikit-learn", category: "ML" },
  { name: "LangChain", category: "LLM" },
  { name: "OpenAI", category: "LLM" },
  { name: "Ollama", category: "LLM" },
  { name: "Snowflake", category: "Data" },
  { name: "Databricks", category: "Data" },
  { name: "SQL", category: "Data" },
  { name: "Power BI", category: "Viz" },
  { name: "AWS / GCP", category: "Cloud" },
  { name: "C++", category: "Custom" },
  { name: "R", category: "Stats" },
  { name: "Docker", category: "MLOps" },
  { name: "PostgreSQL", category: "Data" },
];

export default function AIIntegrationPage() {
  return (
    <SiteLayout>
      {/* ═══════ HERO ═══════ */}
      <section className="relative pt-24 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-cyan-500/5 via-transparent to-transparent" />
        <div className="absolute top-20 left-20 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-20 w-72 h-72 bg-pink-500/10 rounded-full blur-3xl" />

        <div className="relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-cyan-400 text-sm tracking-widest uppercase mb-5 animate-fade-in">
              AI Integration Services
            </p>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-7 leading-tight animate-fade-in-up">
              End-to-End{" "}
              <span className="gradient-text-cyan">AI Integration</span>
              <br />
              For Your Business
            </h1>
            <p className="text-lg text-slate-400 max-w-2xl mx-auto mb-10 animate-fade-in-up delay-200">
              We handle everything — from data readiness to deployed AI systems.
              No buzzwords, no orphaned POCs. Just working AI that delivers real
              business value, from start to finish.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up delay-300">
              <a
                href="mailto:y.shahzeb@gmail.com?subject=AI%20Readiness%20Assessment"
                className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-cyan-500 to-cyan-600 text-white rounded-lg font-semibold hover:shadow-lg hover:shadow-cyan-500/25 transition-all"
              >
                <Sparkles className="w-5 h-5" /> Free AI Readiness Assessment
              </a>
              <a
                href="tel:+971551763478"
                className="inline-flex items-center gap-2 px-8 py-4 border border-slate-700 text-slate-300 rounded-lg font-medium hover:border-cyan-500/50 hover:text-cyan-400 transition-all"
              >
                <Phone className="w-5 h-5" /> Call Now
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════ THE PROBLEM ═══════ */}
      <section className="py-40 md:py-64">
        <div>
          <div className="text-center mb-16">
            <p className="text-cyan-400 text-sm tracking-widest uppercase mb-4">
              The Challenge
            </p>
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-5">
              Why Most AI Projects Fail
            </h2>
            <p className="text-slate-400 max-w-2xl mx-auto text-lg">
              87% of ML models never make it to production. Here&apos;s why
              businesses struggle — and how we solve it.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {challenges.map((challenge, i) => (
              <div
                key={challenge.title}
                className="glass-card p-8 flex flex-col items-center text-center gap-5 animate-fade-in-up"
                style={{ animationDelay: `${i * 100}ms` }}
              >
                <div className="w-14 h-14 rounded-lg bg-red-500/10 flex items-center justify-center flex-shrink-0">
                  <challenge.icon className="w-7 h-7 text-red-400" />
                </div>
                <div>
                  <h3 className="text-white font-semibold mb-2 text-lg">
                    {challenge.title}
                  </h3>
                  <p className="text-slate-400 text-sm leading-relaxed">
                    {challenge.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-14 glass-card p-10 max-w-4xl mx-auto text-center border-cyan-500/20">
            <Zap className="w-12 h-12 text-cyan-400 mx-auto mb-5" />
            <h3 className="text-white font-semibold text-xl mb-3">
              My Approach Solves This
            </h3>
            <p className="text-slate-400 max-w-xl mx-auto text-base">
              With 9+ years of experience taking models from concept to
              production across healthcare, nuclear energy, and finance — I
              ensure your AI investment delivers real returns.
            </p>
          </div>
        </div>
      </section>

      {/* ═══════ SERVICES BENTO ═══════ */}
      <section className="py-40 md:py-64">
        <div>
          <div className="text-center mb-16">
            <p className="text-cyan-400 text-sm tracking-widest uppercase mb-4">
              Capabilities
            </p>
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-5">
              AI Solutions We Build
            </h2>
          </div>

          <BentoGrid className="lg:grid-rows-2 auto-rows-[18rem]">
            {aiServices.map((service) => (
              <BentoCard key={service.name} {...service} />
            ))}
          </BentoGrid>
        </div>
      </section>

      {/* ═══════ PROCESS ═══════ */}
      <section className="py-40 md:py-64">
        <div>
          <div className="text-center mb-20">
            <p className="text-cyan-400 text-sm tracking-widest uppercase mb-4">
              Our Process
            </p>
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-5">
              From Zero to AI — In 5 Steps
            </h2>
            <p className="text-slate-400 max-w-2xl mx-auto text-lg">
              A comprehensive lifecycle approach that takes you from data chaos
              to production-ready AI systems.
            </p>
          </div>

          <div className="relative">
            <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-cyan-500/50 via-purple-500/50 to-pink-500/50 transform -translate-y-1/2" />

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
              {processSteps.map((step, i) => (
                <div
                  key={step.step}
                  className="relative animate-fade-in-up"
                  style={{ animationDelay: `${i * 120}ms` }}
                >
                  <div className="glass-card p-7 h-full text-center relative z-10">
                    <div
                      className={`inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br ${step.color} mb-5`}
                    >
                      <step.icon className="w-8 h-8 text-white" />
                    </div>
                    <div className="text-2xl font-bold text-slate-700 mb-2">
                      {step.step}
                    </div>
                    <h3 className="text-white font-semibold text-lg mb-3">
                      {step.title}
                    </h3>
                    <p className="text-slate-400 text-xs leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ═══════ PROJECT HIGHLIGHTS ═══════ */}
      <section className="py-40 md:py-64">
        <div>
          <div className="text-center mb-16">
            <p className="text-cyan-400 text-sm tracking-widest uppercase mb-4">
              Portfolio
            </p>
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-5">
              AI Projects Delivered
            </h2>
            <p className="text-slate-400 max-w-2xl mx-auto text-lg">
              Real-world AI systems built and deployed across multiple industries.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projectHighlights.map((project, i) => (
              <div
                key={project.title}
                className="glass-card p-8 animate-fade-in-up group flex flex-col items-center text-center"
                style={{ animationDelay: `${i * 100}ms` }}
              >
                <project.icon className="w-12 h-12 text-cyan-400 mb-5 group-hover:scale-110 transition-transform" />
                <h3 className="text-white font-semibold text-lg mb-3">
                  {project.title}
                </h3>
                <p className="text-slate-400 text-sm leading-relaxed mb-5">
                  {project.description}
                </p>
                <div className="flex flex-wrap justify-center gap-2">
                  {project.tech.map((t) => (
                    <span
                      key={t}
                      className="px-3 py-1.5 text-xs rounded-full bg-cyan-500/10 text-cyan-300 border border-cyan-500/20"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════ TECH STACK ═══════ */}
      <section className="py-40 md:py-64">
        <div>
          <div className="text-center mb-16">
            <p className="text-cyan-400 text-sm tracking-widest uppercase mb-4">
              Technology
            </p>
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-5">
              Tech Stack
            </h2>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-4 max-w-6xl mx-auto">
            {techStack.map((tech, i) => (
              <div
                key={tech.name}
                className="glass-card p-5 text-center animate-fade-in-up group cursor-default"
                style={{ animationDelay: `${i * 40}ms` }}
              >
                <p className="text-white font-medium text-sm group-hover:text-cyan-400 transition-colors">
                  {tech.name}
                </p>
                <p className="text-slate-600 text-xs mt-1.5">{tech.category}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════ CTA ═══════ */}
      <section className="py-40 md:py-64">
        <div className="max-w-4xl mx-auto cta-gradient rounded-2xl p-14 md:p-16 text-center">
          <Sparkles className="w-14 h-14 text-cyan-400 mx-auto mb-5" />
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-5">
            Ready to Integrate AI Into Your Business?
          </h2>
          <p className="text-slate-400 max-w-xl mx-auto mb-10 text-lg">
            Get a free AI readiness assessment. We&apos;ll evaluate your data,
            identify the highest-value AI opportunities, and outline a clear
            implementation roadmap.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-5">
            <a
              href="mailto:y.shahzeb@gmail.com?subject=AI%20Readiness%20Assessment"
              className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-500 text-white rounded-lg font-semibold hover:shadow-lg hover:shadow-cyan-500/25 transition-all text-lg"
            >
              <Mail className="w-5 h-5" /> Get Free Assessment
            </a>
            <a
              href="tel:+971551763478"
              className="inline-flex items-center gap-2 px-8 py-4 border border-slate-700 text-slate-300 rounded-lg font-medium hover:border-cyan-500/50 hover:text-cyan-400 transition-all"
            >
              <Phone className="w-5 h-5" /> +971 55 176 3478
            </a>
          </div>
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
              className="text-slate-500 hover:text-cyan-400 transition-colors"
            >
              <GithubIcon className="w-5 h-5" />
            </a>
            <a
              href="mailto:y.shahzeb@gmail.com"
              className="text-slate-500 hover:text-cyan-400 transition-colors"
            >
              <Mail className="w-5 h-5" />
            </a>
          </div>
        </div>
      </footer>
    </SiteLayout>
  );
}
