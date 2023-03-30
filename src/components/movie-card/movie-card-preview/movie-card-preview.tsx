import Image from 'next/image';

interface MovieCardPreviewProps {
  props: {
    nameRu: string;
    posterUrl: string;
    year: number;
    url: string;
    filmLength: number;
    ratingKinopoisk: number;
    ratingImdb: number;
    genres:Array<string>;
  }
}
const MovieCardPreview: React.FC<MovieCardPreviewProps> = ({props}) => {
  return (
    <>
      <section className='movie-card border-2 rounded-xl py-4 px-3 bg-cyan-300 bg-opacity-10'>
        <div className='grid grid-flow-col '>
          <div>
            <Image src={props.posterUrl} alt={props.posterUrl} width={100} height={100} />
          </div>
          <div className=''>
            <h2>{props.nameRu}</h2>
            <p> Год выпуска :{props.year}</p>
          </div>
        </div>
      </section>
    </>
  );
};

export default MovieCardPreview;
