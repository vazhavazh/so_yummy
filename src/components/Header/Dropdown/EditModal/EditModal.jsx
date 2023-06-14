import style from './EditModal.module.scss';
import { ReactComponent as Cross } from '../../../../assets/svg/header/cross-2.svg';
import { ReactComponent as BlackUser } from '../../../../assets/svg/header/black-user.svg';
// import grayUser from '../../../../assets/svg/header/gray-user.svg';
import plus from '../../../../assets/svg/header/plus.svg';
import edit from '../../../../assets/svg/header/edit.svg';
import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { editUser } from 'redux/auth/authThunks';
import { getUserName, getIsEditModalOpen } from 'redux/auth/authSelectors';
import { toggleEditModal } from 'redux/auth/authSlice';
// import { FileInputField } from 'components/AddRecipeForm/FileInputField';

const EditModal = () => {
  const { avatarURL, name } = useSelector(getUserName);
  const dispatch = useDispatch();

  const [newName, setNewName] = useState('');
  const [newAvatar, setNewAvatar] = useState(null);
  const [avatarImg, setAvatarImg] = useState(null);

  const handleSubmit = e => {
    e.preventDefault();
    dispatch(editUser({ name: newName, avatar: newAvatar }));
  };

  const changeImageAvatar = e => {
    const file = e.target.files[0];

    setNewAvatar(file);

    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setAvatarImg(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const KEY_NAME_ESC = 'Escape';
  const KEY_EVENT_TYPE = 'keyup';

  useEffect(() => {
    setNewName(name);

    document.addEventListener(KEY_EVENT_TYPE, keyboardClose, false);

    return () => {
      document.removeEventListener(KEY_EVENT_TYPE, keyboardClose, false);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [name]);

  function keyboardClose(e) {
    if (e.key === KEY_NAME_ESC) {
      setDefaultValues();
    }
  }

  const isEditModalOpen = useSelector(getIsEditModalOpen);

  const setDefaultValues = () => {
    dispatch(toggleEditModal(false));
    setNewName(name);
    setAvatarImg(null);
  };
  return (
    <div
      onClick={() => {
        setDefaultValues();
      }}
      className={`${style.backdrop} ${
        isEditModalOpen ? '' : style.backdropHidden
      }`}
    >
      <div
        onClick={e => e.stopPropagation()}
        className={`${style.modal} ${isEditModalOpen ? '' : style.modalHidden}`}
      >
        <button
          onClick={() => {
            setDefaultValues();
          }}
          className={style.crossBtn}
        >
          <Cross className={style.cross} />
        </button>
        <form className={style.form}>
          <label htmlFor="avatar" className={style.label}>
            {avatarImg ? (
              <img
                src={avatarImg}
                alt="Avatar Preview"
                className={style.grayUser}
              />
            ) : (
              <>
                <img
                  className={style.grayUser}
                  src={avatarURL}
                  alt="gray user"
                />
              </>
            )}
            <img className={style.plusIcon} src={plus} alt="plus" />
          </label>
          <input
            type="file"
            className={style.fileInput}
            name="avatar"
            id="avatar"
            accept="image/png, image/jpeg"
            placeholder=""
            onChange={changeImageAvatar}
          />

          <div className={style.inputWrapper}>
            <input
              className={style.input}
              type="text"
              // placeholder={name}
              value={newName}
              onChange={e => setNewName(e.target.value)}
              required
            />
            <BlackUser className={style.blackUser} />
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
    </div>
  );
};

export default EditModal;
