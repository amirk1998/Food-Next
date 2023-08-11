import LoadingButton from '@/common/LoadingButton';
import RadioInput from '@/common/RadioInput';
import TextField from '@/common/TextField';
import Select from 'react-select';
import DatePicker from 'react-multi-date-picker';
import persian from 'react-date-object/calendars/persian';
import persian_fa from 'react-date-object/locales/persian_fa';

const couponsFormData = [
  {
    id: 1,
    label: 'کد',
    name: 'code',
  },
  {
    id: 2,
    label: 'مقدار',
    name: 'amount',
  },
  {
    id: 3,
    label: 'ظرفیت',
    name: 'usageLimit',
  },
];

const customStyles = {
  control: (styles) => ({
    ...styles,
    backgroundColor: '#f3f4f6',
    padding: '8px 0px',
    borderRadius: '12px',
  }),
};

const CouponForm = ({
  onSubmit,
  coupon,
  handelChange,
  type,
  setType,
  products,
  setProductIds,
  expireDate,
  setExpireDate,
  isLoading,
  buttonText,
  defaultValue = '',
}) => {
  return (
    <div className='max-w-sm'>
      <form className='w-full space-y-6' onSubmit={onSubmit}>
        {couponsFormData.map((item) => {
          return (
            <TextField
              label={item.label}
              name={item.name}
              key={item.id}
              value={coupon[item.name]}
              onChange={handelChange}
            />
          );
        })}
        <div>
          <span className='mb-4 block'>نوع کد تخفیف</span>
          <div className='flex items-center gap-x-10'>
            <RadioInput
              checked={type === 'percent'}
              name='type'
              id='percent-type'
              label='درصد'
              value='percent'
              onChange={setType}
            />
            <RadioInput
              checked={type === 'fixedProduct'}
              name='type'
              id='fixedProduct-type'
              label='قیمت ثابت'
              value='fixedProduct'
              onChange={setType}
            />
          </div>
        </div>

        <div>
          <label htmlFor='products' className='mb-4 block'>
            شامل محصولات
          </label>
          <Select
            isMulti
            instanceId='products'
            name='products'
            options={products}
            getOptionLabel={(option) => option.title}
            getOptionValue={(option) => option._id}
            onChange={setProductIds}
            styles={customStyles}
            placeholder='محصولات'
            isRtl={true}
            defaultValue={defaultValue}
          />
        </div>

        <div className='w-full'>
          <label htmlFor='date-picker' className='mb-4 block'>
            تاریخ انقضا
          </label>
          <DatePicker
            id='date-picker'
            value={expireDate}
            onChange={setExpireDate}
            calendar={persian}
            locale={persian_fa}
            calendarPosition='bottom-center'
            format='YYYY/MM/DD'
            style={{
              backgroundColor: '#f3f4f6',
              width: '100%',
              boxSizing: 'border-box',
              // borderColor: '#f3f4f6',
              height: '52px',
              fontSize: '16px',
              borderRadius: '12px',
              padding: '8px 10px',
            }}
            containerStyle={{
              width: '100%',
            }}
          />
        </div>
        <div>
          {isLoading ? (
            <LoadingButton isWidthFull={true} />
          ) : (
            <button type='submit' className='btn btn--primary w-full'>
              {buttonText}
            </button>
          )}
        </div>
      </form>
    </div>
  );
};

export default CouponForm;
