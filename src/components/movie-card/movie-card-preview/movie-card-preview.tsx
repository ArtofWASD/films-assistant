import Image from 'next/image';
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
      <section className='movie-card border-2 rounded-xl py-4 px-3 bg-cyan-300 bg-opacity-10'>
        <div className='grid grid-flow-col justify-start gap-4'>
          <div className='w-full'>
            <Image
              src={props.posterUrl}
              alt={props.nameRu}
              width={100}
              height={150}
            />
          </div>
          <div className=''>
            <h2>
              {props.nameRu ? <>{props.nameRu}</> : <>{props.nameOriginal}</>}
            </h2>
            <div className='flex gap-1'>
              <p className='font-semibold'>Год выпуска:</p>
              {props.year}
            </div>
            <div className='flex gap-1'>
              <p className='font-semibold'>Жанр:</p>
              <ul className='flex gap-1'>
                {props.genres.map((item: any, index: number) => {
                  if (index === props.genres.length - 1) {
                    return <li key={item.genre}>{item.genre}.</li>;
                  } else {
                    return <li key={item.genre}>{item.genre},</li>;
                  }
                })}
              </ul>
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
