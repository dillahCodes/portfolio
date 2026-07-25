export const personalData = {
  name: "DillahCodes",
  title: "Fullstack developer",
  email: "abdillahjuniansyah93@gmail.com",
  phone: "+62 856-9569-5620",
  location: "Tangerang, Indonesia",
  avatar: "/images/avatar-1.png",
  bio: `Third-year Information Systems undergraduate with hands-on experience developing modern web applications using JavaScript, React, Next.js, and TypeScript. Skilled in building responsive user interfaces, integrating REST APIs, and working with Firebase and PostgreSQL. Previously worked as a Fullstack Web Developer Intern, developing responsive frontend pages and integrating multiple APIs to support dynamic features. Passionate about Front-End and Web Application Development, with a focus on clean architecture, scalable components, and performance optimization.`,
  cvLink:
    "https://drive.google.com/file/d/1Ax5BOE8hfJ7_KfpUGa5sWWDnbgoG4KiW/view?usp=drive_link",
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
