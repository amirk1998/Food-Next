'use client';
import SearchField from '@/common/SearchField';
import CustomSlider from '@/components/CustomSlider';
import FoodComponent from '@/components/FoodComponent';
import ProductsData from '@/public/Test/ProductsData';
import Link from 'next/link';

const categoryData = [
  { id: 1, title: 'Cat 1' },
  { id: 2, title: 'Cat 2' },
  { id: 3, title: 'Cat 3' },
  { id: 4, title: 'Cat 4' },
  { id: 5, title: 'Cat 5' },
  { id: 6, title: 'Cat 6' },
  { id: 7, title: 'Cat 7' },
  { id: 8, title: 'Cat 8' },
  { id: 9, title: 'Cat 9' },
  { id: 10, title: 'Cat 10' },
];

const MenuPage = () => {
  return (
    <div className='flex w-full flex-col'>
      <CustomSlider text={'لذت غذای سالم و گیاهی را با ترخینه تجربه کنید!'} />
      <ul className='mb-2 flex h-16 w-full items-center gap-x-4 bg-secondary-300 py-2 pr-5'>
        <li className='block'>
          <Link
            href={'#'}
            className='text-sm text-primary-800 underline underline-offset-8'
          >
            غذای اصلی
          </Link>
        </li>
        <li className='block'>
          <Link href={'#'} className='text-xs text-secondary-700 '>
            پیش غذا
          </Link>
        </li>
        <li className='block'>
          <Link href={'#'} className='text-xs text-secondary-700 '>
            دسر
          </Link>
        </li>
        <li className='block'>
          <Link href={'#'} className='text-xs text-secondary-700 '>
            نوشیدنی
          </Link>
        </li>
      </ul>
      <div className='py-2'>
        {/* Category : Modify Later ! */}
        <ul
          className='flex w-full items-center gap-x-2 overflow-x-auto pr-5'
          dir='rtl'
        >
          {categoryData.map((category) => {
            return (
              <li
                className='cursor-pointer whitespace-nowrap rounded-lg bg-secondary-300 px-3 py-2 text-[10px] text-secondary-800 '
                key={category.id}
              >
                {category.title}
              </li>
            );
          })}
        </ul>
        {/* Search Field */}
        <div className='mt-3 w-full px-5'>
          <SearchField />
        </div>
      </div>
      <div className='px-5'>
        <div className='mb-3 flex items-center'>
          <div className='mt-6 flex-1'>
            <h2 className='text-base font-bold leading-snug text-secondary-800'>
              غذاهای ایرانی
            </h2>
          </div>
          <button className='hover:text mt-3 flex h-8 items-center gap-x-1 rounded-md border-2 border-primary-800 p-2 text-primary-800 hover:border-shade-200 hover:text-shade-200 focus:border-shade-300 focus:text-shade-300'>
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

            <span className='text-xs font-normal leading-snug'>تکمیل خرید</span>
          </button>
        </div>
        {/* Food Component */}
        <div className='flex  flex-col gap-y-3'>
          {ProductsData?.map((product, index) => {
            return <FoodComponent key={index} product={product} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default MenuPage;
