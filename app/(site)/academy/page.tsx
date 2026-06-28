import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import {
  ArrowRight,
  CalendarDays,
  Dumbbell,
  HeartPulse,
  ShieldCheck,
  Sparkles,
  Target,
  Users,
} from "lucide-react";

import { FadeIn } from "@/components/motion/fade-in";
import { GalleryPreview } from "@/components/sections/gallery-preview";
import { InnerPageHero } from "@/components/sections/inner-page-hero";
import { Badge } from "@/components/ui/badge";
import { Container } from "@/components/ui/container";
import { CTASection } from "@/components/ui/cta-section";
import { FeatureCard } from "@/components/ui/feature-card";
import { ImageCard } from "@/components/ui/image-card";
import { Section } from "@/components/ui/section";
import { SectionHeader } from "@/components/ui/section-header";
import { StatCard } from "@/components/ui/stat-card";
import { buttonClassName } from "@/lib/design-system";
import { createMetadata } from "@/lib/metadata";
import { academyPrograms, trainingPhilosophy } from "@/src/data/site";
import type { GalleryImage } from "@/src/data/gallery";

export const metadata: Metadata = createMetadata({
  absoluteTitle: "Academy Programs | GCC Chalissery",
  description:
    "Explore GCC Chalissery Football Academy's training philosophy, three-pillar development model, U-10, U-13, and U-15 programs, weekly schedule, and player development focus.",
  path: "/academy",
});

const academyImages = {
  hero: "/academy-content/media/WhatsApp Image 2026-06-23 at 12.38.56 PM.jpeg",
  training: "/images/academy-classroom-session.jpg",
  schedule: "/academy-content/media/WhatsApp Image 2026-06-22 at 12.57.44 PM.jpeg",
  focus: "/academy-content/media/WhatsApp Image 2026-06-22 at 12.57.45 PM.jpeg",
  cta: "/images/young-champions-trophy.jpg",
} as const;

const programImages = {
  "U-10": "/images/u14-team-green.jpg",
  "U-13": "/images/u14-team-blue-wide-2.jpg",
  "U-15": "/academy-content/media/WhatsApp Image 2026-06-23 at 12.39.04 PM.jpeg",
} as const;

const programImagePositions = {
  "U-10": "object-[center_44%]",
  "U-13": "object-[center_48%]",
  "U-15": "object-[center_42%]",
} as const;

const academyGalleryPreviewImages = [
  {
    title: "Training sessions",
    category: "Training Sessions",
    image: "/academy-content/media/WhatsApp Image 2026-06-22 at 12.57.45 PM.jpeg",
  },
  {
    title: "Ground session discipline",
    category: "Training Sessions",
    image: "/academy-content/media/WhatsApp Image 2026-06-22 at 12.57.46 PM.jpeg",
  },
  {
    title: "Fitness and movement work",
    category: "Training Sessions",
    image: "/academy-content/media/WhatsApp Image 2026-06-22 at 12.57.45 PM (2).jpeg",
  },
  {
    title: "Player development drills",
    category: "Training Sessions",
    image: "/academy-content/media/WhatsApp Image 2026-06-22 at 12.57.47 PM.jpeg",
  },
  {
    title: "Match day focus",
    category: "Match Days",
    image: "/academy-content/media/WhatsApp Image 2026-06-23 at 12.39.03 PM.jpeg",
  },
  {
    title: "Competitive football moment",
    category: "Tournament Moments",
    image: "/images/young-champions-trophy.jpg",
  },
  {
    title: "Match preparation",
    category: "Match Days",
    image: "/academy-content/media/WhatsApp Image 2026-06-23 at 12.39.02 PM.jpeg",
  },
  {
    title: "Game-day team rhythm",
    category: "Match Days",
    image: "/academy-content/media/WhatsApp Image 2026-06-23 at 12.33.44 PM.jpeg",
  },
] satisfies readonly GalleryImage[];

