import Link from 'next/link';
import ActorCard from '../actor-card/actor-card';

interface ActrosListProps {
  id: number;
  photo: string;
  name: string;
  enName: string;
  description: string;
  profession: string;
  enProfession: string;
}

const ActrosList = ({ actors, params }: any) => {
console.log(params);
  return (
    <div className="px-4">
      <div className='border-b-2 pt-4 text-lg font-semibold'>Режисёры</div>
      <section className='grid grid-cols-1 md:grid-cols-2 gap-4'>
        {actors.filter((item:ActrosListProps)=>item.profession === 'режиссеры').map((item: ActrosListProps) => (
          <Link
            href={`lists/${item.id}`}
            key={item.id}
          >
            <ActorCard item={item} key={item.name} />
          </Link>
        ))}
      </section>
      <div className='border-b-2 pt-4 text-lg font-semibold'>Актёры</div>
      <section className='grid grid-cols-1 md:grid-cols-2 gap-4'>
        {actors.filter((item:ActrosListProps) => item.profession === 'актеры').map((item:ActrosListProps) => (
          <Link
            href={`/${item?.id}`}
            key={item.id}
          >
            <ActorCard item={item} key={item.name} />
          </Link>
        ))}
      </section>
    </div>
  );
};

export default ActrosList;
