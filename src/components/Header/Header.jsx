import React from 'react';
import { useState } from 'react';
import logo from '../../assets/svg/header/logo.svg';
import burger from '../../assets/svg/header/burger.svg';
import avatarPlaceholder from '../../assets/svg/header/avatar-placeholder.jpg';
import style from './Header.module.scss';
import Menu from './Menu/Menu';
import Dropdown from './Dropdown/Dropdown';
import { NavLink } from 'react-router-dom';

export const Header = () => {
  const [isMenuActive, setIsMenuActive] = useState(false);
  const [isDropdownActive, setIsDropdownActive] = useState(false);

  return (
    <header className={`${style.header} ${style.container}`}>
      <NavLink to="/">
        <img src={logo} alt="logo" />
      </NavLink>
      <div className={style.userNavWrapper}>
        <div
          onClick={() => setIsDropdownActive(!isDropdownActive)}
          className={style.userInfoWrapper}
        >
          <img className={style.avatar} src={avatarPlaceholder} alt="avatar" />
          <p className={style.username}>Name</p>
        </div>
        <Dropdown
          isDropdownActive={isDropdownActive}
          setIsDropdownActive={setIsDropdownActive}
        ></Dropdown>
        <div className={style.burgerWrapper}>
          <button
            className={style.burger}
            type="button"
            onClick={() => setIsMenuActive(true)}
          >
            <img src={burger} alt="" />
          </button>
          <Menu setIsMenuActive={setIsMenuActive} isMenuActive={isMenuActive} />
        </div>
      </div>
    </header>
  );
};

// 1bd9f20d66aafa61f9aac797505b16d683f0c1fa
