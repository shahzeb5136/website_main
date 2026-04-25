import React from "react";
import SiteLayout from "@/components/site-layout";
import CaseStudyPage from "@/components/case-study";

export default function GovHealthPage() {
  return (
    <SiteLayout>
      <CaseStudyPage
        parentHref="/consultancy"
        parentLabel="Consultancy"
        sector="Government Health Programmes"
        headline="Analytics and audit for self-insured government health schemes."
        lede="Consulting data scientist for the Dubai Health Authority and the Department of Health, Abu Dhabi. Utilization analysis, electronic audit of claims, DRG reconciliation, and evidence for tariff negotiations — work that affects hundreds of thousands of beneficiaries."
        client={{ name: "DHA · DoH Abu Dhabi", role: "Consulting Data Scientist", years: "2019 — 2022" }}
        metrics={[
          { value: "100k+", label: "Beneficiaries affected by policy work" },
          { value: "M+", label: "Claims reviewed" },
          { value: "10%+", label: "Manual review reduction via audit pipeline" },
          { value: "2", label: "Government authorities served" },
        ]}
        sections={[
          { key: "context", title: "Context",
            body: "Self-insured programmes like DHA's and DoH's Thiqa cover large populations and carry large fiscal exposure. Utilization, pricing, and provider behaviour all need continuous, evidence-based scrutiny. My engagements focused on putting the data and automated audit infrastructure in place to make that scrutiny routine rather than episodic." },
        ]}
        capabilities={[
          "Utilization reports for self-insured government programmes",
          "Cost driver analyses supporting tariff negotiations",
          "Electronic audits of claims at population scale",
          "DRG data analysis and reconciliation",
          "ML-driven anomaly detection for billing irregularities",
          "Executive reporting for health policy leadership",
        ]}
        projects={[
          { year: "2019 — 2021", title: "DHA Self-Insured Programmes",
            summary: "Utilization reports and cost driver analyses enabling data-driven adjustments to programmes covering hundreds of thousands of beneficiaries.",
            tags: ["Utilization", "Policy"] },
          { year: "2020 — 2022", title: "DoH Thiqa Audit",
            summary: "Audit of the Thiqa programme. Evidence for tariff structure optimisation; material expenditure impact.",
            tags: ["Audit", "Tariffs"] },
          { year: "2019 — 2021", title: "Electronic Audit Pipeline",
            summary: "Automated anomaly detection and electronic audits on large-scale claims data. Rule-based and ML systems flagging irregularities; manual review time reduced by over 10%.",
            tags: ["Automation", "ML"] },
          { year: "2018 — 2020", title: "DRG Reconciliation",
            summary: "Reconciliation system for Diagnosis-Related Group claims. Standardised pricing methodology across providers.",
            tags: ["DRG", "Pricing"] },
        ]}
      />
    </SiteLayout>
  );
}
