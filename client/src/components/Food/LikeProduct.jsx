'use client';

import { useState } from 'react';
import { HiOutlineHeart } from 'react-icons/hi2';

const LikeProduct = () => {
  const [isLiked, setIsLiked] = useState(false);

  const handlerLike = () => {
    setIsLiked(!isLiked);
  };

  return (
    <div className='flex items-center'>
      <button onClick={handlerLike}>
        {isLiked ? (
          <HiOutlineHeart className='h-4 w-4 fill-errorLight text-center text-errorLight lg:h-6 lg:w-6 ' />
        ) : (
          <HiOutlineHeart className='h-4 w-4 text-center text-secondary-700 lg:h-6 lg:w-6 ' />
        )}
      </button>
    </div>
  );
};

export default LikeProduct;
