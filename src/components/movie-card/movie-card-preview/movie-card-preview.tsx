'use client';
import Image from 'next/image';
import { useState } from 'react';
import Genres from '../movie-card-utils/genres/genres';
import Rating from '../movie-card-utils/rating/rating';

interface MovieCardPreviewProps {
  props: {
    filmId: string;
    key: string;
    nameRu: string;
    nameEn: string;
    nameOriginal: string;
    posterUrl: string;
    year: number;
    filmLength: number;
    ratingKinopoisk: number;
    ratingImdb: number;
    genres: Array<string>;
  };
  key: string;
}

const MovieCardPreview: React.FC<MovieCardPreviewProps> = ({ props, key }) => {
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
        className='movie-card flex transition ease-in-out hover:translate-x-6 hover:scale-110 duration-700 py-2'
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        key={key}
      >
        <Image
          src={props.posterUrl}
          alt={props.nameRu ? props.nameRu : props.nameOriginal}
          width={0}
          height={0}
          sizes='100vw'
          className='md:h-56 md:w-40 h-24 w-16 rounded-xl'
        />
        <div
          className={
            isHovered
              ? 'movie-card_description top-0 px-2 left-full w-80 opacity-100 transition duration-700'
              : 'movie-card_description top-0 px-2 left-full w-0 opacity-0'
          }
        >
          <h2 className='movie-card_name text-md md:text-base font-semibold whitespace-normal'>
            {props.nameRu ? <>{props.nameRu}</> : <>{props.nameOriginal}</>}
          </h2>
          <div className='movie-card_releaseYear flex gap-1 text-sm md:text-base'>
            <p className='font-semibold '>Год выпуска:</p>
            {props.year}
          </div>
          <div className='movie-card_genres flex gap-1 text-sm md:text-base'>
            <Genres genres={props.genres} />
          </div>
          <div className='movie-card_rating flex gap-2 py-2 text-sm md:text-base'>
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
      </section>
    </>
  );
};

export default MovieCardPreview;
