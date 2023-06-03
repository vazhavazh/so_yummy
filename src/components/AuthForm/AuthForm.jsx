import React, { useEffect, useState } from 'react';
import { Formik, Form, Field } from 'formik';
import { register, login } from 'redux/auth/authThunks';
import styles from './AuthForm.module.scss';
import { NavLink } from 'react-router-dom';
import { ReactComponent as UserSvg } from '../../assets/svg/authForm/name.svg';
import { ReactComponent as EmailSvg } from '../../assets/svg/authForm/email.svg';
import { ReactComponent as PassSvg } from '../../assets/svg/authForm/password.svg';
// import { ReactComponent as SvgOrderWhite } from '../../assets/svg/authForm/Order-food-pana-white.svg';
import { ReactComponent as SvgOrderBlack } from '../../assets/svg/authForm/Order-food-pana-black.svg';
import { useDispatch, useSelector } from 'react-redux';
import { selectStatus } from 'redux/auth/authSelectors';

export const AuthForm = ({ title, page, redirect, schema }) => {
  // const [data, setData] = useState();
  // const dispatch = useDispatch();
  // const status = useSelector(selectStatus);

  // useEffect(() => {
  //   if (status) {
  //     dispatch(login(data));
  //   }
  // }, [status, dispatch, data]);
  // const handleRegister = async credentials => {
  //   await dispatch(register(credentials));
  // };

  const initialValues =
    page === 'signin'
      ? { email: '', password: '' }
      : {
          name: '',
          email: '',
          password: '',
        };
  return (
    <div>
      <div className={styles.bgr_img}></div>
      {/* <SvgOrderWhite className={styles.bgr_img_big} /> */}
      <div className={styles.wrapper}>
        <SvgOrderBlack className={styles.bgr_img_svg} />
        <div className={styles.wrp_test}>
          <div className={styles.form_wrapper}>
            <h2 className={styles.form_title}>{title}</h2>
            <Formik
              initialValues={initialValues}
              validationSchema={schema}
              // onSubmit={credentials => {
              //   page === 'login'
              //     ? dispatch(login(credentials))
              //     : handleRegister(credentials);

              //   setData(credentials);
              // }}
            >
              <Form className={styles.form_box}>
                {page === 'register' && (
                  <>
                    <label htmlFor="name" className={styles.label}>
                      <div className={styles.user_svg}>
                        {' '}
                        <UserSvg fill="#fafafa" />
                      </div>
                      <Field
                        autoComplete="off"
                        type="text"
                        name="name"
                        placeholder="Name"
                        className={styles.input}
                      />
                    </label>
                  </>
                )}
                <label htmlFor="email" className={styles.label}>
                  <div className={styles.user_svg}>
                    {' '}
                    <EmailSvg fill="#fafafa" />
                  </div>
                  <Field
                    autoComplete="off"
                    name="email"
                    type="email"
                    placeholder="Email"
                    className={styles.input}
                  />
                </label>
                <label htmlFor="password" className={styles.label}>
                  <div className={styles.user_svg}>
                    {' '}
                    <PassSvg fill="#fafafa" />
                  </div>
                  <Field
                    autoComplete="off"
                    name="password"
                    type="password"
                    placeholder="Password"
                    className={styles.input}
                  />
                </label>
                <button className={styles.submit_button} type="submit">
                  {page === 'signin' ? 'Sing in' : 'Sign up'}
                </button>
              </Form>
            </Formik>
          </div>

          <NavLink
            to={page === 'signin' ? '/register' : '/signin'}
            className={styles.auth_link}
          >
            {redirect}
          </NavLink>
        </div>
      </div>
    </div>
  );
};
