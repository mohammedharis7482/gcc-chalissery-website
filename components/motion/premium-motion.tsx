"use client";

import {
  useEffect,
  useRef,
  useState,
  type ComponentPropsWithoutRef,
  type ReactNode,
} from "react";
import Link from "next/link";
import {
  motion,
  useInView,
  useMotionValue,
  useReducedMotion,
  useScroll,
  useSpring,
  useTransform,
  type HTMLMotionProps,
} from "framer-motion";

import { motionEase, motionViewport } from "@/components/motion/variants";

type SplitLineRevealProps = {
  as?: "h1" | "h2" | "h3" | "p";
  className?: string;
  delay?: number;
  lines: readonly string[];
  trigger?: "load" | "viewport";
};

export function SplitLineReveal({
  as = "h2",
  className,
  delay = 0,
  lines,
  trigger = "viewport",
}: SplitLineRevealProps) {
  const prefersReducedMotion = useReducedMotion();
  const Heading = as;

  if (prefersReducedMotion) {
    return (
      <Heading className={className}>
        {lines.map((line) => (
          <span className="block" key={line}>
            {line}
          </span>
        ))}
      </Heading>
    );
  }

  return (
    <Heading aria-label={lines.join(" ")} className={className}>
      {lines.map((line, index) => (
        <span className="block overflow-hidden pb-[0.04em]" key={line}>
          <motion.span
            className="block"
            initial={{ y: "112%", opacity: 0 }}
            animate={trigger === "load" ? { y: "0%", opacity: 1 } : undefined}
            whileInView={
              trigger === "viewport" ? { y: "0%", opacity: 1 } : undefined
            }
            viewport={{ once: true, amount: 0.18, margin: "0px 0px -80px 0px" }}
            transition={{
              delay: delay + index * 0.11,
              duration: 0.78,
              ease: motionEase,
            }}
          >
            {line}
          </motion.span>
        </span>
      ))}
    </Heading>
  );
}

type RevealTextProps = {
  children: string;
  className?: string;
  delay?: number;
};

export function RevealText({ children, className, delay = 0 }: RevealTextProps) {
  const prefersReducedMotion = useReducedMotion();

  if (prefersReducedMotion) {
    return <span className={className}>{children}</span>;
  }

  return (
    <span className={className}>
      {children.split(" ").map((word, index) => (
        <span className="inline-block overflow-hidden pr-[0.22em]" key={`${word}-${index}`}>
          <motion.span
            className="inline-block"
            initial={{ y: "105%", opacity: 0 }}
            whileInView={{ y: "0%", opacity: 1 }}
            viewport={motionViewport}
            transition={{
              delay: delay + index * 0.035,
              duration: 0.58,
              ease: motionEase,
            }}
          >
            {word}
          </motion.span>
        </span>
      ))}
    </span>
  );
}

type ClipRevealImageProps = HTMLMotionProps<"div"> & {
  children: ReactNode;
};

export function ClipRevealImage({
  children,
  transition,
  ...props
}: ClipRevealImageProps) {
  const prefersReducedMotion = useReducedMotion();

  if (prefersReducedMotion) {
    return <motion.div {...props}>{children}</motion.div>;
  }

  return (
    <motion.div
      initial={{
        opacity: 0,
        scale: 1.045,
        clipPath: "inset(12% 0% 12% 0% round 1.35rem)",
      }}
      whileInView={{
        opacity: 1,
        scale: 1,
        clipPath: "inset(0% 0% 0% 0% round 1.35rem)",
      }}
      viewport={motionViewport}
      transition={{
        duration: 0.86,
        ease: motionEase,
        ...transition,
      }}
      {...props}
    >
      {children}
    </motion.div>
  );
}

type ImageParallaxProps = HTMLMotionProps<"div"> & {
  children: ReactNode;
  distance?: number;
};

export function ImageParallax({
  children,
  distance = 28,
  style,
  ...props
}: ImageParallaxProps) {
  const ref = useRef<HTMLDivElement | null>(null);
  const prefersReducedMotion = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], [-distance, distance]);
  const springY = useSpring(y, { stiffness: 90, damping: 26, mass: 0.8 });

  return (
    <motion.div
      ref={ref}
      style={{ ...style, y: prefersReducedMotion ? 0 : springY }}
      {...props}
    >
      {children}
    </motion.div>
  );
}

type MagneticButtonProps = Omit<
  ComponentPropsWithoutRef<typeof Link>,
  "onMouseLeave" | "onMouseMove"
> & {
  strength?: number;
};

export function MagneticButton({
  children,
  className,
  strength = 12,
  ...props
}: MagneticButtonProps) {
  const prefersReducedMotion = useReducedMotion();
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const springX = useSpring(x, { stiffness: 190, damping: 18, mass: 0.45 });
  const springY = useSpring(y, { stiffness: 190, damping: 18, mass: 0.45 });

  return (
    <motion.span
      className="inline-flex w-full sm:w-auto"
      style={{
        x: prefersReducedMotion ? 0 : springX,
        y: prefersReducedMotion ? 0 : springY,
      }}
      onMouseMove={(event) => {
        if (prefersReducedMotion) {
          return;
        }

        const bounds = event.currentTarget.getBoundingClientRect();
        x.set(((event.clientX - bounds.left) / bounds.width - 0.5) * strength);
        y.set(((event.clientY - bounds.top) / bounds.height - 0.5) * strength);
      }}
      onMouseLeave={() => {
        x.set(0);
        y.set(0);
      }}
    >
      <Link className={["w-full sm:w-auto", className].join(" ")} {...props}>
        {children}
      </Link>
    </motion.span>
  );
}

