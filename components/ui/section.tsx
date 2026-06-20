import { cn } from "@/lib/utils";
import { spacingTokens } from "@/lib/design-system";

type SectionProps = React.ComponentPropsWithoutRef<"section">;

export function Section({ className, ...props }: SectionProps) {
  return (
    <section
      className={cn("scroll-mt-[84px]", spacingTokens.section, className)}
      {...props}
    />
  );
}
