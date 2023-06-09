import React from 'react';
import { AddRecipeForm } from 'components/AddRecipeForm/AddRecipeForm';
import { Box } from '@mui/material';
import { MainTitle } from 'components/MainTitle/MainTitle';

const AddRecipe = () => {
  return (
    <Box width="100%" margin="50px auto" padding="20px">
      <MainTitle text="Add recipe" />
      <AddRecipeForm />
    </Box>
  );
};

export default AddRecipe;
