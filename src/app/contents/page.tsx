import type { Metadata } from "next";
import { ContentsSection } from "@/features/contents/contents-section";

export const metadata: Metadata = {
  title: "Contents — Tutorials & Tech Tips",
  description:
    "Explore tech tutorials, web development tips, and recommendations by Abdillah Juniansyah (DillahCodes). Covering Docker, Laravel, React, and best engineering practices.",
  keywords: [
    "dillahcodes contents",
    "dillahcodes tutorials",
    "web development tutorials",
    "docker laravel tutorial",
    "tech tips indonesia",
    "fullstack development guide",
  ],
  alternates: {
    canonical: "/contents",
  },
};

export default function ContentsPage() {
  return <ContentsSection />;
}
