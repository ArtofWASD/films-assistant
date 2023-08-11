
import MovieCard from '../../../../src/components/movie-card/movie-card';
import getMovueById from '../../../../src/utils/handlers/getMovieById';
interface FilmPageParams {
  params: {
    filmid: number;
  };
}
const FilmPage = async ({ params }: FilmPageParams) => {
const film = await getMovueById(params.filmid);

  return (
    <div className="my-16 text-white">
      <MovieCard props={film} params={params}/>
    </div>
  );
};
export default FilmPage;
