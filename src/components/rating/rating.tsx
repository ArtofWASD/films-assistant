import Image from 'next/image';
import React from 'react';
interface RatingProps {
  title: string;
  rating: number;
  icon: string;
}
const Rating: React.FC<RatingProps> = ({title, rating, icon}) => {
  return (
    <>
      <div className='flex gap-1 items-center'>
        <Image src={icon} alt={title} width={30} height={30}/>
        <p className='font-semibold'>{title}:</p>
        {rating}
      </div>
    </>
  );
};

export default Rating;
