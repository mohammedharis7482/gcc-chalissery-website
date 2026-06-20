import Link from "next/link";
import type { Metadata } from "next";
import {
  ArrowRight,
  Award,
  BadgeCheck,
  Medal,
  Trophy,
  Users,
} from "lucide-react";

import { FadeIn } from "@/components/motion/fade-in";
import { InnerPageHero } from "@/components/sections/inner-page-hero";
import { Container } from "@/components/ui/container";
import { CTASection } from "@/components/ui/cta-section";
import { FeatureCard } from "@/components/ui/feature-card";
import { ImageCard } from "@/components/ui/image-card";
import { Section } from "@/components/ui/section";
import { SectionHeader } from "@/components/ui/section-header";
import { achievementsRecognition, finalHomeCta } from "@/data/home";
import { achievementTimeline, pageImages } from "@/data/pages";
import { buttonClassName } from "@/lib/design-system";
import { createMetadata } from "@/lib/metadata";

export const metadata: Metadata = createMetadata({
  absoluteTitle: "Achievements & Recognition | GCC Chalissery",
  description:
    "Discover GCC Chalissery's football legacy, AIFF affiliation, tournament culture, community recognition, and youth development achievements.",
  path: "/achievements",
});

const credibilityItems = [
  {
    title: "AIFF Affiliated Academy",
    description:
      "A stronger platform connected to India's professional development pathway.",
    icon: BadgeCheck,
  },
  {
    title: "Tournament Participation",
    description:
      "Players gain competitive exposure and learn to represent the badge.",
    icon: Trophy,
  },
  {
    title: "Community Recognition",
    description:
      "The academy's credibility is rooted in Chalissery's football culture.",
    icon: Users,
  },
  {
    title: "Youth Development",
    description:
      "Programs focus on skill, discipline, confidence, and long-term growth.",
    icon: Medal,
  },
] as const;

