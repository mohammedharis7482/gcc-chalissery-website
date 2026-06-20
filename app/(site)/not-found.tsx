import Link from "next/link";

import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";

export default function NotFound() {
  return (
    <Section className="min-h-[64vh]">
      <Container>
        <p className="text-sm font-semibold uppercase tracking-[0.16em] text-emerald-800">
          404
        </p>
        <h1 className="mt-4 text-4xl font-bold text-neutral-950">
          Page not found
        </h1>
        <p className="mt-4 max-w-xl text-neutral-700">
          This route is not part of the current academy website structure.
        </p>
        <Link
          className="mt-8 inline-flex h-11 items-center bg-emerald-700 px-5 text-sm font-semibold text-white transition hover:bg-emerald-800"
          href="/"
        >
          Return home
        </Link>
      </Container>
    </Section>
  );
}
