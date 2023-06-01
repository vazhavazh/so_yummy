import React from 'react';

import { ReactComponent as IconArrow } from '../../assets/svg/mainPage/icon-arrow-rigth.svg';

import style from '../СhooseYourBreakfast/СhooseYourBreakfast.module.scss';

export const СhooseYourBreakfast = () => {
  return (
    <>
      <div className={style.chooseBox}>
        <p className={style.chooseDiscrirtion}>
          <span className={style.chooseDiscrirtionGreen}>
            Delicious and healthy{' '}
          </span>
          <span>
            way to enjoy a variety of fresh ingredients in one satisfying meal
          </span>
        </p>
        <button className={style.chooseBtn}>
          See recipes
          <IconArrow />
        </button>
      </div>
      <img className={style.chooseImg} src="../../assets/image/mainPage/dotted-arrow.png" alt="#" />
    </>
  );
};
