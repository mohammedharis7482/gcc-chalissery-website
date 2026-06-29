"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { ArrowUpRight, X } from "lucide-react";

import { FadeIn } from "@/components/motion/fade-in";
import { motionEase } from "@/components/motion/variants";
import type {
  PlayerAchievement,
  TeamAchievement,
} from "@/src/data/achievements";

type AchievementCardProps = {
  achievement: TeamAchievement;
};

type PlayerAchievementCardProps = {
  achievement: PlayerAchievement;
};

type ModalDetail = {
  label: string;
  value?: string;
};

function splitTeamTitle(title: string) {
  const [competition, result] = title.split("—").map((item) => item.trim());

  return {
    competition: competition || "Team Achievement",
    result: result || title,
  };
}

function getPlayerHeadline(achievement: PlayerAchievement) {
  const text = achievement.achievement.toLowerCase();

  if (text.includes("aiff")) return "AIFF Licensed Coach";
  if (text.includes("indian navy")) return "Indian Navy Football";
  if (text.includes("services")) return "Services Team Player";
  if (text.includes("i-league") || text.includes("afc cup")) {
    return "Professional Club Player";
  }
  if (text.includes("calicut university")) return "Calicut University Player";
  if (text.includes("pondicherry university")) {
    return "University Football Player";
  }
  if (text.includes("kerala u-19")) return "Kerala U-19 Player";
  if (text.includes("kerala u-17")) return "Kerala U-17 Player";
  if (text.includes("kerala under-21")) return "Kerala U-21 Player";
  if (text.includes("senior team")) return "District Senior Team";
  if (text.includes("u-21")) return "District U-21 Player";
  if (text.includes("u-19")) return "District U-19 Player";
  if (text.includes("u-17")) return "District U-17 Player";
  if (text.includes("u-14")) return "District U-14 Player";

  return "Player Achievement";
}

function extractYears(text: string) {
  const matches = text.match(/\b(?:19|20)\d{2}(?:[–-](?:19|20)?\d{2})?\b/g);
  return matches?.join(", ");
}

function getPlayerRepresentedTeam(achievement: string) {
  const sentences = achievement.split(/[,.]/).map((item) => item.trim());
  const represented = sentences.find((item) =>
    /team|club|university|navy|police|services|district|kerala|pondicherry|calicut|thrissur|palakkad/i.test(
      item,
    ),
  );

  return represented;
}

function getPlayerImagePosition(name: string) {
  if (["Anoop", "Sreyas VG", "Ajmal", "Masood"].includes(name)) {
    return "object-[center_24%]";
  }

  return "object-[center_22%]";
}

function DetailRow({ label, value }: ModalDetail) {
  if (!value) {
    return null;
  }

  return (
    <div className="rounded-[1.15rem] border border-white/10 bg-white/[0.06] p-4">
      <p className="text-[0.68rem] font-black uppercase tracking-[0.16em] text-accent">
        {label}
      </p>
      <p className="mt-3 text-sm leading-7 text-blue-50/78">{value}</p>
    </div>
  );
}

