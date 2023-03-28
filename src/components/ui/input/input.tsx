import Image from 'next/image';
import React from 'react';

const MyInput = () => {
  return (
    <>
      <section className='flex flex-col items-center gap-3'>
        <p>Поиск</p>
        <div className='flex gap-2'>
          <Image
            src='/images/searching-bar.png'
            alt='search_bar_icon'
            height={30}
            width={30}
          />
          <input
            type='search'
            className='border border-2 rounded-md w-96 px-2 text-center'
            placeholder='Название фильма или сериала'
          />
        </div>
      </section>
    </>
  );
};

export default MyInput;
