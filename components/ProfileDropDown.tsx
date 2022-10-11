import { Menu, Transition } from '@headlessui/react';
import { ArrowLeftOnRectangleIcon, UserCircleIcon } from '@heroicons/react/24/outline';
import { Avatar } from '@mui/material';
import clsx from 'clsx';
import { useRouter } from 'next/router';
import { Fragment } from 'react';

export default function ProfileDropDown() {
  const router = useRouter();
  const handleLogout = () => {
    localStorage.clear();
    router.push('/account/login');
  };

  return (
    <Menu as="div" className="relative inline-block text-left">
      <div>
        <Menu.Button>
          <Avatar className="p-4 text-base bg-red-500">M</Avatar>
        </Menu.Button>
      </div>
      <Transition
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <Menu.Items className="absolute right-0 w-56 mt-2 origin-top-right bg-white divide-y divide-gray-100 rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
          <ul className="p-1">
            <Menu.Item as={'li'}>
              {({ active }) => (
                <button
                  className={clsx(
                    'group flex w-full items-center rounded-md px-2 py-2 text-sm',
                    `${active ? 'bg-blue-100' : 'text-gray-900'}`
                  )}
                >
                  <UserCircleIcon className="w-5 h-5 mr-2 text-blue-700" aria-hidden="true" />
                  Profile
                </button>
              )}
            </Menu.Item>
            <Menu.Item as={'li'}>
              {({ active }) => (
                <button
                  onClick={() => handleLogout()}
                  className={clsx(
                    'group flex w-full items-center rounded-md px-2 py-2 text-sm',
                    `${active ? 'bg-blue-100' : 'text-gray-900'}`
                  )}
                >
                  <ArrowLeftOnRectangleIcon
                    className="w-5 h-5 mr-2 text-blue-700"
                    aria-hidden="true"
                  />
                  Logout
                </button>
              )}
            </Menu.Item>
          </ul>
        </Menu.Items>
      </Transition>
    </Menu>
  );
}
