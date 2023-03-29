import React from 'react';
import MovieCard from '../../src/components/movie-card/movie-card';

const Tops = () => {
  return (
    <>
      <div className='grid grid-flow-col gap-4 py-4'>
        <MovieCard />
        <MovieCard />
        <MovieCard />
        <MovieCard />
      </div>
    </>
  );
};

export default Tops;
