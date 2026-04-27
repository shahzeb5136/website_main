"use client";

import React from "react";
import Link from "next/link";

const nav = [
  { label: "Consultancy",     href: "/consultancy" },
  { label: "AI Integration",  href: "/ai-integration" },
  { label: "Open Projects",   href: "/open-projects" },
  { label: "Contact",         href: "/#contact" },
];

export default function SiteLayout({ children }: { children: React.ReactNode }) {
  return (
    <div style={{ minHeight: "100vh", background: "var(--bg)", color: "var(--ink)" }}>
      <header style={{ borderBottom: "1px solid var(--rule)", background: "var(--bg)" }}>
        <div
          style={{
            maxWidth: 1240,
            margin: "0 auto",
            padding: "20px 48px",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <div style={{ display: "flex", alignItems: "baseline", gap: 14 }}>
            <Link href="/" className="serif" style={{ fontSize: 22, letterSpacing: "-0.02em" }}>
              Shahzeb Yousuf
            </Link>
            <div style={{ width: 1, height: 14, background: "var(--rule)" }} />
            <div className="eyebrow">Data Science · ML Consultancy</div>
          </div>
          <nav style={{ display: "flex", gap: 32, fontSize: 13 }}>
            {nav.map((n) => (
              <Link key={n.label} href={n.href} className="link">
                {n.label}
              </Link>
            ))}
          </nav>
        </div>
      </header>

      <main>{children}</main>

      <footer style={{ borderTop: "1px solid var(--rule)", padding: "32px 48px", background: "var(--surface)" }}>
        <div
          style={{
            maxWidth: 1240,
            margin: "0 auto",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            fontSize: 12,
            color: "var(--muted)",
          }}
        >
          <div>© {new Date().getFullYear()} Shahzeb Yousuf · Practice established 2016</div>
          <div style={{ display: "flex", gap: 24 }}>
            <a className="link" href="https://github.com/shahzeb5136" target="_blank" rel="noreferrer">GitHub</a>
            <a className="link" href="https://www.linkedin.com/in/shahzeb-yousuf-56b648158/" target="_blank" rel="noreferrer">LinkedIn</a>
            <a className="link" href="mailto:y.shahzeb@gmail.com">Email</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
