import { useWindowSize } from '@uidotdev/usehooks';
import Image from 'next/image';

const FoodComponent = ({ item }) => {
  const size = useWindowSize();

  return (
    <div className='relative h-[147px] w-[152px] md:h-[324px] md:w-72'>
      <div className='absolute inset-x-6 top-0 z-10 h-[100px] w-[102px] md:inset-x-8 md:h-[240px] md:w-[240px]'>
        <Image
          src={item.src}
          alt={item.alt}
          width={size.width < 720 ? 102 : 240}
          height={size.width < 720 ? 100 : 240}
        />
      </div>
      <div className='absolute inset-x-0 top-12 h-20 w-full rounded border-2 border-primary-800 md:top-[120px] md:h-[180px] md:w-72 '></div>
      <div className='absolute inset-x-10 bottom-2 md:inset-x-[66px]'>
        <button className='btn w-[72px] text-xs md:w-[155px] md:text-xl'>
          {item.label}
        </button>
      </div>
    </div>
  );
};

export default FoodComponent;
