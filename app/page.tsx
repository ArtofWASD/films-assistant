import React from 'react';
import LeftMenu from '../src/components/left-menu/left-menu';

const Page = () => {
  return (
    <main>
      <div className='flex justify-center py-4 text-xl'>Кинотаймер. Твой личный кинокалендарь!</div>
      <div className='grid  grid-cols-10 h-96 mx-5 gap-2'>
      <LeftMenu />
      <div className='w-100 h-full bg-slate-200 bg-opacity-25 col-span-9 text-3xl text-center'>основной блок</div>

      </div>

    </main>
  );
};

export default Page;
