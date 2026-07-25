export interface TimelineItem {
  title: string;
  period: string;
  description: string;
}

export interface SkillCategory {
  title: string;
  skills: SkillBadge[];
}

export interface SkillBadge {
  name: string;
  logo: string;
  color: string;
}

export const education: TimelineItem[] = [
  {
    title: "Senior High School 14 of Tangerang Regency",
    period: "2020 — 2023",
    description: "Social Sciences (IPS) – GPA 87",
  },
  {
    title: "Insan Pembangunan Indonesia University",
    period: "2023 — Present",
    description: "Bachelor's Degree in Information Systems – GPA 3.86",
  },
];

export const workExperience: TimelineItem[] = [
  {
    title: "Fullstack Web Developer Intern",
    period: "Aug 2025 — Dec 2025",
    description:
      "INDI Technology · Hybrid, Jakarta Timur\nBuilt 14 responsive frontend pages in one day based on UI/UX design specs, integrated 8 REST APIs within a day to support dynamic features, and collaborated with PM & UI/UX teams to ship production-ready features using React.js and PWA best practices.",
  },
];

export const skillCategories: SkillCategory[] = [
  {
    title: "Languages",
    skills: [
      { name: "JavaScript", logo: "javascript", color: "#F7DF1E" },
      { name: "TypeScript", logo: "typescript", color: "#3178C6" },
      { name: "PHP", logo: "php", color: "#777BB4" },
      { name: "HTML5", logo: "html5", color: "#E34F26" },
      { name: "CSS3", logo: "css", color: "#663399" },
    ],
  },
  {
    title: "Frontend Development",
    skills: [
      { name: "React", logo: "react", color: "#61DAFB" },
      { name: "Next.js", logo: "nextdotjs", color: "#FFFFFF" },
      { name: "Tailwind CSS", logo: "tailwindcss", color: "#06B6D4" },
      { name: "Ant Design", logo: "antdesign", color: "#0170FE" },
      { name: "shadcn/ui", logo: "shadcnui", color: "#FFFFFF" },
      { name: "Radix UI", logo: "radixui", color: "#FFFFFF" },
      { name: "Redux Toolkit", logo: "redux", color: "#764ABC" },
      { name: "React Router", logo: "reactrouter", color: "#CA4245" },
      { name: "Vite", logo: "vite", color: "#F16728" },
      { name: "React Hook Form", logo: "reacthookform", color: "#EC5990" },
      { name: "Zod", logo: "zod", color: "#3A7BF7" },
    ],
  },
  {
    title: "Backend Development",
    skills: [
      { name: "Node.js", logo: "nodedotjs", color: "#8CC84B" },
      { name: "Laravel", logo: "laravel", color: "#FF2D20" },
      { name: "REST API", logo: "swagger", color: "#4A4A4A" },
    ],
  },
  {
    title: "Database & ORM",
    skills: [
      { name: "PostgreSQL", logo: "postgresql", color: "#4169E1" },
      { name: "MySQL", logo: "mysql", color: "#4479A1" },
      { name: "Redis", logo: "redis", color: "#DC382D" },
      { name: "Prisma", logo: "prisma", color: "#FFFFFF" },
      { name: "Firebase", logo: "firebase", color: "#DD2C00" },
    ],
  },
  {
    title: "Tools & Infrastructure",
    skills: [
      { name: "Git", logo: "git", color: "#F05032" },
      { name: "GitHub", logo: "github", color: "#FFFFFF" },
      { name: "Docker", logo: "docker", color: "#2496ED" },
      { name: "Linux", logo: "linux", color: "#FCC624" },
      { name: "Figma", logo: "figma", color: "#F24E1E" },
    ],
  },
];
