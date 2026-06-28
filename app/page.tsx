import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  BadgeCheck,
  BookOpen,
  CalendarDays,
  Dumbbell,
  HeartHandshake,
  ShieldCheck,
  Users,
} from "lucide-react";

import { FadeIn } from "@/components/motion/fade-in";
import {
  ClipRevealImage,
  ImageParallax,
  MagneticButton,
  PremiumCard,
  ScrollProgressLine,
  SplitLineReveal,
} from "@/components/motion/premium-motion";
import { HomeGalleryMarquee } from "@/components/sections/home-gallery-marquee";
import { Badge } from "@/components/ui/badge";
import { Container } from "@/components/ui/container";
import { CTASection } from "@/components/ui/cta-section";
import { FeatureCard } from "@/components/ui/feature-card";
import { Section } from "@/components/ui/section";
import { SectionHeader } from "@/components/ui/section-header";
import { StatCard } from "@/components/ui/stat-card";
import { buttonClassName } from "@/lib/design-system";
import { createMetadata } from "@/lib/metadata";
import {
  aboutContent,
  academyPrograms,
  homeContent,
  trainingPhilosophy,
} from "@/src/data/site";
import {
  playerAchievements,
  teamAchievements,
} from "@/src/data/achievements";
import type { GalleryImage } from "@/src/data/gallery";

export const metadata: Metadata = createMetadata({
  absoluteTitle: "GCC Chalissery Football Academy | Since 1980",
  description:
    "AIFF affiliated GCC Chalissery Football Academy develops young footballers through structured coaching, community support, and education-first player development.",
  path: "/",
});

const legacyImages = {
  primary: "/images/logo-handover-wide.jpg",
  community: "/images/academy-group-event.jpg",
  recognition: "/images/newspaper-recognition.jpg",
  pathway: "/academy-content/media/WhatsApp Image 2026-06-23 at 12.33.50 PM.jpeg",
} as const;

const trainingImage =
  "/images/academy-classroom-session.jpg";
const ctaImage = "/images/young-champions-trophy.jpg";
const achievementPreviewImage = "/academy-content/achievements/u-17-runnerup-jpg.jpeg";

const whyGcc = [
  {
    title: "AIFF Affiliated",
    description:
      "Official affiliation since 2024 connects GCC to India's football development ecosystem.",
    icon: BadgeCheck,
  },
  {
    title: "Education First",
    description:
      "The academy model supports football ambition without sacrificing academic progress.",
    icon: BookOpen,
  },
  {
    title: "Community Driven",
    description:
      "GCC continues to grow through the support of parents, volunteers, and football lovers.",
    icon: HeartHandshake,
  },
  {
    title: "Player Development",
    description:
      "Age-based programs build technique, discipline, confidence, leadership, and match readiness.",
    icon: ShieldCheck,
  },
] as const;

const legacyMilestoneCards = [
  {
    year: "1980",
    title: "Started as a local arts and sports club",
    description:
      "GCC began as a community-rooted arts and sports club in Chalissery.",
  },
  {
    year: "2021",
    title: "Football academy formed with a professional training vision",
    description:
      "The academy was established to provide structured coaching and long-term player development.",
  },
  {
    year: "2024",
    title: "Achieved AIFF affiliation",
    description:
      "GCC Football Academy became connected to India's official football development pathway.",
  },
  {
    year: "Today",
    title: "Developing U-14 and U-17 football talents",
    description:
      "The academy continues to identify, develop, and nurture young players for higher levels.",
  },
] as const;

const lightCard =
  "rounded-[1.5rem] border border-brand/10 bg-white shadow-xl shadow-brand/5 transition duration-500 hover:-translate-y-1 hover:border-accent/60 hover:shadow-2xl hover:shadow-brand/10";

const homeProgramImages = {
  "U-10": "/images/u14-team-green.jpg",
  "U-13": "/images/u14-team-blue-wide.jpg",
  "U-15": "/academy-content/media/WhatsApp Image 2026-06-23 at 12.39.04 PM.jpeg",
} as const;