const pillarIcons = [CalendarDays, Dumbbell, Users] as const;
const focusItems = [
  {
    title: "Technical Skills",
    description:
      "Ball mastery, first touch, passing quality, movement, and position-specific technical habits.",
    icon: Target,
  },
  {
    title: "Tactical Understanding",
    description:
      "Game awareness, decision making, team play, and understanding football situations.",
    icon: ShieldCheck,
  },
  {
    title: "Physical Development",
    description:
      "Core strength, agility, stamina, mobility, injury prevention, and match fitness.",
    icon: HeartPulse,
  },
  {
    title: "Personality Development",
    description:
      "Discipline, leadership, communication, confidence, study balance, and positive sporting values.",
    icon: Sparkles,
  },
] as const;

export default function AcademyPage() {
  return (
    <>
      <InnerPageHero
        eyebrow="Academy"
        title="Football without compromising education."
        description="GCC Football Academy provides age-appropriate football development programs designed to support players at every stage of their journey while respecting school commitments and family priorities."
        image={academyImages.hero}
        stats={[
          { label: "Age Categories", value: "U-10 • U-13 • U-15" },
          { label: "Ground Sessions", value: "Weekends" },
          { label: "Training Time", value: "4:30 PM - 6:00 PM" },
        ]}
      />

      <TrainingPhilosophySection />
      <ThreePillarModel />
      <AgeCategories />
      <WeeklyTrainingSchedule />
      <PlayerDevelopmentFocus />
      <GalleryPreview images={academyGalleryPreviewImages} />
      <FinalCta />
    </>
  );
}

function TrainingPhilosophySection() {
  return (
    <Section className="relative isolate overflow-hidden bg-[linear-gradient(180deg,#061B75_0%,#0b2478_48%,#1230a7_100%)] text-white">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_15%_18%,rgba(248,196,0,0.16),transparent_25rem),radial-gradient(circle_at_90%_72%,rgba(21,174,234,0.16),transparent_30rem)]" />
      <div className="absolute inset-x-0 top-0 -z-10 h-32 bg-gradient-to-b from-brand-strong/55 to-transparent" />
      <div className="absolute inset-x-0 bottom-0 -z-10 h-32 bg-gradient-to-b from-transparent to-[#1230a7]/58" />
      <Container className="grid gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
        <ImageCard
          alt="GCC Chalissery academy training group"
          className="min-h-[440px] rounded-[1.5rem] shadow-2xl shadow-black/20 lg:min-h-[560px]"
          imageClassName="object-[center_46%]"
          sizes="(min-width: 1024px) 52vw, 100vw"
          src={academyImages.training}
        >
          <div className="absolute bottom-0 left-0 right-0 p-7 sm:p-9">
            <p className="text-xs font-black uppercase tracking-[0.18em] text-accent">
              Training Philosophy
            </p>
            <h2 className="mt-3 max-w-2xl text-4xl font-black leading-tight text-white">
              {trainingPhilosophy.title}
            </h2>
          </div>
        </ImageCard>

        <FadeIn>
          <Badge className="border-white/20 bg-white/10 text-accent">
            Education First
          </Badge>
          <h2 className="mt-6 max-w-2xl text-balance text-4xl font-black leading-[1.02] text-white sm:text-6xl">
            A training model built around football, school, and personal growth.
          </h2>
          <p className="mt-6 max-w-xl text-base leading-8 text-blue-50/76 sm:text-lg">
            {trainingPhilosophy.description}
          </p>
          <div className="mt-8 grid gap-3 sm:grid-cols-3">
            {["Football", "Education", "Character"].map((item, index) => (
              <StatCard
                className="min-h-[8.75rem] rounded-[1.5rem] p-6"
                index={index}
                key={item}
                revealDelay={index * 0.05}
                value={item}
                valueClassName="mt-5 text-lg sm:text-xl"
              />
            ))}
          </div>
        </FadeIn>
      </Container>
    </Section>
  );
}

