import {
  toPersianNumbers,
  toPersianNumbersWithComma,
} from '@/utils/toPersianNumbers';
import Image from 'next/image';
import LikeProduct from './LikeProduct';
import StarRating from './StarRating';

const FoodDetails = ({ product }) => {
  return (
    <div className='flex h-[100px] w-full items-center gap-x-2 rounded border-2 border-secondary-400 pl-2 md:h-32 lg:h-[158px] lg:max-w-lg xl:max-w-[600px]'>
      {/*Product Image */}
      <div className='relative h-[95px] w-[92px] md:h-[126px] md:w-[130px] lg:h-[158px] lg:w-[169px]'>
        <Image
          src={product.imageLink}
          alt={product.slug}
          sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'
          fill
          className='right-0 top-0 h-full w-full rounded-br rounded-tr object-cover'
          style={{
            objectFit: 'cover',
          }}
        />
      </div>
      {/* Product Data */}
      <div className='w-full'>
        {/* Mobile & Tablet */}
        <div className='flex w-full flex-col gap-y-[6px] py-2 lg:hidden'>
          <div className='flex w-full items-center justify-between gap-x-2'>
            <p className='flex-1 text-xs font-normal leading-snug text-secondary-800'>
              {product.title}
            </p>

            {!!product.discount && (
              <div className='flex items-center gap-x-2'>
                <span className='text-[10px] font-normal leading-[18px] text-secondary-500 line-through'>
                  {toPersianNumbersWithComma(product.price)}
                </span>
                <span className='w-8 rounded-lg bg-errorExtraLight text-center text-[10px] font-normal leading-[18px] text-error'>
                  % {toPersianNumbers(product?.discount)}
                </span>
              </div>
            )}
          </div>
          <div className='flex w-full items-center justify-between gap-x-2'>
            <p className='max-w-[112px] overflow-hidden text-ellipsis whitespace-nowrap text-[10px] font-normal leading-[18px] text-secondary-800'>
              {product.description}
            </p>
            <div className='flex items-center gap-x-2 pl-2'>
              <span className='text-[10px] font-normal leading-[18px] text-secondary-800'>
                {toPersianNumbersWithComma(product.offPrice)}
              </span>
              <span className='text-[10px] font-normal leading-[18px] text-secondary-800'>
                تومان
              </span>
            </div>
          </div>
          <div className='flex items-center gap-x-2'>
            <div className='flex flex-1 items-center gap-x-2'>
              <LikeProduct />
              <StarRating />
            </div>
            <button
              type='button'
              className='h-8 whitespace-nowrap rounded-md border-0 bg-primary-800 p-2 text-[10px] font-normal leading-[18px] text-white'
            >
              افزودن به سبد خرید
            </button>
          </div>
        </div>
        {/* Desktop */}
        <div className='hidden lg:flex lg:w-full lg:flex-col lg:gap-y-[6px] lg:py-2'>
          <div className='flex w-full items-center justify-between gap-x-24'>
            <p className='flex-1 font-normal leading-snug text-secondary-800 lg:text-lg xl:text-xl'>
              {product.title}
            </p>
            <LikeProduct />
          </div>
          <div className='mb-2 flex items-center justify-between gap-x-4'>
            {/* Row 1 */}
            <p className='max-h-12 overflow-hidden text-ellipsis whitespace-normal text-sm font-normal leading-6 text-secondary-800 lg:max-w-[230px] xl:max-w-[263px]'>
              {product.description}
            </p>
            {/* Row 2 */}
            <div className='flex flex-col '>
              {!!product.discount && (
                <div className='flex items-center justify-between pl-2'>
                  <span className='font-normal leading-7  text-secondary-500 line-through lg:text-base xl:text-lg'>
                    {toPersianNumbersWithComma(product.price)}
                  </span>
                  <span className='w-8 rounded-xl bg-errorExtraLight text-center text-xs font-normal leading-5 text-error'>
                    % {toPersianNumbers(product?.discount)}
                  </span>
                </div>
              )}
              <div className='flex items-center gap-x-2 pl-2'>
                <span className='text-lg font-normal leading-[18px] text-secondary-800'>
                  {toPersianNumbersWithComma(product.offPrice)}
                </span>
                <span className='text-lg font-normal leading-[18px] text-secondary-800'>
                  تومان
                </span>
              </div>
            </div>
          </div>
          <div className='flex items-center gap-x-6'>
            <StarRating />
            <button
              type='button'
              className='flex h-10 items-center justify-center whitespace-nowrap rounded-md border-0 bg-primary-800 px-4 py-2 text-base font-normal leading-7 text-white lg:flex-1'
            >
              افزودن به سبد خرید
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FoodDetails;
