import React from 'react';
// import { useDispatch } from 'react-redux';

import SearchForm from '../SearchForm/SearchForm';
import SearchTypeSelector from '../SearchTypeSelector/SearchTypeSelector';
import scss from './SearchBar.module.scss';

const SearchBar = ({ value, onChange }) => {

  

  const handleInputChange = (event) => {
    onChange(event);
  };

  


  // useEffect(() => {
  //   setPrevSearchValue('');
  // }, [value]);

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
