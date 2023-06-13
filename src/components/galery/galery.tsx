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
        className='flex justify-center flex-col bg-slate-400 bg-opacity-20 py-2 h-96'
      >
        <motion.div
          className='image-gallery flex px-64 '
          initial={{ opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8 }}
        >
          <Image
            src={currentImage.poster.previewUrl}
            alt={currentImage.name}
            height={250}
            width={250}
            className='object-cover transition-opacity duration-500 ease-in-out rounded-xl'
            onLoad={handleImageLoad}
          />
          <div className='flex flex-col'>
            <p className='text-2xl ml-4 text-white'>{currentImage.alternativeName ? <>{currentImage.name} | {currentImage.alternativeName}</>:<>{currentImage.name}</>}</p>
            <p className='text-lg ml-4 text-white border-b'>
              {currentImage.shortDescription}
            </p>
            {currentImage.genres.map((item:any) =>(
              <p className='text-lg ml-4 text-white' key={item.name}>{item.name}</p>
            ))}
          </div>
        </motion.div>
      </div>
      <div className='flex justify-center gap-4 py-4'>
        <button
          onClick={previousImage}
          disabled={currentIndex === 0}
          className='text-xl font-semibold text-slate-500'
        >
          Сюдой
        </button>
        <div className='navigation-dots  gap-3 flex justify-center my-2'>
          {images.docs.map((_: any, index: any) => (
            <span
              key={index}
              className={`dot w-4 h-3 rounded-xl ${
                index === currentIndex
                  ? 'active bg-orange-500 scale-150'
                  : 'bg-slate-300'
              }`}
              onClick={() => goToImage(index)}
            ></span>
          ))}
        </div>

        <button
          onClick={nextImage}
          disabled={currentIndex === images.docs.length - 1}
          className='text-xl font-semibold text-slate-500'
        >
          Тудой
        </button>
      </div>
    </>
  );
};

export default Galery;
