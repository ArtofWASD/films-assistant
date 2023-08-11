'use client';
import Genres from '../movie-card-utils/genres/genres';
import Image from 'next/image';
interface MovieCardPreviewProps {
  props: {
    poster: {
      previewUrl:string
    },
    filmId: string;
    key: string;
    name: string;
    nameEn: string;
    nameOriginal: string;
    posterUrl: string;
    year: number;
    filmLength: number;
    ratingKinopoisk: number;
    ratingImdb: number;
    genres: Array<string>;
    shortDescription: string;
    description: string;

  };
  key: string;
}

const MovieCardPreview: React.FC<MovieCardPreviewProps> = ({ props, key }) => {
  return (
    <div>
      <section
        className='movie-card flex transition ease-in-out duration-1000 py-2'
        key={key}
      >
        <Image
          src={props.poster?.previewUrl}
          alt={props.name}
          height={350}
          width={150}
          className='rounded-xl '
        />
        <div className='movie-card_description top-0 px-2 left-full w-full'>
          <h2 className='movie-card_name text-white text-base text-md md:text-base font-bold'>
            {props.name ? <>{props.name}</> : <>{props.nameOriginal}</>}
          </h2>
          <div className='movie-card_shortDescr flex gap-1 text-sm md:text-base text-white'>
            {props.shortDescription ? <>{props.shortDescription}</> : <>{props.description?.slice(0,100)}...</>}
          </div>
          <div className='movie-card_releaseYear flex gap-1 text-sm md:text-base text-white'>
            <p className='font-semibold'>Год выпуска:</p>
            {props.year}
          </div>
          <div className='movie-card_genres text-sm md:text-base text-white'>
            <Genres genres={props.genres} />
          </div>
        </div>
      </section>
    </div>
  );
};

export default MovieCardPreview;
