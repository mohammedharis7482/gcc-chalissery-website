import Link from "next/link";
import type { Metadata } from "next";
import {
  ArrowRight,
  BadgeCheck,
  Eye,
  HeartHandshake,
  ShieldCheck,
  Target,
} from "lucide-react";

import { FadeIn } from "@/components/motion/fade-in";
import { InnerPageHero } from "@/components/sections/inner-page-hero";
import { Container } from "@/components/ui/container";
import { CTASection } from "@/components/ui/cta-section";
import { FeatureCard } from "@/components/ui/feature-card";
import { ImageCard } from "@/components/ui/image-card";
import { Section } from "@/components/ui/section";
import { SectionHeader } from "@/components/ui/section-header";
import { finalHomeCta, legacyTimeline } from "@/data/home";
import { pageImages } from "@/data/pages";
import { buttonClassName } from "@/lib/design-system";
import { createMetadata } from "@/lib/metadata";

export const metadata: Metadata = createMetadata({
  absoluteTitle: "About GCC Chalissery Football Academy",
  description:
    "Learn the full story of GCC Chalissery Football Academy, from its 1980 community sports roots to AIFF affiliation and youth football development.",
  path: "/about",
});

const storyBeats = [
  {
    label: "Legacy",
    value: "1980",
    text: "A local arts and sports club becomes a trusted football identity.",
  },
  {
    label: "Academy",
    value: "2021",
    text: "Structured youth training begins with a professional development vision.",
  },
  {
    label: "Affiliation",
    value: "2024",
    text: "AIFF affiliation connects GCC to Indian football's pathway.",
  },
] as const;

const aboutPillars = [
  "Community-powered football culture",
  "Disciplined youth development",
  "AIFF affiliated credibility",
  "U-14 and U-17 player pathway",
] as const;

