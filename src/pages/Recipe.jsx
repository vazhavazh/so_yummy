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
import { selectFavoriteReceipts } from 'redux/favoriteReceipts/favoriteReceiptsSelector';
// import Loader from 'components/Loader/Loader';
import { RecipeIngredientsList } from 'components/RecipeMain/RecipeIngredientsList';
import { RecipePreparation } from 'components/RecipeMain/RecipePreparation';
import { fetchAllFavoriteReceipts } from 'redux/favoriteReceipts/favoriteReceiptsThunks';
import Leaf from 'components/Leaf/Leaf';

const Recipe = () => {
  const { recipeId } = useParams();
  const dispatch = useDispatch();
  let query = {
    page: 1,
    limit: 100,
  };
  useEffect(() => {
    dispatch(fetchRecipe(recipeId));
    dispatch(fetchAllFavoriteReceipts(query));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const recipes = useSelector(selectRecipes);
  const ingredients = useSelector(selectIngredients);
  const instructions = useSelector(selectInstructions);
  const img = useSelector(selectImg);
  const favoriteList = useSelector(selectFavoriteReceipts);
  let isFavorite = false;
  if (recipes.length !== 0) {
    isFavorite = favoriteList.some(item => item._id === recipes[0]._id);
  }

  return (
    <>
      <div className={style.body}>
        <RecipePageHero recipes={recipes} isFavorite={isFavorite} />
        <RecipeIngredientsList ingredients={ingredients} />
        <RecipePreparation instructions={instructions} img={img} />
        {/* <RecipeMain></RecipeMain> */}
        <Leaf/>
      </div>
    </>
  );
};

export default Recipe;
