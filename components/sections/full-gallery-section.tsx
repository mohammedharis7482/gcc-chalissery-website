"use client";

import { useMemo, useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";

import { Container } from "@/components/ui/container";
import { SectionHeader } from "@/components/ui/section-header";
import { motionEase } from "@/components/motion/variants";

type GalleryItem = {
  readonly caption: string;
  readonly category: string;
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
  const prefersReducedMotion = useReducedMotion();

  const visibleItems = useMemo(() => {
    if (activeCategory === "All") {
      return items;
    }

    return items.filter((item) => item.category === activeCategory);
  }, [activeCategory, items]);

  const getImagePosition = (item: GalleryItem) => {
    if (item.title.includes("Legacy")) {
      return "object-top";
    }

    if (item.title.includes("Community") || item.title.includes("U-14")) {
      return "object-[center_38%]";
    }

    if (item.title.includes("Academy identity")) {
      return "object-center";
    }

    return "object-center";
  };

  return (
    <section className="relative isolate overflow-hidden bg-brand-strong py-24 text-white sm:py-32 lg:py-36">
      <div className="absolute inset-0 -z-10 bg-[linear-gradient(135deg,#02062e_0%,#07106f_50%,#03083f_100%),radial-gradient(circle_at_14%_18%,rgba(248,196,0,0.16),transparent_26rem),radial-gradient(circle_at_88%_78%,rgba(21,174,234,0.15),transparent_30rem)]" />
      <Container>
        <div className="grid gap-9 lg:grid-cols-[0.92fr_1.08fr] lg:items-end">
          <SectionHeader
            eyebrow="Full gallery"
            invert
            title="Academy culture, training, matches, and community moments."
            description="Filter through real GCC images that show player development, tournament pride, training discipline, and the football community around Chalissery."
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

        <motion.div
          className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4 lg:gap-5"
          layout
        >
          <AnimatePresence mode="popLayout">
            {visibleItems.map((item, index) => (
              <motion.article
                className={[
                  "group relative min-h-[280px] overflow-hidden rounded-[1.1rem] border border-white/10 bg-white/10 shadow-xl shadow-black/12 transition-shadow duration-500 hover:shadow-2xl hover:shadow-black/20 sm:min-h-[320px]",
                  index === 0 || index === 5
                    ? "sm:col-span-2 sm:min-h-[440px]"
                    : "",
                  index === 2 ? "lg:row-span-2 lg:min-h-[600px]" : "",
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
                key={`${activeCategory}-${item.title}`}
                layout
                transition={{
                  duration: prefersReducedMotion ? 0 : 0.42,
                  delay: prefersReducedMotion ? 0 : index * 0.025,
                  ease: motionEase,
                }}
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
                <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(3,8,63,0.02)_0%,rgba(3,8,63,0.08)_36%,rgba(3,8,63,0.58)_68%,rgba(3,8,63,0.96)_100%)] transition duration-500 group-hover:bg-[linear-gradient(180deg,rgba(3,8,63,0.04)_0%,rgba(3,8,63,0.14)_36%,rgba(3,8,63,0.7)_68%,rgba(3,8,63,0.98)_100%)]" />
                <div className="absolute inset-x-0 top-0 h-0.5 bg-gradient-to-r from-accent via-accent/30 to-transparent opacity-65 transition group-hover:opacity-100" />
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white transition duration-300 group-hover:-translate-y-1">
                  <p className="text-[0.68rem] font-black uppercase tracking-[0.16em] text-accent">
                    {item.category}
                  </p>
                  <h2 className="mt-2 text-2xl font-black leading-tight">
                    {item.title}
                  </h2>
                  <p className="mt-3 text-sm leading-6 text-blue-50/74">
                    {item.caption}
                  </p>
                </div>
              </motion.article>
            ))}
          </AnimatePresence>
        </motion.div>
      </Container>
    </section>
  );
}
