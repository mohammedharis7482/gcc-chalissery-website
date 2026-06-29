"use client";

import { useMemo, useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { X } from "lucide-react";

import { Container } from "@/components/ui/container";
import { SectionHeader } from "@/components/ui/section-header";
import { motionEase } from "@/components/motion/variants";

type GalleryItem = {
  readonly caption?: string;
  readonly category: string;
  readonly featured?: boolean;
  readonly image: string;
  readonly title: string;
};

type FullGallerySectionProps = {
  categories: readonly string[];
  items: readonly GalleryItem[];
};

export function FullGallerySection({
  categories,
  items,
}: FullGallerySectionProps) {
  const [activeCategory, setActiveCategory] = useState("All");
  const [selectedItem, setSelectedItem] = useState<GalleryItem | null>(null);
  const prefersReducedMotion = useReducedMotion();

  const visibleItems = useMemo(() => {
    if (activeCategory === "All") {
      return items;
    }

    return items.filter((item) => item.category === activeCategory);
  }, [activeCategory, items]);

  const featuredItems = useMemo(() => {
    if (activeCategory === "All") {
      const selected = items.filter((item) => item.featured).slice(0, 3);

      return selected.length > 0 ? selected : visibleItems.slice(0, 3);
    }

    return visibleItems.slice(0, 3);
  }, [activeCategory, items, visibleItems]);

  const gridItems = useMemo(() => {
    const featuredSet = new Set(featuredItems.map((item) => item.image));

    return visibleItems.filter((item) => !featuredSet.has(item.image));
  }, [featuredItems, visibleItems]);

  const getImagePosition = (item: GalleryItem) => {
    if (item.category === "Registration & Events") {
      return "object-[center_42%]";
    }

    if (
      item.category === "Community Activities" ||
      item.category === "Team Celebrations"
    ) {
      return "object-[center_38%]";
    }

    if (item.category === "Team Photos") {
      return "object-[center_34%]";
    }

    return "object-center";
  };

  const getAspectClass = (item: GalleryItem, index: number) => {
    if (
      item.category === "Team Photos" ||
      item.category === "Community Activities" ||
      item.category === "Tournament Moments"
    ) {
      return "aspect-[4/3]";
    }

    if (item.category === "Training Sessions") {
      return index % 3 === 0 ? "aspect-[4/5]" : "aspect-[5/6]";
    }

    if (item.category === "Registration & Events") {
      return "aspect-[4/3]";
    }

    return index % 4 === 0 ? "aspect-[3/4]" : "aspect-[4/5]";
  };

  const getItemKey = (item: GalleryItem, index: number, scope: string) =>
    `${scope}-${item.category}-${item.title}-${item.image}-${index}`;

  return (
    <section className="relative isolate overflow-hidden bg-[#102f9a] py-24 text-white sm:py-32 lg:py-36">
      <div className="absolute inset-0 -z-10 bg-[linear-gradient(180deg,#102f9a_0%,#1847b9_42%,#0d2c90_100%),radial-gradient(circle_at_14%_18%,rgba(248,196,0,0.16),transparent_26rem),radial-gradient(circle_at_88%_74%,rgba(21,174,234,0.18),transparent_30rem)]" />
      <div className="absolute inset-x-0 top-0 -z-10 h-32 bg-gradient-to-b from-[#1746bb] to-transparent" />
      <div className="absolute inset-x-0 bottom-0 -z-10 h-32 bg-gradient-to-t from-[#0d2478] to-transparent" />
      <Container>
        <div className="grid gap-9 lg:grid-cols-[0.92fr_1.08fr] lg:items-end">
          <SectionHeader
            eyebrow="Full gallery"
            invert
            title="Academy culture, training, match days, and community moments."
            description="Filter through real GCC images from training sessions, matches, tournaments, celebrations, registrations, community activities, facilities, and team photos."
          />
          <div className="lg:justify-self-end">
            <div
              aria-label="Filter gallery"
              className="flex flex-wrap gap-2"
            >
              {categories.map((category) => {
                const isActive = category === activeCategory;

                return (
                  <button
                    aria-pressed={isActive}
                    className={[
                      "relative h-10 overflow-hidden border px-4 text-xs font-black uppercase tracking-[0.12em] transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent",
                      isActive
                        ? "border-accent text-brand-strong shadow-lg shadow-accent/15"
                        : "border-white/14 bg-white/[0.075] text-blue-50/80 backdrop-blur hover:border-accent/55 hover:text-white",
                    ].join(" ")}
                    key={category}
                    onClick={() => setActiveCategory(category)}
                    type="button"
                  >
                    {isActive ? (
                      <motion.span
                        className="absolute inset-0 bg-accent"
                        layoutId="gallery-active-category"
                        transition={{
                          duration: prefersReducedMotion ? 0 : 0.34,
                          ease: motionEase,
                        }}
                      />
                    ) : null}
                    <span className="relative z-10">{category}</span>
                  </button>
                );
              })}
            </div>
            <p className="mt-4 text-xs font-black uppercase tracking-[0.14em] text-blue-50/55">
              Showing {visibleItems.length} {visibleItems.length === 1 ? "moment" : "moments"}
            </p>
          </div>
        </div>

        {featuredItems.length > 0 ? (
          <motion.div
            className="mt-12 grid gap-5 lg:grid-cols-[1.28fr_0.72fr]"
            layout
          >
            {featuredItems.map((item, index) => (
              <motion.button
                aria-label={`Open featured moment ${item.title}`}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                className={[
                  "group relative min-h-[300px] overflow-hidden rounded-[1.45rem] border border-white/14 bg-white/10 text-left shadow-2xl shadow-black/18 transition duration-500 hover:-translate-y-1 hover:border-accent/50 hover:shadow-black/28 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent",
                  index === 0
                    ? "lg:row-span-2 lg:min-h-[640px]"
                    : "lg:min-h-[308px]",
                ].join(" ")}
                initial={
                  prefersReducedMotion
                    ? { opacity: 1 }
                    : { opacity: 0, scale: 0.98, y: 24 }
                }
                key={getItemKey(item, index, `featured-${activeCategory}`)}
                onClick={() => setSelectedItem(item)}
                transition={{
                  duration: prefersReducedMotion ? 0 : 0.52,
                  delay: prefersReducedMotion ? 0 : index * 0.07,
                  ease: motionEase,
                }}
                type="button"
              >
                <Image
                  alt={`GCC Chalissery ${item.title}`}
                  className={[
                    "size-full object-cover transition duration-700 group-hover:scale-[1.035]",
                    getImagePosition(item),
                  ].join(" ")}
                  fill
                  sizes={
                    index === 0
                      ? "(min-width: 1024px) 58vw, 100vw"
                      : "(min-width: 1024px) 34vw, 100vw"
                  }
                  src={item.image}
                />
                <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(3,8,63,0)_0%,rgba(3,8,63,0.12)_38%,rgba(3,8,63,0.72)_76%,rgba(3,8,63,0.98)_100%)] transition duration-500 group-hover:bg-[linear-gradient(180deg,rgba(3,8,63,0.02)_0%,rgba(3,8,63,0.18)_38%,rgba(3,8,63,0.8)_76%,rgba(3,8,63,0.99)_100%)]" />
                <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-accent via-accent/35 to-transparent opacity-75 transition group-hover:opacity-100" />
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white transition duration-300 group-hover:-translate-y-1 sm:p-8">
                  <p className="text-[0.68rem] font-black uppercase tracking-[0.18em] text-accent">
                    {item.category}
                  </p>
                  <h2
                    className={[
                      "mt-3 line-clamp-3 max-w-xl font-black leading-tight text-white",
                      index === 0
                        ? "text-4xl sm:text-5xl"
                        : "text-2xl sm:text-3xl",
                    ].join(" ")}
                  >
                    {item.title}
                  </h2>
                </div>
              </motion.button>
            ))}
          </motion.div>
        ) : null}

        <motion.div className="mt-10 columns-1 gap-5 sm:columns-2 lg:columns-3 xl:columns-4">
          <AnimatePresence mode="popLayout">
            {gridItems.map((item, index) => (
              <motion.button
                aria-label={`Open ${item.title}`}
                className={[
                  "group relative mb-5 block w-full break-inside-avoid overflow-hidden rounded-[1.35rem] border border-white/12 bg-white/10 text-left shadow-xl shadow-black/14 transition duration-500 hover:-translate-y-1 hover:border-accent/45 hover:shadow-2xl hover:shadow-black/24 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent",
                  getAspectClass(item, index),
                ].join(" ")}
                exit={
                  prefersReducedMotion
                    ? { opacity: 1 }
                    : { opacity: 0, scale: 0.97, y: -12 }
                }
                initial={
                  prefersReducedMotion
                    ? { opacity: 1 }
                    : { opacity: 0, scale: 0.97, y: 20 }
                }
                animate={{ opacity: 1, scale: 1, y: 0 }}
                key={getItemKey(item, index, activeCategory)}
                layout
                onClick={() => setSelectedItem(item)}
                transition={{
                  duration: prefersReducedMotion ? 0 : 0.42,
                  delay: prefersReducedMotion ? 0 : index * 0.025,
                  ease: motionEase,
                }}
                type="button"
              >
                <Image
                  alt={`GCC Chalissery ${item.title}`}
                  className={[
                    "size-full object-cover transition duration-700 group-hover:scale-[1.04]",
                    getImagePosition(item),
                  ].join(" ")}
                  fill
                  sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
                  src={item.image}
                />
                <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(3,8,63,0)_0%,rgba(3,8,63,0.1)_38%,rgba(3,8,63,0.7)_76%,rgba(3,8,63,0.98)_100%)] transition duration-500 group-hover:bg-[linear-gradient(180deg,rgba(3,8,63,0.02)_0%,rgba(3,8,63,0.16)_38%,rgba(3,8,63,0.78)_76%,rgba(3,8,63,0.99)_100%)]" />
                <div className="absolute inset-x-0 top-0 h-0.5 bg-gradient-to-r from-accent via-accent/30 to-transparent opacity-65 transition group-hover:opacity-100" />
                <div className="absolute bottom-0 left-0 right-0 p-5 text-white transition duration-300 group-hover:-translate-y-1 sm:p-6">
                  <p className="text-[0.68rem] font-black uppercase tracking-[0.16em] text-accent">
                    {item.category}
                  </p>
                  <h2 className="mt-2 line-clamp-3 text-[1.35rem] font-black leading-tight sm:text-2xl">
                    {item.title}
                  </h2>
                </div>
              </motion.button>
            ))}
          </AnimatePresence>
        </motion.div>
      </Container>

      <AnimatePresence>
        {selectedItem ? (
          <motion.div
            animate={{ opacity: 1 }}
            className="fixed inset-0 z-[1200] grid place-items-center bg-brand-strong/88 p-4 backdrop-blur-xl"
            exit={{ opacity: 0 }}
            initial={{ opacity: 0 }}
            onClick={() => setSelectedItem(null)}
            transition={{ duration: prefersReducedMotion ? 0 : 0.24 }}
          >
            <motion.div
              animate={{ opacity: 1, scale: 1, y: 0 }}
              className="relative w-full max-w-6xl overflow-hidden rounded-[1.2rem] border border-white/12 bg-brand shadow-2xl shadow-black/30"
              exit={{ opacity: 0, scale: 0.98, y: 10 }}
              initial={
                prefersReducedMotion
                  ? false
                  : { opacity: 0, scale: 0.98, y: 14 }
              }
              onClick={(event) => event.stopPropagation()}
              transition={{ duration: prefersReducedMotion ? 0 : 0.32, ease: motionEase }}
            >
              <button
                aria-label="Close preview"
                className="absolute right-4 top-4 z-10 grid size-11 place-items-center border border-white/15 bg-white/12 text-white shadow-xl shadow-black/20 backdrop-blur-md transition hover:border-accent hover:bg-accent hover:text-brand-strong focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent"
                onClick={() => setSelectedItem(null)}
                type="button"
              >
                <X className="size-5" aria-hidden="true" />
              </button>
              <div className="relative aspect-[16/10] max-h-[78vh] w-full bg-brand-strong">
                <Image
                  alt={`GCC Chalissery ${selectedItem.title}`}
                  className={[
                    "size-full object-contain",
                    getImagePosition(selectedItem),
                  ].join(" ")}
                  fill
                  sizes="100vw"
                  src={selectedItem.image}
                />
              </div>
              <div className="border-t border-white/10 p-5 sm:p-6">
                <p className="text-xs font-black uppercase tracking-[0.16em] text-accent">
                  {selectedItem.category}
                </p>
                <h2 className="mt-2 text-2xl font-black leading-tight text-white">
                  {selectedItem.title}
                </h2>
                {selectedItem.caption ? (
                  <p className="mt-2 text-sm leading-6 text-blue-50/70">
                    {selectedItem.caption}
                  </p>
                ) : null}
              </div>
            </motion.div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </section>
  );
}
