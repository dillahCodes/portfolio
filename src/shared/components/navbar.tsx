"use client";

import { Activity } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Tab, TABS, type TabConfig } from "@/shared/data/tabs";
import {
  IoPersonOutline,
  IoDocumentTextOutline,
  IoBriefcaseOutline,
  IoGridOutline,
  IoMailOutline,
  IoPerson,
  IoDocumentText,
  IoBriefcase,
  IoGrid,
  IoMail,
} from "react-icons/io5";
import type { IconType } from "react-icons";

/** Icon mapping – outline for inactive, filled for active */
const tabIconMap: Record<Tab, { outline: IconType; filled: IconType }> = {
  [Tab.ABOUT]: { outline: IoPersonOutline, filled: IoPerson },
  [Tab.RESUME]: { outline: IoDocumentTextOutline, filled: IoDocumentText },
  [Tab.PORTFOLIO]: { outline: IoBriefcaseOutline, filled: IoBriefcase },
  [Tab.CONTENTS]: { outline: IoGridOutline, filled: IoGrid },
  [Tab.CONTACT]: { outline: IoMailOutline, filled: IoMail },
};

function isTabActive(tab: TabConfig, currentPath: string): boolean {
  if (tab.href === "/") {
    return currentPath === "/" || currentPath === "/about";
  }
  return currentPath.startsWith(tab.href);
}

/* ──────────────────────────────────────────────
 * NavbarDesktop – horizontal text links (top-right)
 * ────────────────────────────────────────────── */
function NavbarDesktop({ currentPath }: { currentPath: string }) {
  return (
    <ul className="hidden items-center gap-6 px-7 lg:flex">
      {TABS.map((tab) => {
        const isActive = isTabActive(tab, currentPath);

        return (
          <li key={tab.key} className="shrink-0 py-5">
            <Link
              href={tab.href}
              className={`py-4.5 text-sm font-medium whitespace-nowrap capitalize transition-colors duration-250 ${
                isActive
                  ? "text-primary"
                  : "text-light-gray hover:text-light-gray/70"
              }`}
            >
              {tab.label}
            </Link>
          </li>
        );
      })}
    </ul>
  );
}

/* ──────────────────────────────────────────────
 * NavbarMobile – icon bottom bar with raised active button
 * ────────────────────────────────────────────── */
function NavbarMobile({ currentPath }: { currentPath: string }) {
  return (
    <ul className="flex items-end justify-around px-2 pt-0 pb-1 lg:hidden">
      {TABS.map((tab) => {
        const isActive = isTabActive(tab, currentPath);
        const { outline: OutlineIcon, filled: FilledIcon } =
          tabIconMap[tab.key];

        return (
          <li key={tab.key} className="flex flex-col items-center">
            <Link
              href={tab.href}
              className={[
                "relative flex flex-col items-center justify-center gap-0.5 transition-all duration-300",
                isActive ? "text-primary-foreground" : "text-light-gray/70",
              ].join(" ")}
              aria-label={tab.label}
            >
              <Activity mode={isActive ? "visible" : "hidden"}>
                <span className="-mt-5 mb-0.5 flex size-12 items-center justify-center rounded-full bg-primary shadow-[0_0_20px_rgba(255,219,112,0.35)] ring-4 ring-onyx transition-all duration-300">
                  <FilledIcon className="size-5" />
                </span>
              </Activity>

              <Activity mode={!isActive ? "visible" : "hidden"}>
                <span className="mt-2 mb-0.5 flex size-8 items-center justify-center transition-all duration-300">
                  <OutlineIcon className="size-5" />
                </span>
              </Activity>

              <span
                className={`text-[10px] leading-tight font-medium capitalize transition-colors duration-300 ${
                  isActive ? "text-primary" : "text-light-gray/50"
                }`}
              >
                {tab.label}
              </span>
            </Link>
          </li>
        );
      })}
    </ul>
  );
}

/* ──────────────────────────────────────────────
 * Navbar – container shell that composes both variants
 * ────────────────────────────────────────────── */
export function Navbar() {
  const pathname = usePathname();

  return (
    <nav
      className={[
        "fixed bottom-0 left-0 z-50 w-full",
        "border-t border-border bg-onyx/90 backdrop-blur-lg",
        "lg:absolute lg:top-0 lg:right-0 lg:bottom-auto lg:left-auto",
        "lg:z-10 lg:w-auto lg:border lg:border-t-0 lg:border-border",
        "lg:rounded-tl-none lg:rounded-tr-2xl lg:rounded-br-none lg:rounded-bl-2xl",
        "lg:bg-onyx/75 lg:shadow-none",
      ].join(" ")}
    >
      <NavbarDesktop currentPath={pathname} />
      <NavbarMobile currentPath={pathname} />
    </nav>
  );
}
