import Link from "next/link";
import type { Metadata } from "next";
import { ArrowRight, Award } from "lucide-react";

import { InnerPageHero } from "@/components/sections/inner-page-hero";
import { Container } from "@/components/ui/container";
import { CTASection } from "@/components/ui/cta-section";
import {
  AchievementCard,
  PlayerAchievementCard,
} from "@/components/ui/achievement-card";
import { ImageCard } from "@/components/ui/image-card";
import { Section } from "@/components/ui/section";
import { SectionHeader } from "@/components/ui/section-header";
import { buttonClassName } from "@/lib/design-system";
import { createMetadata } from "@/lib/metadata";
import {
  achievementsIntro,
  playerAchievements,
  teamAchievements,
} from "@/src/data/achievements";

export const metadata: Metadata = createMetadata({
  absoluteTitle: "Achievements & Recognition | GCC Chalissery",
  description:
    "Discover GCC Chalissery's official team achievements and player achievements across district, state, university, professional, and service-level football.",
  path: "/achievements",
});

const galleryPreview = [
  ...teamAchievements.map((item) => ({
    title: item.title,
    label: `${item.year} Team Achievement`,
    image: item.image,
    imageClassName: "object-center",
  })),
  {
    title: "Anoop",
    label: "Kerala U-21 Pathway",
    image: playerAchievements[0].image,
    imageClassName: "object-[center_24%]",
  },
  {
    title: "Sreyas VG",
    label: "Professional & Services Football",
    image: playerAchievements[1].image,
    imageClassName: "object-[center_24%]",
  },
  {
    title: "Ajmal",
    label: "State & Santosh Trophy",
    image: playerAchievements[2].image,
    imageClassName: "object-[center_24%]",
  },
  {
    title: "Masood",
    label: "University Football",
    image: playerAchievements[3].image,
    imageClassName: "object-[center_24%]",
  },
  {
    title: "Mohammed Safvan",
    label: "Kerala U-19 Gold Medal",
    image: playerAchievements[6].image,
    imageClassName: "object-[center_24%]",
  },
] as const;

export default function AchievementsPage() {
  return (
    <>
      <InnerPageHero
        eyebrow={achievementsIntro.eyebrow}
        title={achievementsIntro.title}
        description={achievementsIntro.description}
        image={achievementsIntro.image}
        stats={[
          { label: "Team Records", value: `${teamAchievements.length}` },
          { label: "Player Records", value: `${playerAchievements.length}` },
          { label: "Pathways", value: "District • State • University" },
        ]}
      />

      <TeamAchievementsSection />
      <PlayerAchievementsSection />
      <AchievementGalleryPreview />
      <FinalCta />
    </>
  );
}

function TeamAchievementsSection() {
  return (
    <Section className="relative isolate overflow-hidden bg-[linear-gradient(180deg,#061B75_0%,#0b2478_48%,#1230a7_100%)] text-white">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_12%_18%,rgba(248,196,0,0.18),transparent_26rem),radial-gradient(circle_at_88%_78%,rgba(21,174,234,0.16),transparent_30rem)]" />
      <div className="absolute inset-x-0 top-0 -z-10 h-28 bg-gradient-to-b from-brand-strong/45 to-transparent" />
      <div className="absolute inset-x-0 bottom-0 -z-10 h-32 bg-gradient-to-b from-transparent to-[#1230a7]/50" />
      <Container>
        <SectionHeader
          eyebrow="Team Achievements"
          invert
          title="Tournament success that reflects disciplined team development."
          description="These official team achievements are displayed in the same order as the master content and show GCC's competitive youth football progress."
        />

        <div className="mt-12 grid gap-5 lg:grid-cols-3">
          {teamAchievements.map((achievement) => (
            <AchievementCard
              achievement={achievement}
              key={achievement.title}
            />
          ))}
        </div>
      </Container>
    </Section>
  );
}

function PlayerAchievementsSection() {
  return (
    <Section className="relative isolate overflow-hidden bg-[linear-gradient(180deg,#1230a7_0%,#1b55bd_48%,#1d62c4_100%)] text-white">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_15%_18%,rgba(248,196,0,0.14),transparent_26rem),radial-gradient(circle_at_92%_70%,rgba(21,174,234,0.2),transparent_32rem)]" />
      <div className="absolute inset-x-0 top-0 -z-10 h-28 bg-gradient-to-b from-[#1230a7]/65 to-transparent" />
      <div className="absolute inset-x-0 bottom-0 -z-10 h-32 bg-gradient-to-b from-transparent to-[#1d62c4]/58" />
      <Container>
        <div className="grid gap-10 lg:grid-cols-[0.78fr_1.22fr] lg:items-end">
          <SectionHeader
            eyebrow="Meet Our Talents"
            invert
            title="Player achievements across district, state, university, professional, and service football."
            description="Every player record below follows the exact order and details from the master content document."
          />
          <div className="rounded-[1.5rem] border border-white/12 bg-[linear-gradient(145deg,rgba(255,255,255,0.11),rgba(255,255,255,0.055))] p-7 shadow-2xl shadow-black/12 backdrop-blur-md">
            <p className="text-xs font-black uppercase tracking-[0.18em] text-accent">
              Official player records
            </p>
            <p className="mt-3 text-sm leading-7 text-blue-50/74">
              Cards stay easy to scan, while full player pathway details remain
              available through each profile modal.
            </p>
          </div>
        </div>

        <div className="mt-12 grid auto-rows-fr gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {playerAchievements.map((achievement) => (
            <PlayerAchievementCard
              achievement={achievement}
              key={`${achievement.name}-${achievement.achievement}`}
            />
          ))}
        </div>
      </Container>
    </Section>
  );
}

