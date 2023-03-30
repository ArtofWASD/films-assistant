import React from 'react';
import LeftMenu from '../src/components/left-menu/left-menu';

const Page = () => {
  return (
    <main>
      <h1 className="text-center py-4">Кинотаймер. Твой личный кинокалендарь!</h1>
      <div className='grid grid-cols-10 h-96 mx-5 gap-2'>
      <LeftMenu />
        <div className='w-100 h-full bg-slate-200 bg-opacity-25 col-start-3 col-span-7 text-3xl text-center'>
          <p className='pt-24'>Main</p>
      </div>

      </div>

    </main>
  );
};

export default Page;
