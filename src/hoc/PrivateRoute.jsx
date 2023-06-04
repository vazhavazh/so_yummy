import React from 'react';
import { Navigate } from 'react-router-dom';
import { getIsAuth } from '../redux/auth/authSelectors';
import { useSelector } from 'react-redux';
export const PrivateRoute = ({ children }) => {
  const isLoggedIn = useSelector(getIsAuth);

  if (!isLoggedIn) {
    return <Navigate to="/welcome" />;
  }

  return children;
};
