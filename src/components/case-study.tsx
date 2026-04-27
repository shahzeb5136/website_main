import React from "react";
import Link from "next/link";

type Section = {
  key: string;
  title: string;
  body?: string;
  bullets?: string[];
};

type Metric = { label: string; value: string };

type Project = {
  title: string;
  year?: string;
  summary: string;
  tags: string[];
};

export type CaseStudyProps = {
  parentHref?: string;        // e.g. "/consultancy"
  parentLabel?: string;       // e.g. "Consultancy"
  sector: string;             // e.g. "Nuclear Energy"
  headline: string;           // e.g. "Operational analytics for the Barakah programme."
  lede: string;               // 2–3 sentence intro
  client?: { name: string; role: string; years?: string };
  metrics?: Metric[];
  capabilities?: string[];    // bulleted list
  projects?: Project[];       // timeline-style engagements
  sections?: Section[];       // free-form body sections
};

const container: React.CSSProperties = { maxWidth: 1240, margin: "0 auto", padding: "0 48px" };
const twoCol: React.CSSProperties = { display: "grid", gridTemplateColumns: "200px 1fr", gap: 60 };

export default function CaseStudyPage(props: CaseStudyProps) {
  const {
    parentHref = "/consultancy",
    parentLabel = "Consultancy",
    sector,
    headline,
    lede,
    client,
    metrics,
    capabilities,
    projects,
    sections,
  } = props;

  return (
    <>
      {/* HERO */}
      <section style={{ ...container, padding: "72px 48px 72px" }}>
        <Link href={parentHref} className="link" style={{ fontSize: 13, color: "var(--muted)" }}>
          ← Back to {parentLabel}
        </Link>

        <div style={{ marginTop: 48, display: "grid", gridTemplateColumns: "200px 1fr", gap: 60, alignItems: "start" }}>
          <div>
            <div className="eyebrow">Sector</div>
            <div className="serif" style={{ fontSize: 22, letterSpacing: "-0.015em", marginTop: 8 }}>{sector}</div>
          </div>
          <div>
            <h1 className="serif" style={{ fontSize: 64, lineHeight: 1.04, letterSpacing: "-0.025em", maxWidth: 960, marginBottom: 32 }}>
              {headline}
            </h1>
            <p style={{ fontSize: 18, lineHeight: 1.55, color: "var(--muted)", maxWidth: 680 }}>
              {lede}
            </p>
          </div>
        </div>
      </section>

      {/* CLIENT STRIP */}
      {client && (
        <section style={{ borderTop: "1px solid var(--rule)", borderBottom: "1px solid var(--rule)", background: "var(--surface)" }}>
          <div style={{ ...container, padding: "32px 48px", display: "grid", gridTemplateColumns: "200px 1fr 1fr", gap: 48, alignItems: "baseline" }}>
            <div className="eyebrow">Client</div>
            <div>
              <div className="mono" style={{ fontSize: 11, color: "var(--muted)", textTransform: "uppercase", letterSpacing: ".1em", marginBottom: 6 }}>Organisation</div>
              <div className="serif" style={{ fontSize: 18 }}>{client.name}</div>
            </div>
            <div>
              <div className="mono" style={{ fontSize: 11, color: "var(--muted)", textTransform: "uppercase", letterSpacing: ".1em", marginBottom: 6 }}>Engagement Type</div>
              <div className="serif" style={{ fontSize: 18 }}>{client.role}</div>
            </div>
          </div>
        </section>
      )}

      {/* METRICS */}
      {metrics && metrics.length > 0 && (
        <section style={{ ...container, padding: "64px 48px" }}>
          <div style={twoCol}>
            <div className="eyebrow">At a glance</div>
            <div style={{ display: "grid", gridTemplateColumns: `repeat(${metrics.length}, 1fr)`, gap: 32, borderTop: "1px solid var(--rule)", paddingTop: 32 }}>
              {metrics.map((m) => (
                <div key={m.label} style={{ display: "flex", flexDirection: "column", gap: 8 }}>
                  <div className="serif num" style={{ fontSize: 40, letterSpacing: "-0.03em", lineHeight: 1 }}>{m.value}</div>
                  <div style={{ fontSize: 12, color: "var(--muted)", lineHeight: 1.4 }}>{m.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* SECTIONS (free-form body) */}
      {sections && sections.map((s, i) => (
        <section key={s.key} style={{ ...container, padding: "64px 48px", borderTop: i === 0 ? "1px solid var(--rule)" : undefined }}>
          <div style={twoCol}>
            <div className="eyebrow">{s.title}</div>
            <div style={{ maxWidth: 760 }}>
              {s.body && (
                <p style={{ fontSize: 17, lineHeight: 1.6, color: "var(--ink)", marginBottom: s.bullets ? 24 : 0 }}>
                  {s.body}
                </p>
              )}
              {s.bullets && (
                <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "grid", gridTemplateColumns: "1fr 1fr", gap: "14px 40px" }}>
                  {s.bullets.map((b) => (
                    <li key={b} style={{ fontSize: 14.5, lineHeight: 1.55, color: "var(--muted)", paddingLeft: 16, position: "relative" }}>
                      <span style={{ position: "absolute", left: 0, top: 10, width: 6, height: 1, background: "var(--accent)" }} />
                      {b}
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </div>
        </section>
      ))}

      {/* CAPABILITIES */}
      {capabilities && capabilities.length > 0 && (
        <section style={{ borderTop: "1px solid var(--rule)", background: "var(--surface)" }}>
          <div style={{ ...container, padding: "72px 48px" }}>
            <div style={twoCol}>
              <div className="eyebrow">Capabilities</div>
              <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "grid", gridTemplateColumns: "1fr 1fr", gap: "16px 48px" }}>
                {capabilities.map((c) => (
                  <li key={c} style={{ fontSize: 15, lineHeight: 1.5, paddingBottom: 12, borderBottom: "1px solid var(--rule)" }}>
                    {c}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>
      )}

      {/* PROJECTS / ENGAGEMENT LOG */}
      {projects && projects.length > 0 && (
        <section style={{ ...container, padding: "80px 48px" }}>
          <div style={{ ...twoCol, marginBottom: 40 }}>
            <div className="eyebrow">Projects</div>
            <h2 className="serif" style={{ fontSize: 36, letterSpacing: "-0.02em", lineHeight: 1.1, maxWidth: 720 }}>
              Work delivered.
            </h2>
          </div>
          <div style={{ borderTop: "1px solid var(--rule)" }}>
            {projects.map((p) => (
              <div key={p.title} style={{
                display: "grid",
                gridTemplateColumns: "1fr 180px",
                gap: 32,
                padding: "32px 0",
                borderBottom: "1px solid var(--rule)",
                alignItems: "start",
              }}>
                <div>
                  <div className="serif" style={{ fontSize: 22, letterSpacing: "-0.015em", marginBottom: 10 }}>{p.title}</div>
                  <div style={{ fontSize: 14.5, lineHeight: 1.6, color: "var(--muted)", maxWidth: 620 }}>{p.summary}</div>
                </div>
                <div style={{ display: "flex", flexDirection: "column", gap: 6, alignItems: "flex-end" }}>
                  {p.tags.map(t => (
                    <span key={t} className="mono" style={{ fontSize: 10.5, color: "var(--muted)", textTransform: "uppercase", letterSpacing: ".1em" }}>— {t}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* CTA */}
      <section style={{ ...container, padding: "80px 48px", borderTop: "1px solid var(--rule)" }}>
        <div style={twoCol}>
          <div className="eyebrow">Next step</div>
          <div>
            <h2 className="serif" style={{ fontSize: 40, letterSpacing: "-0.025em", lineHeight: 1.1, marginBottom: 32, maxWidth: 760 }}>
              Need this capability in your organisation? Let&apos;s talk.
            </h2>
            <div style={{ display: "flex", gap: 12 }}>
              <Link className="btn-primary" href={parentHref}>All sectors</Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
