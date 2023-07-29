'use client';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import Image from 'next/image';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const styles = {
  '--swiper-navigation-color': 'white',
  '--swiper-navigation-size': '32px',
  '--swiper-pagination-color': '#417F56',
  '--swiper-pagination-bullet-size': '12px',
  '--swiper-pagination-bullet-inactive-color': '#fff',
};

const ImageSlider = ({ slides }) => {
  return (
    <div>
      <Swiper
        dir='ltr'
        navigation={window.innerWidth > 760 ? true : false}
        pagination={{
          clickable: true,
        }}
        modules={[Navigation, Pagination]}
        className='max-h-44 md:max-h-[336px]'
        style={styles}
      >
        {slides.map((slide, index) => {
          return (
            <SwiperSlide key={index}>
              <Image
                className='brightness-50'
                src={slide.src}
                alt={slide.alt}
                quality={100}
                fill
                sizes='100vw'
                style={{
                  objectFit: 'cover',
                }}
              />
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};

export default ImageSlider;
