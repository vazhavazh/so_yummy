import React from 'react';
import { AddRecipeForm } from 'components/AddRecipeForm/AddRecipeForm';
import { Box } from '@mui/material';

const AddRecipe = () => {
  return (
    <Box width="100%" margin="0 auto" padding="20px">
      <AddRecipeForm />
    </Box>
  );
};

export default AddRecipe;
