'use client';

import SearchField from '@/common/SearchField';
import BranchSelection from '@/components/BranchSelection';
import FoodComponent from '@/components/FoodComponent';
import ImageSlider from '@/components/ImageSlider';
import DiagramIcon from '@/public/icons/DigramIcon';
import HomeWiFi from '@/public/icons/HomeWiFi';
import MenuBoardIcon from '@/public/icons/MenuBoard';
import UserOutline from '@/public/icons/UserOutline';
import Image from 'next/image';
// import UserOutline from '@/icons/UserOutline.svg';

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

const branchData = [
  {
    id: 1,
    src: '/images/Branches/branch(1).png',
    alt: 'شعبه اکباتان',
    title: 'شعبه اکباتان',
    description: 'شهرک اکباتان، فاز ۳، مجتمع تجاری کوروش، طبقه سوم',
  },
  {
    id: 2,
    src: '/images/Branches/branch(2).png',
    alt: 'شعبه چالوس',
    title: 'شعبه چالوس',
    description:
      'چالوس، خیابان ۱۷ شهریور، بعد کوچه کوروش، جنب داروخانه دکتر میلانی',
  },
  {
    id: 3,
    src: '/images/Branches/branch(3).png',
    alt: 'شعبه اقدسیه',
    title: 'شعبه اقدسیه',
    description: 'خیابان اقدسیه ، نرسیده به میدان خیام، پلاک ۸',
  },
  {
    id: 4,
    src: '/images/Branches/branch(4).png',
    alt: 'شعبه ونک',
    title: 'شعبه ونک',
    description: 'میدان ونک، خیابان فردوسی، نبش کوچه نیلوفر، پلاک ۲۶',
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
        <div className='flex items-center justify-center'>
          <button className='btn absolute bottom-8 z-10 text-[10px] md:bottom-24 md:text-base'>
            سفارش آنلاین غذا
          </button>
        </div>
      </div>
      <div className='mt-4 w-full px-5'>
        <SearchField />
      </div>
      <h1 className='mb-3 mt-6 text-center text-base font-bold leading-snug lg:text-2xl'>
        منوی رستوران
      </h1>
      <div className='container grid w-full max-w-sm grid-cols-2 grid-rows-2 gap-4 px-5 md:max-w-2xl lg:max-w-4xl lg:px-12 xl:max-w-screen-2xl xl:grid-cols-4 xl:grid-rows-1 '>
        {foodItems.map((item, index) => {
          return (
            <div className='flex items-center justify-center' key={item.id}>
              <FoodComponent item={item} />
            </div>
          );
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
        {/* Text */}

        <div className='z-10 flex flex-col gap-y-6 px-5 py-4 text-white lg:flex-row lg:gap-x-[232px] lg:gap-y-0 lg:px-[108px] lg:py-0'>
          <div className='flex flex-1 flex-col lg:py-12'>
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
          </div>
          <div className='grid flex-1 grid-cols-2 grid-rows-2 lg:gap-x-6 lg:gap-y-2 lg:py-14'>
            {/* Icon #1 */}
            <div className='flex w-[117px] flex-col items-center gap-y-1 lg:w-[184px] lg:gap-y-4'>
              <UserOutline />
              <span className='text-xs font-normal leading-snug text-white lg:text-lg'>
                پرسنلی مجرب و حرفه‌ای
              </span>
            </div>

            {/* Icon #2 */}
            <div className='flex w-[117px] flex-col items-center gap-y-1 lg:w-[184px] lg:gap-y-4'>
              <DiagramIcon />
              <span className='text-xs font-normal leading-snug text-white lg:text-lg'>
                کیفیت بالای غذاها
              </span>
            </div>

            {/* Icon #3 */}
            <div className='flex w-[117px] flex-col items-center gap-y-1 lg:w-[184px] lg:gap-y-4'>
              <HomeWiFi />
              <span className='text-xs font-normal leading-snug text-white lg:text-lg'>
                محیطی دلنشین و آرام
              </span>
            </div>

            {/* Icon #4 */}
            <div className='flex w-[117px] flex-col items-center gap-y-1 lg:w-[184px] lg:gap-y-4'>
              <MenuBoardIcon />
              <span className='text-xs font-normal leading-snug text-white lg:text-lg'>
                منوی متنوع
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className='mt-6 flex flex-col items-center gap-y-3 px-5'>
        <h1 className='mb-2 text-base font-bold leading-7 md:text-lg lg:text-2xl'>
          ترخینه گردی
        </h1>
        <div className='flex flex-col items-center gap-y-3 md:mb-12 md:flex-row md:gap-x-6'>
          {branchData.map((branch) => {
            return <BranchSelection branch={branch} key={branch.id} />;
          })}
        </div>
      </div>
    </main>
  );
}
