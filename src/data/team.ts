export type TeamMember = {
  name: string;
  role: string;
  image?: string;
  bio?: readonly string[];
  qualifications?: readonly string[];
  experience?: readonly string[];
  services?: readonly string[];
};

export type TeamSection = {
  title: string;
  description: string;
  members: readonly TeamMember[];
};

export const teamIntro = {
  eyebrow: "Our Team",
  title: "Leadership, coaching, and support behind the GCC badge.",
  description:
    "GCC Chalissery Football Academy is guided by management, technical leadership, coaches, coordinators, media support, and physiotherapy partners committed to disciplined player development.",
  image: "/academy-content/media/WhatsApp Image 2026-06-23 at 12.38.56 PM (1).jpeg",
} as const;

export const teamSections: readonly TeamSection[] = [
  {
    title: "Management Team",
    description:
      "The Management Committee provides the overall leadership, administration, and strategic direction of GCC Football Academy. Their vision and commitment continue to strengthen the academy's foundation and guide its long-term growth.",
    members: [
      {
        name: "Shajahan Nalakath",
        role: "Club President",
        image: "/academy-content/team/management/shajahan-nalakath-president.jpg",
      },
      {
        name: "Jiju Jacob",
        role: "Secretary",
        image: "/academy-content/team/management/Jiju-Jacob-Secretory.jpg",
      },
      {
        name: "Ikbal Chalissery",
        role: "Treasurer",
        image: "/academy-content/team/management/Ikbal-chalissery-Treasurer.jpg",
      },
    ],
  },
  {
    title: "Technical Team",
    description:
      "The Technical Team is responsible for defining the academy's football philosophy, player development methodology, coaching standards, and long-term technical planning. Their experience at professional and elite levels plays a vital role in shaping every player's football journey.",
    members: [
      {
        name: "Nawas K",
        role: "Technical Director",
        image: "/academy-content/team/technical/nawas-k-technical-director.jpg",
        qualifications: ["AFC B License Holder"],
        experience: [
          "Kerala Blasters U-18 Head Coach",
          "Kerala Santosh Trophy Player (2012)",
        ],
      },
      {
        name: "Sreerag Ambadi",
        role: "Technical Director",
        image: "/academy-content/team/technical/sreerag-ambadi-technical-director.jpg",
        qualifications: ["AIFF D License Holder"],
        experience: [
          "Played in the I-League for Churchill Brothers FC, Goa",
          "Kerala Santosh Trophy Team Player (2014, 2015, 2017, 2018 & 2021)",
          "Currently represents Kerala Police Football Team",
        ],
      },
    ],
  },
  {
    title: "Academy Coordinators",
    description:
      "The Coordinators ensure the smooth execution of academy operations by supporting player management, communication, scheduling, registrations, and daily football activities.",
    members: [
      {
        name: "Mansoor",
        role: "Academy Coordinator",
        image: "/academy-content/team/technical/mansoor-technical-coordinator.jpg",
        qualifications: ["AIFF D License Holder"],
      },
      {
        name: "Shaibin",
        role: "Academy Coordinator",
        image: "/academy-content/team/technical/shaibin-technical-coordinator.jpg",
        qualifications: ["AIFF D License Holder", "BPED Holder"],
      },
      {
        name: "Abuthahir",
        role: "Academy Coordinator",
        image: "/academy-content/team/technical/abuthahir-technical-coordinator.jpg",
        qualifications: ["AIFF C License Holder"],
        experience: ["Serving in Indian Army"],
      },
      {
        name: "Noufal",
        role: "Academy Coordinator",
        image: "/academy-content/team/technical/noufal-technical-coordinator.jpg",
      },
      {
        name: "Farzana Thahir",
        role: "Academy Coordinator",
        image: "/academy-content/team/technical/farsana-technical-coordinator.jpg",
      },
    ],
  },
  {
    title: "Coaching Staff",
    description:
      "The Coaching Staff forms the heart of GCC Football Academy. Through structured coaching, technical guidance, and continuous mentorship, they help every player develop the skills, confidence, discipline, and mindset required to succeed both on and off the field.",
    members: [
      {
        name: "Ramshad KH",
        role: "Head Coach (U-15)",
        image: "/academy-content/team/coaches/ramshad-KH-head-coach.jpg",
        qualifications: ["AFC C License Holder", "BPED Holder"],
      },
      {
        name: "Sandeep",
        role: "Head Coach (U-13)",
        image: "/academy-content/team/coaches/sandeep-head-coach.jpg",
        qualifications: ["AIFF D License Holder"],
        experience: ["Former Calicut University Football Player"],
      },
      {
        name: "Nikhil PV",
        role: "Head Coach (U-10)",
        image: "/academy-content/team/coaches/nihkil-PV-head-coach.jpg",
        qualifications: [
          "BA Graduate",
          "BPED Holder",
          "MPED Holder",
          "Grassroots License Holder",
        ],
      },
      {
        name: "Irfan",
        role: "Assistant Coach",
        image: "/academy-content/team/coaches/irfan-assistant-coach.jpg",
        qualifications: ["AIFF D License Holder"],
      },
      {
        name: "Ashil",
        role: "Assistant Coach",
        image: "/academy-content/team/coaches/ashil-assistant-coach-jpg.jpeg",
        qualifications: ["AIFF D License Holder"],
      },
      {
        name: "Junaid",
        role: "Assistant Coach",
        image: "/academy-content/team/coaches/junaid-assistant-coach.jpg",
        qualifications: ["AIFF D License Holder"],
      },
      {
        name: "Nabeel",
        role: "Assistant Coach",
        image: "/academy-content/team/coaches/nabeel-assistant-coach.jpg",
        qualifications: ["Grassroots Development Coach"],
      },
    ],
  },
  {
    title: "Support Team",
    description:
      "The Support Team plays an essential role in maintaining the academy's professional standards through media management, technology support, communication, player welfare, and sports rehabilitation.",
    members: [
      {
        name: "Anaz IMA",
        role: "Media & Technology Wing Coordinator",
        image: "/academy-content/team/support/anaz-IMA-media&technology-wing-coordinator.jpg",
      },
      {
        name: "Mohammed Haris",
        role: "Media & Technology Wing Coordinator",
        image: "/academy-content/team/support/haris-media&technology-wing-coordinator.jpg",
      },
      {
        name: "Noufal",
        role: "Media & Technology Wing Coordinator",
        image: "/academy-content/team/support/noufal-media&technology-wing-coordinator.jpg",
      },
      {
        name: "Nimshad TK",
        role: "Physiotherapist",
        image: "/academy-content/team/support/nimshad-tk-physiotherapist.jpg",
        qualifications: [
          "BPT",
          "CDNT",
          "MFR",
          "SMT",
          "CDCT",
          "Diploma in Football Medicine (DFM - FIFA)",
          "Diploma in Varma Massage Science (DVMS)",
        ],
        experience: [
          "Former physiotherapist, Kerala U-17 Football Team",
          "Former physiotherapist, Calicut University Football Team",
          "Former physiotherapist, Kerala Police Football Team",
          "Former physiotherapist, MSP Malappuram Football Team",
        ],
      },
      {
        name: "Impact Physiotherapy & Sports Clinic",
        role: "Official Physiotherapy Centre",
        image: "/academy-content/team/support/impact-physiotherapy.jpg",
        services: [
          "BPT",
          "CDNT",
          "MFR",
          "SMT",
          "CDCT",
          "Diploma in Football Medicine (DFM - FIFA)",
          "Diploma in Varma Massage Science (DVMS)",
        ],
      },
    ],
  },
] as const;
