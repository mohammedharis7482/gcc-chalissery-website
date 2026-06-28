import {
  Award,
  BadgeCheck,
  CalendarCheck,
  Dumbbell,
  Flag,
  Goal,
  HeartHandshake,
  Medal,
  Route,
  ShieldCheck,
  Sparkles,
  Target,
  Trophy,
  Users,
} from "lucide-react";

import type {
  AchievementItem,
  CultureItem,
  FeatureItem,
  GalleryItem,
} from "@/types/site";
import { academyPrograms, homeContent } from "@/src/data/site";
import { galleryPreviewImages } from "@/src/data/gallery";
import { teamAchievements } from "@/src/data/achievements";

export const homeHero = {
  eyebrow: homeContent.hero.eyebrow,
  title: homeContent.hero.title,
  description: homeContent.hero.description,
  primaryAction: homeContent.hero.secondaryAction,
  secondaryAction: "Contact Club",
  image: homeContent.hero.image,
} as const;

export const heroStats = homeContent.hero.stats;

export const legacyTimeline = [
  {
    year: "1980",
    title: "Started as a local arts and sports club",
    description:
      "GCC began as a community-rooted arts and sports club in Chalissery, growing through passion for football and local sporting culture.",
  },
  {
    year: "2021",
    title: "Football academy formed with a professional training vision",
    description:
      "The academy was established to give aspiring young players structured coaching, discipline, and a serious development environment.",
  },
  {
    year: "2024",
    title: "Achieved AIFF affiliation",
    description:
      "GCC Football Academy became officially connected to India's professional football development pathway.",
  },
  {
    year: "Today",
    title: "Developing U-10, U-13, and U-15 football talents",
    description:
      "The academy now focuses on identifying, developing, and nurturing young players through structured age-group training.",
  },
] as const;

export const legacyImages = {
  recognition: "/academy-content/media/Screenshot 2026-06-25 at 9.14.42 AM.png",
  handover: "/academy-content/media/WhatsApp Image 2026-06-23 at 12.50.27 PM.jpeg",
  community: "/academy-content/media/WhatsApp Image 2026-06-23 at 12.50.26 PM.jpeg",
  identity: "/academy-content/media/WhatsApp Image 2026-06-23 at 12.33.48 PM.jpeg",
} as const;

export const academyExcellence = {
  eyebrow: "WHY GCC CHALISSERY",
  title: "Building Footballers Beyond The Game",
  description:
    "For over four decades, GCC Chalissery has helped young players develop football skills, discipline, confidence, leadership, and a pathway toward competitive football opportunities.",
  image: "/academy-content/media/WhatsApp Image 2026-06-23 at 12.38.58 PM.jpeg",
  badges: ["45+ Years Legacy", "AIFF Affiliated Academy"],
  proofStats: [
    "45+ Years Legacy",
    "AIFF Affiliated",
    "U-10 • U-13 • U-15",
    "Community Powered",
  ],
  thumbnails: [
    {
      label: "Team Culture",
      image: "/academy-content/media/WhatsApp Image 2026-06-23 at 12.50.26 PM.jpeg",
    },
    {
      label: "Training",
      image: "/academy-content/media/WhatsApp Image 2026-06-23 at 12.38.58 PM.jpeg",
    },
    {
      label: "Trophy Moment",
      image: "/academy-content/achievements/u-17-runnerup-jpg.jpeg",
    },
  ],
  features: [
    {
      title: "Structured Training",
      description:
        "Age-based programs for technical skills, tactical clarity, and physical development.",
      icon: Dumbbell,
    },
    {
      title: "Experienced Coaching",
      description:
        "Coaches focused on discipline, teamwork, confidence, and long-term player growth.",
      icon: Users,
    },
    {
      title: "AIFF Development Pathway",
      description:
        "A stronger platform connected to structured football development opportunities.",
      icon: BadgeCheck,
    },
    {
      title: "Character Building",
      description:
        "Leadership, commitment, sportsmanship, and confidence beyond the game.",
      icon: ShieldCheck,
    },
  ],
} as const;

