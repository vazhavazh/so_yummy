import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

export const fetchPopularRecipes = createAsyncThunk(
  'recipe/popularRecipes',
  async (_, thunkAPI) => {
    try {
      const res = await axios.get('/api/popular-recipes');
        return { data: res.data };
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);