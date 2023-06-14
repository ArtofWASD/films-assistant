import Link from 'next/link';
import SidebarMenu from '../../sidebar-menu/sidebar-menu';
import Image from 'next/image';

const Header = () => {
  return (
    <header className='grid grid-cols-4 gap-4 items-center'>
      <div className='col-span-1'>
        <SidebarMenu />
      </div>
      <div className='col-span-2 flex justify-center'>
        <Image
          src='/images/main_logo.png'
          alt='Кинотаймер'
          width={364}
          height={83}
          className='rounded-xl'
        />
      </div>
      <div className='col-span-1 flex justify-end gap-2 items-center pr-2'>
        <div>
          <input
            type='search'
            name='search'
            id=''
            className='relative rounded-full border-2 border-rose-600 w-8 h-8 hover:w-72 bg-transparent text-white pl-7 duration-500 z-10'
          />
          <Image
            src='/images/search_icon.png'
            alt='Кинотаймер'
            width={30}
            height={30}
            className='absolute top-6 z-0'
          />
        </div>

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
    </header>
  );
};

export default Header;
