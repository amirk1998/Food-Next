import FooterInput from '@/common/FooterInput';
import InstagramIcon from '@/public/icons/InstagramIcon';
import TelegramIcon from '@/public/icons/TelegramIcon';
import TwitterIcon from '@/public/icons/TwitterIcon';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

const Footer = ({ className }) => {
  const [fullName, setFullName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handlerSubmit = (e) => {
    e.preventDefault();
    console.log(fullName, '-', phoneNumber, '-', email, '-', message);
  };

  return (
    <footer className={`${className}`}>
      <div className='relative flex h-[152px] w-full lg:h-[319px] lg:max-h-[319px]'>
        <div className='absolute inset-0 z-0 max-h-[152px] w-full lg:max-h-[319px]'>
          <Image
            alt='Mountains'
            src='/images/footerImage.png'
            className='blur-[1px] brightness-[20%]'
            quality={70}
            fill
            style={{
              objectFit: 'cover',
            }}
          />
        </div>
        {/* Text */}
        <div className='z-10 flex flex-1 gap-x-20 py-4 pr-5 lg:gap-x-32 lg:px-28'>
          {/* Col #1 */}
          <div className='flex flex-col text-white'>
            <span className='text-xs font-normal leading-snug md:text-base lg:text-xl lg:font-bold lg:leading-7'>
              دسترسی آسان
            </span>
            <ul className='mt-2 flex flex-col gap-y-1 pr-2 lg:mt-4 lg:items-center lg:gap-y-4'>
              <li>
                <Link
                  href={'#'}
                  className='text-[10px] font-normal leading-[18px] hover:text-primary-800 lg:text-sm lg:font-medium lg:leading-6'
                >
                  پرسش‌های متداول
                </Link>
              </li>
              <li>
                <Link
                  href={'#'}
                  className='text-[10px] font-normal leading-[18px] hover:text-primary-800 lg:text-sm lg:font-medium lg:leading-6'
                >
                  قوانین ترخینه
                </Link>
              </li>
              <li>
                <Link
                  href={'#'}
                  className='text-[10px] font-normal leading-[18px] hover:text-primary-800 lg:text-sm lg:font-medium lg:leading-6'
                >
                  حریم خصوصی
                </Link>
              </li>
              <li className='mt-1'>
                <div className='flex items-center gap-x-2 lg:gap-x-4'>
                  <a target='_blank' href='https://www.twitter.com/tarkhine'>
                    <div className='lg:scale-150'>
                      <TwitterIcon />
                    </div>
                  </a>
                  <a target='_blank' href='https://www.instagram.com/tarkhine'>
                    <div className='lg:scale-150'>
                      <InstagramIcon />
                    </div>
                  </a>
                  <a target='_blank' href='https://www.t.me/tarkhine'>
                    <div className='lg:scale-150'>
                      <TelegramIcon />
                    </div>
                  </a>
                </div>
              </li>
            </ul>
          </div>

          {/* Col #2*/}
          <div className='flex flex-col text-white'>
            <span className='text-xs font-normal leading-snug md:text-base lg:text-xl lg:font-bold lg:leading-7'>
              شعبه‌های ترخینه
            </span>
            <ul className='mt-2 flex flex-col gap-y-1 pr-2 lg:mt-4 lg:items-center lg:gap-y-4'>
              <li>
                <Link
                  href={'#'}
                  className='text-[10px] font-normal leading-[18px] hover:text-primary-800 lg:text-sm lg:font-medium lg:leading-6'
                >
                  شعبه اکباتان
                </Link>
              </li>
              <li>
                <Link
                  href={'#'}
                  className='text-[10px] font-normal leading-[18px] hover:text-primary-800 lg:text-sm lg:font-medium lg:leading-6'
                >
                  شعبه چالوس
                </Link>
              </li>
              <li>
                <Link
                  href={'#'}
                  className='text-[10px] font-normal leading-[18px] hover:text-primary-800 lg:text-sm lg:font-medium lg:leading-6'
                >
                  شعبه اقدسیه
                </Link>
              </li>
              <li>
                <Link
                  href={'#'}
                  className='text-[10px] font-normal leading-[18px] hover:text-primary-800 lg:text-sm lg:font-medium lg:leading-6'
                >
                  شعبه ونک
                </Link>
              </li>
            </ul>
          </div>

          {/* Col #3 For Desktop */}

          <form className='hidden lg:flex lg:flex-col' onSubmit={handlerSubmit}>
            <span className='mb-4 text-xl font-bold leading-7 text-white'>
              پیام به ترخینه
            </span>
            <div className='flex items-center gap-x-6'>
              <div className='flex flex-col gap-y-3'>
                <FooterInput
                  label='نام و نام خانوادگی'
                  name='name'
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                />
                <FooterInput
                  label='شماره تماس'
                  name='phoneNumber'
                  value={phoneNumber}
                  onChange={(e) => setPhoneNumber(e.target.value)}
                  type='tel'
                />
                <FooterInput
                  label='آدرس ایمیل ( اختیاری )'
                  name='email'
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  type='email'
                />
              </div>

              <textarea
                name='message'
                id='message'
                placeholder='پیام شما'
                dir='rtl'
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className='h-40 w-72 resize-none rounded-xl border-[1.4px] border-secondary-100 bg-transparent py-4 pr-4 text-white ring-0 focus:ring-0'
              ></textarea>
            </div>
            <div className='mt-6 flex items-center'>
              <div className='flex-1'></div>
              <button
                type='submit'
                className='h-10 w-[183px] rounded-lg border-[1.4px] border-white px-4 py-2 text-sm text-white hover:bg-white hover:text-black hover:opacity-80'
              >
                ارسال پیام
              </button>
            </div>
          </form>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
