"use client";
import React, { useState } from "react";
import SiteLayout from "@/components/site-layout";
import ContactModal from "@/components/contact-modal";
import { useReveal, HeroHeadline } from "@/components/animations";

export default function ConsultancyPage() {
  const [modalOpen, setModalOpen] = useState(false);
  const stages = useReveal<HTMLDivElement>();

  const SECTORS = [
    { slug: "nuclear",    name: "Nuclear Energy",           client: "ENEC — Barakah",            summary: "Operational analytics and predictive maintenance for the first nuclear energy plant in the Arab world." },
    { slug: "healthcare", name: "Healthcare",               client: "NMC Healthcare",            summary: "Snowflake migration, clinical standardisation, and ML for patient outcomes at the UAE's largest private provider." },
    { slug: "gov-health", name: "Government Health",        client: "DHA · DoH Abu Dhabi",       summary: "Utilization analytics, electronic audits, and tariff negotiation support for self-insured programmes." },
    { slug: "actuarial",  name: "Insurance & Actuarial",    client: "Milliman · Taha Actuaries", summary: "GLM reserving, change-point detection, and predictive pricing work for GCC insurers." },
    { slug: "fintech",    name: "Technology & FinTech",     client: "Rasan IT (KSA)",            summary: "On-prem LLM and vision execution for regulated FinTech. National KSA FinTech competition winner." },
  ];

  const SERVICES = [
    { no: "01", name: "Data Strategy & Architecture", body: "Designing data ecosystems that support analytics, reporting, and ML at scale. Clear governance, not just diagrams." },
    { no: "02", name: "ML & AI Advisory", body: "Where to apply ML for actual ROI — and where not to. Model selection, governance, and validation plans." },
    { no: "03", name: "Migration & Modernisation", body: "Moving legacy estates onto Snowflake, Databricks, or equivalent. Without breaking what works." },
    { no: "04", name: "Analytics & Dashboarding", body: "Automated reporting and self-service with Power BI, Tableau, and custom tooling where off-the-shelf fails." },
    { no: "05", name: "Stakeholder Bridging", body: "Translating between executives and engineers. The work that makes the other work possible." },
    { no: "06", name: "Team Leadership & Training", body: "Principal-in-residence. Upskilling your teams so the capability outlasts the engagement." },
  ];

  const PROCESS = [
    { step: "01", name: "Assess",     body: "Deep read of the current data estate, governance, and business objectives. Identify quick wins and structural gaps." },
    { step: "02", name: "Strategise", body: "Tailored roadmap. KPIs, architecture decisions, sequencing, and hiring plan." },
    { step: "03", name: "Implement",  body: "Hands-on delivery. Pipelines, models, dashboards — with documentation and handover plan from day one." },
    { step: "04", name: "Scale",      body: "Training, runbooks, and hiring. Set up to continue without the consultant." },
  ];

  const container: React.CSSProperties = { maxWidth: 1240, margin: "0 auto", padding: "0 48px" };
  const twoCol: React.CSSProperties = { display: "grid", gridTemplateColumns: "200px 1fr", gap: 60 };

  return (
    <SiteLayout>
      <ContactModal isOpen={modalOpen} onClose={() => setModalOpen(false)} subject="Consultancy Enquiry" />

      {/* HERO */}
      <section style={{ ...container, padding: "96px 48px 80px" }}>
        <div style={twoCol}>
          <div className="eyebrow">Consultancy</div>
          <div>
            <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 32, opacity: 0, animation: "heroFade 1s ease .2s forwards" }}>
              <span className="dot live" />
              <span className="eyebrow">Consultancy Practice</span>
            </div>
            <HeroHeadline text="Strategic data consultancy for complex organisations." />
            <p className="hero-lead">
              Proven consultancy practice across governments, healthcare providers, nuclear energy operators, and insurers in the GCC. Deep technical expertise combined with the business judgement to know when and where to apply it.
            </p>
            <div className="hero-cta-row">
              <button id="consultancy-cta" className="btn-primary" style={{ cursor: "pointer" }} onClick={() => setModalOpen(true)}>
                Book a consultation <span className="arrow">→</span>
              </button>
              <a className="btn-ghost" href="#sectors">Review sectors</a>
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section style={{ ...container, padding: "80px 48px", borderTop: "1px solid var(--rule)" }}>
        <div style={{ ...twoCol, marginBottom: 48 }}>
          <div className="eyebrow">Services</div>
          <h2 className="serif" style={{ fontSize: 40, letterSpacing: "-0.02em", lineHeight: 1.1, maxWidth: 720 }}>
            What we bring to the table.
          </h2>
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", borderTop: "1px solid var(--rule)" }}>
          {SERVICES.map((s, i) => (
            <div key={s.no} className="practice-card" style={{ borderRight: (i + 1) % 3 !== 0 ? "1px solid var(--rule)" : "none", borderBottom: "1px solid var(--rule)" }}>
              <div className="mono num" style={{ fontSize: 11, color: "var(--muted)", marginBottom: 28, letterSpacing: ".1em" }}>
                {s.no} / 06
              </div>
              <div className="serif p-name">{s.name}</div>
              <p style={{ fontSize: 14.5, lineHeight: 1.6, color: "var(--muted)", marginBottom: 24 }}>{s.body}</p>
            </div>
          ))}
        </div>
      </section>

      {/* SECTORS */}
      <section id="sectors" style={{ ...container, padding: "80px 48px" }}>
        <div style={{ ...twoCol, marginBottom: 48 }}>
          <div className="eyebrow">Sectors</div>
          <h2 className="serif" style={{ fontSize: 40, letterSpacing: "-0.02em", lineHeight: 1.1, maxWidth: 720 }}>
            Industries we serve.
          </h2>
        </div>
        <div style={{ borderTop: "1px solid var(--rule)" }}>
          {SECTORS.map((s) => (
            <a key={s.slug} href={`/consultancy/${s.slug}`} className="eng-row" style={{ gridTemplateColumns: "200px 260px 1fr 40px", gap: 32, padding: "32px 0" }}>
              <div className="serif eng-org">{s.name}</div>
              <div className="eng-role">{s.client}</div>
              <div className="eng-summary">{s.summary}</div>
              <div className="eng-arrow">→</div>
            </a>
          ))}
        </div>
      </section>

      {/* PROCESS */}
      <section style={{ borderTop: "1px solid var(--rule)", background: "var(--surface)" }}>
        <div style={{ ...container, padding: "80px 48px" }}>
          <div style={{ ...twoCol, marginBottom: 48 }}>
            <div className="eyebrow">Methodology</div>
            <h2 className="serif" style={{ fontSize: 40, letterSpacing: "-0.02em", lineHeight: 1.1, maxWidth: 720 }}>
              A proven four-phase engagement model.
            </h2>
          </div>
          <div ref={stages.ref} className={`stages ${stages.seen ? "in" : ""}`}>
            <div className="stages-axis" />
            <div className="stages-axis-fill" />
            <div className="stages-row" style={{ gridTemplateColumns: "repeat(4, 1fr)", paddingBottom: 24 }}>
              {PROCESS.map((p, i) => (
                <div key={p.step} className="stage" style={{ ["--w" as string]: "100%" } as React.CSSProperties}>
                  <div className="week">PHASE {p.step}</div>
                  <span className="node" />
                  <h4>{p.name}</h4>
                  <p>{p.body}</p>
                  <div className="dur" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ ...container, padding: "96px 48px", borderTop: "1px solid var(--rule)" }}>
        <div style={twoCol}>
          <div className="eyebrow">Contact</div>
          <div>
            <h2 className="serif" style={{ fontSize: 48, letterSpacing: "-0.025em", lineHeight: 1.05, maxWidth: 900, marginBottom: 32 }}>
              Ready to engage? No deck, no pitch — thirty minutes to understand the problem.
            </h2>
            <div style={{ display: "flex", gap: 12 }}>
              <button id="consultancy-cta-bottom" className="btn-primary" style={{ cursor: "pointer" }} onClick={() => setModalOpen(true)}>Book a consultation →</button>
            </div>
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}
