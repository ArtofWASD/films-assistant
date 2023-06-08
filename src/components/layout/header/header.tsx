import Link from 'next/link';
import SidebarMenu from '../../sidebar-menu/sidebar-menu';

const Header = () => {
  return (
    <header className='bg-gradient-to-r from-zinc-800 to-blue-500'>
      <div className='flex justify-between items-center pt-2'>
        <div>
          <SidebarMenu />
        </div>
        <div className='self-start pt-1 pr-3'>
          <Link href='/profile'>
            <p className='hover:text-amber-300 cursor-pointer text-white font-semibold'>
              Личный кабинет
            </p>
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
