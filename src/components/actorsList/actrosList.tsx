import Image from 'next/image';
import ActorCard from '../movie-card/movie-card-utils/actor-card/actor-card';
interface ActrosListProps {
  nameRu: string;
  nameEn: string;
  description: string;
  posterUrl: string;
  professionText: string;
}

const ActrosList = ({ actors, director }: any) => {
  return (
    <>
      <p className='border-b-2 pt-4 text-lg font-semibold'>Режисёры</p>
      <section className='grid grid-cols-2 gap-4'>
        {director.map((item: ActrosListProps) => (
          <ActorCard item={item} key={item.nameRu} />
        ))}
      </section>
      <p className='border-b-2 pt-4 text-lg font-semibold'>Актёры</p>
      <section className='grid grid-cols-2 gap-4'>
        {actors.map((item: ActrosListProps) => (
          <ActorCard item={item} key={item.nameRu} />
        ))}
      </section>
    </>
  );
};

export default ActrosList;
