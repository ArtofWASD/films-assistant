import Image from 'next/image';

interface MovieCardPreviewProps {
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
const MovieCardPreview: React.FC<MovieCardPreviewProps> = ({props}) => {
  return (
    <>
      <section className='movie-card border-2 rounded-xl py-4 px-3 bg-cyan-300 bg-opacity-10'>
        <div className='grid grid-flow-col grid-rows-2 grid-cols-[20, 80] justify-items-center items-center gap-2 auto-rows-min'>
          <div>
            <Image src={props.posterUrl} alt={props.posterUrl} width={100} height={100} />
          </div>
          <div className=''>
            <h2>{props.nameRu}</h2>
            <div>{props.description}</div>
          </div>
        </div>
      </section>
    </>
  );
};

export default MovieCardPreview;
