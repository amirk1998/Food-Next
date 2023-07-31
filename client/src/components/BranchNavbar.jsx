'use client';

import { Dropdown } from 'flowbite-react';
import Link from 'next/link';

const BranchNavbar = () => {
  return (
    <Dropdown inline label='شعبه' className='z-20'>
      <Dropdown.Item className='text-secondary-800'>
        <Link className='block px-2 py-0.5' href={'#'}>
          اکباتان
        </Link>
      </Dropdown.Item>
      <Dropdown.Divider />
      <Dropdown.Item className='text-secondary-800'>
        <Link className='block px-2 py-0.5' href={'#'}>
          چالوس
        </Link>
      </Dropdown.Item>
      <Dropdown.Divider />
      <Dropdown.Item className='text-secondary-800'>
        <Link className='block px-2 py-0.5' href={'#'}>
          اقدسیه
        </Link>
      </Dropdown.Item>
      <Dropdown.Divider />
      <Dropdown.Item className='text-secondary-800'>
        <Link className='block px-2 py-0.5' href={'#'}>
          ونک
        </Link>
      </Dropdown.Item>
    </Dropdown>
  );
};

export default BranchNavbar;
