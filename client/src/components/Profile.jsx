'use client';

import HeartIcon from '@/public/icons/HeartIcon';
import LocationIcon from '@/public/icons/LocationIcon';
import LogoutIcon from '@/public/icons/LogoutIcon';
import ProfileIcon from '@/public/icons/Profile';
import ProfileItem from '@/public/icons/ProfileItem';
import ShieldIcon from '@/public/icons/ShieldIcon';
import WalletIcon from '@/public/icons/WalletIcon';
import { Dropdown } from 'flowbite-react';

const ProfileDropDown = ({ isMobile = true, user }) => {
  return (
    <Dropdown
      dir='rtl'
      inline
      label={<ProfileIcon isMobile={isMobile} />}
      arrowIcon={null}
      className='z-20'
    >
      {user && user.role === 'ADMIN' && (
        <div>
          <Dropdown.Item
            className='flex items-center gap-x-1 stroke-primary-800 px-2 text-sm text-primary-800'
            icon={ShieldIcon}
          >
            پنل ادمین
          </Dropdown.Item>
          <Dropdown.Divider />
        </div>
      )}
      <Dropdown.Item
        className='flex items-center gap-x-1 stroke-secondary-800 px-2 text-sm'
        icon={ProfileItem}
      >
        پروفایل
      </Dropdown.Item>
      <Dropdown.Divider />
      <Dropdown.Item
        className='flex items-center gap-x-1 stroke-secondary-800 px-2 text-sm'
        icon={WalletIcon}
      >
        پیگیری سفارش
      </Dropdown.Item>
      <Dropdown.Divider />
      <Dropdown.Item
        className='flex items-center gap-x-1 stroke-secondary-800 px-2 text-sm'
        icon={HeartIcon}
      >
        علاقه مندی ها
      </Dropdown.Item>
      <Dropdown.Divider />
      <Dropdown.Item
        className='flex items-center gap-x-1 stroke-secondary-800 px-2 text-sm'
        icon={LocationIcon}
      >
        آدرس های من
      </Dropdown.Item>
      <Dropdown.Divider />
      <Dropdown.Item
        className='flex items-center gap-x-1 stroke-errorLight px-2 text-sm text-errorLight'
        icon={LogoutIcon}
      >
        خروج از حساب
      </Dropdown.Item>
    </Dropdown>
  );
};

export default ProfileDropDown;
