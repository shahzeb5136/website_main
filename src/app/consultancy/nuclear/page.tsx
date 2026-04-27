import React from "react";
import SiteLayout from "@/components/site-layout";
import CaseStudyPage from "@/components/case-study";

export default function NuclearPage() {
  return (
    <SiteLayout>
      <CaseStudyPage
        parentHref="/consultancy"
        parentLabel="Consultancy"
        sector="Nuclear Energy"
        headline="Operational analytics for the first nuclear plant in the Arab world."
        lede="Embedded data science and engineering at ENEC — Emirates Nuclear Energy Corporation — supporting the Barakah Nuclear Energy Plant. Four APR-1400 units, 5.6 GW combined capacity, regulated to FANR and international nuclear standards."
        client={{ name: "Emirates Nuclear Energy Corporation (ENEC)", role: "Data Science Consultancy" }}
        metrics={[
          { value: "5.6 GW", label: "Combined plant capacity supported" },
          { value: "4",       label: "Reactor units covered" },
          { value: "25+",     label: "Dashboards & regulatory reports" },
        ]}
        sections={[
          {
            key: "context",
            title: "Context",
            body: "ENEC owns and operates the UAE's civilian nuclear programme. Barakah, in Al Dhafra, is the Arab world's first nuclear plant — eventually providing up to a quarter of the country's electricity. Operational data spans reactor telemetry, maintenance logs, safety events, and regulatory submissions. My brief was to turn that data into something the plant's leadership and FANR could actually govern.",
          },
        ]}
        capabilities={[
          "Real-time reactor performance monitoring dashboards",
          "Automated safety and compliance reporting aligned to FANR",
          "Predictive maintenance ML models for critical equipment",
          "Enterprise data warehousing and pipeline engineering",
          "Cross-unit performance benchmarking analytics",
          "Executive KPI dashboards for strategic decision-making",
          "Data quality frameworks and governance implementation",
          "Anomaly detection in operational sensor data",
        ]}
        projects={[
          { title: "Operational Analytics Platform",
            summary: "Enterprise analytics infrastructure for reactor performance, safety metrics, and maintenance scheduling across all four Barakah units.",
            tags: ["Real-time", "Power BI"] },
          { title: "Safety & Compliance Data Systems",
            summary: "Automated collection, validation, and reporting of safety metrics aligned with FANR regulatory requirements and international standards.",
            tags: ["FANR", "Regulated"] },
          { title: "Predictive Maintenance Models",
            summary: "ML for early detection of anomalies in critical equipment telemetry, reducing unplanned downtime and surfacing failure precursors for engineers.",
            tags: ["ML", "Anomaly Detection"] },
          { title: "Enterprise Data Standardisation",
            summary: "Unified data models, data dictionaries, and governance frameworks across fragmented operational datasets.",
            tags: ["Governance", "Data Quality"] },
        ]}
      />
    </SiteLayout>
  );
}
