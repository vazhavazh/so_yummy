import style from './Unsubscribe.module.scss';
import { useDispatch } from 'react-redux';
import { unSubscribe } from 'redux/subscribe/subThunk';

export const Unsubscribe = () => {
  const dispatch = useDispatch();

  const clickHandler = e => {
    e.preventDefault();
    const urlParams = new URLSearchParams(window.location.search);
    const _id = urlParams.get('_id');
    dispatch(unSubscribe(_id));
  };

  return (
    <div className={style.wrapper}>
      <div>
        <h3>SoYummy newsletter!</h3>
        <p>
          You see this page, if you were redirected from link in email message.
        </p>
        <p>
          If you don't want to recived our newsletter emails, click the button
          below
        </p>
        <button onClick={clickHandler}>Don't recieve news</button>
      </div>
    </div>
  );
};
