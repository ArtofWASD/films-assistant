import React from 'react';
import LeftMenu from '../src/components/left-menu/left-menu';
import MyInput from '../src/components/ui/input/input';

const Page = () => {
  return (
    <main>
      <div className='flex justify-center py-4 text-xl'>Main Page</div>
      <LeftMenu/>
    </main>
  );
};

export default Page;
