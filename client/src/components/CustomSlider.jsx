'use client';

import ImageSlider from './ImageSlider';

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

const CustomSlider = ({ text, isShowButton = false }) => {
  return (
    <div className='relative'>
      <ImageSlider slides={slides} />
      <span className='absolute top-16 z-20 w-full select-none text-center text-base leading-normal text-white md:top-[128px] md:text-[40px]'>
        {text}
      </span>
      {isShowButton && (
        <div className='flex items-center justify-center'>
          <button
            id='order-food'
            className='btn absolute bottom-8 z-10 text-[10px] md:bottom-24 md:text-base'
          >
            سفارش آنلاین غذا
          </button>
        </div>
      )}
    </div>
  );
};

export default CustomSlider;
