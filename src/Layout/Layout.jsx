import React, { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { getIsAuth } from '../redux/auth/authSelectors';
import { useSelector } from 'react-redux';


import { Header } from '../components/Header/Header';
import { Footer } from '../components/Footer/Footer';


export const Layout = () => {
  const isLoggedIn = useSelector(getIsAuth);
  return (
    <>
      {isLoggedIn && <Header />}
      <Suspense fallback={<h1>Loading...</h1>}>
        <Outlet />
      </Suspense>
      {isLoggedIn && <Footer />}
    </>
  );
};
