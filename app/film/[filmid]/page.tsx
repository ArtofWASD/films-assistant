import React from 'react';
import getMovie from '../../../src/utils/handlers/getMovieHandler';
import MovieCard from '../../../src/components/movie-card/movie-card';
interface FilmPageParams {
  params: string;
}
const FilmPage = async ({ params }: FilmPageParams) => {
  const item = await getMovie();
  return (
    <>
      <MovieCard props={item} />
    </>
  );
};

export default FilmPage;
