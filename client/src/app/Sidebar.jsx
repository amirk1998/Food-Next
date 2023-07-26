'use client';

import AboutUsIcon from '@/public/icons/AboutUsIcon';
import CallUsIcon from '@/public/icons/Call-Icon';
import CloseSidebarIcon from '@/public/icons/CloseSidebarIcon';
import HomeHashtagIcon from '@/public/icons/HomeHashtag';
import HomeIcon from '@/public/icons/HomeIcon';
import MenuBoardIcon from '@/public/icons/MenuBoard';
import SidebarText from '@/public/icons/SidebarText';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

const SidebarMenu = ({ setIsSidebarOpen }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isBranchOpen, setIsBranchOpen] = useState(false);

  return (
    <div>
      <div className='z-10 h-full overflow-y-auto bg-white pb-4'>
        {/* Image */}
        <div className='relative mb-2'>
          <Image
            src='/images/SidebarImage.png'
            width={256}
            height={94}
            className='max-h-[94px] object-cover brightness-50'
            alt='sidebar'
          />

          <div className='absolute right-4 top-8 z-10'>
            <SidebarText />
          </div>
          <button
            onClick={() => setIsSidebarOpen(false)}
            className='absolute left-4 top-4 rounded-full focus:rounded-full'
          >
            <CloseSidebarIcon />
          </button>
        </div>
        <ul className='space-y-2 text-xs font-medium'>
          {/* #1 */}
          <li className='px-4'>
            <Link href={'#'} className='mb-2 flex items-center gap-x-1'>
              <HomeIcon />
              <span className='text-primary-800'>صفحه اصلی</span>
            </Link>
            <div className='w-full border-b-2 border-secondary-400'></div>
          </li>
          {/* #2 */}
          <li className='px-4'>
            <button
              className='mb-2 flex w-full items-center justify-between'
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <span className='flex items-center gap-x-1'>
                <MenuBoardIcon />
                <span>منو</span>
              </span>
              <span>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  width='16'
                  height='16'
                  fill='none'
                  className={`${isMenuOpen ? 'rotate-180' : 'rotate-0'} `}
                >
                  <path
                    fill='#353535'
                    d='M8 11.2c-.467 0-.933-.18-1.287-.533L2.367 6.32a.503.503 0 0 1 0-.707.503.503 0 0 1 .706 0L7.42 9.96c.32.32.84.32 1.16 0l4.347-4.347a.503.503 0 0 1 .706 0 .503.503 0 0 1 0 .707l-4.346 4.347c-.354.353-.82.533-1.287.533Z'
                  />
                </svg>
              </span>
            </button>
            {isMenuOpen && (
              <ul className='space-y-2'>
                <li className='block border-b-2 border-secondary-300 px-2 py-2 text-xs'>
                  <Link href={'#'}>غذای اصلی</Link>
                </li>
                <li className='block border-b-2 border-secondary-300 px-2 py-2 text-xs'>
                  <Link href={'#'}> پیش غذا</Link>
                </li>
                <li className='block border-b-2 border-secondary-300 px-2 py-2 text-xs'>
                  <Link href={'#'}>دسر </Link>
                </li>
                <li className='block px-2 py-2 text-xs'>
                  <Link href={'#'}>نوشیدنی </Link>
                </li>
              </ul>
            )}
            <div className='w-full border-b-2 border-secondary-400'></div>
          </li>
          {/* #3 */}
          <li className='px-4'>
            <button
              className='mb-2 flex w-full items-center justify-between'
              onClick={() => setIsBranchOpen(!isBranchOpen)}
            >
              <span className='flex items-center gap-x-1'>
                <HomeHashtagIcon />
                <span>شعبه</span>
              </span>
              <span>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  width='16'
                  height='16'
                  fill='none'
                  className={`${isBranchOpen ? 'rotate-180' : 'rotate-0'} `}
                >
                  <path
                    fill='#353535'
                    d='M8 11.2c-.467 0-.933-.18-1.287-.533L2.367 6.32a.503.503 0 0 1 0-.707.503.503 0 0 1 .706 0L7.42 9.96c.32.32.84.32 1.16 0l4.347-4.347a.503.503 0 0 1 .706 0 .503.503 0 0 1 0 .707l-4.346 4.347c-.354.353-.82.533-1.287.533Z'
                  />
                </svg>
              </span>
            </button>
            {isBranchOpen && (
              <ul className='space-y-2'>
                <li className='block border-b-2 border-secondary-300 px-2 py-2 text-xs'>
                  <Link href={'#'}> اکباتان</Link>
                </li>
                <li className='block border-b-2 border-secondary-300 px-2 py-2 text-xs'>
                  <Link href={'#'}> چالوس </Link>
                </li>
                <li className='block border-b-2 border-secondary-300 px-2 py-2 text-xs'>
                  <Link href={'#'}>اقدسیه </Link>
                </li>
                <li className='block px-2 py-2 text-xs'>
                  <Link href={'#'}>ونک </Link>
                </li>
              </ul>
            )}
            <div className='w-full border-b-2 border-secondary-400'></div>
          </li>
          {/* #4 */}
          <li className='px-4'>
            <Link href={'#'} className='mb-2 flex items-center gap-x-1'>
              <AboutUsIcon />
              <span> درباره ما</span>
            </Link>
            <div className='w-full border-b-2 border-secondary-400'></div>
          </li>
          {/* #5 */}
          <li className='px-4'>
            <Link href={'#'} className='mb-2 flex items-center gap-x-1'>
              <CallUsIcon />
              <span> تماس با ما</span>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default SidebarMenu;
