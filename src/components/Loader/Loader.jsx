import { Watch } from "react-loader-spinner";
import css from './Loader.module.scss';

const Loader = () => {
  return (
    <div className={css.loader_wrapper}>
      <Watch
        height="150"
        width="150"
        radius="48"
        color="#8BAA36"
        ariaLabel="watch-loading"
        visible={true}
      />
    </div>
  );
};

export default Loader;