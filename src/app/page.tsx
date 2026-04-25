import React from "react";
import Link from "next/link";
import SiteLayout from "@/components/site-layout";

/* ─────────── DATA ─────────── */
const CLIENTS = [
  "ENEC", "NMC Healthcare", "DHA", "Department of Health · Abu Dhabi",
  "Milliman", "Taha Actuaries", "Rasan IT",
];

const PRACTICE = [
  { no: "01", name: "Strategic Advisory",
    body: "Board-level guidance on data strategy, architecture, and model governance for regulated industries.",
    sub: "Engagement · 6–18 months" },
  { no: "02", name: "AI & ML Delivery",
    body: "End-to-end builds — LLMs, NLP pipelines, predictive models — deployed with MLOps and proper monitoring.",
    sub: "Engagement · 3–9 months" },
  { no: "03", name: "Team Leadership",
    body: "Embedded Principal role. Hire, mentor, and ship. Translate between executives and engineers.",
    sub: "Engagement · retainer" },
];

const ENGAGEMENTS = [
  { year: "2023 — present", org: "ENEC", role: "Data Science Consultant", href: "/consultancy/nuclear",
    summary: "Operational analytics for the Barakah nuclear programme. Predictive maintenance signal engineering and regulatory reporting.",
    tags: ["Energy", "Regulated"] },
  { year: "2021 — 2024", org: "NMC Healthcare", role: "Principal Data Scientist", href: "/consultancy/healthcare",
    summary: "Led migration of a fragmented healthcare estate to Snowflake. Standardised claims, clinical and finance datasets; built ML for length-of-stay and readmission.",
    tags: ["Healthcare", "Cloud"] },
  { year: "2019 — 2022", org: "DHA & DoH Abu Dhabi", role: "Consulting Data Scientist", href: "/consultancy/gov-health",
    summary: "Utilization analytics for self-insured government programmes. Tariff negotiation support and electronic audit of claims.",
    tags: ["Government", "Health"] },
  { year: "2020 — 2023", org: "Milliman · Taha Actuaries", role: "ML & Actuarial Consultant", href: "/consultancy/actuarial",
    summary: "Advanced GLM reserving, change-point detection on cost series, ARIMA trend work, predictive pricing for GCC insurers.",
    tags: ["Actuarial", "Insurance"] },
  { year: "2022 — 2023", org: "Rasan IT (KSA)", role: "Principal Data Scientist", href: "/consultancy/fintech",
    summary: "On-prem LLM and vision execution for FinTech. Won a national KSA FinTech competition.",
    tags: ["FinTech", "LLMs"] },
];

const CAPABILITIES = [
  { group: "Languages", items: ["Python", "SQL", "R", "Scala"] },
  { group: "ML & AI", items: ["LLMs · RAG · fine-tuning", "NLP", "Time-series", "Computer vision"] },
  { group: "Platforms", items: ["Snowflake", "Databricks", "Azure · AWS", "On-prem GPU"] },
  { group: "Analytics", items: ["Power BI", "Tableau", "Qlik", "Looker"] },
];

/* ─────────── SHARED STYLES ─────────── */
const container: React.CSSProperties = { maxWidth: 1240, margin: "0 auto", padding: "0 48px" };
const twoCol: React.CSSProperties = { display: "grid", gridTemplateColumns: "200px 1fr", gap: 60 };

