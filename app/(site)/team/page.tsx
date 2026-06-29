import Link from "next/link";
import type { Metadata } from "next";
import { ArrowRight } from "lucide-react";

import { InnerPageHero } from "@/components/sections/inner-page-hero";
import { Container } from "@/components/ui/container";
import { CTASection } from "@/components/ui/cta-section";
import { Section } from "@/components/ui/section";
import { SectionHeader } from "@/components/ui/section-header";
import { TeamCard } from "@/components/ui/team-card";
import { pageImages } from "@/data/pages";
import { buttonClassName } from "@/lib/design-system";
import { createMetadata } from "@/lib/metadata";
import { teamIntro, teamSections } from "@/src/data/team";

export const metadata: Metadata = createMetadata({
  absoluteTitle: "Our Team | GCC Chalissery Football Academy",
  description:
    "Meet the management, technical directors, coordinators, coaches, and support team behind GCC Chalissery Football Academy.",
  path: "/team",
});

const teamSectionStyles = [
  "bg-[linear-gradient(180deg,#061B75_0%,#0b2478_48%,#1230a7_100%)]",
  "bg-[linear-gradient(180deg,#1230a7_0%,#1b55bd_52%,#1d62c4_100%)]",
  "bg-[linear-gradient(180deg,#061B75_0%,#0b2478_48%,#143bb4_100%)]",
  "bg-[linear-gradient(180deg,#143bb4_0%,#1b55bd_48%,#0b2478_100%)]",
  "bg-[linear-gradient(180deg,#1230a7_0%,#1b63c7_54%,#1579c8_100%)]",
] as const;

