import style from './Footer.module.scss';
import { NavLink } from 'react-router-dom';
import logo from '../../assets/svg/footer/logo.svg';
import mail from '../../assets/svg/footer/mail.svg';
import facebook from '../../assets/svg/footer/facebook.svg';
import youtube from '../../assets/svg/footer/youtube.svg';
import twitter from '../../assets/svg/footer/twitter.svg';
import instagram from '../../assets/svg/footer/instagram.svg';

export const Footer = () => {
  return (
    <div>
      <section className={style.contactsSection}>
        <NavLink className={style.mainLink} to="/">
          <img className={style.logo} src={logo} alt="logo" />
          <p className={style.title}>So Yummy</p>
        </NavLink>
        <ul className={style.navList}>
          <li className={style.navItem}>Ingredients</li>
          <li className={style.navItem}>
            <NavLink to="/add">Add recipes</NavLink>
          </li>
          <li className={style.navItem}>
            <NavLink to="/my">My recipes</NavLink>
          </li>
          <li className={style.navItem}>
            <NavLink to="/favorite">Favorites</NavLink>
          </li>
          <li className={style.navItem}>
            <NavLink to="/shopping-list">Shopping list</NavLink>
          </li>
        </ul>
        <div className={style.inputWrapper}>
          <img className={style.mailIcon} src={mail} alt="" />
          <input
            className={style.input}
            type="text"
            placeholder="Enter your email address"
          />
        </div>
        <button type="submit" className={style.subscribeBtn}>
          Subscribe
        </button>
        <ul className={style.contactsList}>
          <li className={style.facebookIcon}>
            <a target="_blank" rel="noreferrer" href="https://www.facebook.com">
              <img src={facebook} alt="facebook" />
            </a>
          </li>
          <li className={style.youtubeIcon}>
            <a target="_blank" rel="noreferrer" href="https://www.youtube.com">
              <img src={youtube} alt="youtube" />
            </a>
          </li>
          <li className={style.twitterIcon}>
            <a target="_blank" rel="noreferrer" href="https://twitter.com">
              <img src={twitter} alt="twitter" />
            </a>
          </li>
          <li className={style.instagramIcon}>
            <a
              target="_blank"
              rel="noreferrer"
              href="https://www.instagram.com"
            >
              <img src={instagram} alt="instagram" />
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
