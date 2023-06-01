
import React from 'react';

import style from '../СhooseYourBreakfast/СhooseYourBreakfast.module.scss';

export const СhooseYourBreakfast = () => {
  return (
    <>
      <div className={style.chooseBox}>
        <p className={style.chooseDiscrirtionGreen}>
          Delicious and healthy
          <span className={style.chooseDiscrirtion}>
            way to enjoy a variety of fresh ingredients in one satisfying meal
          </span>
        </p>
        <button className={style.chooseBtn}>
          See recipes
          <svg />
        </button>
      </div>
      <img  className={style.choose} src="#" alt="#" />
    </>
  );
};
