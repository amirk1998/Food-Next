'use client';
import LoadingButton from '@/common/LoadingButton';
import TextField from '@/common/TextField';
import { completeProfile } from '@/services/authServices';
import { useMutation } from '@tanstack/react-query';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { toast } from 'react-hot-toast';
import AuthLogo from '../auth/AuthLogo';

const CompleteProfilePage = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const router = useRouter();

  const { isLoading, mutateAsync } = useMutation({
    mutationFn: completeProfile,
  });

  const handlerSubmit = async (e) => {
    e.preventDefault();
    try {
      const { message } = await mutateAsync({ name, email });
      toast.success(message);
      router.push('/');
    } catch (error) {
      toast.error(error?.response?.data?.message);
    }
  };

  return (
    <div className='container flex max-w-sm flex-col items-center justify-center p-6'>
      <div className='mb-4'>
        <AuthLogo />
      </div>
      <form
        className='flex w-full flex-col items-center justify-center space-y-6'
        onSubmit={handlerSubmit}
      >
        <h2 className='mb-2 h-8 text-lg font-semibold leading-7 text-secondary-800'>
          تکمیل اطلاعات پروفایل
        </h2>
        <TextField
          label='نام و نام خانوادگی'
          name='name'
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <TextField
          label='ایمیل'
          name='email'
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          dir='ltr'
        />
        {isLoading ? (
          <LoadingButton isWidthFull={true} />
        ) : (
          <button type='submit' className='btn btn--primary w-full'>
            تایید
          </button>
        )}
      </form>
    </div>
  );
};

export default CompleteProfilePage;
