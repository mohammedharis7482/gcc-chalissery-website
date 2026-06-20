"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ArrowUpRight } from "lucide-react";
import { useEffect, useState } from "react";

import { BrandMark } from "@/components/layout/brand-mark";
import { MobileNav } from "@/components/layout/mobile-nav";
import { Container } from "@/components/ui/container";
import { primaryNav } from "@/data/site";

export function SiteHeader() {
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const updateScrollState = () => {
      setIsScrolled(window.scrollY > 12);
    };

    updateScrollState();
    window.addEventListener("scroll", updateScrollState, { passive: true });

    return () => window.removeEventListener("scroll", updateScrollState);
  }, []);

  return (
    <header
      className={[
        "fixed inset-x-0 top-0 z-[999] border-b border-slate-200 bg-white/95 backdrop-blur-xl transition-shadow duration-300",
        isScrolled
          ? "shadow-lg shadow-brand/10"
          : "shadow-sm shadow-brand/5",
      ].join(" ")}
    >
      <Container className="flex h-[76px] items-center justify-between gap-4 lg:h-[84px] lg:gap-6">
        <BrandMark />
        <div className="hidden items-center gap-6 lg:flex">
          <nav
            className="flex items-center gap-8"
            aria-label="Primary"
          >
            {primaryNav.map((item) => {
              const isActive =
                item.href === "/" ? pathname === "/" : pathname.startsWith(item.href);

              return (
                <Link
                  aria-current={isActive ? "page" : undefined}
                  className={[
                    "relative py-2 text-sm font-black transition after:absolute after:bottom-0 after:left-0 after:h-0.5 after:bg-accent after:transition-all hover:text-brand focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent",
                    isActive
                      ? "text-brand after:w-full"
                      : "text-neutral-600 after:w-0 hover:after:w-full",
                  ].join(" ")}
                  href={item.href}
                  key={item.href}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>
          <Link
            className="group inline-flex h-11 items-center gap-2 bg-brand px-5 text-sm font-black text-white shadow-lg shadow-brand/15 transition duration-300 hover:-translate-y-0.5 hover:bg-brand-strong focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent"
            href="/contact"
          >
            Enquire
            <ArrowUpRight
              className="size-4 transition duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              aria-hidden="true"
            />
          </Link>
        </div>
        <MobileNav />
      </Container>
    </header>
  );
}
