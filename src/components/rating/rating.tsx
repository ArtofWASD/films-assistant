import React from 'react';
interface RatingProps {
  title: string;
  rating: number;
  icon?: string;
}
const Rating: React.FC<RatingProps> = ({title, rating, icon}) => {
  return (
    <>
      <div className='flex gap-1'>
        <p className='font-semibold'>{title}:</p>
        {rating}
      </div>
    </>
  );
};

export default Rating;
