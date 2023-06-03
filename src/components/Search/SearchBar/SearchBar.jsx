import React from 'react';
import SearchForm from '../SearchForm/SearchForm';
import SearchTypeSelector from '../SearchTypeSelector/SearchTypeSelector';
import scss from './SearchBar.module.scss';


const SearchBar = () => {
  return (
      <div className={scss.search_bar}>
          <SearchForm />
          <SearchTypeSelector/>
    </div>
  )
}

export default SearchBar
