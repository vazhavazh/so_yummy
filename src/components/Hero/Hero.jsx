import React from 'react';

import { HeroTitle } from 'components/HeroTitle/HeroTitle';
import { HeroWrapper } from 'components/HeroWrapper/HeroWrapper';

import { СhooseYourBreakfast } from 'components/СhooseYourBreakfast/СhooseYourBreakfast';
import { Search } from 'components/Search/Search';
import style from '../Hero/Hero.module.scss';

export const Hero = () => {
  return (
    <div className={style.hero}>
      <HeroTitle />
      <HeroWrapper>
        <СhooseYourBreakfast />
        <Search />
      </HeroWrapper>
    </div>
  );
};
