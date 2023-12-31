const MenuIcon = ({ isMobile = true }) => {
  return (
    <div className='text-primary-800'>
      {isMobile && (
        <span>
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
      )}
    </div>
  );
};

export default MenuIcon;
