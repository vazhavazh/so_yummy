import React from 'react';

import SearchForm from '../SearchForm/SearchForm';
import SearchTypeSelector from '../SearchTypeSelector/SearchTypeSelector';
import scss from './SearchBar.module.scss';

const SearchBar = ({ value, onChange }) => {
  const handleInputChange = (event) => {
    onChange(event);
  };

  return (
    <div className={scss.search_bar}>
      <SearchForm
        value={value}
        onChange={handleInputChange}
        
      />
      <SearchTypeSelector/>
    </div>
  );
};

export default SearchBar;
