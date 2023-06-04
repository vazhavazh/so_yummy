import React from 'react';
import { useSelector } from 'react-redux';
import { getIsAuth } from '../redux/auth/authSelectors';
import { Navigate } from 'react-router-dom';
export const PublicRoute = ({ children }) => {
  const isLoggedIn = useSelector(getIsAuth);

  if (isLoggedIn) {
    return <Navigate to={'/main'} />;
  }
  return children;
};

// import { useSelector } from 'react-redux';
// import { Navigate } from 'react-router-dom';
// import { getIsAuth } from 'redux/auth/authSelectors';

// export const PublicRoute = ({ component: Component, redirectTo = '/' }) => {
//   const isLoggedIn = useSelector(getIsAuth);

//   return isLoggedIn ? <Navigate to={redirectTo} /> : Component;
// };
