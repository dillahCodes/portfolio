import type { Metadata } from "next";
import { Inter, Outfit } from "next/font/google";
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
  title: "dillahCodes - Personal Portfolio",
  description: "Fullstack developer portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${outfit.variable} dark h-full antialiased`}>
      <body className="flex min-h-full flex-col items-center justify-start p-3 lg:p-6 lg:pt-32">
        {children}
      </body>
    </html>
  );
}
