"use client";

import { SectionTitle } from "@/shared/components/section-title";
import { ContactMap } from "./contact-map";
import { ContactSocialLinks } from "./contact-social-links";

export function ContactSection() {
  return (
    <article>
      <SectionTitle title="Contact" />
      <ContactMap />
      <ContactSocialLinks />
    </article>
  );
}