export const communityStory = {
  eyebrow: "Community powered",
  title: "Built by a football-loving community.",
  description:
    "Without the backing of large corporate funds or major sponsorships, GCC stands strong because of the passion, trust, and support of Chalissery's football community.",
  image: "/academy-content/media/WhatsApp Image 2026-06-23 at 12.50.26 PM.jpeg",
} as const;

export const trainingStoryImage =
  "/academy-content/media/WhatsApp Image 2026-06-23 at 12.38.58 PM.jpeg";

export const academyProgramsShowcase = {
  eyebrow: "Academy programs",
  title: "A clear pathway for every stage of young football development.",
  description:
    "From first-touch fundamentals to elite age-group preparation, GCC Chalissery builds players through structured, age-appropriate football development.",
  programs: academyPrograms.map((program) => ({
    ageGroup: program.ageGroup,
    title: program.title,
    description: program.shortDescription,
    tags: program.focusAreas.slice(0, 3),
    training: program.training,
    focus: program.focus,
    image: program.image,
  })),
} as const;

export const coachesLeadership = {
  eyebrow: "Coaches & Leadership",
  title: "Guided by discipline, football knowledge, and community responsibility.",
  description:
    "GCC Chalissery's coaching culture is built around structured player development, clear standards, and leadership that understands both modern football and the values of the local football community.",
  featured: {
    name: "Nawas K",
    role: "Technical Director",
    specialization: "AFC B License Holder",
    quote:
      "Every player deserves a serious environment where discipline, confidence, teamwork, and football intelligence can grow together.",
    image: "/academy-content/team/technical/nawas-k-technical-director.jpg",
  },
  coaches: [
    {
      name: "Ramshad KH",
      role: "Head Coach (U-15)",
      specialization: "AFC C License Holder",
      focus: "Age-group coaching, match preparation, and long-term player progress.",
      image: "/academy-content/team/coaches/ramshad-KH-head-coach.jpg",
    },
    {
      name: "Sandeep",
      role: "Head Coach (U-13)",
      specialization: "AIFF D License Holder",
      focus: "Ball mastery, passing quality, first touch, and tactical awareness.",
      image: "/academy-content/team/coaches/sandeep-head-coach.jpg",
    },
    {
      name: "Nikhil PV",
      role: "Head Coach (U-10)",
      specialization: "Grassroots License Holder",
      focus: "Physical preparation, training habits, and player responsibility.",
      image: "/academy-content/team/coaches/nihkil-PV-head-coach.jpg",
    },
  ],
  philosophy: [
    "Discipline before talent",
    "Technique with purpose",
    "Confidence through match exposure",
    "Respect for the badge and community",
  ],
} as const;

export const academyExperience = [
  {
    title: "Structured Training",
    description:
      "Planned sessions built around technical development, tactical clarity, and consistent player progress.",
    icon: CalendarCheck,
  },
  {
    title: "Discipline & Teamwork",
    description:
      "A serious academy culture where players learn respect, accountability, humility, and collective standards.",
    icon: Users,
  },
  {
    title: "Match Exposure",
    description:
      "Training that prepares players to apply their learning in competitive match environments.",
    icon: Goal,
  },
  {
    title: "Career-Focused Development",
    description:
      "Guidance for young footballers who want to build a future through football in Kerala and beyond.",
    icon: Route,
  },
] as const;

export const playerPathway = [
  "Join GCC",
  "Train with Discipline",
  "Compete in Matches",
  "Grow as a Player",
  "Move Toward Professional Football",
] as const;

export const gccStandard = {
  eyebrow: "The GCC standard",
  title: "A badge carried with discipline, pride, and purpose.",
  description:
    "Every player who enters GCC is expected to train with humility, compete with courage, and represent Chalissery's football culture with respect.",
  pillars: [
    "Discipline before talent",
    "Community before ego",
    "Training with purpose",
    "Football as a pathway",
  ],
} as const;

