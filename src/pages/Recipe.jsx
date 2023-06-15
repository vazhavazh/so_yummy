import React from 'react';
import style from 'components/RecipeMain/RecipeMain.module.scss';
import { RecipePageHero } from 'components/RecipeMain/RecipePageHero';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { fetchRecipe } from 'redux/simpleReceipt/simpleReceiptThunk';
import {
  selectImg,
  selectIngredients,
  selectInstructions,
  selectRecipes,
} from 'redux/simpleReceipt/simpleReceiptSelector';
// import Loader from 'components/Loader/Loader';
import { RecipeIngredientsList } from 'components/RecipeMain/RecipeIngredientsList';
import { RecipePreparation } from 'components/RecipeMain/RecipePreparation';
import Leaf from 'components/Leaf/Leaf';

const Recipe = () => {
  const { recipeId } = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchRecipe(recipeId));
  }, [dispatch, recipeId]);

  const recipes = useSelector(selectRecipes);
  const ingredients = useSelector(selectIngredients);
  const instructions = useSelector(selectInstructions);
  const img = useSelector(selectImg);




  
  return (
    <>
      <div className={style.body}>
        <RecipePageHero recipes={recipes} />
        <RecipeIngredientsList ingredients={ingredients} />
        <RecipePreparation instructions={instructions} img={img} />
        {/* <RecipeMain></RecipeMain> */}
        <Leaf/>
      </div>
    </>
  );
};

export default Recipe;
