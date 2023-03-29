import Link from 'next/link';
import React from 'react';

const LeftMenu = () => {
  return (
    <section className='border-2 rounded-xl pt-4 grid justify-center'>
      <ul>
        <li className='font-semibold hover:text-orange-600 text-xl'>
          <Link href='/tops'>Фильмы</Link>
        </li>
        <li className='font-semibold hover:text-orange-600 text-xl'>
          <Link href='/tops'>Сериалы</Link>
        </li>
        <li className='font-semibold hover:text-orange-600 text-xl'>
          <Link href='/tops'>Аниме</Link>
        </li>
      </ul>
    </section>
  );
};

export default LeftMenu;
