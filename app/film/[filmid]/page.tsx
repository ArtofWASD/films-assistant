import React from 'react';
import Image from 'next/image';
const getMovie = async () => {
  const item = await fetch(
    'https://kinopoiskapiunofficial.tech/api/v2.2/films/301',
    {
      method: 'GET',
      headers: {
        'X-API-KEY': 'cb7f9eb3-5898-4a1d-ba86-88ec78c6b728',
      },
    }
  );
  return item.json();
};

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
