import Image from 'next/image';
import React from 'react';

const MyInput = () => {
  return (
    <>
      <section>
        <div className='MyInput-logo flex gap-2'>
          <Image
            src='/images/searching-bar.png'
            alt='search_bar_icon'
            height={28}
            width={28}
          />
          <input
            type='search'
            className='MyInput-input border-2 rounded-md w-96 px-2 text-center'
            placeholder='Название фильма или сериала'
          />
        </div>
      </section>
    </>
  );
};

export default MyInput;
