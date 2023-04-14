import Link from 'next/link';
import MovieCardPreview from '../../../src/components/movie-card/movie-card-preview/movie-card-preview';
import getLatestMovie from '../../../src/utils/handlers/getLatestMovie';
interface TopsParams {
  params: {
    type: string;
  };
}

const Tops = async ({ params }: TopsParams) => {
  const query = await params.type.toUpperCase();
  const movieItem = await getLatestMovie(query, 1);
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
      <h1 className='py-4 col-start-6 col-span-2 text-center'>Новинки {type}</h1>
      <div className='grid md:grid-cols-2 gap-2 pb-20 px-1'>
        {movieItem.items?.map((movie: any) => (
          <Link
            href={`lists/${params.type}/${movie.kinopoiskId}`}
            key={movie.kinopoiskId}
          >
            <MovieCardPreview props={movie} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Tops;
