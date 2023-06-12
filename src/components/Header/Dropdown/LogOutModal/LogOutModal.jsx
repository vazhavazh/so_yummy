import style from './LogOutModal.module.scss';
import { ReactComponent as Cross } from '../../../../assets/svg/header/cross-2.svg';
import { useDispatch } from 'react-redux';
import { logoutUser } from 'redux/auth/authThunks';

const LogOutModal = ({ isLogOutModalOpen, setIsLogOutModalOpen }) => {
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(logoutUser());
  };

  return (
    <div
      onClick={() => setIsLogOutModalOpen(false)}
      className={`${style.backdrop} ${
        isLogOutModalOpen ? '' : style.backdropHidden
      }`}
    >
      <div
        onClick={e => e.stopPropagation()}
        className={`${style.modal} ${
          isLogOutModalOpen ? '' : style.modalHidden
        }`}
      >
        <button
          onClick={() => setIsLogOutModalOpen(false)}
          className={style.crossBtn}
        >
          <Cross className={style.cross} />
        </button>
        <p className={style.warning}>Are you sure you want to log out?</p>
        <div className={style.btnWrapper}>
          <button onClick={handleLogout} className={style.yesBtn}>
            Log out
          </button>
          <button
            onClick={() => setIsLogOutModalOpen(false)}
            className={style.noBtn}
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

export default LogOutModal;
