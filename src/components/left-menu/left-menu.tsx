import Link from 'next/link';
import React from 'react';

const LeftMenu = () => {
  return (
    <section className='border-2 rounded-xl pt-4 grid justify-center'>
      <ul>
        <li className='font-semibold hover:text-orange-600 text-xl'>
          <Link href='/tops/Films'>Фильмы</Link>
        </li>
        <li className='font-semibold hover:text-orange-600 text-xl'>
          <Link href='/tops/Tv_series'>Сериалы</Link>
        </li>
      </ul>
    </section>
  );
};

export default LeftMenu;
