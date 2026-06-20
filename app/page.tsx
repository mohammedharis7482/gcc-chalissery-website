import React from "react";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, CheckCircle2, MoveUpRight, Quote } from "lucide-react";

import { FadeIn } from "@/components/motion/fade-in";
import {
  ClipRevealImage,
  CountUpStat,
  FloatingBadge,
  ImageParallax,
  MagneticButton,
  PremiumCard,
  ScrollProgressLine,
  SplitLineReveal,
} from "@/components/motion/premium-motion";
import { GalleryMomentsSection } from "@/components/sections/gallery-moments-section";
import { Badge } from "@/components/ui/badge";
import { Container } from "@/components/ui/container";
import {
  academyExcellence,
  academyProgramsShowcase,
  aiffHighlights,
  achievementsRecognition,
  coachesLeadership,
  finalHomeCta,
  galleryMoments,
  heroStats,
  homeHero,
  legacyImages,
  legacyTimeline,
  playerPathway,
  testimonialsTrust,
} from "@/data/home";
import { createMetadata } from "@/lib/metadata";

export const metadata: Metadata = createMetadata({
  absoluteTitle: "GCC Chalissery Football Academy | Since 1980",
  description:
    "Welcome to GCC Chalissery Football Academy, an AIFF affiliated, community-powered football academy building disciplined young players since 1980.",
  path: "/",
});

const mobileProgramDescriptions = [
  "First-touch learning through ball mastery, movement, and confidence.",
  "Technical growth, tactical awareness, and disciplined team habits.",
  "Fitness, match tempo, and competitive readiness.",
  "Exposure, leadership, and advanced football preparation.",
] as const;

export default function HomePage() {
  return (
    <>
      <CinematicHero />
      <LegacyTimeline />
      <AcademyExcellence />
      <AcademyPrograms />
      <CoachesLeadership />
      <PlayerPathway />
      <AiffAffiliation />
      <AchievementsRecognition />
      <VisualGallery />
      <TestimonialsTrust />
      <FinalCta />
    </>
  );
}

function CinematicHero() {
  const heroTitleLines = [
    "From Chalissery’s playgrounds",
    "to Indian football’s professional pathway.",
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
      <Container className="grid min-h-[calc(100svh-5.25rem)] gap-10 py-10 sm:min-h-[840px] sm:py-14 lg:grid-cols-[0.92fr_1.08fr] lg:items-center lg:gap-12 lg:py-[4.5rem]">
        <FadeIn className="order-1" transition={{ duration: 0.62 }}>
          <div className="max-w-3xl">
            <div className="flex items-center gap-4">
              <span className="h-px w-12 bg-accent" />
              <Badge className="border-white/20 bg-white/10 text-accent">
                {homeHero.eyebrow}
              </Badge>
            </div>
            <SplitLineReveal
              as="h1"
              className="mt-7 text-balance text-[clamp(2.4rem,5.1vw,5.1rem)] font-black leading-[1] tracking-normal text-white"
              lines={heroTitleLines}
              trigger="load"
            />
            <p className="mt-7 max-w-2xl text-pretty text-base leading-8 text-blue-50/78 sm:text-lg">
              {homeHero.description}
            </p>
          </div>

          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <MagneticButton
              className="group inline-flex h-[3.55rem] items-center justify-center gap-2 bg-accent px-8 text-sm font-black text-brand-strong shadow-xl shadow-accent/20 transition hover:-translate-y-0.5 hover:bg-white"
              href="/academy"
            >
              Explore Academy
              <ArrowRight
                className="size-4 transition group-hover:translate-x-1"
                aria-hidden="true"
              />
            </MagneticButton>
            <MagneticButton
              className="group inline-flex h-[3.55rem] items-center justify-center gap-2 border border-white/20 bg-white/10 px-8 text-sm font-black text-white backdrop-blur transition hover:-translate-y-0.5 hover:bg-white hover:text-brand"
              href="/contact"
            >
              Contact Club
              <MoveUpRight
                className="size-4 transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                aria-hidden="true"
              />
            </MagneticButton>
          </div>

          <HeroStatsStrip />
        </FadeIn>

        <ClipRevealImage className="order-2">
          <ImageParallax className="relative" distance={18}>
            <div className="absolute -left-5 top-12 hidden h-[76%] w-1.5 bg-accent lg:block" />
            <div className="absolute -right-5 bottom-12 hidden h-40 w-40 border border-sky/35 lg:block" />
            <div className="relative min-h-[360px] overflow-hidden rounded-[1.35rem] bg-brand-strong shadow-2xl shadow-black/25 sm:min-h-[580px] lg:min-h-[700px]">
              <Image
                alt="GCC Chalissery Football Academy training session"
                className="size-full object-cover object-center"
                fill
                priority
                sizes="(min-width: 1024px) 55vw, 100vw"
                src={homeHero.image}
              />
              <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(3,8,63,0.08),rgba(3,8,63,0.18)_46%,rgba(3,8,63,0.86)),linear-gradient(90deg,rgba(3,8,63,0.38),transparent_46%)]" />
              <div className="absolute bottom-0 left-0 right-0 p-6 text-white sm:p-8">
                <p className="text-xs font-black uppercase tracking-[0.18em] text-accent">
                  Chalissery / Kerala
                </p>
                <p className="mt-3 max-w-md text-2xl font-black leading-tight">
                  A community football identity now building professional youth
                  pathways.
                </p>
              </div>
            </div>
          </ImageParallax>
        </ClipRevealImage>
      </Container>
    </section>
  );
}