const homeProgramImagePositions = {
  "U-10": "object-[center_42%]",
  "U-13": "object-[center_44%]",
  "U-15": "object-[center_38%]",
} as const;

const homeGalleryPreviewImages = [
  {
    title: "Young champions rising",
    category: "Team Celebrations",
    image: "/images/young-champions-trophy.jpg",
  },
  {
    title: "Foundation match moments",
    category: "Match Days",
    image: "/images/u14-team-blue-wide-2.jpg",
  },
  {
    title: "Education-first academy culture",
    category: "Training Sessions",
    image: "/images/academy-classroom-session.jpg",
  },
  {
    title: "Club identity moment",
    category: "Community Activities",
    image: "/images/logo-handover-wide.jpg",
  },
  {
    title: "Community football gathering",
    category: "Community Activities",
    image: "/images/academy-group-event.jpg",
  },
  {
    title: "Performance squad pathway",
    category: "Team Photos",
    image: "/academy-content/media/WhatsApp Image 2026-06-23 at 12.33.50 PM.jpeg",
  },
] satisfies readonly GalleryImage[];

export default function HomePage() {
  return (
    <>
      <Hero />
      <LegacyPreview />
      <TrainingPhilosophyPreview />
      <AcademyPathway />
      <WhyGcc />
      <AchievementsPreview />
      <HorizontalGalleryPreview />
      <FinalCta />
    </>
  );
}

