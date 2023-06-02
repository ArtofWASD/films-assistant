import Link from 'next/link';
import MovieCardPreview from '../../../src/components/movie-card/movie-card-preview/movie-card-preview';
import Pagination from '../../../src/components/pagination/pagination';
import getLatestMovie from '../../../src/utils/handlers/getLatestMovie';
interface PageProps {
  params: {
    type: string;
  };
  searchParams?: {
    page: number;
  };
}

const Tops = async ({ params, searchParams }: any) => {
  const query = await params?.type.toUpperCase();
  let movieItem: any = '';
  searchParams?.page === undefined
    ? (movieItem = await getLatestMovie(query, 1))
    : (movieItem = await getLatestMovie(query, searchParams.page));
  const chunkSize = 4;
  const chunkedArray = Array.from(
    { length: Math.ceil(movieItem.items.length / chunkSize) },
    (_, index) =>
      movieItem.items.slice(index * chunkSize, index * chunkSize + chunkSize)
  );

  let type = '';
  switch (params.type) {
    case 'tv_series':
      type = 'тв сериалов.';
      break;
    case 'film':
      type = 'фильмов.';
      break;
    case 'mini_series':
      type = 'мини сериалов.';
      break;
    case 'tv_show':
      type = 'тв-шоу.';
      break;
    default:
      type = '';
  }

  return (
    <div>
      <h1 className='py-4 text-center mt-12'>Новинки {type}</h1>
      <div className='flex justify-center gap-0 pb-20 px-5 md:px-1'>
        {chunkedArray.map((chunk, index) => (
          <div key={index}>
            {chunk.map((element: any) => (
              <div key={element.id} className='flex'> 
                <Link
                  href={`lists/${params.type}/${element.kinopoiskId}`}
                  key={element.kinopoiskId}
                >
                  <MovieCardPreview props={element} key={element.kinopoiskId} />
                </Link>
              </div>
            ))}
          </div>
        ))}
      </div>
      <div className='pb-10'>
        <Pagination
          totalPages={movieItem?.totalPages}
          currentPage={searchParams?.page}
          type={params.type}
        />
      </div>
    </div>
  );
};

export default Tops;
