import React from 'react';

import style from '../RecipeCard/RecipeCard.module.scss';

export const RecipeCard = ({ recipe }) => {
  const { title, preview, _id } = recipe;
  return (
    <li className={style.recipeEll}>
      <a href={`/recipe/${_id.$oid}`}>
        <img
          className={style.recipeImg}
          src={preview}
          alt="recipe prewiew"
        />
        <p className={style.recipeTitle}>{title}</p>
      </a>
    </li>
  );
};
