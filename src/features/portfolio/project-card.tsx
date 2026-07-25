"use client";

import Image from "next/image";
import { IoEyeOutline } from "react-icons/io5";
import { useZoomIn } from "@/shared/hooks/animations";
import type { Project } from "@/shared/data/projects";

interface ProjectCardProps {
  project: Project;
  delay?: number;
}

export function ProjectCard({ project, delay = 0 }: ProjectCardProps) {
  const cardRef = useZoomIn<HTMLLIElement>({ delay });

  return (
    <li ref={cardRef}>
      <a
        href={project.url}
        target="_blank"
        rel="noopener noreferrer"
        className="group block w-full"
      >
        <figure className="relative mb-4 h-50 w-full overflow-hidden rounded-lg sm:h-auto sm:rounded-2xl">
          {/* Hover overlay */}
          <div className="absolute inset-0 z-1 bg-transparent transition-all duration-250 group-hover:bg-black/50" />

          {/* Eye icon on hover */}
          <div className="absolute top-1/2 left-1/2 z-1 -translate-1/2 scale-75 rounded-xl bg-jet p-4.5 text-xl text-primary opacity-0 transition-all duration-250 group-hover:scale-100 group-hover:opacity-100">
            <IoEyeOutline strokeWidth={3} />
          </div>

          <Image
            src={project.image}
            alt={project.title}
            width={600}
            height={400}
            className="size-full object-cover transition-transform duration-250 group-hover:scale-110"
          />
        </figure>

        <h3 className="ml-2.5 text-sm leading-tight font-normal text-white capitalize">
          {project.title}
        </h3>
        <p className="ml-2.5 text-sm font-light text-light-gray/70">
          {project.category}
        </p>
      </a>
    </li>
  );
}
