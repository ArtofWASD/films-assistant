import React from 'react';
import getMovie from '../../../../src/utils/handlers/getMovieHandler';
import MovieCard from '../../../../src/components/movie-card/movie-card';
interface FilmPageParams {
  params: {
    filmid: number
  }
}
const FilmPage = async ({ params }: FilmPageParams) => {
  console.log(params);
  
  const item = await getMovie(params.filmid);
  
  return (
    <section className='flex justify-center'>
      <MovieCard props={item} />
    </section>
  );
};

export default FilmPage;
