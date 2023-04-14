import MovieCardPreview from '../src/components/movie-card/movie-card-preview/movie-card-preview';
import getFilmsReleases from '../src/utils/handlers/getFilmsRealese';


const Page = async () => {
  const newRealases = await getFilmsReleases()  
  return (
    <main>
      <h1 className='text-center mt-16'>
        Кинотаймер. Твой личный кинокалендарь!
      </h1>
      <div className='mb-16'>
        {newRealases.releases?.map((item:any) => (
          <div className="" key={item.filmId}>
          <MovieCardPreview props={item} />
          </div>
        ))}
      </div>
    </main>
  );
};

export default Page;
