import React, {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useReducer,
} from 'react';
import PropTypes from 'prop-types';
import cartReducer, { cartInitialValue } from '../reducers/cartReducer';
import useApiRequest from '../hooks/useApiRequest';
import { useErrorContext } from './errorContext';
import { useLoadingContext } from './loadingContext';

export const CartContext = createContext();

export function CartProvider({ children }) {
  const [cart, dispatch] = useReducer(cartReducer, cartInitialValue);
  const { dispatchErrors } = useErrorContext();
  const { dispatchLoading } = useLoadingContext();

  const apiRequest = useApiRequest({
    dispatch,
    dispatchLoading,
    dispatchErrors,
  });

  const loadCart = useCallback(async () => {
    const type = 'LOAD_CART';
    apiRequest({
      apiData: {
        method: 'get',
        url: '660/cart',
      },
      type,
    });
  }, [apiRequest]);

  const addToCart = useCallback(
    async data => {
      const type = 'ADD_CART';
      apiRequest({
        apiData: {
          method: 'post',
          url: '660/cart',
          data,
        },
        type,
      });
    },
    [apiRequest],
  );

  const updateCartItem = useCallback(
    async data => {
      const type = 'UPDATE_CART';
      apiRequest({
        apiData: {
          method: 'put',
          url: `660/cart/${data.id}`,
          data,
        },
        type,
      });
    },
    [apiRequest],
  );

  const deleteCartItem = useCallback(
    async data => {
      const type = 'DELETE_CART';
      apiRequest({
        apiData: {
          method: 'delete',
          url: `660/cart/${data.id}`,
          data,
        },
        type,
      });
    },
    [apiRequest],
  );

  const value = useMemo(
    () => ({
      loadCart,
      addToCart,
      updateCartItem,
      deleteCartItem,
      cart,
    }),
    [loadCart, addToCart, updateCartItem, deleteCartItem, cart],
  );

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}

CartProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export const useCartContext = () => useContext(CartContext);
