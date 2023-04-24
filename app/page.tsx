import MovieCardPreview from '../src/components/movie-card/movie-card-preview/movie-card-preview';
import getFilmsReleases from '../src/utils/handlers/getFilmsRealese';


const Page = async () => {
  const newRealases = await getFilmsReleases()  
  return (
    <main className="grid justify-items-center">
      <h1 className='text-center mt-16'>
        Кинотаймер. Твой личный кинокалендарь!
      </h1>
      <div className='grid grid-cols-1 md:grid-cols-2 mb-16 justify-center gap-4 px-5 md:px-1'>
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
