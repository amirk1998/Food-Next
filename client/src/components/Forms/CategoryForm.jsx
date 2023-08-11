import LoadingButton from '@/common/LoadingButton';
import TextField from '@/common/TextField';
import Select from 'react-select';

const categoriesFormData = [
  {
    id: 1,
    label: 'عنوان',
    name: 'title',
  },
  {
    id: 2,
    label: 'عنوان انگلیسی',
    name: 'englishTitle',
  },
  {
    id: 3,
    label: 'توضیحات',
    name: 'description',
  },
];

export const categoryTypes = [
  { label: 'محصول', value: 'product' },
  { label: 'پست', value: 'post' },
  { label: 'تیکت', value: 'ticket' },
  { label: 'کامنت', value: 'comment' },
];

const customStyles = {
  control: (styles) => ({
    ...styles,
    backgroundColor: '#f3f4f6',
    padding: '8px 0px',
    borderRadius: '12px',
  }),
};

const CategoryForm = ({
  onSubmit,
  category,
  handelChange,
  selectedType,
  setSelectedType,
  isLoading,
  buttonText,
}) => {
  return (
    <div className='max-w-sm'>
      <form className='w-full space-y-6' onSubmit={onSubmit}>
        {categoriesFormData.map((item) => {
          return (
            <TextField
              label={item.label}
              name={item.name}
              key={item.id}
              value={category[item.name]}
              onChange={handelChange}
            />
          );
        })}
        <div>
          <label htmlFor='type' className='mb-4 block'>
            نوع
          </label>
          <Select
            instanceId='type'
            name='type'
            onChange={setSelectedType}
            options={categoryTypes}
            defaultValue={selectedType}
            styles={customStyles}
            placeholder='نوع'
            isRtl={true}
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

export default CategoryForm;
