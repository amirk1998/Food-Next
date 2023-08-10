const SearchField = ({ className }) => {
  return (
    <div className={`relative w-full ${className}`}>
      <div className='pointer-events-none absolute inset-y-0 left-0 flex items-center pl-2'>
        <svg
          xmlns='http://www.w3.org/2000/svg'
          className='h-4 w-4'
          viewBox='0 0 24 24'
          fill='none'
        >
          <path
            fill='#353535'
            d='M11.5 21.75c-5.65 0-10.25-4.6-10.25-10.25S5.85 1.25 11.5 1.25s10.25 4.6 10.25 10.25-4.6 10.25-10.25 10.25Zm0-19c-4.83 0-8.75 3.93-8.75 8.75s3.92 8.75 8.75 8.75 8.75-3.93 8.75-8.75-3.92-8.75-8.75-8.75ZM22 22.75c-.19 0-.38-.07-.53-.22l-2-2a.754.754 0 0 1 0-1.06c.29-.29.77-.29 1.06 0l2 2c.29.29.29.77 0 1.06-.15.15-.34.22-.53.22Z'
          />
        </svg>
      </div>
      <input
        type='text'
        className='block h-8 w-full rounded border border-secondary-400 px-4 py-2 text-secondary-800 placeholder-secondary-800 outline-none transition-all duration-200 ease-in-out focus:border focus:border-primary-800 focus:outline-none lg:h-10 lg:rounded-lg'
        placeholder='جستجو'
      />
    </div>
  );
};

export default SearchField;
