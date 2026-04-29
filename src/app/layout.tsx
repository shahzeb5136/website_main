import type { Metadata } from "next";
import { Inter, Source_Serif_4, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import "./globals.append.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

const serif = Source_Serif_4({
  variable: "--font-serif",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
});

const mono = JetBrains_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
  weight: ["400", "500"],
});

export const metadata: Metadata = {
  title: "Shahzeb Yousuf — Data Science & ML Consultancy",
  description:
    "Independent data science and ML consultancy for organisations where the stakes are real. Ten years across nuclear energy, healthcare, government health programmes, and insurance in the GCC.",
  keywords: [
    "Data Scientist", "ML Consultant", "AI Integration", "Machine Learning",
    "Consultancy", "Abu Dhabi", "Dubai", "UAE",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${serif.variable} ${mono.variable} antialiased`}
    >
      <body>{children}</body>
    </html>
  );
}