type ScrollProgressLineProps = HTMLMotionProps<"div"> & {
  orientation?: "horizontal" | "vertical";
};

export function ScrollProgressLine({
  orientation = "vertical",
  style,
  ...props
}: ScrollProgressLineProps) {
  const ref = useRef<HTMLDivElement | null>(null);
  const prefersReducedMotion = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 72%", "end 28%"],
  });
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 90,
    damping: 28,
    mass: 0.75,
  });

  return (
    <motion.div
      ref={ref}
      style={{
        ...style,
        scaleX:
          orientation === "horizontal" && !prefersReducedMotion
            ? smoothProgress
            : 1,
        scaleY:
          orientation === "vertical" && !prefersReducedMotion
            ? smoothProgress
            : 1,
        transformOrigin: orientation === "horizontal" ? "left center" : "top center",
      }}
      {...props}
    />
  );
}

type StaggerRevealProps = HTMLMotionProps<"div"> & {
  children: ReactNode;
};

export function StaggerReveal({ children, transition, ...props }: StaggerRevealProps) {
  const prefersReducedMotion = useReducedMotion();

  if (prefersReducedMotion) {
    return <motion.div {...props}>{children}</motion.div>;
  }

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={motionViewport}
      variants={{
        hidden: {},
        visible: {
          transition: {
            staggerChildren: 0.075,
            delayChildren: 0.08,
            ...transition,
          },
        },
      }}
      {...props}
    >
      {children}
    </motion.div>
  );
}

type PremiumCardProps = HTMLMotionProps<"div"> & {
  children: ReactNode;
};

export function PremiumCard({ children, transition, ...props }: PremiumCardProps) {
  const prefersReducedMotion = useReducedMotion();

  return (
    <motion.div
      whileHover={prefersReducedMotion ? undefined : { y: -6 }}
      transition={{
        duration: 0.34,
        ease: motionEase,
        ...transition,
      }}
      {...props}
    >
      {children}
    </motion.div>
  );
}

type CountUpStatProps = {
  className?: string;
  value: string;
};

export function CountUpStat({ className, value }: CountUpStatProps) {
  const ref = useRef<HTMLSpanElement | null>(null);
  const prefersReducedMotion = useReducedMotion();
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  const match = value.match(/^(\D*)(\d+)(.*)$/);
  const target = match ? Number.parseInt(match[2], 10) : 0;
  const prefix = match?.[1] ?? "";
  const suffix = match?.[3] ?? "";
  const spring = useSpring(0, { stiffness: 70, damping: 22, mass: 0.8 });
  const shouldAnimate = Boolean(match && !prefersReducedMotion);
  const [displayValue, setDisplayValue] = useState(
    shouldAnimate ? `${prefix}0${suffix}` : value,
  );

  useEffect(() => {
    if (!shouldAnimate) {
      return;
    }

    const unsubscribe = spring.on("change", (latest) => {
      setDisplayValue(`${prefix}${Math.round(latest)}${suffix}`);
    });

    if (isInView) {
      spring.set(target);
    }

    return unsubscribe;
  }, [isInView, prefix, shouldAnimate, spring, suffix, target]);

  return (
    <span className={className} ref={ref}>
      {displayValue}
    </span>
  );
}

type FloatingBadgeProps = HTMLMotionProps<"div"> & {
  children: ReactNode;
  delay?: number;
};

export function FloatingBadge({
  children,
  delay = 0,
  transition,
  ...props
}: FloatingBadgeProps) {
  const prefersReducedMotion = useReducedMotion();

  if (prefersReducedMotion) {
    return <motion.div {...props}>{children}</motion.div>;
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 16, scale: 0.96 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      animate={{ y: [0, -5, 0] }}
      viewport={motionViewport}
      transition={{
        opacity: { duration: 0.5, delay, ease: motionEase },
        scale: { duration: 0.5, delay, ease: motionEase },
        y: {
          duration: 4.2,
          delay: delay + 0.5,
          ease: "easeInOut",
          repeat: Infinity,
        },
        ...transition,
      }}
      {...props}
    >
      {children}
    </motion.div>
  );
}

type SectionIntroProps = HTMLMotionProps<"div"> & {
  badge: ReactNode;
  description?: ReactNode;
  title: ReactNode;
};

export function SectionIntro({
  badge,
  className,
  description,
  title,
  ...props
}: SectionIntroProps) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={motionViewport}
      transition={{ duration: 0.65, ease: motionEase }}
      {...props}
    >
      {badge}
      {title}
      {description}
    </motion.div>
  );
}
