import React from 'react';
import style from 'components/RecipeMain/RecipeMain.module.scss';
import { RecipePageHero } from 'components/RecipeMain/RecipePageHero';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { fetchRecipe } from 'redux/simpleReceipt/simpleReceiptThunk';
import {
  selectIngredients,
  selectInstructions,
  selectRecipes,
} from 'redux/simpleReceipt/simpleReceiptSelector';
// import Loader from 'components/Loader/Loader';
import { RecipeIngredientsList } from 'components/RecipeMain/RecipeIngredientsList';
import { RecipePreparation } from 'components/RecipeMain/RecipePreparation';

const Recipe = () => {
  const { recipeId } = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchRecipe(recipeId));
  }, [dispatch, recipeId]);

  const recipes = useSelector(selectRecipes);
  const sIngredients = useSelector(selectIngredients);
  const instructions = useSelector(selectInstructions);
 console.log(sIngredients);
  // console.log(instructions)
  // console.log(recipes);




  
  return (
    <>
      <div className={style.body}>
        <RecipePageHero recipes={recipes} />
        <RecipeIngredientsList ingredients={sIngredients} />
        <RecipePreparation instructions={instructions} />
        {/* <RecipeMain></RecipeMain> */}
      </div>
    </>
  );
};

export default Recipe;
