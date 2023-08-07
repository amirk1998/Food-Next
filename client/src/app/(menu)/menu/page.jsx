import SearchField from '@/common/SearchField';
import CustomSlider from '@/components/CustomSlider';
import Link from 'next/link';

const categoryData = [
  { id: 1, title: 'Cat 1' },
  { id: 2, title: 'Cat 2' },
  { id: 3, title: 'Cat 3' },
  { id: 4, title: 'Cat 4' },
  { id: 5, title: 'Cat 5' },
  { id: 6, title: 'Cat 6' },
  { id: 7, title: 'Cat 7' },
  { id: 8, title: 'Cat 8' },
  { id: 9, title: 'Cat 9' },
  { id: 10, title: 'Cat 10' },
];

const MenuPage = () => {
  return (
    <div className='flex w-full flex-col'>
      <CustomSlider text={'لذت غذای سالم و گیاهی را با ترخینه تجربه کنید!'} />
      <ul className='mb-2 flex h-16 w-full items-center gap-x-4 bg-secondary-300 py-2 pr-5'>
        <li className='block'>
          <Link
            href={'#'}
            className='text-sm text-primary-800 underline underline-offset-8'
          >
            غذای اصلی
          </Link>
        </li>
        <li className='block'>
          <Link href={'#'} className='text-xs text-secondary-700 '>
            پیش غذا
          </Link>
        </li>
        <li className='block'>
          <Link href={'#'} className='text-xs text-secondary-700 '>
            دسر
          </Link>
        </li>
        <li className='block'>
          <Link href={'#'} className='text-xs text-secondary-700 '>
            نوشیدنی
          </Link>
        </li>
      </ul>
      <div className='py-2'>
        {/* Category : Modify Later ! */}
        <ul
          className='flex w-full items-center gap-x-2 overflow-x-auto pr-5'
          dir='rtl'
        >
          {categoryData.map((category) => {
            return (
              <li
                className='cursor-pointer whitespace-nowrap rounded-lg bg-secondary-300 px-3 py-2 text-[10px] text-secondary-800 '
                key={category.id}
              >
                {category.title}
              </li>
            );
          })}
        </ul>
        {/* Search Field */}
        <div className='my-3 w-full px-5'>
          <SearchField />
        </div>
      </div>
    </div>
  );
};

export default MenuPage;
