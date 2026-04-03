"use client";

import React from "react";
import Link from "next/link";
import { ArrowLeft, ExternalLink } from "lucide-react";
import { useParams } from "next/navigation";
import { Button } from "@/components/ui/button";

export default function OpenProjectSubPage() {
  const params = useParams();
  const projectId = params.id as string;

  // Map project IDs to their respective Streamlit app URLs
  const streamlitUrls: Record<string, string> = {
    "global-markets": "https://globalmarketsreport-shah.streamlit.app/",
    "RUL-analyzer": "https://rulnuclear-shah.streamlit.app/", // Replace with real url later
    "data-quality": "https://share.streamlit.io/example/app3", // Replace with real url later
  };

  const projectUrl = streamlitUrls[projectId] || "";

  return (
    <div className="w-full min-h-screen text-slate-200 flex flex-col space-y-6">
      <div className="flex items-center justify-between">
        <Link href="/open-projects">
          <Button variant="ghost" className="text-slate-400 hover:text-cyan-400 gap-2 pl-0">
            <ArrowLeft className="w-4 h-4" />
            Back to Projects
          </Button>
        </Link>
        <Button
          variant="outline"
          className="border-slate-700 text-slate-300 hover:text-cyan-400 hover:border-cyan-400 gap-2"
          onClick={() => window.open(projectUrl, '_blank')}
          disabled={!projectUrl || projectUrl.includes("example/app")}
        >
          Open in New Tab
          <ExternalLink className="w-4 h-4" />
        </Button>
      </div>

      <div className="flex items-center gap-4">
        <h1 className="text-3xl md:text-4xl font-bold text-slate-100 tracking-tight capitalize">
          Project: {projectId.replace(/-/g, ' ')}
        </h1>
      </div>

      {/* Streamlit Embedded Container */}
      <div className="relative w-full flex-grow rounded-xl border border-slate-800 bg-[#0a0f1a] overflow-hidden min-h-[700px] shadow-2xl">
        {(!projectUrl || projectUrl.includes("example/app")) ? (
          <div className="absolute inset-0 z-10 flex flex-col items-center justify-center bg-[#0a0f1a]/95 backdrop-blur-md p-8 text-center text-slate-300 pointer-events-none">
            <div className="w-16 h-16 mb-4 rounded-full bg-slate-800 flex items-center justify-center">
              <span className="text-2xl font-bold text-slate-500">{"</>"}</span>
            </div>
            <h3 className="text-xl font-semibold mb-2">Streamlit App Placeholder</h3>
            <p className="text-slate-500 max-w-md">
              Update the <code className="text-cyan-400 bg-slate-900 px-1 py-0.5 rounded">projectUrl</code> variable in the source code to embed your live Python Streamlit application here.
            </p>
          </div>
        ) : (
          <iframe
            src={`${projectUrl}?embed=true`}
            className="absolute inset-0 w-full h-full border-0"
            title={`Streamlit app for ${projectId}`}
            allowFullScreen
            sandbox="allow-scripts allow-same-origin allow-popups allow-forms"
          />
        )}
      </div>
    </div>
  );
}