export default function TeamPage() {
  return (
    <>
      <InnerPageHero
        eyebrow={teamIntro.eyebrow}
        title={teamIntro.title}
        description={teamIntro.description}
        image={teamIntro.image}
        stats={[
          { label: "Management", value: "Club Leadership" },
          { label: "Technical", value: "Licensed Coaches" },
          { label: "Support", value: "Player Care" },
        ]}
      />

      {teamSections.map((section, sectionIndex) => {
        const isTechnical = section.title === "Technical Team";
        const isCoordinators = section.title === "Academy Coordinators";
        const isCompactTeamSection =
          isCoordinators || section.title === "Support Team";
        const gridClassName =
          section.title === "Management Team"
            ? "sm:grid-cols-2 lg:grid-cols-3"
            : isTechnical
              ? "mx-auto max-w-4xl sm:grid-cols-2"
              : section.title === "Academy Coordinators"
                ? "sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5"
                : section.title === "Coaching Staff"
                  ? "sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
                  : "sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5";

        return (
          <Section
            className={[
              "relative isolate overflow-hidden text-white",
              teamSectionStyles[sectionIndex] ?? teamSectionStyles[0],
            ].join(" ")}
            key={section.title}
          >
            <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_14%_18%,rgba(248,196,0,0.13),transparent_25rem),radial-gradient(circle_at_88%_72%,rgba(21,174,234,0.16),transparent_30rem)]" />
            <div className="absolute inset-x-0 top-0 -z-10 h-28 bg-gradient-to-b from-brand-strong/35 to-transparent" />
            <div className="absolute inset-x-0 bottom-0 -z-10 h-28 bg-gradient-to-b from-transparent to-brand-strong/24" />
            <Container>
              <div className="grid gap-8 lg:grid-cols-[0.86fr_1.14fr] lg:items-end">
                <SectionHeader
                  eyebrow={`0${sectionIndex + 1}`}
                  invert
                  title={section.title}
                  description={section.description}
                />
                {isTechnical ? (
                  <div className="hidden rounded-[1.5rem] border border-accent/25 bg-white/[0.08] p-7 shadow-2xl shadow-black/12 backdrop-blur-md lg:block">
                    <p className="text-xs font-black uppercase tracking-[0.18em] text-accent">
                      Technical leadership
                    </p>
                    <p className="mt-3 text-sm leading-7 text-blue-50/74">
                      Technical Directors are highlighted because they define the
                      coaching philosophy, player development methodology, and
                      long-term football standards of the academy.
                    </p>
                  </div>
                ) : isCoordinators ? (
                  <div className="rounded-[1.5rem] border border-white/12 bg-[linear-gradient(145deg,rgba(255,255,255,0.11),rgba(255,255,255,0.055))] p-7 shadow-2xl shadow-black/12 backdrop-blur-md">
                    <p className="text-xs font-black uppercase tracking-[0.18em] text-accent">
                      Academy Operations
                    </p>
                    <p className="mt-3 max-w-xl text-sm leading-7 text-blue-50/76">
                      Coordinators keep the academy rhythm clear for players,
                      parents, coaches, registrations, and daily football
                      activity.
                    </p>
                  </div>
                ) : null}
              </div>
              <div
                className={`mt-12 grid auto-rows-fr gap-5 ${gridClassName}`}
              >
                {section.members.map((member) => (
                  <TeamCard
                    category={section.title}
                    compact={isCompactTeamSection}
                    highlighted={isTechnical}
                    key={`${section.title}-${member.name}`}
                    member={member}
                  />
                ))}
              </div>
            </Container>
          </Section>
        );
      })}

      <CTASection
        actions={
          <>
            <Link className={buttonClassName("primary", "lg")} href="/contact">
              Contact Academy
              <ArrowRight className="size-4" aria-hidden="true" />
            </Link>
            <Link
              className={buttonClassName("secondaryDark", "lg")}
              href="/academy"
            >
              Explore Programs
              <ArrowRight className="size-4" aria-hidden="true" />
            </Link>
          </>
        }
        description="Connect with GCC Chalissery Football Academy to understand training programs, trial sessions, and the player development pathway."
        eyebrow="Join the pathway"
        image={pageImages.training}
        imageAlt="GCC Chalissery academy training pathway"
        className="bg-[linear-gradient(135deg,#0b2478_0%,#143bb4_52%,#1a7fcb_100%)]"
        overlayClassName="bg-[linear-gradient(90deg,rgba(6,18,93,0.94),rgba(13,44,149,0.78)_52%,rgba(20,75,176,0.62)),linear-gradient(180deg,rgba(18,48,167,0.2),rgba(4,12,70,0.7)),radial-gradient(circle_at_82%_18%,rgba(248,196,0,0.18),transparent_25rem)]"
        innerGridClassName="gap-12 lg:grid-cols-[minmax(0,1fr)_minmax(30rem,0.92fr)] lg:items-center xl:gap-16"
        title={[
          "Guided by people",
          "who believe in every",
          "player’s development.",
        ]}
        titleClassName="max-w-[46rem] text-[clamp(2.25rem,9.4vw,3.55rem)] leading-[1.03] sm:text-[clamp(3rem,6.2vw,5.15rem)] sm:leading-[0.99] lg:text-[clamp(3.25rem,4.8vw,5.35rem)]"
        trustCardClassName="min-h-[7.5rem] rounded-[1.25rem] border-white/14 bg-white/[0.09] p-5 shadow-2xl shadow-black/12 sm:min-h-[10.25rem] sm:rounded-[1.5rem] sm:p-8"
        trustGridClassName="auto-rows-fr gap-5 sm:grid-cols-2 lg:w-full lg:max-w-[42rem] lg:self-center lg:justify-self-end"
        trustIndicators={[
          "Since 1980",
          "AIFF Affiliated",
          "U-10 · U-13 · U-15",
          "Community Powered",
        ]}
        trustLabelClassName="text-[0.72rem] tracking-[0.18em]"
        trustValueClassName="mt-4 max-w-[13rem] break-normal text-[1.08rem] leading-[1.28] [hyphens:none] [overflow-wrap:normal] sm:mt-6 sm:text-[1.18rem]"
      />
    </>
  );
}
