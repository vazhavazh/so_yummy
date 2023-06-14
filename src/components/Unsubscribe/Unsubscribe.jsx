import style from './Unsubscribe.module.scss';
import { useDispatch } from 'react-redux';
import { unSubscribe } from 'redux/subscribe/subThunk';

export const Unsubscribe = () => {
  const dispatch = useDispatch();

  const clickHandler = e => {
    e.preventDefault();
    const url = window.location.href;

    const _id = url.split('/').pop();

    dispatch(unSubscribe(_id));
  };

  return (
    <div className={style.wrapper}>
      <div>
        <h3 className={style.unsub_title}>SoYummy newsletter!</h3>
        <p className={style.unsub_text}>
          You see this page, if you were redirected from link in an email
          message.
        </p>
        <p className={style.unsub_text}>
          If you don't want to recive our newsletter emails, click the button
          below
        </p>
        <button className={style.unsub_button} onClick={clickHandler}>
          Don't recieve news
        </button>
      </div>
    </div>
  );
};
