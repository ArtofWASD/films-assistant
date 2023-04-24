import Image from 'next/image';

interface ActorCardProps {
  item: {
    nameRu: string;
    nameEn: string;
    posterUrl: string;
    description: string;
  };
}

const ActorCard = ({ item }: ActorCardProps) => {
  return (
    <div>
      <div
        className='py-2 grid grid-flow-col  grid-cols-[25%_100%] self-start items-start gap-2 hover:shadow-xl'
        key={item.nameRu}
      >
        <Image
          src={item.posterUrl}
          alt={item.nameRu}
          width={0}
          height={0}
          sizes='100vw'
          className='h-30 w-32 rounded-lg'
        />
        <div className='grid'>
          <p className='font-semibold text-lg'>
            {item.nameRu}
            <p className='text-sm text-slate-500'>{item.nameEn}</p>
          </p>
          <p className='text-sm text-slate-500 break-words'>{item.description}</p>
        </div>
      </div>
    </div>
  );
};

export default ActorCard;
