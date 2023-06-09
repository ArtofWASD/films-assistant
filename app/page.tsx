import Galery from '../src/components/galery/galery';
import MovieCardPreview from '../src/components/movie-card/movie-card-preview/movie-card-preview';
import getFilmsReleases from '../src/utils/handlers/getFilmsRealese';
import getLatestMovie from '../src/utils/handlers/getLatestMovie';
import Image from 'next/image';

const Page = async () => {
  const newRealases = await getFilmsReleases();
  const filtredNewRealases = await newRealases?.releases?.slice(0, 6);
  const newFilms = await getLatestMovie('FILM', 1);
  const filteredFilms = newFilms?.items?.slice(0, 6);

  return (
    <main className='flex flex-col justify-items-cente mt-11'>
      <div className='flex justify-center items-end gap-4 py-6'>
        <Image
          src='/images/cinema.png'
          alt='Кинотаймер'
          width={0}
          height={0}
          sizes='100vw'
          className='h-14 w-14 rounded-xl'
        />
        <h1 className='text-center text-slate-500 font-semibold'>
          Кинотаймер. Твой личный кинокалендарь.
        </h1>
      </div>

      <div>
        <Galery images={filteredFilms} />
      </div>
      {/* <section className='bg-slate-300 bg-opacity-30'>
        <p className='text-center pt-4 font-semibold text-xl'>Цифровые релизы</p>
        <div className='grid grid-flow-col justify-center gap-6 px-5 md:px-1 py-4'>
          {filtredNewRealases?.map((item: any) => (
            <MovieCardPreview props={item} key={item.id} />
          ))}
        </div>
      </section>
      <section className='bg-amber-300 bg-opacity-30'>
        <p className='text-center pt-4 font-semibold text-xl'>Новинки кино</p>
        <div className='grid grid-flow-col justify-center gap-6 px-5 md:px-1 py-4'>
          {filteredFilms?.map((item: any) => (
            <MovieCardPreview props={item} key={item.id} />
          ))}
        </div>
      </section> */}
    </main>
  );
};

export default Page;
