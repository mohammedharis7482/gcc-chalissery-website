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

export const homeHero = {
  eyebrow: "AIFF affiliated football academy",
  title: "From Chalissery's playgrounds to Indian football's professional pathway.",
  description:
    "Welcome to GCC Chalissery Football Academy - a community-powered football academy building disciplined, talented, and career-focused players since 1980.",
  primaryAction: "Explore Academy",
  secondaryAction: "Contact Club",
  image: "/images/u14-team-green.jpg",
} as const;

export const heroStats = [
  { label: "Founded", value: "1980" },
  { label: "Affiliated", value: "AIFF" },
  { label: "Legacy", value: "45+ Years" },
  { label: "Focus", value: "U-14 & U-17" },
] as const;

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
    title: "Developing U-14 and U-17 football talents",
    description:
      "The academy now focuses on identifying, developing, and nurturing young players for higher levels of the game.",
  },
] as const;

export const legacyImages = {
  recognition: "/images/newspaper-recognition.jpg",
  handover: "/images/logo-handover-wide.jpg",
  community: "/images/academy-group-event.jpg",
  identity: "/images/player-handshake.jpg",
} as const;

export const academyExcellence = {
  eyebrow: "WHY GCC CHALISSERY",
  title: "Building Footballers Beyond The Game",
  description:
    "For over four decades, GCC Chalissery has helped young players develop football skills, discipline, confidence, leadership, and a pathway toward competitive football opportunities.",
  image: "/images/fitness-training-group.jpg",
  badges: ["45+ Years Legacy", "AIFF Affiliated Academy"],
  proofStats: [
    "45+ Years Legacy",
    "AIFF Affiliated",
    "U-14 & U-17 Focus",
    "Community Powered",
  ],
  thumbnails: [
    {
      label: "Team Culture",
      image: "/images/academy-group-event.jpg",
    },
    {
      label: "Training",
      image: "/images/fitness-training-group.jpg",
    },
    {
      label: "Trophy Moment",
      image: "/images/young-champions-trophy.jpg",
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
  image: "/images/academy-group-event.jpg",
} as const;

export const trainingStoryImage = "/images/fitness-training-group.jpg";

export const academyProgramsShowcase = {
  eyebrow: "Academy programs",
  title: "A clear pathway for every stage of young football development.",
  description:
    "From first-touch fundamentals to elite age-group preparation, GCC Chalissery builds players through structured, age-appropriate football development.",
  programs: [
    {
      ageGroup: "U-10",
      title: "Foundation Program",
      description:
        "First-touch learning through ball mastery, movement, and confidence.",
      tags: ["Ball Mastery", "Movement", "Confidence"],
      training: "2 sessions/week",
      focus: "Ball Mastery",
      image: "/images/academy-classroom-session.jpg",
    },
    {
      ageGroup: "U-13",
      title: "Development Program",
      description:
        "Technical growth, tactical awareness, and disciplined team habits.",
      tags: ["Technique", "Game IQ", "Discipline"],
      training: "3 sessions/week",
      focus: "Game IQ",
      image: "/images/u14-team-blue-wide.jpg",
    },
    {
      ageGroup: "U-15",
      title: "Performance Program",
      description:
        "Higher-intensity football focused on fitness and match readiness.",
      tags: ["Fitness", "Match Tempo", "Team Play"],
      training: "3-4 sessions/week",
      focus: "Match Tempo",
      image: "/images/fitness-training-group.jpg",
    },
    {
      ageGroup: "U-17",
      title: "Elite Pathway",
      description:
        "Advanced preparation for exposure, leadership, and competitive football.",
      tags: ["Exposure", "Leadership", "Pathway"],
      training: "Advanced preparation",
      focus: "Pathway",
      image: "/images/match-action-youth.jpg",
    },
  ],
} as const;

export const coachesLeadership = {
  eyebrow: "Coaches & Leadership",
  title: "Guided by discipline, football knowledge, and community responsibility.",
  description:
    "GCC Chalissery's coaching culture is built around structured player development, clear standards, and leadership that understands both modern football and the values of the local football community.",
  featured: {
    name: "Coach Name",
    role: "Head Coach / Academy Leadership",
    specialization: "Player development direction",
    quote:
      "Every player deserves a serious environment where discipline, confidence, teamwork, and football intelligence can grow together.",
    image: "/images/logo-handover-wide.jpg",
  },
  coaches: [
    {
      name: "Coach Name",
      role: "Youth Development Coach",
      specialization: "U-14 and U-17 development",
      focus: "Age-group coaching, match preparation, and long-term player progress.",
      image: "/images/u14-team-green.jpg",
    },
    {
      name: "Coach Name",
      role: "Technical Training Coach",
      specialization: "Technical development",
      focus: "Ball mastery, passing quality, first touch, and tactical awareness.",
      image: "/images/fitness-training-group.jpg",
    },
    {
      name: "Coach Name",
      role: "Fitness & Performance Support",
      specialization: "Fitness and discipline",
      focus: "Physical preparation, training habits, and player responsibility.",
      image: "/images/academy-group-event.jpg",
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
    title: "U-14 and U-17 Category Focus",
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
  featuredImage: "/images/young-champions-trophy.jpg",
  supportImages: [
    {
      label: "Trophy presentation",
      image: "/images/trophy-presentation.jpg",
    },
    {
      label: "Community recognition",
      image: "/images/newspaper-recognition.jpg",
    },
    {
      label: "Academy culture",
      image: "/images/academy-group-event.jpg",
    },
  ],
  proofPoints: [
    {
      value: "45+",
      label: "Years Legacy",
      description: "A trusted football identity rooted in Chalissery since 1980.",
    },
    {
      value: "120+",
      label: "Active Players",
      description: "Young footballers training across structured academy groups.",
    },
    {
      value: "4",
      label: "Development Pathways",
      description: "Age-focused programs from foundation to elite preparation.",
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
    image: "/images/fitness-training-group.jpg",
  },
  {
    title: "Team Culture",
    category: "Togetherness",
    image: "/images/academy-group-event.jpg",
  },
  {
    title: "Match Preparation",
    category: "Competitive mindset",
    image: "/images/match-action-youth.jpg",
  },
  {
    title: "Community",
    category: "Chalissery spirit",
    image: "/images/player-handshake.jpg",
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
    image: "/images/young-champions-trophy.jpg",
  },
  items: [
    {
      title: "Fitness with purpose",
      category: "Training",
      caption: "Physical development and discipline built into the weekly academy rhythm.",
      image: "/images/fitness-training-group.jpg",
    },
    {
      title: "Match-day intensity",
      category: "Matches",
      caption: "Young players learning to compete with courage and clarity.",
      image: "/images/match-action-goal.jpg",
    },
    {
      title: "Tournament recognition",
      category: "Tournaments",
      caption: "Visual proof of participation, pride, and progress on the football stage.",
      image: "/images/trophy-presentation.jpg",
    },
    {
      title: "Squad presentation",
      category: "Tournaments",
      caption: "Young teams representing the academy with pride and preparation.",
      image: "/images/u14-team-blue-wide-2.jpg",
    },
    {
      title: "Community gathering",
      category: "Community",
      caption: "Families, players, and supporters moving together as one academy culture.",
      image: "/images/academy-group-event.jpg",
    },
    {
      title: "Academy identity",
      category: "Community",
      caption: "A badge and pathway shaped by the football people of Chalissery.",
      image: "/images/logo-handover-wide.jpg",
    },
    {
      title: "Legacy in the news",
      category: "Achievements",
      caption: "Recognition that connects GCC's past, present, and future.",
      image: "/images/newspaper-recognition.jpg",
    },
    {
      title: "U-14 team culture",
      category: "Training",
      caption: "Structured youth groups learning standards, discipline, and teamwork.",
      image: "/images/u14-team-blue-wide.jpg",
    },
  ],
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
    "120+ Active Players",
    "AIFF Affiliated",
    "100+ Families Connected",
  ],
} as const;

export const finalHomeCta = {
  eyebrow: "Join the pathway",
  title: "Your Football Journey Starts Here.",
  description:
    "Join GCC Chalissery Football Academy and become part of a football culture built on discipline, development and opportunity.",
  image: "/images/match-action-youth.jpg",
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
  image: "/images/logo-handover-wide.jpg",
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
    value: "U-14/U-17",
    description: "Dedicated youth development for aspiring footballers.",
  },
];

export const galleryPreview: GalleryItem[] = [
  {
    title: "Technical training",
    category: "Training",
    image: "/images/fitness-training-group.jpg",
  },
  {
    title: "Team culture",
    category: "Culture",
    image: "/images/academy-group-event.jpg",
  },
  {
    title: "Match preparation",
    category: "Performance",
    image: "/images/match-action-goal.jpg",
  },
  {
    title: "Match intensity",
    category: "Competition",
    image: "/images/match-action-youth.jpg",
  },
  {
    title: "U-14 squad identity",
    category: "Team",
    image: "/images/u14-team-blue-ground.jpg",
  },
  {
    title: "Academy classroom",
    category: "Learning",
    image: "/images/academy-classroom-session.jpg",
  },
  {
    title: "Player care",
    category: "Support",
    image: "/images/physio-announcement.jpg",
  },
  {
    title: "Squad presentation",
    category: "Academy",
    image: "/images/u14-team-blue-wide-2.jpg",
  },
  {
    title: "Community respect",
    category: "Culture",
    image: "/images/player-handshake.jpg",
  },
];

export const achievementIcons = [Trophy, Award, Medal] as const;
