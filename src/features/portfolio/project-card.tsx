"use client";

import Image from "next/image";
import { IoLogoGithub, IoCopyOutline } from "react-icons/io5";
import { FiExternalLink } from "react-icons/fi";
import { useZoomIn } from "@/shared/hooks/animations";
import type { Project } from "@/shared/data/projects";

interface ProjectCardProps {
  project: Project;
  delay?: number;
}

export function ProjectCard({ project, delay = 0 }: ProjectCardProps) {
  const cardRef = useZoomIn<HTMLLIElement>({ delay });

  return (
    <li ref={cardRef} className="group relative list-none">
      <a
        href={project.url}
        target="_blank"
        rel="noopener noreferrer"
        className="flex w-full flex-col rounded-2xl focus:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-card"
      >
        {/* Instagram Post Thumbnail Container (4:5 Aspect Ratio) */}
        <figure className="relative aspect-[4/5] w-full overflow-hidden rounded-2xl border border-border/60 bg-onyx shadow-elevated">
          {/* Instagram Carousel Badge */}
          <div className="absolute top-3 right-3 z-10 flex items-center justify-center rounded-md bg-black/65 p-1.5 text-white shadow-md backdrop-blur-sm transition-opacity duration-300 group-hover:opacity-0">
            <IoCopyOutline className="size-4" />
          </div>

          {/* Project Image with Zoom on Hover */}
          <Image
            src={project.image}
            alt={project.title}
            fill
            loading="lazy"
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
            className="size-full object-cover transition-transform duration-500 ease-out group-hover:scale-108"
          />

          {/* Dark Overlay on Hover */}
          <div className="absolute inset-0 z-10 flex flex-col items-center justify-center bg-black/65 p-4 opacity-0 backdrop-blur-[2px] transition-all duration-300 group-hover:opacity-100">
            {/* Zoom In GitHub Button */}
            <div className="flex scale-75 transform flex-col items-center justify-center gap-3 text-center opacity-0 transition-all duration-300 ease-out group-hover:scale-100 group-hover:opacity-100">
              <div className="flex size-14 items-center justify-center rounded-full border border-primary/40 bg-jet/95 text-white shadow-heavy transition-all duration-300 group-hover:border-primary group-hover:shadow-[0_0_20px_rgba(255,219,112,0.3)]">
                <IoLogoGithub className="size-7 text-primary" />
              </div>
              <span className="inline-flex items-center gap-1.5 rounded-full border border-border bg-jet/90 px-3.5 py-1.5 text-xs font-medium text-white shadow-sm">
                <span>View Repository</span>
                <FiExternalLink className="size-3 text-primary" />
              </span>
            </div>
          </div>
        </figure>

        {/* Project Meta Info below thumbnail */}
        <div className="mt-3 px-1">
          <h3 className="text-base leading-snug font-semibold text-white capitalize transition-colors duration-200 group-hover:text-primary">
            {project.title}
          </h3>
          <p className="mt-0.5 text-xs font-light text-light-gray/70 capitalize">
            {project.category}
          </p>
        </div>
      </a>
    </li>
  );
}
