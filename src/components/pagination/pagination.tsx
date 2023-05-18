'use client';
import Link from 'next/link';
import getLatestMovie from '../../utils/handlers/getLatestMovie';

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  filmType: string;
}

const Pagination: React.FC<PaginationProps> = ({
  currentPage,
  totalPages,
  filmType,
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
            className={`page-item${currentPage === page ? ' active' : ''}`}
          >
            <Link href={`/lists/${filmType}/${page}`}>
              <p
                className='page-link cursor-pointer'
                onClick={() => {
                  getLatestMovie(filmType, page);
                }}
              >
                {page}
              </p>
            </Link>
          </li>
        ))}

        {nextPage <= totalPages && (
          <li className='page-item'>
            <Link href={`/lists/${filmType}/${nextPage}`}>
              <p className='page-link'>Next</p>
            </Link>
          </li>
        )}
      </ul>
    </nav>
  );
};

export default Pagination;
