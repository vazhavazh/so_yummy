import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { useChangeScreen } from 'hoc/useChangeScreen';
import { selectRecipeMainPage } from '../../redux/recipes/recipeSelector';
import {
  fetchMainPageRecipe,
  // clearRecipeMainPageState,
} from '../../redux/recipes/recipeThunks';

import { Button } from '../Button/Button';
import { RecipeCard } from '../RecipeCard/RecipeCard';

import style from '../PreviewCategories/PreviewCategories.module.scss';

export const PreviewCategories = () => {
  const recipesByCategories = useSelector(selectRecipeMainPage);
  const dispatch = useDispatch();

  const screenWidthMobile = useChangeScreen(767.9);
  const screenWidthTablet = useChangeScreen(1439.9);

  const numberOfRecipes = recipesByCategories => {
    if (screenWidthMobile) {
      return recipesByCategories.slice(0, 1);
    }
    if (screenWidthTablet) {
      return recipesByCategories.slice(0, 2);
    }

    return recipesByCategories;
  };

  useEffect(() => {
    dispatch(fetchMainPageRecipe());
  }, [dispatch]);

  return (
    <>
      <div className={style.previewCategoriesBox}>
        <ul className={style.previewCategoriesList}>
          {recipesByCategories &&
            recipesByCategories.map(({ category, _id, recipes }) => (
              <li className={style.previewCategoriesListEll} key={_id}>
                <p className={style.categoriesName}>{category}</p>

                <ul className={style.recipeList}>
                  {numberOfRecipes(recipes).map(recipe => (
                    <RecipeCard recipe={recipe} key={recipe._id} />
                  ))}
                </ul>
                <Button
                  className={style.seeAllBtn}
                  text="See All"
                  to={`/categories/${category}`}
                />
              </li>
            ))}
        </ul>
        <Button
          className={style.otherCategoriesBtn}
          text="Other categories"
          to="/categories/Beef"
        />
      </div>
    </>
  );
};
