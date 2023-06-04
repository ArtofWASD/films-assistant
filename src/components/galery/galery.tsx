'use client';
import React, { useState } from 'react';
import Image from 'next/image';

const Galery = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  console.log(images);
  

  const previousImage = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  const nextImage = () => {
    if (currentIndex < images.length - 1) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const goToImage = (index) => {
    setCurrentIndex(index);
  };

  const currentImage = images[currentIndex];
  return (
    <div key={currentImage.nameOriginal} className='flex justify-center flex-col'>
      <div className='image-gallery bg-slate-400'>
        <Image src={currentImage.posterUrl} alt={currentImage.description}  height={200} width={400} className='object-cover transition-opacity duration-500 ease-in-out'/>
        <p>{currentImage.description}</p>
        <p>
          {currentIndex + 1}/{images.length}
        </p>
      </div>
      <div className="navigation-dots  gap-3 flex justify-center my-2">
        {images.map((_, index) => (
          <span
            key={index}
            className={`dot w-7 h-5 rounded-xl ${index === currentIndex ? '  active bg-black' : ' w-7 h-5 bg-slate-300'}`}
            onClick={() => goToImage(index)}
          ></span>
        ))}
      </div>
      <button onClick={previousImage} disabled={currentIndex === 0}>
        Previous
      </button>
      <button onClick={nextImage} disabled={currentIndex === images.length - 1}>
        Next
      </button>
    </div>
  );
};

export default Galery;
