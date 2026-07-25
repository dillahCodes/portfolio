"use client";

import { useFadeRight } from "@/shared/hooks/animations";

export function WorkExperienceCard() {
  const cardRef = useFadeRight<HTMLDivElement>({ delay: 200 });

  return (
    <div
      ref={cardRef}
      className="relative z-1 rounded-xl p-5 shadow-elevated gradient-border-onyx sm:p-7.5"
    >
      <span className="absolute inset-px -z-1 rounded-xl gradient-jet" />

      <h4 className="mb-2 text-base font-medium text-white">
        Fullstack Web Developer Intern
      </h4>
      <span className="mb-3 block text-sm text-vegas-gold">
        Aug 2025 — Dec 2025
      </span>
      <p className="text-sm leading-relaxed font-light text-light-gray">
        <strong className="font-medium text-white">INDI Technology</strong> ·
        Hybrid, Jakarta Timur
        <br />
        Built 14 responsive frontend pages in one day based on UI/UX design
        specs, integrated 8 REST APIs within a day to support dynamic features,
        and collaborated with PM &amp; UI/UX teams to ship production-ready
        features using React.js and PWA best practices.
      </p>
    </div>
  );
}
