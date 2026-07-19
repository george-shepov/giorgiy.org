import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://giorgiy.org"),
  title: {
    default: "Giorgiy Shepov · LODEX Software",
    template: "%s · Giorgiy Shepov",
  },
  description:
    "Software engineering, data platforms, automation, AI workflows, and reusable product infrastructure from Giorgiy Shepov and LODEX Software.",
  keywords: [
    "Giorgiy Shepov",
    "LODEX Software",
    ".NET software engineer",
    "AI automation",
    "data platforms",
    "Cleveland software consulting",
  ],
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    title: "Giorgiy Shepov · LODEX Software",
    description:
      "From messy operations to maintainable software systems.",
    url: "https://giorgiy.org",
    siteName: "Giorgiy.org",
  },
  other: {
    "codex-preview": "development",
  },
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
