import React from 'react';
import MovieCardPreview from '../../src/components/movie-card/movie-card-preview/movie-card-preview';
import getLatestMovie from '../../src/utils/handlers/getLatestMovie';

const Tops = async () => {
  const movieItem = await getLatestMovie();
  console.log(movieItem);

  return (
    <>
      <div className='grid grid-cols-2 gap-4'>
        {movieItem?.items.map((movie: any) => (
          <div>
            <MovieCardPreview props={movie} />
          </div>
        ))}
      </div>
    </>
  );
};

export default Tops;
