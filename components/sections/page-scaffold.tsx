import { CheckCircle2 } from "lucide-react";

import { FadeIn } from "@/components/motion/fade-in";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { SectionHeading } from "@/components/ui/section-heading";

type PageScaffoldProps = {
  eyebrow: string;
  title: string;
  description: string;
  scope: string[];
};

export function PageScaffold({
  eyebrow,
  title,
  description,
  scope,
}: PageScaffoldProps) {
  return (
    <Section className="min-h-[64vh] bg-white">
      <Container>
        <FadeIn>
          <SectionHeading
            eyebrow={eyebrow}
            title={title}
            description={description}
          />
        </FadeIn>
        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {scope.map((item) => (
            <div
              className="border border-neutral-200 bg-neutral-50 p-5"
              key={item}
            >
              <CheckCircle2
                className="size-5 text-emerald-700"
                aria-hidden="true"
              />
              <p className="mt-4 text-sm font-semibold leading-6 text-neutral-800">
                {item}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </Section>
  );
}
