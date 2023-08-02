import Image from 'next/image';

const BranchSelection = ({ branch }) => {
  return (
    <div className='flex h-20 cursor-pointer items-center gap-x-1 rounded border border-secondary-400 shadow-md hover:border-primary-800 md:h-52 md:w-48 md:flex-col md:gap-x-0 md:gap-y-2 lg:h-64 lg:w-60 xl:h-[344px] xl:w-72'>
      <div className='relative h-full w-36 md:h-52 md:w-48 lg:h-64 lg:w-60 xl:h-[344px] xl:w-72'>
        <Image
          src={branch.src}
          alt={branch.alt}
          sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'
          fill
          className='right-0 top-0 h-full w-full rounded-t object-cover'
          style={{
            objectFit: 'cover',
          }}
        />
      </div>
      <div className='flex flex-col items-center gap-y-1 px-1 py-2'>
        <span className='text-sm font-medium leading-normal text-secondary-800 md:text-lg md:font-semibold lg:text-xl'>
          {branch.title}
        </span>
        <p className='h-9 w-full max-w-[158px] whitespace-normal text-center text-[10px] font-normal leading-4 text-secondary-800 md:max-w-[200px] md:text-xs lg:max-w-[272px] lg:text-sm'>
          {branch.description}
        </p>
      </div>
    </div>
  );
};

export default BranchSelection;
