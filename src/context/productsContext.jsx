import React, {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useReducer,
} from 'react';
import PropTypes from 'prop-types';
import productsReducer, {
  productsInitialValue,
} from '../reducers/productReducer';
import useApiRequest from '../hooks/useApiRequest';
import { useErrorContext } from './errorContext';
import { useLoadingContext } from './loadingContext';

export const ProductsContext = createContext();

export function ProductsProvider({ children }) {
  const [products, dispatch] = useReducer(
    productsReducer,
    productsInitialValue,
  );
  const { dispatchErrors } = useErrorContext();
  const { dispatchLoading } = useLoadingContext();
  const apiRequest = useApiRequest({
    dispatch,
    dispatchLoading,
    dispatchErrors,
  });

  const loadProducts = useCallback(async () => {
    const type = 'LOAD_PRODUCTS';
    apiRequest({
      apiData: {
        method: 'get',
        url: '660/products',
      },
      type,
    });
  }, [apiRequest]);

  const value = useMemo(
    () => ({
      products,
      loadProducts,
    }),
    [products, loadProducts],
  );

  return (
    <ProductsContext.Provider value={value}>
      {children}
    </ProductsContext.Provider>
  );
}

ProductsProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export const useProducts = () => useContext(ProductsContext);
