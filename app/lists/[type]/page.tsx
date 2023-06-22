import Link from 'next/link';
import MovieCardPreview from '../../../src/components/movie-card/movie-card-preview/movie-card-preview';
import Pagination from '../../../src/components/pagination/pagination';
import getLatestMovie from '../../../src/utils/handlers/getLatestMovie';
import newApi from '../../../src/utils/handlers/galeryApi';
interface PageProps {
  params: {
    type: string;
  };
  searchParams?: {
    page: number;
  };
}

const Tops = async ({ params, searchParams }: PageProps) => {
  const query = await params?.type.toUpperCase();
  let movieItem: any = '';
  searchParams?.page === undefined
    ? (movieItem = await getLatestMovie(query, 1))
    : (movieItem = await getLatestMovie(query, searchParams.page));
  const newFilmsApi = await newApi();

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
      <h1 className='py-4 text-center mt-10 text-white'>Новинки {type}</h1>

      <div className='body'>
        <div className='wrapper grid grid-cols-3 text-black'>
          {newFilmsApi.docs.map((item: any, index: number) => (
            <div key={index} className={`box ${getBoxClass(index)}`}>
              <Link
                href={`${params.type}/${item.id}`}
                key={item.kinopoiskId}
              >
                <MovieCardPreview props={item} key={item.kinopoiskId} />
              </Link>
            </div>
          ))}
        </div>
      </div>
      <div className='pb-10'>
        {/* {searchParams && (
          <>
            <Pagination
              totalPages={movieItem?.totalPages}
              currentPage={searchParams?.page}
              type={params.type}
            />
          </>
        )} */}
      </div>
    </div>
  );
};
const getBoxClass = (index: number) => {
  if (index % 5) {
    return 'col-span-1 row-span-1';
  } else {
    return 'col-span-1 row-span-2';
  }
};

export default Tops;
