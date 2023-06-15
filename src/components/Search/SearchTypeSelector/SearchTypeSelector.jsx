import React, { useState } from 'react';
import ReactSelect from 'react-select';
import styles from './SearchTypeSelector.module.scss';
import { useDispatch, useSelector } from 'react-redux';
import { setSelectedTypes } from 'redux/search/searchSlice';
import { selectFromFooter } from 'redux/search/searchSelector';

const typesList = [{ searchType: 'title' }, { searchType: 'ingredients' }];

const customStyles = {
  singleValue: provided => ({
    ...provided,
    color: 'var(--mainTextColor)', // Цвет текста для выбранного значения
  }),
  menu: provided => ({
    ...provided,
    background: 'transparent', // Фон выпадающего меню
  }),
  option: (provided, state) => ({
    ...provided,
    backgroundColor: state.isFocused ? '#8BAA36' : 'white', // Фон опций в зависимости от состояния фокуса
    color: state.isFocused ? 'white' : 'black', // Цвет текста опций в зависимости от состояния фокуса
  }),
  input: provided => ({
    ...provided,
    color: '#8BAA36', // Цвет текста ввода
  }),
  dropdownIndicator: (provided, state) => ({
    ...provided,
    border: 'none',
    boxShadow: 'none',
    color: '#8BAA36', // Цвет стрелки выпадающего меню при наведении
  }),
  control: (provided, state) => ({
    ...provided,
    height: 34,
    width: 143,
    background: 'var(--greyToBlack)', // Фон контейнера селектора
    borderRadius: 6,
    borderColor: state.isFocused ? '#8BAA36' : '#CED4DA', // Цвет границы контейнера при наведении
    boxShadow: state.isFocused ? '0 0 0 2px #8BAA36' : 'none', // Тень границы контейнера при наведении
    '&:hover': {
      borderColor: state.isFocused ? '#8BAA36' : '#CED4DA', // Цвет границы контейнера при наведении
    },
  }),
};

const SearchTypeSelector = () => {
  const dispatch = useDispatch();

  const fromFooter = useSelector(selectFromFooter);

  // eslint-disable-next-line
  const [selectedType, setSelectedType] = useState('');

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
        defaultValue={
          fromFooter
            ? typesList.find(option => option.searchType === 'ingredients')
            : typesList.find(option => option.searchType === 'title')
        }
      />
    </div>
  );
};

export default SearchTypeSelector;