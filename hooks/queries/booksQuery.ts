import { useQuery } from '@tanstack/react-query';
import { useRouter } from 'next/router';

import { getCategoryListAPI, getBookListAPI } from '#apis/books';
import { QUERY_KEYS } from '#constants';

export const useCategoryList = () => {
  return useQuery([QUERY_KEYS.CATEGORY_LIST], getCategoryListAPI);
};

export const useBookList = () => {
  const { query } = useRouter();
  const categoryName = query?.id as string;
  return useQuery(
    [QUERY_KEYS.BOOK_LIST, categoryName],
    () => getBookListAPI({ categoryName }),
    {
      enabled: !!categoryName,
    },
  );
};
