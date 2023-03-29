import Image from 'next/image';

interface MovieCardProps {
  title: string;
  image: string;
  description: string;
}
const MovieCard: React.FC<MovieCardProps> = ({ title, image, description }) => {
  return (
    <>
      <section className='movie-card border-2 rounded-xl py-4 px-3'>
        <div className='flex justify-items-center items-center gap-9'>
          <div>
            <Image src={image} alt={image} width={90} height={50} />
          </div>
          <div>
            <h2>{title}</h2>
            <div>{description}</div>
          </div>
        </div>
      </section>
    </>
  );
};

export default MovieCard;
