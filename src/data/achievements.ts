export type TeamAchievement = {
  title: string;
  year: string;
  description: string;
  image: string;
};

export type PlayerAchievement = {
  name: string;
  achievement: string;
  image: string;
  description: string;
};

export const achievementsIntro = {
  eyebrow: "Achievements & Recognition",
  title: "Proof of legacy, player growth, and competitive football culture.",
  description:
    "GCC's achievements include team tournament recognition and a growing list of players who have represented university, district, state, services, and licensed coaching pathways.",
  image: "/academy-content/achievements/u-17-runnerup-jpg.jpeg",
} as const;

export const teamAchievements: readonly TeamAchievement[] = [
  {
    title: "Palakkad District Youth League, Pattambi Zone — U-17 Runner-Up",
    year: "2025",
    description:
      "GCC Football Academy secured the U-17 Runner-Up position in the Palakkad District Youth League, Pattambi Zone, showcasing strong team performance and competitive youth development.",
    image: "/academy-content/achievements/pkd-u-17-runnerup-jpg.jpeg",
  },
  {
    title: "Chackolas Gold Trophy 2023–24 — U-14 Second Runner-Up",
    year: "2024",
    description:
      "The GCC U-14 team earned the Second Runner-Up position in the Chackolas Gold Trophy 2023–24, highlighting the academy’s growing strength at the youth level.",
    image: "/academy-content/achievements/u-14-2nd-runnerup.jpg",
  },
  {
    title: "Chackolas Gold Trophy 2023–24 — U-17 Runner-Up",
    year: "2024",
    description:
      "The GCC U-17 team finished as Runner-Up in the Chackolas Gold Trophy 2023–24 after a strong campaign, demonstrating discipline, teamwork, and competitive consistency.",
    image: "/academy-content/achievements/u-17-runnerup-jpg.jpeg",
  },
] as const;

