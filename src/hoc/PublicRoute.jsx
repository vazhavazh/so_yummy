import React from 'react';
import { useSelector } from 'react-redux';
import { getIsAuth } from '../redux/auth/authSelectors';
import { Navigate } from 'react-router-dom';
export const PublicRoute = ({ children }) => {
  const isLoggedIn = useSelector(getIsAuth);

  if (isLoggedIn) {
    return <Navigate to="/" />;
  }
  return children;
};


