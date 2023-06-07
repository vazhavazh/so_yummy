import { NavLink } from 'react-router-dom';
import cross from '../../../assets/svg/header/cross.svg';
import logo from '../../../assets/svg/header/logo.svg';
import search from '../../../assets/svg/header/search.svg';
import style from './Menu.module.scss';
import ToggleTheme from 'components/theme/ToggleTheme';

const Menu = ({ setIsMenuActive, isMenuActive }) => {
  return (
    <div
      className={`${style.backdrop} ${isMenuActive ? style.active : ''} ${
        style.container
      }`}
    >
      <div>
        <div className={style.logoCrossWrapper}>
          <NavLink to="/">
            <img src={logo} alt="logo" />
          </NavLink>
          <button
            className={style.cross}
            type="button"
            onClick={() => setIsMenuActive(false)}
          >
            <img src={cross} alt="cross" />
          </button>
        </div>
        <nav>
          <ul className={style.navList}>
            <li className={style.navItem}>Categories</li>
            <li className={style.navItem}>Add recipes</li>
            <li className={style.navItem}>My recipes</li>
            <li className={style.navItem}>Favorites</li>
            <li className={style.navItem}>Shopping list</li>
            <li className={style.navItem}>
              <img
                className={style.searchIcon}
                src={search}
                alt="search icon"
              />
              Search
            </li>
          </ul>
        </nav>
      </div>
      <div className={style.toggle}>
        <ToggleTheme />
      </div>
    </div>
  );
};

export default Menu;