function Hero() {
  const titleLines = [
    "From Chalissery's Playgrounds",
    "to India's Professional Football Pathway.",
  ];

  return (
    <section className="relative isolate overflow-hidden bg-brand-strong text-white">
      <div className="absolute inset-0 -z-20 bg-[linear-gradient(135deg,#03083f_0%,#07106f_52%,#03083f_100%)]" />
      <div className="absolute inset-0 -z-20 bg-[radial-gradient(circle_at_78%_18%,rgba(21,174,234,0.16),transparent_26rem),radial-gradient(circle_at_12%_36%,rgba(248,196,0,0.12),transparent_28rem)]" />
      <Image
        alt=""
        className="premium-watermark pointer-events-none absolute -left-32 top-12 -z-10 hidden w-[42rem] opacity-[0.045] mix-blend-screen lg:block"
        height={1536}
        priority
        src="/logos/gcc-logo.png"
        width={1024}
      />

      <Container className="grid min-h-[calc(100svh-5.25rem)] gap-10 py-10 pb-20 sm:min-h-[820px] sm:py-14 sm:pb-24 lg:grid-cols-[0.92fr_1.08fr] lg:items-center lg:gap-12 lg:py-[4.5rem] lg:pb-28">
        <FadeIn className="order-1" transition={{ duration: 0.62 }}>
          <div className="max-w-3xl">
            <div className="flex items-center gap-4">
              <span className="h-px w-12 bg-accent" />
              <Badge className="border-white/20 bg-white/10 text-accent">
                {homeContent.hero.eyebrow}
              </Badge>
            </div>

            <SplitLineReveal
              as="h1"
              className="mt-7 text-balance text-[clamp(2.35rem,5vw,5rem)] font-black leading-[1] tracking-normal text-white"
              lines={titleLines}
              trigger="load"
            />

            <p className="mt-7 max-w-2xl text-pretty text-base leading-8 text-blue-50/78 sm:text-lg">
              {homeContent.hero.description}
            </p>
          </div>

          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <MagneticButton
              className="group inline-flex h-[3.55rem] items-center justify-center gap-2 bg-accent px-8 text-sm font-black text-brand-strong shadow-xl shadow-accent/20 transition hover:-translate-y-0.5 hover:bg-white"
              href="/contact"
            >
              {homeContent.hero.primaryAction}
              <ArrowRight
                className="size-4 transition group-hover:translate-x-1"
                aria-hidden="true"
              />
            </MagneticButton>
            <MagneticButton
              className="group inline-flex h-[3.55rem] items-center justify-center gap-2 border border-white/20 bg-white/10 px-8 text-sm font-black text-white backdrop-blur transition hover:-translate-y-0.5 hover:bg-white hover:text-brand"
              href="/academy"
            >
              {homeContent.hero.secondaryAction}
              <ArrowRight
                className="size-4 transition group-hover:translate-x-1"
                aria-hidden="true"
              />
            </MagneticButton>
          </div>

          <div className="mt-12 grid max-w-3xl grid-cols-2 gap-3 sm:grid-cols-4">
            {homeContent.hero.stats.map((stat, index) => (
              <PremiumCard
                className="relative overflow-hidden border border-white/12 bg-white/[0.075] px-4 py-4 shadow-xl shadow-black/10 backdrop-blur-md before:absolute before:inset-x-0 before:top-0 before:h-0.5 before:bg-accent sm:px-5 sm:py-5"
                key={stat.label}
                initial={{ opacity: 0, y: 18, scale: 0.96 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ delay: index * 0.06, duration: 0.5 }}
              >
                <span className="mb-3 block size-2 rounded-full bg-accent shadow-lg shadow-accent/30 sm:mb-4" />
                <p className="text-[0.64rem] font-black uppercase tracking-[0.18em] text-blue-50/60">
                  {stat.label}
                </p>
                <p className="mt-2 text-lg font-black leading-tight text-white sm:text-xl">
                  {stat.value}
                </p>
              </PremiumCard>
            ))}
          </div>
        </FadeIn>

        <ClipRevealImage className="order-2">
          <ImageParallax className="relative" distance={18}>
            <div className="absolute -left-5 top-12 hidden h-[76%] w-1.5 bg-accent lg:block" />
            <div className="relative min-h-[360px] overflow-hidden rounded-[1.35rem] bg-brand-strong shadow-2xl shadow-black/25 sm:min-h-[560px] lg:min-h-[690px]">
              <Image
                alt="GCC Chalissery Football Academy players and coaches"
                className="size-full object-cover object-center"
                fill
                priority
                sizes="(min-width: 1024px) 55vw, 100vw"
                src={homeContent.hero.image}
              />
              <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(3,8,63,0.06),rgba(3,8,63,0.16)_46%,rgba(3,8,63,0.86)),linear-gradient(90deg,rgba(3,8,63,0.34),transparent_48%)]" />
              <div className="absolute bottom-0 left-0 right-0 p-6 text-white sm:p-8">
                <p className="text-xs font-black uppercase tracking-[0.18em] text-accent">
                  Chalissery / Kerala
                </p>
                <p className="mt-3 max-w-md text-2xl font-black leading-tight">
                  A community football identity now building structured youth
                  pathways.
                </p>
              </div>
            </div>
          </ImageParallax>
        </ClipRevealImage>
      </Container>

      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-28 bg-gradient-to-b from-transparent via-[#020A3D]/70 to-[#020A3D]" />
      <div className="pointer-events-none absolute -bottom-10 left-1/2 h-24 w-[120vw] -translate-x-1/2 rounded-[50%] bg-[#020A3D]" />
    </section>
  );
}

