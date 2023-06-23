'use client';
import { Popover, Transition } from '@headlessui/react';
import Link from 'next/link';
import Image from 'next/image';

const SidebarMenu = () => {
  return (
    <div className="z-50">
      <Popover>
        {({ open, close }) => (
          <>
            <Popover.Button as='button' autoFocus={false} className='focus:outline-none'>
              <Image
                src={
                  open
                    ? '/images/popcorn_open.png'
                    : '/images/popcorn.png'
                }
                alt='menu-burger'
                width={0}
                height={0}
                sizes='100vw'
                className='h-9 w-9 ml-3'
              />
            </Popover.Button>
            <Transition
              enter='transition ease-in-out duration-300 transform'
              enterFrom='-translate-x-full'
              enterTo='translate-x-0'
              leave='transition ease-in-out duration-300 transform'
              leaveFrom='translate-x-0'
              leaveTo='-translate-x-full'
            >
              <Popover.Panel className='sidepanel-content pl-2 pt-2 w-60 mt-1 absolute z-50'>
                <div>
                  <ul>
                    <li className='font-semibold text-slate-200 hover:text-orange-600 text-lg md:text-2xl hover:drop-shadow-xl text-left pl-3 cursor-pointer'>
                      <Link href='/' onClick={() =>{close()}}>На главную</Link>
                    </li>
                    <li className='font-semibold text-slate-200 hover:text-orange-600 text-lg md:text-2xl hover:drop-shadow-xl text-left pl-3 cursor-pointer'>
                      <Link href='/lists/movie' onClick={() =>{close()}} >Фильмы</Link>
                    </li>
                    <li className='font-semibold text-slate-200 hover:text-orange-600 text-lg md:text-2xl hover:drop-shadow-xl text-left pl-3 cursor-pointer'>
                      <Link href='/lists/tv-series' onClick={() =>{close()}} >Сериалы</Link>
                    </li>
                    <li className='font-semibold text-slate-200 hover:text-orange-600 text-lg md:text-2xl hover:drop-shadow-xl text-left pl-3 cursor-pointer'>
                      <Link href='/lists/cartoon' onClick={() =>{close()}} >Мультфильмы</Link>
                    </li>
                    <li className='font-semibold text-slate-200 hover:text-orange-600 text-lg md:text-2xl hover:drop-shadow-xl text-left pl-3 cursor-pointer'>
                      <Link href='/lists/anime' onClick={() =>{close()}} >Аниме</Link>
                    </li>
                    <li className='font-semibold text-slate-200 hover:text-orange-600 text-lg md:text-2xl hover:drop-shadow-xl text-left pl-3 cursor-pointer'>
                      <Link href='/lists/animated-series' onClick={() =>{close()}} >Анимационные-сериалы</Link>
                    </li>
                  </ul>
                </div>
              </Popover.Panel>
            </Transition>
          </>
        )}
      </Popover>
    </div>
  );
};

export default SidebarMenu;
