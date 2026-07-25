export interface Project {
  title: string;
  category: string;
  image: string;
  url: string;
}

export const projects: Project[] = [
  {
    title: "Economic Calculator",
    category: "web development",
    image: "/images/project-1.png",
    url: "https://github.com/dillahCodes/EKONOMI_DAN_PEMROGRAMAN",
  },
  {
    title: "Blog Web",
    category: "web development",
    image: "/images/project-2.png",
    url: "https://github.com/dillahCodes/firebase-react-redux-blog-app",
  },
  {
    title: "Cloud Storage",
    category: "web development",
    image: "/images/project-3.png",
    url: "https://github.com/dillahCodes/cloud-storage-project",
  },
  {
    title: "Nusantara Kita",
    category: "web development",
    image: "/images/project-5.png",
    url: "https://github.com/Yuefii/nusantarakita",
  },
];

export const filterCategories = [
  "All",
  "Web design",
  "Applications",
  "Web development",
] as const;

export type FilterCategory = (typeof filterCategories)[number];