function ThreePillarModel() {
  return (
    <Section className="relative isolate overflow-hidden bg-[linear-gradient(135deg,#1230a7_0%,#1d62c4_56%,#1579c8_100%)] text-white">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_15%_18%,rgba(248,196,0,0.16),transparent_26rem),radial-gradient(circle_at_90%_76%,rgba(21,174,234,0.2),transparent_30rem)]" />
      <div className="absolute inset-x-0 bottom-0 -z-10 h-32 bg-gradient-to-b from-transparent to-[#061B75]/44" />
      <Container>
        <SectionHeader
          eyebrow="3-Pillar Development Model"
          invert
          title="Development continues on the pitch, at home, and inside the player."
          description="GCC's model combines practical training, weekday home work, and monthly personality development so young players grow with structure and balance."
        />
        <div className="mt-12 grid gap-5 lg:grid-cols-3">
          {trainingPhilosophy.pillars.map((pillar, index) => (
            <FadeIn
              className="group relative flex h-full min-h-[25rem] flex-col overflow-hidden rounded-[1.5rem] border border-white/12 bg-white/[0.085] p-6 shadow-2xl shadow-black/12 backdrop-blur-md transition duration-500 hover:-translate-y-1 hover:border-accent/50 hover:bg-white/[0.11] sm:p-7"
              key={pillar.title}
              transition={{ delay: index * 0.06 }}
              variant="scaleIn"
            >
              <div className="absolute inset-x-0 top-0 h-0.5 bg-gradient-to-r from-accent via-accent/40 to-transparent" />
              <div className="grid size-12 place-items-center rounded-full bg-white/10 text-accent transition group-hover:bg-accent group-hover:text-brand-strong">
                {(() => {
                  const Icon = pillarIcons[index];
                  return <Icon className="size-6" aria-hidden="true" />;
                })()}
              </div>
              <p className="mt-6 text-xs font-black uppercase tracking-[0.18em] text-accent">
                Pillar 0{index + 1}
              </p>
              <h3 className="mt-3 text-2xl font-black leading-tight text-white">
                {pillar.title}
              </h3>
              <p className="mt-3 text-sm font-black uppercase tracking-[0.12em] text-blue-50/58">
                {pillar.schedule}
              </p>
              <p className="mt-4 text-sm leading-7 text-blue-50/74">
                {pillar.description}
              </p>
              <div className="mt-5 flex flex-wrap gap-2">
                {pillar.focus.slice(0, 4).map((focus) => (
                  <span
                    className="rounded-full border border-white/12 bg-white/[0.08] px-3 py-1.5 text-[0.68rem] font-black uppercase tracking-[0.09em] text-white/82 backdrop-blur"
                    key={focus}
                  >
                    {focus}
                  </span>
                ))}
              </div>
            </FadeIn>
          ))}
        </div>
      </Container>
    </Section>
  );
}

