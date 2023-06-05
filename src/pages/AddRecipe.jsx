import React from 'react';
import { AddRecipeForm } from 'components/AddRecipeForm/AddRecipeForm';
import { MainTitle } from 'components/MainTitle';
import { Box } from '@mui/material';

const AddRecipe = () => {
  return (
    <Box display="flex" flexDirection="column">
      <MainTitle title="Add recipe" />
      <AddRecipeForm />
    </Box>
  );
};

export default AddRecipe;
