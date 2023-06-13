import { RecipeMain } from 'components/RecipeMain/RecipeMain';
import React from 'react';
import style from 'components/RecipeMain/RecipeMain.module.scss';
import { RecipePageHero } from 'components/RecipeMain/RecipePageHero';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { fetchRecipe } from 'redux/simpleReceipt/simpleReceiptThunk';
import {
  selectIngredients,
  selectRecipes,
} from 'redux/simpleReceipt/simpleReceiptSelector';
// import Loader from 'components/Loader/Loader';
import { RecipeIngredientsList } from 'components/RecipeMain/RecipeIngredientsList';

const Recipe = () => {
  const { recipeId } = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchRecipe(recipeId));
  }, [dispatch, recipeId]);

  const recipes = useSelector(selectRecipes);
  const ingredients = useSelector(selectIngredients);
  console.log(recipes);

  return (
    <>
      <div className={style.body}>
        <RecipePageHero recipes={recipes} />
        <RecipeIngredientsList ingredients={ingredients} />
        <RecipeMain></RecipeMain>
      </div>
    </>
  );
};

export default Recipe;
