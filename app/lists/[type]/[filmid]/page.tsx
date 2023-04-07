import getMovie from '../../../../src/utils/handlers/getMovieHandler';
import MovieCard from '../../../../src/components/movie-card/movie-card';
import Button from '../../../../src/utils/ui/button';
import Tabs from '../../../../src/components/tabs/tabs';
interface FilmPageParams {
  params: {
    filmid: number;
  };
}
const FilmPage = async ({ params }: FilmPageParams) => {
  const item = await getMovie(params.filmid);
  return (
    <>
      <Tabs props={<MovieCard props={item}/> } />
      <div>
        <Button/>
      </div>
    </>
  );
}
export default FilmPage
