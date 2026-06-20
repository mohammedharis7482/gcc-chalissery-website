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
import { finalHomeCta, galleryMoments } from "@/data/home";
import { pageImages } from "@/data/pages";
import { buttonClassName } from "@/lib/design-system";
import { createMetadata } from "@/lib/metadata";

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
        description="A visual record of GCC Chalissery Football Academy's player development, community energy, team culture, and competitive football moments."
        image={pageImages.galleryHero}
        stats={[
          { label: "Categories", value: "6" },
          { label: "Media", value: "Real GCC" },
          { label: "Focus", value: "Academy life" },
        ]}
      />

      <Section className="bg-brand text-white">
        <Container className="grid gap-12 lg:grid-cols-[1.08fr_0.92fr] lg:items-center">
          <ImageCard
            alt="GCC Chalissery young champions trophy moment"
            className="min-h-[560px]"
            sizes="(min-width: 1024px) 54vw, 100vw"
            src={galleryMoments.featured.image}
          >
            <div className="absolute left-5 top-5 border border-white/16 bg-white/12 px-4 py-2 text-xs font-black uppercase tracking-[0.14em] text-white shadow-xl shadow-black/15 backdrop-blur-md">
              <span className="mr-2 inline-block size-2 rounded-full bg-accent" />
              Featured Moment
            </div>
            <div className="absolute bottom-0 left-0 right-0 p-7 sm:p-9">
              <p className="text-xs font-black uppercase tracking-[0.18em] text-accent">
                {galleryMoments.featured.category}
              </p>
              <h2 className="mt-3 max-w-2xl text-4xl font-black leading-tight text-white">
                {galleryMoments.featured.title}
              </h2>
              <p className="mt-4 max-w-xl text-sm leading-7 text-blue-50/76">
                {galleryMoments.featured.caption}
              </p>
            </div>
          </ImageCard>

          <div>
            <SectionHeader
              eyebrow="Visual storytelling"
              invert
              title="Every image should feel connected to a football journey."
              description="The gallery is structured around training, matches, tournaments, community, and achievements so visitors can feel the culture behind the academy."
            />
            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              {["Training", "Matches", "Tournaments", "Community"].map(
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
        categories={galleryMoments.categories}
        items={galleryMoments.items}
      />

      <Section className="bg-brand text-white">
        <Container className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr] lg:items-stretch">
          <ImageCard
            alt="GCC Chalissery match action spotlight"
            className="min-h-[460px]"
            imageClassName="object-[center_36%]"
            sizes="(min-width: 1024px) 56vw, 100vw"
            src={pageImages.matchAction}
          >
            <div className="absolute bottom-0 left-0 right-0 p-7 sm:p-9">
              <p className="text-xs font-black uppercase tracking-[0.18em] text-accent">
                Match action
              </p>
              <h2 className="mt-3 max-w-2xl text-4xl font-black leading-tight text-white">
                The emotion of development is visible in match moments.
              </h2>
            </div>
          </ImageCard>
          <div className="rounded-[1.15rem] border border-white/10 bg-white/[0.075] p-8 shadow-xl shadow-black/10 backdrop-blur-md lg:p-10">
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
        image={finalHomeCta.image}
        title={["Moments become", "football memories."]}
        trustIndicators={["Training", "Matches", "Tournaments", "Community"]}
      />
    </>
  );
}
