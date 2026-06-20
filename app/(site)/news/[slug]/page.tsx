import { notFound } from "next/navigation";

import { PageScaffold } from "@/components/sections/page-scaffold";
import { newsItems } from "@/data/news";

type NewsArticlePageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export function generateStaticParams() {
  return newsItems.map((item) => ({
    slug: item.slug,
  }));
}

export default async function NewsArticlePage({ params }: NewsArticlePageProps) {
  const { slug } = await params;
  const article = newsItems.find((item) => item.slug === slug);

  if (!article) {
    notFound();
  }

  return (
    <PageScaffold
      eyebrow="News"
      title={article.title}
      description={article.excerpt}
      scope={[
        "Article hero structure",
        "Rich editorial body area",
        "Related stories and enquiry CTA",
      ]}
    />
  );
}
