import React, { useEffect } from 'react';
import { Outlet } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import Errors from '../components/Errors';

function BaseLayout() {
  const dispatch = useDispatch();

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      const JSONToken = JSON.parse(token);
      dispatch({ type: 'LOGIN_SUCCESS', payload: JSONToken });
    }
  }, [dispatch]);

  return (
    <>
      <Outlet />
      <Errors />
    </>
  );
}

export default BaseLayout;
