import React from 'react';
import MovieCardPreview from '../../src/components/movie-card/movie-card-preview/movie-card-preview';
import getMovie from '../../src/utils/handlers/getMovieHandler';

const Tops = async () => {
  const movieItem = await getMovie();
  console.log(movieItem);

  return (
    <>
      <div className='grid grid-cols-2 gap-4'>
        <MovieCardPreview props={movieItem} />
        <MovieCardPreview props={movieItem} />
        <MovieCardPreview props={movieItem} />
        <MovieCardPreview props={movieItem} />
        <MovieCardPreview props={movieItem} />
        <MovieCardPreview props={movieItem} />
      </div>
    </>
  );
};

export default Tops;
