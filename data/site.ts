import { Camera, Globe, MessageCircle, PlayCircle } from "lucide-react";

import type { AcademyStat, SiteNavItem, SocialLink } from "@/types/site";

export const siteConfig = {
  name: "GCC Football Academy",
  shortName: "GCC Chalissery",
  description:
    "AIFF affiliated football academy from Chalissery, built on 45+ years of sporting legacy and community passion.",
  url: "https://gcc-chalissery.example",
  locale: "en_IN",
  contact: {
    phone: "+91 00000 00000",
    email: "hello@gccchalissery.com",
    whatsapp: "https://wa.me/910000000000",
    map: "https://maps.google.com/?q=Chalissery%2C%20Kerala%2C%20India",
    location: "Chalissery, Kerala, India",
  },
} as const;

export const primaryNav: SiteNavItem[] = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Academy", href: "/academy" },
  { label: "Achievements", href: "/achievements" },
  { label: "Gallery", href: "/gallery" },
  { label: "Contact", href: "/contact" },
];

export const socialLinks: SocialLink[] = [
  {
    label: "Instagram",
    href: "https://instagram.com",
    icon: Camera,
  },
  {
    label: "Facebook",
    href: "https://facebook.com",
    icon: Globe,
  },
  {
    label: "WhatsApp",
    href: siteConfig.contact.whatsapp,
    icon: MessageCircle,
  },
  {
    label: "YouTube",
    href: "https://youtube.com",
    icon: PlayCircle,
  },
];

export const academyStats: AcademyStat[] = [
  { label: "Legacy", value: "45+ Years" },
  { label: "Affiliation", value: "AIFF" },
  { label: "Categories", value: "U-14 & U-17" },
];