function LegacyPreview() {
  const chips = aboutContent.milestones.slice(0, 3);

  return (
    <Section className="relative isolate overflow-hidden bg-[linear-gradient(180deg,#020A3D_0%,#061B75_48%,#102F9A_100%)] py-20 text-white lg:py-24">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_12%_12%,rgba(21,174,234,0.26),transparent_28rem),radial-gradient(circle_at_84%_48%,rgba(21,174,234,0.14),transparent_32rem),radial-gradient(circle_at_78%_78%,rgba(248,196,0,0.12),transparent_28rem)]" />
      <div className="absolute inset-x-0 bottom-0 -z-10 h-36 bg-gradient-to-b from-transparent via-[#102F9A]/50 to-[#e9f6ff]/35" />
      <p className="pointer-events-none absolute -left-10 top-12 hidden text-[13rem] font-black leading-none text-white/[0.04] lg:block">
        1980
      </p>
      <Container>
        <div className="grid gap-8 lg:grid-cols-[minmax(0,1.32fr)_minmax(360px,0.78fr)] lg:items-start lg:gap-12">
          <div className="min-w-0">
            <FadeIn className="rounded-[2rem] border border-white/12 bg-white/[0.07] p-6 shadow-2xl shadow-black/14 backdrop-blur-md sm:p-9 lg:p-12 xl:p-14">
              <Badge className="border-white/20 bg-white/10 text-accent">
                Legacy / About GCC
              </Badge>
              <h2 className="mt-6 max-w-4xl text-balance text-4xl font-black leading-[1.02] text-white sm:text-6xl lg:text-[4.2rem]">
                From a community club to an AIFF affiliated academy.
              </h2>
              <p className="mt-7 max-w-3xl text-base leading-8 text-blue-50/78 sm:text-lg">
                {aboutContent.story[0]}
              </p>
              <p className="mt-4 max-w-3xl text-base leading-8 text-blue-50/72">
                {aboutContent.story[2]}
              </p>
              <div className="mt-8 flex flex-wrap gap-2">
                {chips.map((item) => (
                  <span
                    className="border border-white/14 bg-white/[0.09] px-4 py-2 text-xs font-black uppercase tracking-[0.12em] text-blue-50 shadow-lg shadow-black/8 backdrop-blur-md"
                    key={item.year}
                  >
                    <span className="mr-2 text-accent">{item.year}</span>
                    {item.title}
                  </span>
                ))}
              </div>
              <Link className={buttonClassName("primary", "lg", "mt-9")} href="/academy">
                Explore Academy
                <ArrowRight className="size-4" aria-hidden="true" />
              </Link>
            </FadeIn>
          </div>

          <LegacyMilestoneCards />
        </div>

        <LegacyImageGallery />
      </Container>
    </Section>
  );
}

function LegacyImageGallery() {
  return (
    <div className="mt-8 grid gap-5 lg:mt-10">
      <LightImageCard
        alt="GCC Chalissery logo handover and academy identity moment"
        className="h-[340px] sm:h-[400px] lg:h-[440px]"
        delay={0}
        imageClassName="object-center"
        src={legacyImages.primary}
        title="A proud badge carried by a football-loving community."
        eyebrow="Academy identity"
        prominent
      />
      <div className="grid gap-5 md:grid-cols-3">
        <LightImageCard
          alt="Newspaper recognition featuring GCC Chalissery Football Academy"
          className="h-[240px] lg:h-[275px]"
          delay={0.08}
          imageClassName="object-[center_18%]"
          src={legacyImages.recognition}
          title="GCC's journey recognised through football."
          eyebrow="Recognition"
        />
        <LightImageCard
          alt="GCC Chalissery community academy gathering"
          className="h-[240px] lg:h-[275px]"
          delay={0.16}
          imageClassName="object-center"
          src={legacyImages.community}
          title="Built by generations of local football lovers."
          eyebrow="Community legacy"
        />
        <LightImageCard
          alt="GCC Chalissery senior team legacy photo"
          className="h-[240px] lg:h-[275px]"
          delay={0.24}
          imageClassName="object-center"
          src={legacyImages.pathway}
          title="From local roots to professional pathways."
          eyebrow="Official pathway"
        />
      </div>
    </div>
  );
}

