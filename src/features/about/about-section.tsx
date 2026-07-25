"use client";

import { SectionTitle } from "@/shared/components/section-title";
import { AboutText } from "./about-text";
import { ServiceList } from "./service-list";

export function AboutSection() {
  return (
    <article>
      <SectionTitle title="About me" />
      <AboutText />
      <ServiceList />
    </article>
  );
}
