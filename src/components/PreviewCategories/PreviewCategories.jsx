import React, { useEffect } from 'react';

import { useChangeScreen } from 'hoc/useChangeScreen';
import { selectRecipeMainPage } from '../../redux/recipes/recipeSelector';
// import {getr}

import { Button } from '../Button/Button';
import { RecipeCard } from '../RecipeCard/RecipeCard';
// import recipes from '../../api/fakeApi/fakeFavoriteDBcopy.json';

import style from '../PreviewCategories/PreviewCategories.module.scss';
import { useDispatch, useSelector } from 'react-redux';
import { fetchMainPageRecipe, clearRecipeMainPageState } from '../../redux/recipes/recipeThunks';

export const PreviewCategories = () => {
  const recipes = useSelector(selectRecipeMainPage);
  const dispatch = useDispatch();

  const screenWidthMobile = useChangeScreen(767.9);
  const screenWidthTablet = useChangeScreen(1439.9);

  console.log(recipes);

  const numberOfRecipes = recipes => {
    if (screenWidthMobile) {
      return recipes.slice(0, 1);
    }
    if (screenWidthTablet) {
      return recipes.slice(0, 2);
    }
    if (window.innerWidth >= 1440) {
      return recipes.slice(0, 4);
    }
    return recipes;
  };

  useEffect(() => {
    dispatch(fetchMainPageRecipe())
  }, [dispatch]);

  return (
    <>
      <div className={style.previewCategoriesBox}>
        <ul className={style.previewCategoriesList}>
          <li className={style.previewCategoriesListEll}>
            <p className={style.categoriesName}>{'recipes.category'}</p>
            {recipes &&
            (<ul className={style.recipeList}>
              
              {numberOfRecipes(recipes).map(recipe => (
                <RecipeCard key={recipe._id.$oid} recipe={recipe} />
              ))}
            </ul>)
              }
            <Button className={style.seeAllBtn} text="See All" />
          </li>
        </ul>
        <Button className={style.otherCategoriesBtn} text="Other categories" to="/categories" />
      </div>
    </>
  );
};
