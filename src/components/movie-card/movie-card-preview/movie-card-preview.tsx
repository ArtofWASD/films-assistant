'use client';
import { useState } from 'react';
import Genres from '../movie-card-utils/genres/genres';
import Poster from '../movie-card-utils/poster/poster';

interface MovieCardPreviewProps {
  props: {
    filmId: string;
    key: string;
    nameRu: string;
    nameEn: string;
    nameOriginal: string;
    posterUrl: string;
    year: number;
    filmLength: number;
    ratingKinopoisk: number;
    ratingImdb: number;
    genres: Array<string>;
  };
  key: string;
}

const MovieCardPreview: React.FC<MovieCardPreviewProps> = ({ props, key }) => {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };
  return (
    <>
      <section
        className='movie-card flex transition ease-in-out duration-1000 py-2'
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        key={key}
      >
          <Poster props={props} />
        <div
          className='movie-card_description top-0 px-2 left-full w-full opacity-100 transition duration-1000'
        >
          <h2 className='movie-card_name text-md md:text-base font-semibold whitespace-normal'>
            {props.nameRu ? <>{props.nameRu}</> : <>{props.nameOriginal}</>}
          </h2>
          <div className='movie-card_releaseYear flex gap-1 text-sm md:text-base'>
            <p className='font-semibold '>Год выпуска:</p>
            {props.year}
          </div>
          <div className='movie-card_genres flex gap-1 text-sm md:text-base'>
            <Genres genres={props.genres} />
          </div>
          
        </div>
      </section>
    </>
  );
};

export default MovieCardPreview;
