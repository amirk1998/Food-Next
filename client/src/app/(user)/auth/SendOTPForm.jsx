import LoadingButton from '@/common/LoadingButton';
import TextField from '@/common/TextField';
import AuthLogo from './AuthLogo';
import Link from 'next/link';

const SendOTPForm = ({ phoneNumber, onChange, onSubmit, isLoading }) => {
  return (
    <div>
      <div className='flex items-center p-5'>
        <div className='flex-1'></div>
        <Link href='/'>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            width='24'
            height='24'
            fill='none'
          >
            <rect
              width='2'
              height='16'
              x='5.313'
              y='7.414'
              fill='#717171'
              rx='1'
              transform='rotate(-45 5.313 7.414)'
            />
            <rect
              width='2'
              height='16'
              x='16.313'
              y='6'
              fill='#717171'
              rx='1'
              transform='rotate(45 16.313 6)'
            />
          </svg>
        </Link>
      </div>
      <div className='flex h-full w-full max-w-screen-sm flex-col items-center justify-center p-6 lg:h-[50vh]'>
        <div className='mb-10 mt-40 lg:mb-4 lg:mt-0'>
          <AuthLogo />
        </div>
        <h1 className='mb-6 h-8 text-lg font-semibold leading-7 text-secondary-800 lg:mb-2'>
          ورود / ثبت ‌نام
        </h1>
        <span className='mb-6 whitespace-nowrap text-sm font-normal leading-5 text-secondary-700'>
          با وارد کردن شماره موبایل کد تاییدی برای شما ارسال خواهد شد.
        </span>
        <form className='w-full space-y-6' onSubmit={onSubmit}>
          <TextField
            label='شماره موبایل'
            name='phoneNumber'
            value={phoneNumber}
            onChange={onChange}
            dir='rtl'
          />
          {isLoading ? (
            <LoadingButton isWidthFull={true} />
          ) : (
            <button type='submit' className='btn btn--primary w-full'>
              ادامه
            </button>
          )}
        </form>
        <div className='mb-10 mt-10 whitespace-nowrap text-base font-normal text-secondary-700 lg:mb-6 lg:mt-2'>
          ورود و عضویت در ترخینه به منزله قبول {''}
          <span className=' px-1 text-primary-800'>قوانین و مقررات</span> است.
        </div>
      </div>
    </div>
  );
};

export default SendOTPForm;
