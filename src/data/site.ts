export const academyContact = {
  academyName: "GCC Chalissery Football Academy",
  location: "Chalissery, Kerala, India",
  phone: "+91 95392 67730",
  whatsapp: "https://wa.me/919539267730",
  email: "Info@gccacademy.in",
  map: "https://www.google.com/maps/place/GCC+Arts+and+Sports+Club,+Chalissery/@10.7320936,76.0813467,78m/data=!3m1!1e3!4m15!1m8!3m7!1s0x3ba7c0a07db465bf:0x543aa477302a0283!2sChalissery,+Kerala+679536,+India!3b1!8m2!3d10.7348632!4d76.0885011!16s%2Fm%2F03c15wz!3m5!1s0x3ba7bf0c1abb3357:0xcbc4c5dd3e118947!8m2!3d10.7319274!4d76.0811534!16s%2Fg%2F11rxyc3c28?hl=en&entry=ttu&g_ep=EgoyMDI2MDYyMy4wIKXMDSoASAFQAw%3D%3D",
  instagram: "https://www.instagram.com/gcc_football_academy/",
  facebook: "https://www.facebook.com/p/GCC-Chalissery-100063883293611/",
  youtube: "",
} as const;

export const primaryNav = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Academy", href: "/academy" },
  { label: "Our Team", href: "/team" },
  { label: "Achievements", href: "/achievements" },
  { label: "Gallery", href: "/gallery" },
  { label: "Contact", href: "/contact" },
] as const;

export const siteConfig = {
  name: "GCC Chalissery Football Academy",
  shortName: "GCC Chalissery",
  description:
    "AIFF affiliated football academy from Chalissery, built on a sporting legacy dating back to 1980 and powered by community support.",
  url: "https://gccacademy.in",
  locale: "en_IN",
  contact: academyContact,
} as const;

export const homeContent = {
  hero: {
    eyebrow: "AIFF Affiliated Football Academy",
    title: "From Chalissery's Playgrounds to India's Professional Football Pathway.",
    description:
      "Founded on a proud sporting legacy dating back to 1980, GCC Football Academy is dedicated to developing the next generation of football talent through structured coaching, modern training methodologies, and strong community support. Our mission is to create disciplined athletes, responsible individuals, and future professionals while ensuring every child's education remains a priority.",
    primaryAction: "Join GCC Academy",
    secondaryAction: "Explore Our Academy",
    image: "/academy-content/media/WhatsApp Image 2026-06-23 at 12.38.56 PM.jpeg",
    stats: [
      { label: "Founded", value: "1980" },
      { label: "Academy Established", value: "2021" },
      { label: "AIFF Affiliated", value: "2024" },
      { label: "Training Categories", value: "U-10 • U-13 • U-15" },
    ],
  },
  order: [
    "Hero",
    "Legacy Preview",
    "Training Philosophy",
    "Academy Pathway",
    "Why GCC",
    "Achievements Preview",
    "Gallery Preview",
    "Final CTA",
  ],
} as const;

export const aboutContent = {
  title: "About GCC Chalissery Football Academy",
  intro:
    "GCC Chalissery Football Academy is a grassroots football development institution rooted in the sporting culture of Chalissery, Kerala.",
  story: [
    "Established in 1980 as a local arts and sports club, GCC has grown into one of the region's most respected football institutions. What began as a community-driven initiative with a passion for football has evolved into a professional academy dedicated to developing talented young players through structured coaching and long-term player development.",
    "Inspired by decades of football tradition and success in local competitions, GCC Football Academy was officially established in 2021 with a vision to provide scientific, modern, and internationally inspired football training for young athletes.",
    "A major milestone was achieved in 2024 when the academy received affiliation from the All India Football Federation (AIFF), opening a direct pathway for aspiring players to compete within India's official football development system.",
    "Today, GCC Football Academy proudly trains young footballers through professionally designed development programs, experienced coaching, and a supportive learning environment where education and sport progress together.",
    "Rather than being driven by large corporate investments, GCC continues to grow through the unwavering support of the local community, football lovers, parents, and volunteers who believe in creating opportunities for the next generation.",
    "With numerous players progressing to higher levels of football both within and beyond Kerala, GCC Football Academy continues its journey of shaping disciplined athletes and future professionals while proudly representing the football culture of Chalissery.",
  ],
  highlights: [
    "Established in 1980 with over four decades of football heritage.",
    "Professional football academy established in 2021.",
    "AIFF Affiliated Football Academy since 2024.",
    "Community-powered institution built on local support.",
    "Structured player development with a professional career pathway.",
    "Focused on balancing education and football development.",
  ],
  milestones: [
    {
      year: "1980",
      title: "Local Arts & Sports Club",
      description:
        "GCC began as a community sports club built by football lovers in Chalissery.",
    },
    {
      year: "2021",
      title: "Football Academy Formed",
      description:
        "A structured youth academy was created with a professional training vision.",
    },
    {
      year: "2024",
      title: "AIFF Affiliation",
      description:
        "GCC became connected to India's professional football development ecosystem.",
    },
    {
      year: "Today",
      title: "Grassroots Player Development",
      description:
        "The academy develops U-10, U-13, and U-15 players through football, fitness, education, and character.",
    },
  ],
  vision:
    "To nurture world-class football talent from the grassroots of Chalissery by combining community support, future CSR partnerships, and professional football development to create a model academy that provides deserving young players with a clear pathway into Indian professional football.",
  mission: [
    {
      title: "Community & Future CSR Partnerships",
      description:
        "To strengthen the academy through transparent governance, community participation, and future CSR partnerships that support world-class football infrastructure and long-term player development.",
    },
    {
      title: "Professional Football Training",
      description:
        "To provide scientific, modern, and age-appropriate football training through experienced coaches, structured development programs, and internationally inspired coaching methods.",
    },
    {
      title: "Social Responsibility Through Sport",
      description:
        "To identify talented children regardless of financial background and provide opportunities that help them develop confidence, discipline, leadership, and life skills through football.",
    },
    {
      title: "Professional Career Pathway",
      description:
        "To leverage AIFF affiliation, quality coaching, and strong football networks to create opportunities for players to progress into professional clubs, elite competitions, and national-level football.",
    },
  ],
  objectives: [
    {
      title: "Strategic Academy Development",
      description:
        "Develop the academy through transparent planning, sustainable partnerships, and long-term football development initiatives.",
    },
    {
      title: "Grassroots Talent Identification",
      description:
        "Identify talented young footballers from local communities at an early age and provide structured coaching that enables them to reach their full potential.",
    },
    {
      title: "Infrastructure & Resource Development",
      description:
        "Continuously improve training facilities, coaching resources, football equipment, sports science support, and the overall learning environment.",
    },
    {
      title: "National Exposure",
      description:
        "Provide players with opportunities to participate in official AIFF competitions, youth leagues, tournaments, and elite football platforms across India.",
    },
    {
      title: "Holistic Player Development",
      description:
        "Develop disciplined athletes who demonstrate leadership, teamwork, responsibility, sportsmanship, and strong character both on and off the field.",
    },
  ],
} as const;

