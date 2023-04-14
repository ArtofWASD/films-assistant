'use client';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

const LeftMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <Image
        src={`${isOpen? '/images/menu-burger-active.png':'/images/menu-burger.png'}`}
        alt='menu-burger'
        width={0}
        height={0}
        sizes='100vw'
        className='h-10 w-10 ml-3'
        onClick={handleToggle}
      />
      <div
        className={`${
          isOpen
            ? 'backdrop-blur-sm absolute h-screen w-screen'
            : 'hidden'
        }`}
        onClick={handleToggle}
      />
      <ul
        className={`${
          isOpen ? 'block mt-3' : 'hidden'
        } flex flex-col w-96 absolute py-4 bg-gradient-to-r from-slate-300 to bg-transparent h-screen`}
      >
        <li className='font-semibold hover:text-orange-600 text-md hover:drop-shadow-xl text-left pl-1'>
          <Link href='/lists/film' onClick={handleToggle}>
            Фильмы
          </Link>
        </li>
        <li className='font-semibold hover:text-orange-600 text-md hover:drop-shadow-xl text-left pl-1'>
          <Link href='/lists/tv_series' onClick={handleToggle}>
            Сериалы
          </Link>
        </li>
        <li className='font-semibold hover:text-orange-600 text-md hover:drop-shadow-xl text-left pl-1'>
          <Link href='/lists/mini_series' onClick={handleToggle}>
            Мини сериалы
          </Link>
        </li>
        <li className='font-semibold hover:text-orange-600 text-md hover:drop-shadow-xl text-left pl-1'>
          <Link href='/lists/tv_show' onClick={handleToggle}>
            Тв сериалы
          </Link>
        </li>
      </ul>
    </>
  );
};

export default LeftMenu;
