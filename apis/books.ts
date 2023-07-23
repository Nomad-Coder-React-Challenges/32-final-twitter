import instance from './instance';

import {
  BookResultModel,
  CategoryListModel,
  CategoryResultModel,
  GetResponse,
} from '#types/models';

export const getCategoryListAPI = async () => {
  try {
    const res: GetResponse<CategoryListModel<CategoryResultModel[]>> =
      await instance.get(`/lists`);

    return res.data;
  } catch (e) {
    console.log('getCategoryListAPI error', e);
    throw e;
  }
};

export const getBookListAPI = async ({
  categoryName,
}: {
  categoryName: string;
}) => {
  try {
    const res: GetResponse<CategoryListModel<BookResultModel>> =
      await instance.get(`/list?name=${categoryName}`);

    return res.data;
  } catch (e) {
    console.log('getBookListAPI error', e);
    throw e;
  }
};
