const FooterInput = ({
  label,
  name,
  value,
  onChange,
  type = 'text',
  dir = 'rtl',
}) => {
  return (
    <div>
      <input
        dir={dir}
        autoComplete='off'
        type={type}
        className='z-20 max-w-[276px] rounded-lg border-[1.4px] border-secondary-100 bg-transparent px-4 py-2 text-white placeholder-white outline-none ring-0 placeholder-shown:text-white focus:border-primary-800 focus:outline-none focus:ring-0'
        name={name}
        id={name}
        value={value}
        onChange={onChange}
        placeholder={label}
      />
    </div>
  );
};

export default FooterInput;
