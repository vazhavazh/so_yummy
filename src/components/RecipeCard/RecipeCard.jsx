import React from 'react';

import style from '../RecipeCard/RecipeCard.module.scss';

export const RecipeCard = ({ recipe }) => {
  return (
    <li className={style.recipeEll}>
      <a href="https://www.youtube.com/">
        <img
          className={style.recipeImg}
          src={recipe.preview}
          alt="recipe prewiew"
        />
        <p className={style.recipeTitle}>{recipe.title}</p>
      </a>
    </li>
  );
};
