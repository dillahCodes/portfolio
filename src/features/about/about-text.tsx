"use client";

import { IoDownloadOutline } from "react-icons/io5";
import { personalData } from "@/shared/data/personal";
import { useFadeUp } from "@/shared/hooks/animations";

export function AboutText() {
  const textRef = useFadeUp<HTMLDivElement>({ delay: 100 });

  return (
    <section
      ref={textRef}
      className="text-sm leading-relaxed font-light text-light-gray"
    >
      <p className="mb-4">{personalData.bio}</p>

      <a
        href={personalData.cvLink}
        target="_blank"
        rel="noopener noreferrer"
        className="mb-4 inline-flex items-center gap-2 rounded-lg bg-primary px-5 py-3 font-semibold text-onyx shadow-md transition-all duration-200 hover:-translate-y-0.5 hover:shadow-lg"
      >
        <IoDownloadOutline className="text-xl" />
        <span>Download CV</span>
      </a>
    </section>
  );
}
