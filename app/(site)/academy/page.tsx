import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import { ArrowRight, CalendarCheck, Dumbbell, ShieldCheck, Target, Users } from "lucide-react";

import { FadeIn } from "@/components/motion/fade-in";
import { InnerPageHero } from "@/components/sections/inner-page-hero";
import { Container } from "@/components/ui/container";
import { CTASection } from "@/components/ui/cta-section";
import { FeatureCard } from "@/components/ui/feature-card";
import { ImageCard } from "@/components/ui/image-card";
import { Section } from "@/components/ui/section";
import { SectionHeader } from "@/components/ui/section-header";
import { academyProgramsShowcase, finalHomeCta, playerPathway } from "@/data/home";
import { academyMethod, pageImages } from "@/data/pages";
import { buttonClassName } from "@/lib/design-system";
import { createMetadata } from "@/lib/metadata";

export const metadata: Metadata = createMetadata({
  absoluteTitle: "Academy Programs | GCC Chalissery",
  description:
    "Explore GCC Chalissery Football Academy programs, training philosophy, coaching standards, and player development pathway.",
  path: "/academy",
});

const coachingStandards = [
  {
    title: "Age-based planning",
    description:
      "Training expectations are matched to each stage of player growth.",
    icon: CalendarCheck,
  },
  {
    title: "Coaching discipline",
    description:
      "Players learn punctuality, responsibility, and respect for academy standards.",
    icon: Users,
  },
  {
    title: "Competitive exposure",
    description:
      "Sessions and matches prepare players to perform with confidence.",
    icon: Target,
  },
] as const;

