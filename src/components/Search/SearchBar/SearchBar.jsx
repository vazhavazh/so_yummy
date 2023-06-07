import React, { useState} from 'react';
import { toast } from 'react-toastify';
import { useDispatch } from 'react-redux';
import { searchAllIngredients } from 'redux/search/searchThunks';
import SearchForm from '../SearchForm/SearchForm';
import SearchTypeSelector from '../SearchTypeSelector/SearchTypeSelector';
import scss from './SearchBar.module.scss';

const SearchBar = ({ value, onChange, onSearch }) => {
  const [prevSearchValue, setPrevSearchValue] = useState('');

  const dispatch = useDispatch();
  

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
    dispatch(searchAllIngredients);
    console.log("Hi");
};


  // useEffect(() => {
  //   setPrevSearchValue('');
  // }, [value]);

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