export const playerAchievements: readonly PlayerAchievement[] = [
  {
    name: "Anoop",
    achievement:
      "Kerala Under-21 State Team, Calicut University, Viva Kerala Club, currently working as Inspector of Customs and Central GST.",
    image: "/academy-content/players/anoop-kerala-u21-jpg.jpeg",
    description:
      "Anoop is one of GCC’s proud football talents who progressed through competitive football, representing Kerala Under-21, Calicut University, and Viva Kerala before moving into a respected professional career.",
  },
  {
    name: "Sreyas VG",
    achievement:
      "Played AFC Cup in Bangladesh, played three seasons in the I-League, represented the Services football team four times in the Santosh Trophy, played for Calicut University, and is currently an Indian Navy football player.",
    image: "/academy-content/players/sreyas-indian-navy-football.jpg",
    description:
      "Sreyas VG represents one of GCC’s strongest football journeys, progressing into professional and service-level football with experience in the AFC Cup, I-League, Santosh Trophy, Calicut University, and Indian Navy Football.",
  },
  {
    name: "Ajmal",
    achievement:
      "Sub-Junior and Junior Kerala Team player, played Santosh Trophy for the Pondicherry team, and is a BPED holder.",
    image: "/academy-content/players/ajmal-pondichery-team.jpg",
    description:
      "Ajmal has represented Kerala at the Sub-Junior and Junior levels and later competed in the Santosh Trophy for Pondicherry, continuing his football journey with strong academic grounding in physical education.",
  },
  {
    name: "Masood",
    achievement:
      "Played for Pondicherry University Team, U-21 Thrissur District Team, Inter Zone Champions, BPED and MPED holder.",
    image: "/academy-content/players/masood-pondichery-university-team.jpg",
    description:
      "Masood has represented Pondicherry University and the U-21 Thrissur District Team, contributing to Inter Zone Championship success while also advancing his academic qualifications in physical education.",
  },
  {
    name: "Midhilaj",
    achievement: "Played for Calicut University Team in 2026.",
    image: "/academy-content/players/midhilaj-calicut-university.jpeg",
    description:
      "Midhilaj proudly represented Calicut University Football Team in 2026, continuing GCC’s tradition of producing players for university-level football.",
  },
  {
    name: "Shehin",
    achievement:
      "Played for Kerala U-17 Team in 2017–2018 and Kerala U-19 Team in 2019.",
    image: "/academy-content/players/shehin-kerala-u19,u17.jpg",
    description:
      "Shehin represented Kerala at both U-17 and U-19 levels, marking an important achievement in GCC’s player development pathway.",
  },
  {
    name: "Mohammed Safvan",
    achievement:
      "Played for the Kerala U-19 Football Team in 2024–2025 and won the Gold Medal.",
    image: "/academy-content/players/safwan-kerala-u19.jpg",
    description:
      "Mohammed Safvan represented the Kerala U-19 Football Team during the 2024–2025 season and was part of the Gold Medal-winning team.",
  },
  {
    name: "Abdul Basith",
    achievement: "Played for the Kerala U-17 Team in 2024.",
    image: "/academy-content/players/abdul-basith-kerala-u17.jpg",
    description:
      "Abdul Basith represented the Kerala U-17 Team in 2024, adding to GCC Football Academy’s growing list of state-level youth players.",
  },
  {
    name: "Sinan",
    achievement: "Played for the Kerala U-17 Team in 2024.",
    image: "/academy-content/players/sinan-kerala-u17.jpg",
    description:
      "Sinan represented the Kerala U-17 Team in 2024, showcasing the academy’s continued contribution to state-level youth football.",
  },
  {
    name: "Sagar",
    achievement: "Played for the Calicut District Senior Team.",
    image: "/academy-content/players/sagar-calicut-snr team.jpg",
    description:
      "Sagar represented the Calicut District Senior Team, progressing into senior district-level football.",
  },
  {
    name: "Midhun Krishna",
    achievement: "Played for the Thrissur District Senior Team.",
    image: "/academy-content/players/midhun-krishna-thrissur-snr-team.jpg",
    description:
      "Midhun Krishna represented the Thrissur District Senior Team, marking an important senior-level district football achievement.",
  },
  {
    name: "Ashil",
    achievement: "Played for the Palakkad District Senior Team.",
    image: "/academy-content/players/ashil-palakkad-snr-team.jpg",
    description:
      "Ashil represented the Palakkad District Senior Team, continuing his football journey at the senior district level.",
  },
  {
    name: "Aswin",
    achievement: "AIFF D License holder.",
    image: "/academy-content/players/aswin-aiff -d-license.jpg",
    description:
      "Aswin has completed the AIFF D License, strengthening his contribution to football through coaching education and player development.",
  },
  {
    name: "Mohammed Sinan",
    achievement: "Played for the U-19 Palakkad District Team.",
    image: "/academy-content/players/sinan-palakkad-u19.jpg",
    description:
      "Mohammed Sinan represented the U-19 Palakkad District Team, highlighting his development through competitive district-level football.",
  },
  {
    name: "Muhammed Niyas",
    achievement: "Played for the U-19 Palakkad District Team.",
    image: "/academy-content/players/muhammed-niyas-palakkad-u19.jpg",
    description:
      "Muhammed Niyas represented the U-19 Palakkad District Team, contributing to GCC’s presence in youth district football.",
  },
  {
    name: "Misbah",
    achievement: "Played for the U-21 Thrissur District Team.",
    image: "/academy-content/players/misbah-thrissur-u21.jpg",
    description:
      "Misbah represented the U-21 Thrissur District Team, progressing into higher youth-level district football.",
  },
  {
    name: "Sanoj",
    achievement: "Played for the U-17 Palakkad District Team.",
    image: "/academy-content/players/sanoj-palakkad-u17.jpg",
    description:
      "Sanoj represented the U-17 Palakkad District Team, reflecting GCC’s contribution to district youth football development.",
  },
  {
    name: "Anaj",
    achievement: "Played for the U-17 Palakkad District Team.",
    image: "/academy-content/players/anaj-palakkad-u17.jpg",
    description:
      "Anaj represented the U-17 Palakkad District Team, continuing the academy’s pathway into district-level youth football.",
  },
  {
    name: "Lisan",
    achievement: "Played for the U-17 Palakkad District Team.",
    image: "/academy-content/players/lisan-palakkad-u17.jpg",
    description:
      "Lisan represented the U-17 Palakkad District Team, showing strong progress through GCC’s youth development pathway.",
  },
  {
    name: "Muhammed Sinad",
    achievement: "Played for the U-17 Palakkad District Team.",
    image: "/academy-content/players/muhammed-sinad-palakkad-u17.jpg",
    description:
      "Muhammed Sinad represented the U-17 Palakkad District Team, adding to GCC’s list of district-level youth footballers.",
  },
  {
    name: "Prinil",
    achievement: "Played for the U-14 Palakkad District Team.",
    image: "/academy-content/players/prinil-palakkad-u14.jpg",
    description:
      "Prinil represented the U-14 Palakkad District Team, demonstrating early-stage development through competitive youth football.",
  },
  {
    name: "Sanjay Krishna",
    achievement: "Played for the U-14 Palakkad District Team.",
    image: "/academy-content/players/sanjay-krishna-palakkad-u14.jpg",
    description:
      "Sanjay Krishna represented the U-14 Palakkad District Team, highlighting GCC’s grassroots contribution to district football.",
  },
] as const;
