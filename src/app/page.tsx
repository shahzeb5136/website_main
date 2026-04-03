"use client";

import React from "react";
import SiteLayout from "@/components/site-layout";
import { MaskContainer } from "@/components/ui/svg-mask-effect";
import { BentoCard, BentoGrid } from "@/components/ui/bento-grid";
import {
  Briefcase,
  Cpu,
  Shield,
  Building2,
  Zap,
  TrendingUp,
  Globe,
  Award,
  ChevronRight,
  ArrowRight,
  Brain,
  Database,
  BarChart3,
  Code2,
  Layers,
  Users,
  Mail,
  Phone,
} from "lucide-react";

const GithubIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
  </svg>
);
import Link from "next/link";

/* ─────────── Stats ─────────── */
const stats = [
  { number: "10+", label: "Years Experience", icon: TrendingUp },
  { number: "6+", label: "Major Clients", icon: Building2 },
  { number: "20+", label: "Projects Delivered", icon: Zap },
  { number: "3", label: "High Stakes Sectors Served", icon: Globe },
];

/* ─────────── Services Bento ─────────── */
const services = [
  {
    Icon: Briefcase,
    name: "Strategic Consultancy",
    description:
      "Expert advisory for governments & enterprises. Data strategy, architecture, and digital transformation with proven results across healthcare, energy, and finance.",
    href: "/consultancy",
    cta: "Learn More",
    background: (
      <div className="absolute inset-0 bg-gradient-to-br from-purple-500/20 via-transparent to-transparent" />
    ),
    className:
      "lg:col-start-1 lg:col-end-2 lg:row-start-1 lg:row-end-3",
  },
  {
    Icon: Cpu,
    name: "End-to-End AI Integration",
    description:
      "From discovery to deployment. We handle everything — LLMs, computer vision, NLP, predictive analytics, and MLOps — so your business can leverage AI without the complexity.",
    href: "/ai-integration",
    cta: "Learn More",
    background: (
      <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/20 via-transparent to-transparent" />
    ),
    className:
      "lg:col-start-2 lg:col-end-4 lg:row-start-1 lg:row-end-3",
  },
];

/* ─────────── Trusted By ─────────── */
const trustedBy = [
  { name: "ENEC", subtitle: "Nuclear Energy", icon: Shield },
  { name: "NMC Healthcare", subtitle: "Healthcare", icon: Building2 },
  { name: "DHA", subtitle: "Government Health", icon: Globe },
  { name: "DoH", subtitle: "Government Health", icon: Globe },
  { name: "Milliman", subtitle: "Consultancy", icon: BarChart3 },
  { name: "Rasan IT", subtitle: "Technology", icon: Code2 },
  { name: "Various Health Insurers", subtitle: "Insurance", icon: Layers },
];

/* ─────────── Skills ─────────── */
const skills = [
  { name: "Python & ML", years: "15+", color: "from-cyan-400 to-cyan-600" },
  { name: "SQL & Data Engineering", years: "15+", color: "from-purple-400 to-purple-600" },
  { name: "Power BI / Tableau", years: "15+", color: "from-pink-400 to-pink-600" },
  { name: "AI / LLMs / NLP", years: "8+", color: "from-emerald-400 to-emerald-600" },
  { name: "Statistical Analysis", years: "17+", color: "from-orange-400 to-orange-600" },
  { name: "Project Management", years: "12+", color: "from-blue-400 to-blue-600" },
];

