import React from 'react';
// import { Formik } from 'formik';
import styles from './AuthForm.module.scss';

export const AuthForm = ({ title }) => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.bgr_img_big}></div>
      <div className={styles.bgr_img}></div>
      <div className={styles.form_wrapper}>
        <h2>{title}</h2>
      </div>
    </div>
  );
};
