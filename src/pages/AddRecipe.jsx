import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { selectIngredIentList } from 'redux/ingredientList/ingredientListSelector';
import { fetchAllIngredientList } from 'redux/ingredientList/ingredientListThunk';

import { AddRecipeForm } from 'components/AddRecipeForm/AddRecipeForm';
import { PopularRecipes } from 'components/PopularRecipes/PopularRecipes';
import { FollowUs } from 'components/FollowUs/FollowUs';
import { PageTitle } from 'components/PageTitle/PageTitle';

import styles from './styles/AddRecipe.module.scss';

const AddRecipe = () => {
  const dispatch = useDispatch();

  const [ingredients, setIngredients] = useState([]);

  useEffect(() => {
    dispatch(fetchAllIngredientList());
    setIngredients(reduxIngredients);
  }, [dispatch]);

  const reduxIngredients = useSelector(selectIngredIentList);

  let modifiedIngredients = [];

  if (reduxIngredients.length !== 0) {
    modifiedIngredients = reduxIngredients.map(({ _id, title }) => ({
      value: _id,
      label: title,
    }));
  }

  console.log('modified ingredients', modifiedIngredients);

  return (
    <div className={styles.addRecipeMainContainer}>
      <PageTitle className={styles.addRecipeTitle} />
      <div className={styles.addRecipeContainer}>
        <AddRecipeForm modifiedIngredients={modifiedIngredients} />
        <div className={styles.popularAndFollowContainer}>
          <FollowUs />
          <PopularRecipes />
        </div>
      </div>
    </div>
  );
};

export default AddRecipe;
