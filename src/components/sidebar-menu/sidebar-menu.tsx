'use client';
import { Disclosure, Popover, Transition } from '@headlessui/react';
import Link from 'next/link';
import Image from 'next/image';

const SidebarMenu = () => {
  return (
    <div>
      <Popover as='nav'>
        {({ open }) => (
          <>
            <Popover.Button>
              <Image
                src={
                  open
                    ? '/images/menu-burger-active.png'
                    : '/images/menu-burger.png'
                }
                alt='menu-burger'
                width={0}
                height={0}
                sizes='100vw'
                className='h-8 w-8 ml-3'
              />
            </Popover.Button>
            <Transition
              enter='transition duration-100 ease-out'
              enterFrom='transform scale-95 opacity-0'
              enterTo='transform scale-100 opacity-100'
              leave='transition duration-75 ease-out'
              leaveFrom='transform scale-100 opacity-100'
              leaveTo='transform scale-95 opacity-0'
            >
              <Popover.Overlay as='div' className="fixed inset-0 bg-black opacity-30 blur-lg" />
              <Popover.Panel>
                <div className='sidepanel-content pl-2 pt-14 bg-opacity-20 bg-slate-500 w-60'>
                  <ul>
                    <li className='font-semibold hover:text-orange-600 text-lg md:text-2xl hover:drop-shadow-xl text-left pl-3'>
                      <Link href='/'>На главную</Link>
                    </li>
                    <li className='font-semibold hover:text-orange-600 text-lg md:text-2xl hover:drop-shadow-xl text-left pl-3'>
                      <Link href='/lists/film'>Фильмы</Link>
                    </li>
                    <li className='font-semibold hover:text-orange-600 text-lg md:text-2xl hover:drop-shadow-xl text-left pl-3'>
                      <Link href='/lists/tv_series'>Сериалы</Link>
                    </li>
                    <li className='font-semibold hover:text-orange-600 text-lg md:text-2xl hover:drop-shadow-xl text-left pl-3'>
                      <Link href='/lists/mini_series'>Мини сериалы</Link>
                    </li>
                    <li className='font-semibold hover:text-orange-600 text-lg md:text-2xl hover:drop-shadow-xl text-left pl-3'>
                      <Link href='/lists/tv_show'>Тв сериалы</Link>
                    </li>
                  </ul>
                  <Popover.Button className=''>Закрыть</Popover.Button>
                </div>
              </Popover.Panel>
            </Transition>
          </>
        )}
      </Popover >
    </div>
  );
};

export default SidebarMenu;
