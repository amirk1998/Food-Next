'use client';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import Image from 'next/image';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

// import { useWindowSize } from '@uidotdev/usehooks';

const styles = {
  '--swiper-navigation-color': 'white',
  '--swiper-navigation-size': '32px',
  '--swiper-pagination-color': '#417F56',
  '--swiper-pagination-bullet-size': '12px',
  '--swiper-pagination-bullet-inactive-color': '#fff',
  '--swiper-pagination-bottom': '2px',
};

const ImageSlider = ({ slides }) => {
  // const size = useWindowSize();
  return (
    <div>
      <Swiper
        dir='ltr'
        // navigation={size.width > 760 ? true : false}
        navigation={true}
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
