import type { Metadata } from "next";
import { PortfolioSection } from "@/features/portfolio/portfolio-section";

export const metadata: Metadata = {
  title: "Portfolio — Projects & Applications",
  description:
    "Browse the portfolio of Abdillah Juniansyah (DillahCodes). Showcasing web applications, open-source projects, and fullstack development work built with React, Next.js, Laravel, and Docker.",
  keywords: [
    "dillahcodes portfolio",
    "dillahcodes projects",
    "fullstack developer portfolio",
    "web development projects",
    "react projects",
    "open source indonesia",
  ],
  alternates: {
    canonical: "/portfolio",
  },
};

export default function PortfolioPage() {
  return <PortfolioSection />;
}
