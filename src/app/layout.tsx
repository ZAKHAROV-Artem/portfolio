import type { Metadata, Viewport } from "next";
import { Amatic_SC, Roboto_Serif, Roboto_Slab } from "next/font/google";
import "./globals.css";
import ReactQueryProvider from "@/providers/react-query-provider";
import localFont from "next/font/local";
import { Toaster } from "react-hot-toast";
import dayjs from "dayjs";
const organic_relief = localFont({
  src: "../../public/organic-relief.ttf",
  display: "swap",
  variable: "--font-organic-relief",
});
const roboto_serif = Roboto_Serif({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-roboto-serif",
});
const roboto_slab = Roboto_Slab({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-roboto-slab",
});
const amatic = Amatic_SC({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-amatic",
});
export const viewport: Viewport = {
  themeColor: "black",
};
export const metadata: Metadata = {
  title: "Zakharov Artem - Fullstack Developer",
  description: `I've been developing websites for ${dayjs().diff(
    "1/1/2020",
    "year"
  )} years straight. Get in touch with me to know more.`,
  applicationName: "Portfolio website",
  authors: {
    name: "Zakharov Artem",
  },
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
  creator: "Zakharov Artem",
  publisher: "Zakharov Artem",
  robots: "index, follow",
  openGraph: {
    type: "website",
    url: "https://zakharov-artem.vercel.app",
    title: "Zakharov Artem - Fullstack Developer",
    description: `I've been developing websites for ${dayjs().diff(
      "1/1/2020",
      "year"
    )} years straight. Get in touch with me to know more.`,
    siteName: "Portfolio website",
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
  },
  twitter: {
    card: "summary_large_image",
    site: "@zakharov",
    creator: "@zakharov",
    title: "Zakharov Artem - Fullstack Developer",
    description: `I've been developing websites for ${dayjs().diff(
      "1/1/2020",
      "year"
    )} years straight. Get in touch with me to know more.`,
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
        <ReactQueryProvider>{children}</ReactQueryProvider>
      </body>
    </html>
  );
}