function LegacyMilestoneCards() {
  return (
    <FadeIn className="relative pl-8 sm:pl-10 lg:pt-1" variant="slideLeft">
      <div className="absolute left-3 top-4 h-[calc(100%-2rem)] w-px overflow-hidden bg-white/14 sm:left-4">
        <ScrollProgressLine
          aria-hidden="true"
          className="h-full w-full bg-gradient-to-b from-accent via-sky to-white/35"
        />
      </div>
      <div className="grid gap-3">
        {legacyMilestoneCards.map((item, index) => (
          <FadeIn
            className="group relative overflow-visible rounded-[1.25rem] border border-white/12 bg-white/[0.075] p-4 shadow-2xl shadow-black/12 backdrop-blur-md transition duration-300 hover:-translate-y-1 hover:border-accent/45 hover:bg-white/[0.1] sm:p-5"
            key={item.year}
            transition={{ delay: index * 0.06 }}
            variant="scaleIn"
          >
            <span className="absolute -left-[2.15rem] top-6 grid size-4 place-items-center rounded-full bg-accent shadow-[0_0_22px_rgba(248,196,0,0.45)] ring-4 ring-[#061B75] transition group-hover:scale-110 group-hover:shadow-[0_0_34px_rgba(248,196,0,0.65)] sm:-left-[2.45rem]" />
            <span className="pointer-events-none absolute -right-3 -top-5 text-[4.9rem] font-black leading-none text-white/[0.035] transition group-hover:text-white/[0.055]">
              {item.year}
            </span>
            <p className="text-xs font-black uppercase tracking-[0.18em] text-accent">
              {item.year}
            </p>
            <h3 className="mt-2 max-w-xl text-xl font-black leading-tight text-white sm:text-[1.35rem]">
              {item.title}
            </h3>
            <p className="mt-2 max-w-xl text-sm leading-6 text-blue-50/72">
              {item.description}
            </p>
          </FadeIn>
        ))}
      </div>
    </FadeIn>
  );
}

function TrainingPhilosophyPreview() {
  return (
    <Section className="relative isolate overflow-hidden bg-[linear-gradient(135deg,#e9f6ff_0%,#f6fbff_54%,#edf7ff_100%)] text-neutral-950">
      <div className="absolute inset-x-0 top-0 -z-10 h-28 bg-gradient-to-b from-[#102F9A]/20 to-transparent" />
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_12%_20%,rgba(21,174,234,0.13),transparent_26rem),radial-gradient(circle_at_92%_70%,rgba(248,196,0,0.09),transparent_28rem)]" />
      <Container>
        <div className="grid gap-10 lg:grid-cols-[0.78fr_1.22fr] lg:items-end">
          <SectionHeader
            eyebrow="Training Philosophy"
            title="Football ambition with education protected."
            description={trainingPhilosophy.description}
          />
          <FadeIn className="relative min-h-[300px] overflow-hidden rounded-[1.5rem] border border-brand/10 bg-white shadow-2xl shadow-brand/10 lg:min-h-[360px]">
            <Image
              alt="GCC Chalissery Football Academy training group"
              className="size-full object-cover object-[center_46%]"
              fill
              sizes="(min-width: 1024px) 46vw, 100vw"
              src={trainingImage}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-brand-strong/68 via-brand-strong/16 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-6">
              <p className="text-xs font-black uppercase tracking-[0.18em] text-accent">
                3-pillar development model
              </p>
              <h3 className="mt-2 max-w-xl text-3xl font-black leading-tight text-white">
                {trainingPhilosophy.title}
              </h3>
            </div>
          </FadeIn>
        </div>

        <div className="mt-12 grid gap-5 lg:grid-cols-3">
          {trainingPhilosophy.pillars.map((pillar, index) => {
            const Icon = [CalendarDays, Dumbbell, Users][index];

            return (
              <FadeIn
                className={`${lightCard} relative overflow-hidden p-6 sm:p-7`}
                key={pillar.title}
                transition={{ delay: index * 0.06 }}
                variant="scaleIn"
              >
                <div className="absolute inset-x-0 top-0 h-0.5 bg-gradient-to-r from-accent via-accent/40 to-transparent" />
                <div className="grid size-11 place-items-center rounded-full bg-brand/6 text-brand">
                  <Icon className="size-5" aria-hidden="true" />
                </div>
                <p className="mt-6 text-xs font-black uppercase tracking-[0.16em] text-accent">
                  Pillar 0{index + 1}
                </p>
                <h3 className="mt-3 text-2xl font-black leading-tight text-brand-strong">
                  {pillar.title}
                </h3>
                <p className="mt-3 text-sm font-black uppercase tracking-[0.1em] text-brand/58">
                  {pillar.schedule}
                </p>
                <p className="mt-4 text-sm leading-7 text-neutral-600">
                  {pillar.description}
                </p>
              </FadeIn>
            );
          })}
        </div>
      </Container>
    </Section>
  );
}

