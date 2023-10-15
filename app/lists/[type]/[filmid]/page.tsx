import MovieCard from '../../../../src/components/movie-card/movie-card';
import getMovueById from '../../../../src/utils/handlers/getMovieById';
interface FilmPageParams {
  params: {
    filmid: number;
  };
}
const FilmPage = async ({ params: { filmid } }: FilmPageParams) => {
  const film = await getMovueById(filmid);

  return (
    <div className='my-16 text-white'>
      <MovieCard props={film} params={filmid} />
    </div>
  );
};
export default FilmPage;
