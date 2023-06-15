import React from 'react';
import { useState } from 'react';
import logo from '../../assets/svg/header/logo.svg';
import { ReactComponent as Burger } from '../../assets/svg/header/burger.svg';
import style from './Header.module.scss';
import Menu from './Menu/Menu';
import Dropdown from './Dropdown/Dropdown';
import { NavLink } from 'react-router-dom';
import ToggleTheme from 'components/theme/ToggleTheme';
import { useSelector } from 'react-redux';
import { getUserName } from 'redux/auth/authSelectors';
import { useLocation } from 'react-router-dom';

export const Header = () => {
  const [isMenuActive, setIsMenuActive] = useState(false);
  const [isDropdownActive, setIsDropdownActive] = useState(false);
  const path = useLocation().pathname;

  let { avatarURL, name } = useSelector(getUserName);

  return (
    <header
      className={`${style.header} ${style.container} ${
        path === '/' ? '' : style.headerNotMain
      }`}
    >
      <div className={style.navWrapper}>
        <NavLink id="ahcnor1" to="/">
          <img className={style.logo} src={logo} alt="logo" />
        </NavLink>
        <Menu setIsMenuActive={setIsMenuActive} isMenuActive={isMenuActive} />
      </div>
      <div className={style.userWrapper}>
        <div
          onClick={() => setIsDropdownActive(!isDropdownActive)}
          className={style.userInfoWrapper}
        >
          {avatarURL && (
            <img className={style.avatar} src={avatarURL} alt="avatar" />
          )}
          <p
            className={`${style.username} ${
              path === '/' ? '' : style.usernameNotMain
            }`}
          >
            {name}
          </p>
          <div className={style.toggle}>
            <ToggleTheme />
          </div>
        </div>
        <Dropdown
          isDropdownActive={isDropdownActive}
          setIsDropdownActive={setIsDropdownActive}
        />
        <div className={style.burgerWrapper}>
          <button
            className={style.burgerBtn}
            type="button"
            onClick={() => setIsMenuActive(true)}
          >
            <Burger
              className={`${style.burger} ${
                path === '/' ? '' : style.burgerNotMain
              }`}
            />
          </button>
        </div>
      </div>
    </header>
  );
};

// 1bd9f20d66aafa61f9aac797505b16d683f0c1fa