function DetailsModal({
  details,
  image,
  imageAlt,
  imageClassName = "object-center",
  label,
  onClose,
  open,
  title,
}: {
  details: readonly ModalDetail[];
  image: string;
  imageAlt: string;
  imageClassName?: string;
  label: string;
  onClose: () => void;
  open: boolean;
  title: string;
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
          className="fixed inset-0 z-[1000] grid place-items-end bg-brand-strong/84 p-3 backdrop-blur-xl sm:place-items-center sm:p-6"
          exit={{ opacity: 0 }}
          initial={{ opacity: 0 }}
          transition={{
            duration: prefersReducedMotion ? 0 : 0.28,
            ease: motionEase,
          }}
        >
          <button
            aria-label="Close achievement details"
            className="absolute inset-0 cursor-default"
            onClick={onClose}
            type="button"
          />
          <motion.div
            animate={{ opacity: 1, scale: 1, y: 0 }}
            aria-modal="true"
            className="relative max-h-[92vh] w-full max-w-4xl overflow-y-auto rounded-[1.75rem] border border-white/14 bg-[linear-gradient(135deg,rgba(6,18,93,0.98),rgba(18,48,167,0.96))] p-4 text-white shadow-2xl shadow-black/40 sm:p-5"
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
            <div className="relative min-h-[300px] overflow-hidden rounded-[1.35rem] bg-brand sm:min-h-[360px]">
                <Image
                  alt={imageAlt}
                  className={`size-full object-cover ${imageClassName}`}
                  fill
                  sizes="(min-width: 1024px) 38vw, 100vw"
                  src={image}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-strong/82 via-transparent to-transparent" />
              </div>

              <div className="flex flex-col justify-center p-2 sm:p-4">
                <p className="text-xs font-black uppercase tracking-[0.18em] text-accent">
                  {label}
                </p>
                <h3 className="mt-3 text-4xl font-black leading-tight text-white sm:text-5xl">
                  {title}
                </h3>

                <div className="mt-7 grid gap-3">
                  {details.map((detail) => (
                    <DetailRow
                      key={`${detail.label}-${detail.value}`}
                      label={detail.label}
                      value={detail.value}
                    />
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}

export function AchievementCard({ achievement }: AchievementCardProps) {
  const [open, setOpen] = useState(false);
  const { competition, result } = splitTeamTitle(achievement.title);

  return (
    <>
      <FadeIn className="group relative min-h-[390px] overflow-hidden rounded-[1.6rem] border border-white/12 bg-brand shadow-2xl shadow-black/16 transition duration-500 hover:-translate-y-1 hover:border-accent/50 hover:shadow-black/22 sm:min-h-[470px]">
        <Image
          alt={achievement.title}
          className="size-full object-cover object-center transition duration-700 group-hover:scale-[1.04]"
          fill
          sizes="(min-width: 1024px) 33vw, 100vw"
          src={achievement.image}
        />
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(3,8,63,0.02)_0%,rgba(3,8,63,0.12)_30%,rgba(3,8,63,0.72)_68%,rgba(3,8,63,0.99)_100%)]" />
        <div className="absolute left-5 top-5 rounded-full border border-white/15 bg-white/12 px-4 py-2 text-xs font-black uppercase tracking-[0.14em] text-accent backdrop-blur-md">
          {achievement.year}
        </div>
        <div className="absolute bottom-0 left-0 right-0 p-5 sm:p-6">
          <p className="text-[0.68rem] font-black uppercase tracking-[0.16em] text-accent">
            {competition}
          </p>
          <h3 className="mt-3 line-clamp-3 text-[1.45rem] font-black leading-tight text-white sm:text-2xl">
            {result}
          </h3>
          <p className="mt-3 line-clamp-3 text-sm leading-7 text-blue-50/76">
            {achievement.description}
          </p>
          <button
            className="group/button mt-5 inline-flex h-11 items-center gap-2 rounded-full border border-white/14 bg-white/[0.08] px-4 text-xs font-black uppercase tracking-[0.12em] text-white transition duration-300 hover:border-accent/70 hover:bg-accent hover:text-brand-strong"
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
      </FadeIn>

      <DetailsModal
        details={[
          { label: "Tournament Year", value: achievement.year },
          { label: "Competition", value: competition },
          { label: "Achievement Title", value: result },
          {
            label: "Full Achievement Description",
            value: achievement.description,
          },
        ]}
        image={achievement.image}
        imageAlt={achievement.title}
        imageClassName="object-center"
        label="Team Achievement"
        onClose={() => setOpen(false)}
        open={open}
        title={achievement.title}
      />
    </>
  );
}

export function PlayerAchievementCard({
  achievement,
}: PlayerAchievementCardProps) {
  const [open, setOpen] = useState(false);
  const headline = getPlayerHeadline(achievement);

  return (
    <>
      <FadeIn className="group relative h-full overflow-hidden rounded-[1.6rem] border border-white/12 bg-[linear-gradient(145deg,rgba(255,255,255,0.115),rgba(255,255,255,0.052))] shadow-2xl shadow-black/14 backdrop-blur-md transition duration-500 hover:-translate-y-1 hover:border-accent/50 hover:bg-white/[0.12] hover:shadow-black/20">
        <article className="relative flex h-full min-h-[18.75rem] flex-col sm:min-h-[22.5rem]">
          <div className="absolute inset-x-0 top-0 z-10 h-0.5 bg-gradient-to-r from-accent via-accent/35 to-transparent opacity-70 transition group-hover:opacity-100" />
          <div className="relative aspect-[4/3.35] overflow-hidden bg-brand sm:aspect-[4/4.05]">
            <Image
              alt={`${achievement.name} - ${achievement.achievement}`}
              className={`size-full object-cover transition duration-700 group-hover:scale-[1.04] ${getPlayerImagePosition(achievement.name)}`}
              fill
              sizes="(min-width: 1280px) 20vw, (min-width: 768px) 33vw, 100vw"
              src={achievement.image}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-brand-strong/94 via-brand-strong/16 to-transparent transition duration-500 group-hover:from-brand-strong/98" />
            <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-5">
              <p className="text-[0.64rem] font-black uppercase tracking-[0.15em] text-accent">
                Player Achievement
              </p>
              <h3 className="mt-2 line-clamp-2 text-lg font-black leading-tight text-white sm:text-xl">
                {achievement.name}
              </h3>
              <p className="mt-2 line-clamp-2 text-sm font-bold leading-6 text-blue-50/82">
                {headline}
              </p>
            </div>
          </div>

          <div className="p-4 pt-3">
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

      <DetailsModal
        details={[
          { label: "Achievement Category", value: headline },
          {
            label: "Full Achievement Description",
            value: achievement.description,
          },
          { label: "Career Path", value: achievement.achievement },
          {
            label: "Represented Team",
            value: getPlayerRepresentedTeam(achievement.achievement),
          },
          { label: "Year", value: extractYears(achievement.achievement) },
        ]}
        image={achievement.image}
        imageAlt={`${achievement.name} achievement`}
        imageClassName={getPlayerImagePosition(achievement.name)}
        label="Player Achievement"
        onClose={() => setOpen(false)}
        open={open}
        title={achievement.name}
      />
    </>
  );
}
