import React, { useState } from 'react';
import scss from './SearchForm.module.scss';

const SearchForm = ({ onSubmit }) => {
  const [searchValue, setSearchValue] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(searchValue);
  };

  const handleChange = (e) => {
    setSearchValue(e.target.value);
  };

  return (
    <div>
      <form className={scss.search_form} onSubmit={handleSubmit}>
        <input
          placeholder='Enter the next'
          className={scss.search_input}
          type="text"
          value={searchValue}
          onChange={handleChange}
        />
        <button className={scss.search_btn} type="submit">Search</button>
      </form>
    </div>
  );
};

export default SearchForm;
