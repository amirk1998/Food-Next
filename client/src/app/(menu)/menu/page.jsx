'use client';
import SearchField from '@/common/SearchField';
import FoodComponent from '@/components/Food/FoodComponent';
import CustomSlider from '@/components/Slider/CustomSlider';
import newProductsData from '@/public/Test/NewProductsData';
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
      <ul className='mb-2 flex h-16 w-full items-center gap-x-4 bg-secondary-300 py-2 pr-5 md:gap-x-6 lg:gap-x-8'>
        <li className='block'>
          <Link
            href={'#'}
            className='text-sm text-primary-800 underline underline-offset-8 md:text-lg lg:text-xl'
          >
            غذای اصلی
          </Link>
        </li>
        <li className='block'>
          <Link
            href={'#'}
            className='text-xs text-secondary-700 md:text-lg lg:text-xl'
          >
            پیش غذا
          </Link>
        </li>
        <li className='block'>
          <Link
            href={'#'}
            className='text-xs text-secondary-700 md:text-lg lg:text-xl'
          >
            دسر
          </Link>
        </li>
        <li className='block'>
          <Link
            href={'#'}
            className='text-xs text-secondary-700 md:text-lg lg:text-xl'
          >
            نوشیدنی
          </Link>
        </li>
      </ul>
      <div className='py-2 lg:flex lg:flex-row lg:px-28'>
        {/* Category : Modify Later ! */}
        <ul
          className='no-scrollbar flex w-full items-center gap-x-2 overflow-x-auto pr-5 lg:ml-4 lg:max-w-[680px]'
          dir='rtl'
        >
          {categoryData.map((category) => {
            return (
              <li
                className='flex cursor-pointer items-center justify-center whitespace-nowrap rounded-lg bg-secondary-300 px-3 py-2 text-[10px] text-secondary-800 md:rounded-[10px] md:text-sm lg:h-8 lg:rounded-xl lg:text-base lg:leading-7'
                key={category.id}
              >
                {category.title}
              </li>
            );
          })}
        </ul>
        {/* Search Field */}
        <div className='mt-3 w-full px-5 lg:mt-0 lg:flex-1 lg:pl-0'>
          <SearchField className='lg:block' />
        </div>
      </div>
      {/* Food Component : Customize */}
      <FoodComponent
        ProductsData={ProductsData}
        categoryTitle={'غذای ایرانی'}
        isShowBtn={true}
      />
      <FoodComponent
        ProductsData={newProductsData}
        categoryTitle={'غذای غیر ایرانی'}
        // isShowBtn={true}
      />
    </div>
  );
};

export default MenuPage;
