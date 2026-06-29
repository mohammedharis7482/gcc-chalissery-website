"use client";

import { useMemo, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";

import { motionEase } from "@/components/motion/variants";
import { Badge } from "@/components/ui/badge";
import { Container } from "@/components/ui/container";

type GalleryMoment = {
  readonly title: string;
  readonly category: string;
  readonly caption: string;
  readonly image: string;
};

type GalleryMomentsSectionProps = {
  moments: {
    eyebrow: string;
    title: string;
    description: string;
    categories: readonly string[];
    featured: GalleryMoment;
    items: readonly GalleryMoment[];
  };
};

export function GalleryMomentsSection({ moments }: GalleryMomentsSectionProps) {
  const [activeCategory, setActiveCategory] = useState("All");

  const visibleItems = useMemo(() => {
    if (activeCategory === "All") {
      return moments.items;
    }

    return moments.items.filter((item) => item.category === activeCategory);
  }, [activeCategory, moments.items]);

  const featuredMoment =
    activeCategory === "All" ? moments.featured : visibleItems[0] ?? moments.featured;

  const masonryItems =
    activeCategory === "All" ? visibleItems : visibleItems.slice(1);

  return (
    <section className="relative isolate overflow-hidden bg-brand-strong py-24 text-white sm:py-32 lg:py-36">
      <div className="absolute inset-0 -z-10 bg-[linear-gradient(135deg,#02062e_0%,#07106f_50%,#03083f_100%),radial-gradient(circle_at_14%_18%,rgba(248,196,0,0.16),transparent_26rem),radial-gradient(circle_at_88%_78%,rgba(21,174,234,0.15),transparent_30rem)]" />
      <p className="pointer-events-none absolute -left-10 top-16 hidden text-[11rem] font-black leading-none text-white/[0.03] lg:block">
        MOMENTS
      </p>

      <Container>
        <div className="grid gap-9 lg:grid-cols-[0.92fr_1.08fr] lg:items-end">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.58, ease: motionEase }}
            viewport={{ once: true, margin: "-80px" }}
          >
            <Badge className="border-white/20 bg-white/10 text-accent">
              {moments.eyebrow}
            </Badge>
            <h2 className="mt-6 max-w-4xl text-balance text-4xl font-black leading-[1.02] text-white sm:text-6xl">
              {moments.title}
            </h2>
          </motion.div>

          <motion.div
            className="lg:justify-self-end"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.58, delay: 0.08, ease: motionEase }}
            viewport={{ once: true, margin: "-80px" }}
          >
            <p className="max-w-2xl text-base leading-8 text-blue-50/76 sm:text-lg">
              {moments.description}
            </p>
            <div
              aria-label="Filter gallery moments"
              className="mt-7 flex flex-wrap gap-2"
            >
              {moments.categories.map((category) => {
                const isActive = category === activeCategory;

                return (
                  <button
                    aria-pressed={isActive}
                    className={[
                      "h-10 border px-4 text-xs font-black uppercase tracking-[0.12em] transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent",
                      isActive
                        ? "border-accent bg-accent text-brand-strong shadow-lg shadow-accent/15"
                        : "border-white/14 bg-white/[0.075] text-blue-50/80 backdrop-blur hover:border-accent/55 hover:text-white",
                    ].join(" ")}
                    key={category}
                    onClick={() => setActiveCategory(category)}
                    type="button"
                  >
                    {category}
                  </button>
                );
              })}
            </div>
          </motion.div>
        </div>

        <div
          className={[
            "mt-12 grid gap-5 lg:items-stretch",
            masonryItems.length > 0 ? "lg:grid-cols-[1.12fr_0.88fr]" : "",
          ].join(" ")}
        >
          <AnimatePresence mode="wait">
            <motion.div
              className="group relative min-h-[360px] overflow-hidden rounded-[1.35rem] border border-white/10 bg-brand shadow-2xl shadow-black/22 sm:min-h-[520px] lg:min-h-[680px]"
              key={featuredMoment.title}
              initial={{ opacity: 0, scale: 0.985, y: 18 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.985, y: -12 }}
              transition={{ duration: 0.42, ease: motionEase }}
            >
              <Image
                alt={`GCC Chalissery ${featuredMoment.title}`}
                className="size-full object-cover object-center transition duration-700 group-hover:scale-[1.035]"
                fill
                sizes="(min-width: 1024px) 56vw, 100vw"
                src={featuredMoment.image}
              />
              <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(3,8,63,0.02)_0%,rgba(3,8,63,0.1)_40%,rgba(3,8,63,0.58)_70%,rgba(3,8,63,0.96)_100%),linear-gradient(90deg,rgba(3,8,63,0.36),transparent_58%)]" />
              <div className="absolute left-5 top-5 border border-white/16 bg-white/12 px-4 py-2 text-xs font-black uppercase tracking-[0.14em] text-white shadow-xl shadow-black/15 backdrop-blur-md sm:left-7 sm:top-7">
                <span className="mr-2 inline-block size-2 rounded-full bg-accent" />
                Featured Moment
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-7 sm:p-9">
                <p className="text-xs font-black uppercase tracking-[0.18em] text-accent">
                  {featuredMoment.category}
                </p>
                <h3 className="mt-3 line-clamp-3 max-w-2xl text-3xl font-black leading-tight text-white sm:text-5xl">
                  {featuredMoment.title}
                </h3>
                <p className="mt-4 max-w-xl text-sm leading-7 text-blue-50/76 sm:text-base">
                  {featuredMoment.caption}
                </p>
              </div>
            </motion.div>
          </AnimatePresence>

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-2">
            <AnimatePresence mode="popLayout">
              {masonryItems.map((item, index) => (
                <motion.article
                  className={[
                    "group relative min-h-[220px] overflow-hidden rounded-[1rem] border border-white/10 bg-white/10 shadow-xl shadow-black/12 sm:min-h-[260px]",
                    index === 0 || index === 5 ? "sm:row-span-2 sm:min-h-[420px]" : "",
                  ].join(" ")}
                  key={`${activeCategory}-${item.title}`}
                  layout
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -12 }}
                  transition={{
                    duration: 0.42,
                    delay: index * 0.035,
                    ease: motionEase,
                  }}
                >
                  <Image
                    alt={`GCC Chalissery ${item.title}`}
                    className="size-full object-cover object-center transition duration-700 group-hover:scale-105"
                    fill
                    sizes="(min-width: 1024px) 22vw, (min-width: 640px) 50vw, 100vw"
                    src={item.image}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-brand-strong/92 via-brand-strong/16 to-transparent" />
                  <div className="absolute inset-x-0 top-0 h-0.5 bg-gradient-to-r from-accent via-accent/30 to-transparent opacity-60 transition group-hover:opacity-100" />
                  <div className="absolute bottom-0 left-0 right-0 p-5 text-white transition duration-300 group-hover:-translate-y-1">
                    <p className="text-[0.68rem] font-black uppercase tracking-[0.16em] text-accent">
                      {item.category}
                    </p>
                    <h3 className="mt-2 text-2xl font-black leading-tight">
                      {item.title}
                    </h3>
                    <p className="mt-3 text-sm leading-6 text-blue-50/74">
                      {item.caption}
                    </p>
                  </div>
                </motion.article>
              ))}
            </AnimatePresence>
          </div>
        </div>

        <motion.div
          className="mt-10 flex justify-start"
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.52, ease: motionEase }}
          viewport={{ once: true, margin: "-80px" }}
        >
          <Link
            className="group inline-flex h-12 items-center justify-center gap-2 border border-white/14 bg-white/[0.075] px-6 text-sm font-black text-white backdrop-blur transition hover:-translate-y-0.5 hover:border-accent hover:bg-accent hover:text-brand-strong focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent"
            href="/gallery"
          >
            View Full Gallery
            <ArrowRight
              className="size-4 transition group-hover:translate-x-1"
              aria-hidden="true"
            />
          </Link>
        </motion.div>
      </Container>
    </section>
  );
}
