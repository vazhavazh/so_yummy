import React from 'react';
import { Link } from 'react-router-dom';

import { ReactComponent as IconArrow } from '../../assets/svg/mainPage/icon-arrow-rigth.svg';
import dottedArrowImg from '../../assets/image/mainPage/dotted-arrow.png';

import style from '../СhooseYourBreakfast/СhooseYourBreakfast.module.scss';

export const СhooseYourBreakfast = () => {
  return (
    <>
      <div className={style.chooseBox}>
        <p className={style.chooseDiscrirtion}>
          <span className={style.chooseDiscrirtionGreen}>
            Delicious and healthy&nbsp;
          </span> 
          <span>
            way to enjoy a variety of fresh ingredients in one satisfying meal
          </span>
        </p>
        <Link className={style.chooseBtn} to="/categories/Breakfast">
          See recipes
          <IconArrow className={style.chooseSvg} />
        </Link>
        <img
          className={style.chooseImg}
          src={dottedArrowImg}
          alt="dotted arrow"
        />
      </div>
    </>
  );
};
