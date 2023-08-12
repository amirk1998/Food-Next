'use client';

import LoadingSpinner from '@/common/Loading';
import { useGetUser } from '@/hooks/useAuth';
import EmptyCartMobile from '@/public/icons/EmptyCartMobile';
import bgMobile from '@/icons/EmptyCartMobile.svg';
import Image from 'next/image';
import Link from 'next/link';

const CartPage = () => {
  const { data, isLoading } = useGetUser();
  const { user, cart } = data || {};

  if (isLoading)
    return (
      <div className='flex items-center justify-center'>
        <LoadingSpinner />
      </div>
    );

  if (!user || !data)
    return (
      <div className='container lg:max-w-screen-lg'>
        <p className='mb-4 font-bold text-secondary-700'>
          برای مشاهده سبد خرید ، لطفا لاگین کنید.
        </p>
        <Link
          href='/auth?redirect=/cart'
          className='text-primary-900 text-lg font-bold transition-all duration-200 hover:text-primary-800'
        >
          رفتن به صفحه لاگین ؟
        </Link>
      </div>
    );

  if (!user.cart?.products || user.cart?.products.length === 0)
    return (
      <div className='flex w-full flex-col px-5 py-6'>
        <div className='flex items-center justify-between'>
          <button>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              className='h-4 w-4'
              viewBox='0 0 24 24'
              fill='currentColor'
            >
              <path
                fill='currentColor'
                d='M8.91 20.67c-.19 0-.38-.07-.53-.22a.754.754 0 0 1 0-1.06l6.52-6.52c.48-.48.48-1.26 0-1.74L8.38 4.61a.754.754 0 0 1 0-1.06c.29-.29.77-.29 1.06 0l6.52 6.52c.51.51.8 1.2.8 1.93s-.28 1.42-.8 1.93l-6.52 6.52c-.15.14-.34.22-.53.22Z'
              />
            </svg>
          </button>
          <h1 className='text-base font-bold leading-snug text-secondary-800'>
            سبد خرید
          </h1>
          <button className='text-secondary-400'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              className='h-4 w-4'
              viewBox='0 0 24 24'
              fill='currentColor'
            >
              <path
                fill='currentColor'
                d='M21 6.73h-.08c-5.29-.53-10.57-.73-15.8-.2l-2.04.2a.755.755 0 0 1-.83-.68c-.04-.42.26-.78.67-.82l2.04-.2c5.32-.54 10.71-.33 16.11.2.41.04.71.41.67.82a.74.74 0 0 1-.74.68Z'
              />
              <path
                fill='currentColor'
                d='M8.5 5.72c-.04 0-.08 0-.13-.01a.753.753 0 0 1-.61-.86l.22-1.31c.16-.96.38-2.29 2.71-2.29h2.62c2.34 0 2.56 1.38 2.71 2.3l.22 1.3c.07.41-.21.8-.61.86-.41.07-.8-.21-.86-.61l-.22-1.3c-.14-.87-.17-1.04-1.23-1.04H10.7c-1.06 0-1.08.14-1.23 1.03l-.23 1.3a.75.75 0 0 1-.74.63ZM15.21 22.75H8.79c-3.49 0-3.63-1.93-3.74-3.49L4.4 9.19c-.03-.41.29-.77.7-.8.42-.02.77.29.8.7l.65 10.07c.11 1.52.15 2.09 2.24 2.09h6.42c2.1 0 2.14-.57 2.24-2.09l.65-10.07c.03-.41.39-.72.8-.7.41.03.73.38.7.8l-.65 10.07c-.11 1.56-.25 3.49-3.74 3.49Z'
              />
              <path
                fill='currentColor'
                d='M13.66 17.25h-3.33c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h3.33c.41 0 .75.34.75.75s-.34.75-.75.75ZM14.5 13.25h-5c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h5c.41 0 .75.34.75.75s-.34.75-.75.75Z'
              />
            </svg>
          </button>
        </div>
        <div className='relative mt-6 flex h-96 w-full flex-col items-center justify-center rounded-lg border-2 border-secondary-400'>
          <div className='absolute -z-30 select-none'>
            <EmptyCartMobile />
          </div>
          <div className='z-10 flex flex-col items-center'>
            <p className='text-xs font-normal leading-snug text-secondary-700 md:text-sm'>
              شما در حال حاضر هیچ سفارشی ثبت نکرده‌اید!
            </p>
            <Link
              href='/menu'
              className='mt-4 flex h-8 w-[152px] items-center justify-center rounded-md border-2 border-primary-800 p-2 text-xs leading-5 text-primary-800 hover:border-shade-200 hover:text-shade-200 focus:border-shade-300 focus:text-shade-300 lg:h-10 lg:w-36 lg:px-4 lg:py-2'
            >
              منوی رستوران
            </Link>
          </div>
        </div>
      </div>
    );

  return <div className='p-6'></div>;
};

export default CartPage;
