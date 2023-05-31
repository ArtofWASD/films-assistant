import MovieCardPreview from '../src/components/movie-card/movie-card-preview/movie-card-preview';
import getFilmsReleases from '../src/utils/handlers/getFilmsRealese';
import getLatestMovie from '../src/utils/handlers/getLatestMovie';

const Page = async () => {
  const newRealases = await getFilmsReleases();
  const filtredNewRealases = await newRealases?.releases?.slice(0, 7);
  const newFilms = await getLatestMovie('FILM', 1);
  const filteredFilms = newFilms?.items?.slice(0, 7);
  
  return (
    <main className='flex flex-col justify-items-cente'>
      <h1 className='text-center mt-16 pb-4 '>
        Кинотаймер. Твой личный кинокалендарь!
      </h1>
      <section className='bg-slate-300 bg-opacity-30'>
        <p className='text-center pt-4 font-semibold text-xl'>Цифровые релизы</p>
        <div className='flex flex-nowrap flex-col md:flex-row justify-center gap-6 px-5 md:px-1 py-4'>
          {filtredNewRealases?.map((item: any) => (
            <MovieCardPreview props={item} key={item.id} />
          ))}
        </div>
      </section>
      <section className='bg-amber-300 bg-opacity-30'>
        <p className='text-center pt-4 font-semibold text-xl'>Новинки кино</p>
        <div className='flex flex-nowrap flex-col md:flex-row justify-center gap-6 px-5 md:px-1 py-4'>
          {filteredFilms?.map((item: any) => (
            <MovieCardPreview props={item} key={item.id} />
          ))}
        </div>
      </section>
    </main>
  );
};

export default Page;
