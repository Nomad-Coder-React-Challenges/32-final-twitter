import { QueryClient, dehydrate } from '@tanstack/react-query';

import { getCategoryListAPI } from '#apis/books';
import { HomeTemplate } from '#components/templates';
import { QUERY_KEYS } from '#constants';
import { CategoryListModel, CategoryResultModel } from '#types/models';
import useAuth from 'hooks/useAuth';

const HomePage = () => {
  const user = useAuth();
  return <HomeTemplate />;
};

export async function getServerSideProps() {
  const queryClient = new QueryClient();
  await Promise.all([
    queryClient.prefetchQuery([QUERY_KEYS.CATEGORY_LIST], () =>
      getCategoryListAPI(),
    ),
  ]);

  const categoryData = queryClient.getQueryData([
    QUERY_KEYS.CATEGORY_LIST,
  ]) as CategoryListModel<CategoryResultModel[]>;

  return {
    notFound: categoryData === undefined,
    props: {
      dehydratedState: dehydrate(queryClient),
    },
  };
}

export default HomePage;