export const aiffHighlights = [
  {
    title: "AIFF Affiliated Academy",
    description:
      "Official recognition places GCC inside India's professional football development pathway.",
    icon: BadgeCheck,
  },
  {
    title: "Professional Development Standards",
    description:
      "Training culture, coaching expectations, and player habits are aligned with modern academy football.",
    icon: ShieldCheck,
  },
  {
    title: "U-10, U-13, and U-15 Category Focus",
    description:
      "Focused age-group development helps talented young players receive the right training at the right stage.",
    icon: Target,
  },
  {
    title: "Career Opportunities Through Football",
    description:
      "The academy prepares players to pursue opportunities at higher levels of the game.",
    icon: Trophy,
  },
] as const;

export const achievementsRecognition = {
  eyebrow: "Achievements & Recognition",
  title: "Proof of legacy, growth, and football development.",
  description:
    "GCC Chalissery's credibility is built through decades of community football, academy growth, tournament participation, and a professional development pathway for young players.",
  featuredImage: teamAchievements[0].image,
  supportImages: teamAchievements.map((item) => ({
    label: item.title,
    image: item.image,
  })),
  proofPoints: [
    {
      value: "45+",
      label: "Years Legacy",
      description: "A trusted football identity rooted in Chalissery since 1980.",
    },
    {
      value: "2021",
      label: "Academy Established",
      description: "A structured academy model created for grassroots player development.",
    },
    {
      value: "3",
      label: "Age Categories",
      description: "Programs for U-10, U-13, and U-15 football development.",
    },
    {
      value: "AIFF",
      label: "Affiliated Academy",
      description: "Connected to India's professional football development pathway.",
    },
  ],
  highlights: [
    "Community Football Culture",
    "Tournament Participation",
    "Youth Development Focus",
  ],
} as const;

export const galleryStory = [
  {
    title: "Training",
    category: "Technical sessions",
    image: "/academy-content/media/WhatsApp Image 2026-06-23 at 12.38.58 PM.jpeg",
  },
  {
    title: "Team Culture",
    category: "Togetherness",
    image: "/academy-content/media/WhatsApp Image 2026-06-23 at 12.50.26 PM.jpeg",
  },
  {
    title: "Match Preparation",
    category: "Competitive mindset",
    image: "/academy-content/media/WhatsApp Image 2026-06-23 at 12.39.03 PM.jpeg",
  },
  {
    title: "Community",
    category: "Chalissery spirit",
    image: "/academy-content/media/WhatsApp Image 2026-06-23 at 12.33.48 PM.jpeg",
  },
] as const;

export const galleryMoments = {
  eyebrow: "Gallery & Moments",
  title: "Academy culture told through real football moments.",
  description:
    "Training intensity, match preparation, tournament pride, community events, and player development moments that show the spirit of GCC Chalissery.",
  categories: [
    "All",
    "Training",
    "Matches",
    "Tournaments",
    "Community",
    "Achievements",
  ],
  featured: {
    title: "Young champions, shared pride",
    category: "Achievements",
    caption:
      "Trophy moments that reflect confidence, discipline, and the belief of a football-loving community.",
    image: teamAchievements[0].image,
  },
  items: galleryPreviewImages.map((item) => ({
    title: item.title,
    category:
      item.category === "Training Sessions"
        ? "Training"
        : item.category === "Match Days"
          ? "Matches"
          : item.category === "Tournament Moments"
            ? "Tournaments"
            : item.category === "Community Activities" ||
                item.category === "Registration & Events"
              ? "Community"
              : item.category === "Team Celebrations" ||
                  item.category === "Team Photos"
                ? "Community"
                : "Training",
    caption: `${item.category} from GCC Chalissery Football Academy.`,
    image: item.image,
  })),
} as const;

