import type { ReactNode } from "react";
import Image from "next/image";

import { FadeIn } from "@/components/motion/fade-in";
import { SplitLineReveal } from "@/components/motion/premium-motion";
import { Badge } from "@/components/ui/badge";
import { Container } from "@/components/ui/container";
import { StatCard } from "@/components/ui/stat-card";
import { cn } from "@/lib/utils";
import { spacingTokens } from "@/lib/design-system";

type CTASectionProps = {
  actions?: ReactNode;
  className?: string;
  description: string;
  eyebrow: string;
  image: string;
  imageAlt?: string;
  innerGridClassName?: string;
  overlayClassName?: string;
  title: readonly string[];
  trustCardClassName?: string;
  trustGridClassName?: string;
  trustIndicators?: readonly string[];
  trustLabelClassName?: string;
  trustValueClassName?: string;
};

export function CTASection({
  actions,
  className,
  description,
  eyebrow,
  image,
  imageAlt = "",
  innerGridClassName,
  overlayClassName,
  title,
  trustCardClassName,
  trustGridClassName,
  trustIndicators = [],
  trustLabelClassName,
  trustValueClassName,
}: CTASectionProps) {
  return (
    <section
      className={cn(
        "relative isolate overflow-hidden bg-brand-strong text-white",
        className,
      )}
    >
      <Image
        alt={imageAlt}
        className="premium-background-image absolute inset-0 -z-20 size-full object-cover object-center"
        fill
        sizes="100vw"
        src={image}
      />
      <div
        className={cn(
          "absolute inset-0 -z-10 bg-[linear-gradient(90deg,rgba(2,6,46,0.98),rgba(3,8,63,0.84)_48%,rgba(3,8,63,0.58)),linear-gradient(180deg,rgba(3,8,63,0.32),rgba(3,8,63,0.96)),radial-gradient(circle_at_80%_20%,rgba(248,196,0,0.22),transparent_26rem)]",
          overlayClassName,
        )}
      />

      <Container className={spacingTokens.sectionGrand}>
        <div
          className={cn(
            "grid gap-12 lg:grid-cols-[1fr_0.78fr] lg:items-end",
            innerGridClassName,
          )}
        >
          <FadeIn>
            <Badge className="border-white/20 bg-white/10 text-accent">
              {eyebrow}
            </Badge>
            <SplitLineReveal
              as="h2"
              className="mt-6 max-w-5xl text-balance text-[clamp(3.4rem,9vw,7.5rem)] font-black leading-[0.9] text-white"
              lines={title}
              trigger="load"
            />
            <p className="mt-8 max-w-2xl text-base leading-8 text-blue-50/78 sm:text-xl sm:leading-9">
              {description}
            </p>
            {actions ? (
              <div className="mt-10 flex flex-col gap-3 sm:flex-row">
                {actions}
              </div>
            ) : null}
          </FadeIn>

          {trustIndicators.length > 0 ? (
            <FadeIn
              className={cn(
                "grid w-full gap-3 sm:grid-cols-2 lg:justify-self-end",
                trustGridClassName,
              )}
            >
              {trustIndicators.map((indicator, index) => (
                <StatCard
                  className={trustCardClassName}
                  index={index}
                  key={indicator}
                  labelClassName={trustLabelClassName}
                  revealDelay={index * 0.06}
                  value={indicator}
                  valueClassName={trustValueClassName}
                />
              ))}
            </FadeIn>
          ) : null}
        </div>
      </Container>
    </section>
  );
}
