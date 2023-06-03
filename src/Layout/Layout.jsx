import React, { Suspense } from 'react';
import Loader  from '../components/Loader/Loader';
import { Outlet } from 'react-router-dom';
import { Header } from '../components/Header/Header';
import { Footer } from '../components/Footer/Footer';

export const Layout = () => {
  return (
    <>
      <Header />
      <div>
        <Suspense fallback={<Loader/>}>
          <Outlet />
        </Suspense>
        <Footer />
      </div>
    </>
  );
};
