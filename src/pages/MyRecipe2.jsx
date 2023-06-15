import React from 'react';
import style from 'components/RecipeMain/RecipeMain.module.scss';
// import { RecipePageHero } from 'components/RecipeMain/RecipePageHero';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';

import {} from 'redux/simpleReceipt/simpleReceiptSelector';
// import Loader from 'components/Loader/Loader';
import { RecipeIngredientsList } from 'components/RecipeMain/RecipeIngredientsList';
import { RecipePreparation } from 'components/RecipeMain/RecipePreparation';
import { fetchMyOwnRecipe } from 'redux/pipka/pipkaThunk';
import selectMyRecipes from 'redux/pipka/pipkaSelector';
import { RecipePageHeroMy } from 'components/MyownRecipeComponent/RecipePageHeroMy';
import Leaf from 'components/Leaf/Leaf';

const MyRecipe2 = () => {
  const { recipeId } = useParams();
  const dispatch = useDispatch();
  const recipe = useSelector(selectMyRecipes);
  const ingredients = recipe.ingredients;
  const instructions = recipe.instructions;
  const img = recipe.preview



  useEffect(() => {
    dispatch(fetchMyOwnRecipe(recipeId));
  }, [dispatch, recipeId]);

  return (
    <>
      <div className={style.body}>
        <RecipePageHeroMy recipe={recipe} />
        <RecipeIngredientsList ingredients={ingredients} />
        <RecipePreparation instructions={instructions} img={img} />
        <Leaf/>
      </div>
    </>
  );
};

export default MyRecipe2;
