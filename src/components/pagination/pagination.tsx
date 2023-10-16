'use client';
import Link from 'next/link';
import Image from 'next/image';

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
    currentPage = 0;
  }
  const prevPage = Number(currentPage) - 1;
  const nextPage = Number(currentPage) + 1;
  const pages = Array.from({ length: totalPages }, (_, i) => i + 1).slice(currentPage-1, currentPage + 10);

  return (
    <nav>
      <ul className='pagination flex gap-3 justify-center pb-10 items-center'>
      {prevPage > 0 && (
          <li className='pagination-prev'>
            <Link href={`/lists/${type}`}>
             <p className='text-white font-semibold'>В начало</p>
            </Link>
          </li>
        )}
        {prevPage > 0 && (
          <li className='pagination-prev'>
            <Link href={`/lists/${type}?page=${prevPage}`}>
              <Image
                src={'/images/prew.png'}
                alt={'next'}
                width={0}
                height={0}
                sizes='100vw'
                className='w-8 h-8 cursor-pointer hover:scale-125 hover:-translate-x-2 transition-transform'
              />
            </Link>
          </li>
        )}
        {pages.map(page => (
          <li
            key={page}
            className={`pagination-items transition-transform text-xl font-semibold  hover:scale-125 hover:-translate-y-2 
            ${currentPage === page ? 'active-page text-orange-600 scale-125' : 'text-slate-600'}`}
          >
            <Link href={`/lists/${type}?page=${page}`}>
              <p className='page-link cursor-pointer'>{page}</p>
            </Link>
          </li>
        ))}
        {currentPage < pages.length && (
          <li className='pagination-next'>
            <Link href={`/lists/${type}?page=${nextPage}`}>
              <Image
                src={'/images/next.png'}
                alt={'next'}
                width={0}
                height={0}
                sizes='100vw'
                className='w-8 h-8 cursor-pointer hover:scale-125 hover:translate-x-2 transition-transform'
              />
            </Link>
          </li>
        )}
        {currentPage < pages.length && (
          <li className='pagination-next'>
            <Link href={`/lists/${type}?page=${totalPages}`}>
              <p className='text-white font-semibold'>В конец</p>
            </Link>
          </li>
        )}
      </ul>
    </nav>
  );
};

export default Pagination;
