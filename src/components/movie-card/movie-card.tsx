import Image from 'next/image';
import formatMinutes from '../../utils/handlers/movieLenghtFormatHandler';
import Rating from '../rating/rating';

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
  };
}
const MovieCard: React.FC<MovieCardProps> = ({ props }) => {
  return (
    <>
      <section className='movie-card grid justify-items-center'>
        <h1 className='movie-title py-4'>
          {props.nameRu ? <>{props.nameRu}</> : <>{props.nameOriginal}</>}
        </h1>
        <div className='grid grid-flow-col justify-between px-24 gap-4'>
          <div className='movie-card_image'>
            <Image
              src={props.posterUrl}
              alt={props.posterUrl}
              width={300}
              height={100}
            />
          </div>
          <div className='movie-card_description'>
            <div>{props.description}</div>
            <div>Продолжительность: {formatMinutes(props.filmLength)}</div>
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
