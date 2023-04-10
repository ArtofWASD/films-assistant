import Image from 'next/image';
interface ActrosListProps {
  nameRu: string;
  nameEn: string;
  description: string;
  posterUrl: string;
  professionText: string;
}
const ActrosList = ({ actors }: any) => {
  return (
    <section>
      {actors.map((item: ActrosListProps) => (
        <div className='py-2 flex gap-2' key={item.nameRu}>
          <Image
            src={item.posterUrl}
            alt={item.nameRu}
            width={100}
            height={100}
          />
          <div className='grid'>
            <p>{item.nameRu}</p>
            <p>{item.description}</p>
            <p>{item.professionText}</p>
          </div>
        </div>
      ))}
    </section>
  );
};

export default ActrosList;
