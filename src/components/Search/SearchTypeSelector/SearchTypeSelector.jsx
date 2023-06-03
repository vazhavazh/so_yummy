import React from 'react';
import ReactSelect from 'react-select';
import styles from './SearchTypeSelector.module.scss';

const typesList = [{ searchType: 'title' }, { searchType: 'ingredients' }];

const customStyles = {
  dropdownIndicator: (provided) => ({
    ...provided,
    color: '#8BAA36',
    border: 'none',
    boxShadow: 'none',
  }),
  menu: (provided) => ({
    ...provided,
    backgroundColor: 'transparent',
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
    color: state.isFocused ? '#8BAA36' : '#000000', // Зміна коліру стрілки при наведенні
    border: 'none',
    boxShadow: 'none',
  }),
  control: (provided, state) => ({
    ...provided,
    borderColor: state.isFocused ? '#8BAA36' : '#CED4DA', // Зміна коліру рамки при наведенні
    boxShadow: state.isFocused ? '0 0 0 2px #8BAA36' : 'none', // Зміна тіні рамки при наведенні
    '&:hover': {
      borderColor: state.isFocused ? '#8BAA36' : '#CED4DA', // Зміна коліру рамки при наведенні
    },
  }),
};

const SearchTypeSelector = () => {
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
      />
    </div>
  );
};

export default SearchTypeSelector;
