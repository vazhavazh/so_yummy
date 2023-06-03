import React from 'react';
import SearchBar from '..//components/Search/SearchBar/SearchBar';
import Loader from 'components/Loader/Loader';
// import SearchedRecipesList from '..//components/Search/SearchedRecipesList/SearchedRecipesList';

const Search = () => {
  return (
    <div>
      <h1>Search</h1>
      {/* <MainPageTitle/> */}
      <SearchBar />
      <Loader/>
      {/* <SearchedRecipesList /> */}
    </div>
  )
}

export default Search
