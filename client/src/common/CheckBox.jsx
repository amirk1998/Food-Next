const CheckBox = ({ id, name, value, onChange, checked, label }) => {
  return (
    <div className='flex items-center gap-x-2 text-secondary-600'>
      <input
        type='checkbox'
        name={name}
        id={id}
        checked={checked}
        value={value}
        onChange={onChange}
        className='h-4 w-4 cursor-pointer rounded-[5px] border-none bg-secondary-100/80 checked:text-primary-900 '
      />
      <label htmlFor={id} className='cursor-pointer'>
        {label}
      </label>
    </div>
  );
};

export default CheckBox;
