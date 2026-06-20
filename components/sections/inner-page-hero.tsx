import { PageHero } from "@/components/ui/page-hero";

type InnerPageHeroProps = {
  eyebrow: string;
  title: string;
  description: string;
  image: string;
  stats?: {
    label: string;
    value: string;
  }[];
};

export function InnerPageHero(props: InnerPageHeroProps) {
  return <PageHero {...props} />;
}