function AgeCategories() {
  return (
    <Section className="relative isolate overflow-hidden bg-[linear-gradient(180deg,#061B75_0%,#0b2478_52%,#1230a7_100%)] text-white">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_12%_18%,rgba(248,196,0,0.16),transparent_26rem),radial-gradient(circle_at_88%_76%,rgba(21,174,234,0.14),transparent_30rem)]" />
      <div className="absolute inset-x-0 bottom-0 -z-10 h-32 bg-gradient-to-b from-transparent to-[#1230a7]/54" />
      <Container>
        <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
          <SectionHeader
            eyebrow="Age Categories"
            invert
            title="U-10, U-13, and U-15 programs with clear development focus."
            description="Each age category is designed around confidence, technical growth, tactical understanding, and competitive readiness."
          />
          <FadeIn>
            <Link
              className={buttonClassName("primary", "lg")}
              href="/contact"
            >
              Enquire Program
              <ArrowRight className="size-4" aria-hidden="true" />
            </Link>
          </FadeIn>
        </div>

        <div className="mt-12 grid gap-5 lg:grid-cols-3">
          {academyPrograms.map((program, index) => (
            <FadeIn
              className="group relative min-h-[540px] overflow-hidden rounded-[1.5rem] border border-white/12 bg-brand shadow-2xl shadow-black/16 transition duration-500 hover:-translate-y-1 hover:border-accent/45 hover:shadow-2xl hover:shadow-black/22"
              key={program.title}
              transition={{ delay: index * 0.06 }}
              variant="scaleIn"
            >
              <Image
                alt={`GCC Chalissery ${program.title}`}
                className={`size-full object-cover transition duration-700 group-hover:scale-[1.04] ${
                  programImagePositions[
                    program.ageGroup as keyof typeof programImagePositions
                  ] ?? "object-center"
                }`}
                fill
                sizes="(min-width: 1024px) 33vw, 100vw"
                src={
                  programImages[
                    program.ageGroup as keyof typeof programImages
                  ] ?? program.image
                }
              />
              <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(3,8,63,0.02)_0%,rgba(3,8,63,0.1)_34%,rgba(3,8,63,0.72)_66%,rgba(3,8,63,0.99)_100%)]" />
              <div className="absolute left-5 top-5 grid size-14 place-items-center rounded-full border border-white/20 bg-white/12 text-sm font-black text-accent shadow-xl shadow-black/15 backdrop-blur-md">
                {program.ageGroup}
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-6 text-white sm:p-7">
                <p className="text-xs font-black uppercase tracking-[0.18em] text-accent">
                  Player pathway
                </p>
                <h3 className="mt-3 text-3xl font-black leading-tight text-white">
                  {program.title}
                </h3>
                <p className="mt-3 text-sm leading-7 text-blue-50/80">
                  {program.description}
                </p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {program.focusAreas.slice(0, 4).map((focus) => (
                    <span
                      className="rounded-full border border-white/12 bg-white/[0.08] px-3 py-1.5 text-[0.68rem] font-black uppercase tracking-[0.09em] text-white/82 backdrop-blur"
                      key={focus}
                    >
                      {focus}
                    </span>
                  ))}
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </Container>
    </Section>
  );
}

function WeeklyTrainingSchedule() {
  const groundSession = trainingPhilosophy.pillars[0];
  const homeWorkout = trainingPhilosophy.pillars[1];

  return (
    <Section className="relative isolate overflow-hidden bg-[linear-gradient(180deg,#1230a7_0%,#1b55bd_50%,#0b2478_100%)] text-white">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_12%_26%,rgba(248,196,0,0.13),transparent_24rem),radial-gradient(circle_at_88%_70%,rgba(21,174,234,0.18),transparent_28rem)]" />
      <div className="absolute inset-x-0 top-0 -z-10 h-28 bg-gradient-to-b from-[#1230a7]/60 to-transparent" />
      <div className="absolute inset-x-0 bottom-0 -z-10 h-32 bg-gradient-to-b from-transparent to-[#061B75]/48" />
      <Container className="grid gap-12 lg:grid-cols-[1fr_1fr] lg:items-center">
        <div>
          <SectionHeader
            eyebrow="Weekly Training Schedule"
            invert
            title="A weekly rhythm designed around school life."
            description="Training happens when players can commit with focus: weekends, school holidays, and short weekday home work that supports consistency."
          />
          <div className="mt-8 grid gap-4">
            <FeatureCard
              className="min-h-[10.5rem] rounded-[1.5rem] p-6 sm:p-7"
              description={groundSession.description}
              icon={CalendarDays}
              revealDelay={0.04}
              title={groundSession.schedule}
            />
            <FeatureCard
              className="min-h-[10.5rem] rounded-[1.5rem] p-6 sm:p-7"
              description={homeWorkout.description}
              icon={Dumbbell}
              revealDelay={0.1}
              title={homeWorkout.schedule}
            />
          </div>
        </div>

        <ImageCard
          alt="GCC Chalissery academy training schedule"
          className="min-h-[440px] rounded-[1.5rem] shadow-2xl shadow-black/18 lg:min-h-[540px]"
          imageClassName="object-[center_42%]"
          sizes="(min-width: 1024px) 50vw, 100vw"
          src={academyImages.schedule}
        >
          <div className="absolute bottom-0 left-0 right-0 p-7 sm:p-9">
            <p className="text-xs font-black uppercase tracking-[0.18em] text-accent">
              Practical Sessions
            </p>
            <h2 className="mt-3 max-w-2xl text-4xl font-black leading-tight text-white">
              Saturdays, Sundays, and school holidays.
            </h2>
          </div>
        </ImageCard>
      </Container>
    </Section>
  );
}

