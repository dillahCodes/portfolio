export interface Project {
  title: string;
  category: string;
  image: string;
  url: string;
}

export const projects: Project[] = [
  {
    title: "AuthForge",
    category: "Applications",
    image: "/projects/authforge.png",
    url: "https://github.com/dillahCodes/AuthForge",
  },
  {
    title: "Nusantara Kita",
    category: "Web development",
    image: "/projects/nusantarakita.png",
    url: "https://github.com/Yuefii/NusantaraKita",
  },
  {
    title: "Dijemurin",
    category: "Applications",
    image: "/projects/dijemurin.png",
    url: "https://github.com/dillahCodes/dijemurin",
  },
  {
    title: "Nysa Cookies",
    category: "Web development",
    image: "/projects/nysacookies.png",
    url: "https://github.com/dillahCodes/nysacookies",
  },
];

export const filterCategories = [
  "All",
  "Applications",
  "Web development",
] as const;

export type FilterCategory = (typeof filterCategories)[number];