export default function AcademyPage() {
  return (
    <>
      <InnerPageHero
        eyebrow="Academy"
        title="Structured football development for every serious young player."
        description="GCC Chalissery builds players through age-appropriate programs, disciplined coaching, match exposure, and a clear pathway toward competitive football opportunities."
        image={pageImages.hero}
        stats={[
          { label: "Programs", value: "U-10 to U-17" },
          { label: "Training", value: "Structured" },
          { label: "Pathway", value: "AIFF" },
        ]}
      />

      <Section className="relative isolate overflow-hidden bg-brand-strong text-white">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_15%_18%,rgba(248,196,0,0.16),transparent_25rem),radial-gradient(circle_at_90%_72%,rgba(21,174,234,0.14),transparent_30rem)]" />
        <Container>
          <div className="grid gap-9 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
            <SectionHeader
              eyebrow="Academy programs"
              invert
              title="A clear pathway for every stage of young football development."
              description="Each program is designed around the player's age, confidence, technical level, and readiness for competitive football."
            />
            <FadeIn className="lg:justify-self-end">
              <p className="max-w-2xl text-base leading-8 text-blue-50/76">
                From first-touch learning to elite pathway preparation, the
                academy keeps training focused, measurable, and connected to
                player growth.
              </p>
            </FadeIn>
          </div>

          <div className="mt-12 grid gap-5 lg:grid-cols-4 lg:grid-rows-[360px_420px]">
            {academyProgramsShowcase.programs.map((program, index) => {
              const isFeatured = index === 0;
              const isWide = index === 1;
              const isCompact = index >= 2;
              const imagePosition =
                index === 2
                  ? "object-[center_38%]"
                  : index === 3
                    ? "object-[center_34%]"
                    : "object-center";

              return (
                <FadeIn
                  className={[
                    "group relative min-h-[410px] overflow-hidden rounded-[1.15rem] border border-white/10 bg-brand shadow-xl shadow-black/15 transition duration-300 hover:-translate-y-1 hover:border-accent/40 hover:shadow-2xl hover:shadow-black/20",
                    isFeatured ? "lg:col-span-2 lg:row-span-2" : "",
                    isWide ? "lg:col-span-2" : "",
                  ].join(" ")}
                  key={program.title}
                  transition={{ delay: index * 0.06 }}
                  variant="scaleIn"
                >
                  <Image
                    alt={`GCC Chalissery ${program.title}`}
                    className={[
                      "size-full object-cover transition duration-700 group-hover:scale-[1.04]",
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
                        ? "bg-[linear-gradient(180deg,rgba(3,8,63,0.02)_0%,rgba(3,8,63,0.08)_34%,rgba(3,8,63,0.76)_64%,rgba(3,8,63,0.99)_100%)]"
                        : "bg-[linear-gradient(180deg,rgba(3,8,63,0.02)_0%,rgba(3,8,63,0.1)_36%,rgba(3,8,63,0.66)_68%,rgba(3,8,63,0.98)_100%)]",
                    ].join(" ")}
                  />
                  <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-accent via-accent/25 to-transparent" />
                  <div className="absolute left-5 top-5 grid size-14 place-items-center rounded-full border border-white/20 bg-white/12 text-sm font-black text-accent shadow-xl shadow-black/15 backdrop-blur-md">
                    {program.ageGroup}
                  </div>
                  <div
                    className={[
                      "absolute inset-x-0 bottom-0 flex flex-col text-white",
                      isCompact
                        ? "min-h-[62%] p-6 sm:p-7"
                        : "min-h-[55%] justify-end p-6 sm:p-7",
                    ].join(" ")}
                  >
                    <p className="text-xs font-black uppercase tracking-[0.18em] text-accent">
                      Player pathway
                    </p>
                    <h2
                      className={[
                        "mt-3 font-black leading-tight text-white [text-shadow:0_2px_14px_rgba(0,0,0,0.46)]",
                        isFeatured
                          ? "text-4xl sm:text-5xl"
                          : isCompact
                            ? "text-2xl"
                            : "text-3xl",
                      ].join(" ")}
                    >
                      {program.title}
                    </h2>
                    <p
                      className={[
                        "mt-3 max-w-xl text-blue-50/80 [text-shadow:0_2px_12px_rgba(0,0,0,0.38)]",
                        isCompact ? "line-clamp-2 text-sm leading-6" : "text-sm leading-7",
                      ].join(" ")}
                    >
                      {program.description}
                    </p>
                    <div className="mt-4 flex flex-wrap items-center gap-x-3 gap-y-1.5 text-[0.66rem] font-black uppercase tracking-[0.11em] text-blue-50/82">
                      <span className="text-accent">Training</span>
                      <span>
                        {program.training}
                      </span>
                      <span className="h-1 w-1 rounded-full bg-accent/75" />
                      <span className="text-accent">Focus</span>
                      <span>
                        {program.focus}
                      </span>
                    </div>
                    <div className="mt-4 flex flex-wrap gap-1.5">
                      {program.tags.map((tag) => (
                        <span
                          className="border border-white/12 bg-white/[0.07] px-2.5 py-1 text-[0.58rem] font-black uppercase tracking-[0.09em] text-white/82 backdrop-blur transition group-hover:border-accent/30 group-hover:text-white"
                          key={tag}
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                    <Link
                      className="mt-auto inline-flex w-fit items-center gap-2 border-b border-accent/45 pb-1 pt-5 text-sm font-black text-accent transition group-hover:border-accent group-hover:text-white"
                      href="/contact"
                    >
                      Enquire Program
                      <ArrowRight
                        className="size-4 transition group-hover:translate-x-1"
                        aria-hidden="true"
                      />
                    </Link>
                  </div>
                </FadeIn>
              );
            })}
          </div>
        </Container>
      </Section>

      <Section className="bg-brand text-white">
        <Container className="grid gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
          <ImageCard
            alt="GCC Chalissery academy training group"
            className="min-h-[560px]"
            imageClassName="object-[center_36%]"
            sizes="(min-width: 1024px) 52vw, 100vw"
            src={pageImages.training}
          >
            <div className="absolute bottom-0 left-0 right-0 p-7 sm:p-9">
              <p className="text-xs font-black uppercase tracking-[0.18em] text-accent">
                Training philosophy
              </p>
              <h2 className="mt-3 max-w-2xl text-4xl font-black leading-tight text-white">
                Serious development starts with habits, discipline, and clarity.
              </h2>
            </div>
          </ImageCard>
          <div>
            <SectionHeader
              eyebrow="Training standards"
              invert
              title="Development that parents can understand and players can feel."
              description="GCC keeps coaching structured around assessment, development, competition, and long-term player confidence."
            />
            <div className="mt-8 grid gap-4">
              {academyMethod.map((item, index) => (
                <FeatureCard
                  description={item.description}
                  icon={[Target, Dumbbell, ShieldCheck][index]}
                  key={item.title}
                  title={item.title}
                />
              ))}
            </div>
          </div>
        </Container>
      </Section>

      <Section className="bg-brand-strong text-white">
        <Container>
          <SectionHeader
            eyebrow="Development pathway"
            invert
            title="From first trial to professional ambition."
            description="The academy journey is clear, disciplined, and built to help players understand the next step."
          />
          <div className="relative mt-14 grid gap-7 lg:grid-cols-5 lg:gap-0">
            <div className="absolute left-0 top-0 hidden h-px w-full bg-gradient-to-r from-accent via-white/30 to-sky/60 lg:block" />
            {playerPathway.map((step, index) => (
              <FadeIn
                className={[
                  "relative border-l border-white/18 pl-6 lg:border-l-0 lg:border-t lg:border-white/10 lg:pl-0 lg:pt-8",
                  index % 2 === 1 ? "lg:translate-y-12" : "",
                ].join(" ")}
                key={step}
                transition={{ delay: index * 0.06 }}
              >
                <span className="absolute -left-2 top-0 size-4 rounded-full bg-accent shadow-xl shadow-accent/30 lg:-top-2 lg:left-0" />
                <p className="text-sm font-black text-accent">0{index + 1}</p>
                <h2 className="mt-4 max-w-[13rem] text-2xl font-black leading-tight">
                  {step}
                </h2>
              </FadeIn>
            ))}
          </div>
        </Container>
      </Section>

      <Section className="bg-brand text-white">
        <Container>
          <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
            <SectionHeader
              eyebrow="Coaching standards"
              invert
              title="Clear standards for parents, players, and coaches."
              description="The academy environment is designed to make development visible: players understand expectations, parents understand the pathway, and coaches keep the standards consistent."
            />
            <div className="grid gap-5 md:grid-cols-3">
              {coachingStandards.map((item) => (
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

      <CTASection
        actions={
          <>
            <Link className={buttonClassName("primary", "lg")} href="/contact">
              Book Trial Session
              <ArrowRight className="size-4" aria-hidden="true" />
            </Link>
            <Link className={buttonClassName("secondaryDark", "lg")} href="/contact">
              Enquire Programs
              <ArrowRight className="size-4" aria-hidden="true" />
            </Link>
          </>
        }
        description="Connect with GCC Chalissery Football Academy to understand the right program, age group, training expectations, and next trial opportunity."
        eyebrow="Join the pathway"
        image={finalHomeCta.image}
        title={["Start with the right", "football environment."]}
        trustIndicators={["AIFF Affiliated", "Structured Training", "U-14 & U-17", "Community Driven"]}
      />
    </>
  );
}
