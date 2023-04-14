'use client';
import Link from 'next/link';
import { useState } from 'react';

const LeftMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <button
        className='block text-white rounded-md relative pl-2 font-semibold'
        onClick={handleToggle}
      >
        Меню
      </button>
      <ul className={`${isOpen ? 'block mt-4' : 'hidden'} flex flex-col w-full absolute py-4 bg-slate-200 md:bg-transparent rounded-b-lg`}>
        <li className='font-semibold hover:text-orange-600 text-md hover:drop-shadow-xl text-left pl-1'>
          <Link href='/lists/film' onClick={handleToggle}>Фильмы</Link>
        </li>
        <li className='font-semibold hover:text-orange-600 text-md hover:drop-shadow-xl text-left pl-1'>
          <Link href='/lists/tv_series' onClick={handleToggle}>Сериалы</Link>
        </li>
        <li className='font-semibold hover:text-orange-600 text-md hover:drop-shadow-xl text-left pl-1'>
          <Link href='/lists/mini_series' onClick={handleToggle}>Мини сериалы</Link>
        </li>
        <li className='font-semibold hover:text-orange-600 text-md hover:drop-shadow-xl text-left pl-1'>
          <Link href='/lists/tv_show' onClick={handleToggle}>Тв сериалы</Link>
        </li>
      </ul>
    </>
  );
};

export default LeftMenu;
