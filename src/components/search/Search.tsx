// components/SearchPage.tsx
'use client';

import { useState, useMemo } from 'react';
import { Search } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Article as ArticleType } from '@/lib/types';
import Article from '../home/Article';
import Pagination from '../common/Pagination';

enum Category {
  ARTICLES = 'articles',
  AUTHORS = 'authors',
}

export default function SearchPage({ articles }: { articles: ArticleType[] }) {
  const [query, setQuery] = useState('');
  const [category, setCategory] = useState<Category>(Category.ARTICLES);
  const [page, setPage] = useState(1);

  // simple filter: match name or content
  const filtered = useMemo(() => {
    const q = query.toLowerCase();
    return articles.filter(article =>
      article.name.toLowerCase().includes(q) ||
      article.content.toLowerCase().includes(q)
    );
  }, [articles, query]);

  const ITEMS_PER_PAGE = 5;
  const totalPages = Math.ceil(filtered.length / ITEMS_PER_PAGE);
  const slice = filtered.slice((page - 1) * ITEMS_PER_PAGE, page * ITEMS_PER_PAGE);

  // reset page when category or query changes
  const reset = () => setPage(1);
  const onCategoryClick = (cat: Category) => {
    setCategory(cat);
    reset();
  };

  return (
    <div className="max-w-3xl mx-auto py-8 px-4 space-y-6 mt-20">
      {/* Search bar */}
      <div className="relative">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none" />
        <Input
          className="pl-10"
          placeholder="Search articles or authors…"
          value={query}
          onChange={e => { setQuery(e.target.value); reset(); }}
        />
      </div>

      {/* Toggle buttons */}
      <div className="flex space-x-3">
        <Button
          variant={category === Category.ARTICLES ? 'default' : 'outline'}
          onClick={() => onCategoryClick(Category.ARTICLES)}
        >
          Articles
        </Button>
        <Button
          variant={category === Category.AUTHORS ? 'default' : 'outline'}
          onClick={() => onCategoryClick(Category.AUTHORS)}
        >
          Authors
        </Button>
      </div>

      {/* Results list */}
      <div className="space-y-4">
        {slice.map((item, idx) => (
          <Article key={idx} article={item} />
        ))}
        {slice.length === 0 && (
          <p className="text-center text-sm text-slate-500">
            No {category} found.
          </p>
        )}
      </div>

      {/* Pagination */}
      <Pagination pages={totalPages} page={page} setPage={setPage} />
    </div>
  );
}