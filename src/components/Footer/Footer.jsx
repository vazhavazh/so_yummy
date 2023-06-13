import style from './Footer.module.scss';
import { NavLink } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { setSelectedTypes } from 'redux/search/searchSlice';
import logo from '../../assets/svg/footer/logo.svg';
import mail from '../../assets/svg/footer/mail.svg';
import facebook from '../../assets/svg/footer/facebook.svg';
import youtube from '../../assets/svg/footer/youtube.svg';
import twitter from '../../assets/svg/footer/twitter.svg';
import instagram from '../../assets/svg/footer/instagram.svg';
import { useState } from 'react';

export const Footer = () => {
  const dispatch = useDispatch();

  const handleIngredientClick = () => {
    dispatch(setSelectedTypes('ingredients'));
  };
  const [email, setEmail] = useState('');

  const handleSubmit = e => {
    e.preventDefault();
    console.log({ email });
  };

  return (
    <div>
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
                <NavLink className={style.navLink} to="/search" onClick={handleIngredientClick}>
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
            <form className={style.form}>
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
            </form>
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
    </div>
  );
};
