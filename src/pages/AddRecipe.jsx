import React from 'react';
import { AddRecipeForm } from 'components/AddRecipeForm/AddRecipeForm';
import { PopularRecipes } from 'components/PopularRecipes/PopularRecipes';

const AddRecipe = () => {
  return (
    <>
      <AddRecipeForm />
      <PopularRecipes />
    </>
  );
};

export default AddRecipe;
