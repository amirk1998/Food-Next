import {
  addCategory,
  getCategories,
  getCategoryById,
  removeCategory,
  updateCategory,
} from '@/services/categoryService';
import { useMutation, useQuery } from '@tanstack/react-query';

export const useGetCategories = () =>
  useQuery({
    queryKey: ['get-categories'],
    queryFn: getCategories,
    retry: false,
    refetchOnWindowFocus: true,
  });

export const useGetCategoryById = (id) =>
  useQuery({
    queryKey: ['get-category', id],
    queryFn: () => getCategoryById(id),
    retry: false,
    refetchOnWindowFocus: true,
  });

export const useAddCategory = () => {
  return useMutation({ mutationFn: addCategory });
};

export const useUpdateCategory = () => {
  return useMutation({ mutationFn: updateCategory });
};

export const useRemoveCategory = () => {
  return useMutation({ mutationFn: removeCategory });
};
