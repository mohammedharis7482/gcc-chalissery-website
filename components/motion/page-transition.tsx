"use client";

import { useEffect, type ReactNode } from "react";
import { usePathname } from "next/navigation";
import { motion, useReducedMotion } from "framer-motion";

import {
  motionEase,
  motionVariants,
} from "@/components/motion/variants";

type PageTransitionProps = {
  children: ReactNode;
};

export function PageTransition({ children }: PageTransitionProps) {
  const pathname = usePathname();
  const prefersReducedMotion = useReducedMotion();

  useEffect(() => {
    if (typeof window === "undefined") {
      return;
    }

    window.scrollTo({
      top: 0,
      behavior: prefersReducedMotion ? "auto" : "smooth",
    });
  }, [pathname, prefersReducedMotion]);

  if (prefersReducedMotion) {
    return <>{children}</>;
  }

  return (
    <motion.div
      animate="visible"
      initial="hidden"
      key={pathname}
      variants={motionVariants.pageTransition}
      transition={{ duration: 0.42, ease: motionEase }}
    >
      {children}
    </motion.div>
  );
}
