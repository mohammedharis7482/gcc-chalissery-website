import type { ComponentType, SVGProps } from "react";

import { FadeIn } from "@/components/motion/fade-in";
import { cn } from "@/lib/utils";

type FeatureCardProps = React.ComponentPropsWithoutRef<"article"> & {
  description: string;
  icon?: ComponentType<SVGProps<SVGSVGElement>>;
  title: string;
  variant?: "dark" | "light";
};

export function FeatureCard({
  className,
  description,
  icon: Icon,
  title,
  variant = "dark",
  ...props
}: FeatureCardProps) {
  const isDark = variant === "dark";

  return (
    <FadeIn className="h-full" variant="scaleIn">
      <article
        className={cn(
          "group relative h-full overflow-hidden rounded-[1rem] p-5 transition duration-300 hover:-translate-y-1 sm:p-6",
          isDark
            ? "border border-white/10 bg-white/[0.075] text-white shadow-2xl shadow-black/10 backdrop-blur-md hover:border-accent/55 hover:bg-white/[0.1]"
            : "border border-brand/10 bg-white text-neutral-950 shadow-xl shadow-brand/5 hover:border-accent/65",
          className,
        )}
        {...props}
      >
        <div className="absolute left-5 top-0 h-0.5 w-16 bg-gradient-to-r from-accent to-transparent" />
        <div className="flex items-center gap-3">
          {Icon ? (
            <div
              className={cn(
                "grid size-10 shrink-0 place-items-center rounded-full shadow-lg shadow-black/10 transition",
                isDark
                  ? "bg-white/10 text-accent group-hover:bg-accent group-hover:text-brand-strong"
                  : "bg-brand/5 text-brand group-hover:bg-accent group-hover:text-brand-strong",
              )}
            >
              <Icon className="size-5" aria-hidden="true" />
            </div>
          ) : null}
          <h3
            className={cn(
              "text-lg font-black leading-tight",
              isDark ? "text-white" : "text-brand-strong",
            )}
          >
            {title}
          </h3>
        </div>
        <p
          className={cn(
            "mt-4 text-sm leading-7",
            isDark ? "text-blue-50/72" : "text-neutral-600",
          )}
        >
          {description}
        </p>
      </article>
    </FadeIn>
  );
}
