import Link from "next/link";
import type { Metadata } from "next";
import {
  ArrowRight,
  BookOpen,
  Building2,
  Eye,
  HeartHandshake,
  Route,
  ShieldCheck,
  Sparkles,
  Target,
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
import { StatCard } from "@/components/ui/stat-card";
import { buttonClassName } from "@/lib/design-system";
import { createMetadata } from "@/lib/metadata";
import { aboutContent } from "@/src/data/site";

export const metadata: Metadata = createMetadata({
  absoluteTitle: "About GCC Chalissery Football Academy",
  description:
    "Learn the full story of GCC Chalissery Football Academy, from its 1980 community sports roots to AIFF affiliation and youth football development.",
  path: "/about",
});

const aboutImages = {
  hero: "/images/logo-handover-wide.jpg",
  story: "/images/academy-group-event.jpg",
  identity: "/images/logo-handover-close.jpg",
  recognition: "/images/newspaper-recognition.jpg",
  pathway: "/academy-content/achievements/u-17-runnerup-jpg.jpeg",
  legacyTeam: "/academy-content/media/WhatsApp Image 2026-06-23 at 12.33.50 PM.jpeg",
  cta: "/images/young-champions-trophy.jpg",
} as const;

const missionIcons = [HeartHandshake, Target, Users, Route] as const;
const objectiveIcons = [Building2, Sparkles, ShieldCheck, Trophy, BookOpen] as const;

export default function AboutPage() {
  return (
    <>
      <InnerPageHero
        eyebrow="About GCC Chalissery"
        title="From Chalissery's playground to the professional stage of Indian football."
        description={aboutContent.intro}
        image={aboutImages.hero}
        stats={[
          { label: "Founded", value: "1980" },
          { label: "Academy", value: "2021" },
          { label: "AIFF", value: "2024" },
        ]}
      />

      <OurStory />
      <AcademyTimeline />
      <VisionSection />
      <MissionSection />
      <ObjectivesSection />
      <KeyHighlights />
      <FinalCta />
    </>
  );
}

function OurStory() {
  return (
    <Section className="relative isolate overflow-hidden bg-[linear-gradient(180deg,#061B75_0%,#0b2478_45%,#1230a7_100%)] text-white">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_15%_20%,rgba(248,196,0,0.16),transparent_26rem),radial-gradient(circle_at_88%_70%,rgba(21,174,234,0.16),transparent_30rem)]" />
      <div className="absolute inset-x-0 top-0 -z-10 h-32 bg-gradient-to-b from-brand-strong/50 to-transparent" />
      <div className="absolute inset-x-0 bottom-0 -z-10 h-32 bg-gradient-to-b from-transparent to-[#1230a7]/62" />
      <p className="pointer-events-none absolute -left-8 top-10 hidden text-[12rem] font-black leading-none text-white/[0.035] lg:block">
        1980
      </p>
      <Container className="grid gap-12 lg:grid-cols-[0.92fr_1.08fr] lg:items-start">
        <FadeIn>
          <SectionHeader
            eyebrow="Our Story"
            invert
            title="A community football identity shaped into a professional academy."
            description="The GCC story is a progression from local football passion to structured youth development, AIFF affiliation, and a pathway for young players."
          />
          <div className="mt-8 space-y-5 text-base leading-8 text-blue-50/76">
            {aboutContent.story.slice(0, 3).map((paragraph) => (
              <p className="max-w-2xl" key={paragraph}>
                {paragraph}
              </p>
            ))}
          </div>
        </FadeIn>

        <div className="grid gap-4 sm:grid-cols-[1.05fr_0.95fr]">
          <ImageCard
            alt="GCC Chalissery community academy gathering"
            className="min-h-[360px] rounded-[1.5rem] shadow-2xl shadow-black/20 sm:row-span-2 lg:min-h-[520px]"
            imageClassName="object-[center_42%]"
            sizes="(min-width: 1024px) 30vw, 100vw"
            src={aboutImages.story}
          >
            <div className="absolute bottom-0 left-0 right-0 p-6">
              <p className="text-xs font-black uppercase tracking-[0.18em] text-accent">
                Community roots
              </p>
              <h2 className="mt-3 max-w-sm text-3xl font-black leading-tight text-white">
                Football tradition carried by Chalissery families.
              </h2>
            </div>
          </ImageCard>

          <div className="grid gap-4">
            <ImageCard
              alt="GCC Chalissery academy identity handover"
              className="min-h-[190px] rounded-[1.5rem] shadow-2xl shadow-black/16 lg:min-h-[248px]"
              imageClassName="object-center"
              sizes="(min-width: 1024px) 28vw, 100vw"
              src={aboutImages.identity}
            >
              <div className="absolute bottom-0 left-0 right-0 p-5">
                <p className="text-xs font-black uppercase tracking-[0.18em] text-accent">
                  Academy identity
                </p>
                <h3 className="mt-2 max-w-xs text-xl font-black leading-tight text-white">
                  A proud badge for the next generation.
                </h3>
              </div>
            </ImageCard>
            <ImageCard
              alt="GCC Chalissery recognition in local media"
              className="min-h-[190px] rounded-[1.5rem] shadow-2xl shadow-black/16 lg:min-h-[248px]"
              imageClassName="object-[center_20%]"
              sizes="(min-width: 1024px) 28vw, 100vw"
              src={aboutImages.recognition}
            >
              <div className="absolute bottom-0 left-0 right-0 p-5">
                <p className="text-xs font-black uppercase tracking-[0.18em] text-accent">
                  Recognition
                </p>
                <h3 className="mt-2 max-w-xs text-xl font-black leading-tight text-white">
                  GCC&apos;s journey recognised through football.
                </h3>
              </div>
            </ImageCard>
          </div>
          <ImageCard
            alt="GCC Chalissery senior team legacy photo"
            className="min-h-[250px] rounded-[1.5rem] shadow-2xl shadow-black/16 sm:col-span-2 lg:min-h-[300px]"
            imageClassName="object-[center_36%]"
            sizes="(min-width: 1024px) 58vw, 100vw"
            src={aboutImages.legacyTeam}
          >
            <div className="absolute bottom-0 left-0 right-0 p-5 sm:p-6">
              <p className="text-xs font-black uppercase tracking-[0.18em] text-accent">
                Community legacy
              </p>
              <h3 className="mt-2 max-w-lg text-2xl font-black leading-tight text-white">
                Generations of football culture carried forward.
              </h3>
            </div>
          </ImageCard>
        </div>
      </Container>
    </Section>
  );
}

