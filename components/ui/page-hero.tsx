import Image from "next/image";

import { FadeIn } from "@/components/motion/fade-in";
import { Badge } from "@/components/ui/badge";
import { Container } from "@/components/ui/container";
import { StatCard } from "@/components/ui/stat-card";
import { cn } from "@/lib/utils";
import { spacingTokens, typographyTokens } from "@/lib/design-system";

type PageHeroStat = {
  label: string;
  value: string;
};

type PageHeroProps = {
  className?: string;
  description: string;
  eyebrow: string;
  image: string;
  imageAlt?: string;
  priority?: boolean;
  stats?: PageHeroStat[];
  title: string;
};

export function PageHero({
  className,
  description,
  eyebrow,
  image,
  imageAlt = "",
  priority = true,
  stats = [],
  title,
}: PageHeroProps) {
  return (
    <section
      className={cn(
        "relative isolate overflow-hidden bg-brand-strong text-white",
        className,
      )}
    >
      <div className="absolute inset-0 -z-10">
        <Image
          alt={imageAlt}
          className="size-full object-cover"
          fill
          priority={priority}
          sizes="100vw"
          src={image}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-brand-strong via-brand-strong/88 to-brand-strong/35" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_78%_16%,rgba(248,196,0,0.22),transparent_28rem)]" />
      </div>

      <Container className={spacingTokens.sectionCompact}>
        <FadeIn className="max-w-4xl">
          <Badge className="border-white/20 bg-white/10 text-accent">
            {eyebrow}
          </Badge>
          <h1 className={cn("mt-6 text-white", typographyTokens.pageHero)}>
            {title}
          </h1>
          <p className="mt-6 max-w-2xl text-pretty text-base leading-8 text-blue-50/80 sm:text-lg">
            {description}
          </p>
        </FadeIn>

        {stats.length > 0 ? (
          <div className="mt-12 grid gap-3 border-t border-white/15 pt-7 sm:grid-cols-3 lg:max-w-4xl">
            {stats.map((stat) => (
              <StatCard
                className="rounded-none"
                key={stat.label}
                label={stat.label}
                value={stat.value}
              />
            ))}
          </div>
        ) : null}
      </Container>
    </section>
  );
}
