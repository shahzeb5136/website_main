import React from "react";
import SiteLayout from "@/components/site-layout";
import CaseStudyPage from "@/components/case-study";

export default function ConsultancyPage() {
  const SECTORS = [
    { slug: "nuclear",    name: "Nuclear Energy",           client: "ENEC — Barakah",          years: "2019 — 2021",      summary: "Operational analytics and predictive maintenance for the first nuclear energy plant in the Arab world." },
    { slug: "healthcare", name: "Healthcare",               client: "NMC Healthcare",          years: "2021 — 2024",      summary: "Snowflake migration, clinical standardisation, and ML for patient outcomes at the UAE's largest private provider." },
    { slug: "gov-health", name: "Government Health",        client: "DHA · DoH Abu Dhabi",     years: "2019 — 2022",      summary: "Utilization analytics, electronic audits, and tariff negotiation support for self-insured programmes." },
    { slug: "actuarial",  name: "Insurance & Actuarial",    client: "Milliman · Taha Actuaries", years: "2020 — 2023",    summary: "GLM reserving, change-point detection, and predictive pricing work for GCC insurers." },
    { slug: "fintech",    name: "Technology & FinTech",     client: "Rasan IT (KSA)",          years: "2022 — 2023",      summary: "On-prem LLM and vision execution for regulated FinTech. National KSA FinTech competition winner." },
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
      {/* HERO */}
      <section style={{ ...container, padding: "96px 48px 80px" }}>
        <div style={twoCol}>
          <div className="eyebrow">Consultancy</div>
          <div>
            <h1 className="serif" style={{ fontSize: 68, lineHeight: 1.03, letterSpacing: "-0.025em", maxWidth: 960, marginBottom: 32 }}>
              Strategic data consultancy for complex organisations.
            </h1>
            <p style={{ fontSize: 19, lineHeight: 1.55, color: "var(--muted)", maxWidth: 640 }}>
              Ten years advising governments, healthcare providers, nuclear energy operators, and insurers across the GCC. Deep technical practice combined with the business judgement to know when to use it.
            </p>
            <div style={{ marginTop: 40, display: "flex", gap: 12 }}>
              <a className="btn-primary" href="mailto:y.shahzeb@gmail.com">Book a consultation →</a>
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
            What I bring to the table.
          </h2>
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", borderTop: "1px solid var(--rule)" }}>
          {SERVICES.map((s, i) => (
            <div key={s.no} style={{
              padding: "32px 28px 36px",
              borderRight: (i + 1) % 3 !== 0 ? "1px solid var(--rule)" : "none",
              borderBottom: "1px solid var(--rule)",
            }}>
              <div className="mono num" style={{ fontSize: 11, color: "var(--muted)", marginBottom: 24, letterSpacing: ".1em" }}>
                {s.no} / 06
              </div>
              <div className="serif" style={{ fontSize: 22, letterSpacing: "-0.015em", marginBottom: 12 }}>{s.name}</div>
              <p style={{ fontSize: 14, lineHeight: 1.6, color: "var(--muted)" }}>{s.body}</p>
            </div>
          ))}
        </div>
      </section>

      {/* SECTORS */}
      <section id="sectors" style={{ ...container, padding: "80px 48px" }}>
        <div style={{ ...twoCol, marginBottom: 48 }}>
          <div className="eyebrow">Sectors</div>
          <h2 className="serif" style={{ fontSize: 40, letterSpacing: "-0.02em", lineHeight: 1.1, maxWidth: 720 }}>
            Industries I&apos;ve worked in.
          </h2>
        </div>
        <div style={{ borderTop: "1px solid var(--rule)" }}>
          {SECTORS.map((s) => (
            <a key={s.slug} href={`/consultancy/${s.slug}`} style={{ display: "block", color: "inherit", textDecoration: "none" }}>
              <div style={{
                display: "grid",
                gridTemplateColumns: "200px 260px 1fr 40px",
                gap: 32, padding: "32px 0",
                borderBottom: "1px solid var(--rule)",
                alignItems: "start",
                transition: "background .15s",
              }}>
                <div className="serif" style={{ fontSize: 24, letterSpacing: "-0.015em" }}>{s.name}</div>
                <div>
                  <div style={{ fontSize: 14, lineHeight: 1.4 }}>{s.client}</div>
                  <div className="mono num" style={{ fontSize: 11, color: "var(--muted)", marginTop: 6, letterSpacing: ".04em" }}>{s.years}</div>
                </div>
                <div style={{ fontSize: 14.5, lineHeight: 1.6, color: "var(--muted)", maxWidth: 560 }}>{s.summary}</div>
                <div style={{ fontSize: 18, color: "var(--muted)", textAlign: "right" }}>→</div>
              </div>
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
              A four-phase engagement, refined over a decade.
            </h2>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", borderTop: "1px solid var(--rule)" }}>
            {PROCESS.map((p, i) => (
              <div key={p.step} style={{
                padding: "32px 24px 40px",
                borderRight: i < 3 ? "1px solid var(--rule)" : "none",
              }}>
                <div className="mono num" style={{ fontSize: 11, color: "var(--muted)", marginBottom: 24, letterSpacing: ".1em" }}>
                  PHASE {p.step}
                </div>
                <div className="serif" style={{ fontSize: 26, letterSpacing: "-0.015em", marginBottom: 14 }}>{p.name}</div>
                <p style={{ fontSize: 14, lineHeight: 1.6, color: "var(--muted)" }}>{p.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ ...container, padding: "96px 48px", borderTop: "1px solid var(--rule)" }}>
        <div style={twoCol}>
          <div className="eyebrow">Contact</div>
          <div>
            <h2 className="serif" style={{ fontSize: 48, letterSpacing: "-0.025em", lineHeight: 1.05, maxWidth: 900, marginBottom: 32 }}>
              Discuss a brief. No deck, no pitch — thirty minutes to understand the problem.
            </h2>
            <div style={{ display: "flex", gap: 12 }}>
              <a className="btn-primary" href="mailto:y.shahzeb@gmail.com">Write to Shahzeb →</a>
              <a className="btn-ghost" href="tel:+971551763478">+971 55 176 3478</a>
            </div>
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}
