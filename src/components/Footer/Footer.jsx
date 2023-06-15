import style from './Footer.module.scss';
import { NavLink } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import logo from '../../assets/svg/footer/logo.svg';
import { ReactComponent as MailIcon } from '../../assets/svg/footer/mail.svg';
import facebook from '../../assets/svg/footer/facebook.svg';
import youtube from '../../assets/svg/footer/youtube.svg';
import twitter from '../../assets/svg/footer/twitter.svg';
import instagram from '../../assets/svg/footer/instagram.svg';
import { SubscribeSchema } from 'helpers/yup';
import { Formik, Form, Field } from 'formik';
import { ReactComponent as ErrorSvg } from '../../assets/svg/authForm/error.svg';
import { ReactComponent as SuccessSvg } from '../../assets/svg/authForm/success.svg';
import { setFromFooterState } from 'redux/search/searchThunks';
import { subscribe } from 'redux/subscribe/subThunks';
import styles from '../AuthForm/AuthForm.module.scss';

export const Footer = () => {
  const dispatch = useDispatch();

  //  const handleIngredientClick = () => {
  //   dispatch(setSelectedTypes('ingredients', location));
  // };

  const handleIngredientClick = () => {
    dispatch(setFromFooterState(true));
  };

  const initialValues = { email: '' };
  return (
    <footer>
      <section className={style.contactsSection}>
        <div className={style.navAdvSubWrapper}>
          <div className={style.navAdvWrapper}>
            <div className={style.nav}>
              <NavLink className={style.mainLink} to="/">
                <img className={style.logo} src={logo} alt="logo" />
                <p className={style.title}>So Yummy</p>
              </NavLink>
              <ul className={style.advantagesList}>
                <li className={style.advantagesItem}>
                  Database of recipes that can be replenished
                </li>
                <li className={style.advantagesItem}>
                  Flexible search for desired and unwanted ingredients
                </li>
                <li className={style.advantagesItem}>
                  Ability to add your own recipes with photos
                </li>
                <li className={style.advantagesItem}>
                  Convenient and easy to use
                </li>
              </ul>
            </div>
            <ul className={style.navList}>
              <li className={style.navItem}>
                <NavLink
                  className={style.navLink}
                  to="/search"
                  onClick={handleIngredientClick}
                >
                  Ingredients
                </NavLink>
              </li>
              <li className={style.navItem}>
                <NavLink className={style.navLink} to="/add">
                  Add recipes
                </NavLink>
              </li>
              <li className={style.navItem}>
                <NavLink className={style.navLink} to="/my">
                  My recipes
                </NavLink>
              </li>
              <li className={style.navItem}>
                <NavLink className={style.navLink} to="/favorite">
                  Favorites
                </NavLink>
              </li>
              <li className={style.navItem}>
                <NavLink className={style.navLink} to="/shopping-list">
                  Shopping list
                </NavLink>
              </li>
            </ul>
          </div>
          <div className={style.subscribeWrapper}>
            <div className={style.subscribeText}>
              <p className={style.subscribeTitle}>
                Subscribe to our Newsletter
              </p>
              <p className={style.subscribeDesc}>
                Subscribe up to our newsletter. Be in touch with latest news and
                special offers, etc.
              </p>
            </div>
            <Formik
              validationSchema={SubscribeSchema}
              initialValues={initialValues}
              onSubmit={userData => {
                dispatch(subscribe(userData));
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
                  <Form className={style.form}>
                    <div className={style.inputWrapper}>
                      <MailIcon className={style.mailIcon} />
                      <Field
                        className={style.input}
                        type="email"
                        placeholder="Enter your email address"
                        onChange={handleChange}
                        autoComplete="off"
                        name="email"
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
                    </div>
                    <button
                      type="submit"
                      onClick={handleSubmit}
                      disabled={!isValid && !dirty}
                      className={style.subscribeBtn}
                    >
                      Subscribe
                    </button>
                  </Form>
                );
              }}
            </Formik>

            {/* <form className={style.form}>
              <div className={style.inputWrapper}>
                <img className={style.mailIcon} src={mail} alt="" />
                <input
                  className={style.input}
                  type="email"
                  placeholder="Enter your email address"
                  onChange={e => setEmail(e.target.value)}
                />
              </div>
              <button
                type="submit"
                onClick={handleSubmit}
                className={style.subscribeBtn}
              >
                Subscribe
              </button>
            </form> */}
          </div>
        </div>
        <ul className={style.contactsList}>
          <li className={style.facebookItem}>
            <a target="_blank" rel="noreferrer" href="https://www.facebook.com">
              <img
                className={style.facebookIcon}
                src={facebook}
                alt="facebook"
              />
            </a>
          </li>
          <li className={style.youtubeItem}>
            <a target="_blank" rel="noreferrer" href="https://www.youtube.com">
              <img className={style.youtubeIcon} src={youtube} alt="youtube" />
            </a>
          </li>
          <li className={style.twitterItem}>
            <a target="_blank" rel="noreferrer" href="https://twitter.com">
              <img className={style.twitterIcon} src={twitter} alt="twitter" />
            </a>
          </li>
          <li className={style.instagramItem}>
            <a
              target="_blank"
              rel="noreferrer"
              href="https://www.instagram.com"
            >
              <img
                className={style.instagramIcon}
                src={instagram}
                alt="instagram"
              />
            </a>
          </li>
        </ul>
      </section>
      <section className={style.copyrightSection}>
        <p className={style.copyrightText}> © 2023 All Rights Reserved.</p>
        <a
          className={style.termsLink}
          href="https://en.wikipedia.org/wiki/Terms_of_service"
          target="_blank"
          rel="noreferrer"
        >
          Terms of Service
        </a>
      </section>
    </footer>
  );
};
