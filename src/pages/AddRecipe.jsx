import React from 'react';

import { AddRecipeForm } from 'components/AddRecipeForm/AddRecipeForm';
import { PopularRecipes } from 'components/PopularRecipes/PopularRecipes';
import { FollowUs } from 'components/FollowUs/FollowUs';
import { PageTitle } from 'components/PageTitle/PageTitle';

import Leaf from 'components/Leaf/Leaf';
import styles from './styles/AddRecipe.module.scss';

const AddRecipe = () => {
  return (
    <div className={styles.addRecipeMainContainer}>
      <PageTitle className={styles.addRecipeTitle} />
      <div className={styles.addRecipeContainer}>
        <AddRecipeForm />
        <div className={styles.popularAndFollowContainer}>
          <FollowUs />
          <PopularRecipes />
        </div>
      </div>
      <Leaf/>
    </div>
  );
};

export default AddRecipe;
