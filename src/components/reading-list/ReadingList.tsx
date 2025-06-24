'use client';

import { Article as ArticleType } from '@/lib/types';
import { useState } from 'react';
import { Article } from '../common/Article';
import Pagination from '../common/Pagination';

export default function ReadingList({ articles }: { articles: ArticleType[] }) {
  const ITEMS_PER_PAGE = 6;
  const totalPages = Math.ceil(articles.length / ITEMS_PER_PAGE);
  const [page, setPage] = useState(1);

  const start = (page - 1) * ITEMS_PER_PAGE;
  const end = start + ITEMS_PER_PAGE;
  const slice = articles.slice(start, end);

  return (
    <div className="max-w-3xl mx-auto space-y-6 py-8 mt-20">
      {/* Title */}
      <h2 className="text-2xl font-bold">Recent</h2>

      {/* List of up to 10 cards */}
      <div className="flex flex-col gap-4">
        {slice.map((t, idx) => (
          <Article key={idx} article={t} />
        ))}
      </div>

      {/* Simple Pagination */}
      <Pagination pages={totalPages} page={page} setPage={setPage} />
    </div>
  );
}