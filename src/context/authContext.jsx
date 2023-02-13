import React, {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from 'react';
import PropTypes from 'prop-types';
import axiosInstance from '../utils/axiosInstance';

export const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);

  // component did mount
  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      setUser(JSON.parse(token));
    }
  }, []);

  const login = useCallback(async (values, actions) => {
    try {
      const res = await axiosInstance.post('login', values);
      setUser(res);
      localStorage.setItem('token', JSON.stringify(res));
      actions.resetForm();
    } catch (error) {
      actions.setErrors({ serverError: error.message });
    }
  }, []);

  const register = useCallback(async (values, actions) => {
    try {
      const { confirmPassword, ...rest } = values;

      const res = await axiosInstance.post('register', rest);
      actions.resetForm();
      setUser(res);
      localStorage.setItem('token', JSON.stringify(res));
    } catch (error) {
      actions.setErrors({ serverError: error.message });
    }
  }, []);

  const logout = useCallback(() => {
    setUser(null);
    localStorage.clear();
  }, []);

  const value = useMemo(
    () => ({
      login,
      register,
      logout,
      user,
    }),
    [login, register, logout, user],
  );

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

AuthProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export const useAuthContext = () => useContext(AuthContext);
