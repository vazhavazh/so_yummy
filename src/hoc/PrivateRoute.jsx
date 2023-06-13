import React from 'react';
import { Navigate } from 'react-router-dom';
import { getIsAuth } from '../redux/auth/authSelectors';
import { useDispatch, useSelector } from 'react-redux';
import { google } from 'redux/auth/authThunks';

export const PrivateRoute = ({ children }) => {
  const dispatch = useDispatch();
  const isLoggedIn = useSelector(getIsAuth);

  if (!isLoggedIn) {
    const urlParams = new URLSearchParams(window.location.search);
    const token = urlParams.get('token');
    const user = {
      name: urlParams.get('name'),
      email: urlParams.get('email'),
      avatarURL: urlParams.get('avatarURL'),
      _id: urlParams.get('_id'),
    };
    if (token) {
      dispatch(google({ user, token }));
    }
  }

  if (!isLoggedIn) {
    return <Navigate to="/welcome" />;
  }
  return children;
};
