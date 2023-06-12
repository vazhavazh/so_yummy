import React from 'react';

import { AddRecipeForm } from 'components/AddRecipeForm/AddRecipeForm';
import { PopularRecipes } from 'components/PopularRecipes/PopularRecipes';
import { PageTitle } from 'components/PageTitle/PageTitle';


const AddRecipe = () => {
  return (
    <>

      <PopularRecipes />
      <PageTitle />
      <AddRecipeForm />

    </>
  );
};

export default AddRecipe;
