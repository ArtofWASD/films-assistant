'use client';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import { motion } from 'framer-motion';

const LeftMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };
  
  return (
    <>
      <Image
        src={`${
          isOpen ? '/images/menu-burger-active.png' : '/images/menu-burger.png'
        }`}
        alt='menu-burger'
        width={0}
        height={0}
        sizes='100vw'
        className='h-10 w-10 ml-3'
        onClick={handleToggle}
      />
      <motion.div
        className={`${
          isOpen
            ? 'backdrop-blur-sm absolute h-screen w-screen bg-gradient-to-r from-slate-300 to bg-transparent mt-2'
            : 'hidden'
        }`}
        onClick={handleToggle}
      />
      <motion.div>
        <ul
          className={`${
            isOpen ? 'block mt-2' : 'hidden'
          } flex flex-col w-full md:w-96 absolute py-4  h-screen gap-2`}
          onClick={handleToggle}
        >
          <li className='font-semibold hover:text-orange-600 text-lg md:text-2xl hover:drop-shadow-xl text-left pl-3'>
            <Link href='/' onClick={handleToggle}>
              На главную
            </Link>
          </li>
          <li className='font-semibold hover:text-orange-600 text-lg md:text-2xl hover:drop-shadow-xl text-left pl-3'>
            <Link href='/lists/film' onClick={handleToggle}>
              Фильмы
            </Link>
          </li>
          <li className='font-semibold hover:text-orange-600 text-lg md:text-2xl hover:drop-shadow-xl text-left pl-3'>
            <Link href='/lists/tv_series' onClick={handleToggle}>
              Сериалы
            </Link>
          </li>
          <li className='font-semibold hover:text-orange-600 text-lg md:text-2xl hover:drop-shadow-xl text-left pl-3'>
            <Link href='/lists/mini_series' onClick={handleToggle}>
              Мини сериалы
            </Link>
          </li>
          <li className='font-semibold hover:text-orange-600 text-lg md:text-2xl hover:drop-shadow-xl text-left pl-3'>
            <Link href='/lists/tv_show' onClick={handleToggle}>
              Тв сериалы
            </Link>
          </li>
        </ul>
      </motion.div>
    </>
  );
};

export default LeftMenu;
