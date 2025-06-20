import Image from "next/image";
import {
  Card,
  CardHeader,
  CardContent,
  CardFooter,
} from '@/components/ui/card';
import { Article as ArticleType } from "@/lib/types";

interface ArticleProps {
    article: ArticleType
};

export default function Article( { article }: ArticleProps ) {
   return (
    <Card
      className={`
        relative flex flex-col rounded-2xl border border-slate-200 bg-white
        p-6 shadow shadow-slate-950/5
        transition-shadow duration-300 filter
        hover:drop-shadow-[0_0_20px_rgba(252,211,77,0.7)]
      `}
    >
      {/* HEADER */}
      <CardHeader className="p-0 mb-4">
        <div className="flex items-start justify-between gap-3">
          <div className="flex items-center gap-3">
            <Image
              className="shrink-0 rounded-full"
              src={article.img}
              width={44}
              height={44}
              alt={article.title}
            />
            <div>
              <div className="font-bold leading-tight text-slate-900">
                {article.title}
              </div>
              {article.name && (
                <div>
                  <a
                    className="text-sm font-medium text-slate-500 transition hover:text-indigo-500"
                    href="#0"
                  >
                    {article.name}
                  </a>
                </div>
              )}
            </div>
          </div>
          <a
            className="mt-1 shrink-0 text-indigo-500 transition hover:text-indigo-600"
            href="#0"
            tabIndex={-1}
          >
            <svg
              className="fill-current"
              xmlns="http://www.w3.org/2000/svg"
              width={17}
              height={15}
              fill="none"
            >
              <path
                fillRule="evenodd"
                d="M16.928 14.054H11.99L8.125 9.162l-4.427 4.892H1.243L6.98 7.712.928.054H5.99L9.487 4.53 13.53.054h2.454l-5.358 5.932 6.303 8.068Zm-4.26-1.421h1.36L5.251 1.4H3.793l8.875 11.232Z"
              />
            </svg>
          </a>
        </div>
      </CardHeader>

      {/* CONTENT */}
      <CardContent className="p-0 grow text-sm text-slate-600">
        {article.content}
      </CardContent>

      {/* FOOTER */}
      <CardFooter className="p-0 mt-4 flex items-center gap-2.5 text-slate-500">
        <div className="text-xs">{article.date}</div>
      </CardFooter>
    </Card>
  );
}