export const testimonialsTrust = {
  eyebrow: "Parent trust",
  title: "Confidence built through players, families, and community belief.",
  description:
    "GCC Chalissery is trusted by football families because the academy develops more than technique. Players learn discipline, confidence, teamwork, and the habits needed to grow inside and beyond the game.",
  featured: {
    quote:
      "GCC gives young players a serious football environment while keeping the values of our community at the centre. The training, discipline, and encouragement have helped our children believe in their football journey.",
    name: "Parent of U-13 Player",
    role: "Academy football family",
  },
  testimonials: [
    {
      quote:
        "The academy culture is disciplined, supportive, and focused on long-term player growth.",
      name: "U-14 Parent",
      role: "Youth development group",
    },
    {
      quote:
        "Players are taught respect, teamwork, and confidence along with football skills.",
      name: "Academy Supporter",
      role: "Chalissery community",
    },
    {
      quote:
        "GCC feels like a professional pathway built on genuine local football passion.",
      name: "Youth Player Family",
      role: "Development pathway",
    },
  ],
  metrics: [
    "45+ Years Legacy",
    "Academy Established 2021",
    "AIFF Affiliated",
    "Community Powered",
  ],
} as const;

export const finalHomeCta = {
  eyebrow: "Join the pathway",
  title: "Your Football Journey Starts Here.",
  description:
    "Join GCC Chalissery Football Academy and become part of a football culture built on discipline, development and opportunity.",
  image: "/academy-content/media/WhatsApp Image 2026-06-23 at 12.39.03 PM.jpeg",
  primaryAction: "Join Academy",
  secondaryAction: "Book Trial Session",
  tertiaryAction: "Contact Us",
  trustIndicators: [
    "Since 1980",
    "AIFF Affiliated",
    "45+ Years Legacy",
    "Community Driven",
  ],
} as const;

export const aboutPreview = {
  eyebrow: "About GCC",
  title: "A community-powered academy with a professional football vision.",
  description:
    "Founded in 1980 as a local arts and sports club, GCC has grown through Kerala's football culture and Sevens tournaments into an AIFF affiliated academy committed to nurturing talented young players.",
  image: "/academy-content/media/WhatsApp Image 2026-06-23 at 12.50.27 PM.jpeg",
} as const;

export const whyChooseGcc: (FeatureItem & {
  icon: typeof ShieldCheck;
})[] = [
  {
    title: "AIFF affiliated pathway",
    description:
      "Official affiliation connects the academy to India's professional football development ecosystem.",
    icon: CalendarCheck,
  },
  {
    title: "45+ years of trust",
    description:
      "A legacy built through local football, community support, and decades of sporting commitment.",
    icon: HeartHandshake,
  },
  {
    title: "Career-focused training",
    description:
      "Coaching is designed to develop technical quality, discipline, confidence, and football careers.",
    icon: Flag,
  },
  {
    title: "Community powered",
    description:
      "The academy is driven by the passion and collective strength of Chalissery's football community.",
    icon: Dumbbell,
  },
];

export const clubCulture: (CultureItem & {
  icon: typeof Users;
})[] = [
  {
    title: "Respect the badge",
    description:
      "Players are encouraged to carry the GCC legacy with humility, punctuality, and pride.",
    icon: ShieldCheck,
  },
  {
    title: "Train with intensity",
    description:
      "Every session blends enjoyment with high standards, effort, and accountability.",
    icon: Sparkles,
  },
  {
    title: "Grow together",
    description:
      "Parents, coaches, supporters, and players move together as one football-loving community.",
    icon: Users,
  },
];

export const achievementsPreview: AchievementItem[] = [
  {
    label: "Legacy",
    value: "45+",
    description: "Years of sporting identity since GCC was founded in 1980.",
  },
  {
    label: "Affiliation",
    value: "AIFF",
    description:
      "Officially affiliated with the All India Football Federation in 2024.",
  },
  {
    label: "Focus",
    value: "U-10/U-13/U-15",
    description: "Dedicated youth development for aspiring footballers.",
  },
];

export const galleryPreview: GalleryItem[] = galleryPreviewImages.map((item) => ({
  title: item.title,
  category: item.category,
  image: item.image,
}));

export const achievementIcons = [Trophy, Award, Medal] as const;
