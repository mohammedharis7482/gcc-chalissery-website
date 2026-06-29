import Image from "next/image";
import Link from "next/link";

import { FadeIn } from "@/components/motion/fade-in";
import { Container } from "@/components/ui/container";
import { primaryNav, siteConfig, socialLinks } from "@/data/site";

export function SiteFooter() {
  const currentYear = new Date().getFullYear();
  const academyLinks = [
    { label: "Programs", href: "/academy" },
    { label: "Our Team", href: "/team" },
    { label: "Admissions", href: "/contact" },
    { label: "Gallery", href: "/gallery" },
    { label: "Achievements", href: "/achievements" },
  ];

  return (
    <footer className="relative isolate overflow-hidden bg-brand-strong text-white">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_82%_14%,rgba(248,196,0,0.18),transparent_26rem),radial-gradient(circle_at_14%_70%,rgba(21,174,234,0.12),transparent_28rem)]" />
      <p className="pointer-events-none absolute -bottom-10 left-4 -z-10 text-[11rem] font-black leading-none text-white/[0.035] sm:text-[15rem] lg:text-[22rem]">
        GCC
      </p>

      <Container className="py-14 lg:py-20">
        <div className="grid gap-10 border-y border-white/10 py-10 lg:grid-cols-[1.25fr_0.65fr_0.65fr_0.9fr] lg:py-14">
          <FadeIn>
            <Link
              className="inline-flex items-center gap-4"
              href="/"
              aria-label="GCC Chalissery Football Academy home"
            >
              <span className="relative size-16 shrink-0 overflow-hidden rounded-full">
                <Image
                  alt=""
                  className="size-full object-cover object-center"
                  fill
                  sizes="64px"
                  src="/logos/gcc-logo.png"
                />
              </span>
              <span>
                <span className="block text-xl font-black uppercase tracking-normal text-white">
                  GCC Chalissery
                </span>
                <span className="mt-2 block text-xs font-black uppercase tracking-[0.18em] text-blue-50/62">
                  Football Academy
                </span>
              </span>
            </Link>
            <h2 className="mt-8 max-w-2xl text-balance text-3xl font-black leading-[1.04] sm:text-4xl">
              Community-powered football development from Chalissery.
            </h2>
            <p className="mt-5 max-w-xl text-sm leading-7 text-blue-50/72">
              {siteConfig.description}
            </p>
            <div className="mt-8 grid max-w-xl gap-4 sm:grid-cols-3">
              {["Since 1980", "AIFF Affiliated", "U-10 • U-13 • U-15"].map((item) => (
                <div className="border-t border-white/15 pt-3" key={item}>
                  <p className="text-xs font-black uppercase tracking-[0.14em] text-accent">
                    {item}
                  </p>
                </div>
              ))}
            </div>
          </FadeIn>

          <FadeIn transition={{ delay: 0.05 }}>
            <h3 className="text-sm font-black uppercase tracking-[0.16em] text-accent">
              Navigation
            </h3>
            <ul className="mt-6 space-y-3">
              {primaryNav.map((item) => (
                <li key={item.href}>
                  <Link
                    className="text-sm font-black uppercase tracking-[0.12em] text-blue-50/70 transition hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent"
                    href={item.href}
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </FadeIn>

          <FadeIn transition={{ delay: 0.1 }}>
            <h3 className="text-sm font-black uppercase tracking-[0.16em] text-accent">
              Academy
            </h3>
            <ul className="mt-6 space-y-3">
              {academyLinks.map((item) => (
                <li key={item.href}>
                  <Link
                    className="text-sm font-black uppercase tracking-[0.12em] text-blue-50/70 transition hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent"
                    href={item.href}
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </FadeIn>

          <FadeIn transition={{ delay: 0.15 }}>
            <h3 className="text-sm font-black uppercase tracking-[0.16em] text-accent">
              Club contact
            </h3>
            <div className="mt-6 space-y-3 text-sm leading-7 text-blue-50/72">
              <p>
                <Link className="transition hover:text-white" href={siteConfig.contact.map}>
                  {siteConfig.contact.location}
                </Link>
              </p>
              <p>
                WhatsApp:{" "}
                <Link
                  className="transition hover:text-white"
                  href={siteConfig.contact.whatsapp}
                >
                  {siteConfig.contact.phone}
                </Link>
              </p>
              <p>
                Email:{" "}
                <Link
                  className="transition hover:text-white"
                  href={`mailto:${siteConfig.contact.email}`}
                >
                  {siteConfig.contact.email}
                </Link>
              </p>
            </div>
            <div className="mt-7 flex flex-wrap gap-3">
              {socialLinks.map((item) => {
                const Icon = item.icon;

                return (
                  <Link
                    aria-label={item.label}
                    className="grid size-11 place-items-center border border-white/15 text-blue-50/80 transition hover:-translate-y-0.5 hover:border-accent hover:bg-white/10 hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent"
                    href={item.href}
                    key={item.label}
                  >
                    <Icon className="size-4" aria-hidden="true" />
                  </Link>
                );
              })}
            </div>
          </FadeIn>
        </div>

        <div className="flex flex-col gap-3 py-6 text-xs font-semibold text-blue-50/55 sm:flex-row sm:items-center sm:justify-between">
          <p>© {currentYear} GCC Chalissery Football Academy</p>
          <p>Chalissery, Kerala, India · Built for disciplined football development.</p>
        </div>
      </Container>
    </footer>
  );
}
