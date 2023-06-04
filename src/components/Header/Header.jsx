import { useState } from 'react';
import logo from '../../assets/svg/header/logo.svg';
import burger from '../../assets/svg/header/burger.svg';
import style from './Header.module.scss';
import Menu from './Menu/Menu';

export const Header = () => {
  const [isMenuActive, setIsMenuActive] = useState(false);

  return (
    <header>
      <img src={logo} alt="logo" />
      <img src="" alt="avatar" />
      <p>Name</p>
      <nav>
        <button
          className={style.burger}
          type="button"
          onClick={() => setIsMenuActive(true)}
        >
          <img src={burger} alt="" />
        </button>
        <Menu setIsMenuActive={setIsMenuActive} isMenuActive={isMenuActive} />
      </nav>
    </header>
  );
};
