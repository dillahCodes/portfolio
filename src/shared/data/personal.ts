export const personalData = {
  name: "DillahCodes",
  title: "Fullstack developer",
  email: "abdillahjuniansyah93@gmail.com",
  phone: "+62 856-9569-5620",
  location: "Tangerang, Indonesia",
  avatar: "/images/avatar-1.png",
  bio: `Enthusiastic Full-Stack Developer with hands-on experience engineering scalable web applications using
React, Next.js, Node.js, Laravel and TypeScript. Skilled in designing robust backend architectures,
building responsive user interfaces, and managing databases with PostgreSQL and Prisma ORM. Have
proven experience in developing end-to-end solutions, from complex REST API integrations and secure
Role-Based Access Control (RBAC) systems to containerized deployments using Docker. Passionate
about full-cycle software development with a strong focus on clean code architecture, seamless system
performance, and delivering business-driven technical solutions.`,
  cvLink:
    "https://drive.google.com/file/d/1JU0F4ixaEGNO5wXRUpst_MW2qz2d-hi2/view?usp=drive_link",
  socials: [
    {
      name: "LinkedIn",
      url: "https://www.linkedin.com/in/abdillahjuniansyah",
      icon: "linkedin" as const,
    },
    {
      name: "GitHub",
      url: "https://github.com/dillahCodes",
      icon: "github" as const,
    },
    {
      name: "Instagram",
      url: "https://www.instagram.com/dillah.codes",
      icon: "instagram" as const,
    },
    {
      name: "TikTok",
      url: "https://www.tiktok.com/@dillah.codes",
      icon: "tiktok" as const,
    },
  ],
} as const;

export type SocialIconType = (typeof personalData.socials)[number]["icon"];
