'use client';

import MenuIcon from '@/public/icons/Menu';
import ProfileDropDown from '@/components/Profile';
import TitleText from '@/public/icons/TitleText';
import CartIcon from '@/public/icons/CartIcon';
import { useState } from 'react';
import SidebarMenu from './Sidebar';
import SearchIcon from '@/public/icons/SearchIcon';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import BranchNavbar from '@/components/BranchNavbar';
import MenuNavbar from '@/components/MenuNavbar';

const NavBar = () => {
  const pathname = usePathname();
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  console.log(pathname);

  return (
    <header className=' w-full px-5 py-4 lg:h-[112px] lg:px-[108px] lg:py-8 '>
      <nav>
        {/* Mobile NavBar */}
        <div className='flex items-center justify-between  md:hidden'>
          <button onClick={() => setIsSidebarOpen(true)}>
            <MenuIcon />
          </button>

          <TitleText />
          <div className='flex items-center gap-x-1'>
            <button className='z-20 flex h-6 w-6 items-center justify-center rounded bg-primary-100 stroke-primary-800 p-2 text-primary-800'>
              <CartIcon />
            </button>
            <div className='z-20 flex h-6 w-6 items-center justify-center rounded bg-primary-100 stroke-primary-800 p-2 text-primary-800'>
              <ProfileDropDown />
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
            <button className='z-20 flex h-10 w-10 items-center justify-center rounded bg-primary-100 stroke-primary-800 p-2 text-primary-800'>
              <CartIcon isMobile={false} />
            </button>
            <div className='z-20 flex h-10 w-10 items-center justify-center rounded bg-primary-100 stroke-primary-800 p-2 text-primary-800'>
              <ProfileDropDown isMobile={false} />
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default NavBar;
