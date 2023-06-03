import React from 'react';

import style from '../HeroWrapper/HeroWrapper.module.scss';


export const HeroWrapper = ({ children }) => {
  return (
    <div className={style.heroWrapper}>
{children}
    </div>
  );
};
