import { NavLink } from 'react-router-dom';
import logo from '../../../assets/svg/header/logo.svg';
import { ReactComponent as Search } from '../../../assets/svg/header/search.svg';
import { ReactComponent as Cross } from '../../../assets/svg/header/cross.svg';
import style from './Menu.module.scss';
import ToggleTheme from 'components/theme/ToggleTheme';

const Menu = ({ setIsMenuActive, isMenuActive }) => {
  return (
    <div
      className={`${style.backdrop} ${isMenuActive ? style.active : ''} ${
        style.container
      }`}
    >
      <div className={style.navWrapper}>
        <div className={style.logoCrossWrapper}>
          <NavLink onClick={() => setIsMenuActive(false)} to="/">
            <img className={style.logo} src={logo} alt="logo" />
          </NavLink>
          <button
            className={style.cross}
            type="button"
            onClick={() => setIsMenuActive(false)}
          >
            <Cross />
          </button>
        </div>
        <nav>
          <ul className={style.navList}>
            <li className={style.navItem}>
              <NavLink
                onClick={() => setIsMenuActive(false)}
                className={style.navLink}
                to="/categories/Beef"
              >
                Categories
              </NavLink>
            </li>
            <li className={style.navItem}>
              <NavLink
                onClick={() => setIsMenuActive(false)}
                className={style.navLink}
                to="/add"
              >
                Add recipes
              </NavLink>
            </li>
            <li className={style.navItem}>
              <NavLink
                onClick={() => setIsMenuActive(false)}
                className={style.navLink}
                to="/my"
              >
                My recipes
              </NavLink>
            </li>
            <li className={style.navItem}>
              <NavLink
                onClick={() => setIsMenuActive(false)}
                className={style.navLink}
                to="/favorite"
              >
                Favorites
              </NavLink>
            </li>
            <li className={style.navItem}>
              <NavLink
                onClick={() => setIsMenuActive(false)}
                className={style.navLink}
                to="/shopping-list"
              >
                Shopping list
              </NavLink>
            </li>
            <li className={style.navItem}>
              <button className={style.searchBtn}>
                <NavLink
                  onClick={() => setIsMenuActive(false)}
                  className={`${style.navLink} ${style.searchLink}`}
                  to="/search"
                >
                  <Search className={style.searchIcon} />
                  <p className={style.searchLinkText}>Search</p>
                </NavLink>
              </button>
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
