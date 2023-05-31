import React, { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { Header } from '../components/Header/Header';
import { Footer } from '../components/Footer/Footer';

export const Layout = () => {
  return (
    <>
      <Header />
      <div>
        <Suspense fallback={<h1>Loading...</h1>}>
          <Outlet />
        </Suspense>
        <Footer />
      </div>
    </>
  );
};
