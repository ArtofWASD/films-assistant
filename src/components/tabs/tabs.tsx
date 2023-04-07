'use client';
import React from 'react';
import { Tab } from '@headlessui/react';
function classNames(...classes:any) {
    return classes.filter(Boolean).join(' ')
  }
const Tabs = ({ props }: any) => {
  return (
    <>
      <Tab.Group>
        <Tab.List className="flex space-x-1 rounded-xl bg-grey-500/20 p-1">
          <Tab className={({ selected }) =>
                classNames(
                  'w-full rounded-lg py-2.5 text-sm font-medium leading-5 text-blue-700 px-5',
                  'ring-white ring-opacity-60 ring-offset-2 ring-offset-blue-400 focus:outline-none focus:ring-2',
                  selected
                    ? 'bg-white shadow'
                    : 'text-blue-100 hover:bg-white/[0.12] hover:text-orange-500'
                )
              }>Главная</Tab>
          <Tab className={({ selected }) =>
                classNames(
                  'w-full rounded-lg py-2.5 text-sm font-medium leading-5 text-blue-700 px-5',
                  'ring-white ring-opacity-60 ring-offset-2 ring-offset-blue-400 focus:outline-none focus:ring-2',
                  selected
                    ? 'bg-white shadow'
                    : 'text-blue-100 hover:bg-white/[0.12] hover:text-orange-500'
                )
              }>Актёры</Tab>
          <Tab className={({ selected }) =>
                classNames(
                  'w-full rounded-lg py-2.5 text-sm font-medium leading-5 text-blue-700 px-5',
                  'ring-white ring-opacity-60 ring-offset-2 ring-offset-blue-400 focus:outline-none focus:ring-2',
                  selected
                    ? 'bg-white shadow'
                    : 'text-blue-100 hover:bg-white/[0.12] hover:text-orange-500'
                )
              }>Награды</Tab>
        </Tab.List>
        <Tab.Panels>
          <Tab.Panel>{props}</Tab.Panel>
          <Tab.Panel>Content 2</Tab.Panel>
          <Tab.Panel>Content 3</Tab.Panel>
        </Tab.Panels>
      </Tab.Group>
    </>
  );
};

export default Tabs;