export default function AchievementsPage() {
  return (
    <>
      <InnerPageHero
        eyebrow="Achievements & Recognition"
        title="Proof of legacy, growth, and football development."
        description="GCC's achievement story connects decades of community football, AIFF affiliation, tournament participation, academy growth, and player development."
        image={pageImages.achievement}
        stats={[
          { label: "Legacy", value: "45+ Years" },
          { label: "Players", value: "120+" },
          { label: "Affiliation", value: "AIFF" },
        ]}
      />

      <Section className="relative isolate overflow-hidden bg-brand-strong text-white">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_12%_18%,rgba(248,196,0,0.18),transparent_26rem),radial-gradient(circle_at_88%_78%,rgba(21,174,234,0.14),transparent_30rem)]" />
        <Container>
          <div className="grid gap-12 lg:grid-cols-[1.08fr_0.92fr] lg:items-stretch">
            <ImageCard
              alt="GCC Chalissery young champions with trophy"
              className="min-h-[620px]"
              imageClassName="object-[center_38%]"
              overlayClassName="bg-[linear-gradient(180deg,rgba(3,8,63,0.02)_0%,rgba(3,8,63,0.08)_34%,rgba(3,8,63,0.55)_66%,rgba(3,8,63,0.98)_100%),linear-gradient(90deg,rgba(3,8,63,0.38),transparent_58%)]"
              sizes="(min-width: 1024px) 54vw, 100vw"
              src={achievementsRecognition.featuredImage}
            >
              <div className="absolute left-5 top-5 flex flex-wrap gap-3 sm:left-7 sm:top-7">
                {achievementsRecognition.highlights.map((item) => (
                  <span
                    className="border border-white/16 bg-white/12 px-4 py-2 text-xs font-black uppercase tracking-[0.13em] text-white shadow-xl shadow-black/15 backdrop-blur-md"
                    key={item}
                  >
                    <span className="mr-2 inline-block size-2 rounded-full bg-accent" />
                    {item}
                  </span>
                ))}
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-7 sm:p-9">
                <p className="text-xs font-black uppercase tracking-[0.18em] text-accent">
                  Trophy moments
                </p>
                <h2 className="mt-3 max-w-2xl text-4xl font-black leading-tight text-white sm:text-5xl">
                  Recognition that young players and families can believe in.
                </h2>
              </div>
            </ImageCard>

            <div className="grid gap-5">
              <SectionHeader
                eyebrow="Proof points"
                invert
                title="Established, trusted, and still growing."
                description="The academy's credibility is built through legacy, affiliation, participation, and visible player development."
              />
              <div className="grid gap-4 sm:grid-cols-2">
                {achievementsRecognition.proofPoints.map((item, index) => (
                  <FadeIn
                    className="group relative h-full overflow-hidden rounded-[1rem] border border-white/10 bg-white/[0.075] p-6 shadow-xl shadow-black/10 backdrop-blur-md transition duration-300 hover:-translate-y-1 hover:border-accent/50 hover:bg-white/[0.1]"
                    key={item.label}
                    transition={{ delay: index * 0.05 }}
                  >
                    <div className="absolute inset-x-0 top-0 h-0.5 bg-gradient-to-r from-accent via-accent/35 to-transparent opacity-75 transition group-hover:opacity-100" />
                    <p className="text-xs font-black uppercase tracking-[0.16em] text-accent">
                      {String(index + 1).padStart(2, "0")}
                    </p>
                    <p className="mt-5 text-[3.4rem] font-black leading-none text-white sm:text-[4rem]">
                      {item.value}
                    </p>
                    <h2 className="mt-4 text-lg font-black leading-tight text-white">
                      {item.label}
                    </h2>
                    <p className="mt-3 text-sm leading-7 text-blue-50/70">
                      {item.description}
                    </p>
                  </FadeIn>
                ))}
              </div>
            </div>
          </div>
        </Container>
      </Section>

      <Section className="bg-brand text-white">
        <Container className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <SectionHeader
            eyebrow="Recognition timeline"
            invert
            title="From local football roots to a professional development future."
            description="Each milestone strengthens trust for players, parents, and the football community around GCC."
          />
          <div className="grid gap-5">
            {achievementTimeline.map((item, index) => (
              <FadeIn
                className="group relative grid gap-5 overflow-hidden rounded-[1rem] border border-white/10 bg-white/[0.075] p-6 shadow-xl shadow-black/10 backdrop-blur-md transition duration-300 hover:-translate-y-1 hover:border-accent/45 hover:bg-white/[0.095] md:grid-cols-[12rem_1fr]"
                key={item.title}
                transition={{ delay: index * 0.06 }}
              >
                <span className="pointer-events-none absolute right-5 top-4 text-6xl font-black leading-none text-white/[0.035]">
                  {item.year}
                </span>
                <p className="text-sm font-black uppercase tracking-[0.16em] text-accent">
                  {item.year}
                </p>
                <div>
                  <h2 className="text-2xl font-black text-white">
                    {item.title}
                  </h2>
                  <p className="mt-3 text-sm leading-7 text-blue-50/75">
                    {item.description}
                  </p>
                </div>
              </FadeIn>
            ))}
          </div>
        </Container>
      </Section>

      <Section className="bg-brand-strong text-white">
        <Container>
          <div className="grid gap-12 lg:grid-cols-[0.82fr_1.18fr] lg:items-start">
            <div>
              <SectionHeader
                eyebrow="Football credibility"
                invert
                title="Achievement is more than trophies."
                description="GCC's proof is found in player development, tournament participation, community recognition, and the confidence young footballers build over time."
              />
              <FadeIn className="mt-8 overflow-hidden rounded-[1.15rem] border border-accent/30 bg-accent/12 p-6 shadow-xl shadow-black/10 backdrop-blur-md">
                <BadgeCheck className="size-9 text-accent" aria-hidden="true" />
                <h2 className="mt-5 text-3xl font-black leading-tight text-white">
                  AIFF affiliation strengthens the academy pathway.
                </h2>
                <p className="mt-4 text-sm leading-7 text-blue-50/76">
                  The 2024 affiliation gives players and parents a clearer
                  sense of structure, credibility, and direction within Indian
                  football development.
                </p>
              </FadeIn>
            </div>
            <div className="grid gap-5 md:grid-cols-2">
              {credibilityItems.map((item) => (
                <FeatureCard
                  description={item.description}
                  icon={item.icon}
                  key={item.title}
                  title={item.title}
                />
              ))}
            </div>
          </div>
        </Container>
      </Section>

      <Section className="bg-brand text-white">
        <Container className="grid gap-5 lg:grid-cols-3">
          {[
            {
              label: "Trophy presentation",
              image: pageImages.trophyPresentation,
              note: "Tournament pride and player recognition.",
            },
            {
              label: "Legacy in the news",
              image: pageImages.legacyRecognition,
              note: "Community proof documented beyond the pitch.",
            },
            {
              label: "Academy culture",
              image: pageImages.culture,
              note: "Families, players, and supporters behind the badge.",
            },
          ].map((item, index) => (
            <ImageCard
              alt={`GCC Chalissery ${item.label}`}
              className={
                index === 0
                  ? "min-h-[520px] lg:col-span-2 lg:row-span-2"
                  : "min-h-[255px]"
              }
              imageClassName={
                index === 1
                  ? "object-top"
                  : index === 2
                    ? "object-[center_38%]"
                    : "object-center"
              }
              key={item.label}
              sizes={
                index === 0
                  ? "(min-width: 1024px) 66vw, 100vw"
                  : "(min-width: 1024px) 33vw, 100vw"
              }
              src={item.image}
            >
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <p className="text-xs font-black uppercase tracking-[0.18em] text-accent">
                  0{index + 1}
                </p>
                <h2 className="mt-2 text-2xl font-black leading-tight text-white">
                  {item.label}
                </h2>
                <p className="mt-3 max-w-md text-sm leading-6 text-blue-50/72">
                  {item.note}
                </p>
              </div>
            </ImageCard>
          ))}
        </Container>
      </Section>

      <CTASection
        actions={
          <>
            <Link className={buttonClassName("primary", "lg")} href="/gallery">
              View Gallery
              <ArrowRight className="size-4" aria-hidden="true" />
            </Link>
            <Link className={buttonClassName("secondaryDark", "lg")} href="/contact">
              Contact Academy
              <Award className="size-4" aria-hidden="true" />
            </Link>
          </>
        }
        description="Explore the real GCC moments behind the academy's growth, recognition, community support, and player development."
        eyebrow="Visual proof"
        image={finalHomeCta.image}
        title={["See the moments", "behind the legacy."]}
        trustIndicators={["45+ Years", "AIFF Affiliated", "Tournament Culture", "Youth Pathway"]}
      />
    </>
  );
}
