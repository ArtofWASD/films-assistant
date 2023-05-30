'use client';
import { motion } from 'framer-motion';
import Image from 'next/image';
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
  isHovered?: any;
}
const MovieCardPreview: React.FC<MovieCardPreviewProps> = ({
  props,
  isHovered,
}) => {
  const cardMotion = {
    rest: {
      x: 0,
      paggingRight:0,
      opacity: isHovered ? 1 : 0.8, // Обновлено условие для определения прозрачности
      transition: {
        type: 'tween',
        ease: 'easeIn',
      },
    },
    hover: {
      scale:1.2,
      paggingRight:300,
      opacity: 1,
      transition: {
        duration: 0.2,
        type: 'tween',
        ease: 'easeOut',
      },
    },
  };
  const descriptionMotion = {
    rest: {
      x:-100,
      opacity: 0,
      transition: {
        type: 'tween',
        ease: 'easeIn',
      },
    },
    hover: {
      x:0,
      opacity: isHovered ? 1 : 0.8,
      transition: {
        duration: 0.2,
        type: 'tween',
        ease: 'easeOut',
      },
    },
  };
  return (
    <>
      <motion.div
        className='movie-card justify-start gap-4  rounded-xl'
        initial='rest'
        whileHover='hover'
        animate={isHovered ? 'hover' : 'rest'}
      >
        <motion.div variants={cardMotion} className="flex">
          <Image
            src={props.posterUrl}
            alt={props.nameRu ? props.nameRu : props.nameEn}
            width={0}
            height={0}
            sizes='100vw'
            className='md:h-72 md:w-48 h-24 w-16'
          />
          <motion.div variants={descriptionMotion}>
            <h2 className='text-md md:text-base font-semibold whitespace-normal'>
              {props.nameRu ? <>{props.nameRu}</> : <>{props.nameOriginal}</>}
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
          </motion.div>
        </motion.div>
      </motion.div>
    </>
  );
};

export default MovieCardPreview;