function PlayerDevelopmentFocus() {
  return (
    <Section className="relative isolate overflow-hidden bg-[linear-gradient(180deg,#061B75_0%,#0b2478_46%,#143bb4_100%)] text-white">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_18%_18%,rgba(248,196,0,0.14),transparent_25rem),radial-gradient(circle_at_86%_80%,rgba(21,174,234,0.18),transparent_28rem)]" />
      <div className="absolute inset-x-0 top-0 -z-10 h-28 bg-gradient-to-b from-[#061B75]/54 to-transparent" />
      <div className="absolute inset-x-0 bottom-0 -z-10 h-32 bg-gradient-to-b from-transparent to-[#143bb4]/52" />
      <Container className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-stretch">
        <div className="flex h-full flex-col">
          <SectionHeader
            eyebrow="Player Development Focus"
            invert
            title="Building disciplined athletes and responsible individuals."
            description="GCC's player development focus connects technical football, tactical clarity, physical growth, personality, and education balance."
          />
          <ImageCard
            alt="GCC Chalissery player development culture"
            className="mt-8 min-h-[420px] flex-1 rounded-[1.5rem] shadow-2xl shadow-black/18 lg:min-h-0"
            imageClassName="object-[center_45%]"
            sizes="(min-width: 1024px) 38vw, 100vw"
            src={academyImages.focus}
          >
            <div className="absolute bottom-0 left-0 right-0 p-6">
              <p className="text-xs font-black uppercase tracking-[0.18em] text-accent">
                Beyond football
              </p>
              <h3 className="mt-3 text-3xl font-black leading-tight text-white">
                Confidence, discipline, and leadership on and off the field.
              </h3>
            </div>
          </ImageCard>
        </div>

        <div className="grid gap-5 md:grid-cols-2 lg:auto-rows-fr">
          {focusItems.map((item, index) => (
            <FeatureCard
              className="min-h-[14.5rem] rounded-[1.5rem] p-6 sm:p-7 lg:min-h-0"
              description={item.description}
              icon={item.icon}
              key={item.title}
              revealDelay={index * 0.06}
              title={item.title}
            />
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
        <Link className={buttonClassName("primary", "lg")} href="/contact">
          Contact Academy
          <ArrowRight className="size-4" aria-hidden="true" />
        </Link>
      }
      description="Connect with GCC Chalissery Football Academy to understand the right program, age category, training expectations, and trial session pathway."
      eyebrow="Join the pathway"
      image={academyImages.cta}
      imageAlt="GCC Chalissery young players celebrating a football achievement"
      className="bg-[linear-gradient(135deg,#0b2478_0%,#143bb4_52%,#1a7fcb_100%)]"
      overlayClassName="bg-[linear-gradient(90deg,rgba(6,18,93,0.94),rgba(13,44,149,0.78)_52%,rgba(20,75,176,0.62)),linear-gradient(180deg,rgba(18,48,167,0.2),rgba(4,12,70,0.7)),radial-gradient(circle_at_82%_18%,rgba(248,196,0,0.18),transparent_25rem)]"
      innerGridClassName="gap-12 lg:grid-cols-[minmax(0,1fr)_minmax(30rem,0.92fr)] lg:items-center xl:gap-16"
      title={["Start with the right", "football environment."]}
      trustCardClassName="min-h-[10.25rem] rounded-[1.5rem] border-white/14 bg-white/[0.09] p-7 shadow-2xl shadow-black/12 sm:p-8"
      trustGridClassName="auto-rows-fr gap-5 sm:grid-cols-2 lg:w-full lg:max-w-[42rem] lg:self-center lg:justify-self-end"
      trustIndicators={[
        "Football + Education",
        "3-Pillar Model",
        "U-10 • U-13 • U-15",
        "Community Driven",
      ]}
      trustLabelClassName="text-[0.72rem] tracking-[0.18em]"
      trustValueClassName="mt-6 max-w-[13rem] break-normal text-[1.08rem] leading-[1.28] [hyphens:none] [overflow-wrap:normal] sm:text-[1.18rem]"
    />
  );
}
