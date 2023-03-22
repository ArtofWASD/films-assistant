import React from 'react';
import Image from 'next/image';
const Header = () => {
  return (
    <header className='bg-gray-300'>
      <nav className='flex justify-between items-center p-2'>
        <span>
          <Image src='/images/cinema.png' alt='logo' width='50' height='50' />
        </span>
        <ul className='flex gap-2'>
          <li className='hover:text-blue-400 cursor-pointer'>Календарь</li>
          <li className='hover:text-blue-400 cursor-pointer'>Личный кабинет</li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
