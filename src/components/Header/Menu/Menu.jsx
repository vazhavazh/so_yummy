import cross from '../../../assets/svg/header/cross.svg';
import logo from '../../../assets/svg/header/logo.svg';
import style from './Menu.module.scss';

const Menu = ({ setIsMenuActive, isMenuActive }) => {
  return (
    <div className={`${style.backdrop} ${isMenuActive ? style.active : ''}`}>
      <img src={logo} alt="logo" />
      <button
        className={style.cross}
        type="button"
        onClick={() => setIsMenuActive(false)}
      >
        <img src={cross} alt="cross" />
      </button>
      <ul>
        <li>Categories</li>
        <li>Add recipes</li>
        <li>My recipes</li>
        <li>Favorites</li>
        <li>Shopping list</li>
        <li>Search</li>
      </ul>
    </div>
  );
};

export default Menu;
