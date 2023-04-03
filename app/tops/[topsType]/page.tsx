import React from 'react';
import MovieCardPreview from '../../../src/components/movie-card/movie-card-preview/movie-card-preview';
import Pagination from '../../../src/components/pagination/pagination';
import getLatestMovie from '../../../src/utils/handlers/getLatestMovie';
interface TopsParams {
  params: {
    topsType:string
  }
}
const Tops = async ({ params }: TopsParams) => {
  const query = await params.topsType.toUpperCase()  
  const movieItem = await getLatestMovie(query, 1);
  console.log(movieItem);
   
  return (
    <section>
      <div className='grid grid-cols-2 gap-4'>
        {movieItem?.items.map((movie: any) => (
          <div key={movie.kinopoiskId}>
            <MovieCardPreview props={movie} />
          </div>
        ))}
      </div>
      <div className='pb-16 pt-4'><Pagination currentPage={1} totalPages={movieItem.totalPages} filmType={query}/></div>
    </section>
  );
};

export default Tops;