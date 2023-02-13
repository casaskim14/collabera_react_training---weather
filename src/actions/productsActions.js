import APIRequest from '../utils/APIRequest';

export const loadProducts = () => async dispatch => {
  const type = 'LOAD_PRODUCTS';
  await APIRequest({
    apiData: {
      method: 'get',
      url: '660/products',
    },
    type,
    dispatch,
    meta: { loadingId: -1 },
  });
};

export const a = 1;
