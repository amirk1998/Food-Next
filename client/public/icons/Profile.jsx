'use client';

const ProfileIcon = ({ isMobile = true }) => {
  return (
    <div>
      {isMobile ? (
        <div className=' flex h-6 w-6 items-center justify-center rounded bg-primary-100 p-2 text-primary-800'>
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
      ) : (
        <div className=' flex h-10 w-10 items-center justify-center rounded bg-primary-100 p-2 text-primary-800'>
          <span>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              width='24'
              height='24'
              fill='none'
            >
              <path
                fill='#417F56'
                d='M8 8.5a3.838 3.838 0 0 1-3.833-3.833A3.838 3.838 0 0 1 8 .833a3.838 3.838 0 0 1 3.834 3.834A3.838 3.838 0 0 1 8 8.5Zm0-6.667a2.84 2.84 0 0 0-2.833 2.834A2.84 2.84 0 0 0 8 7.5a2.84 2.84 0 0 0 2.834-2.833A2.84 2.84 0 0 0 8 1.833ZM13.727 15.167a.504.504 0 0 1-.5-.5c0-2.3-2.347-4.167-5.227-4.167-2.88 0-5.227 1.867-5.227 4.167 0 .273-.226.5-.5.5a.504.504 0 0 1-.5-.5C1.773 11.82 4.567 9.5 8 9.5c3.433 0 6.227 2.32 6.227 5.167 0 .273-.227.5-.5.5Z'
              />
            </svg>
          </span>
        </div>
      )}
    </div>
  );
};

export default ProfileIcon;
