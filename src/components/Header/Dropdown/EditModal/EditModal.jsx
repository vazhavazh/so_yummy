import style from './EditModal.module.scss';
import cross from '../../../../assets/svg/header/cross-2.svg';
import grayUser from '../../../../assets/svg/header/gray-user.svg';
import blackUser from '../../../../assets/svg/header/black-user.svg';
import plus from '../../../../assets/svg/header/plus.svg';
import edit from '../../../../assets/svg/header/edit.svg';

const EditModal = ({ isEditModalOpen, setIsEditModalOpen }) => {
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
      <button className={style.avatarBtn}>
        <img className={style.grayUser} src={grayUser} alt="gray user" />
        <img className={style.plusIcon} src={plus} alt="plus" />
      </button>
      <div className={style.inputWrapper}>
        <input className={style.input} type="text" placeholder="Name" />
        <img className={style.blackUser} src={blackUser} alt="gray user" />
        <img className={style.editIcon} src={edit} alt="pencil" />
      </div>
      <button type="submit" className={style.submitBtn}>
        Save changes
      </button>
    </div>
  );
};

export default EditModal;