function AcademyPathway() {
  return (
    <Section className="relative isolate overflow-hidden bg-[linear-gradient(180deg,#e9f6ff_0%,#f8fcff_46%,#eef6ff_100%)] text-neutral-950">
      <div className="absolute inset-x-0 top-0 -z-10 h-28 bg-gradient-to-b from-[#e9f6ff] to-transparent" />
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_15%_18%,rgba(21,174,234,0.11),transparent_25rem),radial-gradient(circle_at_90%_72%,rgba(248,196,0,0.12),transparent_30rem)]" />
      <Container>
        <div className="grid gap-9 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
          <SectionHeader
            eyebrow="Academy Pathway"
            title="A clear journey from foundation to performance."
            description="GCC Football Academy provides age-appropriate football development programs designed to support players at every stage of their journey."
          />
          <FadeIn className="lg:justify-self-end">
            <Link className={buttonClassName("navy", "lg")} href="/academy">
              Explore Our Academy
              <ArrowRight className="size-4" aria-hidden="true" />
            </Link>
          </FadeIn>
        </div>

        <div className="mt-12 grid gap-5 lg:grid-cols-3">
          {academyPrograms.map((program, index) => (
            <FadeIn
              className={`${lightCard} group flex h-full overflow-hidden`}
              key={program.title}
              transition={{ delay: index * 0.06 }}
              variant="scaleIn"
            >
              <div className="flex min-h-full w-full flex-col">
                <div className="relative min-h-[260px] overflow-hidden bg-brand sm:min-h-[285px]">
                  <Image
                    alt={`GCC Chalissery ${program.title}`}
                    className={`size-full object-cover transition duration-700 ease-out group-hover:scale-[1.04] ${
                      homeProgramImagePositions[
                        program.ageGroup as keyof typeof homeProgramImagePositions
                      ] ?? "object-center"
                    }`}
                    fill
                    sizes="(min-width: 1024px) 33vw, 100vw"
                    src={
                      homeProgramImages[
                        program.ageGroup as keyof typeof homeProgramImages
                      ] ?? program.image
                    }
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-brand-strong/54 via-brand-strong/4 to-transparent" />
                  <div className="absolute left-5 top-5 grid size-14 place-items-center rounded-full border border-white/35 bg-white/92 text-sm font-black text-brand shadow-xl shadow-black/12 backdrop-blur-md">
                    {program.ageGroup}
                  </div>
                </div>
                <div className="flex flex-1 flex-col p-6 sm:p-7">
                  <p className="text-xs font-black uppercase tracking-[0.18em] text-accent">
                    Player pathway
                  </p>
                  <h3 className="mt-3 text-3xl font-black leading-tight text-brand-strong">
                    {program.title}
                  </h3>
                  <p className="mt-3 text-sm leading-7 text-neutral-600">
                    {program.shortDescription}
                  </p>
                  <div className="mt-5 flex flex-wrap gap-2">
                    {program.focusAreas.slice(0, 3).map((focus) => (
                      <span
                        className="rounded-full border border-brand/10 bg-[#f5f8ff] px-3 py-1.5 text-[0.68rem] font-black uppercase tracking-[0.09em] text-brand"
                        key={focus}
                      >
                        {focus}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </Container>
    </Section>
  );
}

function WhyGcc() {
  return (
    <Section className="relative isolate overflow-hidden bg-[linear-gradient(135deg,#0a1978_0%,#1230a7_52%,#1579c8_100%)] text-white">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_12%_20%,rgba(248,196,0,0.16),transparent_24rem),radial-gradient(circle_at_86%_72%,rgba(21,174,234,0.16),transparent_30rem)]" />
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/25 to-transparent" />
      <Container>
        <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
          <SectionHeader
            eyebrow="Why GCC"
            invert
            title="Built for serious football development, grounded in Chalissery."
            description="GCC combines football heritage, community support, AIFF affiliation, professional training, education balance, and long-term player development."
          />
          <div className="grid gap-5 md:grid-cols-2">
            {whyGcc.map((item) => (
              <FeatureCard
                description={item.description}
                icon={item.icon}
                key={item.title}
                title={item.title}
                variant="dark"
              />
            ))}
          </div>
        </div>
      </Container>
    </Section>
  );
}

function AchievementsPreview() {
  const featuredPlayers = playerAchievements.slice(0, 4);

  return (
    <Section className="relative isolate overflow-hidden bg-[linear-gradient(180deg,#edf7ff_0%,#f8fbff_48%,#eef6ff_100%)] text-neutral-950">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_12%_18%,rgba(248,196,0,0.12),transparent_26rem),radial-gradient(circle_at_88%_78%,rgba(21,174,234,0.12),transparent_30rem)]" />
      <Container>
        <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
          <SectionHeader
            eyebrow="Achievements Preview"
            title="Proof of growth through tournaments and player pathways."
            description="Selected team and player achievements show GCC's competitive culture, academy growth, and player development impact."
          />
          <FadeIn>
            <Link className={buttonClassName("navy", "lg")} href="/achievements">
              View Achievements
              <ArrowRight className="size-4" aria-hidden="true" />
            </Link>
          </FadeIn>
        </div>

        <div className="mt-12 grid gap-5 lg:grid-cols-[1.05fr_0.95fr]">
          <FadeIn className={`${lightCard} group overflow-hidden`} variant="imageReveal">
            <div className="relative min-h-[430px] overflow-hidden bg-brand">
              <Image
                alt={teamAchievements[0].title}
                className="size-full object-cover object-center transition duration-700 group-hover:scale-[1.035]"
                fill
                sizes="(min-width: 1024px) 52vw, 100vw"
                src={achievementPreviewImage}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-strong/72 via-brand-strong/10 to-transparent" />
              <div className="absolute left-5 top-5 rounded-full border border-white/25 bg-white/90 px-4 py-2 text-xs font-black uppercase tracking-[0.14em] text-brand backdrop-blur-md">
                {teamAchievements[0].year}
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-7 sm:p-9">
                <p className="text-xs font-black uppercase tracking-[0.18em] text-accent">
                  Team achievement
                </p>
                <h3 className="mt-3 max-w-2xl text-4xl font-black leading-tight text-white">
                  {teamAchievements[0].title}
                </h3>
                <p className="mt-4 max-w-xl text-sm leading-7 text-blue-50/82">
                  {teamAchievements[0].description}
                </p>
              </div>
            </div>
          </FadeIn>

          <div className="grid gap-5">
            <div className="grid gap-3 sm:grid-cols-3">
              <StatCard label="Legacy" value="Since 1980" variant="light" />
              <StatCard label="AIFF" value="2024" variant="light" />
              <StatCard
                label="Players"
                value={`${playerAchievements.length}`}
                variant="light"
              />
            </div>
            <div className="grid gap-3 sm:grid-cols-2">
              {featuredPlayers.map((player, index) => (
                <FadeIn
                  className={`${lightCard} p-5`}
                  key={`${player.name}-${player.achievement}`}
                  transition={{ delay: index * 0.05 }}
                >
                  <div className="flex items-center gap-4">
                    <div className="relative size-16 shrink-0 overflow-hidden rounded-full bg-brand shadow-lg shadow-brand/10">
                      <Image
                        alt={`${player.name} achievement`}
                        className="size-full object-cover object-center"
                        fill
                        sizes="64px"
                        src={player.image}
                      />
                    </div>
                    <div className="min-w-0">
                      <p className="text-xs font-black uppercase tracking-[0.14em] text-accent">
                        Player pathway
                      </p>
                      <h4 className="mt-1 text-lg font-black leading-tight text-brand-strong">
                        {player.name}
                      </h4>
                      <p className="mt-1 line-clamp-2 text-sm leading-6 text-neutral-600">
                        {player.achievement}
                      </p>
                    </div>
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
}

function HorizontalGalleryPreview() {
  return <HomeGalleryMarquee images={homeGalleryPreviewImages} />;
}

function FinalCta() {
  return (
    <CTASection
      actions={
        <>
          <Link className={buttonClassName("primary", "lg")} href="/contact">
            Join GCC Academy
            <ArrowRight className="size-4" aria-hidden="true" />
          </Link>
          <Link className={buttonClassName("secondaryDark", "lg")} href="/academy">
            Explore Our Academy
            <ArrowRight className="size-4" aria-hidden="true" />
          </Link>
        </>
      }
      description="Connect with GCC Chalissery Football Academy and take the first step toward structured football development, disciplined training, and a community-backed player pathway."
      eyebrow="Join the pathway"
      image={ctaImage}
      imageAlt="GCC Chalissery young players celebrating a trophy moment"
      className="bg-[linear-gradient(135deg,#0b2478_0%,#143bb4_54%,#1d8bd3_100%)]"
      overlayClassName="bg-[linear-gradient(90deg,rgba(8,30,118,0.92),rgba(20,59,180,0.76)_48%,rgba(29,139,211,0.54)),linear-gradient(180deg,rgba(8,30,118,0.18),rgba(8,30,118,0.72)),radial-gradient(circle_at_78%_18%,rgba(248,196,0,0.24),transparent_25rem),radial-gradient(circle_at_18%_78%,rgba(21,174,234,0.24),transparent_30rem)]"
      title={["Your Football Journey", "Starts Here."]}
      trustIndicators={[
        "Since 1980",
        "Academy Established 2021",
        "AIFF Affiliated 2024",
        "U-10 • U-13 • U-15",
      ]}
    />
  );
}

type LightImageCardProps = {
  alt: string;
  className?: string;
  delay?: number;
  eyebrow: string;
  imageClassName?: string;
  prominent?: boolean;
  src: string;
  title?: string;
};

function LightImageCard({
  alt,
  className = "",
  delay = 0,
  eyebrow,
  imageClassName = "object-center",
  prominent = false,
  src,
  title,
}: LightImageCardProps) {
  return (
    <FadeIn
      className={`group relative overflow-hidden rounded-[1.5rem] border border-white/12 bg-white/10 shadow-2xl shadow-black/18 ${className}`}
      transition={{ delay }}
      variant="imageReveal"
    >
      <Image
        alt={alt}
        className={`size-full object-cover transition duration-700 group-hover:scale-[1.035] ${imageClassName}`}
        fill
        sizes="(min-width: 1024px) 34vw, 100vw"
        src={src}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-brand-strong/68 via-brand-strong/8 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 p-5 sm:p-6">
        <p className="text-xs font-black uppercase tracking-[0.18em] text-accent">
          {eyebrow}
        </p>
        {title ? (
          <h3
            className={[
              "mt-2 max-w-sm font-black leading-tight text-white",
              prominent ? "text-xl sm:text-2xl" : "text-base sm:text-lg",
            ].join(" ")}
          >
            {title}
          </h3>
        ) : null}
      </div>
    </FadeIn>
  );
}
