import React, { useState, useEffect } from 'react';
import SearchForm from '../SearchForm/SearchForm';
import SearchTypeSelector from '../SearchTypeSelector/SearchTypeSelector';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import scss from './SearchBar.module.scss';

const SearchBar = ({ value, onChange, onSearch }) => {
  const [prevSearchValue, setPrevSearchValue] = useState('');

  const handleInputChange = (event) => {
    onChange(event);
  };

  const handleSearchFormSubmit = (event) => {
  event.preventDefault();
  
  if (value.trim() === '') {
    toast.warn('Enter your query'); // Отображение предупреждения
    return;
  }
  
  if (prevSearchValue !== value) {
    onSearch();
  }
  setPrevSearchValue(value);
};


  useEffect(() => {
    setPrevSearchValue('');
  }, [value]);

  return (
    <div className={scss.search_bar}>
      <SearchForm
        value={value}
        onChange={handleInputChange}
        onSubmit={handleSearchFormSubmit}
      />
      <SearchTypeSelector/>
    </div>
  );
};

export default SearchBar;
