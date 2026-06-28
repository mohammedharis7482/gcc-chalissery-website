import Link from "next/link";
import type { Metadata } from "next";
import { ArrowRight, Camera } from "lucide-react";

import { FadeIn } from "@/components/motion/fade-in";
import { FullGallerySection } from "@/components/sections/full-gallery-section";
import { InnerPageHero } from "@/components/sections/inner-page-hero";
import { Container } from "@/components/ui/container";
import { CTASection } from "@/components/ui/cta-section";
import { ImageCard } from "@/components/ui/image-card";
import { Section } from "@/components/ui/section";
import { SectionHeader } from "@/components/ui/section-header";
import { buttonClassName } from "@/lib/design-system";
import { createMetadata } from "@/lib/metadata";
import { galleryCategories, galleryImages } from "@/src/data/gallery";

export const metadata: Metadata = createMetadata({
  absoluteTitle: "Gallery & Moments | GCC Chalissery",
  description:
    "View real GCC Chalissery Football Academy training, match, tournament, community, and achievement moments.",
  path: "/gallery",
});

export default function GalleryPage() {
  return (
    <>
      <InnerPageHero
        eyebrow="Gallery & Moments"
        title="Training, match days, tournaments, and academy culture."
        description="A visual record of GCC Chalissery Football Academy's player development, community energy, celebrations, events, facilities, and team moments."
        image={galleryImages[0].image}
        stats={[
          { label: "Categories", value: `${galleryCategories.length - 1}` },
          { label: "Media", value: "Real GCC" },
          { label: "Focus", value: "Academy life" },
        ]}
      />

      <Section className="relative isolate overflow-hidden bg-[linear-gradient(180deg,#06146d_0%,#102f9a_56%,#1746bb_100%)] text-white">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_16%_8%,rgba(21,174,234,0.16),transparent_28rem),radial-gradient(circle_at_82%_66%,rgba(248,196,0,0.12),transparent_24rem)]" />
        <div className="absolute inset-x-0 top-0 -z-10 h-28 bg-gradient-to-b from-[#03083f]/80 to-transparent" />
        <Container className="grid gap-12 lg:grid-cols-[1.08fr_0.92fr] lg:items-center">
          <ImageCard
            alt="GCC Chalissery featured gallery moment"
            className="min-h-[560px]"
            imageClassName="object-[center_42%]"
            sizes="(min-width: 1024px) 54vw, 100vw"
            src={galleryImages[0].image}
          >
            <div className="absolute left-5 top-5 border border-white/16 bg-white/12 px-4 py-2 text-xs font-black uppercase tracking-[0.14em] text-white shadow-xl shadow-black/15 backdrop-blur-md">
              <span className="mr-2 inline-block size-2 rounded-full bg-accent" />
              Featured Moment
            </div>
            <div className="absolute bottom-0 left-0 right-0 p-7 sm:p-9">
              <p className="text-xs font-black uppercase tracking-[0.18em] text-accent">
                {galleryImages[0].category}
              </p>
              <h2 className="mt-3 max-w-2xl text-4xl font-black leading-tight text-white">
                {galleryImages[0].title}
              </h2>
            </div>
          </ImageCard>

          <div>
            <SectionHeader
              eyebrow="Visual storytelling"
              invert
              title="Every image should feel connected to a football journey."
              description="The gallery is structured around training, match days, tournament moments, celebrations, events, community activities, facilities, and team photos."
            />
            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              {[
                "Training Sessions",
                "Match Days",
                "Tournament Moments",
                "Team Photos",
              ].map(
                (item, index) => (
                  <FadeIn
                    className="group rounded-[1rem] border border-white/10 bg-white/[0.075] p-5 shadow-xl shadow-black/10 backdrop-blur-md transition duration-300 hover:-translate-y-1 hover:border-accent/45 hover:bg-white/[0.1]"
                    key={item}
                    transition={{ delay: index * 0.05 }}
                  >
                    <Camera
                      className="size-7 text-accent transition group-hover:scale-110"
                      aria-hidden="true"
                    />
                    <p className="mt-5 text-xs font-black uppercase tracking-[0.16em] text-accent">
                      0{index + 1}
                    </p>
                    <h2 className="mt-2 text-xl font-black text-white">
                      {item}
                    </h2>
                  </FadeIn>
                ),
              )}
            </div>
          </div>
        </Container>
      </Section>

      <FullGallerySection
        categories={galleryCategories}
        items={galleryImages.map((item) => ({
          title: item.title,
          category: item.category,
          featured: item.featured,
          image: item.image,
        }))}
      />

      <Section className="relative isolate overflow-hidden bg-[linear-gradient(180deg,#0d2478_0%,#1230a7_48%,#1746bb_100%)] text-white">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_18%_32%,rgba(21,174,234,0.18),transparent_30rem),radial-gradient(circle_at_84%_72%,rgba(248,196,0,0.12),transparent_24rem)]" />
        <Container className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr] lg:items-stretch">
          <ImageCard
            alt="GCC Chalissery match action spotlight"
            className="min-h-[460px]"
            imageClassName="object-[center_38%]"
            sizes="(min-width: 1024px) 56vw, 100vw"
            src={galleryImages.find((item) => item.category === "Match Days")?.image ?? galleryImages[0].image}
          >
            <div className="absolute bottom-0 left-0 right-0 p-7 sm:p-9">
              <p className="text-xs font-black uppercase tracking-[0.18em] text-accent">
                Visual archive
              </p>
              <h2 className="mt-3 max-w-2xl text-4xl font-black leading-tight text-white">
                Real moments that show how the academy lives football.
              </h2>
            </div>
          </ImageCard>
          <div className="rounded-[1.35rem] border border-white/12 bg-white/[0.085] p-8 shadow-xl shadow-black/12 backdrop-blur-md lg:p-10">
            <p className="text-sm font-black uppercase tracking-[0.16em] text-accent">
              Visual archive
            </p>
            <h2 className="mt-4 text-4xl font-black leading-tight">
              Real images that help parents understand the academy culture.
            </h2>
            <p className="mt-5 text-sm leading-7 text-blue-50/75">
              The gallery keeps the focus on training discipline, tournament
              pride, team identity, and the community energy around GCC
              Chalissery.
            </p>
          </div>
        </Container>
      </Section>

      <CTASection
        actions={
          <>
            <Link className={buttonClassName("primary", "lg")} href="/contact">
              Share Media
              <ArrowRight className="size-4" aria-hidden="true" />
            </Link>
            <Link className={buttonClassName("secondaryDark", "lg")} href="/academy">
              Explore Academy
              <ArrowRight className="size-4" aria-hidden="true" />
            </Link>
          </>
        }
        description="Want to know more about training sessions, tournaments, and player development? Connect with the academy team."
        eyebrow="Connect"
        image={galleryImages.find((item) => item.category === "Team Celebrations")?.image ?? galleryImages[0].image}
        className="bg-[linear-gradient(135deg,#0b2478_0%,#143bb4_54%,#1a7fcb_100%)]"
        overlayClassName="bg-[linear-gradient(90deg,rgba(6,20,109,0.94),rgba(15,54,170,0.78)_52%,rgba(18,92,185,0.48)),linear-gradient(180deg,rgba(6,20,109,0.2),rgba(3,8,63,0.88)),radial-gradient(circle_at_78%_22%,rgba(248,196,0,0.22),transparent_26rem)]"
        trustCardClassName="min-h-[118px] rounded-[1.15rem] border-white/14 bg-white/[0.105] px-6 py-6 shadow-xl shadow-black/12"
        trustGridClassName="gap-4 sm:grid-cols-2"
        trustLabelClassName="text-accent"
        trustValueClassName="text-[clamp(1.2rem,2.2vw,1.65rem)] leading-tight"
        title={["Moments become", "football memories."]}
        trustIndicators={["Training", "Matches", "Events", "Team Photos"]}
      />
    </>
  );
}
