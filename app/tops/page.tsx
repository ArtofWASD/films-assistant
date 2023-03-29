import React from 'react';
import MovieCard from '../../src/components/movie-card/movie-card';
import getMovie from '../../src/utils/handlers/getMovieHandler';

const Tops = async () => {
  const movieItems = await getMovie()
  console.log(movieItems);
  
  return (
    <>
      <div className='grid grid-flow-col auto-cols-auto grid-rows-3 gap-4 py-4'>
        <MovieCard image={movieItems.posterUrlPreview} title={movieItems.nameRu} description={movieItems.shortDescription} />
        <MovieCard image={movieItems.posterUrlPreview} title={movieItems.nameRu} description={movieItems.shortDescription}/>
        <MovieCard image={movieItems.posterUrlPreview} title={movieItems.nameRu} description={movieItems.shortDescription}/>
        <MovieCard image={movieItems.posterUrlPreview} title={movieItems.nameRu} description={movieItems.shortDescription}/>
        <MovieCard image={movieItems.posterUrlPreview} title={movieItems.nameRu} description={movieItems.shortDescription}/>
        <MovieCard image={movieItems.posterUrlPreview} title={movieItems.nameRu} description={movieItems.shortDescription}/>
        
      </div>
    </>
  );
};

export default Tops;
