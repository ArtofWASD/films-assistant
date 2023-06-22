import Image from 'next/image';
import formatMinutes from '../../utils/handlers/movieLenghtFormatHandler';
import Genres from './movie-card-utils/genres/genres';
import Rating from './movie-card-utils/rating/rating';

interface MovieCardProps {
  props: {
    name: string;
    alternativeName: string;
    posterUrl: string;
    description: string;
    year: number;
    url: string;
    movieLength: number;
    ratingKinopoisk: number;
    ratingImdb: number;
    genres: [string];
    poster: {
      previewUrl: string
    };
    rating: {
      kp: number;
      imdb:number;
    }
  };
}

const MovieCard: React.FC<MovieCardProps> = ({ props }) => {
  return (
    <>
      <section className='movie-card grid justify-items-center'>
        <h1 className='movie-title py-4'>
          {props.name ? <>{props.name}</> : <>{props.alternativeName}</>}
        </h1>
        <div className='grid grid-cols-1 md:grid-cols-[20%_80%] md:px-28 justify-items-center gap-2'>
          <div className='movie-card_image'>
            <Image
              src={props.poster.previewUrl}
              alt={props.name}
              width={300}
              height={100}
            />
          </div>
          <div className='movie-card_description px-4'>
            <div className='md:border-0 border-b-2 py-2'>{props.description}</div>
            <div className='flex md:border-0 border-b-2 py-2'>{props.movieLength ? (<><p className='font-semibold'>Продолжительность</p>: {formatMinutes(props.movieLength)}</>):(<></>)}</div>
            <div className='flex gap-1 md:border-0 border-b-2 py-2'>
              <Genres genres={props.genres} />
            </div>
            <div className='movie-card_rating flex gap-2 py-2'>
              {props.rating ? (
                <Rating
                  title='Кинопоиск'
                  rating={props.rating.kp}
                  icon='/images/icon-kp.png'
                />
              ) : (
                <></>
              )}
              {props.rating ? (
                <Rating
                  title='IMDb'
                  rating={props.rating.imdb}
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
