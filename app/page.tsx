import Galery from '../src/components/galery/galery';
import MovieCardPreview from '../src/components/movie-card/movie-card-preview/movie-card-preview';
import getFilmsReleases from '../src/utils/handlers/getFilmsRealese';
import getLatestMovie from '../src/utils/handlers/getLatestMovie';
import Image from 'next/image';
import galeryApi from '../src/utils/handlers/galeryApi';

const Page = async () => {
  const newFilmsApi = await galeryApi()

  return (
    <main className='flex flex-col justify-items-cente mt-24'>
      <div>
        <Galery images={newFilmsApi} />
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
