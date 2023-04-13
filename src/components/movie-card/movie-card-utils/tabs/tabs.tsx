'use client';
import { Tab } from '@headlessui/react';

const Tabs = ({ film, actors, awards }: any) => {
  function classNames(...classes: any) {
    return classes.filter(Boolean).join(' ');
  }

  return (
    <>
      <Tab.Group>
        <Tab.List className='grid grid-flow-col bg-grey-500 p-1'>
          <Tab
            className={({ selected }) =>
              classNames(
                'w-full py-2.5 text-md font-medium leading-5 text-blue-700 px-5',
                'ring-white ring-opacity-60 ring-offset-2 ring-offset-blue-400',
                selected
                  ? 'bg-white shadow border-b-2'
                  : 'text-blue-100  hover:text-orange-500'
              )
            }
          >
            Главная
          </Tab>
          <Tab
            className={({ selected }) =>
              classNames(
                'w-full py-2.5 text-md font-medium leading-5 text-blue-700 px-5',
                'ring-white ring-opacity-60 ring-offset-2 ring-offset-blue-400',
                selected
                  ? 'bg-white shadow border-b-2'
                  : 'text-blue-100  hover:text-orange-500'
              )
            }
          >
            Актёры и Режисёры
          </Tab>
          <Tab
            className={({ selected }) =>
              classNames(
                'w-full py-2.5 text-md font-medium leading-5 text-blue-700 px-5',
                'ring-white ring-opacity-60 ring-offset-2 ring-offset-blue-400',
                selected
                  ? 'bg-white shadow border-b-2'
                  : 'text-blue-100 hover:text-orange-500'
              )
            }
          >
            Награды
          </Tab>
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
