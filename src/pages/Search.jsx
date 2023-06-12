import React, { useState, useEffect } from 'react';
import SearchBar from '../components/Search/SearchBar/SearchBar';
import SearchedRecipesList from 'components/Search/SearchedRecipesList/SearchedRecipesList';
import scss from '../components/Search/SearchBar/SearchBar.module.scss';
import { PageTitle } from 'components/PageTitle/PageTitle';

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
      <PageTitle />
      <SearchBar
        value={searchValue}
        onChange={handleSearchInputChange}
        onSearch={handleSearch}
      />
        <SearchedRecipesList
          searchValue={submittedSearchValue}
          key={submittedSearchValue}
        />
    </div>
  );
};

export default Search;
