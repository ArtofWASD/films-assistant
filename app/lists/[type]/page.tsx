import Link from 'next/link';
import MovieCardPreview from '../../../src/components/movie-card/movie-card-preview/movie-card-preview';
import Pagination from '../../../src/components/pagination/pagination';
import getListsOfFilmsApi from '../../../src/utils/handlers/getListsOfFilmsApi';
interface PageProps {
  params: {
    type: string;
  };
  searchParams?: {
    page: number;
  };
}

const Tops = async ({ params, searchParams }: PageProps) => {
  let listOfFilms: any = '';
  searchParams?.page === undefined
   ? (listOfFilms = await getListsOfFilmsApi(params.type, 1))
   : (listOfFilms = await getListsOfFilmsApi(params.type, searchParams.page));
// старый код надо переделеать под новый апи

  let type = '';
  switch (params.type) {
    case 'tv-series':
      type = 'тв сериалов.';
      break;
    case 'film':
      type = 'фильмов.';
      break;
    case 'cartoon':
      type = 'мультфильмов.';
      break;
    case 'anime':
      type = 'аниме.';
      break;
    case 'animated-series':
      type = 'анимационных сериалов.';
      break;
    case 'tv-show':
      type = 'тв-шоу.';
      break;
    default:
      type = '';
  }
  return (
    <div>
      <h1 className='py-4 text-center mt-10 text-white'>Новинки {type}</h1>

      <div className='body'>
        <div className='flex flex-col gap-2 px-2 text-black'>
          {listOfFilms.docs.map((item: any, index: number) => (
            <div key={index} className={`box ${getBoxClass(index)}`}>
              <Link href={`${params.type}/${item.id}`} key={item.kinopoiskId}>
                <MovieCardPreview props={item} key={item.kinopoiskId} />
              </Link>
            </div>
          ))}
        </div>
      </div>
      <div className='pb-10'>
        {searchParams && (
          <>
            <Pagination
              totalPages={listOfFilms?.pages}
              currentPage={listOfFilms?.page}
              type={params.type}
            />
          </>
        )}
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
