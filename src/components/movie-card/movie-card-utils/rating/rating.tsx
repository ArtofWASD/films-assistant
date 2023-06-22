import Image from 'next/image';
interface RatingProps {
  title: string;
  rating: number;
  icon: string;
}
const Rating: React.FC<RatingProps> = ({ title, rating, icon }) => {
  return (
    <>
      <div className='flex gap-1 items-center'>
        <Image
          src={icon}
          alt={title}
          width={0}
          height={0}
          sizes='100vw'
          className='md:h-8 md:w-8 h-6 w-6'
        />
        <p className='font-semibold'>{title}:</p>
        {rating.toFixed(1)}
      </div>
    </>
  );
};

export default Rating;