export default function HomePage() {
  return (
    <SiteLayout>
      {/* HERO */}
      <section style={{ ...container, padding: "100px 48px 80px" }}>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 360px", gap: 80, alignItems: "start" }}>
          <div>
            <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 32 }}>
              <span className="dot" />
              <span className="eyebrow">Available Q3 2026 · Based in Abu Dhabi</span>
            </div>
            <h1 className="serif" style={{ fontSize: 72, lineHeight: 1.02, letterSpacing: "-0.025em", marginBottom: 32, maxWidth: 900 }}>
              Data and AI work for organisations where the stakes are real.
            </h1>
            <p style={{ fontSize: 19, lineHeight: 1.55, color: "var(--muted)", maxWidth: 620, marginBottom: 40 }}>
              Ten years as a Principal Data Scientist and consultant across nuclear energy, healthcare, government health programmes, and insurance in the GCC. I lead teams, ship production systems, and leave behind documentation that survives handover.
            </p>
            <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
              <a className="btn-primary" href="#contact">Arrange an introduction →</a>
              <Link className="btn-ghost" href="/consultancy">Consultancy</Link>
              <Link className="btn-ghost" href="/ai-integration">AI Integration</Link>
              <Link className="btn-ghost" href="/open-projects">Open Projects</Link>
            </div>
          </div>
          <div>
            <div style={{ aspectRatio: "4 / 5", border: "1px solid var(--rule)", position: "relative", overflow: "hidden", backgroundColor: "var(--soft)" }}>
              <Image 
                src="/main_pic.jpg" 
                alt="Shahzeb Yousuf Portrait" 
                fill 
                style={{ objectFit: "cover", filter: "grayscale(100%)" }} 
                priority
              />
            </div>
            <div className="mono" style={{ fontSize: 11, color: "var(--muted)", marginTop: 10, letterSpacing: ".06em" }}>
              Shahzeb Yousuf, Abu Dhabi, 2026
            </div>
          </div>
        </div>
      </section>

      {/* STATS */}
      <section style={{ borderTop: "1px solid var(--rule)", borderBottom: "1px solid var(--rule)", background: "var(--surface)" }}>
        <div style={{ ...container, padding: "36px 48px", display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 48 }}>
          {[
            { v: "10", l: "Years in practice" },
            { v: "7", l: "Sovereign & enterprise clients" },
            { v: "20+", l: "Production engagements" },
            { v: "3", l: "Regulated sectors" },
          ].map((it, i) => (
            <div key={i} style={{ display: "flex", alignItems: "baseline", gap: 16 }}>
              <div className="serif num" style={{ fontSize: 42, letterSpacing: "-0.03em" }}>{it.v}</div>
              <div style={{ fontSize: 12, color: "var(--muted)", lineHeight: 1.4, maxWidth: 140 }}>{it.l}</div>
            </div>
          ))}
        </div>
      </section>

      {/* CLIENTS */}
      <section style={{ ...container, padding: "72px 48px" }}>
        <div style={twoCol}>
          <div className="eyebrow">Selected Clients</div>
          <div>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "18px 40px", alignItems: "baseline" }}>
              {CLIENTS.map((c, i) => (
                <React.Fragment key={c}>
                  <span className="serif" style={{ fontSize: 24, letterSpacing: "-0.015em" }}>{c}</span>
                  {i < CLIENTS.length - 1 && <span style={{ color: "var(--rule)", fontSize: 18 }}>/</span>}
                </React.Fragment>
              ))}
            </div>
            <div style={{ marginTop: 24, fontSize: 13, color: "var(--muted)", maxWidth: 560 }}>
              Client engagements listed with permission. Detail on individual programmes available under NDA upon request.
            </div>
          </div>
        </div>
      </section>

      {/* PRACTICE */}
      <section id="practice" style={{ ...container, padding: "80px 48px", borderTop: "1px solid var(--rule)" }}>
        <div style={{ ...twoCol, marginBottom: 48 }}>
          <div className="eyebrow">Practice</div>
          <h2 className="serif" style={{ fontSize: 40, letterSpacing: "-0.02em", lineHeight: 1.1, maxWidth: 720 }}>
            Three ways I work with clients. Scoped, accountable, and priced transparently.
          </h2>
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", borderTop: "1px solid var(--rule)" }}>
          {PRACTICE.map((p, i) => (
            <div key={p.no} style={{
              padding: "36px 32px 40px",
              borderRight: i < 2 ? "1px solid var(--rule)" : "none",
              borderBottom: "1px solid var(--rule)",
            }}>
              <div className="mono num" style={{ fontSize: 11, color: "var(--muted)", marginBottom: 28, letterSpacing: ".1em" }}>
                {p.no} / 03
              </div>
              <div className="serif" style={{ fontSize: 26, letterSpacing: "-0.015em", marginBottom: 16 }}>{p.name}</div>
              <p style={{ fontSize: 14.5, lineHeight: 1.6, color: "var(--muted)", marginBottom: 24 }}>{p.body}</p>
              <div className="mono" style={{ fontSize: 11, textTransform: "uppercase", letterSpacing: ".1em" }}>
                {p.sub}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ENGAGEMENTS */}
      <section id="engagements" style={{ ...container, padding: "80px 48px" }}>
        <div style={{ ...twoCol, marginBottom: 48 }}>
          <div className="eyebrow">Engagements</div>
          <h2 className="serif" style={{ fontSize: 40, letterSpacing: "-0.02em", lineHeight: 1.1, maxWidth: 720 }}>
            Recent work.
          </h2>
        </div>
        <div style={{ borderTop: "1px solid var(--rule)" }}>
          {ENGAGEMENTS.map((e, i) => (
            <Link key={i} href={e.href} style={{ display: "block", color: "inherit", textDecoration: "none" }}>
              <div style={{
                display: "grid",
                gridTemplateColumns: "200px 240px 1fr 160px 40px",
                gap: 32, padding: "32px 0",
                borderBottom: "1px solid var(--rule)",
                alignItems: "start",
              }}>
                <div className="mono num" style={{ fontSize: 12, color: "var(--muted)", letterSpacing: ".04em", paddingTop: 4 }}>
                  {e.year}
                </div>
                <div>
                  <div className="serif" style={{ fontSize: 22, letterSpacing: "-0.015em", lineHeight: 1.2 }}>{e.org}</div>
                  <div style={{ fontSize: 12, color: "var(--muted)", marginTop: 6 }}>{e.role}</div>
                </div>
                <div style={{ fontSize: 14.5, lineHeight: 1.6, maxWidth: 520 }}>
                  {e.summary}
                </div>
                <div style={{ display: "flex", flexDirection: "column", gap: 6, alignItems: "flex-end" }}>
                  {e.tags.map(t => (
                    <span key={t} className="mono" style={{ fontSize: 10.5, color: "var(--muted)", textTransform: "uppercase", letterSpacing: ".1em" }}>— {t}</span>
                  ))}
                </div>
                <div style={{ fontSize: 18, color: "var(--muted)", textAlign: "right" }}>→</div>
              </div>
            </Link>
          ))}
        </div>
        <div style={{ marginTop: 24, display: "flex", gap: 24 }}>
          <Link href="/consultancy" className="link" style={{ fontSize: 13 }}>All consultancy sectors →</Link>
          <Link href="/ai-integration" className="link" style={{ fontSize: 13 }}>AI Integration services →</Link>
          <Link href="/open-projects" className="link" style={{ fontSize: 13 }}>Open Projects →</Link>
        </div>
      </section>

      {/* CAPABILITIES */}
      <section id="capabilities" style={{ borderTop: "1px solid var(--rule)", background: "var(--surface)" }}>
        <div style={{ ...container, padding: "80px 48px" }}>
          <div style={twoCol}>
            <div>
              <div className="eyebrow" style={{ marginBottom: 20 }}>Capabilities</div>
              <div style={{ fontSize: 13, color: "var(--muted)", lineHeight: 1.6, maxWidth: 180 }}>
                Tools I use daily. The list matters less than the judgement about when to use which.
              </div>
            </div>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 40 }}>
              {CAPABILITIES.map((c) => (
                <div key={c.group}>
                  <div className="mono" style={{ fontSize: 11, color: "var(--muted)", textTransform: "uppercase", letterSpacing: ".1em", marginBottom: 16, paddingBottom: 12, borderBottom: "1px solid var(--rule)" }}>
                    {c.group}
                  </div>
                  <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: 10 }}>
                    {c.items.map(it => (
                      <li key={it} style={{ fontSize: 14, lineHeight: 1.4 }}>{it}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* TESTIMONIAL */}
      <section style={{ ...container, padding: "96px 48px", borderTop: "1px solid var(--rule)" }}>
        <div style={{ maxWidth: 880, margin: "0 auto" }}>
          <div className="serif" style={{ fontSize: 48, color: "var(--rule)", lineHeight: 1, marginBottom: 8 }}>&ldquo;</div>
          <blockquote className="serif" style={{ fontSize: 30, lineHeight: 1.35, letterSpacing: "-0.015em", margin: 0 }}>
            Shahzeb translated a tangle of legacy systems into something our board could actually govern. The work was careful, unhurried, and correct on the first pass.
          </blockquote>
          <div style={{ marginTop: 32, fontSize: 13, color: "var(--muted)" }}>
            <span style={{ color: "var(--ink)", fontWeight: 500 }}>Programme Director</span> · Healthcare, UAE
            <span style={{ margin: "0 10px", color: "var(--rule)" }}>|</span>
            <span className="mono">Reference available on request</span>
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" style={{ ...container, padding: "80px 48px", borderTop: "1px solid var(--rule)" }}>
        <div style={twoCol}>
          <div className="eyebrow">Contact</div>
          <div>
            <h2 className="serif" style={{ fontSize: 52, letterSpacing: "-0.025em", lineHeight: 1.05, marginBottom: 40, maxWidth: 900 }}>
              Engagements begin with a conversation. No deck, no pitch — thirty minutes to understand the problem.
            </h2>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 40, borderTop: "1px solid var(--rule)", paddingTop: 32 }}>
              <div>
                <div className="eyebrow" style={{ marginBottom: 8 }}>Email</div>
                <a href="mailto:y.shahzeb@gmail.com" className="serif" style={{ fontSize: 18, letterSpacing: "-0.01em" }}>y.shahzeb@gmail.com</a>
              </div>
              <div>
                <div className="eyebrow" style={{ marginBottom: 8 }}>Telephone</div>
                <a href="tel:+971551763478" className="serif num" style={{ fontSize: 18, letterSpacing: "-0.01em" }}>+971 55 176 3478</a>
              </div>
              <div>
                <div className="eyebrow" style={{ marginBottom: 8 }}>Office</div>
                <div className="serif" style={{ fontSize: 18, letterSpacing: "-0.01em" }}>Abu Dhabi · United Arab Emirates</div>
              </div>
            </div>
            <div style={{ marginTop: 48, display: "flex", gap: 12 }}>
              <a className="btn-primary" href="mailto:y.shahzeb@gmail.com">Write to Shahzeb →</a>
              <a className="btn-ghost" href="/CV.pdf">Download CV · PDF</a>
            </div>
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}
