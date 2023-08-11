import {
  addCoupon,
  getCouponById,
  getCoupons,
  removeCoupon,
  updateCoupon,
} from '@/services/couponService';
import { useMutation, useQuery } from '@tanstack/react-query';

export const useGetCoupons = () =>
  useQuery({
    queryKey: ['get-coupons'],
    queryFn: getCoupons,
    retry: false,
    refetchOnWindowFocus: true,
  });

export const useGetCouponById = (id) =>
  useQuery({
    queryKey: ['get-coupons', id],
    queryFn: () => getCouponById(id),
    retry: false,
    refetchOnWindowFocus: true,
  });

export const useAddCoupon = () => {
  return useMutation({ mutationFn: addCoupon });
};

export const useUpdateCoupon = () => {
  return useMutation({ mutationFn: updateCoupon });
};

export const useRemoveCoupon = () => {
  return useMutation({ mutationFn: removeCoupon });
};