export const academyPrograms = [
  {
    ageGroup: "U-10",
    title: "Foundation Program",
    description:
      "Designed for young beginners, this program focuses on developing love for football, basic ball control, coordination, movement, and confidence.",
    shortDescription:
      "First-touch learning through ball mastery, movement, and confidence.",
    training: "2 sessions/week",
    focus: "Ball Mastery",
    focusAreas: [
      "Ball Mastery",
      "Coordination",
      "Movement Skills",
      "Confidence Building",
      "Enjoyment of Football",
    ],
    image: "/academy-content/media/WhatsApp Image 2026-06-23 at 12.33.44 PM.jpeg",
  },
  {
    ageGroup: "U-13",
    title: "Development Program",
    description:
      "Focused on technical growth, tactical awareness, discipline, and teamwork as players begin to understand the game more deeply.",
    shortDescription:
      "Technical growth, tactical awareness, and disciplined team habits.",
    training: "3 sessions/week",
    focus: "Game IQ",
    focusAreas: [
      "Technical Development",
      "Tactical Awareness",
      "Team Play",
      "Decision Making",
      "Physical Development",
    ],
    image: "/academy-content/media/WhatsApp Image 2026-06-23 at 12.38.57 PM.jpeg",
  },
  {
    ageGroup: "U-15",
    title: "Performance Program",
    description:
      "Prepares players for competitive football with advanced technical work, tactical intelligence, match fitness, leadership, and professional preparation.",
    shortDescription:
      "Fitness, match tempo, and competitive readiness.",
    training: "3-4 sessions/week",
    focus: "Match Tempo",
    focusAreas: [
      "Advanced Techniques",
      "Tactical Intelligence",
      "Match Fitness",
      "Leadership",
      "Professional Preparation",
    ],
    image: "/academy-content/media/WhatsApp Image 2026-06-23 at 12.39.00 PM.jpeg",
  },
] as const;

export const trainingPhilosophy = {
  title: "Football Without Compromising Education",
  description:
    "GCC Chalissery Football Academy believes that young players should grow as footballers without losing focus on their education. The academy schedule is designed to support football development while respecting school commitments and family priorities.",
  pillars: [
    {
      title: "Practical Ground Sessions",
      schedule: "Saturdays, Sundays, and school holidays · 4:30 PM - 6:00 PM",
      description:
        "On-ground sessions focus on technical skills, tactical understanding, team play, match fitness, and decision making.",
      focus: [
        "Technical Skills",
        "Tactical Understanding",
        "Team Play",
        "Match Fitness",
        "Decision Making",
      ],
    },
    {
      title: "Home Workout Schedule",
      schedule: "20 minutes · Monday to Friday",
      description:
        "Players receive exercise guidance, video demos, and weekly progress tracking to develop strength and consistency away from the pitch.",
      focus: [
        "Core Strength",
        "Agility",
        "Stamina",
        "Mobility",
        "Injury Prevention",
      ],
    },
    {
      title: "Personality Development Program",
      schedule: "Monthly development sessions",
      description:
        "Sessions help young footballers build discipline, leadership, communication, confidence, and balance between studies and sport.",
      focus: [
        "Discipline & Time Management",
        "Teamwork & Communication",
        "Goal Setting",
        "Mental Toughness",
        "Nutrition Awareness",
        "Study-Football Balance",
        "Leadership Development",
        "Positive Sporting Values",
      ],
    },
  ],
} as const;
