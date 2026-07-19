import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Giorgiy Shepov · Senior Software Engineer",
  description:
    "Senior full-stack software engineer and technical leader specializing in .NET, APIs, data platforms, AI, automation, and modern delivery.",
  alternates: { canonical: "https://giorgiy-shepov.com" },
  openGraph: {
    title: "Giorgiy Shepov · Senior Software Engineer",
    description: ".NET, APIs, data platforms, AI, automation, and engineering leadership.",
    url: "https://giorgiy-shepov.com",
  },
};

export default function CareerLayout({ children }: { children: React.ReactNode }) {
  return children;
}
