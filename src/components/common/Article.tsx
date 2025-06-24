'use client';

import Image from 'next/image';
import { Bookmark } from 'lucide-react';
import { Card } from '@/components/ui/card';
import { Article as ArticleType } from "@/lib/types";

export function Article({ article }: { article: ArticleType }) {
  return (
    <Card
      className="
        flex items-start border border-slate-200 rounded-2xl
        p-6 shadow-sm transition-shadow duration-200
        hover:shadow-[0_0_20px_rgba(252,211,77,0.7)]
      "
    >
      {/* Avatar */}
      <div className="flex-shrink-0">
        <Image
          src={article.img}
          alt={article.name}
          width={40}
          height={40}
          className="rounded-full"
        />
      </div>

      {/* Main content */}
      <div className="flex-1 ml-4">
        {/* Name / Username / Date row */}
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2 text-sm">
            <span className="font-medium text-slate-900">{article.title}</span>
            {/* {article.name && (
              <a
                href={`https://twitter.com/${article.username}`}
                className="text-slate-500 hover:text-indigo-500 transition"
                target="_blank"
                rel="noopener noreferrer"
              >
                @{article.name}
              </a>
            )} */}
          </div>
          <span className="text-xs text-slate-500">{article.date}</span>
        </div>

        {/* “Title” or main heading (we’ll reuse content here) */}
        <h3 className="mt-2 text-lg font-semibold text-slate-900">
          {article.content}
        </h3>

        {/* Optional excerpt / description */}
        {article.content.length > 100 && (
          <p className="mt-1 text-sm text-slate-600 line-clamp-2">
            {article.content}
          </p>
        )}
      </div>

      {/* Bookmark icon on the far right */}
      <button className="ml-4 flex-shrink-0 text-slate-400 hover:text-slate-600 transition">
        <Bookmark />
      </button>
    </Card>
  );
}