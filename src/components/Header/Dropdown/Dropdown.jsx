import style from './Dropdown.module.scss';
import { ReactComponent as Edit } from '../../../assets/svg/header/edit.svg';
import arrow from '../../../assets/svg/header/arrow.svg';
import { useState } from 'react';
import EditModal from './EditModal/EditModal';
import LogOutModal from './LogOutModal/LogOutModal';
import { createPortal } from 'react-dom';
import { useEffect } from 'react';

const Dropdown = ({ isDropdownActive, setIsDropdownActive }) => {
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [isLogOutModalOpen, setIsLogOutModalOpen] = useState(false);

  const KEY_NAME_ESC = 'Escape';
  const KEY_EVENT_TYPE = 'keyup';

  useEffect(() => {
    document.addEventListener(KEY_EVENT_TYPE, handleClose, false);

    return () => {
      document.removeEventListener(KEY_EVENT_TYPE, handleClose, false);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  function handleClose(e) {
    if (e.key === KEY_NAME_ESC) {
      setIsDropdownActive(false);
    }
  }

  return (
    <div
      onClick={() => {
        setIsDropdownActive(false);
        setIsLogOutModalOpen(false);
        setIsEditModalOpen(false);
      }}
      className={`${style.dropdown} ${
        isDropdownActive ? '' : style.dropdownHidden
      }`}
    >
      <div className={style.dropdownContent} onClick={e => e.stopPropagation()}>
        <button
          onClick={() => {
            setIsLogOutModalOpen(false);
            setIsDropdownActive(false);
            setIsEditModalOpen(true);
          }}
          className={style.editBtn}
        >
          Edit profile
          <Edit className={style.editIcon} />
        </button>
        <button
          onClick={() => {
            setIsLogOutModalOpen(true);
            setIsEditModalOpen(false);
            setIsDropdownActive(false);
          }}
          className={style.logOutBtn}
        >
          Log out
          <img className={style.arrowIcon} src={arrow} alt="arrow" />
        </button>
      </div>
      {createPortal(
        <EditModal
          isEditModalOpen={isEditModalOpen}
          setIsEditModalOpen={setIsEditModalOpen}
        />,
        document.querySelector('#portal')
      )}
      {createPortal(
        <LogOutModal
          setIsLogOutModalOpen={setIsLogOutModalOpen}
          isLogOutModalOpen={isLogOutModalOpen}
        />,
        document.querySelector('#portal')
      )}
    </div>
  );
};

export default Dropdown;
