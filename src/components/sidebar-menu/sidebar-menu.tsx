'use client';
import { Disclosure, Transition } from '@headlessui/react';
import Link from 'next/link';
import Image from 'next/image';

const SidebarMenu = () => {
  return (
    <div>
      <Disclosure as='nav'>
        {({ open }) => (
          <>
            <Disclosure.Button className='inline-flex items-center peer justify-center right-48 top-1'>
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
            </Disclosure.Button>
            <Transition
              enter='transition duration-100 ease-out'
              enterFrom='transform scale-95 opacity-0'
              enterTo='transform scale-100 opacity-100'
              leave='transition duration-75 ease-out'
              leaveFrom='transform scale-100 opacity-100'
              leaveTo='transform scale-95 opacity-0'
            >
              <Disclosure.Panel>
                <div className='pl-2 pt-14 bg-opacity-20 bg-slate-500 fixed w-60'>
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
                  <Disclosure.Button className=''>Закрыть</Disclosure.Button>
                </div>
              </Disclosure.Panel>
            </Transition>
          </>
        )}
      </Disclosure>
    </div>
  );
};

export default SidebarMenu;
