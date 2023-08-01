import Image from 'next/image';

const BranchSelection = ({ branchData }) => {
  return (
    <div className='flex h-20 items-center gap-x-1 rounded border border-secondary-800'>
      <div className='relative h-full w-36'>
        <Image
          src={branchData.src}
          alt={branchData.alt}
          sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'
          // layout='fill' // Fill parent
          fill
          style={{
            objectFit: 'cover',
          }}
        />
      </div>
      <div className='flex flex-col items-center gap-y-1 px-1 py-2'>
        <span className='text-sm font-medium leading-normal text-secondary-800'>
          {branchData.title}
        </span>
        <p className='h-9 w-full max-w-[158px] whitespace-normal text-center text-[10px] font-normal leading-4 text-secondary-800'>
          {branchData.description}
        </p>
      </div>
    </div>
  );
};

export default BranchSelection;
