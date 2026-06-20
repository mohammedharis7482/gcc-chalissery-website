import type { LucideIcon } from "lucide-react";

export type SiteNavItem = {
  label: string;
  href: string;
  description?: string;
};

export type SocialLink = {
  label: string;
  href: string;
  icon: LucideIcon;
};

export type AcademyProgram = {
  title: string;
  ageGroup: string;
  summary: string;
  highlights: string[];
};

export type NewsItem = {
  title: string;
  slug: string;
  excerpt: string;
  publishedAt: string;
};

export type AcademyStat = {
  label: string;
  value: string;
};

export type FeatureItem = {
  title: string;
  description: string;
};

export type CultureItem = {
  title: string;
  description: string;
};

export type AchievementItem = {
  label: string;
  value: string;
  description: string;
};

export type GalleryItem = {
  title: string;
  category: string;
  image: string;
};
