import React from 'react';
import getMovie from '../../../src/utils/handlers/getMovieHandler';
import MovieCard from '../../../src/components/movie-card/movie-card';
interface FilmPageParams {
  params: {
    filmid: number
  }
}
const FilmPage = async ({ params }: FilmPageParams) => {
  const item = await getMovie(params.filmid);
  
  return (
    <div className='flex justify-center'>
      <MovieCard props={item} />
    </div>
  );
};

export default FilmPage;
