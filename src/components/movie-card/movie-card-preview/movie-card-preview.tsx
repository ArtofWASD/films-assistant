'use client'
import { motion } from 'framer-motion';
import Image from 'next/image';
import Genres from '../movie-card-utils/genres/genres';
import Rating from '../movie-card-utils/rating/rating';

interface MovieCardPreviewProps {
  props: {
    nameRu: string;
    nameEn:string;
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
  const cardMotion = {
    rest: {
      x: 0,
      transition: {
        type: "tween",
        ease: "easeIn"
      }
    },
    hover: {
      transition: {
        duration: 0.4,
        type: "tween",
        ease: "easeOut"
      }
    }
  };
  const descriptionMotion = {
    rest: { opacity: 0, ease: "easeOut", duration: 0.4, type: "tween" },
    hover: {
      opacity: 1,
      x:10,
      transition: {
        duration: 0.4,
        type: "tween",
        ease: "easeIn"
      }
    }
  };
  return (
    <>
      <section className='movie-card rounded-xl p-2 hover:shadow-xl'>
        <motion.div className='grid grid-flow-col justify-start gap-4' initial="rest" whileHover="hover" animate="rest">
          <motion.div variants={cardMotion}>
            <Image
              src={props.posterUrl}
              alt={props.nameRu? props.nameRu:props.nameEn}
              width={0}
              height={0}
              sizes="100vw"
              className='md:h-72 md:w-48 h-24 w-16 '
            />
          </motion.div>
          <motion.div variants={descriptionMotion}>
            <h2 className="text-md md:text-base font-semibold whitespace-normal">
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
      </section>
    </>
  );
};

export default MovieCardPreview;
