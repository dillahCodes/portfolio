"use client";

import { ProjectCard } from "./project-card";
import type { Project } from "@/shared/data/projects";

interface ProjectGridProps {
  projects: Project[];
}

export function ProjectGrid({ projects }: ProjectGridProps) {
  return (
    <ul className="mb-6 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {projects.map((project, index) => (
        <ProjectCard
          key={project.title}
          project={project}
          delay={index * 100}
        />
      ))}
    </ul>
  );
}