export default function HomePage() {
  return (
    <SiteLayout>
      {/* ═══════ HERO + MASK EFFECT ═══════ */}
      <section id="hero" className="relative">
        <MaskContainer
          size={0}
          revealSize={1000}
          revealText={
            <div className="flex flex-col items-center text-center mb-20 w-full">
              <p className="text-lg md:text-xl text-slate-500 mb-4 tracking-widest uppercase">
                Shahzeb Yousuf
              </p>
              <h1 className="text-4xl md:text-7xl font-bold text-slate-300 mb-6 leading-tight">
                Transforming Businesses
                <br />
                Through{" "}
                <span className="gradient-text">Data & AI</span>
              </h1>
              <p className="text-lg md:text-xl text-slate-500 max-w-2xl mx-auto">
                10+ years of turning complex data challenges into strategic
                advantages for governments and enterprises.
              </p>
            </div>
          }
          className="!h-screen"
        >
          <div className="flex flex-col items-center text-center mb-20 w-full">
            <p className="text-lg md:text-xl text-slate-400 mb-4 tracking-widest uppercase">
              Data Scientist & ML Consultant
            </p>
            <h2 className="text-4xl md:text-7xl font-bold mb-6 leading-tight">
              Consultancy &{" "}
              <span className="text-cyan-300">AI Solutions</span>
              <br />
              That Deliver Results
            </h2>
            <p className="text-lg md:text-xl text-slate-300 max-w-2xl mx-auto">
              From nuclear energy to healthcare — trusted by
              organizations that demand excellence.
            </p>
          </div>
        </MaskContainer>
      </section>

      {/* ═══════ SCROLL DOWN INDICATOR ═══════ */}
      <div className="flex justify-center -mt-20 relative z-10 mb-16">
        <div className="animate-bounce text-cyan-400/60">
          <ChevronRight className="w-8 h-8 rotate-90" />
        </div>
      </div>

      {/* ═══════ STATS BAR ═══════ */}
      <section className="py-40 md:py-64">
        <div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-10">
            {stats.map((stat, i) => (
              <div
                key={stat.label}
                className="glass-card p-8 text-center animate-fade-in-up"
                style={{ animationDelay: `${i * 100}ms` }}
              >
                <stat.icon className="w-10 h-10 text-cyan-400 mx-auto mb-4" />
                <div className="stat-number">{stat.number}</div>
                <p className="text-slate-400 text-sm mt-3">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="section-divider" />

      {/* ═══════ SERVICES BENTO ═══════ */}
      <section className="py-40 md:py-64">
        <div>
          <div className="flex flex-col items-center text-center mb-20 w-full">
            <p className="text-cyan-400 text-sm tracking-widest uppercase mb-4">
              What I Offer
            </p>
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-5">
              Two Ways I Can Help Your Business
            </h2>
            <p className="text-slate-400 max-w-2xl mx-auto text-lg">
              Whether you need strategic guidance or a full AI overhaul, I
              bring deep expertise to every engagement.
            </p>
          </div>

          <BentoGrid className="lg:grid-rows-2 auto-rows-[22rem]">
            {services.map((service) => (
              <BentoCard key={service.name} {...service} />
            ))}
          </BentoGrid>
        </div>
      </section>

      <div className="section-divider" />

      {/* ═══════ TRUSTED BY ═══════ */}
      <section className="py-40 md:py-64">
        <div>
          <div className="text-center mb-20">
            <p className="text-cyan-400 text-sm tracking-widest uppercase mb-4">
              Trusted By
            </p>
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-5">
              Consulted for Organizations That Matter
            </h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
            {trustedBy.map((org, i) => (
              <div
                key={org.name}
                className="glass-card p-8 text-center group animate-fade-in-up"
                style={{ animationDelay: `${i * 80}ms` }}
              >
                <org.icon className="w-10 h-10 text-cyan-400/60 mx-auto mb-4 group-hover:text-cyan-400 transition-colors" />
                <p className="text-white font-semibold text-sm">{org.name}</p>
                <p className="text-slate-500 text-xs mt-1.5">{org.subtitle}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="section-divider" />

      {/* ═══════ SKILLS ═══════ */}
      <section className="py-40 md:py-64">
        <div>
          <div className="text-center mb-20">
            <p className="text-cyan-400 text-sm tracking-widest uppercase mb-4">
              Expertise
            </p>
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-5">
              Core Skills & Proficiency
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {skills.map((skill, i) => (
              <div
                key={skill.name}
                className="glass-card p-6 animate-fade-in-up flex flex-col items-center text-center w-full"
                style={{ animationDelay: `${i * 80}ms` }}
              >
                <div className="flex flex-col items-center gap-2 mb-4 w-full">
                  <span className="text-white font-medium">{skill.name}</span>
                  <span className="text-slate-400 text-sm">
                    {skill.years} yrs
                  </span>
                </div>
                <div className="w-full bg-slate-800 rounded-full h-3 overflow-hidden">
                  <div
                    className={`h-full rounded-full bg-gradient-to-r ${skill.color} transition-all duration-1000 ease-out`}
                    style={{ width: `${(skill.years / 9) * 100}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="section-divider" />

      {/* ═══════ ABOUT / SUMMARY ═══════ */}
      <section className="py-40 md:py-64">
        <div>
          <div className="grid md:grid-cols-2 gap-20 items-center">
            <div className="flex flex-col items-center text-center">
              <p className="text-cyan-400 text-sm tracking-widest uppercase mb-4">
                About
              </p>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Data Scientist & ML Consultant with a{" "}
                <span className="gradient-text">Proven Track Record</span>
              </h2>
              <p className="text-slate-400 leading-relaxed mb-5 text-base">
                Data Scientist and ML Consultant with extensive experience in
                architecting and deploying data-driven solutions. Proven track
                record in leading teams in developing high-impact AI systems,
                including Large Language Models (LLMs) and advanced predictive
                pipelines.
              </p>
              <p className="text-slate-400 leading-relaxed mb-8 text-base">
                Consulted as a Data Science subject matter expert for the DHA,
                DoH, various health insurance companies, Rasan IT, NMC Healthcare,
                and ENEC (Nuclear Energy).
              </p>
              <div className="flex justify-center gap-4">
                <Link
                  href="/consultancy"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-cyan-500 to-cyan-600 text-white rounded-lg font-medium hover:shadow-lg hover:shadow-cyan-500/25 transition-all"
                >
                  View Consultancy <ArrowRight className="w-4 h-4" />
                </Link>
                <Link
                  href="/ai-integration"
                  className="inline-flex items-center gap-2 px-6 py-3 border border-slate-700 text-slate-300 rounded-lg font-medium hover:border-cyan-500/50 hover:text-cyan-400 transition-all"
                >
                  AI Solutions <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-6">
              {[
                { icon: Brain, title: "AI & ML", desc: "LLMs, NLP, Neural Networks, Deep Learning" },
                { icon: Database, title: "Data Engineering", desc: "Databricks, Snowflake, ETL Pipelines" },
                { icon: BarChart3, title: "Analytics", desc: "Power BI, Tableau, Qlik Dashboards" },
                { icon: Users, title: "Leadership", desc: "Team Lead, Principal DS, Stakeholder Mgmt" },
              ].map((item, i) => (
                <div
                  key={item.title}
                  className="glass-card p-6 animate-fade-in-up flex flex-col items-center text-center"
                  style={{ animationDelay: `${i * 100}ms` }}
                >
                  <item.icon className="w-10 h-10 text-cyan-400 mb-4" />
                  <h3 className="text-white font-semibold text-base mb-2">
                    {item.title}
                  </h3>
                  <p className="text-slate-500 text-sm leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <div className="section-divider" />

      {/* ═══════ CTA ═══════ */}
      <section className="py-40 md:py-64">
        <div className="cta-gradient rounded-2xl p-14 md:p-16 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-5">
            Ready to Transform Your Business?
          </h2>
          <p className="text-slate-400 max-w-xl mx-auto mb-10 text-lg">
            Whether you need strategic consultancy or end-to-end AI integration,
            let&apos;s discuss how data-driven solutions can accelerate your
            growth.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-5">
            <a
              href="mailto:y.shahzeb@gmail.com"
              className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-500 text-white rounded-lg font-semibold hover:shadow-lg hover:shadow-cyan-500/25 transition-all text-lg"
            >
              <Mail className="w-5 h-5" /> Get in Touch
            </a>
            <a
              href="tel:+971551763478"
              className="inline-flex items-center gap-2 px-8 py-4 border border-slate-700 text-slate-300 rounded-lg font-medium hover:border-cyan-500/50 hover:text-cyan-400 transition-all"
            >
              <Phone className="w-5 h-5" /> +971 55 176 3478
            </a>
            <a
              href="https://github.com/shahzeb5136"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-4 border border-slate-700 text-slate-300 rounded-lg font-medium hover:border-cyan-500/50 hover:text-cyan-400 transition-all"
            >
              <GithubIcon className="w-5 h-5" /> GitHub
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
