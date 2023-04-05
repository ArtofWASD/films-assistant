import Image from 'next/image';
import Genres from '../../genres/genres';
import Rating from '../../rating/rating';

interface MovieCardPreviewProps {
  props: {
    nameRu: string;
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
  return (
    <>
      <section className='movie-card border-2 rounded-xl p-2 border-slate-300'>
        <div className='grid grid-flow-col justify-start gap-4'>
          <div>
            <Image
              src={props.posterUrl}
              alt={props.nameRu}
              width={0}
              height={0}
              sizes="100vw"
              className='h-40 w-28'
            />
          </div>
          <div>
            <h2>
              {props.nameRu ? <>{props.nameRu}</> : <>{props.nameOriginal}</>}
            </h2>
            <div className='flex gap-1'>
              <p className='font-semibold'>Год выпуска:</p>
              {props.year}
            </div>
            <div className='flex gap-1'>
              <Genres genres={props.genres} />
            </div>
            <div className='flex gap-2 py-2'>
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

export default MovieCardPreview;
