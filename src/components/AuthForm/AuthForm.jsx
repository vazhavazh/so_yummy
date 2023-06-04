import React, { useEffect, useState } from 'react';
import { Formik, Form, Field } from 'formik';
import { registerUser, loginUser } from 'redux/auth/authThunks';
import styles from './AuthForm.module.scss';
import { NavLink } from 'react-router-dom';
import { ReactComponent as UserSvg } from '../../assets/svg/authForm/name.svg';
import { ReactComponent as EmailSvg } from '../../assets/svg/authForm/email.svg';
import { ReactComponent as PassSvg } from '../../assets/svg/authForm/password.svg';
// import { ReactComponent as SvgOrderWhite } from '../../assets/svg/authForm/Order-food-pana-white.svg';
import { ReactComponent as SvgOrderBlack } from '../../assets/svg/authForm/Order-food-pana-black.svg';
import { ReactComponent as ErrorSvg } from '../../assets/svg/authForm/error.svg';
import { ReactComponent as SuccessSvg } from '../../assets/svg/authForm/success.svg';
import { useDispatch } from 'react-redux';
// import { selectStatus } from 'redux/auth/authSelectors';

export const AuthForm = ({ title, page, redirect, schema }) => {
  const [data, setData] = useState();
  const dispatch = useDispatch();
  // const status = useSelector(selectStatus);

  const status = false;
  useEffect(() => {
    if (status) {
      dispatch(loginUser(data));
    }
  }, [status, dispatch, data]);

  const handleRegister = async userData => {
    await dispatch(registerUser(userData));
    console.log(userData);
  };

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
              onSubmit={userData => {
                page === 'signin'
                  ? dispatch(loginUser(userData))
                  : handleRegister(userData);

                setData(userData);
              }}
            >
              {({
                values,
                errors,
                touched,
                handleChange,
                handleBlur,
                isValid,
                handleSubmit,
                dirty,
              }) => {
                return (
                  <Form className={styles.form_box}>
                    {page === 'register' && (
                      <>
                        <label htmlFor="name" className={styles.label}>
                          <div className={styles.user_svg}>
                            {' '}
                            <UserSvg
                              fill="#fafafa"
                              className={`${
                                errors.name && touched.name
                                  ? styles.error_fill
                                  : ''
                              } ${
                                !errors.name && touched.name
                                  ? styles.success_fill
                                  : ''
                              }`}
                            />
                          </div>
                          <Field
                            autoComplete="off"
                            type="text"
                            name="name"
                            placeholder="Name"
                            className={`${styles.input} ${
                              errors.name && touched.name ? styles.error : ''
                            } ${
                              !errors.name && touched.name ? styles.success : ''
                            }`}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values.name}
                          />

                          {touched.name && errors.name && (
                            <>
                              <p className={styles.error_message}>
                                {errors.name}
                              </p>
                              <ErrorSvg className={styles.error_svg} />
                            </>
                          )}
                          {touched.name && !errors.name && (
                            <SuccessSvg className={styles.success_svg} />
                          )}
                        </label>
                      </>
                    )}
                    <label htmlFor="email" className={styles.label}>
                      <div className={styles.user_svg}>
                        {' '}
                        <EmailSvg
                          fill="#fafafa"
                          className={`${
                            errors.email && touched.email
                              ? styles.error_fill
                              : ''
                          } ${
                            !errors.email && touched.email
                              ? styles.success_fill
                              : ''
                          }`}
                        />
                      </div>
                      <Field
                        autoComplete="off"
                        name="email"
                        type="email"
                        placeholder="Email"
                        className={`${styles.input} ${
                          errors.email && touched.email ? styles.error : ''
                        } ${
                          !errors.email && touched.email ? styles.success : ''
                        }`}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.email}
                      />
                      {touched.email && errors.email && (
                        <>
                          <p className={styles.error_message}>{errors.email}</p>
                          <ErrorSvg className={styles.error_svg} />
                        </>
                      )}
                      {touched.email && !errors.email && (
                        <SuccessSvg className={styles.success_svg} />
                      )}
                    </label>
                    <label htmlFor="password" className={styles.label}>
                      <div className={styles.user_svg}>
                        {' '}
                        <PassSvg
                          fill="#fafafa"
                          className={`${
                            errors.password && touched.password
                              ? styles.error_fill
                              : ''
                          } ${
                            !errors.password && touched.password
                              ? styles.success_fill
                              : ''
                          }`}
                        />
                      </div>
                      <Field
                        autoComplete="off"
                        name="password"
                        type="password"
                        placeholder="Password"
                        className={`${styles.input} ${
                          errors.password && touched.password
                            ? styles.error
                            : ''
                        } ${
                          !errors.password && touched.password
                            ? styles.success
                            : ''
                        }`}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.password}
                      />
                      {touched.password && errors.password && (
                        <>
                          <p className={styles.error_message}>
                            {errors.password}
                          </p>
                          <ErrorSvg className={styles.error_svg} />
                        </>
                      )}
                      {touched.password && !errors.password && (
                        <>
                          <p className={styles.success_message}>
                            Password is secure
                          </p>
                          <SuccessSvg className={styles.success_svg} />
                        </>
                      )}
                    </label>
                    <button
                      className={styles.submit_button}
                      disabled={!isValid && !dirty}
                      onClick={handleSubmit}
                      type="submit"
                    >
                      {page === 'signin' ? 'Sing in' : 'Sign up'}
                    </button>
                  </Form>
                );
              }}
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
