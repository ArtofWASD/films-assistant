import Image from 'next/image';
import formatMinutes from '../../utils/handlers/movieLenghtFormatHandler';
import Genres from './movie-card-utils/genres/genres';
import Rating from './movie-card-utils/rating/rating';

interface MovieCardProps {
  props: {
    nameRu: string;
    nameOriginal: string;
    posterUrl: string;
    description: string;
    year: number;
    url: string;
    filmLength: number;
    ratingKinopoisk: number;
    ratingImdb: number;
    genres: [string];
  };
}

const MovieCard: React.FC<MovieCardProps> = ({ props }) => {
  return (
    <>
      <section className='movie-card grid justify-items-center'>
        <h1 className='movie-title py-4'>
          {props.nameRu ? <>{props.nameRu}</> : <>{props.nameOriginal}</>}
        </h1>
        <div className='grid grid-cols-1 md:grid-cols-[20%_80%] md:px-28 justify-items-center gap-2'>
          <div className='movie-card_image'>
            <Image
              src={props.posterUrl}
              alt={props.posterUrl}
              width={300}
              height={100}
            />
          </div>
          <div className='movie-card_description px-4'>
            <div className='md:border-0 border-b-2 py-2'>{props.description}</div>
            <div className='flex md:border-0 border-b-2 py-2'>{props.filmLength ? (<><p className='font-semibold'>Продолжительность</p>: {formatMinutes(props.filmLength)}</>):(<></>)}</div>
            <div className='flex gap-1 md:border-0 border-b-2 py-2'>
              <Genres genres={props.genres} />
            </div>
            <div className='movie-card_rating flex gap-2 py-2'>
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
        </div>
      </section>
    </>
  );
};

export default MovieCard;
