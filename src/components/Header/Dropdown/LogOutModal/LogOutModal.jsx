import style from './LogOutModal.module.scss';
import cross from '../../../../assets/svg/header/cross-2.svg';
import { useDispatch } from 'react-redux';
import { logoutUser } from 'redux/auth/authThunks';

const LogOutModal = ({ isLogOutModalOpen, setIsLogOutModalOpen }) => {
  const dispatch = useDispatch();

  return (
    <div
      onClick={e => e.stopPropagation()}
      className={`${style.modal} ${isLogOutModalOpen ? '' : style.modalHidden}`}
    >
      <button
        onClick={() => setIsLogOutModalOpen(false)}
        className={style.crossBtn}
      >
        <img src={cross} alt="cross" />
      </button>
      <p className={style.warning}>Are you sure you want to log out?</p>
      <div className={style.btnWrapper}>
        <button onClick={() => dispatch(logoutUser)} className={style.yesBtn}>
          Yes
        </button>
        <button
          onClick={() => setIsLogOutModalOpen(false)}
          className={style.noBtn}
        >
          No
        </button>
      </div>
    </div>
  );
};

export default LogOutModal;
