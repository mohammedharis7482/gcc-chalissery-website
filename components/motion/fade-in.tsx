"use client";

import {
  motion,
  useReducedMotion,
  type HTMLMotionProps,
} from "framer-motion";

import {
  motionEase,
  motionVariants,
  motionViewport,
  type MotionVariantName,
} from "@/components/motion/variants";

type FadeInProps = HTMLMotionProps<"div"> & {
  variant?: MotionVariantName;
};

export function FadeIn({
  children,
  transition,
  variant = "fadeUp",
  viewport,
  ...props
}: FadeInProps) {
  const prefersReducedMotion = useReducedMotion();

  if (prefersReducedMotion) {
    return <motion.div {...props}>{children}</motion.div>;
  }

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={viewport ?? motionViewport}
      variants={motionVariants[variant]}
      transition={{
        duration: 0.68,
        ease: motionEase,
        ...transition,
      }}
      {...props}
    >
      {children}
    </motion.div>
  );
}
