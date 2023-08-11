import LoadingButton from '@/common/LoadingButton';
import TextField from '@/common/TextField';
import AuthLogo from './AuthLogo';
import Link from 'next/link';

const SendOTPForm = ({ phoneNumber, onChange, onSubmit, isLoading }) => {
  return (
    <div className='flex h-[50vh] w-full max-w-screen-sm flex-col items-center justify-center p-6'>
      <div className='mb-4'>
        <AuthLogo />
      </div>
      <h1 className='mb-2 h-8 text-lg font-semibold leading-7 text-secondary-800'>
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
      <div className='mb-6 mt-2 whitespace-nowrap text-base font-normal text-secondary-700'>
        ورود و عضویت در ترخینه به منزله قبول {''}
        <span className=' px-1 text-primary-800'>قوانین و مقررات</span> است.
      </div>
    </div>
  );
};

export default SendOTPForm;
