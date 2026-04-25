"use client";

import React from "react";
import Link from "next/link";
import { useParams } from "next/navigation";
import SiteLayout from "@/components/site-layout";

const streamlitUrls: Record<string, string> = {
  "global-markets": "https://globalmarketsreport-shah.streamlit.app/",
  "RUL-analyzer":   "https://rulnuclear-shah.streamlit.app/",
  "data-quality":   "",
};

const container: React.CSSProperties = { maxWidth: 1240, margin: "0 auto", padding: "0 48px" };

export default function OpenProjectDetail() {
  const params = useParams();
  const projectId = (params?.id as string) || "";
  const url = streamlitUrls[projectId] || "";
  const hasUrl = !!url;
  const title = projectId.replace(/-/g, " ");

  return (
    <SiteLayout>
      <section style={{ ...container, padding: "64px 48px 24px" }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline" }}>
          <Link href="/open-projects" className="link" style={{ fontSize: 13, color: "var(--muted)" }}>
            ← Back to Open Projects
          </Link>
          {hasUrl && (
            <a href={url} target="_blank" rel="noreferrer" className="link" style={{ fontSize: 13 }}>
              Open in new tab ↗
            </a>
          )}
        </div>
        <h1 className="serif" style={{ fontSize: 44, letterSpacing: "-0.025em", marginTop: 32, textTransform: "capitalize" }}>
          {title}
        </h1>
      </section>

      <section style={{ ...container, padding: "0 48px 80px" }}>
        <div style={{
          border: "1px solid var(--rule)",
          background: "var(--surface)",
          minHeight: 720,
          position: "relative",
          overflow: "hidden",
        }}>
          {hasUrl ? (
            <iframe
              src={`${url}?embed=true`}
              style={{ position: "absolute", inset: 0, width: "100%", height: "100%", border: 0 }}
              title={`Application — ${projectId}`}
              allowFullScreen
              sandbox="allow-scripts allow-same-origin allow-popups allow-forms"
            />
          ) : (
            <div style={{ padding: 64, textAlign: "center" }}>
              <div className="mono" style={{ fontSize: 11, color: "var(--muted)", textTransform: "uppercase", letterSpacing: ".1em", marginBottom: 16 }}>Placeholder</div>
              <div className="serif" style={{ fontSize: 24, marginBottom: 12 }}>Application not yet published.</div>
              <div style={{ fontSize: 14, color: "var(--muted)", maxWidth: 420, margin: "0 auto" }}>
                Update <code className="mono">streamlitUrls</code> in <code className="mono">src/app/open-projects/[id]/page.tsx</code> with the live Streamlit URL.
              </div>
            </div>
          )}
        </div>
      </section>
    </SiteLayout>
  );
}
