import type { Metadata } from "next";
import { AboutSection } from "@/features/about/about-section";

export const metadata: Metadata = {
  title: "About DillahCodes — Abdillah Juniansyah | Fullstack Developer",
  description:
    "Learn about Abdillah Juniansyah (DillahCodes), a passionate Fullstack Developer from Tangerang, Indonesia. Experienced in React, Next.js, Laravel, Docker, and modern web technologies.",
  keywords: [
    "about dillahcodes",
    "abdillah juniansyah",
    "fullstack developer indonesia",
    "web developer tangerang",
    "react developer",
    "next.js developer",
  ],
  alternates: {
    canonical: "/",
  },
};

export default function HomePage() {
  return <AboutSection />;
}
