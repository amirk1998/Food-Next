'use client';

import { Dropdown } from 'flowbite-react';
import Link from 'next/link';

const MenuNavbar = () => {
  return (
    <Dropdown inline label='منو' className='z-20'>
      <Dropdown.Item className='text-secondary-800'>
        <Link className='block px-2 py-0.5' href={'#'}>
          غذای اصلی
        </Link>
      </Dropdown.Item>
      <Dropdown.Divider />
      <Dropdown.Item className='text-secondary-800'>
        <Link className='block px-2 py-0.5' href={'#'}>
          پیش غذا
        </Link>
      </Dropdown.Item>
      <Dropdown.Divider />
      <Dropdown.Item className='text-secondary-800'>
        <Link className='block px-2 py-0.5' href={'#'}>
          دسر
        </Link>
      </Dropdown.Item>
      <Dropdown.Divider />
      <Dropdown.Item className='text-secondary-800'>
        <Link className='block px-2 py-0.5' href={'#'}>
          نوشیدنی
        </Link>
      </Dropdown.Item>
    </Dropdown>
  );
};

export default MenuNavbar;
