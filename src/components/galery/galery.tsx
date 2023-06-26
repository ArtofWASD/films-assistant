'use client';
import React, { useState } from 'react';
import Image from 'next/image';
import Genres from '../movie-card/movie-card-utils/genres/genres';
import Countries from '../movie-card/movie-card-utils/countries/countries';

const Galery = ({ images }: any) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [imageLoaded, setImageLoaded] = useState(false);

  const previousImage = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
      setImageLoaded(false);
    }
  };

  const nextImage = () => {
    if (currentIndex < images.docs.length - 1) {
      setCurrentIndex(currentIndex + 1);
      setImageLoaded(false);
    }
  };

  const goToImage = (index: any) => {
    setCurrentIndex(index);
  };

  const handleImageLoad = () => {
    setImageLoaded(true);
  };

  const galeryItem = images.docs[currentIndex];

  return (
    <>
      <div
        key={galeryItem.id}
        className='galery flex justify-center flex-col bg-slate-900/80 bg-opacity-20 py-2 shadow-[0px_0px_15px_20px_rgba(8,145,178,0.56)]'
      >
        <div className='gallery-film_image flex md:flex-row flex-col px-2 md:px-24 lg:px-64 items-center md:items-start'>
          <Image
            src={galeryItem.poster?.previewUrl}
            alt={galeryItem.name}
            height={250}
            width={325}
            className='rounded-xl w-32 h-36 md:w-64 md:h-96'
            onLoad={handleImageLoad}
          />
          <div className='galery-film_info flex flex-col pl-0 py-4 md:py-0 md:pl-20 self-auto'>
            <div className='galery-film_header'>
              <p className='text-2xl text-white '>
                {galeryItem.alternativeName ? (
                  <>
                    {galeryItem.name} | {galeryItem.alternativeName}
                  </>
                ) : (
                  <>{galeryItem.name}</>
                )}
              </p>
              <p className='text-sm md:text-lg text-white'>{galeryItem.description}</p>
            </div>
            <div className='galery-film_footer'>
              <div className='text-white pt-4'>
                <Genres genres={galeryItem.genres} />
              </div>
              <div className='movie-card_releaseYear flex gap-1 text-sm md:text-base text-white'>
                <p className='font-semibold'>Год выпуска:</p>
                {galeryItem.year}
              </div>
              <div className='movie-card_countries flex gap-1 text-sm md:text-base text-white'>
                <Countries countries={galeryItem.countries} />
              </div>
              <div className='text-white'>
                Кинопоиск: {galeryItem.rating.kp.toFixed(1)}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='flex justify-center items-center gap-4 pt-10'>
        <button
          onClick={previousImage}
          disabled={currentIndex === 0}
          className='flex items-center justify-center rounded-full border-2 border-rose-600 w-8 h-8 p-1 shadow hover:shadow-[0px_0px_5px_5px_rgba(159,18,57,0.5)] z-10'
        >
          <Image
            src='/images/prev.png'
            alt={galeryItem.name}
            height={10}
            width={10}
            className='mr-1'
            onLoad={handleImageLoad}
          />
        </button>
        <div className='navigation-dots gap-3 flex justify-center my-2'>
          {images.docs.map((_: any, index: any) => (
            <span
              key={index}
              className={`dot w-4 h-3 rounded-xl ${
                index === currentIndex
                  ? 'active bg-cyan-600 shadow-[0px_0px_3px_3px_rgba(8,145,178,0.56)] scale-150'
                  : 'bg-cyan-600'
              }`}
              onClick={() => goToImage(index)}
            ></span>
          ))}
        </div>

        <button
          onClick={nextImage}
          disabled={currentIndex === images.docs.length - 1}
          className='flex items-center justify-center rounded-full border-2 border-rose-600 w-8 h-8 p-1 shadow hover:shadow-[0px_0px_5px_5px_rgba(159,18,57,0.5)] z-10'
        >
          <Image
            src='/images/next.png'
            alt={galeryItem.name}
            height={10}
            width={10}
            className='ml-1'
            onLoad={handleImageLoad}
          />
        </button>
      </div>
    </>
  );
};

export default Galery;
