import React from 'react';
import logo from '../../assets/svg/welcomePage/logo.svg';
import styles from './Welcome.module.scss';
import { NavLink } from 'react-router-dom';

export const Welcome = () => {
  return (
    <div className={styles.wrapper}>
      <img src={logo} alt="logo" />
      <h2 className={styles.title}>Welcome to the app!</h2>
      <p className={styles.text}>
        This app offers more than just a collection of recipes - it is designed
        to be your very own digital cookbook. You can easily save and retrieve
        your own recipes at any time.
      </p>
      <div className={styles.btn_wrapper}>
        <NavLink className={styles.btn_registration} to="/register">
          Registration
        </NavLink>
        <NavLink className={styles.btn_signin} to="/signin">
          Sign in
        </NavLink>
      </div>
    </div>
  );
};
