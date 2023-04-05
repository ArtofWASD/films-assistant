import getMovie from '../../../../src/utils/handlers/getMovieHandler';
import MovieCard from '../../../../src/components/movie-card/movie-card';
import Button from '../../../../src/utils/ui/button';
interface FilmPageParams {
  params: {
    filmid: number;
  };
}
const FilmPage = async ({ params }: FilmPageParams) => {
  const item = await getMovie(params.filmid);
  return (
    <>
      <section className='flex justify-center'>
        <MovieCard props={item} />
      </section>
      <div>
        <Button/>
      </div>
    </>
  );
};

export default FilmPage;
