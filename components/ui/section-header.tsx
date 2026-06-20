import { FadeIn } from "@/components/motion/fade-in";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";
import { typographyTokens } from "@/lib/design-system";

type SectionHeaderProps = {
  align?: "left" | "center";
  className?: string;
  description?: string;
  eyebrow?: string;
  headingLevel?: "h1" | "h2" | "h3";
  invert?: boolean;
  title: string;
};

export function SectionHeader({
  align = "left",
  className,
  description,
  eyebrow,
  headingLevel = "h2",
  invert = false,
  title,
}: SectionHeaderProps) {
  const isCentered = align === "center";
  const Heading = headingLevel;

  return (
    <FadeIn
      className={cn(
        "max-w-4xl",
        isCentered && "mx-auto text-center",
        className,
      )}
    >
      {eyebrow ? (
        <Badge
          className={cn(
            invert
              ? "border-white/20 bg-white/10 text-accent"
              : "border-brand/10 bg-brand/5 text-brand",
          )}
        >
          {eyebrow}
        </Badge>
      ) : null}
      <Heading
        className={cn(
          "mt-6",
          typographyTokens.sectionTitle,
          invert ? "text-white" : "text-neutral-950",
        )}
      >
        {title}
      </Heading>
      {description ? (
        <p
          className={cn(
            "mt-6 max-w-2xl text-base leading-8 sm:text-lg",
            isCentered && "mx-auto",
            invert ? "text-blue-50/76" : "text-neutral-600",
          )}
        >
          {description}
        </p>
      ) : null}
    </FadeIn>
  );
}