function HeroStatsStrip() {
  return (
    <div className="mt-12 grid max-w-3xl grid-cols-2 gap-3 sm:grid-cols-4">
      {heroStats.map((stat, index) => (
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
  );
}

function LegacyTimeline() {
  return (
    <section className="relative isolate overflow-hidden bg-brand-strong py-24 text-white sm:py-32 lg:py-36">
      <div className="absolute inset-0 -z-20 bg-[linear-gradient(135deg,#03083f_0%,#07106f_54%,#02062e_100%)]" />
      <div className="absolute inset-0 -z-20 bg-[radial-gradient(circle_at_12%_18%,rgba(248,196,0,0.18),transparent_27rem),radial-gradient(circle_at_88%_72%,rgba(21,174,234,0.14),transparent_30rem)]" />
      <p className="pointer-events-none absolute -left-10 top-10 hidden text-[15rem] font-black leading-none text-white/[0.035] lg:block">
        1980
      </p>
      <Container>
        <div className="grid gap-14 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
          <FadeIn variant="slideRight">
            <Badge className="border-white/20 bg-white/10 text-accent">
              Legacy story
            </Badge>
            <h2 className="mt-6 max-w-2xl text-balance text-4xl font-black leading-[1.02] text-white sm:text-6xl">
              Four milestones. One football journey.
            </h2>
            <p className="mt-6 max-w-xl text-base leading-8 text-blue-50/76">
              From a local sports club in 1980 to an AIFF-affiliated football
              academy, GCC Chalissery continues to shape young footballers
              through discipline, community, and professional training.
            </p>
            <div className="mt-10 grid max-w-2xl grid-cols-2 gap-3 sm:gap-4">
              <div className="relative col-span-2 min-h-[260px] overflow-hidden rounded-[1.15rem] bg-brand shadow-2xl shadow-black/20 sm:min-h-[320px]">
                <Image
                  alt="GCC Chalissery Football Academy logo handover moment"
                  className="size-full object-cover object-center"
                  fill
                  sizes="(min-width: 1024px) 44vw, 100vw"
                  src={legacyImages.handover}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-strong/88 via-brand-strong/10 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <p className="text-xs font-black uppercase tracking-[0.18em] text-accent">
                    Academy identity
                  </p>
                  <p className="mt-2 max-w-md text-2xl font-black leading-tight">
                    A proud badge carried by a football-loving community.
                  </p>
                </div>
              </div>

              <div className="relative aspect-[4/5] overflow-hidden rounded-[1rem] bg-white/10 shadow-xl shadow-black/15">
                <Image
                  alt="GCC Chalissery football recognition in local media"
                  className="size-full object-cover object-top"
                  fill
                  sizes="(min-width: 1024px) 20vw, 50vw"
                  src={legacyImages.recognition}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-strong/80 via-transparent to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-4">
                  <p className="text-[0.65rem] font-black uppercase tracking-[0.16em] text-accent">
                    Recognition
                  </p>
                </div>
              </div>

              <div className="grid gap-3 sm:gap-4">
                <div className="relative min-h-[150px] overflow-hidden rounded-[1rem] bg-white/10 shadow-xl shadow-black/15">
                  <Image
                    alt="GCC Chalissery academy community gathering"
                    className="size-full object-cover object-center"
                    fill
                    sizes="(min-width: 1024px) 20vw, 50vw"
                    src={legacyImages.community}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-brand-strong/70 via-transparent to-transparent" />
                </div>
                <div className="relative min-h-[150px] overflow-hidden rounded-[1rem] bg-white/10 shadow-xl shadow-black/15">
                  <Image
                    alt="GCC Chalissery academy player handshake"
                    className="size-full object-cover object-center"
                    fill
                    sizes="(min-width: 1024px) 20vw, 50vw"
                    src={legacyImages.identity}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-brand-strong/70 via-transparent to-transparent" />
                </div>
              </div>
            </div>
          </FadeIn>

          <FadeIn className="relative" variant="slideLeft">
            <div className="absolute left-[1.05rem] top-0 h-full w-px bg-white/10 lg:left-10" />
            <ScrollProgressLine
              aria-hidden="true"
              className="absolute left-[1.05rem] top-0 h-full w-px bg-gradient-to-b from-accent via-white/45 to-sky/70 lg:left-10"
            />
            <div className="grid gap-7">
              {legacyTimeline.map((item, index) => (
                <FadeIn
                  className="group relative grid grid-cols-[2.5rem_1fr] gap-5"
                  key={item.year}
                  transition={{ delay: index * 0.08, duration: 0.45 }}
                >
                  <div className="relative z-10 pt-2 lg:pt-0">
                    <span className="block size-5 rounded-full border-4 border-brand-strong bg-accent shadow-xl shadow-accent/30 ring-8 ring-accent/10" />
                  </div>
                  <div className="relative overflow-hidden border border-white/10 bg-white/[0.07] p-6 shadow-2xl shadow-black/10 backdrop-blur transition duration-300 group-hover:-translate-y-1 group-hover:border-accent/55 group-hover:bg-white/[0.095] sm:p-7">
                    <div className="absolute right-4 top-3 text-[4.8rem] font-black leading-none text-white/[0.035] sm:text-[6rem]">
                      {item.year}
                    </div>
                    <div className="relative z-10">
                      <p className="text-sm font-black uppercase tracking-[0.18em] text-accent">
                        {item.year}
                      </p>
                      <h3 className="mt-4 max-w-lg text-2xl font-black leading-tight text-white sm:text-3xl">
                        {item.title}
                      </h3>
                      <p className="mt-3 max-w-xl text-sm leading-7 text-blue-50/72">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </FadeIn>
              ))}
            </div>
          </FadeIn>
        </div>
      </Container>
    </section>
  );
}

function AcademyExcellence() {
  return (
    <section className="relative isolate overflow-hidden bg-brand py-24 text-white sm:py-32 lg:py-36">
      <div className="absolute inset-0 -z-10 bg-[linear-gradient(135deg,rgba(2,6,46,0.98),rgba(7,16,111,0.96)_50%,rgba(3,8,63,0.98)),radial-gradient(circle_at_14%_20%,rgba(248,196,0,0.17),transparent_25rem),radial-gradient(circle_at_86%_76%,rgba(21,174,234,0.14),transparent_30rem)]" />
      <Container>
        <div className="grid gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:items-start lg:gap-14">
          <FadeIn className="order-1 lg:col-start-2" variant="slideLeft">
            <Badge className="border-white/20 bg-white/10 text-accent">
              {academyExcellence.eyebrow}
            </Badge>
            <h2 className="mt-6 max-w-3xl text-balance text-4xl font-black leading-[1.02] text-white sm:text-6xl lg:text-[4.25rem]">
              Building Footballers
              <span className="block">Beyond The Game</span>
            </h2>
            <p className="mt-6 max-w-2xl text-base leading-8 text-blue-50/76 sm:text-lg">
              {academyExcellence.description}
            </p>
            <div className="mt-8 flex flex-wrap gap-x-5 gap-y-3 border-y border-white/10 py-5">
              {academyExcellence.proofStats.map((stat, index) => (
                <FadeIn
                  className="flex items-center gap-3 text-xs font-black uppercase tracking-[0.14em] text-blue-50/82"
                  key={stat}
                  transition={{ delay: index * 0.05, duration: 0.4 }}
                >
                  <span className="h-px w-7 bg-accent/80" />
                  {stat}
                </FadeIn>
              ))}
            </div>
          </FadeIn>

          <FadeIn
            className="order-2 lg:col-start-1 lg:row-span-3 lg:row-start-1"
            variant="imageReveal"
          >
            <div className="relative">
              <div className="group relative min-h-[480px] overflow-hidden rounded-[1.35rem] bg-brand-strong shadow-2xl shadow-black/25 sm:min-h-[640px] lg:min-h-[700px]">
                <Image
                  alt="GCC Chalissery Football Academy structured training"
                  className="size-full object-cover object-[center_36%] transition duration-700 group-hover:scale-105"
                  fill
                  sizes="(min-width: 1024px) 52vw, 100vw"
                  src={academyExcellence.image}
                />
                <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(3,8,63,0.02),rgba(3,8,63,0.06)_38%,rgba(3,8,63,0.42)_66%,rgba(3,8,63,0.95)),linear-gradient(90deg,rgba(3,8,63,0.28),transparent_52%)]" />
                <div className="absolute left-5 top-5 flex max-w-[calc(100%-2.5rem)] flex-wrap gap-3 sm:left-7 sm:top-7">
                  {academyExcellence.badges.map((badge, index) => (
                    <FloatingBadge
                      className="border border-white/18 bg-white/12 px-4 py-3 text-xs font-black uppercase tracking-[0.12em] text-white shadow-xl shadow-black/15 backdrop-blur-md"
                      delay={index * 0.12}
                      key={badge}
                    >
                      <span className="mr-2 inline-block size-2 rounded-full bg-accent shadow-lg shadow-accent/30" />
                      {badge}
                    </FloatingBadge>
                  ))}
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-8">
                  <p className="text-xs font-black uppercase tracking-[0.18em] text-accent">
                    Academy excellence
                  </p>
                  <p className="mt-3 max-w-md text-2xl font-black leading-tight text-white sm:text-3xl">
                    Training discipline, community belief, and a serious
                    football pathway.
                  </p>
                </div>
              </div>

              <div className="mt-4 grid gap-3 sm:grid-cols-3">
                {academyExcellence.thumbnails.map((item, index) => (
                  <div
                    className="group/thumb relative min-h-[120px] overflow-hidden rounded-[0.9rem] border border-white/10 bg-white/10 shadow-xl shadow-black/15"
                    key={item.label}
                  >
                    <Image
                      alt={`GCC Chalissery ${item.label}`}
                      className="size-full object-cover object-center transition duration-500 group-hover/thumb:scale-105"
                      fill
                      sizes="(min-width: 1024px) 16vw, (min-width: 640px) 33vw, 100vw"
                      src={item.image}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-brand-strong/78 via-transparent to-transparent" />
                    <p className="absolute bottom-3 left-3 right-3 text-xs font-black uppercase tracking-[0.14em] text-white">
                      <span className="mr-2 text-accent">0{index + 1}</span>
                      {item.label}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </FadeIn>

          <div className="order-3 grid gap-4 sm:grid-cols-2 lg:col-start-2 lg:row-start-2">
            {academyExcellence.features.map((item, index) => {
              const Icon = item.icon;

              return (
                <PremiumCard
                  className="group relative overflow-hidden rounded-[1rem] border border-white/10 bg-white/[0.075] p-5 shadow-2xl shadow-black/10 backdrop-blur-md transition duration-300 hover:-translate-y-1 hover:border-accent/55 hover:bg-white/[0.1] sm:p-6"
                  key={item.title}
                  initial={{ opacity: 0, y: 22 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-80px" }}
                  transition={{ delay: index * 0.07, duration: 0.45 }}
                >
                  <div className="absolute left-5 top-0 h-0.5 w-16 bg-gradient-to-r from-accent to-transparent" />
                  <div className="flex items-center gap-3">
                    <div className="grid size-10 shrink-0 place-items-center rounded-full bg-white/10 text-accent shadow-lg shadow-black/10 transition group-hover:bg-accent group-hover:text-brand-strong">
                      <Icon className="size-5" aria-hidden="true" />
                    </div>
                    <h3 className="text-lg font-black leading-tight text-white">
                      {item.title}
                    </h3>
                  </div>
                  <p className="mt-4 text-sm leading-7 text-blue-50/72">
                    {item.description}
                  </p>
                </PremiumCard>
              );
            })}
          </div>

          <FadeIn className="order-4 border-l-2 border-accent pl-5 lg:col-start-2 lg:row-start-3">
            <p className="text-sm font-black uppercase tracking-[0.16em] text-blue-50/86">
              Trusted by generations of football families in Chalissery since
              1980.
            </p>
          </FadeIn>
        </div>
      </Container>
    </section>
  );
}

function AcademyPrograms() {
  return (
    <section className="relative isolate overflow-hidden bg-brand-strong py-24 text-white sm:py-32 lg:py-36">
      <div className="absolute inset-0 -z-10 bg-[linear-gradient(135deg,#02062e_0%,#07106f_50%,#03083f_100%),radial-gradient(circle_at_16%_18%,rgba(248,196,0,0.16),transparent_24rem),radial-gradient(circle_at_88%_72%,rgba(21,174,234,0.15),transparent_28rem)]" />
      <Container>
        <div className="flex flex-col justify-between gap-7 lg:flex-row lg:items-end">
          <FadeIn variant="slideRight">
            <Badge className="border-white/20 bg-white/10 text-accent">
              {academyProgramsShowcase.eyebrow}
            </Badge>
            <h2 className="mt-6 max-w-4xl text-balance text-4xl font-black leading-[1.02] text-white sm:text-6xl">
              {academyProgramsShowcase.title}
            </h2>
          </FadeIn>
          <FadeIn variant="slideLeft">
            <p className="max-w-xl text-base leading-8 text-blue-50/76">
              {academyProgramsShowcase.description}
            </p>
          </FadeIn>
        </div>

        <div className="mt-12 grid gap-4 lg:grid-cols-4 lg:grid-rows-[350px_420px]">
          {academyProgramsShowcase.programs.map((program, index) => {
            const isFeatured = index === 0;
            const isCompact = index >= 2;
            const imagePosition =
              index === 2
                ? "object-[center_42%]"
                : index === 3
                  ? "object-[center_34%]"
                  : "object-center";

            return (
              <FadeIn
                className={[
                  "group relative min-h-[380px] overflow-hidden rounded-[1.1rem] border border-white/10 bg-brand-strong shadow-xl shadow-black/18 transition duration-300 hover:-translate-y-1 hover:border-accent/35 hover:shadow-2xl hover:shadow-black/24 sm:min-h-[420px]",
                  isCompact ? "lg:min-h-[420px]" : "",
                  isFeatured ? "lg:col-span-2 lg:row-span-2" : "",
                  index === 1 ? "lg:col-span-2" : "",
                ].join(" ")}
                key={program.title}
                transition={{ delay: index * 0.07, duration: 0.5 }}
                variant="scaleIn"
              >
                <Image
                  alt={`GCC Chalissery ${program.ageGroup} ${program.title}`}
                  className={[
                    "size-full object-cover transition duration-700 group-hover:scale-[1.035]",
                    imagePosition,
                  ].join(" ")}
                  fill
                  sizes={
                    isFeatured
                      ? "(min-width: 1024px) 50vw, 100vw"
                      : "(min-width: 1024px) 25vw, 100vw"
                  }
                  src={program.image}
                />
                <div
                  className={[
                    "absolute inset-0",
                    isCompact
                      ? "bg-[linear-gradient(180deg,rgba(3,8,63,0.02)_0%,rgba(3,8,63,0.08)_34%,rgba(3,8,63,0.76)_64%,rgba(3,8,63,0.99)_100%),linear-gradient(90deg,rgba(3,8,63,0.24),transparent_64%)]"
                      : "bg-[linear-gradient(180deg,rgba(3,8,63,0.02)_0%,rgba(3,8,63,0.08)_34%,rgba(3,8,63,0.62)_68%,rgba(3,8,63,0.97)_100%),linear-gradient(90deg,rgba(3,8,63,0.3),transparent_62%)]",
                  ].join(" ")}
                />
                <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-accent via-accent/25 to-transparent opacity-55 transition group-hover:opacity-100" />
                <div
                  className={[
                    "absolute left-5 top-5 flex flex-col items-start gap-3 sm:left-7 sm:top-7",
                    isCompact ? "lg:left-6 lg:top-6" : "",
                  ].join(" ")}
                >
                  <span
                    className={[
                      "grid place-items-center rounded-full border border-white/20 bg-white/12 text-sm font-black text-accent shadow-xl shadow-black/15 backdrop-blur-md",
                      isCompact ? "size-12 sm:size-13" : "size-13 sm:size-14",
                    ].join(" ")}
                  >
                    {program.ageGroup}
                  </span>
                  {!isCompact ? (
                    <span className="hidden border border-accent/25 bg-brand-strong/35 px-3 py-1.5 text-[0.64rem] font-black uppercase tracking-[0.18em] text-accent shadow-lg shadow-black/10 backdrop-blur-md lg:inline-block">
                      Player pathway
                    </span>
                  ) : null}
                </div>
                <div
                  className={[
                    "absolute inset-x-0 bottom-0 flex flex-col text-white",
                    isCompact
                      ? "h-[66%] p-5 pb-7 sm:p-5 sm:pb-7 lg:h-[68%] lg:px-6 lg:pb-7 lg:pt-6"
                      : "min-h-[62%] justify-end p-5 pb-7 sm:min-h-[56%] sm:p-7",
                  ].join(" ")}
                >
                  {isCompact ? (
                    <>
                      <div className="flex h-full flex-col">
                        <p className="text-[0.62rem] font-black uppercase tracking-[0.18em] text-accent">
                          Player pathway
                        </p>
                        <h3 className="mt-2.5 text-[1.78rem] font-black leading-tight text-white [text-shadow:0_2px_14px_rgba(0,0,0,0.48)] sm:text-[1.55rem] lg:mt-3 lg:text-[1.55rem]">
                          {program.title}
                        </h3>
                        <p className="mt-2.5 line-clamp-2 max-w-sm text-[0.94rem] leading-6 text-blue-50/82 [text-shadow:0_2px_12px_rgba(0,0,0,0.42)] lg:mt-3 lg:text-[0.82rem] lg:leading-5">
                          {mobileProgramDescriptions[index]}
                        </p>
                        <p className="mt-3 text-[0.68rem] font-black uppercase tracking-[0.1em] text-blue-50/78 lg:mt-4 lg:text-[0.66rem] lg:tracking-[0.12em]">
                          <span className="text-accent">Training</span>
                          <span className="mx-2 text-blue-50/42">·</span>
                          {program.training}
                          <span className="mx-2 text-blue-50/42">·</span>
                          <span className="text-accent">Focus</span>
                          <span className="mx-2 text-blue-50/42">·</span>
                          {program.focus}
                        </p>
                        <div className="mt-3 flex flex-wrap items-center gap-2 lg:mt-4 lg:gap-1.5">
                          {program.tags.map((tag) => (
                            <span
                              className="border border-white/12 bg-white/[0.07] px-2 py-0.5 text-[0.66rem] font-black uppercase tracking-[0.08em] text-white/82 backdrop-blur transition group-hover:border-accent/30 group-hover:text-white lg:text-[0.58rem] lg:tracking-[0.09em]"
                              key={tag}
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                        <Link
                          className="mt-auto inline-flex w-fit items-center gap-2 border-b border-accent/45 pb-1 pt-5 text-sm font-black text-accent transition group-hover:border-accent group-hover:text-white"
                          href="/academy"
                        >
                          Explore Program
                          <ArrowRight
                            className="size-4 transition group-hover:translate-x-1"
                            aria-hidden="true"
                          />
                        </Link>
                      </div>
                    </>
                  ) : (
                    <>
                      <p className="text-[0.64rem] font-black uppercase tracking-[0.18em] text-accent lg:hidden">
                        Player pathway
                      </p>
                      <h3
                        className={[
                          "font-black leading-tight text-white [text-shadow:0_2px_14px_rgba(0,0,0,0.48)]",
                          isFeatured ? "mt-2.5 text-[2rem] sm:mt-0 sm:text-5xl" : "mt-2.5 text-[1.85rem] sm:mt-0 sm:text-3xl",
                        ].join(" ")}
                      >
                        {program.title}
                      </h3>
                      <p
                        className={[
                          "mt-2.5 line-clamp-2 text-blue-50/82 [text-shadow:0_2px_12px_rgba(0,0,0,0.42)] sm:mt-3",
                          isFeatured
                            ? "max-w-xl text-[0.95rem] leading-6 sm:text-base sm:leading-7"
                            : "max-w-md text-[0.95rem] leading-6 sm:text-sm sm:leading-7",
                        ].join(" ")}
                      >
                        {mobileProgramDescriptions[index]}
                      </p>
                      <div className="mt-3 flex flex-wrap items-center gap-x-2.5 gap-y-1.5 text-[0.68rem] font-black uppercase tracking-[0.1em] text-blue-50/82 sm:mt-4 sm:gap-x-3 sm:tracking-[0.12em]">
                        <span className="text-accent">Training</span>
                        <span>{program.training}</span>
                        <span className="h-1 w-1 rounded-full bg-accent/80" />
                        <span className="text-accent">Focus</span>
                        <span>{program.focus}</span>
                      </div>
                      <div className="mt-3 flex flex-wrap items-center gap-2 sm:mt-4 sm:gap-1.5">
                        {program.tags.map((tag) => (
                          <span
                            className="border border-white/12 bg-white/[0.07] px-2.5 py-1 text-[0.68rem] font-black uppercase tracking-[0.08em] text-white/82 backdrop-blur transition group-hover:border-accent/30 group-hover:text-white sm:text-[0.62rem] sm:tracking-[0.1em]"
                            key={tag}
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                      <Link
                        className="mt-5 inline-flex w-fit items-center gap-2 border-b border-accent/45 pb-1 text-sm font-black text-accent transition group-hover:border-accent group-hover:text-white"
                        href="/academy"
                      >
                        Explore Program
                        <ArrowRight
                          className="size-4 transition group-hover:translate-x-1"
                          aria-hidden="true"
                        />
                      </Link>
                    </>
                  )}
                </div>
              </FadeIn>
            );
          })}
        </div>
      </Container>
    </section>
  );
}

function CoachesLeadership() {
  return (
    <section className="relative isolate overflow-hidden bg-brand py-24 text-white sm:py-32 lg:py-36">
      <div className="absolute inset-0 -z-10 bg-[linear-gradient(135deg,rgba(2,6,46,0.98),rgba(7,16,111,0.95)_52%,rgba(3,8,63,0.98)),radial-gradient(circle_at_18%_20%,rgba(248,196,0,0.16),transparent_26rem),radial-gradient(circle_at_86%_76%,rgba(21,174,234,0.14),transparent_30rem)]" />
      <p className="pointer-events-none absolute -right-8 top-16 hidden text-[10rem] font-black leading-none text-white/[0.035] lg:block">
        COACH
      </p>
      <Container>
        <div className="grid gap-10 lg:grid-cols-[0.88fr_1.12fr] lg:items-end">
          <FadeIn variant="slideRight">
            <Badge className="border-white/20 bg-white/10 text-accent">
              {coachesLeadership.eyebrow}
            </Badge>
            <h2 className="mt-6 max-w-4xl text-balance text-4xl font-black leading-[1.02] text-white sm:text-6xl">
              {coachesLeadership.title}
            </h2>
          </FadeIn>
          <FadeIn variant="slideLeft">
            <p className="max-w-2xl text-base leading-8 text-blue-50/76 sm:text-lg">
              {coachesLeadership.description}
            </p>
          </FadeIn>
        </div>

        <div className="mt-14 grid gap-5 lg:grid-cols-[0.92fr_1.08fr]">
          <FadeIn
            className="group relative min-h-[560px] overflow-hidden rounded-[1.35rem] border border-white/10 bg-brand-strong shadow-2xl shadow-black/22"
            variant="imageReveal"
          >
            <Image
              alt="GCC Chalissery academy leadership"
              className="size-full object-cover object-center transition duration-700 group-hover:scale-[1.035]"
              fill
              sizes="(min-width: 1024px) 46vw, 100vw"
              src={coachesLeadership.featured.image}
            />
            <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(3,8,63,0.04),rgba(3,8,63,0.16)_42%,rgba(3,8,63,0.92)_100%),linear-gradient(90deg,rgba(3,8,63,0.45),transparent_64%)]" />
            <div className="absolute left-6 top-6 border border-accent/35 bg-accent/15 px-4 py-2 text-xs font-black uppercase tracking-[0.14em] text-accent backdrop-blur-md">
              Leadership
            </div>
            <div className="absolute bottom-0 left-0 right-0 p-7 sm:p-9">
              <p className="text-xs font-black uppercase tracking-[0.18em] text-accent">
                {coachesLeadership.featured.role}
              </p>
              <h3 className="mt-3 text-4xl font-black leading-tight text-white sm:text-5xl">
                {coachesLeadership.featured.name}
              </h3>
              <p className="mt-3 text-sm font-black uppercase tracking-[0.14em] text-blue-50/64">
                {coachesLeadership.featured.specialization}
              </p>
              <p className="mt-5 max-w-xl text-lg font-bold leading-8 text-blue-50/82">
                “{coachesLeadership.featured.quote}”
              </p>
            </div>
          </FadeIn>

          <div className="grid gap-5">
            <div className="grid gap-4 md:grid-cols-3 lg:grid-cols-3">
              {coachesLeadership.coaches.map((coach, index) => (
                <FadeIn
                  className="group relative min-h-[360px] overflow-hidden rounded-[1rem] border border-white/10 bg-white/[0.075] shadow-xl shadow-black/12 backdrop-blur-md transition duration-300 hover:-translate-y-1 hover:border-accent/45 hover:bg-white/[0.1]"
                  key={coach.role}
                  transition={{ delay: index * 0.06, duration: 0.45 }}
                >
                  <Image
                    alt={`GCC Chalissery ${coach.name}`}
                    className="size-full object-cover object-center transition duration-700 group-hover:scale-105"
                    fill
                    sizes="(min-width: 1024px) 18vw, (min-width: 768px) 33vw, 100vw"
                    src={coach.image}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-brand-strong/94 via-brand-strong/24 to-transparent" />
                  <div className="absolute inset-x-0 top-0 h-0.5 bg-gradient-to-r from-accent via-accent/35 to-transparent opacity-70 transition group-hover:opacity-100" />
                  <div className="absolute bottom-0 left-0 right-0 p-5">
                    <p className="text-[0.68rem] font-black uppercase tracking-[0.16em] text-accent">
                      {coach.role}
                    </p>
                    <h3 className="mt-2 text-2xl font-black leading-tight text-white">
                      {coach.name}
                    </h3>
                    <p className="mt-2 text-xs font-black uppercase tracking-[0.13em] text-blue-50/58">
                      {coach.specialization}
                    </p>
                    <p className="mt-3 text-sm leading-6 text-blue-50/74">
                      {coach.focus}
                    </p>
                  </div>
                </FadeIn>
              ))}
            </div>

            <FadeIn className="relative overflow-hidden rounded-[1.15rem] border border-white/10 bg-white/[0.08] p-7 shadow-xl shadow-black/12 backdrop-blur-md sm:p-8">
              <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-accent via-accent/35 to-transparent" />
              <div className="grid gap-7 lg:grid-cols-[0.72fr_1.28fr] lg:items-center">
                <div>
                  <p className="text-xs font-black uppercase tracking-[0.18em] text-accent">
                    Coaching philosophy
                  </p>
                  <h3 className="mt-3 text-3xl font-black leading-tight text-white">
                    Standards that shape players beyond match day.
                  </h3>
                </div>
                <div className="grid gap-3 sm:grid-cols-2">
                  {coachesLeadership.philosophy.map((item, index) => (
                    <div
                      className="flex items-center gap-3 border-t border-white/10 pt-3"
                      key={item}
                    >
                      <span className="text-xs font-black text-accent">
                        0{index + 1}
                      </span>
                      <p className="text-sm font-black uppercase tracking-[0.12em] text-blue-50/82">
                        {item}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </Container>
    </section>
  );
}

function PlayerPathway() {
  return (
    <section className="relative isolate overflow-hidden bg-brand-strong py-24 text-white sm:py-32 lg:py-36">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_15%_20%,rgba(21,174,234,0.16),transparent_26rem),radial-gradient(circle_at_80%_72%,rgba(248,196,0,0.16),transparent_24rem)]" />
      <Container>
        <FadeIn>
          <Badge className="border-white/20 bg-white/10 text-accent">
            Player development pathway
          </Badge>
          <h2 className="mt-6 max-w-4xl text-balance text-4xl font-black leading-[1.02] sm:text-6xl">
            A clear journey from first trial to professional ambition.
          </h2>
        </FadeIn>

        <div className="relative mt-16 grid gap-7 lg:grid-cols-5 lg:gap-0">
          <ScrollProgressLine
            aria-hidden="true"
            className="absolute left-0 top-0 hidden h-px w-full bg-gradient-to-r from-accent via-white/45 to-sky/70 lg:block"
            orientation="horizontal"
          />
          {playerPathway.map((step, index) => (
            <FadeIn
              className={[
                "relative border-l border-white/20 pl-6 lg:border-l-0 lg:border-t lg:border-white/10 lg:pl-0 lg:pt-8",
                index % 2 === 1 ? "lg:translate-y-14" : "",
              ].join(" ")}
              key={step}
              transition={{ delay: index * 0.07, duration: 0.45 }}
            >
              <span className="absolute -left-2 top-0 size-4 rounded-full bg-accent shadow-xl shadow-accent/30 lg:-top-2 lg:left-0" />
              <p className="text-sm font-black text-accent">0{index + 1}</p>
              <h3 className="mt-4 max-w-[13rem] text-2xl font-black leading-tight">
                {step}
              </h3>
              {index < playerPathway.length - 1 ? (
                <ArrowRight
                  className="mt-6 hidden size-5 text-white/35 lg:block"
                  aria-hidden="true"
                />
              ) : null}
            </FadeIn>
          ))}
        </div>
      </Container>
    </section>
  );
}

function AiffAffiliation() {
  return (
    <section className="relative isolate overflow-hidden bg-brand py-24 text-white sm:py-32 lg:py-36">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_15%_18%,rgba(248,196,0,0.22),transparent_24rem),radial-gradient(circle_at_90%_64%,rgba(21,174,234,0.2),transparent_28rem)]" />
      <p className="pointer-events-none absolute -right-8 top-8 hidden text-[13rem] font-black leading-none text-white/[0.035] lg:block">
        AIFF
      </p>
      <Container>
        <div className="grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
          <FadeIn variant="slideRight">
            <Badge className="border-white/20 bg-white/10 text-accent">
              AIFF affiliation
            </Badge>
            <h2 className="mt-6 max-w-3xl text-balance text-4xl font-black leading-[1.02] sm:text-6xl">
              Connected to Indian football&apos;s professional pathway.
            </h2>
            <p className="mt-6 max-w-xl text-base leading-8 text-blue-50/75">
              The 2024 AIFF affiliation gives GCC a stronger platform to
              support talented players with credibility, direction, and
              professional development standards.
            </p>
          </FadeIn>

          <div className="grid gap-x-10 gap-y-9 sm:grid-cols-2">
            {aiffHighlights.map((item, index) => {
              const Icon = item.icon;

              return (
                <FadeIn
                  className="border-t border-white/15 pt-6 transition hover:border-accent/70"
                  key={item.title}
                  transition={{ delay: index * 0.05, duration: 0.45 }}
                >
                  <Icon className="size-8 text-accent" aria-hidden="true" />
                  <h3 className="mt-5 text-xl font-black text-white">
                    {item.title}
                  </h3>
                  <p className="mt-3 text-sm leading-7 text-blue-50/72">
                    {item.description}
                  </p>
                </FadeIn>
              );
            })}
          </div>
        </div>
      </Container>
    </section>
  );
}

function AchievementsRecognition() {
  return (
    <section className="relative isolate overflow-hidden bg-brand-strong py-24 text-white sm:py-32 lg:py-36">
      <div className="absolute inset-0 -z-10 bg-[linear-gradient(135deg,#02062e_0%,#07106f_48%,#03083f_100%),radial-gradient(circle_at_12%_18%,rgba(248,196,0,0.18),transparent_26rem),radial-gradient(circle_at_88%_74%,rgba(21,174,234,0.14),transparent_30rem)]" />
      <p className="pointer-events-none absolute -right-8 top-12 hidden text-[12rem] font-black leading-none text-white/[0.035] lg:block">
        PROOF
      </p>
      <Container>
        <div className="grid gap-12 lg:grid-cols-[0.88fr_1.12fr] lg:items-end">
          <FadeIn variant="slideLeft">
            <Badge className="border-white/20 bg-white/10 text-accent">
              {achievementsRecognition.eyebrow}
            </Badge>
            <h2 className="mt-6 max-w-4xl text-balance text-4xl font-black leading-[1.02] text-white sm:text-6xl">
              {achievementsRecognition.title}
            </h2>
          </FadeIn>
          <FadeIn variant="slideRight">
            <p className="max-w-2xl text-base leading-8 text-blue-50/76 sm:text-lg">
              {achievementsRecognition.description}
            </p>
          </FadeIn>
        </div>

        <div className="mt-14 grid gap-5 lg:grid-cols-[1.08fr_0.92fr] lg:items-stretch">
          <FadeIn className="group relative min-h-[560px] overflow-hidden rounded-[1.35rem] border border-white/10 bg-brand shadow-2xl shadow-black/22 sm:min-h-[680px]">
            <Image
              alt="GCC Chalissery young champions with trophy"
              className="size-full object-cover object-center transition duration-700 group-hover:scale-[1.035]"
              fill
              sizes="(min-width: 1024px) 54vw, 100vw"
              src={achievementsRecognition.featuredImage}
            />
            <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(3,8,63,0.02)_0%,rgba(3,8,63,0.08)_38%,rgba(3,8,63,0.55)_68%,rgba(3,8,63,0.96)_100%),linear-gradient(90deg,rgba(3,8,63,0.35),transparent_58%)]" />
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
              <h3 className="mt-3 max-w-2xl text-4xl font-black leading-tight text-white sm:text-5xl">
                Recognition that young players and families can believe in.
              </h3>
            </div>
          </FadeIn>

          <div className="grid gap-5">
            <div className="grid gap-4 sm:grid-cols-2">
              {achievementsRecognition.proofPoints.map((item, index) => (
                <FadeIn
                  className="group relative overflow-hidden rounded-[1rem] border border-white/10 bg-white/[0.075] p-6 shadow-xl shadow-black/10 backdrop-blur-md transition duration-300 hover:-translate-y-1 hover:border-accent/50 hover:bg-white/[0.1]"
                  key={item.label}
                  transition={{ delay: index * 0.06, duration: 0.45 }}
                >
                  <div className="absolute inset-x-0 top-0 h-0.5 bg-gradient-to-r from-accent via-accent/40 to-transparent opacity-70 transition group-hover:opacity-100" />
                  <CountUpStat
                    className="block text-[3.2rem] font-black leading-none text-white sm:text-[3.8rem]"
                    value={item.value}
                  />
                  <h3 className="mt-4 text-lg font-black text-white">
                    {item.label}
                  </h3>
                  <p className="mt-3 text-sm leading-7 text-blue-50/70">
                    {item.description}
                  </p>
                </FadeIn>
              ))}
            </div>

            <div className="grid gap-4 sm:grid-cols-3 lg:grid-cols-1">
              {achievementsRecognition.supportImages.map((item, index) => (
                <FadeIn
                  className="group relative min-h-[170px] overflow-hidden rounded-[1rem] border border-white/10 bg-white/10 shadow-xl shadow-black/12"
                  key={item.label}
                  transition={{ delay: 0.18 + index * 0.06, duration: 0.45 }}
                >
                  <Image
                    alt={`GCC Chalissery ${item.label}`}
                    className="size-full object-cover object-center transition duration-700 group-hover:scale-105"
                    fill
                    sizes="(min-width: 1024px) 38vw, (min-width: 640px) 33vw, 100vw"
                    src={item.image}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-brand-strong/86 via-brand-strong/12 to-transparent" />
                  <p className="absolute bottom-4 left-4 right-4 text-xs font-black uppercase tracking-[0.14em] text-white">
                    <span className="mr-2 text-accent">0{index + 1}</span>
                    {item.label}
                  </p>
                </FadeIn>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

function VisualGallery() {
  return <GalleryMomentsSection moments={galleryMoments} />;
}

function TestimonialsTrust() {
  return (
    <section className="relative isolate overflow-hidden bg-brand py-24 text-white sm:py-32 lg:py-36">
      <div className="absolute inset-0 -z-10 bg-[linear-gradient(135deg,rgba(2,6,46,0.98),rgba(7,16,111,0.95)_50%,rgba(3,8,63,0.98)),radial-gradient(circle_at_16%_20%,rgba(248,196,0,0.17),transparent_26rem),radial-gradient(circle_at_86%_76%,rgba(21,174,234,0.14),transparent_30rem)]" />
      <p className="pointer-events-none absolute -right-8 top-12 hidden text-[11rem] font-black leading-none text-white/[0.035] lg:block">
        TRUST
      </p>
      <Container>
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
          <FadeIn variant="slideLeft">
            <Badge className="border-white/20 bg-white/10 text-accent">
              {testimonialsTrust.eyebrow}
            </Badge>
            <h2 className="mt-6 max-w-4xl text-balance text-4xl font-black leading-[1.02] text-white sm:text-6xl">
              {testimonialsTrust.title}
            </h2>
          </FadeIn>
          <FadeIn>
            <p className="max-w-2xl text-base leading-8 text-blue-50/76 sm:text-lg">
              {testimonialsTrust.description}
            </p>
          </FadeIn>
        </div>

        <div className="mt-14 grid gap-5 lg:grid-cols-[1.05fr_0.95fr]">
          <FadeIn className="group relative overflow-hidden rounded-[1.35rem] border border-white/10 bg-white/[0.08] p-7 shadow-2xl shadow-black/18 backdrop-blur-md transition duration-300 hover:-translate-y-1 hover:border-accent/45 hover:bg-white/[0.1] sm:p-9 lg:min-h-[520px]">
            <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-accent via-accent/40 to-transparent opacity-75 transition group-hover:opacity-100" />
            <Quote
              className="size-16 text-accent/80 sm:size-20"
              aria-hidden="true"
            />
            <blockquote className="mt-8 max-w-3xl text-balance text-3xl font-black leading-tight text-white sm:text-5xl">
              “{testimonialsTrust.featured.quote}”
            </blockquote>
            <div className="mt-10 flex items-center gap-4 border-t border-white/10 pt-6">
              <div className="grid size-14 place-items-center rounded-full border border-accent/30 bg-accent/15 text-sm font-black text-accent">
                GCC
              </div>
              <div>
                <p className="text-lg font-black text-white">
                  {testimonialsTrust.featured.name}
                </p>
                <p className="mt-1 text-sm font-bold uppercase tracking-[0.14em] text-blue-50/60">
                  {testimonialsTrust.featured.role}
                </p>
              </div>
            </div>
          </FadeIn>

          <div className="grid gap-5">
            <div className="grid gap-4 sm:grid-cols-2">
              {testimonialsTrust.metrics.map((metric, index) => (
                <FadeIn
                  className="relative overflow-hidden rounded-[1rem] border border-white/10 bg-white/[0.07] p-5 shadow-xl shadow-black/10 backdrop-blur-md"
                  key={metric}
                  transition={{ delay: index * 0.05, duration: 0.45 }}
                >
                  <div className="absolute left-5 top-0 h-0.5 w-14 bg-gradient-to-r from-accent to-transparent" />
                  <p className="text-xl font-black text-white">{metric}</p>
                </FadeIn>
              ))}
            </div>

            {testimonialsTrust.testimonials.map((item, index) => (
              <FadeIn
                className="group rounded-[1rem] border border-white/10 bg-white/[0.075] p-6 shadow-xl shadow-black/10 backdrop-blur-md transition duration-300 hover:-translate-y-1 hover:border-accent/40 hover:bg-white/[0.1]"
                key={item.name}
                transition={{ delay: 0.12 + index * 0.06, duration: 0.45 }}
              >
                <div className="flex gap-4">
                  <Quote
                    className="mt-1 size-7 shrink-0 text-accent"
                    aria-hidden="true"
                  />
                  <div>
                    <p className="text-lg font-black leading-7 text-white">
                      “{item.quote}”
                    </p>
                    <div className="mt-5 border-t border-white/10 pt-4">
                      <p className="text-sm font-black text-white">
                        {item.name}
                      </p>
                      <p className="mt-1 text-xs font-black uppercase tracking-[0.14em] text-blue-50/55">
                        {item.role}
                      </p>
                    </div>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}

function FinalCta() {
  const finalTitleLines = ["Your Football Journey", "Starts Here."];

  return (
    <section className="relative isolate overflow-hidden bg-brand-strong text-white">
      <Image
        alt="GCC Chalissery Football Academy match moment"
        className="premium-background-image absolute inset-0 -z-20 size-full object-cover object-center"
        fill
        sizes="100vw"
        src={finalHomeCta.image}
      />
      <div className="absolute inset-0 -z-10 bg-[linear-gradient(90deg,rgba(2,6,46,0.98),rgba(3,8,63,0.84)_48%,rgba(3,8,63,0.58)),linear-gradient(180deg,rgba(3,8,63,0.32),rgba(3,8,63,0.96)),radial-gradient(circle_at_80%_20%,rgba(248,196,0,0.22),transparent_26rem)]" />
      <Container className="py-24 sm:py-32 lg:py-40">
        <div className="grid gap-12 lg:grid-cols-[1fr_0.78fr] lg:items-end">
          <FadeIn>
            <Badge className="border-white/20 bg-white/10 text-accent">
              {finalHomeCta.eyebrow}
            </Badge>
            <SplitLineReveal
              as="h2"
              className="mt-6 max-w-5xl text-balance text-[clamp(2.85rem,8.8vw,7.35rem)] font-black leading-[0.93] text-white"
              lines={finalTitleLines}
              trigger="load"
            />
            <p className="mt-8 max-w-2xl text-base leading-8 text-blue-50/78 sm:text-xl sm:leading-9">
              {finalHomeCta.description}
            </p>
            <div className="mt-10 flex flex-col gap-3 sm:flex-row">
              <MagneticButton
                className="group inline-flex h-[3.55rem] items-center justify-center gap-2 bg-accent px-8 text-sm font-black text-brand-strong shadow-xl shadow-accent/20 transition hover:-translate-y-0.5 hover:bg-white"
                href="/contact"
              >
                {finalHomeCta.primaryAction}
                <ArrowRight
                  className="size-4 transition group-hover:translate-x-1"
                  aria-hidden="true"
                />
              </MagneticButton>
              <MagneticButton
                className="group inline-flex h-[3.55rem] items-center justify-center gap-2 border border-white/20 bg-white/10 px-8 text-sm font-black text-white backdrop-blur transition hover:-translate-y-0.5 hover:border-accent hover:bg-accent hover:text-brand-strong"
                href="/contact"
              >
                {finalHomeCta.secondaryAction}
                <CheckCircle2 className="size-4" aria-hidden="true" />
              </MagneticButton>
              <MagneticButton
                className="group inline-flex h-[3.55rem] items-center justify-center gap-2 border border-white/18 px-8 text-sm font-black text-white transition hover:-translate-y-0.5 hover:bg-white hover:text-brand"
                href="/contact"
              >
                {finalHomeCta.tertiaryAction}
                <MoveUpRight
                  className="size-4 transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                  aria-hidden="true"
                />
              </MagneticButton>
            </div>
          </FadeIn>

          <FadeIn className="grid gap-3 sm:grid-cols-2 lg:justify-self-end">
            {finalHomeCta.trustIndicators.map((indicator, index) => (
              <PremiumCard
                className="relative overflow-hidden rounded-[1rem] border border-white/12 bg-white/[0.085] p-5 shadow-xl shadow-black/12 backdrop-blur-md"
                key={indicator}
                initial={{ opacity: 0, y: 18, scale: 0.97 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ delay: index * 0.06, duration: 0.45 }}
              >
                <div className="absolute inset-x-0 top-0 h-0.5 bg-gradient-to-r from-accent via-accent/40 to-transparent" />
                <p className="text-xs font-black uppercase tracking-[0.16em] text-accent">
                  0{index + 1}
                </p>
                <p className="mt-3 text-xl font-black leading-tight text-white">
                  {indicator}
                </p>
              </PremiumCard>
            ))}
          </FadeIn>
        </div>
      </Container>
    </section>
  );
}
