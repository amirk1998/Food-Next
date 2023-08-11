import LoadingButton from '@/common/LoadingButton';
import TextField from '@/common/TextField';
import TagsInput from 'react-tagsinput';
import Select from 'react-select';

const productsFormData = [
  {
    id: 1,
    label: 'عنوان',
    name: 'title',
  },
  {
    id: 2,
    label: 'توضیحات',
    name: 'description',
  },
  {
    id: 3,
    label: 'اسلاگ',
    name: 'slug',
  },
  {
    id: 4,
    label: 'برند',
    name: 'brand',
  },
  {
    id: 5,
    label: 'قیمت',
    name: 'price',
  },
  {
    id: 6,
    label: 'تخفیف',
    name: 'discount',
  },
  {
    id: 7,
    label: 'قیمت بعد از تخفیف',
    name: 'offPrice',
  },
  {
    id: 8,
    label: 'موجودی',
    name: 'countInStock',
  },
  {
    id: 9,
    label: 'لینک عکس محصول',
    name: 'imageLink',
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

const ProductForm = ({
  onSubmit,
  tags,
  setTags,
  categories,
  selectedCategory,
  setSelectedCategory,
  productData,
  productDataOnChange,
  isLoading,
  buttonText,
}) => {
  return (
    <div className='max-w-sm'>
      <form className='w-full space-y-6' onSubmit={onSubmit}>
        {productsFormData.map((item) => {
          return (
            <TextField
              label={item.label}
              name={item.name}
              key={item.id}
              value={productData[item.name]}
              onChange={productDataOnChange}
            />
          );
        })}
        <div>
          <label htmlFor='category' className='mb-4 block'>
            دسته بندی
          </label>
          <Select
            instanceId='category'
            name='category'
            onChange={setSelectedCategory}
            options={categories}
            getOptionLabel={(option) => option.title}
            getOptionValue={(option) => option.englishTitle}
            defaultValue={selectedCategory}
            styles={customStyles}
            placeholder='دسته بندی'
            isRtl={true}
          />
        </div>
        <div className='mb-6'>
          <label htmlFor='tags' className='mb-4 block'>
            تگ محصولات
          </label>
          <TagsInput
            value={tags}
            onChange={setTags}
            id='tags'
            name='tags'
            className='react-tagsinput'
            inputProps={{ placeholder: 'افزودن تگ' }}
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

export default ProductForm;
