import {
  toPersianNumbers,
  toPersianNumbersWithComma,
} from '@/utils/toPersianNumbers';
import Image from 'next/image';

const FoodComponent = ({ product }) => {
  return (
    <div className='flex h-[100px] w-full items-center gap-x-2 rounded border-2 border-secondary-400 pl-2'>
      {/*Product Image */}
      <div className='relative h-[95px] w-[92px] '>
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
      <div className='flex w-full flex-col gap-y-[6px] py-2'>
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
        {/* <div className='flex items-center gap-x-2'>
          <p>HEART</p>
        </div> */}
      </div>
    </div>
  );
};

export default FoodComponent;
