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
            <img className={style.logo} src={logo} alt="logo" />
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
            <li className={style.navItem}>
              <NavLink className={style.navLink} to="/categories">
                Categories
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
            <li className={style.navItem}>
              <img
                className={style.searchIcon}
                src={search}
                alt="search icon"
              />
              <NavLink className={style.navLink} to="/search">
                Search
              </NavLink>
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
