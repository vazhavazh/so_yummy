import React from 'react';

import { Button } from '../Button/Button';
import { RecipeCard } from '../RecipeCard/RecipeCard';
import recipes from '../../api/fakeApi/fakeFavoriteDBcopy.json';

import style from '../PreviewCategories/PreviewCategories.module.scss';

export const PreviewCategories = () => {
  return (
    <>
      <div className={style.previewCategoriesBox}>
        <ul className={style.previewCategoriesList}>
          <li className={style.previewCategoriesListEll}>
            <p className={style.categoriesName}>Categorie name</p>
            <ul className={style.recipeList}>
              {recipes.map(recipe => (
                <RecipeCard key={recipe._id.$oid} recipe={recipe} />
              ))}
            </ul>
            <Button className={style.seeAllBtn} text="See All" />
          </li>
        </ul>
        <Button className={style.otherCategoriesBtn} text="Other categories" />
      </div>
    </>
  );
};
