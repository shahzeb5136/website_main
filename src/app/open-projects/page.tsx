"use client";

import React from "react";
import Link from "next/link";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

// Sample data for the template. You can replace this with your actual data later.
const openProjects = [
  {
    id: "global-markets",
    title: "Global Markets Report",
    description: "An interactive dashboard for global markets data and analysis.",
    tags: ["Streamlit", "Python", "Finance"],
    date: "April 2026",
  },
  {
    id: "RUL-analyzer",
    title: "RUL Analyzer",
    description: "An interactive application allowing users to upload documents and extract key entities using LLMs.",
    tags: ["Streamlit", "Python", "Spacy", "HuggingFace"],
    date: "February 2026",
  },
  {
    id: "data-quality",
    title: "Data Quality Dashboard",
    description: "A tool to automatically profile datasets and generate data quality reports.",
    tags: ["Streamlit", "Python", "YData Profiling"],
    date: "January 2026",
  }
];

export default function OpenProjectsPage() {
  return (
    <div className="w-full min-h-screen text-slate-200">
      <div className="mb-12">
        <h1 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-blue-500 mb-4 tracking-tight">
          Open Projects
        </h1>
        <p className="text-lg text-slate-400 max-w-2xl leading-relaxed">
          A showcase of various interactive applications and data tools built with Streamlit and Python. Explore the live demos below.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {openProjects.map((project) => (
          <Link href={`/open-projects/${project.id}`} key={project.id} className="group">
            <Card className="h-full border-slate-800 bg-[#0a0f1a]/50 backdrop-blur-sm hover:border-cyan-500/50 transition-colors duration-300">
              <CardHeader>
                <div className="flex justify-between items-start mb-2">
                  <CardTitle className="text-xl font-semibold text-slate-200 group-hover:text-cyan-400 transition-colors">
                    {project.title}
                  </CardTitle>
                </div>
                <CardDescription className="text-slate-400">
                  {project.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2 mt-auto pt-4">
                  {project.tags.map(tag => (
                    <Badge key={tag} variant="secondary" className="bg-slate-800/80 text-cyan-200 hover:bg-slate-800">
                      {tag}
                    </Badge>
                  ))}
                </div>
                <div className="mt-6 text-xs text-slate-500 font-medium">
                  {project.date}
                </div>
              </CardContent>
            </Card>
          </Link>
        ))}
      </div>
    </div>
  );
}
