import { getAllPayments } from '@/services/paymentService';
import { useQuery } from '@tanstack/react-query';

export const useGetPayments = () =>
  useQuery({
    queryKey: ['get-payments'],
    queryFn: getAllPayments,
    retry: false,
    refetchOnWindowFocus: true,
  });
