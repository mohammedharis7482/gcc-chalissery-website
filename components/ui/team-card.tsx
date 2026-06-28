"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { ArrowUpRight, X } from "lucide-react";

import { FadeIn } from "@/components/motion/fade-in";
import { motionEase } from "@/components/motion/variants";
import { cn } from "@/lib/utils";
import type { TeamMember } from "@/src/data/team";

type TeamCardProps = {
  category?: string;
  compact?: boolean;
  highlighted?: boolean;
  member: TeamMember;
};

function getInitials(name: string) {
  return name
    .split(" ")
    .map((word) => word[0])
    .join("")
    .slice(0, 2);
}

function getImagePosition(member: TeamMember) {
  if (member.role.includes("Physiotherapist")) {
    return "object-[center_24%]";
  }

  if (member.role.includes("Technical Director")) {
    return "object-[center_28%]";
  }

  if (member.name.includes("Impact")) {
    return "object-center";
  }

  return "object-[center_22%]";
}

function MemberImage({
  className,
  member,
  sizes,
}: {
  className?: string;
  member: TeamMember;
  sizes: string;
}) {
  if (!member.image) {
    return (
      <div className="grid size-full place-items-center bg-[radial-gradient(circle_at_50%_28%,rgba(248,196,0,0.18),transparent_18rem),linear-gradient(135deg,#07106f,#03083f)]">
        <span className="text-5xl font-black text-white/82">
          {getInitials(member.name)}
        </span>
      </div>
    );
  }

  return (
    <Image
      alt={`${member.name}, ${member.role}`}
      className={cn(
        "size-full object-cover",
        getImagePosition(member),
        className,
      )}
      fill
      sizes={sizes}
      src={member.image}
    />
  );
}

