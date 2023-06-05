import React from 'react';
import { Box } from '@mui/material';
import CustomTextField from '../TextField';
import { FileInputField } from '../FileInputField';
import Select from '../Select';

export const RecipeDescriptionFields = ({
  isFormSubmitted,
  categories,
  cookingTime,
}) => {
  return (
    <>
      <FileInputField name="file" reset={isFormSubmitted} />

      <CustomTextField name="title" placeholder="Enter item title" />

      <CustomTextField name="about" placeholder="Enter about recipe" />

      <Box
        display="flex"
        flexDirection="column"
        alignItems="flex-end"
        width="100%"
      >
        <Select name="category" label="Category" options={categories} />

        <Select name="cookingTime" label="Cooking time" options={cookingTime} />
      </Box>
    </>
  );
};
