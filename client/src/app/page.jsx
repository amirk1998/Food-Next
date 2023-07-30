'use client';

import SearchField from '@/common/SearchField';
import FoodComponent from '@/components/FoodComponent';
import ImageSlider from '@/components/ImageSlider';

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
      <div className='grid w-full grid-cols-2 grid-rows-2 gap-4 px-5 lg:px-12 xl:grid-cols-4 xl:grid-rows-1'>
        {foodItems.map((item, index) => {
          return <FoodComponent item={item} key={item.id} />;
        })}
      </div>
      <div className='mt-6 h-[340px] w-full bg-red-100'>Hello</div>
    </main>
  );
}
