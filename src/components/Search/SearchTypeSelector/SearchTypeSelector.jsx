import React, { useState } from 'react';
import ReactSelect from 'react-select';
import styles from './SearchTypeSelector.module.scss';
import { useDispatch } from 'react-redux';
import { setSelectedTypes } from 'redux/search/searchSlice';

const typesList = [{ searchType: 'query' }, { searchType: 'ingredients' }];

const customStyles = {
  menu: provided => ({
    ...provided,
    background: 'transparent',
  }),
  option: (provided, state) => ({
    ...provided,
    backgroundColor: state.isFocused ? '#D9D9D9' : 'white',
    color: state.isFocused ? 'white' : 'black',
  }),
  input: provided => ({
    ...provided,
    color: '#8BAA36',
  }),
  dropdownIndicator: (provided, state) => ({
    ...provided,
    border: 'none',
    boxShadow: 'none',
    color: '#8BAA36', // Зміна коліру стрілки при наведенні
  }),
  control: (provided, state) => ({
    ...provided,
    height: 34,
    width: 143,
    background: '#D9D9D9',
    borderRadius: 6,
    borderColor: state.isFocused ? '#8BAA36' : '#CED4DA', // Зміна коліру рамки при наведенні
    boxShadow: state.isFocused ? '0 0 0 2px #8BAA36' : 'none', // Зміна тіні рамки при наведенні
    '&:hover': {
      borderColor: state.isFocused ? '#8BAA36' : '#CED4DA', // Зміна коліру рамки при наведенні
    },
  }),
};

const SearchTypeSelector = () => {
  // eslint-disable-next-line
  const [selectedType, setSelectedType] = useState('query');
  const dispatch = useDispatch();

  const handleTypeChange = selectedOption => {
    setSelectedType(selectedOption.searchType);

    dispatch(setSelectedTypes(selectedOption.searchType));
  };

  return (
    <div className={styles.cont_type_select}>
      <label htmlFor="select">Search by:</label>
      <ReactSelect
        className={styles.search_select}
        name="select"
        options={typesList}
        styles={customStyles}
        getOptionLabel={option => option.searchType}
        getOptionValue={option => option.searchType}
        isSearchable={false}
        onChange={handleTypeChange}
        defaultValue={typesList.find(option => option.searchType === 'query')}
      />

    </div>
  );
};

export default SearchTypeSelector;
