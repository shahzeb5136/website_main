"use client";
import React, { useEffect, useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import SiteLayout from "@/components/site-layout";
import ContactModal from "@/components/contact-modal";
import { useReveal, useCountUp, HeroHeadline } from "@/components/animations";

/* ─────────── DATA ─────────── */
const CLIENTS = [
  { initials: "EN", logoUrl: "/logos/enec.jpg",     name: "ENEC",                       sector: "Nuclear Energy",     href: "/consultancy/nuclear" },
  { initials: "NM", logoUrl: "/logos/nmc.png",      name: "NMC Healthcare",             sector: "Healthcare",         href: "/consultancy/healthcare" },
  { initials: "DH", logoUrl: "/logos/dha.jpg",      name: "DHA",                        sector: "Government Health",  href: "/consultancy/gov-health" },
  { initials: "DA", logoUrl: "/logos/doh.jpg",      name: "Department of Health · AD",  sector: "Government Health",  href: "/consultancy/gov-health" },
  { initials: "M",  logoUrl: "/logos/milliman.jpg", name: "Milliman",                   sector: "Actuarial",          href: "/consultancy/actuarial" },
  { initials: "T",  logoUrl: "/logos/taha.jpg",     name: "Taha Actuaries",             sector: "Actuarial",          href: "/consultancy/actuarial" },
  { initials: "R",  logoUrl: "/logos/rasan.jpg",    name: "Rasan IT",                   sector: "FinTech · KSA",      href: "/consultancy/fintech" },
];

const PRACTICE = [
  {
    no: "01", name: "Strategic Advisory",
    body: "Board-level guidance on data strategy, architecture, and model governance for regulated industries.",
    sub: "Scope · Strategic", href: "/consultancy",
  },
  {
    no: "02", name: "AI & ML Delivery",
    body: "End-to-end builds — LLMs, NLP pipelines, predictive models — deployed with MLOps and proper monitoring.",
    sub: "Scope · Delivery", href: "/ai-integration",
  },
  {
    no: "03", name: "Team Leadership",
    body: "Embedded Principal role. Hire, mentor, and ship. Translate between executives and engineers.",
    sub: "Scope · Embedded", href: "/open-projects",
  },
];

const ENGAGEMENTS = [
  {
    initials: "EN", logoUrl: "/logos/enec.jpg", org: "ENEC", role: "Data Science Consultant", href: "/consultancy/nuclear",
    summary: "Operational analytics for the Barakah nuclear programme. Predictive maintenance signal engineering and regulatory reporting.",
    tags: ["Energy", "Regulated"],
  },
  {
    initials: "NM", logoUrl: "/logos/nmc.png", org: "NMC Healthcare", role: "Principal Data Scientist", href: "/consultancy/healthcare",
    summary: "Migration of a fragmented healthcare estate to Snowflake. Standardised claims, clinical and finance datasets; ML for length-of-stay and readmission.",
    tags: ["Healthcare", "Cloud"],
  },
  {
    initials: "DH", logoUrl: "/logos/dha.jpg", org: "DHA & DoH Abu Dhabi", role: "Consulting Data Scientist", href: "/consultancy/gov-health",
    summary: "Utilization analytics for self-insured government programmes. Tariff negotiation support and electronic audit of claims.",
    tags: ["Government", "Health"],
  },
  {
    initials: "M", logoUrl: "/logos/milliman.jpg", org: "Milliman · Taha Actuaries", role: "ML & Actuarial Consultant", href: "/consultancy/actuarial",
    summary: "Advanced GLM reserving, change-point detection on cost series, ARIMA trend work, predictive pricing for GCC insurers.",
    tags: ["Actuarial", "Insurance"],
  },
  {
    initials: "R", logoUrl: "/logos/rasan.jpg", org: "Rasan IT (KSA)", role: "Principal Data Scientist", href: "/consultancy/fintech",
    summary: "On-prem LLM and vision execution for FinTech. National KSA FinTech competition winner.",
    tags: ["FinTech", "LLMs"],
  },
];

const STAGES = [
  { week: "Wk 0 — 1",   name: "Discovery", body: "Stakeholder calls, system access, problem framing. No deliverable beyond a written brief.", w: "25%" },
  { week: "Wk 1 — 4",   name: "Diagnosis", body: "Data audit, baseline metrics, options memo with recommended path and risks.", w: "60%" },
  { week: "Wk 4 — 14",  name: "Build",     body: "Model, pipeline and dashboards developed in-codebase with reviews at every milestone.", w: "100%" },
  { week: "Wk 12 — 18", name: "Deploy",    body: "MLOps, monitoring, SLOs, governance documentation. Cutover with the client engineering team.", w: "75%" },
  { week: "Wk 18 +",    name: "Handover",  body: "Runbooks, training, and a final review. Optional retainer for the first six months in production.", w: "35%" },
];

const SECTOR_MIX = [
  { lbl: "Healthcare",       w: "30%", pct: "30%" },
  { lbl: "Insurance",        w: "22%", pct: "22%" },
  { lbl: "Government",       w: "18%", pct: "18%" },
  { lbl: "Energy & Nuclear", w: "14%", pct: "14%" },
  { lbl: "FinTech",          w: "10%", pct: "10%" },
  { lbl: "Other",            w: "6%",  pct: "6%"  },
];

const CAPABILITIES: { group: string; items: { label: string; yrs: string; w: string }[] }[] = [
  { group: "Languages", items: [
    { label: "Python",  yrs: "10y", w: "95%" },
    { label: "SQL",     yrs: "10y", w: "92%" },
    { label: "R",       yrs: "7y",  w: "70%" },
    { label: "Scala",   yrs: "4y",  w: "50%" },
  ]},
  { group: "ML & AI", items: [
    { label: "LLMs · RAG · fine-tuning", yrs: "3y", w: "90%" },
    { label: "NLP",                      yrs: "8y", w: "88%" },
    { label: "Time-series",              yrs: "9y", w: "80%" },
    { label: "Computer vision",          yrs: "5y", w: "65%" },
  ]},
  { group: "Platforms", items: [
    { label: "Snowflake",   yrs: "6y", w: "92%" },
    { label: "Databricks",  yrs: "5y", w: "80%" },
    { label: "Azure · AWS", yrs: "8y", w: "78%" },
    { label: "On-prem GPU", yrs: "3y", w: "60%" },
  ]},
  { group: "Analytics", items: [
    { label: "Power BI", yrs: "8y", w: "90%" },
    { label: "Tableau",  yrs: "6y", w: "75%" },
    { label: "Qlik",     yrs: "4y", w: "60%" },
    { label: "Looker",   yrs: "3y", w: "55%" },
  ]},
];

const TICKER = [
  "Nuclear Energy", "Sovereign Healthcare", "Actuarial Reserving", "On-prem LLMs",
  "Snowflake Migration", "Predictive Maintenance", "Tariff Negotiation", "Computer Vision", "RAG Pipelines",
];

/* ─────────── COMPONENTS ─────────── */

function LogoTile({ initials, logoUrl, size = 56 }: { initials: string; logoUrl?: string; size?: number }) {
  return (
    <div className="logo-tile" style={{ width: size, height: size, position: "relative", overflow: "hidden" }}>
      {logoUrl ? (
        <Image 
          src={logoUrl} 
          alt={`${initials} Logo`}
          fill
          style={{ objectFit: "contain", padding: "8px" }} 
        />
      ) : (
        <>
          <span className="mark">{initials}</span>
          <span className="ph-tag">logo</span>
        </>
      )}
    </div>
  );
}

function Stat({ v, l, target, bar, suffix = "" }: { v: string; l: string; target: number; bar: string; suffix?: string }) {
  const numRef = useCountUp(target, suffix);
  const { ref, seen } = useReveal<HTMLDivElement>();
  return (
    <div ref={ref} className={`stat ${seen ? "in" : ""}`} style={{ ["--bar" as string]: bar } as React.CSSProperties}>
      <div className="serif num stat-v"><span ref={numRef}>0</span></div>
      <div className="stat-l">{l}</div>
    </div>
  );
}

function MixRow({ lbl, w, pct }: { lbl: string; w: string; pct: string }) {
  const { ref, seen } = useReveal<HTMLDivElement>();
  return (
    <div ref={ref} className={`mix-row ${seen ? "in" : ""}`} style={{ ["--w" as string]: w } as React.CSSProperties}>
      <div className="lbl">{lbl}</div>
      <div className="barwrap"><div className="bar" /></div>
      <div className="pct">{pct}</div>
    </div>
  );
}

function CapItem({ label, yrs, w }: { label: string; yrs: string; w: string }) {
  const { ref, seen } = useReveal<HTMLDivElement>();
  return (
    <div ref={ref} className={`cap-item ${seen ? "in" : ""}`} style={{ ["--w" as string]: w } as React.CSSProperties}>
      <div className="row"><span className="label">{label}</span><span className="yrs">{yrs}</span></div>
      <div className="gauge"><span className="fill" /></div>
    </div>
  );
}

function LineChart() {
  const lineRef = useRef<SVGPathElement | null>(null);
  const areaRef = useRef<SVGPathElement | null>(null);
  const svgRef  = useRef<SVGSVGElement  | null>(null);
  const [hover, setHover] = useState<{ x: number; y: number; year: number; val: number } | null>(null);

  const data = [
    { x: 2019, y: 1 }, { x: 2020, y: 2 }, { x: 2021, y: 3 }, { x: 2022, y: 4 },
    { x: 2023, y: 3 }, { x: 2024, y: 5 }, { x: 2025, y: 4 }, { x: 2026, y: 5 },
  ];
  const W = 600, H = 220, padL = 32, padR = 12, padT = 20, padB = 28;
  const innerW = W - padL - padR, innerH = H - padT - padB, yMax = 6;
  const xs = data.map(d => d.x);
  const xMin = Math.min(...xs), xMax = Math.max(...xs);
  const sx = (x: number) => padL + ((x - xMin) / (xMax - xMin)) * innerW;
  const sy = (y: number) => padT + (1 - y / yMax) * innerH;

  let d = "";
  data.forEach((p, i) => { d += `${i === 0 ? "M" : "L"}${sx(p.x).toFixed(1)},${sy(p.y).toFixed(1)} `; });
  const areaD = d.trim() + ` L${sx(xMax).toFixed(1)},${(padT + innerH).toFixed(1)} L${sx(xMin).toFixed(1)},${(padT + innerH).toFixed(1)} Z`;

  useEffect(() => {
    const line = lineRef.current; const area = areaRef.current; if (!line || !area) return;
    const len = line.getTotalLength();
    line.style.strokeDasharray  = String(len);
    line.style.strokeDashoffset = String(len);
    line.style.transition = "stroke-dashoffset 1.8s cubic-bezier(.2,.7,.2,1)";
    area.style.opacity = "0";
    area.style.transition = "opacity 1.4s ease 1.1s";
    const io = new IntersectionObserver(([e]) => {
      if (!e.isIntersecting) return;
      line.style.strokeDashoffset = "0";
      area.style.opacity = "1";
      io.disconnect();
    }, { threshold: 0.4 });
    io.observe(line);
    return () => io.disconnect();
  }, []);

  const onMove = (ev: React.MouseEvent<SVGSVGElement>) => {
    const svg = svgRef.current; if (!svg) return;
    const r = svg.getBoundingClientRect();
    const xPx = ((ev.clientX - r.left) / r.width) * W;
    let nearest = data[0], best = Infinity;
    data.forEach(d => {
      const dist = Math.abs(sx(d.x) - xPx);
      if (dist < best) { best = dist; nearest = d; }
    });
    setHover({ x: sx(nearest.x), y: sy(nearest.y), year: nearest.x, val: nearest.y });
  };

  return (
    <>
      <svg ref={svgRef} viewBox={`0 0 ${W} ${H}`} preserveAspectRatio="none" onMouseMove={onMove} onMouseLeave={() => setHover(null)} className="line-svg">
        <g stroke="#d9d1bf" strokeWidth={1}>
          <line x1={0} y1={40}  x2={W} y2={40}  strokeDasharray="2 4" />
          <line x1={0} y1={100} x2={W} y2={100} strokeDasharray="2 4" />
          <line x1={0} y1={160} x2={W} y2={160} strokeDasharray="2 4" />
          <line x1={0} y1={200} x2={W} y2={200} />
        </g>
        <g fontFamily="JetBrains Mono, monospace" fontSize={10} fill="#6b6558">
          <text x={0} y={36}>6</text>
          <text x={0} y={96}>4</text>
          <text x={0} y={156}>2</text>
        </g>
        <path ref={areaRef} fill="rgba(31,42,68,0.08)" d={areaD} />
        <path ref={lineRef} fill="none" stroke="#1f2a44" strokeWidth={1.5} d={d.trim()} />
        {data.map((p, i) => (
          <circle key={i} cx={sx(p.x)} cy={sy(p.y)} r={3} fill="#fbf8f2" stroke="#1f2a44" strokeWidth={1.5} />
        ))}
        <g fontFamily="JetBrains Mono, monospace" fontSize={10} fill="#6b6558">
          {xs.map(x => <text key={x} x={sx(x)} y={H - 6} textAnchor="middle">{x}</text>)}
        </g>
        {hover && (
          <>
            <line x1={hover.x} y1={0} x2={hover.x} y2={200} stroke="#1f2a44" strokeWidth={1} strokeDasharray="2 3" />
            <g transform={`translate(${Math.min(W - 124, Math.max(0, hover.x - 60))}, ${Math.max(0, hover.y - 50)})`}>
              <rect x={0} y={0} width={120} height={38} fill="#fbf8f2" stroke="#1f2a44" strokeWidth={1} />
              <text x={10} y={16} fontFamily="JetBrains Mono, monospace" fontSize={11} fill="#6b6558">{hover.year}</text>
              <text x={10} y={32} fontFamily="Source Serif 4, serif"   fontSize={14} fill="#1a1814">{hover.val} concurrent</text>
            </g>
          </>
        )}
      </svg>
      <div className="legend">
        <span className="legend-pill"><span className="sw" style={{ background: "#1f2a44" }} /> Concurrent engagements</span>
        <span className="legend-pill"><span className="sw" style={{ background: "rgba(31,42,68,0.2)" }} /> Capacity envelope</span>
      </div>
    </>
  );
}

/* ─────────── PAGE ─────────── */
const container: React.CSSProperties = { maxWidth: 1240, margin: "0 auto", padding: "0 48px" };
const twoCol: React.CSSProperties = { display: "grid", gridTemplateColumns: "200px 1fr", gap: 60 };

export default function HomePage() {
  const [modalOpen, setModalOpen] = useState(false);
  const stages = useReveal<HTMLDivElement>();

  return (
    <SiteLayout>
      {/* HERO */}
      <section style={{ ...container, padding: "100px 48px 80px", position: "relative", overflow: "hidden" }}>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 360px", gap: 80, alignItems: "start" }}>
          <div>
            <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 32, opacity: 0, animation: "heroFade 1s ease .2s forwards" }}>
              <span className="dot live" />
              <span className="eyebrow">Available Q3 2026 · Based in Abu Dhabi</span>
            </div>
            <HeroHeadline text="Data and AI consultancy for organisations where the stakes are real." />
            <p className="hero-lead">
              Senior data science and AI consultancy across nuclear energy, healthcare, government health programmes, and insurance in the GCC. We lead teams, ship production systems, and leave behind documentation that survives handover.
            </p>
            <div className="hero-cta-row">
              <button className="btn-primary" onClick={() => setModalOpen(true)} style={{ cursor: "pointer" }}>
                Arrange an introduction <span className="arrow">→</span>
              </button>
              <Link className="btn-ghost" href="/consultancy">Consultancy</Link>
              <Link className="btn-ghost" href="/ai-integration">AI Integration</Link>
              <Link className="btn-ghost" href="/open-projects">Open Projects</Link>
            </div>
          </div>
          <div style={{ opacity: 0, animation: "heroFade 1.2s ease .6s forwards" }}>
            <div className="portrait-wrap">
              <Image src="/main_pic.jpg" alt="Shahzeb Yousuf Portrait" fill style={{ objectFit: "cover" }} priority />
            </div>
            <div className="mono" style={{ fontSize: 11, color: "var(--muted)", marginTop: 10, letterSpacing: ".06em" }}>
              Shahzeb Yousuf, Abu Dhabi, 2026
            </div>
          </div>
        </div>

        <div className="hero-ticker" aria-hidden="true">
          <div className="track">
            {[...TICKER, ...TICKER].map((t, i) => (
              <React.Fragment key={i}>
                <span>{t}</span><span className="dotsep">•</span>
              </React.Fragment>
            ))}
          </div>
        </div>
      </section>

      {/* STATS */}
      <section style={{ borderTop: "1px solid var(--rule)", borderBottom: "1px solid var(--rule)", background: "var(--surface)" }}>
        <div style={{ ...container, padding: "36px 48px", display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 48 }}>
          <Stat v="10"  l="Years in practice"               target={10} bar="80%" />
          <Stat v="7"   l="Sovereign & enterprise clients"  target={7}  bar="55%" />
          <Stat v="20+" l="Production engagements"          target={20} bar="95%" suffix="+" />
          <Stat v="3"   l="Regulated sectors"               target={3}  bar="40%" />
        </div>
      </section>

      {/* CLIENTS — MARQUEE */}
      <section style={{ padding: "64px 0 56px", borderBottom: "1px solid var(--rule)" }}>
        <div style={{ ...twoCol, maxWidth: 1240, margin: "0 auto 28px", padding: "0 48px" }}>
          <div className="eyebrow">Selected Clients</div>
          <div style={{ fontSize: 13, color: "var(--muted)", maxWidth: 560, lineHeight: 1.6 }}>
            Engagements listed with permission. Detail on individual programmes available under NDA upon request.
          </div>
        </div>
        <div className="marquee" aria-label="Client logos">
          <div className="marquee-track">
            {[...CLIENTS, ...CLIENTS].map((c, i) => (
              <Link key={i} href={c.href} className="client-cell">
                <LogoTile initials={c.initials} logoUrl={c.logoUrl} />
                <div>
                  <div className="client-name">{c.name}</div>
                  <div className="client-sector">{c.sector}</div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* PRACTICE */}
      <section id="practice" style={{ ...container, padding: "80px 48px", borderTop: "1px solid var(--rule)" }}>
        <div style={{ ...twoCol, marginBottom: 48 }}>
          <div className="eyebrow">Services</div>
          <h2 className="serif" style={{ fontSize: 40, letterSpacing: "-0.02em", lineHeight: 1.1, maxWidth: 720 }}>
            Three ways we engage. Scoped, accountable, and priced transparently.
          </h2>
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", borderTop: "1px solid var(--rule)" }}>
          {PRACTICE.map((p, i) => (
            <Link key={p.no} href={p.href} className="practice-card" style={{ borderRight: i < 2 ? "1px solid var(--rule)" : "none", borderBottom: "1px solid var(--rule)" }}>
              <div className="mono num" style={{ fontSize: 11, color: "var(--muted)", marginBottom: 28, letterSpacing: ".1em" }}>{p.no} / 03</div>
              <div className="serif p-name">{p.name}</div>
              <p style={{ fontSize: 14.5, lineHeight: 1.6, color: "var(--muted)", marginBottom: 24 }}>{p.body}</p>
              <div className="mono" style={{ fontSize: 11, textTransform: "uppercase", letterSpacing: ".1em" }}>{p.sub}</div>
            </Link>
          ))}
        </div>
      </section>

      {/* PROCESS + CHARTS */}
      <section id="process" style={{ background: "var(--surface)", borderTop: "1px solid var(--rule)", borderBottom: "1px solid var(--rule)", padding: "96px 0" }}>
        <div style={container}>
          <div style={{ ...twoCol, marginBottom: 56 }}>
            <div className="eyebrow">How we engage</div>
            <div>
              <h2 className="serif" style={{ fontSize: 40, letterSpacing: "-0.02em", lineHeight: 1.1, maxWidth: 720 }}>
                A predictable five-stage path from first call to handover.
              </h2>
              <p style={{ fontSize: 14.5, color: "var(--muted)", marginTop: 16, maxWidth: 640, lineHeight: 1.6 }}>
                Each engagement follows the same structure. Durations flex with scope; deliverables and decision gates do not.
              </p>
            </div>
          </div>

          <div ref={stages.ref} className={`stages ${stages.seen ? "in" : ""}`}>
            <div className="stages-axis" />
            <div className="stages-axis-fill" />
            <div className="stages-row">
              {STAGES.map((s) => (
                <div key={s.name} className="stage" style={{ ["--w" as string]: s.w } as React.CSSProperties}>
                  <div className="week">{s.week}</div>
                  <span className="node" />
                  <h4>{s.name}</h4>
                  <p>{s.body}</p>
                  <div className="dur" />
                </div>
              ))}
            </div>
          </div>

          <div className="charts-row">
            <div className="chart-card">
              <div className="h">
                <div className="title">Engagements by sector</div>
                <div className="meta">2018 — 2026 · n = 23</div>
              </div>
              {SECTOR_MIX.map(m => <MixRow key={m.lbl} {...m} />)}
            </div>

            <div className="chart-card line-card">
              <div className="h">
                <div className="title">Engagement load · 2019 — 2026</div>
                <div className="meta">Concurrent · monthly</div>
              </div>
              <LineChart />
            </div>
          </div>
        </div>
      </section>

      {/* ENGAGEMENTS */}
      <section id="engagements" style={{ ...container, padding: "80px 48px" }}>
        <div style={{ ...twoCol, marginBottom: 48 }}>
          <div className="eyebrow">Selected Clients</div>
          <h2 className="serif" style={{ fontSize: 40, letterSpacing: "-0.02em", lineHeight: 1.1, maxWidth: 720 }}>
            Organisations we&apos;ve served.
          </h2>
        </div>
        <div style={{ borderTop: "1px solid var(--rule)" }}>
          {ENGAGEMENTS.map((e, i) => (
            <Link key={i} href={e.href} className="eng-row">
              <LogoTile initials={e.initials} logoUrl={e.logoUrl} size={64} />
              <div>
                <div className="serif eng-org">{e.org}</div>
                <div className="eng-role">{e.role}</div>
              </div>
              <div className="eng-summary">{e.summary}</div>
              <div className="eng-tags">
                {e.tags.map(t => <span key={t} className="mono">— {t}</span>)}
              </div>
              <div className="eng-arrow">→</div>
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
              <div style={{ fontSize: 13, color: "var(--muted)", lineHeight: 1.6, maxWidth: 200 }}>
                Tools used daily. The list matters less than the judgement about when to use which. Hover any item to see depth.
              </div>
            </div>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 40 }}>
              {CAPABILITIES.map(c => (
                <div key={c.group}>
                  <div className="mono cap-h">{c.group}</div>
                  {c.items.map(it => <CapItem key={it.label} {...it} />)}
                </div>
              ))}
            </div>
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
          </div>
        </div>
      </section>

      <ContactModal isOpen={modalOpen} onClose={() => setModalOpen(false)} subject="Introduction Enquiry" />
    </SiteLayout>
  );
}
