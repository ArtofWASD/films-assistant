import Image from 'next/image';
import formatMinutes from '../../utils/handlers/movieLenghtFormatHandler';

interface MovieCardProps {
  props: {
    nameRu: string;
    posterUrl: string;
    description: string;
    year: number;
    url: string;
    filmLength: number;
    ratingKinopoisk: number;
    ratingImdb: number;
  }
}
const MovieCard: React.FC<MovieCardProps> = ({props}) => {
  return (
    <>
      <section>
        <div className='movie-card grid justify-center py-4'>
          <div>
            <Image src={props.posterUrl} alt={props.posterUrl} width={100} height={100} />
          </div>
          <div className='col-start-2 row-start-1'>
            <h2>{props.nameRu}</h2>
            <div>{props.description}</div>
          </div>
          <div>
            Продолжительность: {formatMinutes(props.filmLength)}
          </div>
        </div>
      </section>
    </>
  );
};

export default MovieCard;