function AcademyTimeline() {
  const milestones = aboutContent.milestones.slice(0, 3);

  return (
    <Section className="relative isolate overflow-hidden bg-[linear-gradient(135deg,#0a1978_0%,#1230a7_55%,#1579c8_100%)] text-white">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_12%_20%,rgba(248,196,0,0.14),transparent_24rem),radial-gradient(circle_at_86%_72%,rgba(21,174,234,0.16),transparent_30rem)]" />
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/25 to-transparent" />
      <div className="absolute inset-x-0 bottom-0 -z-10 h-32 bg-gradient-to-b from-transparent to-brand-strong/65" />
      <Container>
        <div className="grid gap-12 lg:grid-cols-[0.78fr_1.22fr] lg:items-start">
          <SectionHeader
            eyebrow="Academy Timeline"
            invert
            title="1980 to 2024: three defining steps in GCC's journey."
            description="The academy's timeline is simple, credible, and powerful: community roots, professional formation, and AIFF affiliation."
          />

          <div className="relative grid gap-5 lg:grid-cols-3">
            <div className="absolute left-[1.05rem] top-0 h-full w-px bg-gradient-to-b from-accent via-white/25 to-sky/60 lg:left-0 lg:top-8 lg:h-px lg:w-full" />
            {milestones.map((item, index) => (
              <FadeIn
                className="relative grid h-full grid-cols-[2.5rem_1fr] gap-5 lg:grid-cols-1 lg:gap-0 lg:pl-0"
                key={item.year}
                transition={{ delay: index * 0.07 }}
              >
                <span className="relative z-10 mt-2 block size-5 rounded-full border-4 border-[#1230a7] bg-accent shadow-xl shadow-accent/30 lg:mt-0" />
                <article className="group relative h-full overflow-hidden rounded-[1.5rem] border border-white/12 bg-white/[0.08] p-6 shadow-2xl shadow-black/12 backdrop-blur-md transition duration-500 hover:-translate-y-1 hover:border-accent/50 hover:bg-white/[0.11] sm:p-7 lg:mt-8 lg:min-h-[19rem]">
                  <span className="pointer-events-none absolute right-5 top-4 text-6xl font-black leading-none text-white/[0.035]">
                    {item.year}
                  </span>
                  <p className="text-sm font-black uppercase tracking-[0.18em] text-accent">
                    {item.year}
                  </p>
                  <h2 className="relative mt-4 max-w-2xl text-2xl font-black leading-tight text-white">
                    {item.title}
                  </h2>
                  <p className="relative mt-3 max-w-2xl text-sm leading-7 text-blue-50/74">
                    {item.description}
                  </p>
                </article>
              </FadeIn>
            ))}
          </div>
        </div>
      </Container>
    </Section>
  );
}

