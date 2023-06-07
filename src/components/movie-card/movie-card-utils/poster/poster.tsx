import Image from 'next/image';
import Rating from '../rating/rating';

const Poster = ({ props }: any) => {
  return (
    <div className="grid grid-flow-col">
      <div className="relative">
        <Image
          src={props.posterUrl}
          alt={props.nameRu ? props.nameRu : props.nameOriginal}
          width={0}
          height={0}
          sizes='100vw'
          className='md:h-64 md:w-56 h-24 w-16 rounded-xl'
        />
      </div>
      <div className='absolute movie-card_rating flex flex-col gap-2 z-10 pl-40 pt-40'>
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
  );
};

export default Poster;
