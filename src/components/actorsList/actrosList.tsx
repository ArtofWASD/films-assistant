import Link from 'next/link';
import ActorCard from '../movie-card/movie-card-utils/actor-card/actor-card';
interface ActrosListProps {
  staffId: number;
  nameRu: string;
  nameEn: string;
  description: string;
  posterUrl: string;
  professionText: string;
}

const ActrosList = ({ actors, director, params }: any) => {
  return (
    <>
      <p className='border-b-2 pt-4 text-lg font-semibold'>Режисёры</p>
      <section className='grid grid-cols-2 gap-4'>
        {director.map((item: ActrosListProps) => (
          <Link
            href={`lists/${params.type}/${params.filmid}/${item.staffId}`}
            key={item.staffId}
          >
            <ActorCard item={item} key={item.nameRu} />
          </Link>
        ))}
      </section>
      <p className='border-b-2 pt-4 text-lg font-semibold'>Актёры</p>
      <section className='grid grid-cols-2 gap-4'>
        {actors.map((item: ActrosListProps) => (
          <Link
            href={`lists/${params.type}/${params.filmid}/${item.staffId}`}
            key={item.staffId}
          >
            <ActorCard item={item} key={item.nameRu} />
          </Link>
        ))}
      </section>
    </>
  );
};

export default ActrosList;
