import type { Variants } from "framer-motion";

export const motionViewport = { once: true, margin: "-80px" } as const;

export const motionEase = [0.22, 1, 0.36, 1] as const;

export const motionDurations = {
  hover: 0.34,
  reveal: 0.72,
  imageReveal: 0.78,
  slow: 1.05,
} as const;

export const premiumTransition = {
  duration: motionDurations.reveal,
  ease: motionEase,
} as const;

export const motionVariants = {
  fadeUp: {
    hidden: { opacity: 0, y: 32 },
    visible: { opacity: 1, y: 0 },
  },
  fadeIn: {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  },
  staggerContainer: {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.08,
        delayChildren: 0.08,
      },
    },
  },
  imageReveal: {
    hidden: { opacity: 0, scale: 1.03, clipPath: "inset(8% 0% 8% 0%)" },
    visible: { opacity: 1, scale: 1, clipPath: "inset(0% 0% 0% 0%)" },
  },
  scaleIn: {
    hidden: { opacity: 0, scale: 0.96 },
    visible: { opacity: 1, scale: 1 },
  },
  slideLeft: {
    hidden: { opacity: 0, x: 28 },
    visible: { opacity: 1, x: 0 },
  },
  slideRight: {
    hidden: { opacity: 0, x: -28 },
    visible: { opacity: 1, x: 0 },
  },
  pageTransition: {
    hidden: { opacity: 0, y: 14 },
    visible: { opacity: 1, y: 0 },
  },
} satisfies Record<string, Variants>;

export type MotionVariantName = keyof typeof motionVariants;
