"use client";

import React from "react";
import Link from "next/link";
import {
  Home,
  Briefcase,
  Cpu,
  FolderOpen,
} from "lucide-react";

const navigationLinks = [
  { label: "Home", href: "/", icon: <Home className="h-4 w-4" /> },
  { label: "Consultancy", href: "/consultancy", icon: <Briefcase className="h-4 w-4" /> },
  { label: "Open Projects", href: "/open-projects", icon: <FolderOpen className="h-4 w-4" /> },
  { label: "AI Integration", href: "/ai-integration", icon: <Cpu className="h-4 w-4" /> },
];

export const Logo = () => {
  return (
    <Link href="/" className="font-normal flex space-x-2 items-center text-sm text-white relative z-20">
      <div className="h-6 w-7 bg-gradient-to-br from-cyan-400 to-purple-500 rounded-br-lg rounded-tr-sm rounded-tl-lg rounded-bl-sm flex-shrink-0" />
      <span className="font-semibold text-white whitespace-pre text-base">SY</span>
    </Link>
  );
};

export default function SiteLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex flex-col bg-[#030712] w-full min-h-screen">
      <header className="sticky top-0 z-50 w-full border-b border-slate-800/50 bg-[#0a0f1a]/80 backdrop-blur-md">
        <div className="flex items-center justify-between h-16 px-6 md:px-12 max-w-[1200px] mx-auto w-full">
          <Logo />
          <nav className="flex items-center gap-6">
            {navigationLinks.map((link) => (
              <Link 
                key={link.label} 
                href={link.href}
                className="flex items-center gap-2 text-sm font-medium text-slate-300 hover:text-cyan-400 transition-colors"
              >
                {link.icon}
                <span className="hidden sm:inline-block">{link.label}</span>
              </Link>
            ))}
          </nav>
        </div>
      </header>
      <main className="flex-1 w-full flex justify-center">
        <div className="w-full max-w-[1200px] px-6 md:px-12 py-8">
          {children}
        </div>
      </main>
    </div>
  );
}
