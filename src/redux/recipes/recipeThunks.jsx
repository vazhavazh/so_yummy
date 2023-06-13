import axios from 'axios';
import { createAsyncThunk, createAction } from '@reduxjs/toolkit';

export const fetchMainPageRecipe = createAsyncThunk(
  'recipe/recipeMainPage',
  async (category, thunkAPI) => {
    try {
      const res = await axios.get(`api/recipes/main-page`);
      return { data: res.data };
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const clearRecipeMainPageState = createAction(
  'recipe/clear-recipe-main-page'
);
