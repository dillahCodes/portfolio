"use client";

import { Tab, TABS } from "@/app/page";

interface NavbarProps {
  activeTab: Tab;
  onTabChange: (tab: Tab) => void;
}

export function Navbar({ activeTab, onTabChange }: NavbarProps) {
  return (
    <nav className="fixed bottom-0 left-0 z-10 w-full rounded-t-2xl border border-border bg-onyx/75 px-5 shadow-elevated backdrop-blur-md lg:absolute lg:top-0 lg:right-0 lg:bottom-auto lg:left-auto lg:w-auto lg:max-w-xl lg:rounded-tl-none lg:rounded-tr-2xl lg:rounded-bl-2xl lg:shadow-none">
      <ul className="flex flex-wrap items-center justify-center px-2.5 lg:gap-8 lg:px-5">
        {TABS.map((tab) => (
          <li key={tab}>
            <button
              onClick={() => {
                onTabChange(tab);
                window.scrollTo(0, 0);
              }}
              className={`px-2 py-5 text-xs font-medium transition-colors duration-250 sm:px-3 sm:text-sm lg:text-sm ${
                activeTab === tab.toLowerCase()
                  ? "text-primary"
                  : "text-light-gray hover:text-light-gray/70"
              }`}
            >
              {tab}
            </button>
          </li>
        ))}
      </ul>
    </nav>
  );
}
