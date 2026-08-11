export enum Tab {
  ABOUT = "about",
  RESUME = "resume",
  PORTFOLIO = "portfolio",
  CONTENTS = "contents",
  CONTACT = "contact",
}

export interface TabConfig {
  key: Tab;
  label: string;
  href: string;
}

/** Route configuration for each tab */
export const TABS: readonly TabConfig[] = [
  { key: Tab.ABOUT, label: "About", href: "/" },
  { key: Tab.RESUME, label: "Resume", href: "/resume" },
  { key: Tab.PORTFOLIO, label: "Portfolio", href: "/portfolio" },
  { key: Tab.CONTENTS, label: "Contents", href: "/contents" },
  { key: Tab.CONTACT, label: "Contact", href: "/contact" },
] as const;
