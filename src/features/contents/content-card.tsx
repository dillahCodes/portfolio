"use client";

import { Activity } from "react";
import Image from "next/image";
import { IoLogoInstagram, IoLogoTiktok, IoCopyOutline } from "react-icons/io5";
import { FiExternalLink } from "react-icons/fi";
import { useZoomIn } from "@/shared/hooks/animations";
import type { Content } from "@/shared/data/contents";

interface ContentCardProps {
  content: Content;
  delay?: number;
}

export function ContentCard({ content, delay = 0 }: ContentCardProps) {
  const cardRef = useZoomIn<HTMLLIElement>({ delay });

  // Default link when entire card is clicked
  const primaryUrl = content.instagramUrl || content.tiktokUrl || "#";

  return (
    <li ref={cardRef} className="group relative list-none">
      <div className="flex flex-col w-full rounded-2xl">
        {/* Instagram Post Thumbnail Container (4:5 Aspect Ratio) */}
        <figure className="relative aspect-[4/5] w-full overflow-hidden rounded-2xl border border-border/60 bg-onyx shadow-elevated">
          {/* Instagram Carousel Badge */}
          <div className="absolute top-3 right-3 z-10 flex items-center justify-center rounded-md bg-black/65 p-1.5 text-white shadow-md backdrop-blur-sm transition-opacity duration-300 group-hover:opacity-0">
            <IoCopyOutline className="size-4" />
          </div>

          {/* Project Image with Zoom on Hover */}
          <Image
            src={content.image}
            alt={content.title}
            fill
            loading="lazy"
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
            className="size-full object-cover transition-transform duration-500 ease-out group-hover:scale-108"
          />

          {/* Dark Overlay on Hover */}
          <div className="absolute inset-0 z-10 flex flex-col items-center justify-center bg-black/65 opacity-0 backdrop-blur-[2px] transition-all duration-300 group-hover:opacity-100 p-4">
            {/* Zoom In Action Buttons (Uniform with project-card styling) */}
            <div className="flex flex-col items-center justify-center gap-3 text-center transition-all duration-300 transform scale-75 opacity-0 group-hover:scale-100 group-hover:opacity-100 ease-out">
              <div className="flex items-center justify-center gap-3.5">
                <Activity mode={content.instagramUrl ? "visible" : "hidden"}>
                  <a
                    href={content.instagramUrl ?? "#"}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={(e) => e.stopPropagation()}
                    className="flex size-14 items-center justify-center rounded-full bg-jet/95 text-white border border-primary/40 shadow-heavy transition-all duration-300 hover:scale-110 hover:border-primary hover:shadow-[0_0_20px_rgba(255,219,112,0.3)]"
                    aria-label="View on Instagram"
                    title="View on Instagram"
                  >
                    <IoLogoInstagram className="size-7 text-primary" />
                  </a>
                </Activity>

                <Activity mode={content.tiktokUrl ? "visible" : "hidden"}>
                  <a
                    href={content.tiktokUrl ?? "#"}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={(e) => e.stopPropagation()}
                    className="flex size-14 items-center justify-center rounded-full bg-jet/95 text-white border border-primary/40 shadow-heavy transition-all duration-300 hover:scale-110 hover:border-primary hover:shadow-[0_0_20px_rgba(255,219,112,0.3)]"
                    aria-label="View on TikTok"
                    title="View on TikTok"
                  >
                    <IoLogoTiktok className="size-7 text-primary" />
                  </a>
                </Activity>
              </div>

              <span className="inline-flex items-center gap-1.5 rounded-full bg-jet/90 px-3.5 py-1.5 text-xs font-medium text-white border border-border shadow-sm">
                <span>View Content</span>
                <FiExternalLink className="size-3 text-primary" />
              </span>
            </div>
          </div>
        </figure>

        {/* Content Meta Info below thumbnail */}
        <div className="mt-3 px-1">
          <a
            href={primaryUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="block focus:outline-none focus-visible:underline"
          >
            <h3 className="text-base font-semibold leading-snug text-white transition-colors duration-200 group-hover:text-primary line-clamp-2">
              {content.title}
            </h3>
          </a>
          <p className="mt-0.5 text-xs font-light text-light-gray/70 capitalize">
            {content.category}
          </p>
        </div>
      </div>
    </li>
  );
}
