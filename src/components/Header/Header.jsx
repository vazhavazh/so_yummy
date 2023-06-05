import React from 'react';
import { useState } from 'react';
import logo from '../../assets/svg/header/logo.svg';
import burger from '../../assets/svg/header/burger.svg';
import avatarPlaceholder from '../../assets/svg/header/avatar-placeholder.jpg';
import style from './Header.module.scss';
import Menu from './Menu/Menu';

export const Header = () => {
  const [isMenuActive, setIsMenuActive] = useState(false);

  return (
    <header className={`${style.header} ${style.container}`}>
      <img src={logo} alt="logo" />
      <div className={style.userInfoWrapper}>
        <img className={style.avatar} src={avatarPlaceholder} alt="avatar" />
        <p className={style.username}>Name</p>
        <nav className={style.nav}>
          <button
            className={style.burger}
            type="button"
            onClick={() => setIsMenuActive(true)}
          >
            <img src={burger} alt="" />
          </button>
          <Menu setIsMenuActive={setIsMenuActive} isMenuActive={isMenuActive} />
        </nav>
      </div>
    </header>
  );
};

console.log(style);

