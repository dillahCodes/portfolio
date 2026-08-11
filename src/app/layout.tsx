import type { Metadata } from "next";
import { Inter, Outfit } from "next/font/google";
import { Sidebar } from "@/shared/components/sidebar";
import { Navbar } from "@/shared/components/navbar";
import "../shared/styles/globals.css";

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  variable: "--font-inter",
});

const outfit = Outfit({
  subsets: ["latin"],
  weight: ["500", "600", "700", "800"],
  variable: "--font-outfit",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://dillahcodes.my.id"),
  title: {
    default: "DillahCodes — Fullstack Developer Portfolio",
    template: "%s | DillahCodes",
  },
  description:
    "Abdillah Juniansyah (DillahCodes) — Fullstack Developer from Tangerang, Indonesia. Specializing in React, Next.js, Laravel, and Docker.",
  keywords: [
    "dillahcodes",
    "abdillah juniansyah",
    "fullstack developer",
    "web developer",
    "frontend developer",
    "backend developer",
    "tangerang",
    "indonesia",
    "portfolio",
    "react",
    "next.js",
    "laravel",
    "docker",
    "typescript",
    "javascript",
  ],
  authors: [{ name: "Abdillah Juniansyah", url: "https://dillahcodes.my.id" }],
  creator: "DillahCodes",
  openGraph: {
    type: "website",
    locale: "id_ID",
    url: "https://dillahcodes.my.id",
    siteName: "DillahCodes",
    title: "DillahCodes — Fullstack Developer Portfolio",
    description:
      "Abdillah Juniansyah (DillahCodes) — Fullstack Developer from Tangerang, Indonesia.",
  },
  twitter: {
    card: "summary_large_image",
    title: "DillahCodes — Fullstack Developer Portfolio",
    description:
      "Abdillah Juniansyah (DillahCodes) — Fullstack Developer from Tangerang, Indonesia.",
    creator: "@dillahcodes",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="id"
      className={`${inter.variable} ${outfit.variable} dark h-full antialiased`}
    >
      <body className="flex min-h-full flex-col items-center justify-start p-3 lg:p-6 lg:pt-32">
        <main className="flex w-full max-w-7xl flex-col gap-4 lg:flex-row">
          <Sidebar />
          <div className="relative w-full pb-20 lg:pb-0">
            <Navbar />
            <div className="z-1 min-h-full rounded-2xl border border-border bg-card p-3.75 md:p-7.5">
              {children}
            </div>
          </div>
        </main>
      </body>
    </html>
  );
}
