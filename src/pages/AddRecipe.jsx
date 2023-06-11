import React from 'react';
import { AddRecipeForm } from 'components/AddRecipeForm/AddRecipeForm';
import { PageTitle } from 'components/PageTitle/PageTitle';

const AddRecipe = () => {
  return (
    <>
      <PageTitle />
      <AddRecipeForm />
    </>
  );
};

export default AddRecipe;
