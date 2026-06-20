import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";

export default function Loading() {
  return (
    <Section>
      <Container>
        <div className="h-4 w-36 animate-pulse bg-emerald-100" />
        <div className="mt-6 h-12 max-w-xl animate-pulse bg-neutral-200" />
        <div className="mt-4 h-5 max-w-2xl animate-pulse bg-neutral-100" />
      </Container>
    </Section>
  );
}
