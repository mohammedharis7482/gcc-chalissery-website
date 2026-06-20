"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";

import { primaryNav } from "@/data/site";

export function MobileNav() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();
  const prefersReducedMotion = useReducedMotion();

  return (
    <div className="lg:hidden">
      <button
        aria-expanded={isOpen}
        aria-label={isOpen ? "Close menu" : "Open menu"}
        className="grid size-10 place-items-center border border-brand/15 bg-white text-brand shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent"
        onClick={() => setIsOpen((current) => !current)}
        type="button"
      >
        {isOpen ? (
          <X className="size-5" aria-hidden="true" />
        ) : (
          <Menu className="size-5" aria-hidden="true" />
        )}
      </button>
      <AnimatePresence>
        {isOpen ? (
          <motion.div
            animate={{ opacity: 1, y: 0, scale: 1 }}
            className="absolute inset-x-0 top-[76px] z-[1000] border-b border-brand/10 bg-white px-4 py-4 shadow-2xl shadow-brand/10"
            exit={{ opacity: 0, y: -10, scale: 0.985 }}
            initial={prefersReducedMotion ? false : { opacity: 0, y: -10, scale: 0.985 }}
            transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
          >
            <nav className="grid gap-1" aria-label="Mobile primary">
              {primaryNav.map((item) => {
                const isActive =
                  item.href === "/" ? pathname === "/" : pathname.startsWith(item.href);

                return (
                  <Link
                    aria-current={isActive ? "page" : undefined}
                    className={[
                      "px-3 py-3 text-base font-bold transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent",
                      isActive
                        ? "bg-muted text-brand"
                        : "text-neutral-800 hover:bg-muted hover:text-brand",
                    ].join(" ")}
                    href={item.href}
                    key={item.href}
                    onClick={() => setIsOpen(false)}
                  >
                    {item.label}
                  </Link>
                );
              })}
            </nav>
            <Link
              className="mt-4 inline-flex h-11 w-full items-center justify-center bg-brand px-5 text-sm font-extrabold text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent"
              href="/contact"
              onClick={() => setIsOpen(false)}
            >
              Book a trial
            </Link>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </div>
  );
}
