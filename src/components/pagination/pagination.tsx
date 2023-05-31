'use client';
import Link from 'next/link';
interface PaginationProps {
  currentPage: number;
  totalPages: number;
  filmType?: string;
  type?: string;
}

const Pagination: React.FC<PaginationProps> = ({
  currentPage,
  totalPages,
  type,
}) => {
  const prevPage = currentPage - 1;
  const nextPage = currentPage + 1;
  const pages = Array.from({ length: totalPages }, (_, i) => i + 1);
  return (
    <nav>
      <ul className='pagination flex gap-2 justify-center pb-10'>
        {prevPage > 0 && (
          <li className='page-item'>
            <p className='page-link'>Previous</p>
          </li>
        )}

        {pages.map(page => (
          <li
            key={page}
            className={`page-item${currentPage == page ? 'font-semibold' : ''}`}
          >
            <Link href={`/lists/${type}?page=${page}`}>
              <p
                className='page-link cursor-pointer'
                onClick={() => {
                  window.scrollTo(0, 0);
                }}
              >
                {page}
              </p>
            </Link>
          </li>
        ))}

        {nextPage <= totalPages && (
          <li className='page-item'>
            <Link href={`/lists/${type}?page=${nextPage}`}>
              <p className='page-link'>Next</p>
            </Link>
          </li>
        )}
      </ul>
    </nav>
  );
};

export default Pagination;
