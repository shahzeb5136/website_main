import React from "react";
import SiteLayout from "@/components/site-layout";
import CaseStudyPage from "@/components/case-study";

export default function FintechPage() {
  return (
    <SiteLayout>
      <CaseStudyPage
        parentHref="/consultancy"
        parentLabel="Consultancy"
        sector="Technology & FinTech"
        headline="On-prem LLMs and vision for regulated FinTech in the GCC."
        lede="Principal Data Scientist at Rasan IT. Developing local LLM execution paradigms and computer vision workflows for GCC financial institutions whose regulatory posture precludes public-cloud AI. Winner of a national FinTech competition in Saudi Arabia."
        client={{ name: "Rasan IT (KSA)", role: "Principal Data Scientist", years: "2022 — 2023" }}
        metrics={[
          { value: "On-prem", label: "Execution environment" },
          { value: "KSA", label: "Primary regulatory context" },
          { value: "1st", label: "National FinTech competition" },
          { value: "LLM + CV", label: "Capability stack" },
        ]}
        sections={[
          { key: "context", title: "Context",
            body: "GCC financial regulators have strong views about where customer data can run. Off-the-shelf SaaS LLMs are often not an option. The work at Rasan focused on building local — and later edge — execution paths for language and vision models, so FinTech partners could actually deploy AI without crossing regulatory lines." },
        ]}
        capabilities={[
          "Local LLM execution (Ollama, quantised open models)",
          "On-prem computer vision pipelines for KYC and document AI",
          "NLP workflows tailored for Arabic and GCC-region language",
          "Private-data RAG architectures",
          "Productionisation with proper MLOps on customer infrastructure",
          "Strategic advice on regulatory posture around AI",
        ]}
      />
    </SiteLayout>
  );
}
