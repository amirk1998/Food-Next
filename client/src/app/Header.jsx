'use client';

import MenuIcon from '@/public/icons/Menu';
import ProfileDropDown from '@/components/Profile';
import TitleText from '@/public/icons/TitleText';
import CartIcon from '@/public/icons/CartIcon';
import { useState } from 'react';
import SidebarMenu from '../components/Navbar/Sidebar';
import SearchIcon from '@/public/icons/SearchIcon';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import BranchNavbar from '@/components/Navbar/BranchNavbar';
import MenuNavbar from '@/components/Navbar/MenuNavbar';
import { useGetUser } from '@/hooks/useAuth';

const Header = ({ className }) => {
  const { data, error, isLoading } = useGetUser();
  const { user, cart } = data || {};

  const pathname = usePathname();
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  console.log(pathname);

  return (
    <header
      className={`w-full px-5 py-4 lg:h-[112px] lg:px-[108px] lg:py-8 ${className}`}
    >
      <nav>
        {/* Mobile NavBar */}
        <div className='flex items-center justify-between  md:hidden'>
          <button onClick={() => setIsSidebarOpen(true)}>
            <MenuIcon />
          </button>

          <TitleText />
          <div className='flex items-center gap-x-1'>
            <div className='z-20 flex h-6 w-6 items-center justify-center rounded bg-primary-100 stroke-primary-800 p-2 text-primary-800'>
              <Link href='/cart'>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  className='h-4 w-4'
                  viewBox='0 0 24 24'
                  fill='currentColor'
                >
                  <path
                    fill='currentColor'
                    d='M18.19 17.75H7.54c-.99 0-1.94-.42-2.61-1.15A3.573 3.573 0 0 1 4 13.9l.83-9.96c.03-.31-.08-.61-.29-.84-.21-.23-.5-.35-.81-.35H2c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h1.74c.73 0 1.42.31 1.91.84.27.3.47.65.58 1.04h12.49c1.01 0 1.94.4 2.62 1.12.67.73 1.01 1.68.93 2.69l-.54 7.5c-.11 1.83-1.71 3.31-3.54 3.31ZM6.28 4.62l-.78 9.4c-.05.58.14 1.13.53 1.56.39.43.93.66 1.51.66h10.65c1.04 0 1.98-.88 2.06-1.92l.54-7.5a2.04 2.04 0 0 0-2.06-2.21H6.28v.01ZM16.25 22.75c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2Zm0-2.5c-.28 0-.5.22-.5.5s.22.5.5.5.5-.22.5-.5-.22-.5-.5-.5ZM8.25 22.75c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2Zm0-2.5c-.28 0-.5.22-.5.5s.22.5.5.5.5-.22.5-.5-.22-.5-.5-.5Z'
                  />
                  <path
                    fill='currentColor'
                    d='M21 8.75H9c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h12c.41 0 .75.34.75.75s-.34.75-.75.75Z'
                  />
                </svg>
              </Link>
            </div>
            <div className='z-20 flex h-6 w-6 items-center justify-center rounded bg-primary-100 stroke-primary-800 p-2 text-primary-800'>
              {user ? (
                <ProfileDropDown user={user} />
              ) : (
                <Link href='/auth'>
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    className='h-4 w-4'
                    viewBox='0 0 24 24'
                    fill='none'
                  >
                    <path
                      fill='#353535'
                      d='M12 12.75c-3.17 0-5.75-2.58-5.75-5.75S8.83 1.25 12 1.25 17.75 3.83 17.75 7s-2.58 5.75-5.75 5.75Zm0-10A4.26 4.26 0 0 0 7.75 7 4.26 4.26 0 0 0 12 11.25 4.26 4.26 0 0 0 16.25 7 4.26 4.26 0 0 0 12 2.75ZM20.59 22.75c-.41 0-.75-.34-.75-.75 0-3.45-3.52-6.25-7.84-6.25S4.16 18.55 4.16 22c0 .41-.34.75-.75.75s-.75-.34-.75-.75c0-4.27 4.19-7.75 9.34-7.75 5.15 0 9.34 3.48 9.34 7.75 0 .41-.34.75-.75.75Z'
                    />
                  </svg>
                </Link>
              )}
            </div>
          </div>
          <div
            className={`fixed right-0 top-0 z-30 h-full w-64 bg-white
          ${
            isSidebarOpen ? 'translate-x-0' : 'translate-x-full'
          } transition-transform`}
          >
            <SidebarMenu setIsSidebarOpen={setIsSidebarOpen} />
          </div>
        </div>
        {/* Desktop NavBar */}
        <div className='hidden gap-x-14 md:flex md:items-center md:justify-between'>
          <TitleText isMobile={false} />
          {/* Section 2 Menu */}
          <ul className='flex flex-1 items-center justify-center gap-x-6'>
            {/* # LI #1 */}
            <li className='text-xl'>
              <Link
                href='/'
                className={
                  pathname === '/'
                    ? 'text-xl font-bold text-primary-800 underline decoration-current underline-offset-8'
                    : 'text-xl font-bold text-secondary-700'
                }
              >
                صفحه اصلی
              </Link>
            </li>

            {/* # LI #2 */}
            <li className='text-xl font-bold text-secondary-700'>
              <BranchNavbar />
            </li>

            {/* # LI #3 */}
            <li className='text-xl font-bold text-secondary-700'>
              <MenuNavbar />
            </li>

            {/* # LI #4 */}
            <li className='text-xl'>
              <Link
                href='/#'
                className={
                  pathname === ''
                    ? 'text-xl font-bold text-primary-800 underline decoration-current underline-offset-8'
                    : 'text-xl font-bold text-secondary-700'
                }
              >
                اعطای نمایندگی
              </Link>
            </li>

            {/* # LI #5 */}
            <li className='text-xl'>
              <Link
                href='/#'
                className={
                  pathname === '/about-us'
                    ? 'text-xl font-bold text-primary-800 underline decoration-current underline-offset-8'
                    : 'text-xl font-bold text-secondary-700'
                }
              >
                درباره ما
              </Link>
            </li>

            {/* # LI #6 */}
            <li className='text-xl'>
              <Link
                href='/#'
                className={
                  pathname === '/contact-us'
                    ? 'text-xl font-bold text-primary-800 underline decoration-current underline-offset-8'
                    : 'text-xl font-bold text-secondary-700'
                }
              >
                تماس با ما
              </Link>
            </li>
          </ul>
          {/* Section 3 Icons */}
          <div className='flex items-center gap-x-2'>
            <button className='z-20 flex h-10 w-10 items-center justify-center rounded bg-primary-100 stroke-primary-800 p-2 text-primary-800'>
              <SearchIcon />
            </button>
            <div className='z-20 flex h-10 w-10 items-center justify-center rounded bg-primary-100 stroke-primary-800 p-2 text-primary-800'>
              <Link href='/cart'>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  className='h-6 w-6'
                  viewBox='0 0 24 24'
                  fill='currentColor'
                >
                  <path
                    fill='currentColor'
                    d='M18.19 17.75H7.54c-.99 0-1.94-.42-2.61-1.15A3.573 3.573 0 0 1 4 13.9l.83-9.96c.03-.31-.08-.61-.29-.84-.21-.23-.5-.35-.81-.35H2c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h1.74c.73 0 1.42.31 1.91.84.27.3.47.65.58 1.04h12.49c1.01 0 1.94.4 2.62 1.12.67.73 1.01 1.68.93 2.69l-.54 7.5c-.11 1.83-1.71 3.31-3.54 3.31ZM6.28 4.62l-.78 9.4c-.05.58.14 1.13.53 1.56.39.43.93.66 1.51.66h10.65c1.04 0 1.98-.88 2.06-1.92l.54-7.5a2.04 2.04 0 0 0-2.06-2.21H6.28v.01ZM16.25 22.75c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2Zm0-2.5c-.28 0-.5.22-.5.5s.22.5.5.5.5-.22.5-.5-.22-.5-.5-.5ZM8.25 22.75c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2Zm0-2.5c-.28 0-.5.22-.5.5s.22.5.5.5.5-.22.5-.5-.22-.5-.5-.5Z'
                  />
                  <path
                    fill='currentColor'
                    d='M21 8.75H9c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h12c.41 0 .75.34.75.75s-.34.75-.75.75Z'
                  />
                </svg>
              </Link>
            </div>
            <div className='z-20 flex h-10 w-10 items-center justify-center rounded bg-primary-100 stroke-primary-800 p-2 text-primary-800'>
              {user ? (
                <ProfileDropDown isMobile={false} user={user} />
              ) : (
                <Link href='/auth'>
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    width='24'
                    height='24'
                    fill='none'
                  >
                    <path
                      fill='#353535'
                      d='M12 12.75c-3.17 0-5.75-2.58-5.75-5.75S8.83 1.25 12 1.25 17.75 3.83 17.75 7s-2.58 5.75-5.75 5.75Zm0-10A4.26 4.26 0 0 0 7.75 7 4.26 4.26 0 0 0 12 11.25 4.26 4.26 0 0 0 16.25 7 4.26 4.26 0 0 0 12 2.75ZM20.59 22.75c-.41 0-.75-.34-.75-.75 0-3.45-3.52-6.25-7.84-6.25S4.16 18.55 4.16 22c0 .41-.34.75-.75.75s-.75-.34-.75-.75c0-4.27 4.19-7.75 9.34-7.75 5.15 0 9.34 3.48 9.34 7.75 0 .41-.34.75-.75.75Z'
                    />
                  </svg>
                </Link>
              )}
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
