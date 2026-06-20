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
    <Link className="inline-flex items-center gap-3.5" href="/" aria-label="Home">
      <span className="relative size-[3.75rem] shrink-0 overflow-hidden rounded-full sm:size-[4.25rem]">
        <Image
          alt=""
          className="size-full object-cover object-center"
          fill
          priority
          sizes="72px"
          src="/logos/gcc-logo.png"
        />
      </span>
      <span className="leading-none">
        <span className="block text-sm font-black uppercase tracking-normal text-brand sm:text-base">
          GCC Chalissery
        </span>
        <span className="mt-1.5 block text-[0.68rem] font-black uppercase tracking-[0.16em] text-neutral-500">
          Football Academy
        </span>
      </span>
    </Link>
  );
}

export const brandName = siteConfig.name;
