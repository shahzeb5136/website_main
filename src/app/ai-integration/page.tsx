"use client";
import React, { useState } from "react";
import SiteLayout from "@/components/site-layout";
import ContactModal from "@/components/contact-modal";

const SERVICES = [
  { no: "01", name: "Large Language Models",
    body: "Custom LLM work — from local Ollama deployments to cloud APIs. Document analysis, natural-language querying of internal data, conversational interfaces on top of existing systems.",
    tags: ["LLMs", "RAG", "NLP"] },
  { no: "02", name: "Computer Vision",
    body: "Quality inspection, document digitisation, and automated visual analysis. Deployed on-prem or at the edge where data can't leave the building.",
    tags: ["CV", "OCR", "Edge"] },
  { no: "03", name: "Predictive Analytics",
    body: "Bayesian inference, MCMC, neural networks, GLMs. Models built to survive audit and regulatory scrutiny, not just a demo.",
    tags: ["ML", "Bayesian", "GLM"] },
  { no: "04", name: "MLOps & Deployment",
    body: "Full lifecycle — training, versioning, deployment, monitoring, scaling. On AWS, GCP, Azure, or on-prem if required.",
    tags: ["MLOps", "Cloud", "On-prem"] },
  { no: "05", name: "Data Pipelines & ETL",
    body: "Data engineering on Databricks, Snowflake, and custom stacks. The unglamorous work that decides whether any of the above succeeds.",
    tags: ["Databricks", "Snowflake", "ETL"] },
];

const PROCESS = [
  { step: "01", name: "Discovery",      body: "Assess business needs, data maturity, and where AI creates real value. No jargon, clear opportunities." },
  { step: "02", name: "Data Readiness", body: "Audit, clean, and structure data. Build pipelines that feed models reliably; modernise platforms if needed." },
  { step: "03", name: "Build & Train",  body: "Custom models trained on client data. LLMs, NLP, predictive — whatever solves the specific problem." },
  { step: "04", name: "Deploy",         body: "Production deployment with proper MLOps. Integration into existing systems via APIs, dashboards, or UIs." },
  { step: "05", name: "Monitor & Scale", body: "Ongoing monitoring, drift detection, and performance optimisation. Scale as needs grow." },
];

const PROJECTS = [
  { year: "2024", title: "Natural Language Query Interface",
    summary: "Users query PostgreSQL databases in plain English; LLMs translate questions to SQL and return grounded answers.",
    tags: ["OpenAI", "LangChain"] },
  { year: "2023", title: "RAG for Nuclear Procedures",
    summary: "Semantic search across NRC Technical Letters using Retrieval-Augmented Generation. Retrieval quality engineered, not hoped for.",
    tags: ["RAG", "Vector DB"] },
  { year: "2024", title: "LLM Sentiment Alpha",
    summary: "Real-time sentiment analysis on financial news using LLMs to generate predictive trading signals.",
    tags: ["LLM", "Finance"] },
  { year: "2022", title: "Change Point Detection",
    summary: "Bayesian + MCMC pipeline detecting maintained cost changes in large healthcare datasets.",
    tags: ["Bayesian", "MCMC"] },
  { year: "2022", title: "Hospital Readmission Prediction",
    summary: "GLM-based pipeline predicting readmissions; used in investigations into medical complications.",
    tags: ["GLM", "Healthcare"] },
  { year: "2023", title: "Local LLM Execution Platform",
    summary: "On-prem LLM and vision execution for FinTech clients. Full data privacy, no reliance on external APIs.",
    tags: ["Ollama", "On-prem"] },
];

const STACK = [
  { group: "Languages", items: ["Python", "SQL", "R", "C++"] },
  { group: "ML", items: ["Scikit-learn", "PyTorch", "TensorFlow", "XGBoost"] },
  { group: "LLM", items: ["OpenAI", "Ollama", "LangChain", "Vector DBs"] },
  { group: "Data", items: ["Snowflake", "Databricks", "PostgreSQL", "Kafka"] },
  { group: "Cloud", items: ["AWS", "GCP", "Azure", "On-prem GPU"] },
  { group: "MLOps", items: ["Docker", "MLflow", "Airflow", "Monitoring"] },
];

const container: React.CSSProperties = { maxWidth: 1240, margin: "0 auto", padding: "0 48px" };
const twoCol: React.CSSProperties = { display: "grid", gridTemplateColumns: "200px 1fr", gap: 60 };

