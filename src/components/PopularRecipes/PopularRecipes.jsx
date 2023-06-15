import React, { useEffect } from 'react';

import { useDispatch, useSelector } from 'react-redux';
import { selectPopularRecipe } from 'redux/popularRecipe/popularSelector';
import { useChangeScreen } from 'hoc/useChangeScreen';

import { fetchPopularRecipes } from 'redux/popularRecipe/popularThunks';

import style from '../PopularRecipes/PopularRecipes.module.scss';

export const PopularRecipes = () => {
  const popularRecipe = useSelector(selectPopularRecipe);
  const dispatch = useDispatch();

  const screenWidthMobile = useChangeScreen(767.9);
  const screenWidthTablet = useChangeScreen(1439.9);

  const numberOfRecipes = popularRecipe => {
    if (screenWidthMobile) {
      return popularRecipe.slice(0, 4);
    }
    if (screenWidthTablet) {
      return popularRecipe.slice(0, 2);
    }

    if (window.innerWidth >= 1440) {
      return popularRecipe.slice(0, 4);
    }

    return popularRecipe;
  };

  const limitLength = (text, limit) => {
    let limitLengthText = text;
    if (limitLengthText.length > limit) {
      limitLengthText = text.slice(0, limit) + '...';
    }
    return limitLengthText;
  };

  useEffect(() => {
    dispatch(fetchPopularRecipes());
  }, [dispatch]);

  return (
    <div className={style.popularContainer}>
      <div className={style.popularBox}>
        <h2 className={style.popularTitle}>Popular recipe</h2>
        <ul className={style.popularList}>
          {numberOfRecipes(popularRecipe).map(
            ({ description, preview, title, _id }) => (
              <li className={style.popularListEll} key={_id}>
                <a
                  className={style.popularEll}
                  href={`/so_yummy/recipe/${_id}`}
                >
                  <img className={style.populaImg} src={preview} alt="title" />
                  <div className={style.popularTextBox}>
                    <p className={style.popularTitleRecipe}>{title}</p>
                    <p className={style.popularDiscrRecipe}>
                      {limitLength(description, 77)}
                    </p>
                  </div>
                </a>
              </li>
            )
          )}
        </ul>
      </div>
    </div>
  );
};
