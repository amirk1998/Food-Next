const TextField = ({ label, name, value, onChange, dir = 'rtl' }) => {
  return (
    <div>
      <label htmlFor={name} className='mb-4 block'>
        {label}
      </label>
      <input
        dir={dir}
        autoComplete='off'
        type='text'
        className='textField__input'
        name={name}
        id={name}
        value={value}
        onChange={onChange}
      />
    </div>
  );
};

export default TextField;
