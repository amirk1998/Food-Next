'use client';

import { useState } from 'react';
import { HiStar, HiOutlineStar } from 'react-icons/hi2';

const StarRating = () => {
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);

  return (
    <div className='flex touch-none items-center' dir='ltr'>
      {[...Array(5)].map((star, index) => {
        index += 1;
        return (
          <button
            type='button'
            key={index}
            // className={index <= (hover || rating) ? 'on' : 'off'}
            onClick={() => setRating(index)}
            onMouseEnter={() => setHover(index)}
            onMouseLeave={() => setHover(rating)}
          >
            {index <= (hover || rating) ? (
              <HiStar className='h-4 w-4 fill-warningLight text-center text-warningLight ' />
            ) : (
              <HiOutlineStar className='h-4 w-4 text-center text-warningLight  ' />
            )}
          </button>
        );
      })}
    </div>
  );
};

export default StarRating;
