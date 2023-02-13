import React, { createContext, useMemo, useContext, useReducer } from 'react';
import PropTypes from 'prop-types';
import errorReducer, { errorInitialState } from '../reducers/errorReducer';

export const ErrorContext = createContext();

export function ErrorProvider({ children }) {
  const [errors, dispatchErrors] = useReducer(errorReducer, errorInitialState);

  const value = useMemo(() => ({ errors, dispatchErrors }), [errors]);

  return (
    <ErrorContext.Provider value={value}>{children}</ErrorContext.Provider>
  );
}

ErrorProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export const useErrorContext = () => useContext(ErrorContext);
