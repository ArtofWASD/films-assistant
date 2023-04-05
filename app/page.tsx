import React from 'react';
import LeftMenu from '../src/components/left-menu/left-menu';

const Page = () => {
  return (
    <main>
      <h1 className='text-center py-4'>
        Кинотаймер. Твой личный кинокалендарь!
      </h1>
      <div className='grid grid-cols-[200px_800px] justify-center mx-5 gap-2 '>
        <div className=''>
          <LeftMenu />
        </div>
      </div>
    </main>
  );
};

export default Page;
