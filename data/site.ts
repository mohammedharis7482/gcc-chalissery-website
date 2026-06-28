import { Camera, Globe, MessageCircle } from "lucide-react";

import type { AcademyStat, SiteNavItem, SocialLink } from "@/types/site";
import {
  academyContact,
  primaryNav as finalizedPrimaryNav,
  siteConfig as finalizedSiteConfig,
} from "@/src/data/site";

export const siteConfig = {
  ...finalizedSiteConfig,
  contact: {
    phone: academyContact.phone,
    email: academyContact.email,
    whatsapp: academyContact.whatsapp,
    map: academyContact.map,
    location: academyContact.location,
  },
} as const;

export const primaryNav: SiteNavItem[] = [...finalizedPrimaryNav];

export const socialLinks: SocialLink[] = [
  {
    label: "Instagram",
    href: academyContact.instagram,
    icon: Camera,
  },
  {
    label: "Facebook",
    href: academyContact.facebook,
    icon: Globe,
  },
  {
    label: "WhatsApp",
    href: siteConfig.contact.whatsapp,
    icon: MessageCircle,
  },
];

export const academyStats: AcademyStat[] = [
  { label: "Legacy", value: "45+ Years" },
  { label: "Affiliation", value: "AIFF" },
  { label: "Categories", value: "U-10 • U-13 • U-15" },
];
