'use client';
import Link from 'next/link';
interface PaginationProps {
  currentPage: number;
  totalPages: number;
  type: string;
}

const Pagination: React.FC<PaginationProps> = ({
  currentPage,
  totalPages,
  type,
}) => {

  if (currentPage === undefined) {
    currentPage = 1
  }
  const prevPage = Number(currentPage) - 1;
  const nextPage = Number(currentPage) + 1;
  console.log(`Next ${nextPage}`);
  console.log(`Current ${currentPage}`);
 
  const pages = Array.from({ length: totalPages }, (_, i) => i + 1);

  return (
    <nav>
      <ul className='pagination flex gap-2 justify-center pb-10'>
        {prevPage > 0 && (
          <li className='page-item'>
          <Link href={`/lists/${type}?page=${prevPage}`}>
            <p className='page-link'>Назад</p>
          </Link>
        </li>
        )}
        {pages.map(page => (
          <li
            key={page}
            className={`page-item text-md ${currentPage == page ? 'font-bold text-slate-600' : ''}`}
          >
            <Link href={`/lists/${type}?page=${page}`}>
              <p
                className='page-link cursor-pointer'
                // onClick={() => {
                //   window.scrollTo(0, 0);
                // }}
              >
                {page}
              </p>
            </Link>
          </li>
        ))}
        {currentPage < pages.length && (
          <li className='page-item'>
            <Link href={`/lists/${type}?page=${nextPage}`}>
              <p className='page-link'>Вперёд</p>
            </Link>
          </li>
        )}
      </ul>
    </nav>
  );
};

export default Pagination;
