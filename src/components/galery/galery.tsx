'use client';
import React, { useState } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import Genres from '../movie-card/movie-card-utils/genres/genres';
import Rating from '../movie-card/movie-card-utils/rating/rating';

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
        <motion.div
          className='image-gallery flex md:flex-row flex-col px-0 md:px-64 items-center md:items-start'
          initial={{ opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8 }}
        >
          <Image
            src={galeryItem.poster?.previewUrl}
            alt={galeryItem.name}
            height={350}
            width={325}
            className='object-cover transition-opacity duration-500 ease-in-out rounded-xl '
            onLoad={handleImageLoad}
          />
          <div className='galery-description flex flex-col pl-0 py-4 md:py-0 md:pl-20'>
            <p className='text-2xl text-white '>
              {galeryItem.alternativeName ? (
                <>
                  {galeryItem.name} | {galeryItem.alternativeName}
                </>
              ) : (
                <>{galeryItem.name}</>
              )}
            </p>
            <p className='text-lg text-white border-b flex'>
              {galeryItem.description}
            </p>
            <div className='text-white pt-4'>
              <Genres genres={galeryItem.genres} />
            </div>
            <div className='movie-card_releaseYear flex gap-1 text-sm md:text-base text-white'>
              <p className='font-semibold'>Год выпуска:</p>
              {galeryItem.year}
            </div>
            <div className='movie-card_releaseYear flex gap-1 text-sm md:text-base text-white'>
              <p className='font-semibold'>Страна:</p>
              {galeryItem.countries.map((item: any) => (
                <p key={item.name}>{item.name}</p>
              ))}
            </div>
            <div className='text-white'>
              Кинопоиск: {galeryItem.rating.kp.toFixed(1)}
            </div>
          </div>
        </motion.div>
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
                  ? 'active bg-cyan-600 shadow-[0px_0px_5px_5px_rgba(8,145,178,0.56)] scale-150'
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
