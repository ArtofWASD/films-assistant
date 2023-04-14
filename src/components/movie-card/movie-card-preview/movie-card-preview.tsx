import Image from 'next/image';
import Genres from '../movie-card-utils/genres/genres';
import Rating from '../movie-card-utils/rating/rating';

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
      <section className='movie-card rounded-xl p-2 hover:shadow-xl'>
        <div className='grid grid-flow-col justify-start gap-4'>
          <div>
            <Image
              src={props.posterUrl}
              alt={props.nameRu}
              width={0}
              height={0}
              sizes="100vw"
              className='md:h-40 md:w-28 h-24 w-16'
            />
          </div>
          <div>
            <h2 className="text-sm md:text-base font-semibold whitespace-normal">
              {props.nameRu ? <>{props.nameRu}</> : <>{props.nameOriginal}</>}
            </h2>
            <div className='flex gap-1 text-xs md:text-base '>
              <p className='font-semibold '>Год выпуска:</p>
              {props.year}
            </div>
            <div className='flex gap-1 text-xs md:text-base'>
              <Genres genres={props.genres} />
            </div>
            <div className='flex gap-2 py-2 text-xs md:text-base'>
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
