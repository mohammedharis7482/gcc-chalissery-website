import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { FadeIn } from "@/components/motion/fade-in";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { SectionHeader } from "@/components/ui/section-header";
import type { GalleryImage } from "@/src/data/gallery";

type GalleryPreviewProps = {
  images: readonly GalleryImage[];
};

export function GalleryPreview({ images }: GalleryPreviewProps) {
  return (
    <Section className="relative isolate overflow-hidden bg-[linear-gradient(180deg,#143bb4_0%,#1b63c7_46%,#dceeff_100%)] text-white">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_12%_22%,rgba(248,196,0,0.14),transparent_25rem),radial-gradient(circle_at_85%_62%,rgba(21,174,234,0.22),transparent_30rem)]" />
      <div className="absolute inset-x-0 top-0 -z-10 h-28 bg-gradient-to-b from-[#143bb4]/65 to-transparent" />
      <div className="absolute inset-x-0 bottom-0 -z-10 h-36 bg-gradient-to-b from-transparent to-[#dceeff]" />
      <Container>
        <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
          <SectionHeader
            eyebrow="Gallery & Moments"
            invert
            title="Real moments from training, matches, tournaments, and community life."
            description="A visual preview of GCC's academy culture, player development, and football identity."
          />
          <FadeIn>
            <Link
              className="group inline-flex h-12 items-center justify-center gap-2 bg-accent px-6 text-sm font-black text-brand-strong shadow-lg shadow-accent/15 transition duration-300 hover:-translate-y-0.5 hover:bg-white"
              href="/gallery"
            >
              View Full Gallery
              <ArrowRight
                className="size-4 transition group-hover:translate-x-1"
                aria-hidden="true"
              />
            </Link>
          </FadeIn>
        </div>

        <div className="mt-12 grid gap-4 md:grid-cols-4 md:grid-rows-[260px_260px]">
          {images.slice(0, 8).map((item, index) => (
            <FadeIn
              className={[
                "group relative min-h-[260px] overflow-hidden rounded-[1.5rem] border border-white/12 bg-brand-strong shadow-2xl shadow-black/14 transition duration-500 hover:-translate-y-1 hover:border-accent/45",
                index === 0 ? "md:col-span-2 md:row-span-2" : "",
                index === 3 ? "md:col-span-2" : "",
              ].join(" ")}
              key={`${item.title}-${item.image}`}
              transition={{ delay: index * 0.04 }}
              variant="scaleIn"
            >
              <Image
                alt={item.title}
                className="size-full object-cover object-center transition duration-700 group-hover:scale-[1.04]"
                fill
                sizes={
                  index === 0
                    ? "(min-width: 768px) 50vw, 100vw"
                    : "(min-width: 768px) 25vw, 100vw"
                }
                src={item.image}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-strong/88 via-brand-strong/10 to-transparent transition duration-500 group-hover:from-brand-strong/94" />
              <div className="absolute bottom-0 left-0 right-0 p-5">
                <p className="text-[0.65rem] font-black uppercase tracking-[0.16em] text-accent">
                  {item.category}
                </p>
                <h3 className="mt-2 text-xl font-black leading-tight text-white">
                  {item.title}
                </h3>
              </div>
            </FadeIn>
          ))}
        </div>
      </Container>
    </Section>
  );
}
