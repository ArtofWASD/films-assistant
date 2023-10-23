import Image from 'next/image';
import React from 'react';
interface categoryListProps {
  id: number;
  name: string;
  year: number;
  shortDescription: string;
}
const CategoryList = ({ data }: any) => {
  const filterEmptyData = data.docs
    .filter((item: any) => item.name !== null && item.poster.url !== null)
    .slice(0, 10);

  return (
    <div className="text-white grid grid-cols-10 gap-2 items-baseline justify-items-center">
      {data && (
        <>
          {filterEmptyData.map((item: any) => (
            <div className="flex flex-col gap-2 items-center">
              <Image
                src={item.poster.url}
                alt={item.name}
                width={140}
                height={0}
                className="h-48"
              />
              <div className="text-xs text-center break-normal">{item.name}</div>
            </div>
          ))}
        </>
      )}
    </div>
  );
};

export default CategoryList;
