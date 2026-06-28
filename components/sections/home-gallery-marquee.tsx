import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { FadeIn } from "@/components/motion/fade-in";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { SectionHeader } from "@/components/ui/section-header";
import { buttonClassName } from "@/lib/design-system";
import type { GalleryImage } from "@/src/data/gallery";

type HomeGalleryMarqueeProps = {
  images: readonly GalleryImage[];
};

export function HomeGalleryMarquee({ images }: HomeGalleryMarqueeProps) {
  return (
    <Section className="relative isolate overflow-hidden bg-[linear-gradient(180deg,#eef6ff_0%,#f6fbff_50%,#dcedff_100%)] text-neutral-950">
      <div className="absolute inset-x-0 top-0 -z-10 h-28 bg-gradient-to-b from-[#eef6ff] to-transparent" />
      <div className="absolute inset-x-0 bottom-0 -z-10 h-32 bg-gradient-to-b from-transparent to-[#0b2478]/18" />
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_10%_18%,rgba(21,174,234,0.11),transparent_25rem),radial-gradient(circle_at_88%_70%,rgba(248,196,0,0.10),transparent_28rem)]" />
      <Container>
        <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
          <SectionHeader
            eyebrow="Gallery Preview"
            title="Real academy moments, side-scrolled like a matchday reel."
            description="Training sessions, match days, tournaments, community events, and team moments from GCC Chalissery Football Academy."
          />
          <FadeIn>
            <Link className={buttonClassName("secondaryLight", "lg")} href="/gallery">
              View Gallery
              <ArrowRight className="size-4" aria-hidden="true" />
            </Link>
          </FadeIn>
        </div>
      </Container>

      <div className="relative mt-12 overflow-hidden px-4 sm:px-6 lg:px-8">
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-14 bg-gradient-to-r from-[#eef6ff] to-transparent sm:w-24" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-14 bg-gradient-to-l from-[#dcedff] to-transparent sm:w-24" />
        <div
          className="home-gallery-marquee"
        >
          {[0, 1].map((group) => (
            <div className="flex shrink-0 gap-4 pr-4 sm:gap-6 sm:pr-6" key={group}>
              {images.map((item) => (
                <article
                  className="group relative h-[320px] w-[78vw] max-w-[440px] shrink-0 overflow-hidden rounded-[1.5rem] border border-white/55 bg-white shadow-2xl shadow-brand/8 ring-1 ring-brand/5 transition duration-500 hover:-translate-y-1 hover:border-accent/65 hover:shadow-2xl hover:shadow-brand/14 sm:h-[360px] sm:w-[420px] lg:w-[460px]"
                  key={`${item.title}-${item.image}-${group}`}
                >
                  <Image
                    alt={item.title}
                    className="size-full object-cover object-center transition duration-700 ease-out group-hover:scale-[1.04]"
                    fill
                    sizes="(min-width: 1024px) 460px, (min-width: 640px) 420px, 78vw"
                    src={item.image}
                  />
                  <div className="absolute inset-x-0 bottom-0 h-[58%] bg-gradient-to-t from-brand-strong/76 via-brand-strong/24 to-transparent transition duration-500 group-hover:from-brand-strong/82" />
                  <div className="absolute bottom-0 left-0 right-0 p-5 sm:p-6">
                    <p className="text-xs font-black uppercase tracking-[0.18em] text-accent">
                      {item.category}
                    </p>
                    <h3 className="mt-2 max-w-sm text-2xl font-black leading-tight text-white">
                      {item.title}
                    </h3>
                  </div>
                </article>
              ))}
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}