export default function AIIntegrationPage() {
  const [modalOpen, setModalOpen] = useState(false);
  return (
    <SiteLayout>
      <ContactModal isOpen={modalOpen} onClose={() => setModalOpen(false)} subject="AI Readiness Assessment" />
      {/* HERO */}
      <section style={{ ...container, padding: "96px 48px 80px" }}>
        <div style={twoCol}>
          <div className="eyebrow">AI Integration</div>
          <div>
            <h1 className="serif" style={{ fontSize: 68, lineHeight: 1.03, letterSpacing: "-0.025em", maxWidth: 980, marginBottom: 32 }}>
              End-to-end AI delivery. No orphaned proofs of concept.
            </h1>
            <p style={{ fontSize: 19, lineHeight: 1.55, color: "var(--muted)", maxWidth: 660 }}>
              Roughly 87% of machine-learning models never reach production. The work here is specifically about the ones that do — built with the data readiness, MLOps, and governance it takes to survive the handover.
            </p>
            <div style={{ marginTop: 40, display: "flex", gap: 12 }}>
              <button id="ai-cta-hero" className="btn-primary" style={{ cursor: "pointer" }} onClick={() => setModalOpen(true)}>Request an AI readiness assessment →</button>
              <a className="btn-ghost" href="#projects">Review recent work</a>
            </div>
          </div>
        </div>
      </section>

      {/* PROBLEM */}
      <section style={{ borderTop: "1px solid var(--rule)", borderBottom: "1px solid var(--rule)", background: "var(--surface)" }}>
        <div style={{ ...container, padding: "64px 48px" }}>
          <div style={twoCol}>
            <div className="eyebrow">The problem</div>
            <div style={{ maxWidth: 760 }}>
              <p className="serif" style={{ fontSize: 26, lineHeight: 1.4, letterSpacing: "-0.015em", marginBottom: 20 }}>
                Scattered data. No in-house ML. POCs that impress but don&apos;t ship. Fear of black-box vendors.
              </p>
              <p style={{ fontSize: 15.5, lineHeight: 1.65, color: "var(--muted)", maxWidth: 620 }}>
                These are the four patterns that consume most AI budgets. My approach is to name them out loud at the start of an engagement, then do the unglamorous work — data readiness, deployment, monitoring — that actually addresses them.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CAPABILITIES */}
      <section style={{ ...container, padding: "80px 48px" }}>
        <div style={{ ...twoCol, marginBottom: 48 }}>
          <div className="eyebrow">Capabilities</div>
          <h2 className="serif" style={{ fontSize: 40, letterSpacing: "-0.02em", lineHeight: 1.1, maxWidth: 720 }}>
            AI solutions we build.
          </h2>
        </div>
        <div style={{ borderTop: "1px solid var(--rule)" }}>
          {SERVICES.map((s) => (
            <div key={s.no} style={{
              display: "grid",
              gridTemplateColumns: "80px 260px 1fr 200px",
              gap: 32, padding: "32px 0",
              borderBottom: "1px solid var(--rule)",
              alignItems: "start",
            }}>
              <div className="mono num" style={{ fontSize: 12, color: "var(--muted)", letterSpacing: ".04em", paddingTop: 6 }}>{s.no}</div>
              <div className="serif" style={{ fontSize: 22, letterSpacing: "-0.015em" }}>{s.name}</div>
              <p style={{ fontSize: 14.5, lineHeight: 1.6, color: "var(--muted)", maxWidth: 560 }}>{s.body}</p>
              <div style={{ display: "flex", flexDirection: "column", gap: 6, alignItems: "flex-end" }}>
                {s.tags.map(t => (
                  <span key={t} className="mono" style={{ fontSize: 10.5, color: "var(--muted)", textTransform: "uppercase", letterSpacing: ".1em" }}>— {t}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* PROCESS */}
      <section style={{ borderTop: "1px solid var(--rule)", background: "var(--surface)" }}>
        <div style={{ ...container, padding: "80px 48px" }}>
          <div style={{ ...twoCol, marginBottom: 48 }}>
            <div className="eyebrow">Process</div>
            <h2 className="serif" style={{ fontSize: 40, letterSpacing: "-0.02em", lineHeight: 1.1, maxWidth: 720 }}>
              From zero to AI in five phases.
            </h2>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(5, 1fr)", borderTop: "1px solid var(--rule)" }}>
            {PROCESS.map((p, i) => (
              <div key={p.step} style={{
                padding: "28px 20px 36px",
                borderRight: i < 4 ? "1px solid var(--rule)" : "none",
              }}>
                <div className="mono num" style={{ fontSize: 11, color: "var(--muted)", marginBottom: 20, letterSpacing: ".1em" }}>
                  PHASE {p.step}
                </div>
                <div className="serif" style={{ fontSize: 22, letterSpacing: "-0.015em", marginBottom: 12 }}>{p.name}</div>
                <p style={{ fontSize: 13, lineHeight: 1.6, color: "var(--muted)" }}>{p.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PROJECTS */}
      <section id="projects" style={{ ...container, padding: "80px 48px" }}>
        <div style={{ ...twoCol, marginBottom: 48 }}>
          <div className="eyebrow">Portfolio</div>
          <h2 className="serif" style={{ fontSize: 40, letterSpacing: "-0.02em", lineHeight: 1.1, maxWidth: 720 }}>
            AI projects delivered.
          </h2>
        </div>
        <div style={{ borderTop: "1px solid var(--rule)" }}>
          {PROJECTS.map((p, i) => (
            <div key={i} style={{
              display: "grid",
              gridTemplateColumns: "120px 280px 1fr 160px",
              gap: 32, padding: "28px 0",
              borderBottom: "1px solid var(--rule)",
              alignItems: "start",
            }}>
              <div className="mono num" style={{ fontSize: 12, color: "var(--muted)", letterSpacing: ".04em", paddingTop: 6 }}>{p.year}</div>
              <div className="serif" style={{ fontSize: 20, letterSpacing: "-0.015em", lineHeight: 1.3 }}>{p.title}</div>
              <div style={{ fontSize: 14, lineHeight: 1.6, color: "var(--muted)", maxWidth: 560 }}>{p.summary}</div>
              <div style={{ display: "flex", flexDirection: "column", gap: 6, alignItems: "flex-end" }}>
                {p.tags.map(t => (
                  <span key={t} className="mono" style={{ fontSize: 10.5, color: "var(--muted)", textTransform: "uppercase", letterSpacing: ".1em" }}>— {t}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* STACK */}
      <section style={{ borderTop: "1px solid var(--rule)", background: "var(--surface)" }}>
        <div style={{ ...container, padding: "80px 48px" }}>
          <div style={twoCol}>
            <div>
              <div className="eyebrow" style={{ marginBottom: 20 }}>Technology</div>
              <div style={{ fontSize: 13, color: "var(--muted)", lineHeight: 1.6, maxWidth: 180 }}>
                A short list of tools used daily. The judgement about when to use which is the actual work.
              </div>
            </div>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 40 }}>
              {STACK.map((c) => (
                <div key={c.group}>
                  <div className="mono" style={{ fontSize: 11, color: "var(--muted)", textTransform: "uppercase", letterSpacing: ".1em", marginBottom: 16, paddingBottom: 12, borderBottom: "1px solid var(--rule)" }}>
                    {c.group}
                  </div>
                  <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: 10 }}>
                    {c.items.map(it => (
                      <li key={it} style={{ fontSize: 14 }}>{it}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ ...container, padding: "96px 48px", borderTop: "1px solid var(--rule)" }}>
        <div style={twoCol}>
          <div className="eyebrow">Get started</div>
          <div>
            <h2 className="serif" style={{ fontSize: 48, letterSpacing: "-0.025em", lineHeight: 1.05, maxWidth: 900, marginBottom: 32 }}>
              A thirty-minute readiness assessment, no deck required.
            </h2>
            <p style={{ fontSize: 17, lineHeight: 1.55, color: "var(--muted)", maxWidth: 620, marginBottom: 32 }}>
              We evaluate your data, identify the highest-value AI opportunities, and outline a clear implementation roadmap. No obligations.
            </p>
            <div style={{ display: "flex", gap: 12 }}>
              <button id="ai-cta-bottom" className="btn-primary" style={{ cursor: "pointer" }} onClick={() => setModalOpen(true)}>Request assessment →</button>
              <a className="btn-ghost" href="tel:+971551763478">+971 55 176 3478</a>
            </div>
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}