function AchievementGalleryPreview() {
  return (
    <Section className="relative isolate overflow-hidden bg-[linear-gradient(180deg,#1d62c4_0%,#dceeff_50%,#143bb4_100%)] text-white">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_18%_18%,rgba(248,196,0,0.14),transparent_25rem),radial-gradient(circle_at_86%_72%,rgba(21,174,234,0.22),transparent_30rem)]" />
      <div className="absolute inset-x-0 top-0 -z-10 h-32 bg-gradient-to-b from-[#1d62c4]/72 to-transparent" />
      <div className="absolute inset-x-0 bottom-0 -z-10 h-36 bg-gradient-to-b from-transparent to-[#143bb4]/70" />
      <Container>
        <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
          <SectionHeader
            eyebrow="Achievement Gallery Preview"
            invert
            title="Visual proof from team success and player pathways."
            description="A short visual preview of achievement records before visitors continue into the full academy gallery."
          />
          <Link
            className={buttonClassName("primary", "lg")}
            href="/gallery"
          >
            View Gallery
            <ArrowRight className="size-4" aria-hidden="true" />
          </Link>
        </div>

        <div className="mt-12 grid gap-5 md:grid-cols-4 md:grid-rows-[260px_260px]">
          {galleryPreview.map((item, index) => (
            <ImageCard
              alt={`GCC Chalissery achievement gallery - ${item.title}`}
              className={[
                "min-h-[260px] rounded-[1.5rem] border-white/12 shadow-2xl shadow-black/14 transition duration-500 hover:-translate-y-1 hover:border-accent/45",
                index === 0 ? "md:col-span-2 md:row-span-2" : "",
                index === 3 ? "md:col-span-2" : "",
              ].join(" ")}
              key={`${item.title}-${item.image}`}
              sizes={
                index === 0
                  ? "(min-width: 768px) 50vw, 100vw"
                  : "(min-width: 768px) 25vw, 100vw"
              }
              imageClassName={item.imageClassName}
              src={item.image}
            >
              <div className="absolute bottom-0 left-0 right-0 p-5">
                <p className="text-[0.65rem] font-black uppercase tracking-[0.16em] text-accent">
                  {item.label}
                </p>
                <h3 className="mt-2 text-xl font-black leading-tight text-white">
                  {item.title}
                </h3>
              </div>
            </ImageCard>
          ))}
        </div>
      </Container>
    </Section>
  );
}

function FinalCta() {
  return (
    <CTASection
      actions={
        <>
          <Link className={buttonClassName("primary", "lg")} href="/gallery">
            View Gallery
            <ArrowRight className="size-4" aria-hidden="true" />
          </Link>
          <Link
            className={buttonClassName("secondaryDark", "lg")}
            href="/contact"
          >
            Contact Academy
            <Award className="size-4" aria-hidden="true" />
          </Link>
        </>
      }
      description="Explore the real GCC moments behind the academy's growth, recognition, tournament participation, and player development pathway."
      eyebrow="Visual proof"
      image={teamAchievements[1].image}
      imageAlt="GCC Chalissery achievement recognition moment"
      className="bg-[linear-gradient(135deg,#0b2478_0%,#143bb4_52%,#1a7fcb_100%)]"
      overlayClassName="bg-[linear-gradient(90deg,rgba(6,18,93,0.94),rgba(13,44,149,0.78)_52%,rgba(20,75,176,0.62)),linear-gradient(180deg,rgba(18,48,167,0.2),rgba(4,12,70,0.7)),radial-gradient(circle_at_82%_18%,rgba(248,196,0,0.18),transparent_25rem)]"
      innerGridClassName="gap-12 lg:grid-cols-[minmax(0,1fr)_minmax(30rem,0.92fr)] lg:items-center xl:gap-16"
      title={["See the moments", "behind the legacy."]}
      trustCardClassName="min-h-[7.5rem] rounded-[1.25rem] border-white/14 bg-white/[0.09] p-5 shadow-2xl shadow-black/12 sm:min-h-[10.25rem] sm:rounded-[1.5rem] sm:p-8"
      trustGridClassName="auto-rows-fr gap-5 sm:grid-cols-2 lg:w-full lg:max-w-[42rem] lg:self-center lg:justify-self-end"
      trustIndicators={[
        "Team Achievements",
        "Player Achievements",
        "Tournament Success",
        "Professional Pathways",
      ]}
      trustLabelClassName="text-[0.72rem] tracking-[0.18em]"
      trustValueClassName="mt-6 max-w-[13rem] break-normal text-[1.08rem] leading-[1.28] [hyphens:none] [overflow-wrap:normal] sm:text-[1.18rem]"
    />
  );
}
