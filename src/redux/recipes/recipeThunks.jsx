import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

export const fetchMainPageRecipe = createAsyncThunk(
  'recipe/recipeMainPage',
  async (category, thunkAPI) => {
    try {
        const res = await axios.get(`api/recipes/main-page`);
        console.log(res.data);
      return res.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
