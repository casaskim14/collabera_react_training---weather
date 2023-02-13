import React, { createContext, useMemo, useContext, useReducer } from 'react';
import PropTypes from 'prop-types';
import loadingReducer, {
  loadingInitialState,
} from '../reducers/loadingReducer';

export const LoadingContext = createContext();

export function LoadingProvider({ children }) {
  const [loading, dispatchLoading] = useReducer(
    loadingReducer,
    loadingInitialState,
  );

  const value = useMemo(() => ({ loading, dispatchLoading }), [loading]);

  return (
    <LoadingContext.Provider value={value}>{children}</LoadingContext.Provider>
  );
}

LoadingProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export const useLoadingContext = () => useContext(LoadingContext);
