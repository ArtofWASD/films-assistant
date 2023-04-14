import Image from 'next/image';
import Link from 'next/link';
import LeftMenu from '../../left-menu/left-menu';

const Header = () => {
  return (
    <header className='bg-gradient-to-r from-zinc-800 to-blue-500 '>
      <nav className='flex justify-between items-center py-2'>
        <span>
          <LeftMenu/>
        </span>
        <ul className='flex gap-2 pr-3'>
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
