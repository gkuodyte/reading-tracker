"use client";

import useMasonry from "@/hooks/useMasonry";
import Article from "@/components/Article";
import { Article as ArticleType} from "@/lib/types";

interface MasonryProps {
    articles: ArticleType[]
};

export default function MasonryPage({ articles }: MasonryProps) {
  const masonryContainer = useMasonry();

  return (
    <div
      ref={masonryContainer}
      className="grid items-start gap-4 md:grid-cols-3 md:gap-6"
    >
      {articles.map((article, index) => (
        <Article key={index} article={article} />
      ))}
    </div>
  );
}