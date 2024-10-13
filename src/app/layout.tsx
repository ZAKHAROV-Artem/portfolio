import type { Metadata, Viewport } from "next";

import ReactQueryProvider from "@/providers/react-query-provider";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import dayjs from "dayjs";
import { Amatic_SC, Roboto_Serif, Roboto_Slab } from "next/font/google";
import localFont from "next/font/local";
import { Toaster } from "react-hot-toast";

import "./globals.css";

const organic_relief = localFont({
  display: "swap",
  src: "../../public/organic-relief.ttf",
  variable: "--font-organic-relief",
});
const roboto_serif = Roboto_Serif({
  display: "swap",
  subsets: ["latin"],
  variable: "--font-roboto-serif",
});
const roboto_slab = Roboto_Slab({
  display: "swap",
  subsets: ["latin"],
  variable: "--font-roboto-slab",
});
const amatic = Amatic_SC({
  subsets: ["latin"],
  variable: "--font-amatic",
  weight: ["400", "700"],
});
export const viewport: Viewport = {
  themeColor: "black",
};
export const metadata: Metadata = {
  applicationName: "Portfolio website",
  authors: {
    name: "Zakharov Artem",
  },
  creator: "Zakharov Artem",
  description: `I've been developing websites for ${dayjs().diff(
    "1/1/2020",
    "year"
  )} years straight. Get in touch with me to know more.`,
  generator: "nextjs, react",
  keywords: [
    "Full-Stack Developer",
    "Next.js",
    "React.js",
    "TypeScript",
    "Framer Motion",
    "Tailwind CSS",
    "Frontend Development",
    "Backend Development",
    "UI/UX Development",
    "Web Application Development",
    "Responsive Web Design",
    "Component-Based Architecture",
    "API Integration",
    "State Management (Redux, Context API)",
    "Server-Side Rendering (SSR)",
    "Static Site Generation (SSG)",
    "RESTful APIs",
    "GraphQL",
    "Progressive Web Apps (PWAs)",
    "Performance Optimization",
    "Zakharov Artem, About me, Projects, Tech, Zakharov Artem projects",
  ],
  openGraph: {
    description: `I've been developing websites for ${dayjs().diff(
      "1/1/2020",
      "year"
    )} years straight. Get in touch with me to know more.`,
    images: [
      {
        url: "https://zakharov-artem.vercel.app/dark1.png",
      },
      {
        url: "https://zakharov-artem.vercel.app/dark2.png",
      },
      {
        url: "https://zakharov-artem.vercel.app/dark3.png",
      },
    ],
    siteName: "Portfolio website",
    title: "Zakharov Artem - Fullstack Developer",
    type: "website",
    url: "https://zakharov-artem.vercel.app",
  },
  publisher: "Zakharov Artem",
  robots: "index, follow",
  title: "Zakharov Artem - Fullstack Developer",
  twitter: {
    card: "summary_large_image",
    creator: "@zakharov",
    description: `I've been developing websites for ${dayjs().diff(
      "1/1/2020",
      "year"
    )} years straight. Get in touch with me to know more.`,
    site: "@zakharov",
    title: "Zakharov Artem - Fullstack Developer",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${roboto_serif.variable} ${amatic.variable} ${roboto_slab.variable} ${organic_relief.variable}`}
      >
        <Toaster />
        <SpeedInsights />
        <Analytics />
        <ReactQueryProvider>{children}</ReactQueryProvider>
      </body>
    </html>
  );
}
