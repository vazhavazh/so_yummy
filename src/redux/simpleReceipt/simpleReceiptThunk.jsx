import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

export const fetchRecipe = createAsyncThunk(
  'fetchSimpleRecipe/fetchRecipe',
  async (recipeId, { rejectWithValue }) => {
    try {
      const response = await axios.get(`/api/recipes/${recipeId}`);

      return response.data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
