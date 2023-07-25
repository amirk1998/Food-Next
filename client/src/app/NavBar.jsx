'use client';

import MenuIcon from '@/public/icons/Menu';
import ProfileDropDown from '@/components/Profile';
import TitleText from '@/public/icons/TitleText';
import CartIcon from '@/public/icons/CartIcon';

const NavBar = () => {
  return (
    <div className=' w-full px-5 py-4 lg:h-[112px] lg:max-w-screen-lg xl:max-w-screen-xl'>
      {/* Mobile NavBar */}
      <div className='flex items-center justify-between  md:hidden'>
        <MenuIcon />
        <TitleText />
        <div className='flex items-center gap-x-1'>
          <CartIcon />
          <ProfileDropDown />
        </div>
      </div>
    </div>
  );
};

export default NavBar;
