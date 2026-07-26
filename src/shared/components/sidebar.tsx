"use client";

import { useState } from "react";
import Image from "next/image";
import { FaLinkedin, FaGithub, FaInstagram, FaTiktok } from "react-icons/fa6";
import {
  IoMailOutline,
  IoPhonePortraitOutline,
  IoLocationOutline,
  IoChevronDown,
} from "react-icons/io5";
import { personalData, type SocialIconType } from "@/shared/data/personal";
import { useFadeUp } from "@/shared/hooks/animations";
import { IconType } from "react-icons";

const socialIconMap: Record<SocialIconType, IconType> = {
  linkedin: FaLinkedin,
  github: FaGithub,
  instagram: FaInstagram,
  tiktok: FaTiktok,
};

export function Sidebar() {
  const [isOpen, setIsOpen] = useState(false);
  const sidebarRef = useFadeUp<HTMLElement>({ delay: 100 });

  return (
    <aside
      ref={sidebarRef}
      className="z-1 max-h-fit overflow-hidden rounded-2xl border border-border bg-card p-4 transition-all duration-500 ease-in-out lg:sticky lg:top-4 lg:overflow-visible lg:pt-15"
    >
      {/* Profile Info */}
      <div className="relative flex items-center gap-4 sm:gap-6 lg:flex-col">
        <figure className="shrink-0 rounded-2xl gradient-onyx sm:rounded-3xl">
          <Image
            src={personalData.avatar}
            alt={personalData.name}
            width={150}
            height={150}
            className="w-20 rounded-2xl sm:w-30 sm:rounded-3xl lg:w-37.5"
            priority
          />
        </figure>

        <div className="lg:text-center">
          <h1 className="mb-2.5 text-lg font-medium tracking-tight text-white sm:mb-4 lg:whitespace-nowrap">
            {personalData.name}
          </h1>
          <p className="w-max rounded-lg bg-onyx px-3 py-0.75 text-xs font-light text-white lg:mx-auto">
            {personalData.title}
          </p>
        </div>

        {/* Toggle Button (mobile/tablet) */}
        <button
          aria-label="contact toggler"
          aria-expanded={isOpen}
          onClick={() => setIsOpen(!isOpen)}
          className={`group absolute -top-4 -right-4 z-1 rounded-tl-none rounded-tr-2xl rounded-br-none rounded-bl-2xl p-2.5 text-sm text-primary shadow-elevated transition-all duration-250 lg:hidden ${
            isOpen
              ? "gradient-yellow-1"
              : "gradient-border-onyx hover:gradient-yellow-1 focus:gradient-yellow-1"
          }`}
        >
          <span
            className={`absolute inset-px -z-1 transition-all duration-250 ${
              isOpen
                ? "gradient-yellow-2"
                : "gradient-jet group-hover:gradient-yellow-2 group-focus:gradient-yellow-2"
            }`}
            style={{ borderRadius: "inherit" }}
          />
          <IoChevronDown
            className={`text-lg transition-transform duration-300 ${
              isOpen ? "rotate-180" : ""
            }`}
          />
        </button>
      </div>

      {/* Expandable Section */}
      <div
        className={`grid transition-grid-rows duration-500 ease-in-out lg:grid-rows-1fr ${
          isOpen ? "grid-rows-1fr" : "grid-rows-0fr"
        }`}
      >
        <div className="overflow-hidden">
          <div
            className={`transition-opacity duration-500 lg:opacity-100 ${
              isOpen ? "opacity-100 delay-200" : "opacity-0"
            }`}
          >
            {/* Separator */}
            <div className="my-4 h-px w-full bg-jet sm:my-8" />

            {/* Contacts */}
            <ul className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-5 lg:grid-cols-1">
              <li className="flex items-center gap-4">
                <div className="relative z-1 flex size-8 items-center justify-center rounded-lg text-primary gradient-border-onyx sm:size-12 sm:rounded-xl">
                  <span
                    className="absolute inset-px -z-1 bg-eerie-black"
                    style={{ borderRadius: "inherit" }}
                  />
                  <IoMailOutline className="text-base sm:text-lg" />
                </div>
                <div className="min-w-0 flex-1">
                  <p className="mb-0.5 text-xs text-light-gray/70 uppercase">
                    Email
                  </p>
                  <a
                    href={`mailto:${personalData.email}`}
                    className="block truncate text-sm font-light text-white transition-colors hover:text-primary sm:text-sm"
                  >
                    {personalData.email}
                  </a>
                </div>
              </li>

              <li className="flex items-center gap-4">
                <div className="relative z-1 flex size-8 items-center justify-center rounded-lg text-primary gradient-border-onyx sm:size-12 sm:rounded-xl">
                  <span
                    className="absolute inset-px -z-1 bg-eerie-black"
                    style={{ borderRadius: "inherit" }}
                  />
                  <IoPhonePortraitOutline className="text-base sm:text-lg" />
                </div>
                <div>
                  <p className="mb-0.5 text-xs text-light-gray/70 uppercase">
                    Phone
                  </p>
                  <a
                    href={`tel:${personalData.phone.replace(/\s/g, "")}`}
                    className="text-sm font-light text-white transition-colors hover:text-primary sm:text-sm"
                  >
                    {personalData.phone}
                  </a>
                </div>
              </li>

              <li className="flex items-center gap-4">
                <div className="relative z-1 flex size-8 items-center justify-center rounded-lg text-primary gradient-border-onyx sm:size-12 sm:rounded-xl">
                  <span
                    className="absolute inset-px -z-1 bg-eerie-black"
                    style={{ borderRadius: "inherit" }}
                  />
                  <IoLocationOutline className="text-base sm:text-lg" />
                </div>
                <div>
                  <p className="mb-0.5 text-xs text-light-gray/70 uppercase">
                    Location
                  </p>
                  <address className="text-sm font-light text-white not-italic sm:text-sm">
                    {personalData.location}
                  </address>
                </div>
              </li>
            </ul>

            {/* Separator */}
            <div className="my-4 h-px w-full bg-jet sm:my-8 lg:my-4 lg:opacity-0" />

            {/* Socials */}
            <ul className="flex items-center gap-4 pb-1 pl-2 lg:justify-center">
              {personalData.socials.map((social) => {
                const Icon = socialIconMap[social.icon];
                return (
                  <li key={social.name}>
                    <a
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-lg text-light-gray/70 transition-colors hover:text-light-gray"
                      aria-label={social.name}
                    >
                      <Icon />
                    </a>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </aside>
  );
}
