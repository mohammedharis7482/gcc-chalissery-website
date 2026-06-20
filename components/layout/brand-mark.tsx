import Link from "next/link";
import Image from "next/image";

import { siteConfig } from "@/data/site";

type BrandMarkProps = {
  footer?: boolean;
};

export function BrandMark({ footer = false }: BrandMarkProps) {
  if (footer) {
    return (
      <Link className="inline-flex leading-none" href="/" aria-label="Home">
        <span>
          <span className="block text-lg font-black uppercase tracking-normal text-white">
            GCC Chalissery
          </span>
          <span className="mt-2 block text-xs font-black uppercase tracking-[0.18em] text-blue-50/60">
            Football Academy
          </span>
        </span>
      </Link>
    );
  }

  return (
    <Link className="inline-flex items-center gap-2 lg:gap-2.5" href="/" aria-label="Home">
      <span className="relative size-[42px] shrink-0 overflow-hidden rounded-full sm:size-12">
        <Image
          alt=""
          className="size-full object-cover object-center"
          fill
          priority
          sizes="48px"
          src="/logos/gcc-logo.png"
        />
      </span>
      <span className="leading-none">
        <span className="block text-[0.9rem] font-black uppercase tracking-normal text-brand sm:text-[0.95rem]">
          GCC Chalissery
        </span>
        <span className="mt-0.5 block text-[0.6rem] font-black uppercase tracking-[0.12em] text-neutral-500 sm:mt-1 sm:text-[0.64rem] sm:tracking-[0.14em]">
          Football Academy
        </span>
      </span>
    </Link>
  );
}

export const brandName = siteConfig.name;
