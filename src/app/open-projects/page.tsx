import React from "react";
import SiteLayout from "@/components/site-layout";


const openProjects = [
  {
    id: "global-markets",
    title: "Global Markets Report",
    description: "Interactive dashboard for global markets data and analysis.",
    tags: ["Streamlit", "Python", "Finance"],
    date: "April 2026",
    url: "https://globalmarketsreport-shah.streamlit.app/",
  },
  {
    id: "RUL-analyzer",
    title: "RUL Analyzer",
    description: "Interactive application allowing users to upload documents and extract key entities using LLMs.",
    tags: ["Streamlit", "Python", "spaCy", "HuggingFace"],
    date: "February 2026",
    url: "https://rulnuclear-shah.streamlit.app/",
  },
];

const container: React.CSSProperties = { maxWidth: 1240, margin: "0 auto", padding: "0 48px" };
const twoCol: React.CSSProperties = { display: "grid", gridTemplateColumns: "200px 1fr", gap: 60 };

export default function OpenProjectsPage() {
  return (
    <SiteLayout>
      <section style={{ ...container, padding: "96px 48px 64px" }}>
        <div style={twoCol}>
          <div className="eyebrow">Open Projects</div>
          <div>
            <h1 className="serif" style={{ fontSize: 60, lineHeight: 1.04, letterSpacing: "-0.025em", maxWidth: 900, marginBottom: 24 }}>
              Interactive applications and data tools, published openly.
            </h1>
            <p style={{ fontSize: 17, lineHeight: 1.55, color: "var(--muted)", maxWidth: 620 }}>
              A small collection of live Streamlit and Python applications. Use them, read the code, file an issue. Most started as tools built during client engagements.
            </p>
          </div>
        </div>
      </section>

      <section style={{ ...container, padding: "40px 48px 96px" }}>
        <div style={{ borderTop: "1px solid var(--rule)" }}>
          {openProjects.map((p) => (
            <a key={p.id} href={p.url} target="_blank" rel="noreferrer" style={{ textDecoration: "none", color: "inherit", display: "block" }}>
              <div style={{
                display: "grid",
                gridTemplateColumns: "200px 1fr 280px 40px",
                gap: 32, padding: "32px 0",
                borderBottom: "1px solid var(--rule)",
                alignItems: "start",
              }}>
                <div className="mono num" style={{ fontSize: 12, color: "var(--muted)", letterSpacing: ".04em", paddingTop: 6 }}>{p.date}</div>
                <div>
                  <div className="serif" style={{ fontSize: 24, letterSpacing: "-0.015em", marginBottom: 10 }}>{p.title}</div>
                  <div style={{ fontSize: 14, lineHeight: 1.6, color: "var(--muted)", maxWidth: 520 }}>{p.description}</div>
                </div>
                <div style={{ display: "flex", flexDirection: "column", gap: 6, alignItems: "flex-end" }}>
                  {p.tags.map(t => (
                    <span key={t} className="mono" style={{ fontSize: 10.5, color: "var(--muted)", textTransform: "uppercase", letterSpacing: ".1em" }}>— {t}</span>
                  ))}
                </div>
                <div style={{ fontSize: 18, color: "var(--muted)", textAlign: "right" }}>↗</div>
              </div>
            </a>
          ))}
        </div>
      </section>
    </SiteLayout>
  );
}
