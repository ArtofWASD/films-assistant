import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
const Header = () => {
  return (
    <header className='bg-gray-300'>
      <nav className='flex justify-between items-center p-2'>
        <span>
          <Link href='/'>
            <Image src='/images/cinema.png' alt='logo' width='50' height='50' />
          </Link>
        </span>
        <ul className='flex gap-2'>
          <Link href='/calendar'>
            <li className='hover:text-blue-400 cursor-pointer'>Календарь</li>
          </Link>
          <Link href='/profile'>
            <li className='hover:text-blue-400 cursor-pointer'>
              Личный кабинет
            </li>
          </Link>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
