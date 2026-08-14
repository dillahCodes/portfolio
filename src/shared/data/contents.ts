export interface Content {
  title: string;
  category: string;
  image: string;
  instagramUrl?: string;
  tiktokUrl?: string;
}

export const contents: Content[] = [
  {
    title: "5 Free Background Remover Website Recommendations",
    category: "Recommendations",
    image: "/contents/5-rekomendasi-website-remove-background.png",
    instagramUrl: "https://www.instagram.com/p/Db5jZtrkhGW",
    tiktokUrl: "https://www.tiktok.com/@dillah.codes/photo/7672747661216320786",
  },
  {
    title: "7 Free PNG Website Recommendations for Designers & Developers",
    category: "Recommendations",
    image: "/contents/7-rekomendasi-website-png-gratis.png",
    instagramUrl: "https://www.instagram.com/p/Db5isqZkk1-",
    tiktokUrl: "https://www.tiktok.com/@dillah.codes/photo/7672750694289444114",
  },
  {
    title: "Containerizing Next.js & Prisma ORM Projects Tutorial - Part 3",
    category: "Tutorials",
    image: "/contents/tutorial-containerize-nextjs-prisma-orm-part-3.png",
    instagramUrl: "https://www.instagram.com/p/DcBin-vEsGE",
    tiktokUrl: "https://vt.tiktok.com/ZSVdGLWhG/",
  },
  {
    title: "Containerizing Laravel & React Projects Tutorial - Part 2",
    category: "Tutorials",
    image: "/contents/tutorial-containerize-laravel-react-part-2.png",
    instagramUrl: "https://www.instagram.com/p/Db5P1k8kp1U",
    tiktokUrl: "https://www.tiktok.com/@dillah.codes/photo/7672708360315211016",
  },
  {
    title: "Containerizing Laravel & React Projects Tutorial - Part 1",
    category: "Tutorials",
    image: "/contents/tutorial-containerize-laravel-react-part-1.png",
    instagramUrl: "https://www.instagram.com/p/Db5OKuPkjne",
    tiktokUrl: "https://www.tiktok.com/@dillah.codes/photo/7672706466540834055",
  },
  {
    title: "Stop Using IP Addresses as Rate Limiter Identifiers",
    category: "Best Practices",
    image: "/contents/stop-pakai-ip-address-identifier-rate-limiter.png",
    instagramUrl: "https://www.instagram.com/p/DV_fIO6kobW",
    tiktokUrl: "https://www.tiktok.com/@dillah.codes/photo/7618264533534297364",
  },
];

export const filterCategories = [
  "All",
  "Tutorials",
  "Recommendations",
  "Best Practices",
] as const;

export type FilterContentCategory = (typeof filterCategories)[number];
