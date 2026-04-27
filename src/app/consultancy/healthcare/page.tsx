import React from "react";
import SiteLayout from "@/components/site-layout";
import CaseStudyPage from "@/components/case-study";

export default function HealthcarePage() {
  return (
    <SiteLayout>
      <CaseStudyPage
        parentHref="/consultancy"
        parentLabel="Consultancy"
        sector="Healthcare"
        headline="Modernising the data estate of the UAE's largest private healthcare provider."
        lede="Principal Data Scientist at NMC Healthcare. Led the migration from a fragmented legacy estate to Snowflake, standardised clinical and claims data, and put ML into production for length-of-stay and readmission prediction."
        client={{ name: "NMC Healthcare", role: "Data Science & Analytics Consultancy" }}
        metrics={[
          { value: "10+", label: "Hospitals in scope" },
          { value: "Snowflake", label: "Target cloud platform" },
          { value: "M+", label: "Patient records standardised" },
        ]}
        sections={[
          { key: "context", title: "Context",
            body: "NMC operates the UAE's largest private hospital network. Decades of acquisitions had left clinical, claims, and finance data spread across incompatible systems, with little common vocabulary between them. The brief: produce one estate the board could govern — and make it usable for operational analytics and clinical ML." },
        ]}
        capabilities={[
          "Large-scale migration of healthcare datasets to Snowflake",
          "Clinical and claims data standardisation across hospital systems",
          "ML models for length-of-stay and readmission risk",
          "Data governance frameworks and quality monitoring",
          "Principal-level leadership of the data science team",
          "Executive reporting bridging clinical, operational, and finance data",
        ]}
        projects={[
          { title: "Snowflake Migration",
            summary: "Architected and led the migration of fragmented healthcare datasets to Snowflake. Built scalable cloud infrastructure for analytics and clinical reporting workflows.",
            tags: ["Cloud", "Snowflake"] },
          { title: "Clinical Data Standardisation",
            summary: "Standardised complex, unstructured clinical datasets into unified formats. Improved interoperability across hospital systems and reduced silos.",
            tags: ["ETL", "Standards"] },
          { title: "ML for Clinical Analytics",
            summary: "Developed ML for patient outcome prediction and resource allocation. Models used in day-to-day clinical operations.",
            tags: ["ML", "Outcomes"] },
          { title: "Team Leadership",
            summary: "Led the data science team as Principal. Mentored analysts, set governance standards, and bridged technical and business stakeholders.",
            tags: ["Leadership"] },
        ]}
      />
    </SiteLayout>
  );
}
