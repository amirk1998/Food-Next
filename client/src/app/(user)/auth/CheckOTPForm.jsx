import OtpInput from 'react-otp-input';
import { HiArrowSmallRight, HiOutlinePencilSquare } from 'react-icons/hi2';
import LoadingButton from '@/common/LoadingButton';
import AuthLogo from './AuthLogo';
import Link from 'next/link';

const CheckOTPForm = ({
  otp,
  setOtp,
  otpResponse,
  time,
  onSubmit,
  onBack,
  onResendOTP,
  isLoading,
}) => {
  return (
    <div className='h-full lg:h-auto'>
      <div className='flex items-center justify-between p-5'>
        <button onClick={onBack} className=''>
          <HiArrowSmallRight className='h-6 w-6 text-secondary-800' />
        </button>
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
      <div className='flex h-[70vh] w-full max-w-screen-sm flex-col items-center justify-center px-6 pb-6'>
        <div className='mb-10 mt-40 lg:mb-4 lg:mt-0'>
          <AuthLogo />
        </div>
        <h1 className='mb-2 mt-12 h-8 text-lg font-semibold leading-7 text-secondary-800 lg:mt-0'>
          کد تایید
        </h1>
        {otpResponse && (
          <span className='mb-6 whitespace-nowrap text-sm font-normal leading-5 text-secondary-700'>
            {otpResponse.message}
          </span>
        )}

        <form className='space-y-6' onSubmit={onSubmit}>
          {/* <p>کد تایید را وارد کنید</p> */}
          <OtpInput
            value={otp}
            onChange={setOtp}
            numInputs={5}
            renderSeparator={<span>-</span>}
            inputStyle={{
              width: '2.5rem',
              padding: '0.5rem 0.2rem',
              border: '1px solid rgb(var(--color-primary-300))',
              borderRadius: '0.5rem',
            }}
            containerStyle='flex flex-row-reverse gap-x-2 justify-center'
            renderInput={(props) => <input type='number' {...props} />}
          />
          <div className='flex items-center justify-between'>
            <div className='text-secondary-700'>
              {time > 0 ? (
                <p className='text-sm font-normal'>
                  {' '}
                  {time} ثانیه تا ارسال مجدد کد{' '}
                </p>
              ) : (
                <button onClick={onResendOTP}>ارسال مجدد کد ؟</button>
              )}
            </div>

            {otpResponse && (
              <p>
                <button
                  onClick={onBack}
                  className='text-sm font-normal text-secondary-700'
                >
                  {/* <HiOutlinePencilSquare className='h-6 w-6 text-primary-900' /> */}
                  ویرایش ؟
                </button>
              </p>
            )}
          </div>

          {isLoading ? (
            <LoadingButton isWidthFull={true} />
          ) : (
            <button type='submit' className='btn btn--primary w-full'>
              تایید
            </button>
          )}
        </form>
      </div>
    </div>
  );
};

export default CheckOTPForm;
