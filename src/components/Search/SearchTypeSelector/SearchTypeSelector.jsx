import React, { useState } from 'react';
import ReactSelect from 'react-select';
import styles from './SearchTypeSelector.module.scss';

const typesList = [{ searchType: 'query' }, { searchType: 'ingredients' }];

const customStyles = {
  menu: (provided) => ({
    ...provided,
    background: "transparent",
  }),
  option: (provided, state) => ({ 
    ...provided,
    backgroundColor: state.isFocused ? '#D9D9D9' : 'white',
    color: state.isFocused ? 'white' : 'black',
  }),
  input: (provided) => ({
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
    background: "#D9D9D9",
    borderRadius: 6,
    borderColor: state.isFocused ? '#8BAA36' : '#CED4DA', // Зміна коліру рамки при наведенні
    boxShadow: state.isFocused ? '0 0 0 2px #8BAA36' : 'none', // Зміна тіні рамки при наведенні
    '&:hover': {
      borderColor: state.isFocused ? '#8BAA36' : '#CED4DA', // Зміна коліру рамки при наведенні
    },
    '@include tablet': {
        width: 175,
        height: 41,
    },
    '@include desktop': {
        width: 192,
        height: 49,
    }
  }),
};

const SearchTypeSelector = () => {
  const [ setSelectedType] = useState('query');

  const handleTypeChange = (selectedOption) => {
    setSelectedType(selectedOption.searchType);
  };

  return (
    <div className={styles.cont_type_select}>
      <label htmlFor="select">Search by:</label>
      <ReactSelect
        className={styles.search_select}
        name="select"
        options={typesList}
        styles={customStyles}
        getOptionLabel={(option) => option.searchType}
        getOptionValue={(option) => option.searchType}
        isSearchable={false}
        onChange={handleTypeChange}
      />
    </div>
  );
};

export default SearchTypeSelector;
