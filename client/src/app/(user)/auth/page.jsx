'use client';
import { useEffect, useState } from 'react';
import SendOTPForm from './SendOTPForm';
import { toast } from 'react-hot-toast';
import { useMutation } from '@tanstack/react-query';
import { checkOTP, getOTP } from '@/services/authServices';
import CheckOTPForm from './CheckOTPForm';
import { useRouter } from 'next/navigation';

const RESEND_TIME = 90;

const AuthPage = () => {
  const [phoneNumber, setPhoneNumber] = useState('');
  const [otp, setOtp] = useState('');
  const [step, setStep] = useState(2);
  const [time, setTime] = useState(RESEND_TIME);
  const router = useRouter();

  const {
    data: otpResponse,
    error,
    isLoading,
    mutateAsync: mutateGetOTP,
  } = useMutation({
    mutationFn: getOTP,
  });

  const { isLoading: isCheckingOtp, mutateAsync: mutateCheckOTP } = useMutation(
    {
      mutationFn: checkOTP,
    }
  );

  const handlerPhoneNumber = (e) => {
    setPhoneNumber(e.target.value);
  };

  const handlerSendOTP = async (e) => {
    e.preventDefault();
    try {
      const data = await mutateGetOTP({ phoneNumber });
      toast.success(data?.message);
      setStep(2);
      setTime(RESEND_TIME);
      setOtp('');
    } catch (error) {
      toast.error(error?.response?.data?.message);
    }
  };

  const handlerCheckOTP = async (e) => {
    e.preventDefault();
    try {
      const { message, user } = await mutateCheckOTP({ phoneNumber, otp });
      toast.success(message);

      if (user.isActive) {
        router.push('/');
      } else {
        router.push('/complete-profile');
      }
    } catch (error) {
      toast.error(error?.response?.data?.message);
    }
  };

  useEffect(() => {
    const timer = setInterval(() => {
      time > 0 && setTime((prevState) => prevState - 1);
    }, 1000);

    return () => {
      if (timer) clearInterval(timer);
    };
  }, [time]);

  const renderSteps = () => {
    switch (step) {
      case 1:
        return (
          <SendOTPForm
            phoneNumber={phoneNumber}
            onChange={handlerPhoneNumber}
            onSubmit={handlerSendOTP}
            isLoading={isLoading}
          />
        );

      case 2:
        return (
          <CheckOTPForm
            otp={otp}
            setOtp={setOtp}
            onSubmit={handlerCheckOTP}
            onBack={() => setStep((prevState) => prevState - 1)}
            onResendOTP={handlerSendOTP}
            time={time}
            otpResponse={otpResponse}
            isLoading={isCheckingOtp}
          />
        );

      default:
        return null;
    }
  };

  return (
    <div className='flex justify-center'>
      <div className='w-full sm:max-w-sm'>{renderSteps()}</div>
    </div>
  );
};

export default AuthPage;
