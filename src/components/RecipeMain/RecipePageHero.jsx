import React, { useState } from 'react';
import style from 'components/RecipeMain/RecipeMain.module.scss';
import { PageTitle } from 'components/PageTitle/PageTitle';
import MySVGComponent from './MySVGComponent';
import { useDispatch, useSelector } from 'react-redux';
import { fetchUpdateFavoriteReceipts } from 'redux/favoriteReceipts/favoriteReceiptsThunks';
import { selectUserId } from 'redux/auth/authSelectors';
import { listOfFavorites } from 'redux/simpleReceipt/simpleReceiptSelector';

export const RecipePageHero = ({ recipes }) => {
  const listOfFavorite = useSelector(listOfFavorites);
  const userId = useSelector(selectUserId);
  const dispatch = useDispatch();
  const [favorite, setFavorite] = useState(listOfFavorite.includes(userId));

  const handleUpdateFavoriteReceipt = async receiptId => {
    try {
      await dispatch(fetchUpdateFavoriteReceipts(receiptId));
      setFavorite(!favorite);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      {recipes &&
        recipes.map(recipe => {

          return (
            <div className={style.hero} key={recipe._id}>
              <PageTitle recipeTitle={recipe.title} />
              <p className={style.hero__text}>{recipe.description}</p>
              <button
                className={style.hero__button}
                type="button"
                onClick={() => handleUpdateFavoriteReceipt(recipe._id)}
              >
                {favorite
                  ? 'Delete from favorite recipes'
                  : 'Add to favorite recipes'}
              </button>

              <div className={style.hero__clock}>
                <MySVGComponent className={style.svg} />
                <p className={style.hero__time}>{recipe.time} min</p>
              </div>
            </div>
          );
        })}

   
    </>
  );
};
