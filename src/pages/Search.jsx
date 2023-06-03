import React from 'react';
import SearchBar from '..//components/Search/SearchBar/SearchBar';
// import Loader from 'components/Loader/Loader';
import SearchedRecipesList from '..//components/Search/SearchedRecipesList/SearchedRecipesList';
import scss from './/..//components/Search/SearchBar/SearchBar.module.scss';

const Search = () => {
  return (
    <div className={scss.search_wrapper}>
      <h1>Search</h1>
      {/* <MainPageTitle/> */}
      <SearchBar />
      {/* <Loader/> */}
      <SearchedRecipesList />
    </div>
  )
}

export default Search
