import React from 'react';

import style from '../RecipeCard/RecipeCard.module.scss';

export const RecipeCard = ({ recipe }) => {
  const { title, preview, _id, time, description } = recipe;
  return (
    <li className={style.recipeEll}>
      <a href={`/recipe/${_id.$oid}`}>
        <img className={style.recipeImg} src={preview} alt="recipe prewiew" />
        <p className={style.recipeTitle}>{title}</p>
        <div className={style.recipeOverlay}>
          <p className={style.recipeTime}>{`🕔 ${time} min`}</p>
          <p className={style.recipeText}>{description}</p>
        </div>
      </a>
    </li>
  );
};
