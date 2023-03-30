import React from 'react';
import getMovie from '../../../src/utils/handlers/getMovieHandler';
import MovieCard from '../../../src/components/movie-card/movie-card';

const FilmPage = async () => {
  const item = await getMovie();
  return (
    <>
      <MovieCard props={item} />
    </>
  );
};

export default FilmPage;
