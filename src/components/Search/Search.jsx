import React from 'react';
  import { toast } from 'react-toastify';

import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import style from '../Search/Search.module.scss';

export const Search = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const navigate = useNavigate();

  const handleChange = e => {
    setSearchQuery(e.target.value);
  };

  const handleSubmit = e => {
    e.preventDefault();
    if (!searchQuery) {

      return toast.warn('Enter your query');
    }
    if (searchQuery) {
      navigate(`/search?query=${searchQuery}`);
    }
  };

  return (
    
    <form className={style.searchBox} onSubmit={handleSubmit}>
      
      <input
        className={style.searchInput}
        value={searchQuery}
        onChange={handleChange}
        placeholder="Search recipe..."
      />
      <button className={style.searchBtn} type="submit">
        Search
      </button>
    </form>
  );
};
