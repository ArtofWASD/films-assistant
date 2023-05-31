import MovieCardPreview from '../src/components/movie-card/movie-card-preview/movie-card-preview';
import getFilmsReleases from '../src/utils/handlers/getFilmsRealese';
import getLatestMovie from '../src/utils/handlers/getLatestMovie';

const Page = async () => {

  const newRealases = await getFilmsReleases();
  const filtredNewRealases = await newRealases.releases.slice(0,5)
  const newFilms = await getLatestMovie('FILM', 1);
  console.log(filtredNewRealases);
  
  return (
    <main className='flex flex-col justify-items-cente'>
      <h1 className='text-center mt-16 pb-4 '>
        Кинотаймер. Твой личный кинокалендарь!
      </h1>
      <div className='flex flex-wrap justify-center gap-10 px-5 md:px-1 py-10 bg-slate-300 bg-opacity-30 '>
        {filtredNewRealases.map((item: any) => (
          <MovieCardPreview props={item} key={item.id} />
        ))}
      </div>
      {/* <div className='flex flex-wrap justify-center gap-10 px-5 md:px-1 py-4 bg-amber-300 bg-opacity-30 pb-20'>
      {newFilms.items?.map((item: any) => (
          <MovieCardPreview props={item} key={item.id} />
        ))}
      </div> */}
    </main>
  );
};

export default Page;
