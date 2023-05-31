'use client';
import Image from 'next/image';
import { useState } from 'react';
import Genres from '../movie-card-utils/genres/genres';
import Rating from '../movie-card-utils/rating/rating';

interface MovieCardPreviewProps {
  props: {
    key?: string;
    nameRu: string;
    nameEn: string;
    nameOriginal?: string;
    posterUrl: string;
    year: number;
    filmLength: number;
    ratingKinopoisk: number;
    ratingImdb: number;
    genres: Array<string>;
  };
}

const MovieCardPreview: React.FC<MovieCardPreviewProps> = ({ props }) => {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };
  return (
    <>
      <section
        className={`movie-card ${
          isHovered ? '' : ''
        }`}
      >
        <div
          className='flex'
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            <Image
              src={props.posterUrl}
              alt={props.nameRu ? props.nameRu : props.nameEn}
              width={0}
              height={0}
              sizes='100vw'
              className='md:h-72 md:w-48 h-24 w-16'
            />
            {isHovered && (
              <div className='movie-card_description top-0 px-2 w-100 left-full'>
                <h2 className='text-md md:text-base font-semibold whitespace-normal'>
                  {props.nameRu ? (
                    <>{props.nameRu}</>
                  ) : (
                    <>{props.nameOriginal}</>
                  )}
                </h2>
                <div className='flex gap-1 text-sm md:text-base '>
                  <p className='font-semibold '>Год выпуска:</p>
                  {props.year}
                </div>
                <div className='flex gap-1 text-sm md:text-base'>
                  <Genres genres={props.genres} />
                </div>
                <div className='flex gap-2 py-2 text-sm md:text-base'>
                  {props.ratingKinopoisk ? (
                    <Rating
                      title='Кинопоиск'
                      rating={props.ratingKinopoisk}
                      icon='/images/icon-kp.png'
                    />
                  ) : (
                    <></>
                  )}
                  {props.ratingImdb ? (
                    <Rating
                      title='IMDb'
                      rating={props.ratingImdb}
                      icon='/images/imdb.png'
                    />
                  ) : (
                    <></>
                  )}
                </div>
              </div>
            )}
          </div>
      </section>
    </>
  );
};

export default MovieCardPreview;
