"use client";

import { useState } from "react";
import { Sidebar } from "@/shared/components/sidebar";
import { Navbar } from "@/shared/components/navbar";
import { AboutSection } from "@/features/about/about-section";
import { ResumeSection } from "@/features/resume/resume-section";
import { PortfolioSection } from "@/features/portfolio/portfolio-section";
import { ContactSection } from "@/features/contact/contact-section";

export enum Tab {
  ABOUT = "about",
  RESUME = "resume",
  PORTFOLIO = "portfolio",
  CONTACT = "contact",
}

export const TABS = [
  Tab.ABOUT,
  Tab.RESUME,
  Tab.PORTFOLIO,
  Tab.CONTACT,
] as const;

const componentMap: Record<Tab, React.ReactNode> = {
  [Tab.ABOUT]: <AboutSection />,
  [Tab.RESUME]: <ResumeSection />,
  [Tab.PORTFOLIO]: <PortfolioSection />,
  [Tab.CONTACT]: <ContactSection />,
};

export default function Home() {
  const [activeTab, setActiveTab] = useState<Tab>(Tab.ABOUT);

  return (
    <main className="flex w-full max-w-7xl flex-col gap-4 lg:flex-row">
      <Sidebar />
      <div className="relative w-full pb-16 lg:pb-0">
        <Navbar activeTab={activeTab} onTabChange={setActiveTab} />

        <div className="z-1 min-h-full rounded-2xl border border-border bg-card p-3.75 md:p-7.5">
          <div key={activeTab} className="grid animate-expand">
            <div className="animate-overflow">
              <div className="animate-fade">{componentMap[activeTab]}</div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
