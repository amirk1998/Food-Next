'use client';

import HeartIcon from '@/public/icons/HeartIcon';
import LocationIcon from '@/public/icons/LocationIcon';
import LogoutIcon from '@/public/icons/LogoutIcon';
import ProfileIcon from '@/public/icons/Profile';
import ProfileItem from '@/public/icons/ProfileItem';
import WalletIcon from '@/public/icons/WalletIcon';
import { Dropdown } from 'flowbite-react';

const ProfileDropDown = ({ isMobile = true }) => {
  return (
    <Dropdown
      dir='rtl'
      inline
      label={<ProfileIcon isMobile={isMobile} />}
      arrowIcon={null}
      className='z-20'
    >
      <Dropdown.Item
        className='flex items-center gap-x-1 px-2 text-sm'
        icon={ProfileItem}
      >
        پروفایل
      </Dropdown.Item>
      <Dropdown.Divider />
      <Dropdown.Item
        className='flex items-center gap-x-1 px-2'
        icon={WalletIcon}
      >
        پیگیری سفارش
      </Dropdown.Item>
      <Dropdown.Divider />
      <Dropdown.Item
        className='flex items-center gap-x-1 px-2'
        icon={HeartIcon}
      >
        علاقه مندی ها
      </Dropdown.Item>
      <Dropdown.Divider />
      <Dropdown.Item
        className='flex items-center gap-x-1 px-2'
        icon={LocationIcon}
      >
        آدرس های من
      </Dropdown.Item>
      <Dropdown.Divider />
      <Dropdown.Item
        className='flex items-center gap-x-1 px-2'
        icon={LogoutIcon}
      >
        خروج از حساب
      </Dropdown.Item>
    </Dropdown>
  );
};

export default ProfileDropDown;
