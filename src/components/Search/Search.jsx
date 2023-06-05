import React from 'react';

import { Button } from '../Button/Button';

import style from '../Search/Search.module.scss';

export const Search = () => {
  return (
    <label className={style.searchBox}>
      <input className={style.searchInput} />
      <Button className={style.searchBtn} text="Search" />
    </label>
  );
};
