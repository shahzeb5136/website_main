"use client";

import React from "react";
import SiteLayout from "@/components/site-layout";
import Link from "next/link";
import { ArrowLeft, Mail } from "lucide-react";
import { IlluminatedHero } from "@/components/ui/illuminated-hero";
import { FinTechFeatures } from "@/components/ui/features-8";

export default function FinTechPage() {
  return (
    <SiteLayout>
      <div className="pt-24 relative z-20 flex justify-center">
        <Link
          href="/consultancy"
          className="inline-flex items-center justify-center gap-2 text-slate-500 hover:text-violet-400 text-sm transition-colors group"
        >
          <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
          Back to Consultancy
        </Link>
      </div>

      <IlluminatedHero 
         themeColor="violet"
         titleTop="Technology &"
         highlightText="FinTech Innovation"
         titleBottom=""
         subtitle={
            <>
               Principal Data Scientist at <b>Rasan IT</b>. <br/> 
               Developing edge LLM execution paradigms and computer vision workflows exclusively tailored for the GCC financial sector.
            </>
         }
      />

      <div className="-mt-10">
         <FinTechFeatures />
      </div>

      {/* ═══════ CTA ═══════ */}
      <section className="fintech-cta py-20">
        <div className="max-w-3xl mx-auto px-6">
          <div className="relative overflow-hidden rounded-2xl p-10 md:p-14 text-center">
            {/* CTA Background */}
            <div className="absolute inset-0 bg-gradient-to-br from-violet-600/15 via-fuchsia-600/10 to-indigo-600/15 border border-violet-500/15 rounded-2xl" />
            <div className="absolute top-0 right-0 w-64 h-64 bg-violet-500/10 rounded-full blur-[80px] pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-fuchsia-500/10 rounded-full blur-[60px] pointer-events-none" />

            <div className="relative z-10">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-5">
                Modernize Your FinTech Stack
              </h2>
              <p className="text-slate-400 max-w-lg mx-auto mb-8 text-lg">
                Require private, local execution of massive language models, or highly secure intelligent pipelines?
              </p>
              <a
                href="mailto:y.shahzeb@gmail.com"
                className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-violet-500 to-indigo-500 text-white rounded-xl font-semibold hover:shadow-lg hover:shadow-violet-500/25 transition-all hover:-translate-y-0.5"
              >
                <Mail className="w-5 h-5" />
                Get in Touch
              </a>
            </div>
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}
