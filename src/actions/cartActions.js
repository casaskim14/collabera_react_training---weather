import APIRequest from '../utils/APIRequest';

export const loadCartAction = () => async dispatch => {
  const type = 'LOAD_CART';
  await APIRequest({
    apiData: {
      method: 'get',
      url: '660/cart',
    },
    type,
    dispatch,
    meta: { loadingId: -1 },
  });
};

export const addCartItemAction = data => async dispatch => {
  const type = 'ADD_CART';
  await APIRequest({
    apiData: {
      method: 'post',
      url: '660/cart',
      data,
    },
    type,
    dispatch,
    meta: { loadingId: data.productId },
  });
};

export const updateCartItemAction = data => async dispatch => {
  const type = 'UPDATE_CART';
  await APIRequest({
    apiData: {
      method: 'put',
      url: `660/cart/${data.id}`,
      data,
    },
    type,
    dispatch,
    meta: { loadingId: data.productId },
  });
};

export const deleteCartItemAction = data => async dispatch => {
  const type = 'DELETE_CART';
  await APIRequest({
    apiData: {
      method: 'delete',
      url: `660/cart/${data.id}`,
    },
    type,
    dispatch,
    meta: { loadingId: data.productId },
  });
};

export const a = 1;