function VisionSection() {
  return (
    <Section className="relative isolate overflow-hidden bg-[linear-gradient(180deg,#061B75_0%,#0b2478_54%,#1230a7_100%)] text-white">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_12%_18%,rgba(21,174,234,0.14),transparent_28rem),radial-gradient(circle_at_82%_70%,rgba(248,196,0,0.13),transparent_25rem)]" />
      <div className="absolute inset-x-0 bottom-0 -z-10 h-32 bg-gradient-to-b from-transparent to-[#0a1978]/80" />
      <Container className="grid gap-12 lg:grid-cols-[1.02fr_0.98fr] lg:items-center">
        <ImageCard
          alt="GCC Chalissery community powered football identity"
          className="min-h-[460px] rounded-[1.5rem] shadow-2xl shadow-black/22 lg:min-h-[560px]"
          imageClassName="object-[center_34%]"
          sizes="(min-width: 1024px) 50vw, 100vw"
          src={aboutImages.pathway}
        >
          <div className="absolute bottom-0 left-0 right-0 p-7 sm:p-9">
            <p className="text-xs font-black uppercase tracking-[0.18em] text-accent">
              Vision
            </p>
            <h2 className="mt-3 max-w-2xl text-4xl font-black leading-tight text-white">
              A model academy from the grassroots of Chalissery.
            </h2>
          </div>
        </ImageCard>

        <FadeIn>
          <div className="rounded-[1.5rem] border border-white/12 bg-white/[0.08] p-7 shadow-2xl shadow-black/14 backdrop-blur-md transition duration-500 hover:border-accent/45 sm:p-9">
            <Eye className="size-10 text-accent" aria-hidden="true" />
            <p className="mt-7 text-sm font-black uppercase tracking-[0.18em] text-accent">
              Official Vision
            </p>
            <h2 className="mt-4 text-balance text-4xl font-black leading-[1.04] text-white sm:text-5xl">
              Building a clear pathway into Indian professional football.
            </h2>
            <p className="mt-6 text-base leading-8 text-blue-50/78 sm:text-lg">
              {aboutContent.vision}
            </p>
          </div>
        </FadeIn>
      </Container>
    </Section>
  );
}

