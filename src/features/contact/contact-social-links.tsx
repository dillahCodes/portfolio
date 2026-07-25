"use client";

import { FaLinkedin, FaGithub, FaInstagram, FaTiktok } from "react-icons/fa6";
import { useFadeUp } from "@/shared/hooks/animations";
import { personalData, type SocialIconType } from "@/shared/data/personal";

const socialIconMap: Record<
  SocialIconType,
  React.ComponentType<{ className?: string }>
> = {
  linkedin: FaLinkedin,
  github: FaGithub,
  instagram: FaInstagram,
  tiktok: FaTiktok,
};

export function ContactSocialLinks() {
  const ref = useFadeUp<HTMLElement>({ delay: 200 });

  return (
    <section ref={ref} className="mb-2.5">
      <h3 className="mb-5 text-lg text-white capitalize">Get In Touch</h3>

      <ul className="flex items-center gap-2">
        {personalData.socials.map((social) => {
          const Icon = socialIconMap[social.icon];
          return (
            <li key={social.name}>
              <a
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="block p-2 text-light-gray/70 transition-colors hover:text-light-gray"
                aria-label={social.name}
              >
                <Icon className="text-3xl" />
              </a>
            </li>
          );
        })}
      </ul>
    </section>
  );
}
