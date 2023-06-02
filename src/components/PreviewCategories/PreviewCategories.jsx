import React from 'react';

// import { RecipeCard } from '../RecipeCard/RecipeCard';
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
              {recipes.map(({ title, preview }) => (
                <li className={style.recipeEll}>
                  <a href="#">
                    <img
                      className={style.recipeImg}
                      src={preview}
                      alt="recipe prewiew"
                    />
                    <p className={style.recipeTitle}>{title}</p>
                  </a>
                </li>
              ))}
            </ul>
            <button className={style.seeAllBtn}>See All</button>
          </li>

          <li className={style.previewCategoriesListEll}>
            <p className={style.categoriesName}>Categorie name</p>
            <ul className={style.recipeList}>
              {recipes.map(({ title, preview }) => (
                <li className={style.recipeEll}>
                  <a href="#">
                    <img
                      className={style.recipeImg}
                      src={preview}
                      alt="recipe prewiew"
                    />
                    <p className={style.recipeTitle}>{title}</p>
                  </a>
                </li>
              ))}
            </ul>
            <button className={style.seeAllBtn}>See All</button>
          </li>
        </ul>
              <button className={style.otherCategoriesBtn}>Other categories</button>

      </div>
    </>
  );
};
