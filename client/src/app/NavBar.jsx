'use client';

import Image from 'next/image';
import TitleMobileSVG from '../../public/TitleMobile.svg';

const NavBar = () => {
  return (
    <div className=' w-full px-5 py-4 lg:h-[112px] lg:max-w-screen-lg xl:max-w-screen-xl'>
      {/* Mobile NavBar */}
      <div className='flex items-center justify-between  md:hidden'>
        <div>
          <span className='text-primary-800'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              width='24'
              height='24'
              fill='none'
            >
              <g fill='#417F56' clipPath='url(#a)'>
                <path d='M21 7.75H3c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h18c.41 0 .75.34.75.75s-.34.75-.75.75ZM21 12.75H3c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h18c.41 0 .75.34.75.75s-.34.75-.75.75ZM21 17.75H3c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h18c.41 0 .75.34.75.75s-.34.75-.75.75Z' />
              </g>
              <defs>
                <clipPath id='a'>
                  <path fill='#fff' d='M0 0h24v24H0z' />
                </clipPath>
              </defs>
            </svg>
          </span>
        </div>
        <div>
          <Image src={TitleMobileSVG} width={102} height={32} alt='ترخینه' />
        </div>
        <div className='flex items-center gap-x-1'>
          <div className='flex h-6 w-6 items-center justify-center rounded bg-primary-100 p-2 text-primary-800'>
            <span>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                width='16'
                height='16'
                fill='none'
              >
                <path
                  fill='#417F56'
                  d='M12.126 11.833h-7.1c-.66 0-1.293-.28-1.74-.766a2.382 2.382 0 0 1-.62-1.8l.554-6.64a.725.725 0 0 0-.194-.56.721.721 0 0 0-.54-.234H1.333a.504.504 0 0 1-.5-.5c0-.273.227-.5.5-.5h1.16c.487 0 .947.207 1.273.56.18.2.314.434.387.694h8.327c.673 0 1.293.266 1.746.746.447.487.674 1.12.62 1.794l-.36 5c-.073 1.22-1.14 2.206-2.36 2.206ZM4.186 3.08l-.52 6.267c-.033.386.094.753.354 1.04.26.286.62.44 1.006.44h7.1c.694 0 1.32-.587 1.374-1.28l.36-5a1.36 1.36 0 0 0-1.374-1.474h-8.3v.007ZM10.833 15.167c-.733 0-1.333-.6-1.333-1.334 0-.733.6-1.333 1.333-1.333.734 0 1.334.6 1.334 1.333 0 .734-.6 1.334-1.334 1.334Zm0-1.667a.33.33 0 0 0-.333.333.33.33 0 0 0 .333.334.33.33 0 0 0 .334-.334.33.33 0 0 0-.334-.333ZM5.5 15.167c-.733 0-1.333-.6-1.333-1.334 0-.733.6-1.333 1.333-1.333.734 0 1.334.6 1.334 1.333 0 .734-.6 1.334-1.334 1.334Zm0-1.667a.33.33 0 0 0-.333.333.33.33 0 0 0 .333.334.33.33 0 0 0 .334-.334.33.33 0 0 0-.334-.333Z'
                />
                <path
                  fill='#417F56'
                  d='M14 5.833H6a.504.504 0 0 1-.5-.5c0-.273.227-.5.5-.5h8c.273 0 .5.227.5.5 0 .274-.227.5-.5.5Z'
                />
              </svg>
            </span>
          </div>
          <div className='flex h-6 w-6 items-center justify-center rounded bg-primary-100 p-2 text-primary-800'>
            <span>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                width='16'
                height='16'
                fill='none'
              >
                <path
                  fill='#417F56'
                  d='M8 8.5a3.838 3.838 0 0 1-3.833-3.833A3.838 3.838 0 0 1 8 .833a3.838 3.838 0 0 1 3.834 3.834A3.838 3.838 0 0 1 8 8.5Zm0-6.667a2.84 2.84 0 0 0-2.833 2.834A2.84 2.84 0 0 0 8 7.5a2.84 2.84 0 0 0 2.834-2.833A2.84 2.84 0 0 0 8 1.833ZM13.727 15.167a.504.504 0 0 1-.5-.5c0-2.3-2.347-4.167-5.227-4.167-2.88 0-5.227 1.867-5.227 4.167 0 .273-.226.5-.5.5a.504.504 0 0 1-.5-.5C1.773 11.82 4.567 9.5 8 9.5c3.433 0 6.227 2.32 6.227 5.167 0 .273-.227.5-.5.5Z'
                />
              </svg>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
