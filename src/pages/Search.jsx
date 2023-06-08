import React, { useState, useEffect } from 'react';
import SearchBar from '../components/Search/SearchBar/SearchBar';
import SearchedRecipesList from '../components/Search/SearchedRecipesList/SearchedRecipesList';
import scss from '../components/Search/SearchBar/SearchBar.module.scss';
import img from '../assets/image/searchPage/kisspng-vegetable.webp';
import {TestComponent} from 'components/Search/TestComponent'

const Search = () => {
  const [searchValue, setSearchValue] = useState('');
  const [searchSubmitted, setSearchSubmitted] = useState(false);
  const [submittedSearchValue, setSubmittedSearchValue] = useState('');

  const handleSearchInputChange = event => {
    setSearchValue(event.target.value);
  };

  const handleSearch = () => {
    setSearchSubmitted(true);
  };

  useEffect(() => {
    if (searchSubmitted) {
      setSubmittedSearchValue(searchValue);
    }
  }, [searchSubmitted, searchValue]);

  return (
    <div className={scss.search_wrapper}>
      <h1>Search</h1>
      <SearchBar
        value={searchValue}
        onChange={handleSearchInputChange}
        onSearch={handleSearch}
      />
      {searchSubmitted && submittedSearchValue !== '' ? (
        <SearchedRecipesList
          searchValue={submittedSearchValue}
          key={submittedSearchValue}
        />
      ) : (
        <div className={scss.searchLookingWrapper}>
          <img src={img} alt="images" />
          <p>Try looking for something else...</p>
        </div>
      )}

      <TestComponent />
    </div>
  );
};

export default Search;
