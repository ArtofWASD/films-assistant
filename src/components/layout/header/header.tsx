import Image from 'next/image';
import Link from 'next/link';
import MyInput from '../../../utils/ui/input';

const Header = () => {
  return (
    <header className='bg-gradient-to-r from-red-500 via-purple-500 to-blue-500'>
      <nav className='flex justify-between items-center py-2 px-4'>
        <span>
          <Link href='/'>
            <Image src='/images/cinema.png' alt='logo' width={130} height={35} />
          </Link>
        </span>
        <span> <MyInput/></span>
        <ul className='flex gap-2'>
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
