import { SectionHeader } from "@/components/ui/section-header";

type SectionHeadingProps = {
  eyebrow?: string;
  title: string;
  description?: string;
  className?: string;
};

export function SectionHeading({
  eyebrow,
  title,
  description,
  className,
}: SectionHeadingProps) {
  return (
    <SectionHeader
      className={className}
      description={description}
      eyebrow={eyebrow}
      headingLevel="h1"
      title={title}
    />
  );
}
