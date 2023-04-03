'use client';
import Link from 'next/link';
import React from 'react';
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
      <ul className='pagination flex gap-2 justify-center'>
        {prevPage > 0 && (
          <li className='page-item'>
            <Link href={`/tops/${filmType}?page=${prevPage}`}>
              <p className='page-link'>Previous</p>
            </Link>
          </li>
        )}

        {pages.map(page => (
          <li
            key={page}
            className={`page-item${currentPage === page ? ' active' : ''}`}
          >
            <Link
              href={`/tops/${filmType}?page=${page}`}
              onClick={() => {
                getLatestMovie(filmType, page);
              }}
            >
              <p className='page-link'>{page}</p>
            </Link>
          </li>
        ))}

        {nextPage <= totalPages && (
          <li className='page-item'>
            <Link href={`/tops/${filmType}?page=${nextPage}`}>
              <p className='page-link'>Next</p>
            </Link>
          </li>
        )}
      </ul>
    </nav>
  );
};

export default Pagination;
