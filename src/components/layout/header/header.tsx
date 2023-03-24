import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
const Header = () => {
  return (
    <header className='bg-gray-700'>
      <nav className='flex justify-between items-center p-2'>
        <span>
          <Link href='/'>
            <Image src='/images/cinema.png' alt='logo' width='35' height='35' />
          </Link>
        </span>
        <ul className='flex gap-2'>
          <Link href='/calendar'>
            <li className='hover:text-amber-300 cursor-pointer text-white font-semibold'>Календарь</li>
          </Link>
          <Link href='/profile'>
            <li className='hover:text-amber-300 cursor-pointer text-white font-semibold'>
              Личный кабинет
            </li>
          </Link>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
