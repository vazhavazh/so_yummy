import React, { useEffect, useState } from 'react';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import style from '..//Search.module.scss';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';

import { selectedQuery } from 'redux/search/searchSelector';

import {
  fetchAllSearchedIngredient,
  fetchAllSearchedTitle,
} from 'redux/search/searchThunks';

const SearchForm = ({ page, limit }) => {
  const [wordQuery, setWordQuery] = useState('');
  const dispatch = useDispatch();
  const query = useSelector(selectedQuery);
  let params = {
    page,
    limit,
    wordQuery,
  };

  useEffect(() => {
    if (wordQuery === '') {
      return;
    }
    if (query === 'query') {
      dispatch(fetchAllSearchedTitle(params));
    } else if (query === 'ingredients') {
      dispatch(fetchAllSearchedIngredient(params));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [page, limit, wordQuery]);

  const location = useLocation();

  const fetchSearchData = () => {
    if (query === 'query') {
      dispatch(fetchAllSearchedTitle(params));
    } else if (query === 'ingredients') {
      dispatch(fetchAllSearchedIngredient(params));
    }
  };

  useEffect(() => {
    const searchParams = new URLSearchParams(location.search);
    const queryFromURL = searchParams.get('query');
    setWordQuery(queryFromURL || '');
  }, [location.search]);

  useEffect(() => {
    if (wordQuery.trim() !== '') {
      fetchSearchData();
    }
  // eslint-disable-next-line 
  }, [wordQuery]);

  const handleSubmit = e => {
    e.preventDefault();

    if (wordQuery.trim() === '') {
      toast.warn('Enter your query');
      return;
    }

    fetchSearchData();
  };

  const handleInputChange = e => {
    setWordQuery(e.target.value);
  };

  return (
    <form className={style.searchBox} onSubmit={handleSubmit}>
      <ToastContainer />
      <input
        className={style.searchInput}
        type="text"
        placeholder="Search recipes..."
        value={wordQuery}
        name="searchInput"
        onChange={handleInputChange}
      />
      <button className={style.searchBtn} type="submit">
        Search
      </button>
    </form>
  );
};

export default SearchForm;