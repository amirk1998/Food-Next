'use client';

import SearchField from '@/common/SearchField';
import FoodComponent from '@/components/FoodComponent';
import ImageSlider from '@/components/ImageSlider';
import UserOutline from '@/public/icons/UserOutline';
import Image from 'next/image';

const slides = [
  {
    src: '/images/ImageSlider/Image(1).jpg',
    alt: 'Image (1)',
  },
  {
    src: '/images/ImageSlider/Image(2).jpg',
    alt: 'Image (2)',
  },
  {
    src: '/images/ImageSlider/Image(3).jpg',
    alt: 'Image (3)',
  },
  {
    src: '/images/ImageSlider/Image(4).jpg',
    alt: 'Image (4)',
  },
  {
    src: '/images/ImageSlider/Image(5).jpg',
    alt: 'Image (5)',
  },
  {
    src: '/images/ImageSlider/Image(6).jpg',
    alt: 'Image (6)',
  },
];

const foodItems = [
  {
    id: 1,
    src: '/images/FoodMenu/MainCourse.png',
    alt: 'Main Course',
    label: 'غذای اصلی',
  },
  {
    id: 2,
    src: '/images/FoodMenu/Starter.png',
    alt: 'Starter',
    label: 'پیش غذا',
  },
  {
    id: 3,
    src: '/images/FoodMenu/Dessert.png',
    alt: 'Dessert',
    label: 'دسر',
  },
  {
    id: 4,
    src: '/images/FoodMenu/Drinks.png',
    alt: 'Drink',
    label: 'نوشیدنی',
  },
];

export default function Home() {
  return (
    <main className='flex w-full flex-col'>
      {/* <h1 className='text-4xl font-bold'>Home Page</h1> */}
      <div className='relative'>
        <ImageSlider slides={slides} />
        <span className='absolute top-16 z-10 w-full select-none text-center text-base leading-normal text-white md:top-[128px] md:text-[40px]'>
          تجربه غذای سالم و گیاهی به سبک ترخینه
        </span>
        <div className='z-20 flex items-center justify-center'>
          <button className='btn absolute bottom-8 z-30 text-[10px] md:bottom-24 md:text-base'>
            سفارش آنلاین غذا
          </button>
        </div>
      </div>
      <div className='mt-4 w-full px-5'>
        <SearchField />
      </div>
      <h1 className='mb-3 mt-6 text-center text-base font-bold leading-snug'>
        منوی رستوران
      </h1>
      <div className='container grid w-full grid-cols-2 grid-rows-2 gap-4 px-5 lg:px-12 xl:grid-cols-4 xl:grid-rows-1'>
        {foodItems.map((item, index) => {
          return <FoodComponent item={item} key={item.id} />;
        })}
      </div>
      <div className='relative mt-6 flex h-[340px] w-full lg:h-[390px]'>
        <div className='absolute inset-0 z-0 max-h-[340px] w-full lg:max-h-[390px]'>
          <Image
            alt='Mountains'
            src='/images/IntroImg.png'
            className='blur-[2px] brightness-50'
            quality={70}
            fill
            style={{
              objectFit: 'cover',
            }}
          />
        </div>
        <div className='z-10 flex flex-col px-5 py-4 text-white lg:flex-row lg:justify-between'>
          <h1 className='mb-2 text-base font-bold leading-7 md:mb-4 md:text-lg lg:mb-6 lg:text-2xl'>
            رستوران‌های زنجیره‌ای ترخینه
          </h1>
          <div className='mb-2 w-80 text-justify text-[10px] font-normal capitalize leading-[18px] text-white md:w-96 md:text-base lg:w-[600px] lg:max-w-[600px] lg:text-xl'>
            مهمان‌نوازی یکی از مهم‌ترین مشخصه‌های ایرانیان است و باعث افتخار
            ماست که بیش از 20 سال است خدمت‌گزار مردم شریف ایران هستیم. ما در
            رستوران‌های زنجیره‌ای ترخینه همواره تلاش کردیم که در محیطی اصیل بر
            پایه معماری و طراحی مدرن در کنار طبیعتی دلنواز، غذایی سالم و درخور
            شان شما عزیزان ارائه دهیم.
          </div>
          <div className='mb-6 flex items-center justify-between'>
            <div className='flex-1'></div>
            <button className='inline-flex h-8 w-[152px] items-center justify-center rounded border border-white p-2 text-white'>
              اطلاعات بیشتر
            </button>
          </div>
          <div className='grid grid-cols-2 grid-rows-2'>
            <div className='flex w-[117px] flex-col items-center gap-y-1 lg:w-[184px]'>
              <UserOutline />
              <span className='text-xs font-normal leading-snug text-white'>
                پرسنلی مجرب و حرفه‌ای
              </span>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
