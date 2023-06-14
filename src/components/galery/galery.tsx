'use client';
import React, { useState } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

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

  const currentImage = images.docs[currentIndex];

  return (
    <>
      <div
        key={currentImage.id}
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
            src={currentImage.poster.previewUrl}
            alt={currentImage.name}
            height={350}
            width={325}
            className='object-cover transition-opacity duration-500 ease-in-out rounded-xl '
            onLoad={handleImageLoad}
          />
          <div className='galery-description flex flex-col pl-0 py-4 md:py-0 md:pl-20'>
            <p className='text-2xl ml-4 text-white '>
              {currentImage.alternativeName ? (
                <>
                  {currentImage.name} | {currentImage.alternativeName}
                </>
              ) : (
                <>{currentImage.name}</>
              )}
            </p>
            <p className='text-lg ml-4 text-white border-b flex'>
              {currentImage.shortDescription}
            </p>
            {currentImage.genres.map((item: any) => (
              <p className='text-lg ml-4 text-white' key={item.name}>
                {item.name}
              </p>
            ))}
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
            alt={currentImage.name}
            height={10}
            width={10}
            className='mr-1'
            onLoad={handleImageLoad}
          />
        </button>
        <div className='navigation-dots  gap-3 flex justify-center my-2'>
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
            alt={currentImage.name}
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
