import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";

import { SiteFooter } from "@/components/layout/site-footer";
import { SiteHeader } from "@/components/layout/site-header";
import { siteConfig } from "@/data/site";

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
  title: {
    default: "GCC Chalissery Football Academy",
    template: "%s",
  },
  description:
    "AIFF-affiliated football academy from Chalissery, Kerala, developing disciplined young players through professional training, community support, and official football pathways.",
  keywords: [
    "GCC Chalissery",
    "GCC Football Academy",
    "Chalissery Football Academy",
    "Kerala Football Academy",
    "AIFF affiliated academy",
    "youth football training Kerala",
    "U10 U13 U15 football academy",
  ],
  metadataBase: new URL(siteConfig.url),
  openGraph: {
    title: "GCC Chalissery Football Academy",
    description:
      "AIFF-affiliated football academy from Chalissery, Kerala, developing disciplined young players through professional training, community support, and official football pathways.",
    images: [
      {
        url: "/logos/gcc-logo.png",
        width: 1024,
        height: 1536,
        alt: "GCC Chalissery Football Academy badge",
      },
    ],
    siteName: siteConfig.name,
    locale: siteConfig.locale,
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "GCC Chalissery Football Academy",
    description:
      "AIFF-affiliated football academy from Chalissery, Kerala, developing disciplined young players through professional training, community support, and official football pathways.",
    images: ["/logos/gcc-logo.png"],
  },
  icons: {
    icon: "/icon.png",
    shortcut: "/icon.png",
    apple: "/apple-icon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      data-scroll-behavior="smooth"
      lang="en-IN"
      className={`${geistSans.variable} ${geistMono.variable}`}
    >
      <body>
        <div className="flex min-h-screen flex-col bg-background text-foreground">
          <SiteHeader />
          <main className="flex-1 pt-[76px] lg:pt-[84px]">{children}</main>
          <SiteFooter />
        </div>
      </body>
    </html>
  );
}
