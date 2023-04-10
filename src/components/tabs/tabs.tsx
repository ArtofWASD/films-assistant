'use client';
import React from 'react';
import { Tab } from '@headlessui/react';
function classNames(...classes:any) {
    return classes.filter(Boolean).join(' ')
  }
const Tabs = ({ film, actors, awards }: any) => {
  return (
    <>
      <Tab.Group>
        <Tab.List className="grid grid-flow-col bg-grey-500 p-1">
          <Tab className={({ selected }) =>
                classNames(
                  'w-full py-2.5 text-sm font-medium leading-5 text-blue-700 px-5',
                  'ring-white ring-opacity-60 ring-offset-2 ring-offset-blue-400',
                  selected
                    ? 'bg-white shadow'
                    : 'text-blue-100 hover:bg-white/[0.12] hover:text-orange-500'
                )
              }>Главная</Tab>
          <Tab className={({ selected }) =>
                classNames(
                  'w-full py-2.5 text-sm font-medium leading-5 text-blue-700 px-5',
                  'ring-white ring-opacity-60 ring-offset-2 ring-offset-blue-400',
                  selected
                    ? 'bg-white shadow'
                    : 'text-blue-100 hover:bg-white/[0.12] hover:text-orange-500'
                )
              }>Актёры</Tab>
          <Tab className={({ selected }) =>
                classNames(
                  'w-full py-2.5 text-sm font-medium leading-5 text-blue-700 px-5',
                  'ring-white ring-opacity-60 ring-offset-2 ring-offset-blue-400',
                  selected
                    ? 'bg-white shadow'
                    : 'text-blue-100 hover:bg-white/[0.12] hover:text-orange-500'
                )
              }>Награды</Tab>
        </Tab.List>
        <Tab.Panels>
          <Tab.Panel>{film}</Tab.Panel>
          <Tab.Panel>{actors}</Tab.Panel>
          <Tab.Panel>{awards}</Tab.Panel>
        </Tab.Panels>
      </Tab.Group>
    </>
  );
};

export default Tabs;
