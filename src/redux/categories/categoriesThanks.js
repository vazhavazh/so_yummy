import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

axios.defaults.baseURL = 'https://so-yummy-mg49.onrender.com';

export const fetchCategories = createAsyncThunk(
  'categories/fetchCategories',
  async (_, { rejectWithValue }) => {
    try {
      const { data } = await axios.get('/api/recipes/category-list');

      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const fetchCurrentCategory = createAsyncThunk(
  'categories/fetchCurrentCategory',
  async (category, { rejectWithValue }) => {
    try {
      const { data } = await axios.get(
        `/api/recipes/category/${category}?recipeLimit=8`
      );
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
