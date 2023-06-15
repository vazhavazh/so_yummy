import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';
import SearchBar from '../components/Search/SearchBar/SearchBar';
import SearchedRecipesList from 'components/Search/SearchedRecipesList/SearchedRecipesList';
import scss from '../components/Search/SearchBar/SearchBar.module.scss';
import { PageTitle } from 'components/PageTitle/PageTitle';
import { selectTotalPages } from 'redux/search/searchSelector';
import { Pagination } from '../../src/components/Pagination/Pagination';
import Leaf from 'components/Leaf/Leaf';

const Search = () => {
  const totalPages = useSelector(selectTotalPages);
  const [page, setPage] = useState(1);
  const [limit, setLimit] = useState(12);

  const location = useLocation();

  const [searchValue, setSearchValue] = useState('');
  const [searchSubmitted, setSearchSubmitted] = useState(false);
  const [submittedSearchValue, setSubmittedSearchValue] = useState('');
  const mediaQuery = window.matchMedia('(max-width: 1440px)');

  useEffect(() => {
    // Проверяем разрешение экрана и устанавливаем дефолтное значение состояния
    setLimit(mediaQuery.matches ? 6 : 12);

    // Слушаем изменения разрешения экрана и обновляем состояние при необходимости
    const handleResize = () => {
      setLimit(mediaQuery.matches ? 6 : 12);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [mediaQuery]);

  const onChangePage = currentPage => {
    if (currentPage !== '...') {
      const number = Number(currentPage);

      const element = document.getElementById('ahcnor1');
      if (element) {
        element.scrollIntoView({ block: 'start', behavior: 'smooth' });
      }

      setPage(number);
    }
  };

  const handleSearchInputChange = event => {
    setSearchValue(event.target.value);
  };

  const handleSearch = () => {
    setSearchSubmitted(true);
  };

  useEffect(() => {
    if (location.state === 'footer') {
      setSubmittedSearchValue('ingredients');
    }
  }, [location.state]);

  useEffect(() => {
    if (searchSubmitted) {
      setSubmittedSearchValue(searchValue);
    }
  }, [searchSubmitted, searchValue]);

  const inlineStyles = {
    display: `flex`,
    justifyContent: `center`,
    margin: '0 auto',
  };

  return (
    <div className={scss.search_wrapper}>
      <PageTitle />
      <SearchBar
        page={page}
        limit={limit}
        value={searchValue}
        onChange={handleSearchInputChange}
        onSearch={handleSearch}
      />
      <SearchedRecipesList
        searchValue={submittedSearchValue}
        key={submittedSearchValue}
      />
      {totalPages !== 1 && totalPages && (
        <div style={inlineStyles}>
          <Pagination
            totalPages={totalPages}
            currentpage={page}
            onChangePage={onChangePage}
          />
        </div>
      )}
      <Leaf/>
    </div>
  );
};

export default Search;
