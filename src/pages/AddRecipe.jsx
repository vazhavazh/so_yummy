import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { selectIngredIentList } from 'redux/ingredientList/ingredientListSelector';
import { fetchAllIngredientList } from 'redux/ingredientList/ingredientListThunk';

import { AddRecipeForm } from 'components/AddRecipeForm/AddRecipeForm';
import { PopularRecipes } from 'components/PopularRecipes/PopularRecipes';
import { FollowUs } from 'components/FollowUs/FollowUs';
import { PageTitle } from 'components/PageTitle/PageTitle';

import Leaf from 'components/Leaf/Leaf';
import styles from './styles/AddRecipe.module.scss';

const AddRecipe = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const element = document.getElementById('ahcnor1');
    if (element) {
      element.scrollIntoView({ block: 'start', behavior: 'smooth' });
    }
    dispatch(fetchAllIngredientList());
  }, [dispatch]);

  const reduxIngredients = useSelector(selectIngredIentList);

  let modifiedIngredients = [];

  if (reduxIngredients.length !== 0) {
    modifiedIngredients = reduxIngredients.map(({ _id, title }) => ({
      value: _id,
      label: title,
    }));
  }

  return (
    <div className={styles.addRecipeMainContainer}>
      <PageTitle className={styles.addRecipeTitle} />
      <div className={styles.addRecipeContainer}>
        {modifiedIngredients.length > 0 && (
          <AddRecipeForm modifiedIngredients={modifiedIngredients} />
        )}
        <div className={styles.popularAndFollowContainer}>
          <FollowUs />
          <PopularRecipes />
        </div>
      </div>
      <Leaf />
    </div>
  );
};

export default AddRecipe;
