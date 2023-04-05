import Link from 'next/link';
import MovieCardPreview from '../../../src/components/movie-card/movie-card-preview/movie-card-preview';
import getLatestMovie from '../../../src/utils/handlers/getLatestMovie';
import Button from '../../../src/utils/ui/button';

interface TopsParams {
  params: {
    type:string;
  };
}

const Tops = async ({ params }: TopsParams) => {
  const query = await params.type.toUpperCase()
  const movieItem = await getLatestMovie(query, 1);  
  return (
    <section>
      <Button/>
      <div className='grid grid-cols-2 gap-4'>
        {movieItem?.items?.map((movie: any) => (
          <Link href={`lists/${params.type}/${movie.kinopoiskId}`} key={movie.kinopoiskId}>
            <div>
              <MovieCardPreview props={movie} />
            </div>
          </Link>
        ))}
      </div>
      
    </section>
  );
};

export default Tops;
