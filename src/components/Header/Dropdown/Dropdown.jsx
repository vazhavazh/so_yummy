import style from './Dropdown.module.scss';
import edit from '../../../assets/svg/header/edit.svg';
import arrow from '../../../assets/svg/header/arrow.svg';
import { useState } from 'react';
import EditModal from './EditModal/EditModal';
import LogOutModal from './LogOutModal/LogOutModal';

const Dropdown = ({ isDropdownActive, setIsDropdownActive }) => {
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [isLogOutModalOpen, setIsLogOutModalOpen] = useState(false);

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
            setIsEditModalOpen(true);
          }}
          className={style.editBtn}
        >
          Edit profile
          <img className={style.editIcon} src={edit} alt="pencil" />
        </button>
        <button
          onClick={() => {
            setIsLogOutModalOpen(true);
            setIsEditModalOpen(false);
          }}
          className={style.logOutBtn}
        >
          Log out
          <img className={style.arrowIcon} src={arrow} alt="arrow" />
        </button>
      </div>
      <EditModal
        isEditModalOpen={isEditModalOpen}
        setIsEditModalOpen={setIsEditModalOpen}
      />
      <LogOutModal
        setIsLogOutModalOpen={setIsLogOutModalOpen}
        isLogOutModalOpen={isLogOutModalOpen}
      />
    </div>
  );
};

export default Dropdown;
