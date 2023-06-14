import React from 'react';

import style from '../RecipeCard/RecipeCard.module.scss';
import { ReactComponent as IconTime } from '../../assets/svg/mainPage/icon-time.svg';
import { NavLink } from 'react-router-dom';

export const RecipeCard = ({ recipe }) => {
  const { title, preview, _id, time, description } = recipe;
  return (
    <li className={style.recipeEll}>
      {/* <a href={`so_yummy/recipe/${_id}`}> */}
      <NavLink to={`/recipe/${_id}`}>
        <img className={style.recipeImg} src={preview} alt="recipe prewiew" />
        <p className={style.recipeTitle}>{title}</p>
        <div className={style.recipeOverlay}>
          <p className={style.recipeTime}>
            <IconTime className={style.recipeClock} />
            {`${time} min`}
          </p>
          <p className={style.recipeText}>{description}</p>
        </div>
      </NavLink>
      {/* </a> */}
    </li>
  );
};
