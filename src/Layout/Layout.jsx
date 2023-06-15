import React, { Suspense } from 'react';
import Loader from '../components/Loader/Loader';
import { Outlet } from 'react-router-dom';
import { getIsAuth } from '../redux/auth/authSelectors';
import { useSelector } from 'react-redux';
import { Header } from '../components/Header/Header';
import { Footer } from '../components/Footer/Footer';
import style from './Layout.module.scss';
import img from '..//assets/image/searchPage/kisspng-pasta-spinach-dip.png';

export const Layout = () => {
  const isLoggedIn = useSelector(getIsAuth);
  return (
    <>
      <div className={style.content}>
        {isLoggedIn && <Header />}
        <Suspense fallback={<Loader />}>
          <Outlet />
        </Suspense>
        <div className={style.content_img}>
            <img src={img} alt="img" />
          </div>
      </div>
      {isLoggedIn && <Footer />}
    </>
  );
};