function MissionSection() {
  return (
    <Section className="relative isolate overflow-hidden bg-[linear-gradient(135deg,#1230a7_0%,#1d62c4_56%,#1579c8_100%)] text-white">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_15%_18%,rgba(248,196,0,0.16),transparent_26rem),radial-gradient(circle_at_90%_76%,rgba(21,174,234,0.2),transparent_30rem)]" />
      <div className="absolute inset-x-0 top-0 -z-10 h-32 bg-gradient-to-b from-[#1230a7]/45 to-transparent" />
      <div className="absolute inset-x-0 bottom-0 -z-10 h-32 bg-gradient-to-b from-transparent to-[#061B75]/50" />
      <Container>
        <SectionHeader
          eyebrow="Mission"
          invert
          title="The operating beliefs behind GCC Football Academy."
          description="The mission connects professional training, community participation, social responsibility, and a serious football pathway."
        />
        <div className="mt-12 grid gap-5 md:grid-cols-2">
          {aboutContent.mission.map((item, index) => (
            <FeatureCard
              className="min-h-[15rem] rounded-[1.5rem] p-6 sm:p-7"
              description={item.description}
              icon={missionIcons[index]}
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

function ObjectivesSection() {
  const objectiveCards = aboutContent.objectives.slice(0, 4);
  const featuredObjective = aboutContent.objectives[4];

  return (
    <Section className="relative isolate overflow-hidden bg-[linear-gradient(180deg,#061B75_0%,#0b2478_52%,#1230a7_100%)] text-white">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_18%_18%,rgba(248,196,0,0.14),transparent_25rem),radial-gradient(circle_at_86%_80%,rgba(21,174,234,0.13),transparent_28rem)]" />
      <div className="absolute inset-x-0 bottom-0 -z-10 h-32 bg-gradient-to-b from-transparent to-[#1230a7]/52" />
      <Container>
        <div className="grid gap-12 lg:grid-cols-[0.76fr_1.24fr] lg:items-start">
          <SectionHeader
            eyebrow="Objectives"
            invert
            title="Clear priorities for long-term football development."
            description="GCC's objectives keep the academy focused on planning, talent identification, infrastructure, exposure, and complete player growth."
          />
          <div className="grid gap-5">
            <div className="grid gap-5 md:grid-cols-2">
              {objectiveCards.map((item, index) => (
                <FeatureCard
                  className="min-h-[15rem] rounded-[1.5rem] p-6 sm:p-7"
                  description={item.description}
                  icon={objectiveIcons[index]}
                  key={item.title}
                  revealDelay={index * 0.06}
                  title={item.title}
                />
              ))}
            </div>
            {featuredObjective ? (
              <FeatureCard
                className="mx-auto min-h-[14rem] w-full rounded-[1.5rem] p-7 sm:p-8 md:w-[78%]"
                description={featuredObjective.description}
                icon={objectiveIcons[4]}
                key={featuredObjective.title}
                revealDelay={0.28}
                title={featuredObjective.title}
              />
            ) : null}
          </div>
        </div>
      </Container>
    </Section>
  );
}

function KeyHighlights() {
  return (
    <Section className="relative isolate overflow-hidden bg-[linear-gradient(135deg,#1230a7_0%,#1b55bd_52%,#1579c8_100%)] text-white">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_12%_22%,rgba(248,196,0,0.14),transparent_25rem),radial-gradient(circle_at_86%_72%,rgba(21,174,234,0.16),transparent_30rem)]" />
      <div className="absolute inset-x-0 bottom-0 -z-10 h-32 bg-gradient-to-b from-transparent to-[#0b2478]/70" />
      <Container>
        <div className="grid gap-10 lg:grid-cols-[0.82fr_1.18fr] lg:items-start">
          <SectionHeader
            eyebrow="Key Highlights"
            invert
            title="The proof points parents and players need to understand GCC."
            description="The academy's strength comes from heritage, affiliation, community support, structured development, and education-first thinking."
          />
          <div className="grid gap-4 sm:grid-cols-2">
            {aboutContent.highlights.map((item, index) => (
              <StatCard
                className="min-h-[10rem] rounded-[1.5rem] p-6"
                index={index}
                key={item}
                labelClassName="text-[0.7rem] tracking-[0.18em]"
                revealDelay={index * 0.05}
                value={item}
                valueClassName="mt-5 text-base leading-7 sm:text-lg"
              />
            ))}
          </div>
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
          Contact GCC Academy
          <ArrowRight className="size-4" aria-hidden="true" />
        </Link>
      }
      description="Speak with GCC Chalissery Football Academy about programs, trial sessions, training expectations, and the right next step for a young footballer."
      eyebrow="Next step"
      image={aboutImages.cta}
      imageAlt="GCC Chalissery young players celebrating a trophy moment"
      className="bg-[linear-gradient(135deg,#0b2478_0%,#143bb4_54%,#1d8bd3_100%)]"
      innerGridClassName="gap-12 lg:grid-cols-[minmax(0,1fr)_minmax(30rem,0.95fr)] lg:items-center xl:gap-16"
      overlayClassName="bg-[linear-gradient(90deg,rgba(8,30,118,0.92),rgba(20,59,180,0.76)_48%,rgba(29,139,211,0.54)),linear-gradient(180deg,rgba(8,30,118,0.18),rgba(8,30,118,0.72)),radial-gradient(circle_at_78%_18%,rgba(248,196,0,0.24),transparent_25rem),radial-gradient(circle_at_18%_78%,rgba(21,174,234,0.24),transparent_30rem)]"
      title={["Start the conversation", "with GCC."]}
      trustCardClassName="min-h-[10.25rem] rounded-[1.5rem] border-white/14 bg-white/[0.09] p-7 shadow-2xl shadow-black/12 sm:p-8"
      trustGridClassName="auto-rows-fr gap-5 sm:grid-cols-2 lg:w-full lg:max-w-[42rem] lg:self-center lg:justify-self-end"
      trustLabelClassName="text-[0.72rem] tracking-[0.18em]"
      trustValueClassName="mt-6 max-w-[13rem] break-normal text-[1.08rem] leading-[1.28] [hyphens:none] [overflow-wrap:normal] sm:text-[1.18rem]"
      trustIndicators={[
        "Since 1980",
        "Academy Established 2021",
        "AIFF Affiliated 2024",
        "Community Powered",
      ]}
    />
  );
}
