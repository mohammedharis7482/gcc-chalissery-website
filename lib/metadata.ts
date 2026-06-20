import type { Metadata } from "next";

import { siteConfig } from "@/data/site";

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
    icons: {
      icon: "/icon.png",
      apple: "/logos/gcc-logo.png",
    },
  };
}
