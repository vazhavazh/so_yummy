import React from 'react';
import { Button } from '..//..//Button/Button';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import style from '..//Search.module.scss';

const SearchForm = ({ value, onChange, onSubmit }) => {
  const handleInputChange = (event) => {
    onChange(event);
  };

  return (
    <form className={style.searchBox} onSubmit={onSubmit}>
    <ToastContainer />
    <input
      className={style.searchInput}
      type='text'
      placeholder="Search recipes..."
      value={value}
      onChange={handleInputChange}
    />
    <Button className={style.searchBtn} text="Search" type="submit" />
  </form>
  );
};

export default SearchForm;
