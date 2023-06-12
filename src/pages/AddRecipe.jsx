import React from 'react';

import { AddRecipeForm } from 'components/AddRecipeForm/AddRecipeForm';
import { PopularRecipes } from 'components/PopularRecipes/PopularRecipes';
import { FollowUs } from 'components/FollowUs/FollowUs';
import { PageTitle } from 'components/PageTitle/PageTitle';

const AddRecipe = () => {
  return (
    <>
      <PageTitle />
      <AddRecipeForm />
      <PopularRecipes />
      <FollowUs />
    </>
  );
};

export default AddRecipe;