function DetailGroup({
  items,
  title,
}: {
  items?: readonly string[];
  title: string;
}) {
  if (!items?.length) {
    return null;
  }

  return (
    <div className="rounded-[1.25rem] border border-white/10 bg-white/[0.06] p-4">
      <p className="text-[0.68rem] font-black uppercase tracking-[0.16em] text-accent">
        {title}
      </p>
      <ul className="mt-3 space-y-2">
        {items.map((item) => (
          <li className="text-sm leading-6 text-blue-50/78" key={item}>
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}

function TeamMemberModal({
  category,
  member,
  onClose,
  open,
}: {
  category?: string;
  member: TeamMember;
  onClose: () => void;
  open: boolean;
}) {
  const prefersReducedMotion = useReducedMotion();

  useEffect(() => {
    if (!open) {
      return;
    }

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        onClose();
      }
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [onClose, open]);

  return (
    <AnimatePresence>
      {open ? (
        <motion.div
          animate={{ opacity: 1 }}
          className="fixed inset-0 z-[1000] grid place-items-end bg-brand-strong/82 p-3 backdrop-blur-xl sm:place-items-center sm:p-6"
          exit={{ opacity: 0 }}
          initial={{ opacity: 0 }}
          transition={{
            duration: prefersReducedMotion ? 0 : 0.28,
            ease: motionEase,
          }}
        >
          <button
            aria-label="Close team member details"
            className="absolute inset-0 cursor-default"
            onClick={onClose}
            type="button"
          />
          <motion.div
            aria-modal="true"
            className="relative max-h-[92vh] w-full max-w-4xl overflow-y-auto rounded-[1.75rem] border border-white/14 bg-[linear-gradient(135deg,rgba(6,18,93,0.98),rgba(18,48,167,0.96))] p-4 text-white shadow-2xl shadow-black/40 sm:p-5"
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{
              opacity: 0,
              scale: prefersReducedMotion ? 1 : 0.98,
              y: prefersReducedMotion ? 0 : 18,
            }}
            initial={{
              opacity: 0,
              scale: prefersReducedMotion ? 1 : 0.96,
              y: prefersReducedMotion ? 0 : 24,
            }}
            role="dialog"
            transition={{
              duration: prefersReducedMotion ? 0 : 0.38,
              ease: motionEase,
            }}
          >
            <button
              aria-label="Close details"
              className="absolute right-4 top-4 z-10 grid size-11 place-items-center rounded-full border border-white/15 bg-white/10 text-white shadow-lg shadow-black/20 backdrop-blur transition hover:-translate-y-0.5 hover:border-accent/55 hover:text-accent"
              onClick={onClose}
              type="button"
            >
              <X className="size-5" aria-hidden="true" />
            </button>

            <div className="grid gap-5 lg:grid-cols-[0.9fr_1.1fr]">
              <div className="relative min-h-[360px] overflow-hidden rounded-[1.35rem] bg-brand">
                <MemberImage
                  className="transition duration-700"
                  member={member}
                  sizes="(min-width: 1024px) 38vw, 100vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-strong/82 via-transparent to-transparent" />
              </div>

              <div className="flex flex-col justify-center p-2 sm:p-4">
                {category ? (
                  <p className="text-xs font-black uppercase tracking-[0.18em] text-accent">
                    {category}
                  </p>
                ) : null}
                <h3 className="mt-3 text-4xl font-black leading-tight text-white sm:text-5xl">
                  {member.name}
                </h3>
                <p className="mt-3 text-base font-black uppercase tracking-[0.14em] text-blue-50/70">
                  {member.role}
                </p>

                <div className="mt-7 grid gap-3">
                  <DetailGroup title="Short Bio" items={member.bio} />
                  <DetailGroup title="Qualifications" items={member.qualifications} />
                  <DetailGroup title="Experience" items={member.experience} />
                  <DetailGroup title="Services" items={member.services} />
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}

export function TeamCard({
  category,
  compact = false,
  highlighted = false,
  member,
}: TeamCardProps) {
  const [open, setOpen] = useState(false);

  return (
    <>
      <FadeIn
        className={cn(
          "group relative h-full overflow-hidden rounded-[1.6rem] border bg-[linear-gradient(145deg,rgba(255,255,255,0.115),rgba(255,255,255,0.052))] shadow-2xl shadow-black/14 backdrop-blur-md transition duration-500 hover:-translate-y-1 hover:bg-white/[0.12] hover:shadow-black/20",
          highlighted
            ? "border-accent/35 shadow-accent/5 hover:border-accent/70"
            : "border-white/12 hover:border-accent/45",
        )}
        variant="scaleIn"
      >
        <article
          className={cn(
            "relative flex h-full flex-col",
            compact ? "min-h-[18.75rem]" : "min-h-[21.75rem]",
          )}
        >
          <div className="absolute inset-x-0 top-0 z-10 h-0.5 bg-gradient-to-r from-accent via-accent/35 to-transparent opacity-70 transition group-hover:opacity-100" />
          <div className="pointer-events-none absolute inset-0 z-10 rounded-[1.6rem] ring-1 ring-inset ring-white/5 transition group-hover:ring-accent/20" />

          <div
            className={cn(
              "relative overflow-hidden bg-brand",
              compact ? "aspect-[4/3.55]" : "aspect-[4/4.15]",
            )}
          >
            <MemberImage
              className="transition duration-700 group-hover:scale-[1.04]"
              member={member}
              sizes="(min-width: 1280px) 20vw, (min-width: 768px) 33vw, 100vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-brand-strong/92 via-brand-strong/14 to-transparent transition duration-500 group-hover:from-brand-strong/96" />
            <div
              className={cn(
                "absolute bottom-0 left-0 right-0",
                compact ? "p-4" : "p-5",
              )}
            >
              <p className="text-[0.66rem] font-black uppercase tracking-[0.15em] text-accent">
                {member.role}
              </p>
              <h3
                className={cn(
                  "mt-2 font-black leading-tight text-white",
                  compact ? "text-lg" : "text-xl",
                )}
              >
                {member.name}
              </h3>
            </div>
          </div>

          <div className={cn(compact ? "p-4 pt-3" : "p-4 pt-3 sm:p-5 sm:pt-4")}>
            <button
              className="group/button inline-flex h-11 w-full items-center justify-between rounded-full border border-white/14 bg-white/[0.075] px-4 text-xs font-black uppercase tracking-[0.12em] text-white shadow-lg shadow-black/5 transition duration-300 hover:border-accent/70 hover:bg-accent hover:text-brand-strong hover:shadow-accent/18"
              onClick={() => setOpen(true)}
              type="button"
            >
              View Details
              <ArrowUpRight
                className="size-4 transition group-hover/button:translate-x-0.5 group-hover/button:-translate-y-0.5"
                aria-hidden="true"
              />
            </button>
          </div>
        </article>
      </FadeIn>

      <TeamMemberModal
        category={category}
        member={member}
        onClose={() => setOpen(false)}
        open={open}
      />
    </>
  );
}
