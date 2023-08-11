const TextField = ({ label, name, value, onChange, dir = 'rtl' }) => {
  return (
    <div>
      {/* <label htmlFor={name} className='mb-4 block'>
        {label}
      </label> */}
      <input
        dir={dir}
        autoComplete='off'
        type='text'
        className='flex h-10 w-full max-w-sm flex-shrink-0 items-center justify-center rounded-md border-2 border-secondary-400 text-base font-medium leading-6 text-secondary-800 outline-none ring-0 focus:border-primary-800 focus:outline-none focus:ring-0'
        name={name}
        id={name}
        value={value}
        onChange={onChange}
        placeholder={label}
      />
    </div>
  );
};

export default TextField;
