import getMovie from '../../../../src/utils/handlers/getMovieHandler';
import MovieCard from '../../../../src/components/movie-card/movie-card';
import Button from '../../../../src/utils/ui/button';
import Tabs from '../../../../src/components/movie-card/movie-card-utils/tabs/tabs';
import getActorsByFilmId from '../../../../src/utils/handlers/getActorsByFilmId';
import ActrosList from '../../../../src/components/actorsList/actrosList';
interface FilmPageParams {
  params: {
    filmid: number;
  };
}
const FilmPage = async ({ params }: FilmPageParams) => {
  const item = await getMovie(params.filmid);
  const actorsList = await getActorsByFilmId(params.filmid);
  const filteredActorList = await actorsList.filter((actor:any) => {
    return actor.professionKey === 'ACTOR'
  })
  const filteredDirectorList = await actorsList.filter((actor:any) => {
    return actor.professionKey === 'DIRECTOR'
  })

  return (
    <>
      <Tabs
        film={<MovieCard props={item} />}
        actors={<ActrosList actors={filteredActorList} director={filteredDirectorList} />}
      />
    </>
  );
};
export default FilmPage;
