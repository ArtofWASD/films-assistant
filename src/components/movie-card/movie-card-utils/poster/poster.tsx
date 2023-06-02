import Image from 'next/image';
import Rating from '../rating/rating';

const Poster = ({ props }: any) => {
  return (
    <div>
      <Image
        src={props.posterUrl}
        alt={props.nameRu ? props.nameRu : props.nameOriginal}
        width={0}
        height={0}
        sizes='100vw'
        className='md:h-72 md:w-48 h-24 w-16 rounded-xl'
      />
      {/* <div className='movie-card_rating flex flex-col gap-2 z-10 bottom-2 right-0'>
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
      </div> */}
    </div>
  );
};

export default Poster;
