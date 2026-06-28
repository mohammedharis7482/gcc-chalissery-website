export type GalleryCategory =
  | "All"
  | "Training Sessions"
  | "Match Days"
  | "Tournament Moments"
  | "Team Celebrations"
  | "Registration & Events"
  | "Community Activities"
  | "Facilities"
  | "Team Photos";

export type GalleryImage = {
  title: string;
  category: Exclude<GalleryCategory, "All">;
  image: string;
  featured?: boolean;
};

export const galleryCategories: readonly GalleryCategory[] = [
  "All",
  "Training Sessions",
  "Match Days",
  "Tournament Moments",
  "Team Celebrations",
  "Registration & Events",
  "Community Activities",
  "Facilities",
  "Team Photos",
] as const;

export const galleryImages: readonly GalleryImage[] = [
  {
    title: "Training intensity",
    category: "Training Sessions",
    image: "/academy-content/media/WhatsApp Image 2026-06-22 at 12.57.45 PM.jpeg",
    featured: true,
  },
  {
    title: "Ground session discipline",
    category: "Training Sessions",
    image: "/academy-content/media/WhatsApp Image 2026-06-22 at 12.57.46 PM.jpeg",
  },
  {
    title: "Coach guidance",
    category: "Training Sessions",
    image: "/academy-content/media/WhatsApp Image 2026-06-22 at 12.57.44 PM.jpeg",
  },
  {
    title: "Player development drills",
    category: "Training Sessions",
    image: "/academy-content/media/WhatsApp Image 2026-06-22 at 12.57.47 PM.jpeg",
  },
  {
    title: "Goalkeeping practice",
    category: "Training Sessions",
    image: "/academy-content/media/WhatsApp Image 2026-06-22 at 12.57.43 PM.jpeg",
  },
  {
    title: "Match day focus",
    category: "Match Days",
    image: "/academy-content/media/WhatsApp Image 2026-06-23 at 12.39.03 PM.jpeg",
  },
  {
    title: "Competitive team rhythm",
    category: "Match Days",
    image: "/academy-content/media/WhatsApp Image 2026-06-23 at 12.39.02 PM.jpeg",
  },
  {
    title: "Match preparation group",
    category: "Match Days",
    image: "/academy-content/media/WhatsApp Image 2026-06-23 at 12.33.44 PM.jpeg",
  },
  {
    title: "Game-day squad frame",
    category: "Match Days",
    image: "/academy-content/media/WhatsApp Image 2026-06-23 at 12.38.56 PM.jpeg",
  },
  {
    title: "Tournament squad pride",
    category: "Tournament Moments",
    image: "/academy-content/media/WhatsApp Image 2026-06-23 at 12.50.27 PM.jpeg",
  },
  {
    title: "Youth league moment",
    category: "Tournament Moments",
    image: "/academy-content/media/WhatsApp Image 2026-06-23 at 12.50.28 PM.jpeg",
  },
  {
    title: "Recognition poster",
    category: "Tournament Moments",
    image: "/academy-content/media/Screenshot 2026-06-25 at 9.14.42 AM.png",
  },
  {
    title: "U-17 runners-up",
    category: "Tournament Moments",
    image: "/academy-content/achievements/u-17-runnerup-jpg.jpeg",
  },
  {
    title: "Trophy celebration",
    category: "Team Celebrations",
    image: "/academy-content/media/WhatsApp Image 2026-06-23 at 12.50.26 PM.jpeg",
    featured: true,
  },
  {
    title: "Celebration with the group",
    category: "Team Celebrations",
    image: "/academy-content/media/WhatsApp Image 2026-06-23 at 12.50.27 PM (1).jpeg",
  },
  {
    title: "Winning culture moment",
    category: "Team Celebrations",
    image: "/academy-content/media/WhatsApp Image 2026-06-23 at 12.50.27 PM (2).jpeg",
  },
  {
    title: "Players together",
    category: "Team Celebrations",
    image: "/academy-content/media/WhatsApp Image 2026-06-22 at 12.57.47 PM (1).jpeg",
  },
  {
    title: "Registration support",
    category: "Registration & Events",
    image: "/academy-content/media/WhatsApp Image 2026-06-18 at 11.42.04 PM (2).jpeg",
  },
  {
    title: "Player registration moment",
    category: "Registration & Events",
    image: "/academy-content/media/WhatsApp Image 2026-06-18 at 11.42.04 PM (3).jpeg",
  },
  {
    title: "Academy event group",
    category: "Registration & Events",
    image: "/academy-content/media/WhatsApp Image 2026-06-18 at 11.42.03 PM.jpeg",
  },
  {
    title: "Event coordination",
    category: "Registration & Events",
    image: "/academy-content/media/WhatsApp Image 2026-06-23 at 12.38.58 PM.jpeg",
  },
  {
    title: "Community football culture",
    category: "Community Activities",
    image: "/academy-content/media/WhatsApp Image 2026-06-23 at 12.33.45 PM.jpeg",
  },
  {
    title: "Built through community",
    category: "Community Activities",
    image: "/academy-content/media/WhatsApp Image 2026-06-23 at 12.33.46 PM (1).jpeg",
  },
  {
    title: "Academy community moment",
    category: "Community Activities",
    image: "/academy-content/media/WhatsApp Image 2026-06-23 at 12.33.48 PM.jpeg",
  },
  {
    title: "Chalissery support",
    category: "Community Activities",
    image: "/academy-content/media/WhatsApp Image 2026-06-23 at 12.33.49 PM.jpeg",
  },
  {
    title: "Academy trophy room",
    category: "Facilities",
    image: "/academy-content/media/WhatsApp Image 2026-06-23 at 12.38.58 PM (1).jpeg",
  },
  {
    title: "Ground environment",
    category: "Facilities",
    image: "/academy-content/media/WhatsApp Image 2026-06-18 at 11.42.04 PM (5).jpeg",
  },
  {
    title: "Training setup",
    category: "Facilities",
    image: "/academy-content/media/WhatsApp Image 2026-06-18 at 11.42.04 PM (6).jpeg",
  },
  {
    title: "Fitness room moment",
    category: "Facilities",
    image: "/academy-content/media/WhatsApp Image 2026-06-18 at 11.42.04 PM.jpeg",
  },
  {
    title: "Youth squad identity",
    category: "Team Photos",
    image: "/academy-content/media/WhatsApp Image 2026-06-22 at 12.57.44 PM (1).jpeg",
  },
  {
    title: "Team photo moment",
    category: "Team Photos",
    image: "/academy-content/media/WhatsApp Image 2026-06-23 at 12.33.46 PM.jpeg",
    featured: true,
  },
  {
    title: "Academy squad frame",
    category: "Team Photos",
    image: "/academy-content/media/WhatsApp Image 2026-06-23 at 12.33.44 PM (1).jpeg",
  },
  {
    title: "Players together",
    category: "Team Photos",
    image: "/academy-content/media/WhatsApp Image 2026-06-23 at 12.33.50 PM.jpeg",
  },
] as const;

export const galleryPreviewImages = galleryImages.slice(0, 8);
