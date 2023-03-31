import React from 'react';
import MovieCardPreview from '../../../src/components/movie-card/movie-card-preview/movie-card-preview';
import getLatestMovie from '../../../src/utils/handlers/getLatestMovie';
interface TopsParams {
  params: {
    topsType:string
  }
}
const Tops = async ({ params }: TopsParams) => {
  const query = await params.topsType.toUpperCase()  
  const movieItem = await getLatestMovie(query);
  console.log(movieItem);
  
  return (
    <>
      <div className='grid grid-cols-2 gap-4 mb-16'>
        {movieItem?.items.map((movie: any) => (
          <div key={movie.kinopoiskId}>
            <MovieCardPreview props={movie} />
          </div>
        ))}
      </div>
    </>
  );
};

export default Tops;
