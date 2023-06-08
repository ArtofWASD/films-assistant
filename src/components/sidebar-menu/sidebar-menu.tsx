'use client';
import { Popover, Transition } from '@headlessui/react';
import Link from 'next/link';
import Image from 'next/image';

const SidebarMenu = () => {
  return (
    <div>
      <Popover as='nav'>
        {({ open }) => (
          <>
            <Popover.Button as='button'>
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
                className='h-8 w-8 ml-3'
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
              <Popover.Panel className='sidepanel-content pl-2 pt-2 w-60 mt-1 bg-gradient-to-r from-zinc-800 to-gray-600 z-10'>
                <div>
                  <ul>
                    <li className='font-semibold text-slate-200 hover:text-orange-600 text-lg md:text-2xl hover:drop-shadow-xl text-left pl-3 cursor-pointer'>
                      <Link href='/'>На главную</Link>
                    </li>
                    <li className='font-semibold text-slate-200 hover:text-orange-600 text-lg md:text-2xl hover:drop-shadow-xl text-left pl-3 cursor-pointer'>
                      <Link href='/lists/film'>Фильмы</Link>
                    </li>
                    <li className='font-semibold text-slate-200 hover:text-orange-600 text-lg md:text-2xl hover:drop-shadow-xl text-left pl-3 cursor-pointer'>
                      <Link href='/lists/tv_series'>Сериалы</Link>
                    </li>
                    <li className='font-semibold text-slate-200 hover:text-orange-600 text-lg md:text-2xl hover:drop-shadow-xl text-left pl-3 cursor-pointer'>
                      <Link href='/lists/mini_series'>Мини сериалы</Link>
                    </li>
                    <li className='font-semibold text-slate-200 hover:text-orange-600 text-lg md:text-2xl hover:drop-shadow-xl text-left pl-3 cursor-pointer'>
                      <Link href='/lists/tv_show'>Тв сериалы</Link>
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
