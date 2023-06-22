
import MovieCard from '../../../../src/components/movie-card/movie-card';
import Tabs from '../../../../src/components/movie-card/movie-card-utils/tabs/tabs';
import getActorsByFilmId from '../../../../src/utils/handlers/getActorsByFilmId';
import ActrosList from '../../../../src/components/movie-card/movie-card-utils/actors-list/actros-list';
import AwardsList from '../../../../src/components/movie-card/movie-card-utils/awards-list/awards-list';
import getMovieAwards from '../../../../src/utils/handlers/getMovieAwards';
interface FilmPageParams {
  params: {
    filmid: number;
  };
}
const FilmPage = async ({ params }: FilmPageParams) => {
  
  // const item = await getMovie(params.filmid);
  const actorsList = await getActorsByFilmId(params.filmid);
  const awardsList = await getMovieAwards(params.filmid);

  const filteredActorList = await actorsList.filter((actor: any) => {
    return actor.professionKey === 'ACTOR';
  });
  const filteredDirectorList = await actorsList.filter((actor: any) => {
    return actor.professionKey === 'DIRECTOR';
  });

  return (
    <div className="my-16">
      {/* <Tabs
        film={<MovieCard props={item} />}
        actors={
          <ActrosList
            actors={filteredActorList}
            director={filteredDirectorList}
            params={params}
          />
        }
        awards={<AwardsList awards={awardsList} />}
      /> */}
    </div>
  );
};
export default FilmPage;