export default function AboutPage() {
  return (
    <>
      <InnerPageHero
        eyebrow="About GCC Chalissery"
        title="From the playgrounds of Chalissery to Indian football's professional stage."
        description="Founded in 1980 as a local arts and sports club, GCC has grown into an AIFF-affiliated football academy powered by community belief, disciplined coaching, and youth development ambition."
        image={pageImages.logoHandover}
        stats={[
          { label: "Founded", value: "1980" },
          { label: "Academy", value: "2021" },
          { label: "AIFF", value: "2024" },
        ]}
      />

      <Section className="relative isolate overflow-hidden bg-brand-strong text-white">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_15%_20%,rgba(248,196,0,0.16),transparent_26rem),radial-gradient(circle_at_88%_70%,rgba(21,174,234,0.14),transparent_30rem)]" />
        <p className="pointer-events-none absolute -left-8 top-10 hidden text-[12rem] font-black leading-none text-white/[0.035] lg:block">
          1980
        </p>
        <Container className="grid gap-12 lg:grid-cols-[0.86fr_1.14fr] lg:items-center">
          <FadeIn>
            <SectionHeader
              eyebrow="The GCC story"
              invert
              title="A football journey shaped by legacy, trust, and community."
              description="GCC's story is not just about an academy. It is about a football-loving place that turned local belief into a structured pathway for young players."
            />
            <div className="mt-8 grid gap-3">
              {storyBeats.map((item, index) => (
                <FadeIn
                  className="group grid gap-4 border-t border-white/12 py-5 transition hover:border-accent/60 sm:grid-cols-[7rem_1fr]"
                  key={item.label}
                  transition={{ delay: index * 0.06 }}
                >
                  <div>
                    <p className="text-xs font-black uppercase tracking-[0.16em] text-accent">
                      {item.label}
                    </p>
                    <p className="mt-2 text-3xl font-black leading-none text-white">
                      {item.value}
                    </p>
                  </div>
                  <p className="max-w-lg text-sm leading-7 text-blue-50/74">
                    {item.text}
                  </p>
                </FadeIn>
              ))}
            </div>
          </FadeIn>

          <div className="grid gap-4 sm:grid-cols-[0.92fr_1.08fr]">
            <ImageCard
              alt="GCC Chalissery football recognition in local media"
              className="min-h-[420px] rounded-[1.15rem]"
              imageClassName="object-top"
              sizes="(min-width: 1024px) 28vw, 100vw"
              src={pageImages.legacyRecognition}
            >
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <p className="text-xs font-black uppercase tracking-[0.18em] text-accent">
                  Community recognition
                </p>
                <h2 className="mt-3 max-w-sm text-2xl font-black leading-tight text-white">
                  Decades of football identity documented and remembered.
                </h2>
              </div>
            </ImageCard>
            <ImageCard
              alt="GCC Chalissery Football Academy community gathering"
              className="min-h-[360px] rounded-[1.15rem] sm:mt-16"
              sizes="(min-width: 1024px) 32vw, 100vw"
              src={pageImages.culture}
            >
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <p className="text-xs font-black uppercase tracking-[0.18em] text-accent">
                  Chalissery spirit
                </p>
                <h2 className="mt-3 max-w-sm text-2xl font-black leading-tight text-white">
                  Parents, players, and supporters moving together.
                </h2>
              </div>
            </ImageCard>
          </div>
        </Container>
      </Section>

      <Section className="bg-brand text-white">
        <Container>
          <div className="grid gap-12 lg:grid-cols-[0.78fr_1.22fr] lg:items-start">
            <SectionHeader
              eyebrow="Milestones"
              invert
              title="Four milestones. One football journey."
              description="The story is simple and powerful: a local sporting identity became a serious academy pathway for young footballers."
            />
            <div className="relative grid gap-5">
              <div className="absolute left-[1.05rem] top-0 h-full w-px bg-gradient-to-b from-accent via-white/25 to-sky/60" />
              {legacyTimeline.map((item, index) => (
                <FadeIn
                  className="relative grid grid-cols-[2.5rem_1fr] gap-5"
                  key={item.year}
                  transition={{ delay: index * 0.06 }}
                >
                  <span className="relative z-10 mt-2 block size-5 rounded-full border-4 border-brand bg-accent shadow-xl shadow-accent/30" />
                  <article className="group relative overflow-hidden rounded-[1rem] border border-white/10 bg-white/[0.075] p-6 shadow-xl shadow-black/10 backdrop-blur-md transition duration-300 hover:-translate-y-1 hover:border-accent/45 hover:bg-white/[0.095] sm:p-7">
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

      <Section className="relative isolate overflow-hidden bg-brand-strong text-white">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_12%_18%,rgba(21,174,234,0.13),transparent_28rem),radial-gradient(circle_at_82%_70%,rgba(248,196,0,0.13),transparent_25rem)]" />
        <Container className="grid gap-12 lg:grid-cols-[1.06fr_0.94fr] lg:items-center">
          <ImageCard
            alt="GCC Chalissery player handshake and academy identity"
            className="min-h-[520px] lg:min-h-[640px]"
            imageClassName="object-[center_36%]"
            sizes="(min-width: 1024px) 52vw, 100vw"
            src={pageImages.handshake}
          >
            <div className="absolute bottom-0 left-0 right-0 p-7 sm:p-9">
              <p className="text-xs font-black uppercase tracking-[0.18em] text-accent">
                Community powered
              </p>
              <h2 className="mt-3 max-w-2xl text-4xl font-black leading-tight text-white">
                GCC stands strong because Chalissery believes in football.
              </h2>
            </div>
          </ImageCard>
          <FadeIn>
            <SectionHeader
              eyebrow="What makes GCC different"
              invert
              title="Built by a football-loving community."
              description="Without the backing of large corporate funds or major sponsorships, GCC is powered by passion, trust, and the collective strength of the local community."
            />
            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              {[
                {
                  title: "Mission",
                  description:
                    "To develop disciplined, confident, and technically strong young footballers through structured training.",
                  icon: Target,
                },
                {
                  title: "Vision",
                  description:
                    "To make Chalissery a respected contributor to the future of Indian football development.",
                  icon: Eye,
                },
              ].map((item) => (
                <FeatureCard
                  description={item.description}
                  icon={item.icon}
                  key={item.title}
                  title={item.title}
                />
              ))}
            </div>
            <div className="mt-4 grid gap-3 sm:grid-cols-2">
              {aboutPillars.map((item, index) => (
                <FadeIn
                  className="border-l-2 border-accent bg-white/[0.055] px-4 py-4 text-sm font-black uppercase tracking-[0.12em] text-blue-50/82 backdrop-blur-md"
                  key={item}
                  transition={{ delay: index * 0.05 }}
                >
                  {item}
                </FadeIn>
              ))}
            </div>
            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              {[
                {
                  title: "AIFF affiliated pathway",
                  description:
                    "Official recognition gives young players a stronger platform connected to structured football development.",
                  icon: BadgeCheck,
                },
                {
                  title: "U-14 and U-17 focus",
                  description:
                    "Age-group development helps players receive the right coaching at the right stage.",
                  icon: Target,
                },
                {
                  title: "Community responsibility",
                  description:
                    "Every player carries a badge connected to families, supporters, and local football pride.",
                  icon: HeartHandshake,
                },
                {
                  title: "Discipline and character",
                  description:
                    "Training develops respect, confidence, leadership, and sportsmanship beyond the pitch.",
                  icon: ShieldCheck,
                },
              ].map((item) => (
                <FeatureCard
                  description={item.description}
                  icon={item.icon}
                  key={item.title}
                  title={item.title}
                />
              ))}
            </div>
          </FadeIn>
        </Container>
      </Section>

      <CTASection
        actions={
          <>
            <Link className={buttonClassName("primary", "lg")} href="/academy">
              Explore Academy
              <ArrowRight className="size-4" aria-hidden="true" />
            </Link>
            <Link className={buttonClassName("secondaryDark", "lg")} href="/contact">
              Contact Club
              <ArrowRight className="size-4" aria-hidden="true" />
            </Link>
          </>
        }
        description="Understand the training pathway, coaching standards, and the next step for young players who want a serious football environment."
        eyebrow="Next step"
        image={finalHomeCta.image}
        title={["Explore the academy", "pathway built by GCC."]}
        trustIndicators={["Since 1980", "AIFF Affiliated", "Community Powered", "U-14 & U-17"]}
      />
    </>
  );
}
