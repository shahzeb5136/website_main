import type { Metadata } from "next";
import { Inter, Outfit } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Shahzeb Yousuf | Data Science Consultant & AI Solutions",
  description:
    "Expert Data Scientist & ML Consultant with 9+ years of experience. Specializing in strategic consultancy for governments and enterprises, and end-to-end AI integration for businesses.",
  keywords: [
    "Data Scientist",
    "ML Consultant",
    "AI Integration",
    "Machine Learning",
    "Consultancy",
    "Abu Dhabi",
    "Dubai",
    "UAE",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${outfit.variable} dark antialiased`}
    >
      <body className="min-h-screen bg-[#030712] text-slate-100">
        {children}
      </body>
    </html>
  );
}
