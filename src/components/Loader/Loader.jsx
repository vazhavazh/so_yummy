import Fork from '..//..//assets/svg/loader/fork.svg';
import Knife from '..//..//assets/svg/loader/knife.svg';
import css from './Loader.module.scss';

const Loader = () => {
  return (
    <div className={css.loader_wrapper}>
      <img className={css.loader_img} src={Fork} alt="Spinner" />
      <img className={css.loader_img} src={Knife} alt="Spinner" />
    </div>
  );
};
export default Loader;