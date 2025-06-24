import React from 'react'
import { Button } from '../ui/button'

export default function Pagination({ pages, page, setPage }: {
  pages: number,
  page: number,
  setPage: (page: number) => void
  }) {

    const prevPage = Math.max(page - 1, 1);
    const nextPage = Math.min(page + 1, pages);

  return (
    <>
        {pages > 1 && (
        <div className="flex justify-center items-center space-x-4 pt-4">
          <Button
            size="sm"
            variant="outline"
            disabled={page === 1}
            onClick={() => setPage(prevPage)}
          >
            Prev
          </Button>
          <span className="text-sm text-slate-600">
            Page {page} of {pages}
          </span>
          <Button
            size="sm"
            variant="outline"
            disabled={page === pages}
            onClick={() => setPage(nextPage)}
          >
            Next
          </Button>
        </div>
      )}
    </>
  )
}