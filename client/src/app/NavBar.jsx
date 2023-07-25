'use client';

import MenuIcon from '@/public/icons/Menu';
import ProfileDropDown from '@/components/Profile';
import TitleText from '@/public/icons/TitleText';
import CartIcon from '@/public/icons/CartIcon';
import { useState } from 'react';
import SidebarMenu from './Sidebar';

const NavBar = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <div className=' w-full px-5 py-4 lg:h-[112px] lg:max-w-screen-lg xl:max-w-screen-xl'>
      {/* Mobile NavBar */}
      <div className='flex items-center justify-between  md:hidden'>
        <button onClick={() => setIsSidebarOpen(true)}>
          <MenuIcon />
        </button>

        <TitleText />
        <div className='flex items-center gap-x-1'>
          <CartIcon />
          <ProfileDropDown />
        </div>
        <div
          className={`fixed right-0 top-0 h-full w-64 bg-white
        ${
          isSidebarOpen ? 'translate-x-0' : 'translate-x-full'
        } transition-transform`}
        >
          <SidebarMenu />
        </div>
      </div>
    </div>
  );
};

export default NavBar;
