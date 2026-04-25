import React from "react";
import SiteLayout from "@/components/site-layout";
import CaseStudyPage from "@/components/case-study";

export default function ActuarialPage() {
  return (
    <SiteLayout>
      <CaseStudyPage
        parentHref="/consultancy"
        parentLabel="Consultancy"
        sector="Insurance & Actuarial"
        headline="ML-assisted actuarial work for GCC insurers."
        lede="Consulting with Milliman and Taha Actuaries on medical pricing, reserving, and electronic audit. Advanced GLM methods, change-point detection on cost series, ARIMA trend work, and predictive pricing — actuarial craft with modern ML where it genuinely helps."
        client={{ name: "Milliman · Taha Actuaries", role: "ML & Actuarial Consultant", years: "2020 — 2023" }}
        metrics={[
          { value: "GCC", label: "Regional scope" },
          { value: "GLM", label: "Core reserving methodology" },
          { value: "IBNR", label: "Projected with ML-assisted methods" },
          { value: "C-level", label: "Audience for strategic output" },
        ]}
        sections={[
          { key: "phase1", title: "Data Preparation",
            body: "Consolidating internal claims databases into a consistent actuarial data mart. High fidelity is a precondition for everything downstream — pricing, reserving, treaty work." },
          { key: "phase2", title: "Pricing Models",
            body: "Generalised linear models for technical pricing and pure premium estimation across health lines. Validation and back-testing alongside traditional actuarial frameworks." },
          { key: "phase3", title: "Reserving & Trending",
            body: "Chain Ladder and Bornhuetter-Ferguson coupled with ML-assisted trend detection. IBNR projections with explicit uncertainty reporting." },
          { key: "phase4", title: "Audits & Control",
            body: "Automated rule-based and ML anomaly detection to identify irregular claims and reduce fraud exposure." },
          { key: "phase5", title: "Strategic Impact",
            body: "Board-level intelligence on tariff negotiations, stop-loss treaties, and reinsurance optimisation strategies." },
        ]}
        capabilities={[
          "Advanced GLM methods for reserving",
          "Change-point detection on cost series",
          "ARIMA trend modelling",
          "Predictive pricing for health insurance",
          "Electronic audit of claims for irregularities",
          "Reinsurance and treaty structuring support",
        ]}
      />
    </SiteLayout>
  );
}
