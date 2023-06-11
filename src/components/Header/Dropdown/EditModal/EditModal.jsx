import style from './EditModal.module.scss';
import cross from '../../../../assets/svg/header/cross-2.svg';
import grayUser from '../../../../assets/svg/header/gray-user.svg';
import blackUser from '../../../../assets/svg/header/black-user.svg';
import plus from '../../../../assets/svg/header/plus.svg';
import edit from '../../../../assets/svg/header/edit.svg';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { editUser } from 'redux/auth/authThunks';
import { getUserName } from 'redux/auth/authSelectors';

const EditModal = ({ isEditModalOpen, setIsEditModalOpen }) => {
  const dispatch = useDispatch();
  const [newName, setNewName] = useState('');
  const [newAvatar, setNewAvatar] = useState(null);

  let { name } = useSelector(getUserName);

  const handleSubmit = e => {
    e.preventDefault();
    dispatch(editUser({ name: newName, avatar: newAvatar }));
  };

  return (
    <div
      onClick={e => e.stopPropagation()}
      className={`${style.modal} ${isEditModalOpen ? '' : style.modalHidden}`}
    >
      <button
        onClick={() => setIsEditModalOpen(false)}
        className={style.crossBtn}
      >
        <img className={style.cross} src={cross} alt="cross" />
      </button>
      <form className={style.form}>
        <label htmlFor="avatar" className={style.label}>
          <img className={style.grayUser} src={grayUser} alt="gray user" />
          <img className={style.plusIcon} src={plus} alt="plus" />
        </label>
        <input
          type="file"
          className={style.fileInput}
          name="avatar"
          id="avatar"
          accept="image/png, image/jpeg"
          placeholder=""
          onChange={e => setNewAvatar(e.target.value)}
        />

        <div className={style.inputWrapper}>
          <input
            className={style.input}
            type="text"
            placeholder={name}
            onChange={e => setNewName(e.target.value)}
          />
          <img className={style.blackUser} src={blackUser} alt="gray user" />
          <img className={style.editIcon} src={edit} alt="pencil" />
        </div>
        <button
          type="submit"
          onClick={handleSubmit}
          className={style.submitBtn}
        >
          Save changes
        </button>
      </form>
    </div>
  );
};

export default EditModal;
