import error from '..//assets/image/errorPage/error.webp';
import style from '..//components/Search/Error.module.scss';

const ErrorPage = () => {
  return (
      <div className={style.errorWrapper}>
        <div className={style.errorCont}>
          <img
            src={error}
            alt="error"
            className={style.errorImage}
          />
          <p className={style.errorTitle}>
            We are sorry,
          </p>
          <p className={style.errorText}>
            but the page you were looking for can’t be found..
          </p>
        </div>
      </div>
  );
};

export default ErrorPage;