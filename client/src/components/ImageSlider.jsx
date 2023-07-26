'use client';

import LeftArrowIcon from '@/public/icons/LeftArrow';
import RightArrowIcon from '@/public/icons/RightArrow';
import Image from 'next/image';
import { useState } from 'react';

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

const ImageSlider = () => {
  const [currentImage, setCurrentImage] = useState(0);

  return (
    <div className='group relative mx-auto h-44 w-full md:h-[336px]'>
      {/* Mobile Image Slider */}
      <div className=' w-full md:hidden'>
        <Image
          src={`${slides[currentImage].src}`}
          alt={`${slides[currentImage].alt}`}
          className='bg-cover bg-center brightness-50 duration-500'
          quality={100}
          fill
          // sizes='100vw'
          style={{
            objectFit: 'cover',
          }}
        />
        {/* TODO Create Dots */}
        {/* <div className='absolute left-1/2 top-2 inline-flex w-10 items-center justify-center gap-1'>
          {slides.map((slide, index) => {
            return (
              <div
                key={index}
                className={`${
                  index === currentImage
                    ? 'h-2 w-2 rounded-full border border-gray-200 bg-gray-600'
                    : 'h-1 w-1 rounded-full bg-zinc-400'
                }`}
                onClick={() => setCurrentImage(index)}
              ></div>
            );
          })}
        </div> */}
      </div>

      {/* _________ */}
      {/* Desktop Image Slider */}
      <div className='hidden md:block'>
        {/* Left Arrow */}
        <Image
          src={`${slides[currentImage].src}`}
          alt={`${slides[currentImage].alt}`}
          className='bg-cover bg-center brightness-50 duration-500'
          quality={100}
          fill
          // sizes='100vw'
          style={{
            objectFit: 'cover',
          }}
        />
        <div className='absolute right-5 top-[50%] hidden -translate-x-0 translate-y-[-50%] cursor-pointer rounded-full bg-black/20 p-2 text-2xl text-white group-hover:block'>
          <RightArrowIcon />
        </div>
        {/* Right Arrow */}
        <div className='absolute left-5 top-[50%] hidden -translate-x-0 translate-y-[-50%] cursor-pointer rounded-full bg-black/20 p-2 text-2xl text-white group-hover:block'>
          <LeftArrowIcon />
        </div>
      </div>
    </div>
  );
};

export default ImageSlider;
