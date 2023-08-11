'use client';
import LoadingButton from '@/common/LoadingButton';
import TextField from '@/common/TextField';
import { completeProfile } from '@/services/authServices';
import { useMutation } from '@tanstack/react-query';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { toast } from 'react-hot-toast';

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
    <div className='flex justify-center'>
      <div className='w-full sm:max-w-sm'>
        <form className='space-y-10' onSubmit={handlerSubmit}>
          <h2 className='text-center text-2xl font-bold'>
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
    </div>
  );
};

export default CompleteProfilePage;
