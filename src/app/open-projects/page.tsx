"use client";

import React, { useState } from "react";
import SiteLayout from "@/components/site-layout";

const CATEGORIES = ["All", "Finance", "Financial Markets", "Healthcare", "Insurance", "Energy"];

const openProjects = [
  {
    id: "global-markets",
    title: "Global Markets Report",
    description: "Interactive dashboard for getting a high level overview of global financial markets.",
    tags: ["Streamlit", "Python", "Finance"],
    category: "Financial Markets",
    url: "https://globalmarketsreport-shah.streamlit.app/",
  },
  {
    id: "RUL-analyzer",
    title: "RUL Analyzer",
    description: "Interactive application allowing users to simulate remaining usefull life for a component.",
    tags: ["Streamlit", "Python", "spaCy", "HuggingFace"],
    category: "Energy",
    url: "https://rulnuclear-shah.streamlit.app/",
  },
];

const container: React.CSSProperties = { maxWidth: 1240, margin: "0 auto", padding: "0 48px" };
const twoCol: React.CSSProperties = { display: "grid", gridTemplateColumns: "200px 1fr", gap: 60 };

export default function OpenProjectsPage() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredProjects = activeCategory === "All"
    ? openProjects
    : openProjects.filter(p => p.category === activeCategory);

  return (
    <SiteLayout>
      <section style={{ ...container, padding: "96px 48px 64px" }}>
        <div style={twoCol}>
          <div className="eyebrow">Open Projects</div>
          <div>
            <h1 className="serif" style={{ fontSize: 60, lineHeight: 1.04, letterSpacing: "-0.025em", maxWidth: 900, marginBottom: 24 }}>
              Interactive applications and data tools, published openly.
            </h1>
            <p style={{ fontSize: 17, lineHeight: 1.55, color: "var(--muted)", maxWidth: 620, marginBottom: 32 }}>
              A small collection of live Streamlit and Python applications. Use them, read the code, file an issue. Most started as tools built during client engagements.
            </p>

            <div style={{
              background: "rgba(255, 170, 0, 0.1)",
              borderLeft: "4px solid #ffaa00",
              padding: "20px 24px",
              borderRadius: "0 8px 8px 0",
              maxWidth: 720,
              marginBottom: 48
            }}>
              <h3 style={{ fontSize: 16, fontWeight: 600, color: "#e69900", marginBottom: 8, display: "flex", alignItems: "center", gap: 8 }}>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z"></path>
                  <path d="M12 9v4"></path>
                  <path d="M12 17h.01"></path>
                </svg>
                Streamlit Apps Might Be Sleeping
              </h3>
              <p style={{ fontSize: 15, lineHeight: 1.5, color: "var(--fg)", margin: 0, opacity: 0.9 }}>
                Because these are hosted on a free tier, they go to sleep after periods of inactivity. If an app takes a moment to load or shows a sleep screen, just click the <strong>"Wake Up"</strong> button and it will be ready in a few moments!
              </p>
            </div>

            <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
              {CATEGORIES.map(cat => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  style={{
                    padding: "8px 20px",
                    borderRadius: 30,
                    border: activeCategory === cat ? "1px solid var(--fg)" : "1px solid var(--rule)",
                    background: activeCategory === cat ? "var(--fg)" : "transparent",
                    color: activeCategory === cat ? "var(--bg)" : "var(--muted)",
                    fontSize: 14,
                    cursor: "pointer",
                    transition: "all 0.2s ease"
                  }}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section style={{ ...container, padding: "40px 48px 96px" }}>
        <div style={{ borderTop: "1px solid var(--rule)" }}>
          {filteredProjects.length === 0 ? (
            <div style={{ padding: "80px 0", textAlign: "center", color: "var(--muted)", fontSize: 16 }}>
              No projects available in this category yet.
            </div>
          ) : (
            filteredProjects.map((p) => (
              <a key={p.id} href={p.url} target="_blank" rel="noreferrer" style={{ textDecoration: "none", color: "inherit", display: "block" }}>
                <div style={{
                  display: "grid",
                  gridTemplateColumns: "200px 1fr 280px 40px",
                  gap: 32, padding: "32px 0",
                  borderBottom: "1px solid var(--rule)",
                  alignItems: "start",
                  transition: "opacity 0.2s",
                }}
                  onMouseOver={(e) => (e.currentTarget.style.opacity = '0.7')}
                  onMouseOut={(e) => (e.currentTarget.style.opacity = '1')}
                >
                  <div className="mono" style={{ fontSize: 12, color: "var(--muted)", letterSpacing: ".04em", paddingTop: 6, textTransform: "uppercase" }}>
                    {p.category}
                  </div>
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
            ))
          )}
        </div>
      </section>
    </SiteLayout>
  );
}
