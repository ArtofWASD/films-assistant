import React from 'react';
import Image from 'next/image';
import getMovie from '../../../src/utils/handlers/getMovieHandler';

const FilmPage = async () => {
  const item = await getMovie();
  return (
    <>
      <section className='grid justify-center justify-items-center gap-2 px-28'>
        <div className='font-semibold text-2xl'>{`${item.nameRu}`}</div>
        <p className='font-semibold'>{item.slogan}</p>
        <Image
          src={item.posterUrlPreview}
          alt={item.nameRu}
          width='250'
          height='500'
        />
        <p>{item.description}</p>

        <div className='flex justify-center gap-4'>
          <span>Рейтинг Кинопоиска: {item.ratingKinopoisk}</span>
          <span>Рейтинг Imdb: {item.ratingImdb}</span>
        </div>
      </section>
    </>
  );
};

export default FilmPage;
