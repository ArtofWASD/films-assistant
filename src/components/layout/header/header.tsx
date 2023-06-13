import Link from 'next/link';
import SidebarMenu from '../../sidebar-menu/sidebar-menu';
import Image from 'next/image';

const Header = () => {
  return (
    <header>
      <div className='flex flex-wrap justify-between items-center pt-2'>
        <div>
          <SidebarMenu />
        </div>
        <div className='self-start pt-1 pr-3'>
          <Link href='/profile'>
            <Image
              src='/images/lk_logo.png'
              alt='Кинотаймер'
              width={30}
              height={30}
              className='rounded-full border-2 border-rose-600 p-1'
            />
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
