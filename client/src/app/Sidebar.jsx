'use client';

import CloseSidebarIcon from '@/public/icons/CloseSidebarIcon';
import HomeIcon from '@/public/icons/HomeIcon';
import SidebarText from '@/public/icons/SidebarText';
import Image from 'next/image';
import Link from 'next/link';

const SidebarMenu = () => {
  return (
    <div>
      <div className='h-full overflow-y-auto bg-white pb-4'>
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
          <button className='absolute left-4 top-4 rounded-full focus:rounded-full'>
            <CloseSidebarIcon />
          </button>
        </div>
        <ul className='space-y-2 text-xs font-medium'>
          <li className='px-4'>
            <Link href={'#'} className='mb-1 flex items-center gap-x-1'>
              <HomeIcon />
              <span>صفحه اصلی</span>
            </Link>
            <div className='w-full border-b-2 text-secondary-400'></div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default SidebarMenu;
