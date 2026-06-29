import type { Metadata } from "next";

import { siteConfig } from "@/data/site";

const defaultKeywords = [
  "GCC Chalissery",
  "GCC Football Academy",
  "Chalissery Football Academy",
  "Kerala Football Academy",
  "AIFF affiliated academy",
  "youth football training Kerala",
  "U10 football academy",
  "U13 football academy",
  "U15 football academy",
];

type MetadataInput = {
  absoluteTitle?: string;
  title?: string;
  description?: string;
  path?: string;
};

export function createMetadata({
  absoluteTitle,
  title,
  description = siteConfig.description,
  path = "/",
}: MetadataInput = {}): Metadata {
  const pageTitle = absoluteTitle ?? (title
    ? `${title} | ${siteConfig.shortName}`
    : siteConfig.name);

  return {
    title: pageTitle,
    description,
    keywords: defaultKeywords,
    metadataBase: new URL(siteConfig.url),
    alternates: {
      canonical: path,
    },
    openGraph: {
      title: pageTitle,
      description,
      images: [
        {
          url: "/logos/gcc-logo.png",
          width: 1024,
          height: 1536,
          alt: "GCC Chalissery Football Academy badge",
        },
      ],
      url: path,
      siteName: siteConfig.name,
      locale: siteConfig.locale,
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: pageTitle,
      description,
      images: ["/logos/gcc-logo.png"],
    },
    icons: {
      icon: "/icon.png",
      shortcut: "/icon.png",
      apple: "/apple-icon.png",
    },
  };
}
