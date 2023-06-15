import React from 'react';
import style from 'components/RecipeMain/RecipeMain.module.scss';
import { PageTitle } from 'components/PageTitle/PageTitle';
import MySVGComponent from '../RecipeMain/MySVGComponent';

export const RecipePageHeroMy = ({ recipe }) => {
  return (
    <>
      <div className={style.hero} key={recipe._id}>
        <PageTitle recipeTitle={recipe.title} />
        <p className={style.hero__text}>{recipe.description}</p>

        <div className={style.hero__clock}>
          <MySVGComponent className={style.svg} />
          <p className={style.hero__time}>{recipe.time} min</p>
        </div>
      </div>
    </>
  );
};
